export default [ 
      { 
          title: "JVM --- 1、 问题：JVM是什么？",
          content: ` 
          	JVM (Java Virtual Machine) 是一种抽象化的计算机系统，它负责执行Java字节码文件（.class文件）。
            JVM提供了一个运行环境，使Java程序能够在多种操作系统上运行而不受硬件架构的影响，实现了“一次编写，到处运行”。
           `,
     },
     { 
          title: "JVM --- 2、 问题：JVM内存区域划分？",
          content: ` 
          	JVM内存主要分为五大区域：
            程序计数器（PC Register）、
            虚拟机栈（VM Stack）、
            本地方法栈（Native Method Stack）、
            Java堆（Heap）和方法区（Method Area）。	

            另外，从Java 8开始，元空间（Metaspace）取代了方法区的一部分职责。
           `,
     },
     { 
          title: "JVM --- 3、 问题：Java内存泄漏的定义及原因？",
          content: ` 
          	Java内存泄漏是指程序中已不再使用的对象无法被垃圾回收器回收，导致系统可用内存不断减少的现象。通常是由长期持有对无用对象的强引用引起的，即使这些对象不再被程序逻辑所使用。
           `,
     },
     { 
          title: "JVM --- 4、 问题：垃圾回收机制（GC）的工作原理？",
          content: ` 
          	JVM通过可达性分析算法确定对象是否可达，不可达的对象被认为是垃圾。	
            垃圾回收器根据不同的算法（如新生代的复制算法、标记-清除算法、标记-压缩算法，老年代的标记-清除算法、标记-压缩算法以及增量式GC等）进行垃圾回收，
            回收策略可以根据内存区域和对象生命周期的不同选择不同的垃圾回收器（如Serial、Parallel、CMS、G1、ZGC、Shenandoah等）。
           `,
     },
     { 
          title: "JVM --- 5、 问题：解释一下JVM的类加载机制？",
          content: ` 
          	Java的类加载机制包含五个阶段：加载（Loading）、验证（Verification）、准备（Preparation）、解析（Resolution）和初始化（Initialization）。
            类加载器（ClassLoader）根据类的全限定名查找相应的二进制流，并将二进制流转化为方法区的运行时数据结构。
           `,
     },
     { 
          title: "JVM --- 6、 问题：JVM如何确定对象是否可以被回收？",
          content: ` 
          	JVM使用可达性分析算法，通过一系列称为根对象集合的对象作为起点，遍历对象图，如果一个对象无法从这些根对象通过引用链到达，则认为它是不可达的，也就是垃圾对象。
           `,
     },
     { 
          title: "JVM --- 7、 问题：能否强制执行垃圾回收？如果有，应该如何做？",
          content: ` 
          	可以通过System.gc()方法请求系统进行垃圾回收，但这只是建议而不是命令，具体是否执行以及何时执行由JVM自行决定。	在实际开发中不推荐随意调用System.gc()，因为这可能会导致系统性能下降。
           `,
     },
     { 
          title: "JVM --- 8、 问题：HotSpot JVM的内存模型是什么样的？",
          content: ` 
          	HotSpot JVM的内存模型遵循JSR-133规范，即Java Memory Model（JMM），它定义了主内存与工作内存之间的交互协议，以及保证数据一致性的各种规则，如happens-before原则等。
           `,
     },
     { 
          title: "JVM --- 9、 问题：解释一下JVM的双亲委派模型？",
          content: ` 
          	双亲委派模型是类加载器的一种工作模式，当收到类加载请求时，首先将请求委托给父类加载器，依次向上，直至启动类加载器。
            只有当父加载器找不到指定类时，当前类加载器才会尝试自己加载。这样可以保证类加载的唯一性以及核心类库的安全性。
           `,
     },
     { 
          title: "JVM --- 10、 问题：列举几种常见的JVM调优工具？",
          content: ` 
          	包括但不限于JConsole、VisualVM、JProfiler、MAT（Memory Analyzer Tool）、YourKit等，它们可以帮助开发者监控和分析JVM的内存消耗、线程状态、垃圾回收情况、CPU使用率等指标，进而进行性能调优。
           `,
     },
     { 
          title: "JVM --- 11、 问题：Minor GC和Full GC有什么区别？",
          content: ` 
          	Minor GC清理的是年轻代（Young Generation）的内存空间，主要用于回收新生代中的Eden区和Survivor区的废弃对象。
            当年轻代空间不足时会发生Minor GC。	Full GC清理的是整个堆内存，包括年轻代和老年代（Old Generation），甚至包括方法区（永久代或元空间）。
            在老年代空间不足、持久代空间不足、System.gc()被显式调用或者上一次GC后堆内存未使用率依然很低等情况时，JVM会触发Full GC。
           `,
     },
     { 
          title: "JVM --- 12、 问题：什么是OOM（Out Of Memory）错误？",
          content: ` 
          	OOM是Java虚拟机内存溢出错误的简称，当JVM无法申请到足够的内存来完成新的内存分配请求时，就会抛出OutOfMemoryError。
            根据错误发生的区域不同，可以分为Java Heap Space（堆内存溢出）、PermGen Space（永久代溢出，在Java 8中替换为Metaspace溢出）、StackOverflowError（栈溢出）等多种类型。
           `,
     },
     { 
          title: "JVM --- 13、 问题：JVM的栈和堆的区别？",
          content: ` 
          	栈（Stack）主要是用来存储方法调用过程中的局部变量、方法参数以及返回地址等信息，每个线程都有自己独立的栈空间，
            栈的特点是快速分配和回收，线程私有，生命周期与线程相同。   
            堆（Heap）是用来存储Java对象实例，所有的线程共享堆内存，堆内存按照GC算法进行分配和回收，特点是分配速度较慢，但灵活性较高，生命周期从对象创建到成为垃圾被回收。
           `,
     },
     { 
          title: "JVM --- 14、 问题：谈谈JVM的类加载优化手段有哪些？",
          content: ` 
          	类加载优化包括静态绑定、动态绑定、类数据共享（Class Data Sharing，CDS）、提前加载（Premature Class Loading）等技术。
            例如，通过 -Xshare:dump 和 -XX:UseSharedSpaces 参数启用CDS，可以将类的元数据在服务器启动时预先加载到共享内存中，加快后续的类加载速度。
           `,
     },
     { 
          title: "JVM --- 15、 问题：JVM如何处理指令重排序带来的并发问题？",
          content: ` 
          	JVM遵守“as-if-serial”语义，即不管怎么重排序（编译器和处理器为了优化做的指令重排），程序的执行结果不能被改变。
            为此，Java内存模型引入了内存屏障和happens-before原则来解决多线程环境下的指令重排序问题，保证多线程视图的一致性和有序性。
           `,
     },
     { 
          title: "JVM --- 16、 问题：请解释JVM的JIT（Just-In-Time）编译器的作用？",
          content: ` 
          	JIT编译器是JVM的一个组件，它可以将热点代码（频繁执行的代码）动态编译成本地机器代码，从而提高代码执行的效率。
            相对于解释执行，JIT编译器能够带来显著的性能提升。例如，HotSpot JVM中的C1和C2编译器就起到了这样的作用。
           `,
     },
     { 
          title: "JVM --- 17、 问题：请解释一下JVM中的ThreadLocal变量的工作原理？",
          content: ` 
          	ThreadLocal为每个线程维护一个单独的副本，每个线程都有自己的ThreadLocalMap，键是ThreadLocal对象，值是实际存储的变量副本。
            这样每个线程都可以有自己的专属变量，互不影响，有效地解决了多线程间的数据隔离问题。
           `,
     },
     { 
          title: "JVM --- 18、 问题：请详细解释一下JVM中的分代垃圾回收机制？",
          content: ` 
          	分代垃圾回收机制是基于这样一个事实：大部分对象在生成后很快就变得不可达。因此，JVM将内存划分为几个不同的区域，每个区域都有不同的垃圾回收策略。
            主要有年轻代（Young Generation）和老年代（Old Generation）。年轻代又分为Eden区、From Survivor区和To Survivor区。
            新创建的对象首先放在年轻代的Eden区，经过几次Minor GC后仍然存活的对象会被晋升到老年代。而Major GC（或Full GC）则负责回收老年代的空间。
            这种机制减少了垃圾回收的压力，并优化了系统的整体性能。
           `,
     },
     { 
          title: "JVM --- 19、 问题：请描述一下Java内存模型中的“重排序”现象以及如何避免它？",
          content: ` 
          	在多线程环境下，编译器和处理器为了优化性能，可能会改变代码执行的顺序，这就可能导致所谓的“重排序”现象。
            为了避免由此引发的并发问题，Java内存模型通过“happens-before”原则定义了先行发生关系，只要满足happens-before条件，那么就不会发生指令重排序带来的可见性问题。
            此外，还可以通过volatile关键字和synchronized同步块来实现内存屏障，防止指令重排序。
           `,
     },
     { 
          title: "JVM --- 20、 问题：请解释一下JVM的类卸载机制？",
          content: ` 
          	JVM在满足一定条件下会卸载不再使用的类，这个过程也称为类卸载或类回收。条件包括：该类的所有实例都已被回收，加载该类的ClassLoader已经被回收，
            该类的Class对象没有任何地方被引用，即该类对应的Class对象也成为垃圾。然而，由于全局常量池中对类的引用以及反射等机制的存在，类卸载的实际难度较大，
            因此在实践中很少遇到真正的类卸载情况。
           `,
     },
     { 
          title: "JVM --- 21、 问题：请解释一下Java HotSpot VM的即时编译器C1和C2的区别？",
          content: ` 
          	C1编译器（Client Compiler）注重启动性能，倾向于较小的内存占用和较快的编译速度，适用于客户端应用。C2编译器（Server Compiler）关注峰值性能，
            采用大量的优化技术，比如全局代码优化，产生的代码质量更高，但编译时间相对较长，适用于服务端应用。
            在HotSpot VM中，根据应用程序的运行状况，可以选择激活C1或C2编译器，或者二者结合使用。
           `,
     },
     { 
          title: "JVM --- 22、 问题：请描述一下Java的逃逸分析技术以及其在JVM中的应用？",
          content: ` 
          	逃逸分析是JVM的一项优化技术，用于分析对象动态作用域：如果一个对象在方法中被创建，但仅在方法内部使用，没有“逃逸”到方法外部，那么就认为该对象是局部有效的。通过逃逸分析，

            JVM可以做出如下优化：   
            - 栈上分配：将原本分配在堆上的对象分配到栈上，减少了垃圾回收的压力。   
            - 同步省略：如果一个对象不会逃逸出线程，那么对该对象的同步操作是可以省略的。   
            - 标量替换：将对象拆解成若干个原始类型变量在栈上存储，消除对象的创建成本。
           `,
     },
     { 
          title: "JVM --- 23、 问题：请简述G1垃圾收集器的工作原理？",
          content: ` 
          	G1垃圾收集器是一种面向服务端应用的垃圾收集器，采用分区式的堆内存布局，将堆划分为多个大小固定的Region。
            G1可以预测停顿时间，通过维护Remembered Set来跟踪跨Region的引用，并在整个堆中并行进行垃圾回收。
            G1收集器以整个堆作为回收单位，收集过程分为并发标记、初始标记、最终标记和清理回收四个步骤，逐步推进垃圾回收，尽量减少STW（Stop-The-World）的时间。
            同时，G1还会优先回收收益最大的Region，以实现更高效的内存回收。
           `,
     },
];
