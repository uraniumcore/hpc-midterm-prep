// HPC Midterm Questions Pool (50 Questions)
const QUESTIONS_DATA = [
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
