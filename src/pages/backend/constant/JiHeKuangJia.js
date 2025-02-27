export default [ 
      { 
          title: "集合框架 --- 1、 问题：ArrayList ?",
          content: ` 
          ArrayList是Java中的一种动态数组，它实现了List接口，允许我们存储和操作可变大小的数组。
          ArrayList中的元素是有序的，并且可以包含重复的元素。
          它允许我们通过索引访问元素，增长量可以通过构造函数指定或者默认自动增长。
           `,
     },
     { 
          title: "集合框架 --- 2、 问题：ArrayList的特点",
          content: ` 
          1、动态扩容：当添加的元素超过当前容量时，ArrayList会自动扩容，一般扩容为原来的1.5倍。
          2、索引访问：提供了类似数组的索引访问方式，时间复杂度为O(1)。
          3、不保证线程安全：在多线程环境下进行读写操作可能会导致数据不一致或抛出异常，
          如果需要线程安全，可以使用Collections.synchronizedList()方法包装得到线程安全的ArrayList。
          4、元素增删：在列表中间插入或删除元素，除了被删除元素之外的所有元素都需要移动，
          所以插入和删除元素的时间复杂度为O(n)。
           `,
     },
     { 
          title: "集合框架 --- 3、 问题：ArrayList与LinkedList的区别",
          content: ` 
          1、ArrayList是实现了基于动态数组的数据结构，而LinkedList是基于双向链表的数据结构；
          2、对于随机访问get和set，ArrayList要优于LinkedList，因为LinkedList要移动指针；
          3、对于添加和删除操作add和remove，一般大家都会说LinkedList要比ArrayList快，
          因为ArrayList要移动数据，但是实际情况可能会有差异。
          4、综上所述，在需要频繁读取集合中的元素时，使用ArrayList效率较高，而在插入和删除操作较多时，使用LinkedList效率较高。
           `,
     },
     { 
          title: "集合框架 --- 4、 问题：如果你有一个很大的ArrayList，如何高效的从中查找一个元素？",
          content: ` 
          	可以使用contains()方法，但其时间复杂度为O(n)，如果对查找效率有较高要求，可以考虑使用HashSet或TreeSet等集合类，它们的查找速度通常更快。
           `,
     },
     { 
          title: "集合框架 --- 5、 问题：ArrayList扩容",
          content: ` 
          当ArrayList的size超过当前容量时，它会创建一个新的数组，新数组的容量是原数组的1.5倍加上1，然后将所有元素复制到新的数组中，最后将新元素添加到新数组的末尾。
           `,
     },
     { 
          title: "集合框架 --- 6、 问题：ArrayList线程安全吗",
          content: ` 
          	不是线程安全的， 可以使用锁来解决线程安全问题(Collections.synchronizedList)

            问：使用锁效率不高哦，有其他方法吗？
            答：可以使用CopyOnWriteArrayList
            原理：
            1、CopyOnWriteArrayList内部也是用数组实现的，在向CopyOnWriteArrayList添加元素时，会复制一个新的数组，写操作在新数组上进行，读操作在原数组上进行。并且写操作会加锁，防止出现并发写入丢失数据的问题。
            2、写操作结束之后会把原数组指向新数组
            3、CopyOnWriteArrayList允许在写操作时来读取数据，大大提高了读的性能，因此适合读多写少的应用场景，但是CopyOnWriteArrayList会比较占内存，同时可能读到的数据不是实时最新的数据，所以不适合实时性要求很高的场景。
           `,
     },
     { 
          title: "集合框架 --- 7、 问题： 为什么ArrayList的add()方法是O(1)时间复杂度，但在实际操作中可能达到O(n)？",
          content: ` 
           ArrayList的add(E e)方法在大多数情况下时间复杂度确实是O(1)，因为它只是简单地将元素追加到现有数组的末尾。然而，如果添加元素后，ArrayList的实际大小超过了其当前容量，那么就需要扩容并重新分配内存空间，这个过程涉及到了数组元素的复制，因此此时的时间复杂度变为O(n)。
           `,
     },
     { 
          title: "集合框架 --- 8、 问题： 如何确定ArrayList的初始容量以及何时扩容？",
          content: ` 
           创建ArrayList时，如果不指定初始容量，默认大小是10。
           当ArrayList的实际大小（即已添加元素的数量）超过其当前容量时，就会触发扩容机制，新的容量通常是原始容量的1.5倍加1，具体扩容规则由grow()方法实现。
           `,
     },
     { 
          title: "集合框架 --- 9、 问题： ArrayList添加删除过程",
          content: ` 
          插入元素：
          在ArrayList的任意位置插入元素时，首先会检查是否需要扩容，如果不需要扩容，
          则将插入点之后的所有元素都向后移动一位，然后在插入点插入新元素。
          删除元素：
          在ArrayList中删除一个元素时，同样需要将该元素之后的所有元素都向前移动一位以填补空位，然后更新size属性。
           `,
     },
     { 
          title: "集合框架 --- 10、 问题： ArrayList能否存储null值？为什么？",
          content: ` 
           ArrayList可以存储null值，这是因为在Java中，ArrayList的实现允许任何类型的对象包括null作为元素存储。
           但是，在处理ArrayList时，需要特别注意对null值的操作，避免引发NullPointerException。
           `,
     },
     { 
          title: "集合框架 --- 11、 问题： 请描述下ArrayList的toArray()方法的作用及其重载版本的区别。",
          content: ` 
           toArray()方法用于将ArrayList转换成Object数组形式。
           它有两个重载版本：
           toArray(): 返回一个新分配的对象数组，长度等于ArrayList的大小，类型为Object[]。
           toArray(T[] a)：若传入的数组a足够大，将ArrayList中的元素复制到a中，并返回a；若a不够大，将创建一个和ArrayList大小相同的具有相同类型的新数组，并将ArrayList的元素复制进去，再返回新数组。如果知道ArrayList的具体元素类型，使用后者可以减少不必要的类型转换。
           `,
     },
     { 
          title: "集合框架 --- 12、 问题： ArrayList、LinkedList、Vector的区别",
          content: ` 
           1、实现原理：ArrayList、Vector 基于数组，LinkedList 基于双向链表
           2、安全性： LinkedList 方法同步的  ArrayList、LinkedList 方法不同步
           3、查询效率：ArrayList、Vector 基于索引，查询效率高  但是增加会导致扩容问题 所以添加效率低   
           `,
     },
     { 
          title: "集合框架 --- 13、 问题： 什么是HashMap？它是如何工作的？",
          content: ` 
           HashMap是Java中的一个实现Map接口的数据结构，它使用哈希表存储键值对。
           工作原理是利用键对象的哈希码（hashCode）经过某种运算，转化为数组索引，将键值对存储在数组对应的位置上。如果发生冲突（两个不同的键映射到同一数组索引），则采用链地址法解决，即数组的每个槽位是一个链表或红黑树（JDK 1.8之后引入优化）。
           `,
     },
     { 
          title: "集合框架 --- 14、 问题： HashMap的初始容量和加载因子是什么，它们如何影响性能？",
          content: ` 
          1、初始容量：HashMap创建时的内部数组大小，默认是16，可以通过构造函数设置初始容量。
          2、加载因子：决定了HashMap何时需要调整容量，它是用来衡量HashMap满的程度的一个阈值，默认是0.75。
          当HashMap中的条目数超过容量与加载因子的乘积时，将会自动扩容至原来容量的两倍，并重新哈希所有元素，
          这一过程会影响性能。HashMap的大小只能是2次幂的，假设你传一个10进去，实际上最终HashMap的大小是16，
          你传一个7进去，HashMap最终的大小是8，具体的实现在tableSizeFor可以看到。
           `,
     },
     { 
          title: "集合框架 --- 15、 问题： HashMap在什么情况下会发生哈希冲突，如何解决冲突？",
          content: ` 
           当两个不同键经过哈希函数计算后得出相同的索引值时，会发生哈希冲突。
           HashMap通过链地址法解决冲突，即将冲突的元素放在同一个桶中形成链表。

           在JDK 1.8以后，当链表长度超过8时，链表会转换为红黑树，进一步优化查找、插入和删除操作的性能。
           `,
     },
     { 
          title: "集合框架 --- 16、 问题： HashMap如何实现扩容，扩容过程是怎样的？",
          content: ` 
           当HashMap的条目数量超过阈值（容量 * 加载因子）时，会触发扩容操作。
           扩容会创建一个新的、容量更大的哈希表，然后将旧表中的所有元素重新计算哈希值并放入新表中，
           这个过程中涉及到元素的迁移，所以是比较耗时的操作。
           `,
     },
     { 
          title: "集合框架 --- 17、 问题： HashMap在高并发环境下可能出现什么问题，如何解决？",
          content: ` 
           在高并发环境下，由于HashMap非线程安全，可能会出现数据不一致、死循环等问题。
           解决方案是在并发环境下使用线程安全的ConcurrentHashMap，或者在外部做好同步控制。

           对于仅读操作较多的情况，也可以通过Collections.synchronizedMap()方法获得线程安全的HashMap视图。
           `,
     },
     { 
          title: "集合框架 --- 18、 问题： HashMap的put 和get方法",
          content: ` 
          在put的时候，
          1、首先对key做hash运算，计算出该key所在的index。
          2、如果没碰撞，直接放到数组中，
          3、如果碰撞了，需要判断目前数据结构是链表还是红黑树，根据不同的情况来进行插入。
          4、假设key是相同的，则替换到原来的值。
          5、最后判断哈希表是否满了(当前哈希表大小*负载因子），如果满了，则扩容

          在get的时候，
          1、还是对key做hash运算，计算出该key所在的index，然后判断是否有hash冲突
          2、没有冲突直接返回，
          3、有冲突  则判断当前数据结构是  链表还是红黑树，分别从不同的数据结构中取出。
           `,
     },
     { 
          title: "集合框架 --- 19、 问题： 如果一个类的实例用作HashMap的键，应该如何正确覆盖equals()和hashCode()方法？",
          content: ` 
           要确保在HashMap中键的行为正确无误，应该同时重写equals()和hashCode()方法。
           这两个方法必须遵循以下原则：
           1、相等性：如果两个对象通过equals()方法判断为相等（即equals()返回true），那么它们必须具有相同的哈希码（即hashCode()方法返回的结果相等）。
           2、哈希不变性：一旦对象创建完成，其hashCode()返回的值在整个生命周期内应当保持不变，即使对象的其他状态发生变化也不应影响其哈希码。
           3、分布均匀：理想情况下，hashCode()应尽量分散对象的分布，降低哈希冲突的概率。
           `,
     },
     { 
          title: "集合框架 --- 20、 问题： 请解释一下HashMap的resize()方法以及在什么时候会被调用？",
          content: ` 
           resize()方法在HashMap中负责扩容操作，当HashMap的大小（size）超过阈值（threshold，即容量 * 加载因子）时会被调用。
           扩容会创建一个新的更大容量的数组，并将原有数组中的所有Entry重新映射到新数组中，这个过程也伴随着rehash操作。
           `,
     },
     { 
          title: "集合框架 --- 21、 问题： 为什么HashMap的大小永远是2的幂次方？",
          content: ` 
           HashMap之所以选择2的幂作为容量是为了方便进行索引计算。通过“&(按位与)”操作符与容量-1进行计算可以快速找到元素在数组中的位置，如果容量是2的幂，那么容量-1的二进制表示就是一串连续的1，这样“hash & (容量-1)”就等同于对hash值做一次模运算，而且速度更快。
           `,
     },
     { 
          title: "集合框架 --- 22、 问题： 在多线程环境下，如果多个线程同时put元素到HashMap中，可能导致什么问题，如何避免？",
          content: ` 
           在多线程环境下，如果不加同步控制，多个线程同时对HashMap进行put操作可能会导致数据不一致，
           例如丢失更新、死循环等问题。为了避免这些问题，可以使用线程安全的ConcurrentHashMap替代HashMap，
           它内部采用了分段锁机制来提高并发性能。如果坚持使用HashMap，需要在外部自行添加适当的同步控制代码。
           `,
     },
     { 
          title: "集合框架 --- 23、 问题：那在HashMap中是怎么判断一个元素是否相同的呢？",
          content: ` 
          1、首先会比较hash值，随后会用 == 运算符和 equals() 来判断该元素是否相同。
          2、说白了就是：如果只有hash值相同，那说明该元素哈希冲突了，如果hash值和equals() || == 都相同，那说明该元素是同一个。  
           `,
     },
     { 
          title: "集合框架 --- 24、 问题：你说HashMap的数据结构是数组+链表/红黑树，那什么情况拿下才会用到红黑树呢？",
          content: ` 
          1、数组的大小大于64且链表的大小大于8的时候才会将链表改为红黑树，当红黑树大小为6时，会退化为链表。
          2、这里转红黑树退化为链表的操作主要出于查询和插入时对性能的考量。
          3、链表查询时间复杂度O(N)，插入时间复杂度O(1)，红黑树查询和插入时间复杂度O(logN)
           `,
     },
     { 
          title: "集合框架 --- 25、 问题：ConcurrentHashMap数据结构",
          content: ` 
          1、JDK 1.7:
          ConcurrentHashMap 使用Segment数组配合HashEntry数组和链表的形式实现，
          Segment继承了ReentrantLock，可以理解为将整个Map分割成多个小的哈希表（Segment），
          每个Segment独立负责一部分数据的读写锁操作，以此实现并发控制。  
          2、JDK 1.8: 取消了Segment分段锁的设计，改为使用CAS + synchronized来保证并发操作的安全性。
          数据结构变为数组+链表/红黑树的形式，与HashMap相似，但是针对并发操作做了很多优化，
          如使用尾部节点自旋+CAS的方式来减少锁的竞争。
           `,
     },
     { 
          title: "集合框架 --- 26、 问题：ConcurrentHashMap 如何实现线程安全？",
          content: ` 
          1、JDK 1.7: 通过Segment分段锁，同一时刻多个线程可以在不同Segment上进行写操作，只有涉及同一个Segment时才需要加锁。
          2、JDK 1.8: 使用了CAS（Compare and Swap）原子操作来保证并发增删改查的安全性，针对某些操作如扩容等，仍然可能使用synchronized进行同步。另外，读操作在大多数情况下是无锁的。
           `,
     },
     { 
          title: "集合框架 --- 27、 问题：ConcurrentHashMap 在迭代时如何处理并发修改异常？",
          content: ` 
          ConcurrentHashMap 提供了弱一致性的迭代器（弱一致性迭代器不会抛出ConcurrentModificationException），在迭代期间允许其他线程对映射进行修改，但迭代器只能看到修改前的映射或者是修改后的映射，不能保证实时可见性。
           `,
     },
     { 
          title: "集合框架 --- 28、 问题：ConcurrentHashMap 初始化和扩容的过程是怎样的？",
          content: ` 
          1、初始化时会根据预设的初始容量和负载因子计算实际容量（初始容量为16，加载因子为0.75），并分配合适的数组大小。
          2、扩容时，新的容量通常为原来的两倍，利用迁移算法将旧数组中的元素迁移到新的数组中，
          这个过程同样是线程安全的，尤其是在JDK 1.8中，使用了重新散列和分裂链表/红黑树的方式。
           `,
     },
     { 
          title: "集合框架 --- 29、 问题：为什么从JDK1.8开始，ConcurrentHashMap放弃了Segment设计而转向了CAS+Synchronized？",
          content: ` 
          1、主要原因是简化了数据结构，降低了内存开销，提高了并发效率。
          2、Segment设计虽然能够细粒度地控制锁，但是在高并发场景下，由于锁的数量固定，容易造成热点问题。
          3、而使用CAS+Synchronized结合，能更好地适应动态变化的并发需求，同时减少锁竞争。
           `,
     },
     { 
          title: "集合框架 --- 30、 问题： 为何 ConcurrentHashMap 不支持 null 键和值？",
          content: ` 
          	考虑到并发环境下的安全性，ConcurrentHashMap规定了键和值都不能为null，因为null作为特殊的标识符，
            如果允许作为键或值，会在并发操作时带来判断困难和潜在的问题。
           `,
     },
     { 
          title: "集合框架 --- 31、 问题：ConcurrentHashMap 在高并发场景下相比其他集合类有哪些优势？",
          content: ` 
          	具备优秀的并发性能，通过锁分离、CAS操作等方式减少了锁竞争，使得在多线程环境下读写操作更为高效，几乎无需担心线程安全问题。
           `,
     },
     { 
          title: "集合框架 --- 32、 问题：什么是 ConcurrentHashMap 的 CAS 操作？举例说明其在 put 操作中的应用。",
          content: ` 
          1、CAS（Compare and Set/Compare and Swap）是一种无锁算法，它会在修改共享变量时先检查该变量是否为预期值，如果是，则更新其值；如果不是，则不做任何修改。
          2、在 ConcurrentHashMap 的put操作中，例如，当向某个桶位置插入新节点时，会使用CAS操作来尝试将新节点设置为桶的头节点，如果在此过程中桶头发生了变化（被其他线程修改过），则CAS操作会失败，当前线程会重试直到成功。
           `,
     },
     { 
          title: "集合框架 --- 33、 问题：ConcurrentHashMap 在并发环境下如何避免无限循环的重试？",
          content: ` 
          1、在 ConcurrentHashMap 的resize（扩容）和putVal等操作中，为了避免因并发导致的无限循环重试，采用了一些策略：
          2、使用自旋+CAS的方式，设定一定的自旋次数限制，超过限制则暂停，让出CPU资源给其他线程，待下次获取CPU时间片后再继续尝试。
          3、在扩容过程中，迁移操作并非一次性完成所有桶的数据迁移，而是采用分散迁移的方式，每次只迁移一部分，降低并发冲突的可能性。
           `,
     },
     { 
          title: "集合框架 --- 34、 问题：请描述一下 ConcurrentHashMap 的 resize 过程以及涉及到的并发问题和解决方案。",
          content: ` 
          1、当ConcurrentHashMap的元素数量达到阈值时，会触发resize操作，即将容量扩大一倍。在这个过程中，原数组中的元素需要被移动到新的更大的数组中去。
          2、并发问题主要包括：    
          - 在扩容过程中，新的元素仍可能被添加到旧数组中，需要有一种机制将其正确地移动到新数组中。    
          - 多个线程同时参与扩容，可能导致元素重复迁移或者遗漏。
          3、解决方案：    
          - 使用辅助变量forwardingNode标记正在进行扩容的桶，新插入的元素会帮助迁移。    
          - 对于正在迁移的桶，其他线程在尝试插入时也会参与到迁移工作，共同完成扩容任务。
           `,
     },
     { 
          title: "集合框架 --- 35、 问题：ConcurrentHashMap 是否保证线程间的操作可见性？",
          content: ` 
          是的，
          ConcurrentHashMap通过volatile关键字保证了线程间的操作可见性。
          例如，table引用以及节点的next引用都是volatile类型，这使得当一个线程修改了map的内容后，其他线程可以立即看到这个修改。
           `,
     },
     { 
          title: "集合框架 --- 36、 问题：说说 ConcurrentHashMap 和 Collections.synchronizedMap(Map<K, V> m) 方法返回的同步Map有何区别？",
          content: ` 
          1、Collections.synchronizedMap() 返回的同步Map是对传入的Map进行包装，其所有方法都被synchronized关键字修饰，
          因此每次只有一个线程能执行操作，实现了线程安全，但牺牲了并发性能。
          2、而ConcurrentHashMap通过更精细的锁机制（如JDK 1.8中的CAS和synchronized块），允许在大部分操作上做到更高的并发性能，更适合高并发场景。
           `,
     },
     { 
          title: "集合框架 --- 37、 问题：ConcurrentHashMap 中为什么采用尾部节点自旋+CAS的方式来减少锁的竞争？",
          content: ` 
           在JDK 1.8版本中，ConcurrentHashMap在插入和删除操作时，首先定位到链表或红黑树的尾部节点，然后通过自旋+CAS的方式尝试更新尾部节点。
           这是因为头部节点往往是最活跃的部分，如果每次都试图获取头部节点的锁，会造成严重的锁竞争。而尾部节点相对稳定，通过这种方式可以大幅减少锁竞争，提高并发效率。
           `,
     },
     { 
          title: "集合框架 --- 38、 问题：集合框架中四种Map实现类在数据结构上的对比",
          content: ` 
          1. HashMap   
          - 数据结构：HashMap内部采用“数组+链表/红黑树”的混合数据结构。初始状态下，它以数组为基础，数组的每个元素是一个链表头结点，当链表长度超过一定阈值时（默认是8），链表会转换为红黑树来减少搜索时间，这样可以保持平均时间复杂度为O(1)。   
          - 插入、删除、查找操作：基于哈希函数计算出键的哈希码并找到数组的位置，发生碰撞时通过链表或红黑树处理冲突。   
          - 顺序性：HashMap本身并不保证元素的顺序，迭代输出的顺序依赖于哈希码分布以及哈希表的变化。
          2. LinkedHashMap   
          - 数据结构：LinkedHashMap继承自HashMap，并在其基础上增加了一个双向链表。每个映射项（Entry）除了包含HashMap中必要的键值对信息外，还包含了前后节点引用，形成了一个有序的链表。   
          - 插入、删除、查找操作：基本与HashMap相同，但额外维护了插入顺序或访问顺序（取决于构造函数参数设置）。  
          - 顺序性：LinkedHashMap保证了迭代顺序，可以是插入顺序或者访问顺序（LRU模式下是最近最少使用的顺序）。
          3. TreeMap  
          - 数据结构：TreeMap采用红黑树（一种自平衡二叉查找树）作为底层数据结构。   
          - 插入、删除、查找操作：基于红黑树的性质，这些操作的时间复杂度为O(log n)，其中n是树中的节点数量。   
          - 顺序性：TreeMap自然有序，键必须实现Comparable接口或者在创建时提供Comparator，以便进行排序。迭代输出的顺序就是键的排序顺序。
          4. ConcurrentHashMap   
          - 数据结构：ConcurrentHashMap在不同的Java版本中有不同的实现方式，但总体上也是采用了分段锁机制下的“数组+链表/红黑树”结构来保证线程安全。   
          - 插入、删除、查找操作：通过分段锁（Segment）机制，在并发环境下能够支持更高的吞吐量，降低锁粒度，使得多个线程可以同时在不同的段内进行操作。   
          - 顺序性：与HashMap类似，不保证元素的顺序，且迭代顺序不确定。

          总结：
          - HashMap适合于一般的键值对存储，追求高速存取，但不关心顺序。
          - LinkedHashMap在HashMap基础上保证了元素的插入或访问顺序。
          - TreeMap用于需要有序键值对的场景，如自然排序或自定义排序。
          - ConcurrentHashMap则是在多线程环境中替代HashMap的理想选择，它提供了更好的并发性能。
           `,
     },
     { 
          title: "集合框架 --- 39、 问题：HashMap与Hashtable区别",
          content: ` 
          HashMap和Hashtable都是Java中的数据结构，用于存储键值对映射关系，它们均实现了java.util.Map接口，
          但在设计和性能特性上有明显的差异：
          1. 线程安全性：   
          - Hashtable是线程安全的，其方法被synchronized关键字修饰，这意味着在多线程环境下不需要额外的同步控制就可以直接使用。   
          - HashMap则是非线程安全的，如果不采取适当的同步措施，在并发修改时可能导致数据不一致或出现死锁等问题。
          对于高并发环境，若需线程安全的HashMap，推荐使用java.util.concurrent.ConcurrentHashMap。
          2. 性能：   
          - 因为线程安全性的要求，Hashtable在执行读写操作时需要进行同步，这可能会影响性能。   
          - HashMap由于没有内置的线程同步机制，所以在单线程环境下通常具有更高的性能。
          3. Null键和值：   
          - Hashtable不允许键和值为null，尝试插入null会导致NullPointerException。   
          - HashMap允许键和值为null，不过只有一个键可以为null，而且一个HashMap中最多只能有一个null键对应的映射。
          4. 继承关系与实现：   
          - Hashtable继承自古老的Dictionary类，而HashMap继承自AbstractMap类。
          5. 迭代器行为：   
          - Hashtable的迭代器遍历顺序遵循元素的插入顺序。   
          - HashMap的迭代器遍历顺序并不保证，尤其是当哈希表调整大小或有元素被删除时，其顺序可能会改变。
          在Java 8及以后版本，HashMap为了提高并发性能引入了红黑树，因此迭代顺序还依赖于哈希表的具体状态和配置。
          6. 扩容机制：   
          - 当容器容量不够用时，两者都会自动扩容，但具体的扩容策略和阈值可能有所不同。
          7. API变化：   
          - Hashtable属于Java早期版本的遗留类，随着Java SDK的发展，HashMap逐渐成为更常用的选择，并且在后续版本中提供了更多的优化和改进。
          综上所述，如果在多线程环境下需要线程安全的Map，应优先考虑使用ConcurrentHashMap而不是Hashtable。而在单线程或者能够确保同步控制的情况下，HashMap通常是更好的选择，因为它提供了更高的性能和更灵活的设计。
           `,
     },
     { 
          title: "集合框架 --- 40、 问题：HashMap与LinkedHashMap区别",
          content: ` 
          HashMap和LinkedHashMap都是Java集合框架中的Map接口实现类，它们之间主要存在以下区别：1. 有序性：   - HashMap是无序的，即它不保证映射关系的迭代顺序。当哈希表调整大小时，原有的键值对顺序可能会被打乱。   - LinkedHashMap是有序的，它不仅实现了Map接口，还维护了元素的插入顺序。默认情况下，它按插入顺序进行迭代，但也可以通过设置构造函数的参数使其按照访问顺序（最近最少使用LRU算法）进行迭代。2. 内部结构：   - HashMap内部采用哈希表（数组+链表/红黑树）结构存储数据。   - LinkedHashMap在HashMap的基础上，每个条目(Entry)除了包含HashMap中的基本字段外，还增加了“前驱”和“后继”引用，形成一个双链表，这样就能记录元素间的顺序关系。3. 性能比较：   - HashMap查找、插入和删除操作的时间复杂度在理想情况下为O(1)，但在哈希冲突严重时可能会退化至O(n)。   - LinkedHashMap由于需要维护额外的链表结构，所以在插入、删除等操作时，除了完成HashMap的基本操作之外，还需要更新链表结构，所以相比于HashMap来说，这些操作的开销稍大，特别是当进行大量迭代时，尽管这种开销通常很小。4. 应用场景：   - HashMap适用于对顺序没有要求，且追求高效查找、删除和插入的场景。   - LinkedHashMap适用于需要保持元素插入顺序或者最近访问顺序（LRU缓存淘汰策略）的场景，比如实现LRU缓存、需要遍历输出顺序与插入顺序一致的情况。总结起来，LinkedHashMap在功能上扩展了HashMap，保留了快速查找的优势，同时引入了有序性这一重要特性，从而满足了更多特定的需求场景。
           `,
     },
     { 
          title: "集合框架 --- 41、 问题：HashMap和ConcurrentHashMap区别",
          content: ` 
          JDK 7中HashMap和ConcurrentHashMap的主要区别：
          1、线程安全性：	
          1.1、HashMap 在JDK 7中是非线程安全的，如果在多线程环境下不加同步控制直接使用HashMap可能会出现死锁、数据不一致等问题。	
          1.2、ConcurrentHashMap 在JDK 7中设计为线程安全的数据结构，它使用了分段锁（Segment）的概念，将整个散列表划分为多个	Segment，每个Segment有自己的锁，
          从而允许多个线程在同一时间对不同Segment进行操作，提高了并发性能。

          2、实现机制：	
          2.1、HashMap 在JDK 7中 内部结构是数组+链表。	
          2.2、ConcurrentHashMap 在JDK 7中同样采用数组+链表结构，但它的数组单元Segment本身就是可重入锁，每个Segment管理一部分	桶。
          3、扩容机制：	当HashMap或ConcurrentHashMap需要扩容时，都会创建一个新的更大的散列桶数组并将原数组中的元素迁移到新数组中，
          但在ConcurrentHashMap中，扩容过程会尽量减小对其他线程的影响。

          JDK 8中HashMap和ConcurrentHashMap的新变化：
          1、HashMap：	
          1.1、在JDK 8中，HashMap仍然不是线程安全的，但它引入了一些优化，如在单链表过长时（超过8个元素）会转化为红黑树，从而降低查找、插入和删除的时间复杂度至O(log N)。	
          1.2、JDK 8的HashMap同样进行了扩容改进，不再像以前那样简单地复制所有元素，而是采取了一种更复杂的迁移策略，有利于提高并发扩容时的性能。
          2、ConcurrentHashMap：	
          2.1、在JDK 8中，ConcurrentHashMap摒弃了Segment分段锁的设计，改为使用“CAS”（Compare And Swap）和synchronized来保证线程安全，整体上只有一个大的table，这简化了数据结构并且提高了并发性能。	
          2.2、同样引入了红黑树结构来优化链表过长的情况，从而保证即使在高并发场景下也能维持较好的性能表现。	
          2.3、扩容方面，虽然仍是基于CAS操作进行并发扩容，但由于取消了Segment，其并发扩容的逻辑相比JDK 7有所改变。
          总结来说，从JDK 7到JDK 8，HashMap和ConcurrentHashMap都针对并发性和性能进行了优化，其中ConcurrentHashMap的改动尤为显著，去掉了分段锁，改用了更细粒度的锁机制，使得并发性能有了显著提升。同时，两者都在内部数据结构上引入了红黑树以适应大规模数据存储需求。
           `,
     },
     { 
          title: "集合框架 --- 42、 `问题：ConcurrentHashMap 与 Hashtable区别",
          content: ` 
          除了线程安全实现方式（Hashtable使用synchronized，ConcurrentHashMap使用CAS和分段锁/JDK 1.8之后的进一步优化），
          它们还存在以下区别：   
          1、Hashtable不允许键值为null，而ConcurrentHashMap允许键和值都为null（但只能有一个null键）。  
          2、Hashtable的方法调用都需要进行同步，性能较低；ConcurrentHashMap在保证线程安全的同时，通过减少锁粒度提升了性能。   
          3、Hashtable不支持泛型，而ConcurrentHashMap支持泛型。
           `,
     },
     { 
          title: "集合框架 --- 43、 问题：线程安全的Map",
          content: ` 
          1、ConcurrentHashMap，是线程安全的Map实现类，它在juc包下的。
          2、线程安全的Map实现类除了ConcurrentHashMap还有一个叫做Hashtable。
          3、也可以使用Collections来包装出一个线程安全的Map。但无论是Hashtable还是Collections包装出来的都比较低效（因为是直接在外层套synchronize），所以我们一般有线程安全问题考量的，都使用ConcurrentHashMap
           `,
     },
];
