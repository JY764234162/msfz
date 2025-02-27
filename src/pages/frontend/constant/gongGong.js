export default [
    {
        title: "公共 --- 1.时间复杂度和空间复杂度",
        content: `
        时间复杂度是指执行这个算法所需要的计算工作量； 而空间复杂度是指执行这个算法所需要的内存空间。
        时间复杂度的话像常见的常数就是O(1)，比如直接访问对象的属性或者数组的元素或者返回函数固定值之类的，然后对数就是O(log n)的话比较典型的就二分查找然后就是O(n)、O(n^2)平方、就是一层循环和嵌套循环。
        空间复杂度的话像常见的常数就是O(1)，比如交换两个变量的值或者数组反转之类的不需要额外的空间，然后对数就是O(log n)的话比较典型的就二分查找每次迭代中只需要存储几个变量这种，然后就是O(n)、O(n^2)平方、就比如创建一个那个元素的数组，平方就是二维数组就是矩阵嘛
        `
    },
    {
        title: "公共 --- 2.前端数据库indexdb",
        content: `
        1.键值对存储。IndexedDB内部采用对象仓库（Object Store）存放数据，所有类型的数据都可以直接存入，包括JavaScript对象。在对象仓库中，数据以键值对的形式保存，每一个数据记录都有对应的主键，且主键是唯一的，不可重复，否则会抛出错误。
        2.异步。IndexedDB在操作时不会锁死浏览器（异步线程，不会挂起其他线程），用户依然可以可以进行其他操作。这与LocalStorage形成对比，后者的操作是同步的（会挂起其他线程）。异步设计是为了防止读写大量数据的时候拖慢网页的表现性能。
        3.支持事务。IndexedDB是支持事务（Transaction）的，也同样支持事务的ACID特性。这意味着在一系列的操作步骤中，只要有一步失败，整个事务就会取消，数据库将回滚到事务发生之前的状态，不存在只改写一部分数据的情况，保证数据的完整性和一致性。
        4.同源限制。IndexedDB受浏览器同源策略的限制，每一个数据库都严格对应创建它的域名。网页只能访问自身域名下面的数据库，而不能访问跨域的数据库。
        5.存储空间大。IndexedDB的存储空间比LocalStorage大得多，一般来说不小于250MB，甚至没有上限。
        6.支持二进制存储。IndexedDB不仅可以存储字符串，还可以存储二进制数据（ArrayBuffer对象和Blob对象）。
        `
    },
    {
        title: "公共 --- 3.什么是websocket",
        content: `
        WebSocket用于在Web浏览器和服务器之间进行任意的双向数据传输的一种技术。WebSocket协议基于TCP协议实现，包含初始的握手过程，以及后续的多次数据帧双向传输过程。其目的是在WebSocket应用和WebSocket服务器进行频繁双向通信时，可以使服务器避免打开多个HTTP连接进行工作来节约资源，提高了工作效率和资源利用率
        `
    },
    {
        title: "公共 --- 4.websocket有哪些特点",
        content: `
        与http协议有良好的兼容性；
        建立在TCP协议之上，和http协议同属于应用层；
        数据格式比较轻量，性能开销小，通信高效；
        可以发送文本，也可以发送二进制；
        没有同源限制，可以与任意服务器通信。
        `
    },
    {
        title: "公共 --- 5.http和websocket的区别",
        content: `
        http协议是短链接，因为请求之后，都会关闭连接，下次请求需要重新打开链接。 websocket协议是一种长连接，只需要通过一次请求来初始化连接，然后所有请求和响应都是通过TCP链接进行通信。
        `
    },
    {
        title: "公共 --- 6.WebSocket中的常用注解有哪些",
        content: `
        @ServerEndpoint ：类似与servlet中的 RequestMapping
        @OnOpen：类似与servlet中的 init（）初始化
        @OnClose：类似与servlet中的destroy() 销毁
        @OnMessage：类似于servlet中的service请求 （意思就是发送数据的方式 @doPost() / @doGet() 组合）
        `
    },
]