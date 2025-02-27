export default [
  {
    title: "Node --- 1. 对Node.js 的理解",
    content: `
      Node.js 是一个开源与跨平台的 JavaScript 运行时环境
      在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核），利用事件驱动、非阻塞和异步输入输出模型等技术提高性能
      可以理解为 Node.js 就是一个服务器端的、非阻塞式I/O的、事件驱动的JavaScript运行环境
      `,
  },
  {
    title: "Node --- 2. Node.js 的优缺点",
    content: `
      优点：
        处理高并发场景性能更佳
        适合I/O密集型应用，值的是应用在运行极限时，CPU占用率仍然比较低，大部分时间是在做 I/O硬盘内存读写操作

      因为Nodejs是单线程，带来的缺点有：
        不适合CPU密集型应用
        只支持单核CPU，不能充分利用CPU
        可靠性低，一旦代码某个环节崩溃，整个系统都崩溃
      `,
  },
  {
    title: "Node --- 3. Node. js 有哪些全局对象",
    content: `
      Class:Buffer  可以处理二进制以及非Unicode编码的数据，在Buffer类实例化中存储了原始数据。Buffer类似于一个整数数组，在V8堆原始存储空间给它分配了内存，一旦创建了Buffer实例，则无法改变大小
      process       进程对象，提供有关当前进程的信息和控制
      console       用来打印stdout和stderr
      clearInterval、setInterval    设置定时器与清除定时器
      clearTimeout、setTimeout  设置延时器与清除延时器
      global        全局命名空间对象，上面讲到的process、console、setTimeout等都有放到global中
      还有一些模块级别的全局变量
      __dirname     获取当前文件所在的路径，不包括后面的文件名
      __filename    获取当前文件所在的路径和文件名称，包括后面的文件名称
      exports       module.exports 用于指定一个模块所导出的内容，即可以通过 require() 访问的内容
      module        对当前模块的引用，通过module.exports 用于指定一个模块所导出的内容，即可以通过 require() 访问的内容
      require       用于引入模块、 JSON、或本地文件。 可以从 node_modules 引入模块。
      `,
  },
  {
    title: "Node --- 4.  Node 中的 process 的理解",
    content: `
      process 对象是一个全局变量，提供了有关当前 Node.js进程的信息并对其进行控制，作为一个全局变量
      我们都知道，进程计算机系统进行资源分配和调度的基本单位，是操作系统结构的基础，是线程的容器
      当我们启动一个js文件，实际就是开启了一个服务进程，每个进程都拥有自己的独立空间地址、数据栈，像另一个进程无法访问当前进程的变量、数据结构，只有数据通信后，进程之间才可以数据共享
      由于JavaScript是一个单线程语言，所以通过node xxx启动一个文件后，只有一条主线程
      process.env：环境变量，例如通过 process.env.NODE_ENV 获取不同环境项目配置信息
      process.nextTick：这个在谈及 EventLoop 时经常为会提到
      process.pid：获取当前进程id
      process.ppid：当前进程对应的父进程
      process.cwd()：获取当前进程工作目录，
      process.platform：获取当前进程运行的操作系统平台
      process.uptime()：当前进程已运行时间，例如：pm2 守护进程的 uptime 值
      进程事件： process.on(‘uncaughtException’,cb) 捕获异常信息、 process.on(‘exit’,cb）进程推出监听
      三个标准流： process.stdout 标准输出、 process.stdin 标准输入、 process.stderr 标准错误输出
      process.title 指定进程名称，有的时候需要给进程指定一个名称
      `,
  },
  {
    title: "Node --- 5. Node 中的 fs模块的理解",
    content: `
      fs（filesystem），该模块提供本地文件的读写能力，基本上是POSIX文件操作命令的简单包装可以说，所有与文件的操作都是通过fs核心模块实现
      它有很多方法，比如：
      fs.readFileSync       同步读取
      fs.readFile           异步读取方法
      writeFileSync         文件同步写入
      writeFile             文件异步写入
      appendFileSync        文件追加写入
      appendFile            文件异步追加写入
      copyFileSync          文件同步拷贝
      copyFile              文件异步拷贝
      appendFile            文件异步追加写入
      mkdirSync             同步创建目录
      mkdir                 异步创建目录
      `,
  },
  {
    title: "Node --- 6. Node 中的 Buffer 的理解",
    content: `
      在Node应用中，需要处理网络协议、操作数据库、处理图片、接收上传文件等，在网络流和文件的操作中，要处理大量二进制数据，而Buffer就是在内存中开辟一片区域（初次初始化为8KB），用来存放二进制数据
      `,
  },
];
