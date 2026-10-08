// High Performance Computing Midterm Prep Data

const OFFICIAL_QUESTIONS = [
  {
    "id": 1,
    "topic": "HPC fundamentals",
    "question": "A simulation fits in one workstation’s memory, but would take several months to finish. Which observation most strongly supports trying a parallel implementation?",
    "options": [
      {
        "id": "A",
        "text": "Most of its computation can be divided into independent tasks"
      },
      {
        "id": "B",
        "text": "The input is stored in a single file"
      },
      {
        "id": "C",
        "text": "The sequential program already uses all available memory"
      },
      {
        "id": "D",
        "text": "The output contains many floating-point values"
      },
      {
        "id": "E",
        "text": "The source code contains many lines"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Most of its computation can be divided into independent tasks",
    "explanation": "Parallel computing requires computational tasks that can run concurrently. If most of the computation can be split into independent tasks, parallelizing across multiple processing units will significantly cut down execution time. (Memory capacity is not the bottleneck here since it fits in RAM)."
  },
  {
    "id": 2,
    "topic": "HPC fundamentals",
    "question": "Which description matches the basic distributed-memory view of a cluster?",
    "options": [
      {
        "id": "A",
        "text": "All nodes share one physical RAM without communication"
      },
      {
        "id": "B",
        "text": "Each node is a core within one processor socket"
      },
      {
        "id": "C",
        "text": "Nodes have their own memory and exchange data over an interconnect"
      },
      {
        "id": "D",
        "text": "Each node is a thread with the same address space"
      },
      {
        "id": "E",
        "text": "Nodes exchange data only through a common CPU cache"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Nodes have their own memory and exchange data over an interconnect",
    "explanation": "In a distributed-memory cluster, each physical node has its own private address space (RAM). Nodes cannot directly access each other's memory and must communicate by exchanging explicit messages across a network interconnect (e.g., using MPI)."
  },
  {
    "id": 3,
    "topic": "HPC fundamentals",
    "question": "Two MPI processes on different cluster nodes each declare int x. What is normally true of these variables in the basic message-passing model?",
    "options": [
      {
        "id": "A",
        "text": "The same variable name makes them one shared object"
      },
      {
        "id": "B",
        "text": "They occupy separate process memory; one assignment does not update the other"
      },
      {
        "id": "C",
        "text": "A barrier automatically copies the updated value to the other process"
      },
      {
        "id": "D",
        "text": "The larger rank automatically sees the smaller rank’s assignments"
      },
      {
        "id": "E",
        "text": "Running the same executable gives them the same variable storage"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "They occupy separate process memory; one assignment does not update the other",
    "explanation": "In the distributed-memory message-passing model (MPI), each process runs in its own private memory address space. Declaring 'int x' on different processes creates independent variables; modifying one does not affect the other unless messages are sent."
  },
  {
    "id": 4,
    "topic": "HPC fundamentals",
    "question": "A processor applies one instruction to several data elements at once. Which form of parallelism is this?",
    "options": [
      {
        "id": "A",
        "text": "Instruction-level parallelism across different instructions"
      },
      {
        "id": "B",
        "text": "Pipelining different stages of successive instructions"
      },
      {
        "id": "C",
        "text": "SIMD"
      },
      {
        "id": "D",
        "text": "Task parallelism across different functions"
      },
      {
        "id": "E",
        "text": "SPMD execution by independent processes"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "SIMD",
    "explanation": "SIMD (Single Instruction, Multiple Data) is Flynn's taxonomy classification where a single processor instruction operates simultaneously on multiple data elements (e.g., CPU vector extensions like AVX/SSE or GPU vector units)."
  },
  {
    "id": 5,
    "topic": "HPC fundamentals",
    "question": "A simulation has 5 x 10^8 cells, performs 200 floating-point operations per cell per step, and runs for 10^4 steps. How many operations are required?",
    "options": [
      {
        "id": "A",
        "text": "10^15"
      },
      {
        "id": "B",
        "text": "5 x 10^14"
      },
      {
        "id": "C",
        "text": "5 x 10^15"
      },
      {
        "id": "D",
        "text": "10^13"
      },
      {
        "id": "E",
        "text": "10^14"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "10^15",
    "explanation": "Total Operations = (5 × 10^8 cells) × (200 FLOP/cell/step) × (10^4 steps) = (5 × 10^8) × (2 × 10^2) × 10^4 = 10 × 10^(8 + 2 + 4) = 10 × 10^14 = 10^15 FLOPs."
  },
  {
    "id": 6,
    "topic": "HPC fundamentals",
    "question": "A processor has a high theoretical FLOP/s rate, but an array-processing program spends most of its time waiting for memory. Which conclusion is best supported?",
    "options": [
      {
        "id": "A",
        "text": "A low achieved FLOP/s rate proves an incorrect calculation"
      },
      {
        "id": "B",
        "text": "Peak arithmetic performance alone is insufficient to predict this program’s speed"
      },
      {
        "id": "C",
        "text": "Peak FLOP/s determines runtime regardless of data access"
      },
      {
        "id": "D",
        "text": "Doubling arithmetic units must halve the runtime"
      },
      {
        "id": "E",
        "text": "Memory capacity alone determines the arithmetic throughput"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Peak arithmetic performance alone is insufficient to predict this program’s speed",
    "explanation": "A program that spends most of its time waiting for memory is memory-bound (memory latency/bandwidth bottleneck). In such cases, theoretical peak arithmetic FLOP/s is unattainable and cannot predict real-world runtime (Roofline model)."
  },
  {
    "id": 7,
    "topic": "HPC fundamentals",
    "question": "A job waits 12 minutes in a queue and then executes for 8 minutes. What is its response time, measured from submission to completion?",
    "options": [
      {
        "id": "A",
        "text": "16 minutes"
      },
      {
        "id": "B",
        "text": "8 minutes"
      },
      {
        "id": "C",
        "text": "12 minutes"
      },
      {
        "id": "D",
        "text": "20 minutes"
      },
      {
        "id": "E",
        "text": "24 minutes"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "20 minutes",
    "explanation": "Response time (turnaround time) is measured from the moment of submission to complete finishing: Queue Wait Time (12 min) + Execution Time (8 min) = 20 minutes."
  },
  {
    "id": 8,
    "topic": "HPC fundamentals",
    "question": "Assume distinct array elements and no aliasing. Which loop is directly suitable for parallelizing its iterations?",
    "options": [
      {
        "id": "A",
        "text": "a[i] = 2*a[i-1] for increasing i"
      },
      {
        "id": "B",
        "text": "x = 3*x + 1 using the preceding x"
      },
      {
        "id": "C",
        "text": "fib[i] = fib[i-1] + fib[i-2] for increasing i"
      },
      {
        "id": "D",
        "text": "a[i] = a[i-1] + 1 for increasing i"
      },
      {
        "id": "E",
        "text": "z[i] = x[i] + y[i] for each i"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "z[i] = x[i] + y[i] for each i",
    "explanation": "The loop 'z[i] = x[i] + y[i]' has no loop-carried data dependencies (each iteration i writes to z[i] using only x[i] and y[i], completely independent of any other iteration j). All other options have loop-carried dependencies (recurrences)."
  },
  {
    "id": 9,
    "topic": "HPC fundamentals",
    "question": "The best sequential version takes 120 seconds and a parallel version on 8 processors takes 20 seconds. What is the speedup?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "8"
      },
      {
        "id": "D",
        "text": "6"
      },
      {
        "id": "E",
        "text": "10"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "6",
    "explanation": "Speedup S = T_sequential / T_parallel = 120s / 20s = 6. (Parallel efficiency is 6 / 8 = 75%)."
  },
  {
    "id": 10,
    "topic": "HPC fundamentals",
    "question": "Why can a parallel version run more slowly than a sequential version on a small input?",
    "options": [
      {
        "id": "A",
        "text": "The number of processors replaces execution time in the speedup formula"
      },
      {
        "id": "B",
        "text": "Having fewer iterations per worker guarantees lower total runtime"
      },
      {
        "id": "C",
        "text": "Idle workers increase useful arithmetic work by definition"
      },
      {
        "id": "D",
        "text": "Dividing the data changes the sequential baseline to the sum of worker times"
      },
      {
        "id": "E",
        "text": "Communication and synchronization overhead can exceed the computation saved Memory and parallel design"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "Communication and synchronization overhead can exceed the computation saved Memory and parallel design",
    "explanation": "Creating threads/processes, synchronizing them (barriers/locks), and exchanging messages incur overhead. When input size is small, this overhead can exceed the execution time saved by dividing the work among processors."
  },
  {
    "id": 11,
    "topic": "Memory and parallel design",
    "question": "A loop repeatedly accesses a small data set that remains in cache after its first pass. Why are later passes likely to spend less time waiting for data?",
    "options": [
      {
        "id": "A",
        "text": "Main memory becomes physically larger after the first pass"
      },
      {
        "id": "B",
        "text": "More accesses can be served from cache instead of lower memory levels"
      },
      {
        "id": "C",
        "text": "The cache permanently increases the clock frequency"
      },
      {
        "id": "D",
        "text": "Each later pass necessarily executes fewer loop iterations"
      },
      {
        "id": "E",
        "text": "The first pass eliminates the arithmetic in later passes"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "More accesses can be served from cache instead of lower memory levels",
    "explanation": "CPU caches have dramatically lower access latency and higher bandwidth than main memory (RAM). When a working set fits in cache, subsequent passes get cache hits instead of slow memory fetches (temporal locality)."
  },
  {
    "id": 12,
    "topic": "Memory and parallel design",
    "question": "Why is a CPU cache useful even though it cannot hold all of main memory?",
    "options": [
      {
        "id": "A",
        "text": "Programs often reuse a limited set of recently or nearby accessed data"
      },
      {
        "id": "B",
        "text": "Every program accesses all memory equally often"
      },
      {
        "id": "C",
        "text": "Cache capacity automatically expands to match the working set"
      },
      {
        "id": "D",
        "text": "Each data item is placed in a register for the entire program"
      },
      {
        "id": "E",
        "text": "Using cache removes the need for data transfers from main memory"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Programs often reuse a limited set of recently or nearby accessed data",
    "explanation": "The principle of locality states that programs tend to reuse memory locations recently accessed (temporal locality) or access locations near recent accesses (spatial locality), allowing a small, fast cache to serve the vast majority of memory requests."
  },
  {
    "id": 13,
    "topic": "Memory and parallel design",
    "question": "A program loads a value from main memory and immediately reads it again. Assume its cache line remains present. What is most likely for the second read?",
    "options": [
      {
        "id": "A",
        "text": "A hit only if the value has been modified since the first read"
      },
      {
        "id": "B",
        "text": "A miss unless the address changes to a neighboring element"
      },
      {
        "id": "C",
        "text": "A compulsory miss because it is a separate read instruction"
      },
      {
        "id": "D",
        "text": "A disk access because the first load has finished"
      },
      {
        "id": "E",
        "text": "A cache hit because the value was recently fetched"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "A cache hit because the value was recently fetched",
    "explanation": "Because the data was just loaded into cache and the cache line has not been evicted, the subsequent read of the same address will hit directly in the cache (temporal locality)."
  },
  {
    "id": 14,
    "topic": "Memory and parallel design",
    "question": "A program reads a[0], a[1], a[2], and a[3] consecutively. Which feature most directly helps this access pattern?",
    "options": [
      {
        "id": "A",
        "text": "Assigning each adjacent element to a different cache line"
      },
      {
        "id": "B",
        "text": "Increasing the stride between consecutive accesses"
      },
      {
        "id": "C",
        "text": "Keeping only the most recently used element rather than its neighbors"
      },
      {
        "id": "D",
        "text": "Reusing the same individual element many times"
      },
      {
        "id": "E",
        "text": "A cache line containing neighboring array elements"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "A cache line containing neighboring array elements",
    "explanation": "Memory is transferred between main memory and cache in chunks called cache lines (typically 64 bytes). Fetching a[0] brings the entire cache line containing consecutive array elements a[1], a[2], and a[3] into cache (spatial locality)."
  },
  {
    "id": 15,
    "topic": "Memory and parallel design",
    "question": "Each matrix element is read ten times in independent calculations, and reordering is valid. Which organization best exploits temporal locality?",
    "options": [
      {
        "id": "A",
        "text": "Complete the ten uses of an element before moving to the next element"
      },
      {
        "id": "B",
        "text": "Perform five full scans, then another five full scans"
      },
      {
        "id": "C",
        "text": "Scan the full matrix once for each of the ten calculations"
      },
      {
        "id": "D",
        "text": "Complete each calculation across all elements before starting the next"
      },
      {
        "id": "E",
        "text": "Visit each element once before returning to any element"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Complete the ten uses of an element before moving to the next element",
    "explanation": "Temporal locality is maximized by performing all operations on an element while it resides in the CPU cache/registers before moving to another element, avoiding repeated loads from slower memory levels."
  },
  {
    "id": 16,
    "topic": "Memory and parallel design",
    "question": "A designer has identified small tasks and their communication, then combines neighboring tasks before assigning them to processors. Which design step is the combination?",
    "options": [
      {
        "id": "A",
        "text": "Mapping"
      },
      {
        "id": "B",
        "text": "Agglomeration"
      },
      {
        "id": "C",
        "text": "Communication identification"
      },
      {
        "id": "D",
        "text": "Load measurement"
      },
      {
        "id": "E",
        "text": "Partitioning"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Agglomeration",
    "explanation": "In Ian Foster's parallel algorithm design methodology (PCAM: Partitioning, Communication, Agglomeration, Mapping), Agglomeration is the stage where fine-grained tasks and communication are grouped into larger composite tasks."
  },
  {
    "id": 17,
    "topic": "Memory and parallel design",
    "question": "What is a principal reason to agglomerate many small tasks?",
    "options": [
      {
        "id": "A",
        "text": "Increase scheduling opportunities by making each task still smaller"
      },
      {
        "id": "B",
        "text": "Remove data dependencies by changing processor assignments"
      },
      {
        "id": "C",
        "text": "Reduce communication and scheduling overhead relative to useful computation"
      },
      {
        "id": "D",
        "text": "Improve balance by forcing exactly one task per processor"
      },
      {
        "id": "E",
        "text": "Reduce useful arithmetic by assigning the same tasks to all processors"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Reduce communication and scheduling overhead relative to useful computation",
    "explanation": "Fine-grained tasks create excessive communication and scheduling overhead relative to actual computation. Agglomerating tasks increases task granularity and improves the computation-to-communication ratio."
  },
  {
    "id": 18,
    "topic": "Memory and parallel design",
    "question": "A simulation divides its spatial grid into regions and applies the same update to each region. Which approach is this?",
    "options": [
      {
        "id": "A",
        "text": "Agglomeration of different functions"
      },
      {
        "id": "B",
        "text": "Dynamic mapping"
      },
      {
        "id": "C",
        "text": "Functional decomposition"
      },
      {
        "id": "D",
        "text": "Domain decomposition"
      },
      {
        "id": "E",
        "text": "Collective communication"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "Domain decomposition",
    "explanation": "Domain decomposition (data parallelism) divides the physical or spatial grid/data structures into subdomains assigned to different processors, each running similar update algorithms on its local domain."
  },
  {
    "id": 19,
    "topic": "Memory and parallel design",
    "question": "Independent Monte Carlo trials need no communication while generating samples, but their counts must be combined at the end. What pattern is appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Tasks need repeated all-to-all exchanges of intermediate state"
      },
      {
        "id": "B",
        "text": "Tasks share a counter that must be updated at every step"
      },
      {
        "id": "C",
        "text": "Each task depends on the preceding task’s intermediate value"
      },
      {
        "id": "D",
        "text": "Independent local computation followed by a global reduction"
      },
      {
        "id": "E",
        "text": "Tasks require a collective exchange before every arithmetic operation"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "Independent local computation followed by a global reduction",
    "explanation": "Monte Carlo simulations are 'pleasantly/embarrassingly parallel': individual trials run independently without any communication during sampling, and a final global reduction accumulates the counts or averages."
  },
  {
    "id": 20,
    "topic": "Memory and parallel design",
    "question": "Sending many very small messages takes longer than sending the same total data in a few larger messages. Which cost most directly explains this?",
    "options": [
      {
        "id": "A",
        "text": "Each small message requires all computations to be repeated"
      },
      {
        "id": "B",
        "text": "Bandwidth is measured in messages rather than bytes per second"
      },
      {
        "id": "C",
        "text": "The startup latency paid for each message"
      },
      {
        "id": "D",
        "text": "The total payload becomes larger when divided into messages"
      },
      {
        "id": "E",
        "text": "The receiver’s clock frequency is determined by message count MPI"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "The startup latency paid for each message",
    "explanation": "Every network transmission incurs a fixed startup latency (message preparation, headers, handshakes). Sending many small messages multiplies this latency cost compared to batching the data into fewer larger messages."
  },
  {
    "id": 21,
    "topic": "MPI",
    "question": "Each process has one local maximum, and every process needs the global maximum. Which single collective is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "MPI_Allreduce with MPI_MAX"
      },
      {
        "id": "B",
        "text": "MPI_Bcast of rank 0’s local maximum"
      },
      {
        "id": "C",
        "text": "MPI_Allgather of all local maxima"
      },
      {
        "id": "D",
        "text": "MPI_Reduce with MPI_MAX"
      },
      {
        "id": "E",
        "text": "MPI_Allreduce with MPI_SUM"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "MPI_Allreduce with MPI_MAX",
    "explanation": "MPI_Allreduce computes a reduction across all ranks (here using the MPI_MAX operator) and places the final reduced value in every process's receive buffer, exactly fulfilling the requirement without extra broadcasts."
  },
  {
    "id": 22,
    "topic": "MPI",
    "question": "What does the SPMD model mean in a typical MPI program?",
    "options": [
      {
        "id": "A",
        "text": "Processes run the same program but can take different branches and operate on different data"
      },
      {
        "id": "B",
        "text": "All processes execute the same instruction at the same instant"
      },
      {
        "id": "C",
        "text": "Each data element must be processed by every rank"
      },
      {
        "id": "D",
        "text": "Each process must run a different executable"
      },
      {
        "id": "E",
        "text": "All ordinary variables have shared storage across ranks"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Processes run the same program but can take different branches and operate on different data",
    "explanation": "SPMD (Single Program, Multiple Data) means all MPI processes run copies of the identical program binary, but can execute different execution paths/branches based on their rank (e.g. if (rank == 0)) and process distinct data."
  },
  {
    "id": 23,
    "topic": "MPI",
    "question": "A process belongs to two different communicators. Which statement is correct?",
    "options": [
      {
        "id": "A",
        "text": "Its rank is its physical core number in both communicators"
      },
      {
        "id": "B",
        "text": "It must have different ranks in both communicators"
      },
      {
        "id": "C",
        "text": "It may have different ranks in the two communicators"
      },
      {
        "id": "D",
        "text": "Its rank must equal the total number of its communicators"
      },
      {
        "id": "E",
        "text": "It must have the same rank in both communicators"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "It may have different ranks in the two communicators",
    "explanation": "In MPI, ranks are assigned relative to a specific communicator. A process can have rank 0 in a custom sub-communicator while having rank 5 in MPI_COMM_WORLD."
  },
  {
    "id": 24,
    "topic": "MPI",
    "question": "A communicator contains six processes. What are their ranks within that communicator?",
    "options": [
      {
        "id": "A",
        "text": "The physical core numbers, regardless of communicator membership"
      },
      {
        "id": "B",
        "text": "0 through 5"
      },
      {
        "id": "C",
        "text": "1 through 5"
      },
      {
        "id": "D",
        "text": "0 through 6"
      },
      {
        "id": "E",
        "text": "1 through 6"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "0 through 5",
    "explanation": "Ranks in any MPI communicator of size N are always zero-indexed, consecutive integers from 0 to N-1. For 6 processes, the ranks are 0 through 5."
  },
  {
    "id": 25,
    "topic": "MPI",
    "question": "Two processes have different ranks in MPI_COMM_WORLD. Does that alone show that they run on different physical nodes?",
    "options": [
      {
        "id": "A",
        "text": "Yes; all processes on one node share a rank"
      },
      {
        "id": "B",
        "text": "No; different ranks must share one address space"
      },
      {
        "id": "C",
        "text": "Yes; each rank identifies a separate node"
      },
      {
        "id": "D",
        "text": "No; rank determines thread count instead of process identity"
      },
      {
        "id": "E",
        "text": "No; different ranks can run on the same node"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "No; different ranks can run on the same node",
    "explanation": "MPI ranks represent processes, not physical nodes. A multi-core machine or single workstation can host multiple MPI processes belonging to the same communicator."
  },
  {
    "id": 26,
    "topic": "MPI",
    "question": "A rank contributes a local sum to MPI_Reduce with root 0. Which rank is guaranteed to receive the combined result in its receive buffer?",
    "options": [
      {
        "id": "A",
        "text": "All ranks except rank 0"
      },
      {
        "id": "B",
        "text": "Only the rank that enters the reduction last"
      },
      {
        "id": "C",
        "text": "Only the rank with the largest local sum"
      },
      {
        "id": "D",
        "text": "Every rank"
      },
      {
        "id": "E",
        "text": "Only rank 0"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "Only rank 0",
    "explanation": "MPI_Reduce is a rooted collective operation: only the process designated as 'root' receives the combined reduction result. (MPI_Allreduce would deliver to all ranks)."
  },
  {
    "id": 27,
    "topic": "MPI",
    "question": "In MPI_Send(buffer, 5, MPI_DOUBLE, ...), what does the count 5 represent?",
    "options": [
      {
        "id": "A",
        "text": "Five bytes regardless of datatype"
      },
      {
        "id": "B",
        "text": "Five bytes for each process in the communicator"
      },
      {
        "id": "C",
        "text": "Five separate messages"
      },
      {
        "id": "D",
        "text": "Five elements of type MPI_DOUBLE"
      },
      {
        "id": "E",
        "text": "Five destination processes"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "Five elements of type MPI_DOUBLE",
    "explanation": "The count argument in MPI_Send represents the number of elements of the specified datatype (MPI_DOUBLE), not the number of bytes or messages."
  },
  {
    "id": 28,
    "topic": "MPI",
    "question": "MPI_Test returns with its completion flag false. What does this tell the application?",
    "options": [
      {
        "id": "A",
        "text": "The operation must be restarted with a new send"
      },
      {
        "id": "B",
        "text": "The request has been cancelled"
      },
      {
        "id": "C",
        "text": "The request was not complete when tested; buffer reuse must still respect the pending operation"
      },
      {
        "id": "D",
        "text": "All processes must call MPI_Test simultaneously"
      },
      {
        "id": "E",
        "text": "The request has completed but the data is invalid"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "The request was not complete when tested; buffer reuse must still respect the pending operation",
    "explanation": "MPI_Test non-blockingly checks if an ongoing non-blocking operation (such as MPI_Isend or MPI_Irecv) has finished. If it returns false, the request is still pending and the buffer cannot yet be safely reused."
  },
  {
    "id": 29,
    "topic": "MPI",
    "question": "Four ranks each contribute two integers to MPI_Gather. What is the minimum root receivebuffer capacity in integers for these contributions?",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "16"
      },
      {
        "id": "E",
        "text": "4"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "8",
    "explanation": "In MPI_Gather, the root gathers recvcount items from all N ranks. With 4 ranks each sending 2 integers, the root receive buffer must hold at least 4 × 2 = 8 integers."
  },
  {
    "id": 30,
    "topic": "MPI",
    "question": "Ranks 0 through 3 contribute 2, 4, 6, and 8 to MPI_Reduce with MPI_SUM and root 0. What result is placed in the root’s receive buffer?",
    "options": [
      {
        "id": "A",
        "text": "10"
      },
      {
        "id": "B",
        "text": "12"
      },
      {
        "id": "C",
        "text": "384"
      },
      {
        "id": "D",
        "text": "20"
      },
      {
        "id": "E",
        "text": "8 OpenMP and hybrid programming"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "20",
    "explanation": "The reduction operator is MPI_SUM. The sum of contributions is 2 + 4 + 6 + 8 = 20, which is placed in root rank 0's receive buffer."
  },
  {
    "id": 31,
    "topic": "OpenMP and hybrid programming",
    "question": "A shared array fits within one node, and independent iterations update different elements. Which approach most directly uses the node’s cores without first dividing the array among separate processes?",
    "options": [
      {
        "id": "A",
        "text": "An OpenMP critical region around the whole loop executed by every thread"
      },
      {
        "id": "B",
        "text": "An OpenMP parallel for over the independent iterations"
      },
      {
        "id": "C",
        "text": "An MPI broadcast that automatically assigns array iterations to cores"
      },
      {
        "id": "D",
        "text": "An MPI barrier around the unchanged serial loop"
      },
      {
        "id": "E",
        "text": "A plain OpenMP parallel region that makes every thread execute all updates"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "An OpenMP parallel for over the independent iterations",
    "explanation": "In shared memory on a single node, OpenMP's '#pragma omp parallel for' splits the loop iterations among worker threads that concurrently access the shared array directly without process-level message passing."
  },
  {
    "id": 32,
    "topic": "OpenMP and hybrid programming",
    "question": "An OpenMP loop uses a temporary variable declared outside the parallel region. Every iteration assigns it before using it. Which change most directly avoids conflicting accesses without serializing the loop?",
    "options": [
      {
        "id": "A",
        "text": "Use static scheduling while keeping the temporary shared"
      },
      {
        "id": "B",
        "text": "Make the temporary private to each thread"
      },
      {
        "id": "C",
        "text": "Initialize the shared temporary to zero before the loop"
      },
      {
        "id": "D",
        "text": "Make the temporary shared explicitly"
      },
      {
        "id": "E",
        "text": "Place a barrier before the loop only"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Make the temporary private to each thread",
    "explanation": "Declaring a temporary variable 'private(temp)' (or declaring it inside the loop body) gives each thread its own independent instance, eliminating data races without needing critical sections or locks."
  },
  {
    "id": 33,
    "topic": "OpenMP and hybrid programming",
    "question": "What happens when a thread encounters a typical OpenMP parallel region?",
    "options": [
      {
        "id": "A",
        "text": "Each thread automatically becomes an MPI process"
      },
      {
        "id": "B",
        "text": "The team continues executing all later serial statements in parallel"
      },
      {
        "id": "C",
        "text": "A team executes the region, synchronizes at its end, and the encountering thread continues"
      },
      {
        "id": "D",
        "text": "Each statement is automatically assigned to exactly one team member"
      },
      {
        "id": "E",
        "text": "Only the primary thread executes the region while others wait"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "A team executes the region, synchronizes at its end, and the encountering thread continues",
    "explanation": "Under the OpenMP fork-join model, when a thread encounters a '#pragma omp parallel' directive, it forks a team of threads to execute the block, synchronizes them at the implicit barrier at the end, and the initial thread continues."
  },
  {
    "id": 34,
    "topic": "OpenMP and hybrid programming",
    "question": "What does an OpenMP for work-sharing construct do?",
    "options": [
      {
        "id": "A",
        "text": "Assign iterations according to their numerical results"
      },
      {
        "id": "B",
        "text": "Execute the entire loop on the first thread to arrive"
      },
      {
        "id": "C",
        "text": "Have every thread execute all iterations"
      },
      {
        "id": "D",
        "text": "Create a new team for each iteration"
      },
      {
        "id": "E",
        "text": "Divide loop iterations among the existing team of threads"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "Divide loop iterations among the existing team of threads",
    "explanation": "The '#pragma omp for' construct is a work-sharing construct that partitions the iterations of the following loop among the threads of the already existing team."
  },
  {
    "id": 35,
    "topic": "OpenMP and hybrid programming",
    "question": "Several threads execute sum += value on the same shared integer without synchronization. What is the central problem?",
    "options": [
      {
        "id": "A",
        "text": "The runtime orders all additions by thread number"
      },
      {
        "id": "B",
        "text": "The shared clause gives each thread a private copy"
      },
      {
        "id": "C",
        "text": "The update is safe whenever each thread has a different value"
      },
      {
        "id": "D",
        "text": "Static scheduling makes the shared update indivisible"
      },
      {
        "id": "E",
        "text": "The updates can race because the read-modify-write operations are not protected"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "The updates can race because the read-modify-write operations are not protected",
    "explanation": "'sum += value' consists of three non-atomic machine steps: read sum, add value, write sum. Without protection (such as '#pragma omp atomic' or 'reduction'), threads can interleave these steps resulting in lost updates (race condition)."
  },
  {
    "id": 36,
    "topic": "OpenMP and hybrid programming",
    "question": "Before a parallel region, x is 7. Which clause gives each thread its own x initially equal to 7?",
    "options": [
      {
        "id": "A",
        "text": "firstprivate(x)"
      },
      {
        "id": "B",
        "text": "lastprivate(x)"
      },
      {
        "id": "C",
        "text": "reduction(+:x)"
      },
      {
        "id": "D",
        "text": "shared(x)"
      },
      {
        "id": "E",
        "text": "private(x)"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "firstprivate(x)",
    "explanation": "'firstprivate(x)' creates a private copy of x for each thread and initializes each copy with the value x held immediately before entering the parallel construct (which was 7)."
  },
  {
    "id": 37,
    "topic": "OpenMP and hybrid programming",
    "question": "A loop has iterations 0 through 11, four threads, and schedule(static,2). Which iterations are assigned to thread 1?",
    "options": [
      {
        "id": "A",
        "text": "1, 5, 9"
      },
      {
        "id": "B",
        "text": "0, 1, 8, 9"
      },
      {
        "id": "C",
        "text": "2, 6, 10"
      },
      {
        "id": "D",
        "text": "2, 3, 10, 11"
      },
      {
        "id": "E",
        "text": "3, 4, 5"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "2, 3, 10, 11",
    "explanation": "With 4 threads (0, 1, 2, 3) and schedule(static, 2): Chunk 0 (iter 0,1) -> Thread 0; Chunk 1 (iter 2,3) -> Thread 1; Chunk 2 (iter 4,5) -> Thread 2; Chunk 3 (iter 6,7) -> Thread 3; Chunk 4 (iter 8,9) -> Thread 0; Chunk 5 (iter 10,11) -> Thread 1. Thus, Thread 1 gets 2, 3, 10, 11."
  },
  {
    "id": 38,
    "topic": "OpenMP and hybrid programming",
    "question": "Why can a correct floating-point parallel reduction differ slightly from a sequential sum?",
    "options": [
      {
        "id": "A",
        "text": "Each thread includes every input value, increasing the total"
      },
      {
        "id": "B",
        "text": "The runtime rounds each thread’s result to an integer"
      },
      {
        "id": "C",
        "text": "The addition order can change, and floating-point addition is not exactly associative"
      },
      {
        "id": "D",
        "text": "The reduction changes the declared precision of the variable"
      },
      {
        "id": "E",
        "text": "Different thread IDs directly change the input values"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "The addition order can change, and floating-point addition is not exactly associative",
    "explanation": "Floating-point addition is not strictly associative due to finite-precision rounding: (a + b) + c ≠ a + (b + c). A parallel tree reduction changes the order in which numbers are summed compared to a sequential loop, producing slight differences."
  },
  {
    "id": 39,
    "topic": "OpenMP and hybrid programming",
    "question": "Assume valid OpenMP execution. What is sum after this code?\n\n```c\nint sum = 0;\n#pragma omp parallel for reduction(+:sum)\nfor (int i = 1; i <= 4; ++i)\nsum += i;\n```",
    "options": [
      {
        "id": "A",
        "text": "8"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "10"
      },
      {
        "id": "E",
        "text": "4"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "10",
    "explanation": "The reduction(+:sum) clause properly sums the loop values: sum = 1 + 2 + 3 + 4 = 10."
  },
  {
    "id": 40,
    "topic": "OpenMP and hybrid programming",
    "question": "A cluster application uses MPI between nodes and OpenMP within each process. What is one potential advantage over keeping many separate copies in MPI processes on a node?",
    "options": [
      {
        "id": "A",
        "text": "Threads can share suitable data and reduce replication within each process"
      },
      {
        "id": "B",
        "text": "All process-private arrays become globally shared automatically"
      },
      {
        "id": "C",
        "text": "The serial fraction disappears when both models are used"
      },
      {
        "id": "D",
        "text": "MPI messages become unnecessary between nodes"
      },
      {
        "id": "E",
        "text": "Every hybrid configuration must outperform an MPI-only configuration MapReduce and distributed storage"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Threads can share suitable data and reduce replication within each process",
    "explanation": "In hybrid MPI + OpenMP, multiple threads within an MPI process share the process's virtual memory space. This eliminates the need to replicate shared data structures (e.g. read-only grids or matrices) across cores on the same node."
  },
  {
    "id": 41,
    "topic": "MapReduce and distributed storage",
    "question": "Which task is directly suited to a single basic MapReduce job?",
    "options": [
      {
        "id": "A",
        "text": "Compute total sales per product from many independent transaction records"
      },
      {
        "id": "B",
        "text": "Modify one shared mutable record after every individual input record"
      },
      {
        "id": "C",
        "text": "Update a state through a strict chain where each step needs the previous result"
      },
      {
        "id": "D",
        "text": "Exchange grid-boundary values repeatedly within every map call"
      },
      {
        "id": "E",
        "text": "Perform each iteration only after a global convergence check from the previous iteration"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Compute total sales per product from many independent transaction records",
    "explanation": "Computing aggregate metrics (e.g. total sales per product) from independent key-value records is the prototypical MapReduce workload: map outputs (product, sales), shuffle groups by product, and reduce sums sales per product."
  },
  {
    "id": 42,
    "topic": "MapReduce and distributed storage",
    "question": "Two mappers emit (apple,2) and (apple,3). What grouped input should the sum reducer receive for apple?",
    "options": [
      {
        "id": "A",
        "text": "Key apple with the single value [5]"
      },
      {
        "id": "B",
        "text": "Key apple with values [2,3]"
      },
      {
        "id": "C",
        "text": "Key 2 with value apple and key 3 with value apple"
      },
      {
        "id": "D",
        "text": "Key apple with values [1,1]"
      },
      {
        "id": "E",
        "text": "Two independent reduce groups, one with [2] and one with [3]"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Key apple with values [2,3]",
    "explanation": "The shuffle-and-sort phase in MapReduce groups all emitted values sharing the identical key together: here key 'apple' is grouped with the list of values [2, 3] and passed to the reducer."
  },
  {
    "id": 43,
    "topic": "MapReduce and distributed storage",
    "question": "A mapper summarizes [2,4] and another summarizes [10]. To compute the overall mean correctly through local aggregation, what should each emit for the same key?",
    "options": [
      {
        "id": "A",
        "text": "Only its sum, followed by division by the number of mappers"
      },
      {
        "id": "B",
        "text": "Only its mean, followed by an unweighted average of mapper means"
      },
      {
        "id": "C",
        "text": "Only its count, followed by division by the number of mappers"
      },
      {
        "id": "D",
        "text": "A pair containing its sum and count"
      },
      {
        "id": "E",
        "text": "Its mean and minimum, ignoring the number of observations"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "A pair containing its sum and count",
    "explanation": "To compute an overall average across distributed mappers, the reducer requires both the total sum and total count (mean = sum / count). Emitting only the local average would cause an inaccurate unweighted average."
  },
  {
    "id": 44,
    "topic": "MapReduce and distributed storage",
    "question": "A mapper emits records with keys A, B, and A. In ordinary per-key reduction, which grouping property must hold?",
    "options": [
      {
        "id": "A",
        "text": "All A and B records must share one reducer regardless of partitioning"
      },
      {
        "id": "B",
        "text": "Mapper identity must determine grouping instead of the intermediate key"
      },
      {
        "id": "C",
        "text": "Every distinct key needs a dedicated physical worker"
      },
      {
        "id": "D",
        "text": "Every A record must be processed by a different reducer"
      },
      {
        "id": "E",
        "text": "Both A records reach the same reducer, which may also handle B"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "Both A records reach the same reducer, which may also handle B",
    "explanation": "The MapReduce framework guarantees that all values associated with the same key (e.g. 'A') are delivered to the same reducer task. That same reducer may also be assigned other keys (e.g. 'B')."
  },
  {
    "id": 45,
    "topic": "MapReduce and distributed storage",
    "question": "Which responsibility normally belongs to the MapReduce execution framework?",
    "options": [
      {
        "id": "A",
        "text": "Choosing the meaning of application-specific keys"
      },
      {
        "id": "B",
        "text": "Choosing the business interpretation of output values"
      },
      {
        "id": "C",
        "text": "Scheduling tasks and recovering failed worker tasks"
      },
      {
        "id": "D",
        "text": "Choosing the application’s aggregation formula"
      },
      {
        "id": "E",
        "text": "Deciding which input records are relevant to the analysis"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Scheduling tasks and recovering failed worker tasks",
    "explanation": "The MapReduce framework manages the low-level infrastructure: scheduling tasks across nodes, tracking execution progress, handling worker node failures, and executing retries."
  },
  {
    "id": 46,
    "topic": "MapReduce and distributed storage",
    "question": "A system expands from 4 workers to 8 similar workers while retaining distributed execution. Which change has occurred?",
    "options": [
      {
        "id": "A",
        "text": "Replicating output files without adding compute workers"
      },
      {
        "id": "B",
        "text": "Increasing only the number of threads on an unchanged machine"
      },
      {
        "id": "C",
        "text": "Horizontal scaling by adding machines"
      },
      {
        "id": "D",
        "text": "Vertical scaling by upgrading one machine"
      },
      {
        "id": "E",
        "text": "Reducing data size while retaining the same hardware"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Horizontal scaling by adding machines",
    "explanation": "Horizontal scaling (scaling out) involves adding more machines/nodes to the computing cluster. Vertical scaling (scaling up) means upgrading the hardware (CPU/RAM) of an existing node."
  },
  {
    "id": 47,
    "topic": "MapReduce and distributed storage",
    "question": "What is the primary purpose of a combiner in a word-count job?",
    "options": [
      {
        "id": "A",
        "text": "Combine all global counts before any mapper finishes"
      },
      {
        "id": "B",
        "text": "Choose which reducer owns each key"
      },
      {
        "id": "C",
        "text": "Guarantee that each word occurs on only one mapper"
      },
      {
        "id": "D",
        "text": "Sort the final output across all reducers"
      },
      {
        "id": "E",
        "text": "Aggregate local counts to reduce intermediate network traffic"
      }
    ],
    "correctOptionId": "E",
    "correctAnswerText": "Aggregate local counts to reduce intermediate network traffic",
    "explanation": "A combiner is a local reducer that runs on the mapper node directly after the map phase to pre-aggregate intermediate values (e.g., sum local word counts), drastically reducing the volume of data sent across the network during the shuffle phase."
  },
  {
    "id": 48,
    "topic": "MapReduce and distributed storage",
    "question": "For a basic inverted index, what should the mapper emit for word w found in document d?",
    "options": [
      {
        "id": "A",
        "text": "(1,w)"
      },
      {
        "id": "B",
        "text": "(w,d)"
      },
      {
        "id": "C",
        "text": "(d,1)"
      },
      {
        "id": "D",
        "text": "(d,w)"
      },
      {
        "id": "E",
        "text": "(w,1)"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "(w,d)",
    "explanation": "An inverted index maps terms/words to the documents in which they appear (word -> list of docs). Therefore, the mapper emits (word, doc_id), i.e., (w, d)."
  },
  {
    "id": 49,
    "topic": "MapReduce and distributed storage",
    "question": "An HDFS client knows a filename but needs to locate its blocks. Which component normally supplies block-location metadata?",
    "options": [
      {
        "id": "A",
        "text": "The word-count reducer"
      },
      {
        "id": "B",
        "text": "The MapReduce partitioner"
      },
      {
        "id": "C",
        "text": "The map-side combiner"
      },
      {
        "id": "D",
        "text": "The NameNode"
      },
      {
        "id": "E",
        "text": "The DataNode holding the first input record"
      }
    ],
    "correctOptionId": "D",
    "correctAnswerText": "The NameNode",
    "explanation": "In HDFS (Hadoop Distributed File System), the NameNode maintains all filesystem namespace metadata, including the mapping of file paths to block IDs and the DataNodes hosting them."
  },
  {
    "id": 50,
    "topic": "MapReduce and distributed storage",
    "question": "After obtaining block locations, where does an HDFS client normally get the actual file-block bytes?",
    "options": [
      {
        "id": "A",
        "text": "Directly from the relevant DataNodes"
      },
      {
        "id": "B",
        "text": "From the scheduler that allocated the job"
      },
      {
        "id": "C",
        "text": "From the mapper responsible for the filename"
      },
      {
        "id": "D",
        "text": "Through the NameNode, which relays every block"
      },
      {
        "id": "E",
        "text": "From the reducer assigned to the file’s first key"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Directly from the relevant DataNodes",
    "explanation": "Once the HDFS client obtains the block locations from the NameNode, it streams the actual raw data blocks directly to and from the respective DataNodes over TCP sockets, preventing the NameNode from becoming a network throughput bottleneck."
  }
];

const LABS_QUESTIONS = [
  {
    "id": 101,
    "topic": "Week 1: HPC Fundamentals & Architecture",
    "question": "Which description correctly distinguishes a processor core, a node, and a cluster in HPC architecture?",
    "options": [
      {
        "id": "A",
        "text": "A node contains multiple clusters; each cluster contains multiple independent CPU cores"
      },
      {
        "id": "B",
        "text": "A core is an individual processing unit inside a chip with its own cache; a node is a single computing component with board, chips, and RAM; a cluster connects multiple nodes via a network"
      },
      {
        "id": "C",
        "text": "A core connects multiple nodes over an interconnect without shared memory"
      },
      {
        "id": "D",
        "text": "A cluster is a single CPU socket containing multiple operating systems"
      },
      {
        "id": "E",
        "text": "A node is a software thread running inside L1 cache; a cluster is the main DRAM"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "A core is an individual processing unit inside a chip with its own cache; a node is a single computing component with board, chips, and RAM; a cluster connects multiple nodes via a network",
    "explanation": "In HPC hardware taxonomy: A Core is the individual processing unit within a chip executing instructions. A Node is a standalone computer board housing one or more multi-core sockets, shared DRAM, and optional accelerators. A Cluster is the overarching parallel system consisting of multiple networked nodes."
  },
  {
    "id": 102,
    "topic": "Week 1: HPC Fundamentals & Architecture",
    "question": "A cluster node contains 2 processor sockets, each socket contains 16 physical cores, and each core supports 2 hardware threads (hyperthreads). How many concurrent hardware threads can execute on this single node?",
    "options": [
      {
        "id": "A",
        "text": "32"
      },
      {
        "id": "B",
        "text": "64"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "128"
      },
      {
        "id": "E",
        "text": "8"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "64",
    "explanation": "Total hardware threads = (2 sockets) × (16 physical cores per socket) × (2 hardware threads per core) = 64 concurrent hardware threads."
  },
  {
    "id": 103,
    "topic": "Week 1: HPC Fundamentals & Architecture",
    "question": "A scientific code has an inherently serial fraction of 25% (f = 0.25) that cannot be parallelized. According to Amdahl’s Law, what is the maximum theoretical speedup achievable even with an infinite number of processors?",
    "options": [
      {
        "id": "A",
        "text": "25"
      },
      {
        "id": "B",
        "text": "10"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "2"
      },
      {
        "id": "E",
        "text": "Infinite speedup"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "4",
    "explanation": "Amdahl's Law states S(P) = 1 / (f + (1 - f)/P). As P -> ∞, the parallel term (1 - f)/P -> 0, leaving S_max = 1 / f = 1 / 0.25 = 4. The sequential bottleneck strictly caps speedup at 4x."
  },
  {
    "id": 104,
    "topic": "Week 1: HPC Fundamentals & Architecture",
    "question": "Under the Strong Scaling formulation, what parameter is held strictly constant as the number of processors increases?",
    "options": [
      {
        "id": "A",
        "text": "The total execution time is kept strictly constant"
      },
      {
        "id": "B",
        "text": "The total problem size (total workload) is fixed"
      },
      {
        "id": "C",
        "text": "The workload assigned to each individual processor is kept constant"
      },
      {
        "id": "D",
        "text": "The DRAM capacity per core is doubled at every scaling step"
      },
      {
        "id": "E",
        "text": "Network communication latency is assumed to be zero"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "The total problem size (total workload) is fixed",
    "explanation": "Strong Scaling benchmarks how fast a fixed total problem size can be solved by adding more processors (governed by Amdahl's Law). Weak Scaling benchmarks solving a proportionally larger problem as processors are added (governed by Gustafson's Law)."
  },
  {
    "id": 105,
    "topic": "Week 1: HPC Fundamentals & Architecture",
    "question": "Under Weak Scaling (Gustafson's Law), what occurs as the number of processing cores P increases?",
    "options": [
      {
        "id": "A",
        "text": "The total problem size is scaled up proportionally with P to maintain a constant workload per processor"
      },
      {
        "id": "B",
        "text": "The total problem size is kept fixed while execution time drops to zero"
      },
      {
        "id": "C",
        "text": "Communication overhead is mathematically eliminated"
      },
      {
        "id": "D",
        "text": "The clock frequency of each core increases linearly with P"
      },
      {
        "id": "E",
        "text": "The number of arithmetic instructions per core is halved at each step"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "The total problem size is scaled up proportionally with P to maintain a constant workload per processor",
    "explanation": "Weak Scaling increases the overall problem size in direct proportion to the number of processors P, aiming to keep the execution time roughly constant while solving much larger problems (higher grid resolution, more particles)."
  },
  {
    "id": 106,
    "topic": "Week 1: HPC Fundamentals & Architecture",
    "question": "A processor core performs 4 floating-point operations (FLOPs) per cycle. A node has 32 such cores running at a base clock frequency of 2.5 GHz (2.5 × 10^9 cycles/second). What is the theoretical peak arithmetic throughput of this node?",
    "options": [
      {
        "id": "A",
        "text": "80 GFLOP/s"
      },
      {
        "id": "B",
        "text": "200 GFLOP/s"
      },
      {
        "id": "C",
        "text": "320 GFLOP/s"
      },
      {
        "id": "D",
        "text": "640 GFLOP/s"
      },
      {
        "id": "E",
        "text": "128 GFLOP/s"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "320 GFLOP/s",
    "explanation": "Peak Throughput = (Cores) × (Clock Frequency) × (FLOPs/cycle) = 32 × (2.5 × 10^9 cycles/s) × 4 FLOPs/cycle = 320 × 10^9 FLOP/s = 320 GFLOP/s."
  },
  {
    "id": 107,
    "topic": "Week 1: HPC Fundamentals & Architecture",
    "question": "An application achieves perfect linear speedup (S = P) on P processors. What is its parallel efficiency E?",
    "options": [
      {
        "id": "A",
        "text": "0%"
      },
      {
        "id": "B",
        "text": "50%"
      },
      {
        "id": "C",
        "text": "100% (or 1.0)"
      },
      {
        "id": "D",
        "text": "P%"
      },
      {
        "id": "E",
        "text": "1 / P"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "100% (or 1.0)",
    "explanation": "Parallel efficiency is defined as E = S / P. When speedup is ideal linear (S = P), efficiency E = P / P = 1.0, or 100% utilization of the computational resources."
  },
  {
    "id": 108,
    "topic": "Week 1: HPC Fundamentals & Architecture",
    "question": "Why is 'superlinear speedup' (S > P on P processors) occasionally observed in real-world multicore benchmarks?",
    "options": [
      {
        "id": "A",
        "text": "Processor cores automatically boost clock frequencies when more threads are active"
      },
      {
        "id": "B",
        "text": "The aggregated cache capacity of P processors allows the partitioned dataset to fit entirely into fast L2/L3 cache, eliminating slow RAM memory stalls"
      },
      {
        "id": "C",
        "text": "Amdahl's Law guarantees superlinear curves for matrix operations"
      },
      {
        "id": "D",
        "text": "Floating-point execution units double their hardware pipelines in parallel mode"
      },
      {
        "id": "E",
        "text": "Inter-thread communication takes negative time in shared memory"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "The aggregated cache capacity of P processors allows the partitioned dataset to fit entirely into fast L2/L3 cache, eliminating slow RAM memory stalls",
    "explanation": "The 'cache effect': on 1 processor, the entire dataset exceeds cache size and spills into slow RAM. When partitioned across P processors, each sub-problem fits into the processor's fast local cache, dramatically reducing memory latency and producing superlinear speedup."
  },
  {
    "id": 109,
    "topic": "Week 1: HPC Fundamentals & Architecture",
    "question": "Which of the following is an example of an accelerator commonly paired with host CPUs in modern high-performance computing clusters?",
    "options": [
      {
        "id": "A",
        "text": "DRAM Memory Controller"
      },
      {
        "id": "B",
        "text": "GPU (Graphics Processing Unit)"
      },
      {
        "id": "C",
        "text": "SATA Hard Drive Controller"
      },
      {
        "id": "D",
        "text": "Motherboard Northbridge chipset"
      },
      {
        "id": "E",
        "text": "System BIOS ROM"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "GPU (Graphics Processing Unit)",
    "explanation": "GPUs (Graphics Processing Units) and specialized TPUs/FPGAs are massively parallel hardware accelerators connected via PCIe/NVLink to accelerate compute-dense matrix and vector calculations alongside general-purpose host CPUs."
  },
  {
    "id": 110,
    "topic": "Week 1: HPC Fundamentals & Architecture",
    "question": "A climate simulation takes 100 seconds on 1 core and 25 seconds on 8 cores. What is the parallel efficiency of this 8-core execution?",
    "options": [
      {
        "id": "A",
        "text": "50%"
      },
      {
        "id": "B",
        "text": "25%"
      },
      {
        "id": "C",
        "text": "75%"
      },
      {
        "id": "D",
        "text": "12.5%"
      },
      {
        "id": "E",
        "text": "40%"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "50%",
    "explanation": "Speedup S = T_sequential / T_parallel = 100s / 25s = 4.0. Parallel Efficiency E = S / P = 4.0 / 8 = 0.50 = 50%."
  },
  {
    "id": 111,
    "topic": "Week 2: Memory Hierarchy & Parallel Design",
    "question": "Which of the following correctly orders computer memory levels from fastest (lowest latency) to slowest (highest latency)?",
    "options": [
      {
        "id": "A",
        "text": "Main Memory (RAM) → L2 Cache → L1 Cache → Registers → Local Disk"
      },
      {
        "id": "B",
        "text": "Registers → L1 Cache → L2 Cache → Main Memory (RAM) → Local Disk (SSD/HDD)"
      },
      {
        "id": "C",
        "text": "L1 Cache → Registers → L2 Cache → Local Disk → Main Memory"
      },
      {
        "id": "D",
        "text": "Registers → Main Memory → L1 Cache → L2 Cache → Local Disk"
      },
      {
        "id": "E",
        "text": "L2 Cache → L1 Cache → Registers → Local Disk → Main Memory"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Registers → L1 Cache → L2 Cache → Main Memory (RAM) → Local Disk (SSD/HDD)",
    "explanation": "The memory hierarchy from fastest to slowest is: CPU Registers (< 1 cycle) → L1 Cache (few cycles) → L2 Cache (~10-20 cycles) → L3 Cache (~40-60 cycles) → Main Memory DRAM (~100-200 cycles) → Local Storage SSD/HDD (thousands to millions of cycles)."
  },
  {
    "id": 112,
    "topic": "Week 2: Memory Hierarchy & Parallel Design",
    "question": "In C and C++, two-dimensional array matrices (e.g., matrix[row][col]) are laid out in contiguous memory using which standard memory ordering?",
    "options": [
      {
        "id": "A",
        "text": "Column-major order"
      },
      {
        "id": "B",
        "text": "Diagonal-major order"
      },
      {
        "id": "C",
        "text": "Row-major order"
      },
      {
        "id": "D",
        "text": "Block-cyclic distribution"
      },
      {
        "id": "E",
        "text": "Morton Z-order curve"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Row-major order",
    "explanation": "C and C++ use row-major order: consecutive elements of the same row are stored in adjacent memory addresses (A[i][0], A[i][1], A[i][2]...). In contrast, Fortran and MATLAB use column-major order."
  },
  {
    "id": 113,
    "topic": "Week 2: Memory Hierarchy & Parallel Design",
    "question": "In Lab 2, summing a 4000 × 4000 matrix row-wise (`for i, for j: A[i][j]`) took ~0.030s, while column-wise (`for j, for i: A[i][j]`) took ~0.082s (nearly 2.7× slower). What hardware mechanism explains this massive performance difference?",
    "options": [
      {
        "id": "A",
        "text": "The column-wise version performs 2.7× more arithmetic additions"
      },
      {
        "id": "B",
        "text": "Row-wise access reads consecutive elements (stride 1) pulling full 64-byte cache lines into L1 cache (spatial locality), while column-wise jumps by 4000 elements on each step, triggering constant cache misses"
      },
      {
        "id": "C",
        "text": "The column-wise code causes floating-point denormalization penalties"
      },
      {
        "id": "D",
        "text": "Row-wise loops automatically disable the CPU branch predictor"
      },
      {
        "id": "E",
        "text": "The compiler refuses to vectorize loops whose outer variable is named j"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Row-wise access reads consecutive elements (stride 1) pulling full 64-byte cache lines into L1 cache (spatial locality), while column-wise jumps by 4000 elements on each step, triggering constant cache misses",
    "explanation": "CPU caches transfer data in 64-byte cache lines (16 ints). In row-wise access, reading A[i][j] loads the next 15 neighboring integers into L1 cache for subsequent iterations. In column-wise access, each step strides by 4000 ints (16,000 bytes), far exceeding the cache line and forcing continuous memory stalls."
  },
  {
    "id": 114,
    "topic": "Week 2: Memory Hierarchy & Parallel Design",
    "question": "Standard modern CPU cache lines are 64 bytes wide. How many standard 32-bit (4-byte) integers are fetched simultaneously in a single cache line?",
    "options": [
      {
        "id": "A",
        "text": "4"
      },
      {
        "id": "B",
        "text": "8"
      },
      {
        "id": "C",
        "text": "16"
      },
      {
        "id": "D",
        "text": "32"
      },
      {
        "id": "E",
        "text": "64"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "16",
    "explanation": "64 bytes per cache line / 4 bytes per 32-bit integer = 16 consecutive integers fetched into cache in a single transfer."
  },
  {
    "id": 115,
    "topic": "Week 2: Memory Hierarchy & Parallel Design",
    "question": "What is the key difference between Temporal Locality and Spatial Locality in cache behavior?",
    "options": [
      {
        "id": "A",
        "text": "Temporal locality refers to accessing adjacent memory addresses; spatial locality refers to accessing memory at high clock frequencies"
      },
      {
        "id": "B",
        "text": "Temporal locality means accessing the same memory location again in the near future; spatial locality means accessing nearby memory locations soon"
      },
      {
        "id": "C",
        "text": "Temporal locality applies strictly to SSDs; spatial locality applies strictly to registers"
      },
      {
        "id": "D",
        "text": "Spatial locality guarantees zero cache misses; temporal locality guarantees zero bus traffic"
      },
      {
        "id": "E",
        "text": "Temporal locality requires multiple threads; spatial locality is purely single-threaded"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Temporal locality means accessing the same memory location again in the near future; spatial locality means accessing nearby memory locations soon",
    "explanation": "Temporal locality: memory addresses that were accessed recently are likely to be accessed again soon (e.g. accumulator inside a loop). Spatial locality: memory addresses physically close to recent accesses are likely to be accessed soon (e.g. iterating through an array)."
  },
  {
    "id": 116,
    "topic": "Week 2: Memory Hierarchy & Parallel Design",
    "question": "What are the four formal design stages in Ian Foster’s PCAM methodology for engineering parallel algorithms?",
    "options": [
      {
        "id": "A",
        "text": "Pipelining, Compiling, Allocating, Multithreading"
      },
      {
        "id": "B",
        "text": "Profiling, Caching, Accelerating, Measuring"
      },
      {
        "id": "C",
        "text": "Partitioning, Communication, Agglomeration, Mapping"
      },
      {
        "id": "D",
        "text": "Provisioning, Clustering, Assembling, Multiplexing"
      },
      {
        "id": "E",
        "text": "Processing, Computing, Analyzing, Monitoring"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Partitioning, Communication, Agglomeration, Mapping",
    "explanation": "Foster's design methodology consists of four stages: Partitioning (decomposing into fine-grained tasks) -> Communication (identifying coordination) -> Agglomeration (combining tasks into larger chunks) -> Mapping (assigning tasks to physical processors)."
  },
  {
    "id": 117,
    "topic": "Week 2: Memory Hierarchy & Parallel Design",
    "question": "In Foster’s parallel design methodology, what is the primary objective of the 'Partitioning' stage?",
    "options": [
      {
        "id": "A",
        "text": "Assigning completed tasks to physical CPU cores"
      },
      {
        "id": "B",
        "text": "Decomposing the data and computation into fine-grained tasks to expose maximum potential concurrency"
      },
      {
        "id": "C",
        "text": "Combining small tasks into coarse blocks to reduce communication overhead"
      },
      {
        "id": "D",
        "text": "Compiling C++ code with -O3 optimization flags"
      },
      {
        "id": "E",
        "text": "Measuring execution time with high-resolution clocks"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Decomposing the data and computation into fine-grained tasks to expose maximum potential concurrency",
    "explanation": "Partitioning is the initial stage where the problem is broken down into the largest possible number of small, fine-grained tasks and data pieces to maximize potential parallelism."
  },
  {
    "id": 118,
    "topic": "Week 2: Memory Hierarchy & Parallel Design",
    "question": "If updating each element `A[i][j] = A[i][j] + 1` of a 4000 × 4000 matrix is treated as an individual task, 16,000,000 tasks are created. Why must these fine-grained tasks undergo Agglomeration before execution?",
    "options": [
      {
        "id": "A",
        "text": "The computer will run out of arithmetic precision"
      },
      {
        "id": "B",
        "text": "The immense overhead of creating, scheduling, and synchronizing millions of micro-tasks would far exceed the actual addition computation"
      },
      {
        "id": "C",
        "text": "The matrix would automatically be converted into a column-major format"
      },
      {
        "id": "D",
        "text": "Modern operating systems cannot allocate more than 1,000 memory bytes"
      },
      {
        "id": "E",
        "text": "Individual element updates violate C++ language grammar rules"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "The immense overhead of creating, scheduling, and synchronizing millions of micro-tasks would far exceed the actual addition computation",
    "explanation": "Spawning and scheduling 16 million individual micro-tasks causes massive parallel runtime overhead. Agglomerating tasks into 4 coarse chunks (1,000 rows each) dramatically reduces scheduling overhead and preserves cache locality."
  },
  {
    "id": 119,
    "topic": "Week 2: Memory Hierarchy & Parallel Design",
    "question": "Dividing the rows of a 4000 × 4000 matrix equally among 4 processors (rows 0–999 to P0, 1000–1999 to P1, etc.) where each processor executes the identical update code is an example of:",
    "options": [
      {
        "id": "A",
        "text": "Functional decomposition"
      },
      {
        "id": "B",
        "text": "Domain decomposition (data partitioning)"
      },
      {
        "id": "C",
        "text": "Instruction-level pipelining"
      },
      {
        "id": "D",
        "text": "Hardware hyperthreading"
      },
      {
        "id": "E",
        "text": "Dynamic work stealing"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Domain decomposition (data partitioning)",
    "explanation": "Domain decomposition (data parallelism) divides the primary data structure (the matrix domain) across processors, while each processor executes the same computational operations on its assigned subdomain."
  },
  {
    "id": 120,
    "topic": "Week 2: Memory Hierarchy & Parallel Design",
    "question": "During the Mapping phase, what performance issue occurs if Processor 0 is assigned 3,000 rows while Processors 1, 2, and 3 are assigned only 333 rows each?",
    "options": [
      {
        "id": "A",
        "text": "Superlinear speedup across all cores"
      },
      {
        "id": "B",
        "text": "Hardware deadlock across all PCIe buses"
      },
      {
        "id": "C",
        "text": "Severe load imbalance (the straggler effect), where P0 takes ~9× longer and the idle processors waste CPU cycles waiting for P0"
      },
      {
        "id": "D",
        "text": "Processor 0 automatically doubles its clock multiplier"
      },
      {
        "id": "E",
        "text": "The cache memory of P1, P2, and P3 is wiped"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "Severe load imbalance (the straggler effect), where P0 takes ~9× longer and the idle processors waste CPU cycles waiting for P0",
    "explanation": "Severe load imbalance: the total parallel execution time is governed by the slowest worker (straggler). Processors 1–3 finish quickly and sit idle, bottlenecking the entire application's wall-clock speed."
  },
  {
    "id": 121,
    "topic": "Week 3: Parallel Design & Monte Carlo",
    "question": "In a Monte Carlo estimation of π inside a 2 × 2 square containing an inscribed circle of radius r = 1, N points are generated uniformly in [-1, 1]. If M points fall inside the circle (x² + y² ≤ 1), how is π computed?",
    "options": [
      {
        "id": "A",
        "text": "π ≈ M / N"
      },
      {
        "id": "B",
        "text": "π ≈ 4 × (M / N)"
      },
      {
        "id": "C",
        "text": "π ≈ 2 × (M / N)"
      },
      {
        "id": "D",
        "text": "π ≈ (N / M) / 4"
      },
      {
        "id": "E",
        "text": "π ≈ √(M / N)"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "π ≈ 4 × (M / N)",
    "explanation": "Area of inscribed circle = π·r² = π(1)² = π. Area of square = 2 × 2 = 4. The ratio of inside points to total points approaches the area ratio: M / N ≈ π / 4. Therefore, π ≈ 4 × (M / N)."
  },
  {
    "id": 122,
    "topic": "Week 3: Parallel Design & Monte Carlo",
    "question": "In the Monte Carlo simulation of π, why does a memory-efficient program NOT need to store all N generated (x, y) coordinates?",
    "options": [
      {
        "id": "A",
        "text": "Coordinates are automatically swapped to disk storage by the operating system"
      },
      {
        "id": "B",
        "text": "Each point (x, y) is evaluated immediately upon generation to check x² + y² ≤ 1, and only a single running integer counter M of inside points needs to be maintained"
      },
      {
        "id": "C",
        "text": "The C++ compiler deletes variables after each iteration automatically"
      },
      {
        "id": "D",
        "text": "Circle evaluations only work with negative coordinates"
      },
      {
        "id": "E",
        "text": "RAM cannot hold floating-point coordinates"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Each point (x, y) is evaluated immediately upon generation to check x² + y² ≤ 1, and only a single running integer counter M of inside points needs to be maintained",
    "explanation": "Stream processing: each coordinate pair (x, y) is tested instantly against x² + y² ≤ 1 and discarded. Storing millions of points in memory is completely unnecessary and wastes RAM."
  },
  {
    "id": 123,
    "topic": "Week 3: Parallel Design & Monte Carlo",
    "question": "Why is Monte Carlo point generation and testing classified as an 'Embarrassingly Parallel' computational problem?",
    "options": [
      {
        "id": "A",
        "text": "Each point calculation requires reading the coordinates of the previous 10 points"
      },
      {
        "id": "B",
        "text": "Each random point evaluation is 100% independent of any other point, requiring zero communication between workers during generation"
      },
      {
        "id": "C",
        "text": "It requires frequent MPI barrier synchronizations between random draws"
      },
      {
        "id": "D",
        "text": "The algorithm can only run on a single processor core"
      },
      {
        "id": "E",
        "text": "The approximation error causes CPU hardware exceptions"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Each random point evaluation is 100% independent of any other point, requiring zero communication between workers during generation",
    "explanation": "Embarrassingly (or pleasantly) parallel problems have tasks that require no communication or synchronization between workers during execution. Each processor generates points and counts valid hits entirely independently."
  },
  {
    "id": 124,
    "topic": "Week 3: Parallel Design & Monte Carlo",
    "question": "When parallelizing a Monte Carlo simulation across multiple threads or processes, what critical requirement applies to the pseudo-random number generator (PRNG)?",
    "options": [
      {
        "id": "A",
        "text": "All threads must be initialized with the exact same seed to ensure deterministic output"
      },
      {
        "id": "B",
        "text": "Each thread must be initialized with an independent, distinct seed (or disjoint random stream) to avoid generating duplicate random sequences and wasting computation"
      },
      {
        "id": "C",
        "text": "Random numbers can only be generated by the master thread and broadcasted"
      },
      {
        "id": "D",
        "text": "PRNG functions are illegal inside parallel loops in C++"
      },
      {
        "id": "E",
        "text": "Threads must share a single un-synchronized PRNG state pointer"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Each thread must be initialized with an independent, distinct seed (or disjoint random stream) to avoid generating duplicate random sequences and wasting computation",
    "explanation": "If parallel threads share the same random seed, they will generate identical sequences of random numbers, duplicating calculations and invalidating the statistical independence of the simulation."
  },
  {
    "id": 125,
    "topic": "Week 3: Parallel Design & Monte Carlo",
    "question": "In Lab 3, four processors generate 250,000 points each and compute local counts M0, M1, M2, and M3. What parallel pattern is used to compute the final count M = M0 + M1 + M2 + M3?",
    "options": [
      {
        "id": "A",
        "text": "Broadcast from processor 0 to all workers"
      },
      {
        "id": "B",
        "text": "Parallel reduction (global sum aggregation)"
      },
      {
        "id": "C",
        "text": "Matrix transposition"
      },
      {
        "id": "D",
        "text": "Parallel bitonic sorting"
      },
      {
        "id": "E",
        "text": "Scatter from root"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Parallel reduction (global sum aggregation)",
    "explanation": "A parallel reduction aggregates partial contributions from multiple workers using an associative/commutative binary operator (such as addition) into a single collective result."
  },
  {
    "id": 126,
    "topic": "Week 3: Parallel Design & Monte Carlo",
    "question": "In Lab 3, when total points N increased from 10^3 to 10^6, the approximation of π improved from 3.152 to 3.142428. Which statistical law describes this convergence behavior?",
    "options": [
      {
        "id": "A",
        "text": "Moore's Law"
      },
      {
        "id": "B",
        "text": "The Law of Large Numbers"
      },
      {
        "id": "C",
        "text": "Amdahl's Law"
      },
      {
        "id": "D",
        "text": "Little's Law"
      },
      {
        "id": "E",
        "text": "Gustafson's Law"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "The Law of Large Numbers",
    "explanation": "The Law of Large Numbers states that as the number of independent random trials N increases, the sample average converges toward the true expected theoretical value (error scales as O(1/√N))."
  },
  {
    "id": 127,
    "topic": "Week 3: Parallel Design & Monte Carlo",
    "question": "Which of the following represents an example of Functional Decomposition rather than Domain Decomposition?",
    "options": [
      {
        "id": "A",
        "text": "Dividing 1,000,000 Monte Carlo points into 4 blocks of 250,000 points"
      },
      {
        "id": "B",
        "text": "In a simulation system, assigning climate physics calculation to Node 1, data logging to Node 2, and real-time 3D rendering to Node 3"
      },
      {
        "id": "C",
        "text": "Partitioning a 4000 × 4000 matrix into 1000 rows per processor"
      },
      {
        "id": "D",
        "text": "Dividing a fluid dynamics spatial grid into 8 sub-cubes"
      },
      {
        "id": "E",
        "text": "Splitting an array of 10,000,000 doubles across 4 OpenMP threads"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "In a simulation system, assigning climate physics calculation to Node 1, data logging to Node 2, and real-time 3D rendering to Node 3",
    "explanation": "Functional decomposition partitions the software by distinct tasks/functions (physics, logging, rendering), whereas domain decomposition partitions the data structure (points, grid, matrix) among workers running the same code."
  },
  {
    "id": 128,
    "topic": "Week 3: Parallel Design & Monte Carlo",
    "question": "In Ian Foster’s methodology applied to Monte Carlo on 4 processors, why is assigning 1 coarse task of 250,000 points per processor better than creating 1,000,000 fine-grained tasks of 1 point each?",
    "options": [
      {
        "id": "A",
        "text": "Fine-grained tasks produce incorrect random numbers"
      },
      {
        "id": "B",
        "text": "Assigning coarse tasks matches hardware cores, eliminates thread scheduling/context-switching overhead, and maximizes local cache efficiency"
      },
      {
        "id": "C",
        "text": "Processors cannot perform arithmetic unless tasks contain more than 10,000 iterations"
      },
      {
        "id": "D",
        "text": "Coarse tasks eliminate the need for floating-point calculations"
      },
      {
        "id": "E",
        "text": "Operating systems restrict programs to at most 10 function calls"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Assigning coarse tasks matches hardware cores, eliminates thread scheduling/context-switching overhead, and maximizes local cache efficiency",
    "explanation": "Creating millions of micro-tasks creates huge thread creation, dispatching, and synchronization overhead. Agglomerating work into coarse tasks matching available cores achieves near-zero scheduling overhead."
  },
  {
    "id": 129,
    "topic": "Week 3: Parallel Design & Monte Carlo",
    "question": "In a tree-based parallel reduction across P = 8 processors, how many communication steps are required to aggregate the partial results?",
    "options": [
      {
        "id": "A",
        "text": "8 steps"
      },
      {
        "id": "B",
        "text": "64 steps"
      },
      {
        "id": "C",
        "text": "3 steps (log2 8)"
      },
      {
        "id": "D",
        "text": "1 step"
      },
      {
        "id": "E",
        "text": "16 steps"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "3 steps (log2 8)",
    "explanation": "Binary tree reduction pairs up processors at each step (8 -> 4 -> 2 -> 1), completing in ceil(log2 P) = log2 8 = 3 steps, rather than P-1 = 7 linear steps."
  },
  {
    "id": 130,
    "topic": "Week 3: Parallel Design & Monte Carlo",
    "question": "If a sequential Monte Carlo code runs in 8.0 seconds and a parallel version on 4 cores runs in 2.2 seconds, what is the speedup S and parallel efficiency E?",
    "options": [
      {
        "id": "A",
        "text": "Speedup ≈ 3.64, Efficiency ≈ 91%"
      },
      {
        "id": "B",
        "text": "Speedup ≈ 0.28, Efficiency ≈ 28%"
      },
      {
        "id": "C",
        "text": "Speedup = 4.0, Efficiency = 100%"
      },
      {
        "id": "D",
        "text": "Speedup = 1.8, Efficiency ≈ 45%"
      },
      {
        "id": "E",
        "text": "Speedup = 2.2, Efficiency ≈ 55%"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Speedup ≈ 3.64, Efficiency ≈ 91%",
    "explanation": "Speedup S = T1 / Tp = 8.0s / 2.2s ≈ 3.636. Parallel Efficiency E = S / P = 3.636 / 4 ≈ 0.909 = 90.9% (or ~91%)."
  },
  {
    "id": 131,
    "topic": "Week 4: OpenMP Programming & Multi-threading",
    "question": "What is the primary execution model governing OpenMP multithreading?",
    "options": [
      {
        "id": "A",
        "text": "Distributed actor model with remote message passing"
      },
      {
        "id": "B",
        "text": "Fork-Join model: an initial master thread forks a team of threads at `#pragma omp parallel`, synchronizes at the end, and joins back"
      },
      {
        "id": "C",
        "text": "Single Instruction Multiple Data (SIMD) hardware vector execution only"
      },
      {
        "id": "D",
        "text": "Client-server TCP socket polling"
      },
      {
        "id": "E",
        "text": "Event-driven asynchronous JavaScript promises"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Fork-Join model: an initial master thread forks a team of threads at `#pragma omp parallel`, synchronizes at the end, and joins back",
    "explanation": "OpenMP is based on the Fork-Join model: a program begins with a single initial thread. When a `#pragma omp parallel` directive is encountered, the master thread forks a team of worker threads. At the end of the parallel construct, threads synchronize at an implicit barrier and join back to the master."
  },
  {
    "id": 132,
    "topic": "Week 4: OpenMP Programming & Multi-threading",
    "question": "Which compiler flag must be passed to the GNU C++ compiler (`g++`) to enable OpenMP compilation and directives?",
    "options": [
      {
        "id": "A",
        "text": "-openmp-all"
      },
      {
        "id": "B",
        "text": "-parallelize"
      },
      {
        "id": "C",
        "text": "-fopenmp"
      },
      {
        "id": "D",
        "text": "-mp-threads"
      },
      {
        "id": "E",
        "text": "-O3-omp"
      }
    ],
    "correctOptionId": "C",
    "correctAnswerText": "-fopenmp",
    "explanation": "In GCC and Clang, the flag `-fopenmp` instructs the compiler to parse `#pragma omp` directives, link OpenMP runtime libraries, and generate multi-threaded code."
  },
  {
    "id": 133,
    "topic": "Week 4: OpenMP Programming & Multi-threading",
    "question": "In an OpenMP parallel region configured with 4 threads (`omp_set_num_threads(4)`), what integer values are returned by `omp_get_thread_num()` across the team?",
    "options": [
      {
        "id": "A",
        "text": "1, 2, 3, 4"
      },
      {
        "id": "B",
        "text": "0, 1, 2, 3"
      },
      {
        "id": "C",
        "text": "-1, 0, 1, 2"
      },
      {
        "id": "D",
        "text": "Operating system PIDs"
      },
      {
        "id": "E",
        "text": "4 for all threads"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "0, 1, 2, 3",
    "explanation": "In OpenMP, `omp_get_thread_num()` returns a 0-based unique identifier for each thread in the team: thread IDs range from 0 to num_threads - 1 (0, 1, 2, 3)."
  },
  {
    "id": 134,
    "topic": "Week 4: OpenMP Programming & Multi-threading",
    "question": "Consider the OpenMP loop `#pragma omp parallel for for(int i = 0; i < N; ++i)`. What is the default data scoping of the loop counter variable `i`?",
    "options": [
      {
        "id": "A",
        "text": "It is shared among all threads, creating race conditions unless protected by critical sections"
      },
      {
        "id": "B",
        "text": "It is private to each thread by default according to the OpenMP specification"
      },
      {
        "id": "C",
        "text": "It is allocated in global shared memory on the heap"
      },
      {
        "id": "D",
        "text": "It must be explicitly declared `firstprivate(i)` or the code fails to compile"
      },
      {
        "id": "E",
        "text": "It is accessible only by thread 0"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "It is private to each thread by default according to the OpenMP specification",
    "explanation": "In OpenMP work-sharing loops (`omp for`), the loop iteration counter variable is made private to each thread by default so that each thread can independently iterate through its assigned subset without interference."
  },
  {
    "id": 135,
    "topic": "Week 4: OpenMP Programming & Multi-threading",
    "question": "In Lab 4 Part 5, several threads execute `counter++` on a shared integer without synchronization. Why does this cause a race condition and lost updates?",
    "options": [
      {
        "id": "A",
        "text": "The variable `counter++` is executed in reverse order by thread 0"
      },
      {
        "id": "B",
        "text": "At machine level, `counter++` consists of 3 distinct instructions (load, increment, store); interleaved execution across CPU cores causes updates to be overwritten"
      },
      {
        "id": "C",
        "text": "The compiler replaces `counter++` with a decrement operation when multithreading"
      },
      {
        "id": "D",
        "text": "OpenMP resets shared variables to 0 every 100 iterations"
      },
      {
        "id": "E",
        "text": "The ALU hardware can only increment one variable per microsecond"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "At machine level, `counter++` consists of 3 distinct instructions (load, increment, store); interleaved execution across CPU cores causes updates to be overwritten",
    "explanation": "An increment operation is a non-atomic read-modify-write cycle: (1) Load counter from memory into register, (2) Increment register by 1, (3) Store register back to memory. If Thread B reads counter before Thread A writes back its increment, Thread A's update is lost."
  },
  {
    "id": 136,
    "topic": "Week 4: OpenMP Programming & Multi-threading",
    "question": "What is the primary performance difference between protecting a counter with `#pragma omp critical` versus `#pragma omp atomic`?",
    "options": [
      {
        "id": "A",
        "text": "`critical` is faster because it uses software mutex locks"
      },
      {
        "id": "B",
        "text": "`atomic` leverages hardware-supported atomic memory instructions (e.g., LOCK INC or atomic add) for single memory locations, having significantly lower overhead than a general `critical` section lock"
      },
      {
        "id": "C",
        "text": "`atomic` can protect arbitrary blocks of 100 statements, while `critical` only protects one line"
      },
      {
        "id": "D",
        "text": "`critical` disables thread execution, while `atomic` creates extra helper threads"
      },
      {
        "id": "E",
        "text": "There is no difference; they generate the exact same machine code"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "`atomic` leverages hardware-supported atomic memory instructions (e.g., LOCK INC or atomic add) for single memory locations, having significantly lower overhead than a general `critical` section lock",
    "explanation": "`#pragma omp atomic` delegates the update directly to CPU hardware atomic instructions (like LOCK CMPXCHG or ARM atomic load-add), avoiding the heavy software lock/mutex and context overhead of `#pragma omp critical`."
  },
  {
    "id": 137,
    "topic": "Week 4: OpenMP Programming & Multi-threading",
    "question": "When using the OpenMP reduction clause `#pragma omp parallel for reduction(+:sum)`, what initial value does OpenMP automatically assign to each thread's private accumulator?",
    "options": [
      {
        "id": "A",
        "text": "The initial global value of `sum` before entering the parallel region"
      },
      {
        "id": "B",
        "text": "The mathematical identity element of the reduction operator, which is 0 (or 0.0 for addition)"
      },
      {
        "id": "C",
        "text": "A random uninitialized memory value"
      },
      {
        "id": "D",
        "text": "1.0"
      },
      {
        "id": "E",
        "text": "The thread's private ID from `omp_get_thread_num()`"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "The mathematical identity element of the reduction operator, which is 0 (or 0.0 for addition)",
    "explanation": "OpenMP initializes private reduction accumulators with the operator's mathematical identity element: 0 for addition `+`, 1 for multiplication `*`, maximum value for `min`, minimum value for `max`."
  },
  {
    "id": 138,
    "topic": "Week 4: OpenMP Programming & Multi-threading",
    "question": "In Lab 4 Part 6, loop iterations required uneven computational work (work = 100 + (i mod 1000)). Why was `schedule(dynamic, 10)` ~19% faster than `schedule(static)`?",
    "options": [
      {
        "id": "A",
        "text": "Static scheduling disables vectorization on all cores"
      },
      {
        "id": "B",
        "text": "Dynamic scheduling provides automatic load balancing: threads that finish lighter chunks immediately claim new work from the queue, preventing cores from sitting idle"
      },
      {
        "id": "C",
        "text": "Dynamic scheduling performs fewer loop iterations than static scheduling"
      },
      {
        "id": "D",
        "text": "Dynamic scheduling runs iterations in reverse order at double clock speed"
      },
      {
        "id": "E",
        "text": "Static scheduling requires inter-node network messages"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "Dynamic scheduling provides automatic load balancing: threads that finish lighter chunks immediately claim new work from the queue, preventing cores from sitting idle",
    "explanation": "Under static scheduling with non-uniform workloads, threads assigned heavy iterations become bottlenecks while others sit idle. Dynamic scheduling dispenses chunks of work at runtime on-demand, achieving superior load balance."
  },
  {
    "id": 139,
    "topic": "Week 4: OpenMP Programming & Multi-threading",
    "question": "What is 'False Sharing' in OpenMP shared-memory programming, and why does it degrade performance?",
    "options": [
      {
        "id": "A",
        "text": "Different threads writing to independent variables that reside within the same 64-byte cache line, causing constant cache invalidation and ping-ponging between CPU cores"
      },
      {
        "id": "B",
        "text": "Two threads accessing variables that share the same identifier name in different source files"
      },
      {
        "id": "C",
        "text": "Running OpenMP code on hardware that lacks a dedicated GPU accelerator"
      },
      {
        "id": "D",
        "text": "Setting `OMP_NUM_THREADS` higher than the number of available cores"
      },
      {
        "id": "E",
        "text": "Passing pointers between functions without const qualifiers"
      }
    ],
    "correctOptionId": "A",
    "correctAnswerText": "Different threads writing to independent variables that reside within the same 64-byte cache line, causing constant cache invalidation and ping-ponging between CPU cores",
    "explanation": "False sharing occurs when independent variables accessed by different CPU cores reside on the same 64-byte cache line. Modifying one variable forces the cache coherence protocol (MESI) to invalidate the entire cache line on other cores, creating heavy bus traffic."
  },
  {
    "id": 140,
    "topic": "Week 4: OpenMP Programming & Multi-threading",
    "question": "Which OpenMP API function returns the elapsed wall-clock time in seconds as a double, standardly used to benchmark parallel execution runtime in Lab 4?",
    "options": [
      {
        "id": "A",
        "text": "omp_get_clock_ticks()"
      },
      {
        "id": "B",
        "text": "omp_get_wtime()"
      },
      {
        "id": "C",
        "text": "omp_time_now()"
      },
      {
        "id": "D",
        "text": "omp_timer_seconds()"
      },
      {
        "id": "E",
        "text": "omp_wall_clock()"
      }
    ],
    "correctOptionId": "B",
    "correctAnswerText": "omp_get_wtime()",
    "explanation": "`double omp_get_wtime()` returns elapsed wall-clock time in seconds from an arbitrary reference point in the past. Benchmarking code measures `double start = omp_get_wtime(); ... double elapsed = omp_get_wtime() - start;`."
  }
];

const QUESTION_POOLS = {
  official: {
    id: 'official',
    name: '🏛️ Official Sample Pool (50 вопросов)',
    badge: 'Official PDF',
    description: 'Официальные вопросы от лектора (около 50% вопросов из пула экзамена)',
    questions: OFFICIAL_QUESTIONS
  },
  labs: {
    id: 'labs',
    name: '🧪 Labs & Weeks 1–4 Pool (40 вопросов)',
    badge: 'Weeks 1–4 Labs',
    description: 'Вопросы по темам 1-й, 2-й, 3-й и 4-й недель курса и лабораторных работ (HPC Arch, Cache, Monte Carlo, OpenMP)',
    questions: LABS_QUESTIONS
  },
  combined: {
    id: 'combined',
    name: '🌟 Все вопросы вместе (90 вопросов)',
    badge: 'Full Marathon (90)',
    description: 'Объединенный банк: 50 официальных вопросов + 40 вопросов по лабораторным',
    questions: [...OFFICIAL_QUESTIONS, ...LABS_QUESTIONS]
  }
};

// Default fallback export
const QUESTIONS_DATA = OFFICIAL_QUESTIONS;
