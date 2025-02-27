export default [
    {
        title: "HTML --- 1.src和href的区别",
        content: `
        src指向外部资源；href指向网络资源所在位置。
        src 用于替换当前元素，href 用于在当前文档与引用资源之间确立联系。
        浏览器解析时，src会暂停其他资源的下载和处理，直到这个资源加载执行完才会进行之后的操作；href会并行下载资源并且不会停止对当前文档的处理
        `
    },
    {
        title: " HTML --- 2.defer和async的区别",
        content: `
        首先 defer 和 async 都是去异步加载外部的JS脚本文件，它们都不会阻塞页面的解析
        然后他们的区别是：执行顺序和脚本是否异步执行；
        1、执行顺序：多个带async属性的标签，并不能保证加载的顺序；多个带defer属性的标签，他是按照加载顺序执行；
        2、脚本是否异步执行：async属性，表示后续文档的加载和执行与js脚本的加载和执行是异步进行的；defer属性，加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded事件触发执行之前。
        `
    },
    {
        title: "HTML --- 3.对HTML语义化理解",
        content: `
        内容语义话 + 代码语义化  也就是用正确的标签做正确的事
        标签 头部 header 导航 nac 区块 section  主要区域 main 主要内容 article
        侧边栏 aside  底部 footer
        `
    },
    {
        title: "HTML --- 4.HTML5有哪些更新",
        content: `
        1、新增语义化标签: nav、header、footer、aside、section、article
        2、音频、视频标签:audio、video
        3、数据存储:localStorage、sessionStorage
        4、canvas (画布)、Geolocation (地理定位)、websocket (通信协议) 
        5、input标签新增属性:placeholder、autocomplete、autofocus、required
        6、history APl: go、forward、back、 pushstate
        `
    },
]