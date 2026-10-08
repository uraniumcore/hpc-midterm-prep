// HPC Midterm Prep Application
// Features: Dynamic question/option shuffling, Practice mode, Exam simulator, Flashcards, Searchable list

(function() {
  'use strict';

  // --- STATE ---
  const state = {
    allQuestions: [],
    questions: [],
    currentPracticeIndex: 0,
    currentExamIndex: 0,
    currentFlashcardIndex: 0,
    activeTab: 'practice',
    activeTopic: 'all',
    shuffleQuestions: true,
    shuffleOptions: true,
    starredIds: new Set(),
    practiceAnswers: {}, // { [questionId]: { selectedText: string, isCorrect: boolean } }
    examAnswers: {}, // { [questionId]: selectedText }
    examActive: false,
    examTimeRemaining: 45 * 60, // 45 minutes
    examTimerId: null,
    examSubmitted: false,
    soundEnabled: true,
    theme: 'dark'
  };

  // --- AUDIO SYNTHESIZER (Web Audio API) ---
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSound(type) {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now); // A3
        osc.frequency.setValueAtTime(180, now + 0.12);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'shuffle') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.15);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.start(now);
        osc.stop(now + 0.2);
      }
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  }

  // --- UTILS: SHUFFLING ---
  function fisherYatesShuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Prepares a question for display: copies options and conditionally shuffles them
  function prepareQuestionOptions(q, shuffleOpts) {
    let options = q.options.map(opt => ({ ...opt }));
    if (shuffleOpts) {
      options = fisherYatesShuffle(options);
    }
    // Re-assign display letters A, B, C, D, E based on current position
    const letters = ['A', 'B', 'C', 'D', 'E'];
    return options.map((opt, idx) => ({
      ...opt,
      displayLetter: letters[idx] || String.fromCharCode(65 + idx)
    }));
  }

  // Load from local storage
  function loadPersistedState() {
    try {
      const savedStarred = localStorage.getItem('hpc_starred');
      if (savedStarred) {
        state.starredIds = new Set(JSON.parse(savedStarred));
      }
      const savedTheme = localStorage.getItem('hpc_theme');
      if (savedTheme) {
        state.theme = savedTheme;
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
      const savedSound = localStorage.getItem('hpc_sound');
      if (savedSound !== null) {
        state.soundEnabled = savedSound === 'true';
      }
      const savedAnswers = localStorage.getItem('hpc_practice_answers');
      if (savedAnswers) {
        state.practiceAnswers = JSON.parse(savedAnswers);
      }
    } catch (e) {
      console.warn('Could not read localStorage', e);
    }
  }

  function savePersistedState() {
    try {
      localStorage.setItem('hpc_starred', JSON.stringify([...state.starredIds]));
      localStorage.setItem('hpc_theme', state.theme);
      localStorage.setItem('hpc_sound', String(state.soundEnabled));
      localStorage.setItem('hpc_practice_answers', JSON.stringify(state.practiceAnswers));
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }

  // --- INITIALIZATION ---
  function initData() {
    if (typeof QUESTIONS_DATA !== 'undefined' && Array.isArray(QUESTIONS_DATA)) {
      state.allQuestions = QUESTIONS_DATA.map(q => ({
        ...q,
        // Cache display options so shuffled order stays stable during navigation until reshuffle
        currentOptions: prepareQuestionOptions(q, state.shuffleOptions)
      }));
    } else {
      console.error('QUESTIONS_DATA not loaded!');
      return;
    }

    applyFilteringAndShuffling();
    updateStarredCount();
    updateThemeUI();
    updateSoundUI();
    renderCurrentPracticeQuestion();
    renderExamGrid();
  }

  function applyFilteringAndShuffling() {
    let pool = [...state.allQuestions];

    // Filter by topic
    if (state.activeTopic === 'starred') {
      pool = pool.filter(q => state.starredIds.has(q.id));
    } else if (state.activeTopic !== 'all') {
      pool = pool.filter(q => q.topic === state.activeTopic);
    }

    // Shuffle questions
    if (state.shuffleQuestions) {
      pool = fisherYatesShuffle(pool);
    } else {
      // Sort in original ID order
      pool.sort((a, b) => a.id - b.id);
    }

    // Refresh option shuffling for all questions in pool
    pool.forEach(q => {
      q.currentOptions = prepareQuestionOptions(q, state.shuffleOptions);
    });

    state.questions = pool;
    state.currentPracticeIndex = 0;
    state.currentExamIndex = 0;
    state.currentFlashcardIndex = 0;
  }

  function reshuffleAll() {
    playSound('shuffle');
    // Regenerate current options for all questions
    state.allQuestions.forEach(q => {
      q.currentOptions = prepareQuestionOptions(q, state.shuffleOptions);
    });
    applyFilteringAndShuffling();
    if (state.activeTab === 'practice') {
      renderCurrentPracticeQuestion();
    } else if (state.activeTab === 'exam') {
      if (!state.examSubmitted) {
        state.examAnswers = {};
        renderCurrentExamQuestion();
        renderExamGrid();
      }
    } else if (state.activeTab === 'flashcards') {
      renderCurrentFlashcard();
    } else if (state.activeTab === 'list') {
      renderQuestionsList();
    }
  }

  // --- PRACTICE MODE RENDERING ---
  function renderCurrentPracticeQuestion() {
    const qText = document.getElementById('practiceQuestionText');
    const optList = document.getElementById('practiceOptionsList');
    const explBox = document.getElementById('practiceExplanationBox');
    const explText = document.getElementById('practiceExplanationText');
    const countBadge = document.getElementById('practiceCounterBadge');
    const topicBadge = document.getElementById('practiceTopicBadge');
    const origBadge = document.getElementById('practiceOriginalBadge');
    const starBtn = document.getElementById('practiceStarBtn');
    const prevBtn = document.getElementById('practicePrevBtn');
    const nextBtn = document.getElementById('practiceNextBtn');
    const progFill = document.getElementById('practiceProgressFill');
    const retryBtn = document.getElementById('practiceRetryBtn');

    if (state.questions.length === 0) {
      qText.innerHTML = '<em>No questions available in this category.</em>';
      optList.innerHTML = '';
      explBox.classList.add('hidden');
      countBadge.textContent = '0 / 0';
      topicBadge.textContent = state.activeTopic;
      origBadge.textContent = '';
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      progFill.style.width = '0%';
      return;
    }

    const q = state.questions[state.currentPracticeIndex];
    const total = state.questions.length;
    const currentNum = state.currentPracticeIndex + 1;

    // Badges & Progress
    countBadge.textContent = `Question ${currentNum} / ${total}`;
    topicBadge.textContent = q.topic;
    origBadge.textContent = `Original PDF #${q.id}`;
    starBtn.classList.toggle('starred', state.starredIds.has(q.id));
    progFill.style.width = `${(currentNum / total) * 100}%`;

    // Navigation state
    prevBtn.disabled = state.currentPracticeIndex === 0;
    nextBtn.disabled = state.currentPracticeIndex === total - 1;

    // Question content (format markdown code block if present)
    qText.innerHTML = formatQuestionText(q.question);

    // Render options
    optList.innerHTML = '';
    const answeredState = state.practiceAnswers[q.id];

    if (answeredState) {
      explBox.classList.remove('hidden');
      explText.innerHTML = `<strong>Answer:</strong> ${escapeHtml(q.correctAnswerText)}<br><br>${escapeHtml(q.explanation)}`;
      retryBtn.classList.remove('hidden');
    } else {
      explBox.classList.add('hidden');
      retryBtn.classList.add('hidden');
    }

    q.currentOptions.forEach(opt => {
      const item = document.createElement('div');
      item.className = 'option-item';

      const isCorrect = opt.text === q.correctAnswerText;
      const isSelected = answeredState && answeredState.selectedText === opt.text;

      if (answeredState) {
        item.classList.add('disabled');
        if (isCorrect) {
          item.classList.add('correct');
        } else if (isSelected && !isCorrect) {
          item.classList.add('wrong');
        }
      }

      const letterEl = document.createElement('div');
      letterEl.className = 'option-letter';
      letterEl.textContent = opt.displayLetter;

      const textEl = document.createElement('div');
      textEl.className = 'option-text';
      textEl.textContent = opt.text;

      item.appendChild(letterEl);
      item.appendChild(textEl);

      if (answeredState) {
        const iconEl = document.createElement('div');
        iconEl.className = 'option-status-icon';
        if (isCorrect) {
          iconEl.textContent = '✓';
        } else if (isSelected) {
          iconEl.textContent = '✕';
        }
        item.appendChild(iconEl);
      }

      item.addEventListener('click', () => {
        if (!state.practiceAnswers[q.id]) {
          handlePracticeAnswer(q, opt.text);
        }
      });

      optList.appendChild(item);
    });
  }

  function handlePracticeAnswer(q, selectedText) {
    const isCorrect = selectedText === q.correctAnswerText;
    state.practiceAnswers[q.id] = {
      selectedText,
      isCorrect
    };
    savePersistedState();
    playSound(isCorrect ? 'correct' : 'wrong');
    renderCurrentPracticeQuestion();
  }

  function retryPracticeQuestion() {
    const q = state.questions[state.currentPracticeIndex];
    if (q && state.practiceAnswers[q.id]) {
      delete state.practiceAnswers[q.id];
      savePersistedState();
      playSound('click');
      renderCurrentPracticeQuestion();
    }
  }

  // --- EXAM MODE RENDERING ---
  function initExam() {
    state.examActive = true;
    state.examSubmitted = false;
    state.examAnswers = {};
    state.examTimeRemaining = 45 * 60; // 45 minutes
    state.currentExamIndex = 0;

    document.getElementById('examActiveView').classList.remove('hidden');
    document.getElementById('examResultView').classList.add('hidden');

    startExamTimer();
    renderExamGrid();
    renderCurrentExamQuestion();
  }

  function startExamTimer() {
    clearInterval(state.examTimerId);
    updateTimerDisplay();

    state.examTimerId = setInterval(() => {
      if (state.examTimeRemaining > 0) {
        state.examTimeRemaining--;
        updateTimerDisplay();
      } else {
        clearInterval(state.examTimerId);
        submitExam(true); // time out
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const timerEl = document.getElementById('examTimer');
    const mins = Math.floor(state.examTimeRemaining / 60);
    const secs = state.examTimeRemaining % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    timerEl.textContent = `⏱️ ${formatted}`;
    if (state.examTimeRemaining < 300) { // < 5 mins
      timerEl.classList.add('warning');
    } else {
      timerEl.classList.remove('warning');
    }
  }

  function renderExamGrid() {
    const grid = document.getElementById('examNavGrid');
    grid.innerHTML = '';

    state.questions.forEach((q, idx) => {
      const cell = document.createElement('div');
      cell.className = 'grid-cell';
      cell.textContent = idx + 1;

      if (idx === state.currentExamIndex) {
        cell.classList.add('active');
      }
      if (state.examAnswers[q.id] !== undefined) {
        cell.classList.add('answered');
      }
      if (state.starredIds.has(q.id)) {
        cell.classList.add('flagged');
      }

      cell.addEventListener('click', () => {
        state.currentExamIndex = idx;
        renderCurrentExamQuestion();
        renderExamGrid();
      });

      grid.appendChild(cell);
    });

    const answeredCount = Object.keys(state.examAnswers).length;
    document.getElementById('examAnsweredStats').textContent = `Answered: ${answeredCount} / ${state.questions.length}`;
    const fill = document.getElementById('examProgressFill');
    if (state.questions.length > 0) {
      fill.style.width = `${(answeredCount / state.questions.length) * 100}%`;
    }
  }

  function renderCurrentExamQuestion() {
    const qText = document.getElementById('examQuestionText');
    const optList = document.getElementById('examOptionsList');
    const countBadge = document.getElementById('examCounterBadge');
    const topicBadge = document.getElementById('examTopicBadge');
    const starBtn = document.getElementById('examStarBtn');
    const prevBtn = document.getElementById('examPrevBtn');
    const nextBtn = document.getElementById('examNextBtn');

    if (state.questions.length === 0) return;

    const q = state.questions[state.currentExamIndex];
    const total = state.questions.length;
    const currentNum = state.currentExamIndex + 1;

    countBadge.textContent = `Question ${currentNum} / ${total}`;
    topicBadge.textContent = q.topic;
    starBtn.classList.toggle('starred', state.starredIds.has(q.id));

    prevBtn.disabled = state.currentExamIndex === 0;
    nextBtn.disabled = state.currentExamIndex === total - 1;

    qText.innerHTML = formatQuestionText(q.question);
    optList.innerHTML = '';

    const currentSelected = state.examAnswers[q.id];

    q.currentOptions.forEach(opt => {
      const item = document.createElement('div');
      item.className = 'option-item';
      if (currentSelected === opt.text) {
        item.style.borderColor = 'var(--accent-primary)';
        item.style.background = 'rgba(59, 130, 246, 0.15)';
      }

      const letterEl = document.createElement('div');
      letterEl.className = 'option-letter';
      letterEl.textContent = opt.displayLetter;

      const textEl = document.createElement('div');
      textEl.className = 'option-text';
      textEl.textContent = opt.text;

      item.appendChild(letterEl);
      item.appendChild(textEl);

      item.addEventListener('click', () => {
        playSound('click');
        state.examAnswers[q.id] = opt.text;
        renderExamGrid();
        renderCurrentExamQuestion();
      });

      optList.appendChild(item);
    });
  }

  function submitExam(isAuto = false) {
    if (!isAuto) {
      const answeredCount = Object.keys(state.examAnswers).length;
      const total = state.questions.length;
      const unanswered = total - answeredCount;
      if (unanswered > 0) {
        showModal('Submit Exam?', `You still have ${unanswered} unanswered question(s). Are you sure you want to finish the exam?`, () => {
          finalizeExamResults();
        });
        return;
      }
    }
    finalizeExamResults();
  }

  function finalizeExamResults() {
    clearInterval(state.examTimerId);
    state.examActive = false;
    state.examSubmitted = true;

    let score = 0;
    const total = state.questions.length;
    const topicStats = {};

    state.questions.forEach(q => {
      if (!topicStats[q.topic]) {
        topicStats[q.topic] = { correct: 0, total: 0 };
      }
      topicStats[q.topic].total++;

      const selected = state.examAnswers[q.id];
      if (selected === q.correctAnswerText) {
        score++;
        topicStats[q.topic].correct++;
      }
    });

    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    document.getElementById('examActiveView').classList.add('hidden');
    document.getElementById('examResultView').classList.remove('hidden');

    document.getElementById('resultScore').textContent = `${score}/${total}`;
    document.getElementById('resultPercentage').textContent = `${percentage}%`;

    let title = 'Great Job!';
    let desc = `You completed the test with a score of ${score} out of ${total}.`;
    if (percentage >= 90) {
      title = '🏆 Outstanding! Ready for 100% in Moodle!';
      playSound('correct');
    } else if (percentage >= 70) {
      title = '👍 Well Done! Almost Exam Ready!';
      playSound('correct');
    } else {
      title = '💪 Keep Practicing!';
      desc += ' Review your mistakes and try again.';
      playSound('wrong');
    }

    document.getElementById('resultTitle').textContent = title;
    document.getElementById('resultMessage').textContent = desc;

    // Topic breakdown
    const breakdownEl = document.getElementById('topicBreakdown');
    breakdownEl.innerHTML = '<h4 style="margin-bottom: 0.75rem;">Topic Breakdown:</h4>';

    for (const [topic, stats] of Object.entries(topicStats)) {
      const pct = Math.round((stats.correct / stats.total) * 100);
      const row = document.createElement('div');
      row.className = 'breakdown-item';
      row.innerHTML = `
        <span>${escapeHtml(topic)}</span>
        <span style="font-weight: 700; color: ${pct >= 70 ? 'var(--success)' : 'var(--error)'}">
          ${stats.correct} / ${stats.total} (${pct}%)
        </span>
      `;
      breakdownEl.appendChild(row);
    }
  }

  // --- FLASHCARDS MODE RENDERING ---
  function renderCurrentFlashcard() {
    const qEl = document.getElementById('flashcardQuestion');
    const aEl = document.getElementById('flashcardAnswer');
    const expEl = document.getElementById('flashcardExplanation');
    const frontEl = document.getElementById('flashcardFront');
    const backEl = document.getElementById('flashcardBack');
    const countBadge = document.getElementById('flashcardCounterBadge');
    const topicBadge = document.getElementById('flashcardTopicBadge');
    const origBadge = document.getElementById('flashcardOriginalBadge');
    const prevBtn = document.getElementById('flashcardPrevBtn');
    const nextBtn = document.getElementById('flashcardNextBtn');

    if (state.questions.length === 0) return;

    const q = state.questions[state.currentFlashcardIndex];
    const total = state.questions.length;
    const currentNum = state.currentFlashcardIndex + 1;

    countBadge.textContent = `Card ${currentNum} / ${total}`;
    topicBadge.textContent = q.topic;
    origBadge.textContent = `Original PDF #${q.id}`;

    prevBtn.disabled = state.currentFlashcardIndex === 0;
    nextBtn.disabled = state.currentFlashcardIndex === total - 1;

    // Reset card to front
    frontEl.classList.remove('hidden');
    backEl.classList.add('hidden');

    qEl.innerHTML = formatQuestionText(q.question);
    aEl.textContent = q.correctAnswerText;
    expEl.innerHTML = `<strong>Concept:</strong> ${escapeHtml(q.explanation)}`;
  }

  function toggleFlashcard() {
    const frontEl = document.getElementById('flashcardFront');
    const backEl = document.getElementById('flashcardBack');
    const isShowingBack = !backEl.classList.contains('hidden');

    playSound('click');
    if (isShowingBack) {
      frontEl.classList.remove('hidden');
      backEl.classList.add('hidden');
    } else {
      frontEl.classList.add('hidden');
      backEl.classList.remove('hidden');
    }
  }

  // --- LIST / CHEAT SHEET MODE RENDERING ---
  let showAllAnswersInList = false;

  function renderQuestionsList() {
    const container = document.getElementById('questionsListContainer');
    const statsText = document.getElementById('listStatsText');
    const searchFilter = (document.getElementById('searchInput').value || '').trim().toLowerCase();

    let list = [...state.allQuestions];

    // Topic filter
    if (state.activeTopic === 'starred') {
      list = list.filter(q => state.starredIds.has(q.id));
    } else if (state.activeTopic !== 'all') {
      list = list.filter(q => q.topic === state.activeTopic);
    }

    // Search filter
    if (searchFilter) {
      list = list.filter(q => {
        const inQ = q.question.toLowerCase().includes(searchFilter);
        const inExp = q.explanation.toLowerCase().includes(searchFilter);
        const inOpts = q.options.some(o => o.text.toLowerCase().includes(searchFilter));
        return inQ || inExp || inOpts;
      });
    }

    statsText.textContent = `Showing ${list.length} question(s)`;
    container.innerHTML = '';

    if (list.length === 0) {
      container.innerHTML = '<div style="text-align: center; color: var(--text-muted); padding: 2rem;">No questions matching your search.</div>';
      return;
    }

    list.forEach(q => {
      const item = document.createElement('div');
      item.className = 'review-item';

      const isStarred = state.starredIds.has(q.id);

      const header = document.createElement('div');
      header.className = 'review-item-header';
      header.innerHTML = `
        <div class="meta-badges">
          <span class="badge badge-source">#${q.id}</span>
          <span class="badge badge-topic">${escapeHtml(q.topic)}</span>
        </div>
        <button class="star-btn ${isStarred ? 'starred' : ''}" data-id="${q.id}">★</button>
      `;

      const qText = document.createElement('div');
      qText.style.fontWeight = '600';
      qText.style.marginBottom = '1rem';
      qText.innerHTML = formatQuestionText(q.question);

      const optsDiv = document.createElement('div');
      optsDiv.style.display = 'flex';
      optsDiv.style.flexDirection = 'column';
      optsDiv.style.gap = '0.4rem';
      optsDiv.style.marginBottom = '0.75rem';

      // Always show options in original order or current order
      q.options.forEach(opt => {
        const isCorrect = opt.text === q.correctAnswerText;
        const optRow = document.createElement('div');
        optRow.style.padding = '0.45rem 0.75rem';
        optRow.style.borderRadius = '6px';
        optRow.style.fontSize = '0.9rem';
        optRow.style.border = '1px solid var(--border-color)';
        optRow.style.background = (showAllAnswersInList && isCorrect) ? 'var(--success-bg)' : 'var(--bg-secondary)';
        if (showAllAnswersInList && isCorrect) {
          optRow.style.borderColor = 'var(--success-border)';
          optRow.style.fontWeight = '600';
        }

        optRow.innerHTML = `<strong>${opt.id}.</strong> ${escapeHtml(opt.text)} ${showAllAnswersInList && isCorrect ? ' <span style="color: var(--success)">✓</span>' : ''}`;
        optsDiv.appendChild(optRow);
      });

      const explDiv = document.createElement('div');
      explDiv.className = 'explanation-box';
      if (!showAllAnswersInList) explDiv.classList.add('hidden');
      explDiv.innerHTML = `<strong>Correct Answer:</strong> ${escapeHtml(q.correctOptionId)}. ${escapeHtml(q.correctAnswerText)}<br><br>${escapeHtml(q.explanation)}`;

      item.appendChild(header);
      item.appendChild(qText);
      item.appendChild(optsDiv);
      item.appendChild(explDiv);

      // Star toggle click
      const starBtn = header.querySelector('.star-btn');
      starBtn.addEventListener('click', () => {
        toggleStar(q.id);
        renderQuestionsList();
      });

      container.appendChild(item);
    });
  }

  // --- HELPERS ---
  function formatQuestionText(text) {
    if (!text) return '';
    // Check if contains markdown code block ```c ... ```
    if (text.includes('```')) {
      const parts = text.split(/```(?:c|cpp)?/);
      let html = escapeHtml(parts[0]);
      if (parts.length > 1) {
        const codeParts = parts[1].split('```');
        html += `<pre><code>${escapeHtml(codeParts[0].trim())}</code></pre>`;
        if (codeParts[1]) {
          html += escapeHtml(codeParts[1]);
        }
      }
      return html;
    }
    return escapeHtml(text);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function toggleStar(questionId) {
    if (state.starredIds.has(questionId)) {
      state.starredIds.delete(questionId);
    } else {
      state.starredIds.add(questionId);
      playSound('click');
    }
    savePersistedState();
    updateStarredCount();

    if (state.activeTopic === 'starred') {
      applyFilteringAndShuffling();
    }

    if (state.activeTab === 'practice') {
      renderCurrentPracticeQuestion();
    } else if (state.activeTab === 'exam') {
      renderCurrentExamQuestion();
      renderExamGrid();
    }
  }

  function updateStarredCount() {
    const el = document.getElementById('starredCount');
    if (el) el.textContent = state.starredIds.size;
  }

  function updateThemeUI() {
    const btn = document.getElementById('themeToggleBtn');
    btn.textContent = state.theme === 'dark' ? '☀️' : '🌙';
  }

  function updateSoundUI() {
    const btn = document.getElementById('soundToggleBtn');
    btn.textContent = state.soundEnabled ? '🔊' : '🔇';
    btn.classList.toggle('active', state.soundEnabled);
  }

  function showModal(title, message, onConfirm) {
    const modal = document.getElementById('confirmModal');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalBody').textContent = message;
    modal.classList.remove('hidden');

    const confirmBtn = document.getElementById('modalConfirmBtn');
    const cancelBtn = document.getElementById('modalCancelBtn');

    const handleConfirm = () => {
      modal.classList.add('hidden');
      confirmBtn.removeEventListener('click', handleConfirm);
      cancelBtn.removeEventListener('click', handleCancel);
      if (onConfirm) onConfirm();
    };

    const handleCancel = () => {
      modal.classList.add('hidden');
      confirmBtn.removeEventListener('click', handleConfirm);
      cancelBtn.removeEventListener('click', handleCancel);
    };

    confirmBtn.addEventListener('click', handleConfirm);
    cancelBtn.addEventListener('click', handleCancel);
  }

  // --- EVENT LISTENERS SETUP ---
  function setupEvents() {
    // Nav tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        playSound('click');
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.dataset.tab;
        state.activeTab = tab;

        document.getElementById('practiceTab').classList.toggle('hidden', tab !== 'practice');
        document.getElementById('examTab').classList.toggle('hidden', tab !== 'exam');
        document.getElementById('flashcardsTab').classList.toggle('hidden', tab !== 'flashcards');
        document.getElementById('listTab').classList.toggle('hidden', tab !== 'list');

        if (tab === 'practice') {
          renderCurrentPracticeQuestion();
        } else if (tab === 'exam') {
          if (!state.examActive && !state.examSubmitted) {
            initExam();
          }
        } else if (tab === 'flashcards') {
          renderCurrentFlashcard();
        } else if (tab === 'list') {
          renderQuestionsList();
        }
      });
    });

    // Topic filters
    document.querySelectorAll('.filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        playSound('click');
        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.activeTopic = pill.dataset.topic;

        applyFilteringAndShuffling();

        if (state.activeTab === 'practice') {
          renderCurrentPracticeQuestion();
        } else if (state.activeTab === 'flashcards') {
          renderCurrentFlashcard();
        } else if (state.activeTab === 'list') {
          renderQuestionsList();
        } else if (state.activeTab === 'exam') {
          initExam();
        }
      });
    });

    // Shuffling toggles & buttons
    const shuffleQuestionsToggle = document.getElementById('shuffleQuestionsToggle');
    const shuffleOptionsToggle = document.getElementById('shuffleOptionsToggle');
    const reshuffleBtn = document.getElementById('reshuffleBtn');
    const originalOrderBtn = document.getElementById('originalOrderBtn');

    shuffleQuestionsToggle.addEventListener('change', (e) => {
      state.shuffleQuestions = e.target.checked;
      applyFilteringAndShuffling();
      renderCurrentPracticeQuestion();
    });

    shuffleOptionsToggle.addEventListener('change', (e) => {
      state.shuffleOptions = e.target.checked;
      reshuffleAll();
    });

    reshuffleBtn.addEventListener('click', () => {
      reshuffleAll();
    });

    originalOrderBtn.addEventListener('click', () => {
      playSound('click');
      shuffleQuestionsToggle.checked = false;
      shuffleOptionsToggle.checked = false;
      state.shuffleQuestions = false;
      state.shuffleOptions = false;
      applyFilteringAndShuffling();
      if (state.activeTab === 'practice') {
        renderCurrentPracticeQuestion();
      } else if (state.activeTab === 'flashcards') {
        renderCurrentFlashcard();
      } else if (state.activeTab === 'list') {
        renderQuestionsList();
      }
    });

    // Theme & sound toggles
    document.getElementById('themeToggleBtn').addEventListener('click', () => {
      playSound('click');
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', state.theme);
      updateThemeUI();
      savePersistedState();
    });

    document.getElementById('soundToggleBtn').addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      updateSoundUI();
      savePersistedState();
      playSound('click');
    });

    document.getElementById('resetProgressBtn').addEventListener('click', () => {
      showModal('Reset All Progress?', 'This will clear all your answered questions and statistics.', () => {
        state.practiceAnswers = {};
        state.examAnswers = {};
        savePersistedState();
        playSound('click');
        if (state.activeTab === 'practice') renderCurrentPracticeQuestion();
        if (state.activeTab === 'exam') initExam();
      });
    });

    // Practice controls
    document.getElementById('practicePrevBtn').addEventListener('click', () => {
      if (state.currentPracticeIndex > 0) {
        playSound('click');
        state.currentPracticeIndex--;
        renderCurrentPracticeQuestion();
      }
    });

    document.getElementById('practiceNextBtn').addEventListener('click', () => {
      if (state.currentPracticeIndex < state.questions.length - 1) {
        playSound('click');
        state.currentPracticeIndex++;
        renderCurrentPracticeQuestion();
      }
    });

    document.getElementById('practiceStarBtn').addEventListener('click', () => {
      const q = state.questions[state.currentPracticeIndex];
      if (q) toggleStar(q.id);
    });

    document.getElementById('practiceRetryBtn').addEventListener('click', () => {
      retryPracticeQuestion();
    });

    // Exam controls
    document.getElementById('examPrevBtn').addEventListener('click', () => {
      if (state.currentExamIndex > 0) {
        playSound('click');
        state.currentExamIndex--;
        renderCurrentExamQuestion();
        renderExamGrid();
      }
    });

    document.getElementById('examNextBtn').addEventListener('click', () => {
      if (state.currentExamIndex < state.questions.length - 1) {
        playSound('click');
        state.currentExamIndex++;
        renderCurrentExamQuestion();
        renderExamGrid();
      }
    });

    document.getElementById('examStarBtn').addEventListener('click', () => {
      const q = state.questions[state.currentExamIndex];
      if (q) toggleStar(q.id);
    });

    document.getElementById('finishExamBtn').addEventListener('click', () => {
      submitExam(false);
    });

    document.getElementById('retakeExamBtn').addEventListener('click', () => {
      initExam();
    });

    document.getElementById('practiceMissedBtn').addEventListener('click', () => {
      // Find missed questions and set practice mode to only those
      const missed = state.questions.filter(q => state.examAnswers[q.id] !== q.correctAnswerText);
      if (missed.length > 0) {
        state.questions = missed;
        state.currentPracticeIndex = 0;
        document.querySelector('.tab-btn[data-tab="practice"]').click();
      } else {
        alert('You got 100%! No missed questions.');
      }
    });

    document.getElementById('backToPracticeBtn').addEventListener('click', () => {
      document.querySelector('.tab-btn[data-tab="practice"]').click();
    });

    // Flashcard controls
    document.getElementById('flashcardCard').addEventListener('click', () => {
      toggleFlashcard();
    });

    document.getElementById('flashcardFlipBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFlashcard();
    });

    document.getElementById('flashcardPrevBtn').addEventListener('click', () => {
      if (state.currentFlashcardIndex > 0) {
        playSound('click');
        state.currentFlashcardIndex--;
        renderCurrentFlashcard();
      }
    });

    document.getElementById('flashcardNextBtn').addEventListener('click', () => {
      if (state.currentFlashcardIndex < state.questions.length - 1) {
        playSound('click');
        state.currentFlashcardIndex++;
        renderCurrentFlashcard();
      }
    });

    // List controls
    document.getElementById('searchInput').addEventListener('input', () => {
      renderQuestionsList();
    });

    document.getElementById('toggleAllAnswersBtn').addEventListener('click', () => {
      playSound('click');
      showAllAnswersInList = !showAllAnswersInList;
      document.getElementById('toggleAllAnswersBtn').textContent = showAllAnswersInList ? 'Hide All Answers' : 'Show All Answers';
      renderQuestionsList();
    });

    // Global keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      // Ignore if typing in search input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const key = e.key;

      if (state.activeTab === 'practice') {
        if (key === 'ArrowLeft') {
          document.getElementById('practicePrevBtn').click();
        } else if (key === 'ArrowRight' || key === 'Enter' || key === ' ') {
          document.getElementById('practiceNextBtn').click();
        } else if (key.toLowerCase() === 's') {
          document.getElementById('practiceStarBtn').click();
        } else if (key.toLowerCase() === 'r') {
          reshuffleAll();
        } else if (['1', '2', '3', '4', '5'].includes(key)) {
          const idx = parseInt(key, 10) - 1;
          const opts = document.querySelectorAll('#practiceOptionsList .option-item');
          if (opts[idx]) opts[idx].click();
        } else if (['a', 'b', 'c', 'd', 'e'].includes(key.toLowerCase())) {
          const idx = key.toLowerCase().charCodeAt(0) - 97;
          const opts = document.querySelectorAll('#practiceOptionsList .option-item');
          if (opts[idx]) opts[idx].click();
        }
      } else if (state.activeTab === 'exam') {
        if (key === 'ArrowLeft') {
          document.getElementById('examPrevBtn').click();
        } else if (key === 'ArrowRight') {
          document.getElementById('examNextBtn').click();
        } else if (['1', '2', '3', '4', '5'].includes(key)) {
          const idx = parseInt(key, 10) - 1;
          const opts = document.querySelectorAll('#examOptionsList .option-item');
          if (opts[idx]) opts[idx].click();
        }
      } else if (state.activeTab === 'flashcards') {
        if (key === 'ArrowLeft') {
          document.getElementById('flashcardPrevBtn').click();
        } else if (key === 'ArrowRight') {
          document.getElementById('flashcardNextBtn').click();
        } else if (key === ' ' || key === 'Enter') {
          toggleFlashcard();
        }
      }
    });
  }

  // --- BOOTSTRAP ---
  document.addEventListener('DOMContentLoaded', () => {
    loadPersistedState();
    initData();
    setupEvents();
  });
})();
