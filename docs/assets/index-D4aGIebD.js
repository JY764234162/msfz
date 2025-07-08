import{r as m,c as A,u as C,f as L,h as T,N as I,i as w}from"./react-CTcOOvof.js";import{l as j}from"./lodash-B8yWFsQz.js";import{F as d,I as g,U as N,L as E,B as U,s as h,a as p,S as _,A as B,b as W,c as z,C as F}from"./antd-BQcngvxv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function c(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=c(o);fetch(o.href,i)}})();var P={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $=m,G=Symbol.for("react.element"),K=Symbol.for("react.fragment"),q=Object.prototype.hasOwnProperty,X=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,c){var a,o={},i=null,l=null;c!==void 0&&(i=""+c),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(a in t)q.call(t,a)&&!Q.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)o[a]===void 0&&(o[a]=t[a]);return{$$typeof:G,type:e,key:i,ref:l,props:o,_owner:X.current}}f.Fragment=K;f.jsx=D;f.jsxs=D;P.exports=f;var n=P.exports,b={},x=A;b.createRoot=x.createRoot,b.hydrateRoot=x.hydrateRoot;const Y="_title_1gnqx_15",Z="_wave_1gnqx_1",y={"wave-button":"_wave-button_1gnqx_1",title:Y,wave:Z},ee=({children:e,...t})=>n.jsxs("a",{className:y["wave-button"],...t,children:[n.jsx("div",{className:y.title,children:e}),n.jsx("div",{className:y.wave})]}),te="_button_1afpl_1",ne={button:te},oe=({children:e,...t})=>n.jsx("button",{className:ne.button,...t,children:e}),ae="_button_d876r_1",re={button:ae},ie=({children:e,...t})=>n.jsx("a",{className:re.button,...t,children:e}),se="_button_4ddu8_1",ce={button:se},V=({children:e,...t})=>n.jsx("a",{className:ce.button,...t,children:e});function le(){const e=C();return n.jsxs("div",{className:"app-container",children:[n.jsxs("div",{className:"app-header",children:[n.jsx("h1",{children:"面试题库"}),n.jsx("p",{children:"选择你感兴趣的方向"})]}),n.jsxs("div",{className:"button-grid",children:[n.jsx(ee,{onClick:()=>e("/frontend"),style:{width:250,height:80,fontSize:30},children:"前端"}),n.jsx(ie,{onClick:()=>e("/backend"),style:{width:250,height:80,fontSize:30},children:"后端"}),n.jsx(oe,{onClick:()=>e("/linux"),style:{width:250,height:80,fontSize:30},children:"Linux运维"}),n.jsx(V,{onClick:()=>e("/cloudComputing"),style:{width:250,height:80,fontSize:30},children:"云计算"}),n.jsx(V,{onClick:()=>e("/dataAnalysis"),style:{width:250,height:80,fontSize:30},children:"数据分析"})]})]})}const ue=[{username:"msfz",password:"msfz"},{username:"heimeng",password:"asd123."}],de=()=>{const e=C(),[t]=d.useForm(),[c,a]=m.useState(!1),o=async i=>{a(!0);const{username:l,password:M}=i,r=ue.find(H=>H.username===l),O=Math.random()*300+300;setTimeout(()=>{a(!1),r||h.error("用户名错误，请联系管理员申请账号"),(r==null?void 0:r.password)===M?(h.success("登录成功"),sessionStorage.setItem("token",window.uuid),e("/"),setTimeout(async()=>{h.info("登陆过期，请重新登录"),sessionStorage.removeItem("token"),e("/login")},2*60*60*1e3)):h.error("密码错误，请联系阿鱼添加账号")},O)};return n.jsx("div",{className:"login-container",children:n.jsxs("div",{className:"login-box",children:[n.jsxs("div",{className:"login-header",children:[n.jsx("h2",{children:"面试题库"}),n.jsx("p",{children:"专注技术面试题整理与分享"})]}),n.jsxs(d,{form:t,className:"login-form",onFinish:o,autoComplete:"off",children:[n.jsx(d.Item,{name:"username",rules:[{required:!0,message:"请输入用户名"}],children:n.jsx(g,{placeholder:"用户名",prefix:n.jsx(N,{})})}),n.jsx(d.Item,{name:"password",rules:[{required:!0,message:"请输入密码"}],children:n.jsx(g.Password,{placeholder:"密码",prefix:n.jsx(E,{})})}),n.jsx(d.Item,{children:n.jsx(U,{type:"primary",htmlType:"submit",loading:c,block:!0,children:"登录"})})]})]})})};function k(e,t){return new RegExp(t,"i").test(e)}function J(e,t,c){return t?e.replace(new RegExp(t,"gi"),`<span style="color: ${c?"yellow":"red"};font-weight: bold;">$&</span>`):e}const v=({arr:e})=>{const[t,c]=m.useState(""),[a,o]=m.useState(!0),i=C(),l=m.useMemo(()=>t?e.filter(r=>k(r.title,t)||k(r.content,t)):e,[e,t]),M=r=>{z(r),h.success("复制成功")};return n.jsxs("div",{className:`index-container ${a?"dark":"light"}`,children:[n.jsxs("div",{className:"sidebar",children:[n.jsx("div",{className:"sidebar-header",children:"目录"}),n.jsx(p,{className:"sidebar-list",dataSource:l,renderItem:r=>n.jsx(p.Item,{className:"sidebar-item",children:n.jsx("a",{href:`#${r.title}`,children:r.title})})})]}),n.jsxs("div",{className:"main-content",children:[n.jsxs("div",{className:"search-header",children:[n.jsx("div",{className:"search-section",children:n.jsx(g,{prefix:n.jsx(_,{}),onChange:j.debounce(r=>c(r.target.value),300),placeholder:"搜索题目或内容...",allowClear:!0})}),n.jsxs("div",{className:"header-actions",children:[n.jsx(B,{className:"back-button",onClick:()=>i("/")}),n.jsx(W,{checkedChildren:"🌙",unCheckedChildren:"☀️",defaultChecked:!0,onChange:r=>o(r)})]})]}),n.jsx(p,{className:"content-list",itemLayout:"vertical",dataSource:e,renderItem:r=>n.jsx(p.Item,{onClick:()=>M(r.title+`
`+r.content),id:r.title,className:"content-item",children:n.jsx(p.Item.Meta,{title:n.jsx("h3",{className:"content-title",dangerouslySetInnerHTML:{__html:J(r.title,t,a)}}),description:n.jsx("div",{className:"content-description",dangerouslySetInnerHTML:{__html:J(r.content,t,a)}})})},r.title)})]})]})},pe=[{title:"JS --- 1.基本数据类型",content:`
    JavaScript 共有八种数据类型，分别是
    Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt。
    其中 Symbol 和 BigInt 是 ES6 中新增的数据类型
  `},{title:"JS --- 2.let、const、var的区别",content:`
    1. let和const有暂时性死区，var没有
    2. let和const声明的变量具有块级作用域，var没有
    3. let和const不可以重复声明，var可以
    4. const赋值后不可以重新赋值，let和var可以重新赋值
    5. const必须有初始值、let和var不需要
  `},{title:"JS --- 3.数据类型检测的方式有",content:`
    1. typeof   除了null 的基本数据类型都能正确判断，复杂数据类型判断为object 
    2.  instanceof   可以正确判断对象的类型，原理是判断在其原型链中能否找到该类型的原型。 
    3.  constructor   原理是通过构造函数来进行判断
    4.  Object.prototype.toString.call   可以判断所有数据类型
  `},{title:"JS --- 4.null 和 undefined 区别 ",content:`
    undefined 代表的含义是未定义，null 代表的含义是空对象。一般变量声明了但还没有定义的时候会返回undefined，null 主要用于赋值给一些可能会返回对象的变量，作为初始化。 
  `},{title:"JS --- 5.判断一个对象为空对象的方式",content:`
    1.JSON.stringfy({})==='{}' （转化为字符串对比）
    2.Object.keys({}).length===0（获取对象的key数组的长度为0）
    3.Object.values({}).length===0 （获取对象的value数组的长度为0）
    4.Object.hasOwnProptyName({}).length===0（获取自身属性数组长度为0）
    5.使用for in循环遍历，在遍历里返回false，外部返回true
  `},{title:"JS --- 6.箭头函数和普通函数的区别",content:`
    1.箭头函数没有自己的this
    2.箭头函数不能使用关键字new，会报错
    3.箭头函数不能作为构造函数
    4.箭头函数没有prototype（原型）
    5.箭头函数没有arguments（参数列表）
    6.箭头函数不能作为生成器函数
    `},{title:"JS --- 7.this指向",content:`
    1.this指向函数的直接调用者（而非间接调用者，也就是.前面的）
    2.如果有new关键字，this指向new出来的那个对象
    3.在事件中，this指向目标元素，特殊的是IE的attachEvent中的this总是指向全局对象window。
    `},{title:"JS --- 8.跨域",content:`
    跨域就是，从网页去请求另一个域名的资源时，如果有域名、端口、协议其中一个不同，都会导致浏览器跨域。这是浏览器的一种保护机制。
    常用解决方案：
    - 跨域资源共享（CORS）
    - nginx代理跨域 
    - nodejs中间件代理跨域
    - jsonp跨域
    - postMessage
    产生跨域的原因：(照着读就行)
      因为浏览器有一个安全机制叫同源策略。同源就是指协议、域名、端口都一样，如果任意一项不一致就会出现跨域。简单点说就是，你的网页URL和你调用的接口URL不是一个地方的，浏览器觉得有安全风险，不想让你使用这个接口的数据。
    解决方法：常用的有3种
      1、用的最多的就是服务器代理（proxy）
      代理服务器是一种通过在同一个域名下设置一个代理服务器，将需要跨域访问的请求先发送到代理服务器上，再由代理服务器向目标服务器发出请求，并将请求结果返回给客户端的技术。
      这样客户端就可以避免直接访问跨域服务器，从而可以绕开浏览器的同源策略。你像vue项目根目录下找到vue.config.js文件，配置proxy对象，react的话可以直接在package.json配置文件中配置
      2.然后是CORS，它就是一种通过服务器设置响应头信息，允许指定域名的请求跨域访问资源，实现的跨域资源共享。具体就是，在服务端设置 Access-Control-Allow-Origin(俄塞斯康戳俄拉奥俄瑞真) 响应头字段来指定允许的来源域名，以及其他相关的响应头信息。这个需要后端配置相应的响应头信息，而且老版本浏览器不支持比如 IE8 IE9
      3.再就是JSONP它通过动态创建<script>标签来获取跨域资源，利用回调函数把数据传递回来。
      浏览器把请求资源的URL当<script>标签的src属性值，然后把这个<script>标签插入到文档中。因为<script>标签的加载行为是通过GET请求实现的，因此JSONP只能发送GET请求。
    `},{title:"JS --- 9.cookie和storage的区别",content:`
    1.存储大小不同，cookie空间只有4k，localStorage和SeesionStorage有5M
    2.cookie会自动携带在请求中，localStorage和SeesionStorage不会
    3.生命周期不同，cookie可以设置生命周期，localstorage生命周期是永久，sessionstorage生命周期是会话级别，浏览器关闭就销毁
    4.作用域不同，cookie前后端都可以修改，storage只用于前端
    `},{title:"JS --- 10.get和post的区别",content:`
    1.请求方式不同，一种语意是获取，一种是提交，通常在请求数据时用get，修改数据时用post
    2.参数位置不同，get 是在拼接在url后面，post是在请求体body里
    3.参数类型不同，get只能携带查询字符串，post可以携带json、formdata格式还有其他格式
    4.get参数长度有限制，post无限制
    4.get是明文传递参数，post是密文，get不安全
    5.get会被浏览器主动缓存，post不会
    `},{title:"JS --- 11.事件轮询",content:` 
    JavaScript 是单线程的，同一时间只能做一件事。所有任务都需要排队，前一个任务结束，才会执行后一个任务，为了保证任务有序的执行，事件轮询就是单线程任务调度的一种方式，单线程任务分为同步任务和异步任务，而异步任务又分为宏任务和微任务
    过程： 浏览器会首先执行宏任务， 如果执行过程中，遇到宏任务，就把他加入宏任务队列，遇到微任务，就把他加入微任务队列，当前宏任务执行完后，会判断 微任务列表 中是否有任务，如果有，执行微任务，当所有微任务执行完后，再执行下一个宏任务，不断循环。
    宏任务：主代码块、setTimeOut、setInterval、script、I/O操作、UI渲染
    微任务：promise、async/await(返回的也是一个promise)、process.nextTick
   `},{title:"JS --- 12.Hash和history的区别",content:`
    hash与history一般指前端框架中的路由模式，对应两种路由 hash路由和history路由，区别如下:
    1. 浏览器url中hash 路由带了一个很丑的 #，而history是没有的
    2. hash即浏览器地址栏 URL 中的 # 符号，hash 虽然出现在 URL 中，但不会被包括在 HTTP 请求中，因此改变 hash 不会重新加载页面
    3. history利用了 HTML5新增的 pushState() 和 replaceState() 方法，在已有 back()、forward()、go() 的基础上，提供了对历史记录进行修改的功能。调用pushState() 和 replaceState()时，虽然改变了当前的 URL，但浏览器不会向后端发送请求，但如何用户刷新页面，会导致浏览器向服务器发起请求，如后端没有做出适当的响应，则会显示404页面
    4. hash路由兼容性比histroy路由好
    `},{title:"JS --- 13.强缓存和协商缓存",content:`
    浏览器缓存主要分为强缓存（也称本地缓存）和协商缓存（也称弱缓存）。浏览器在第一次请求发生后，再次发送请求时
    强缓存：浏览器请求某一资源时，会先获取该资源缓存的header信息，然后根据header中的Cache-Control和Expires来判断是否过期。若没过期则直接从缓存中获取资源信息，包括缓存的header的信息，所以此次请求不会与服务器进行通信。这里判断是否过期，则是强缓存相关。
    协商缓存:协商缓存就是由服务器来确定缓存资源是否可用，所以客户端与服务器端要通过某种标识来进行通信，从而让服务器判断请求资源是否可以缓存访问。主要看响应头的Etag和last-modify这两个字段.
    强缓存状态码200，协商缓存304.
   `},{title:"JS --- 14.url过程",content:`
    1. URL解析：当在浏览器地址栏输入URL后，浏览器会判断这个URL的合法性，以及是否有可用缓存。如果判断是URL则进行域名解析，如果不是URL，则直接使用搜索引擎搜索。
    2. 域名解析：浏览器首先会解析域名，获取对应的IP地址。这个过程涉及到了域名解析服务器的查询和转发，如果本地DNS缓存中有对应的条目，则可以直接使用缓存的IP地址。
    3. TCP连接：获取到IP地址后，浏览器便会与服务器建立TCP连接，包括客户端向服务器发送SYN(同步)报文，服务器回复SYN+ACK(同步/应答)报文，最后客户端再回复ACK(应答)报文，完成三次握手过程。
    4. 发送HTTP请求：TCP连接建立后，浏览器便会向服务器发送HTTP请求报文，其中包括请求方法、路径、协议版本等信息，以及请求头部信息等。
    5. 服务器响应：服务器接收到请求后，会从服务器文件系统或者处理逻辑中获取到数据，生成HTTP响应报文，并将其返回给浏览器。
    6. 浏览器渲染：当浏览器接收到响应报文后，会对HTML文档进行解析，并构建dom树、css树、渲染树等，最终将页面呈现给用户。
    7. 连接关闭：当浏览器从服务器接收到所有需要的数据后，就会关闭TCP连接。
    `},{title:"JS --- 15.浏览器渲染过程",content:`
    1. 解析html，浏览器首先解析HTML文档，将其转化为dom树。这个过程中，浏览器会将HTML标签转化为节点，形成DOM树的结构。
    2. 解析CSS。浏览器解析CSS文件，构建css树。CSS树是包含所有CSS样式信息的树结构。
    3. 构建渲染树。将DOM树和CSSOM树合并，形成渲染树。渲染树只包含那些需要显示在页面上的元素，并且每个元素根据CSSOM包含了相应的样式信息。
    4. 布局计算。根据渲染树的结构，计算每个节点在屏幕上的大小、位置等属性，生成布局信息。这个过程涉及到元素的尺寸和位置的计算，可能会发生回流和重绘。
    5. 页面绘制。将生成的布局信息交给浏览器的绘图引擎，通过GPU加速将像素绘制到屏幕上。这一步将布局信息转化为实际的视觉展示。
    6. 执行JavaScript代码。浏览器的主线程负责解析和执行JavaScript代码。如果JavaScript代码修改了DOM，这可能会影响渲染树的构建和页面的绘制。
    `},{title:"JS --- 16.script脚本的异步加载顺序",content:`
    script有两种异步加载方式  分别是defer与async
    defer与async的区别是：
    defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；
    async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。
    另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。
    `},{title:"JS --- 17.ES6模块化和commonjs模块化区别",content:`
    1.语法不同（ES Module使用import导入，export或者export default导出
      CommonJS使用require导入，exports导出）
    2.加载时机不同
      ES Module是编译时加载，代码执行前，静态分析阶段，使用import函数时是运行时加载
      CommonJS是运行时加载，必须等模块内所有代码运行结束后才能导出
    3.加载方式不同
      ES Module是异步加载，不会阻塞代码
      CommonJS是同步加载，如果加载的模块够大时，可能会阻塞后续代码
    4.导出方式不同
      ES Module是导出值的引用，多个文件引入同一个模块得到的引用是同一个
      CommonJS是值的拷贝
    5.效率不同
      ES Module加载效率更高，编译时加载、模块缓存机制、并行加载、tree-shaking
      CommonJS效率相对较低
    6.导出的内容不同
      ES Module是编译阶段静态分析，导出静态定义，所以很多ES Module模块化的优化都是在这	个阶段做的，这也就是ES Module能够更好的支持tree shaking的原因
      CommonJS导出的是对象，必须加载完模块内的所有代码才能生成导出对象，导致commonjs	不好优化
    7.ES Module导出的变量是只读的不能修改，修改了会报错，CommonJS导出的变量是可以修改的，这是因为ES Module导出的是引用，如果可修改会影响其他模块的导入，commonjs导出的是值的拷贝，不会影响
  `},{title:"JS --- 18.es6新特性",content:`
    1.class 类
    2.let、const变量声明方式
    3.新增了promise异步
    4.新增了symbol基本数据类型
    5.新增了proxy （代理）Api
    6.新增了set、map数据结构
    7.es6模块化
    8.新增了箭头函数
    9.新增了模板字符串
    10.新增了...扩展运算符
    11.新增了生成器函数
    12.for...of循环
     `},{title:"JS --- 19.forin 和 forof 的区别",content:`
    遍历对象时：for…of 遍历获取的是对象的键值，for…in 获取的是对象的键名； 
    遍历数组时：for…in 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，for…of 只返回数组的下标对应的属性值 
    总的来说for...in适合遍历对象，for...of适合遍历数组等可迭代的数据类型（数组、字符串等）
    `},{title:"JS --- 20.原型和原型链",content:`
    原型 就是构造函数的prototype属性，它的属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。
    原型链 就是当访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，这种链状结构就叫做原型链
    `},{title:"JS --- 21.继承方式",content:`
    （1）原型链的方式来实现继承，缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。 
    （2）借用构造函数的，原理：在子类型的函数中调用超类型的构造函数来实现的，问题就是无法实现函数方法的复用。 
    （3）组合继承，通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。
    （4）原型式继承，原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。
    （5）寄生式继承，寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是自定义类型时。缺点是没有办法实现函数的复用。
    （6）寄生式组合继承，组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。
    `},{title:"JS --- 21.事件代理和事件委托",content:`
    事件代理 也就是 事件委托，不是直接给标签添加事件 是给标签的父级添加事件 通过 事件对象 判断触发事件的标签对象是谁 执行不同的函数程序的语法形式
    委托的优点： 减少内存消耗、动态绑定事件
    `},{title:"JS --- 22.面向对象与面向过程的区别",content:`
    面向过程就是拆解出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候一个一个依次调用就可以了；
    面向对象是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为。
    `},{title:"JS --- 23.作用域、作用域链",content:`
    js作用域有两种
    （1）全局作用域 
    最外层函数和最外层函数外面定义的变量拥有全局作用域所有未定义直接赋值的变量自动声明为全局作用域
    （2）函数作用域 函数作用域声明在函数内部的变量，一般只有固定的代码片段可以访问到 作用域是分层的，内层作用域可以访问外层作用域，反之不行
    作用域链： 在当前作用域中查找所需变量，如果在自己作用域找不到该变量就去父级作用域查找，依次向上级作用域查找，直到访问到window 对象就被终止，这一层层的关系就是作用域链。
    `},{title:"JS --- 24.垃圾回收机制",content:`
    垃圾回收是动态存储管理技术，会自动地释放"垃圾"(不再被程序引用的对象)，按照特定的垃圾收集算法来实现资源自动回收的功能。
    工作流程：
      1.垃圾回收器，在运行的时候会给存储在内存中的所有变量都加上标记。
      2.去掉环境中的变量以及被环境中的变量引用的变量的标记。
      3.再被加上标记的会被视为准备删除的变量。
      4.垃圾回收器完成内存清除工作，销毁那些带标记的值并回收他们所占用的内存空间。
      常用的两种方法：
      1.标记清除（make-and-sweep）
      当变量进入执行环境是，就标记这个变量为“进入环境“。进入环境的变量所占用的内存就不能释放，当变量离开环境时，则将其标记为“离开环境“
      垃圾回收程序运行的时候，会标记内存中存储的所有变量。然后，它会将所有在上下文中的变量，以及被在上下文中的变量引用的变量的标记去掉
      在此之后再被加上标记的变量就是待删除的了，原因是任何在上下文中的变量都访问不到它们了
      2.引用计数 垃圾回收器会按照固定的时间间隔周期性的执行。
      就是语言引擎有一张"引用表"，保存了内存里面所有的资源（通常是各种值）的引用次数。如果一个值的引用次数是0，就表示这个值不再用到了，因此可以将这块内存释放
      如果一个值不再需要了，引用数却不为0，垃圾回收机制无法释放这块内存，从而导致内存泄漏
    `},{title:"JS --- 25.节流和防抖",content:`
    节流：节流是指当一个事件触发的时候,为防止事件的连续频繁触发,设置定时器,达到一种一段事件内只触发一次的效果,在当前事件内不会再次触发,当前事件结束以后,再次触发才有效.
    防抖：防抖是指当一个事件触发的时候, 为防止频繁触发事件, 设置定时器,以达到一种 频繁触发期间不处理, 只有当最后一次连续触发结束以后才处理
    `},{title:"JS --- 26.Promise",content:`
    Promise 是es6新增的一种异步编程的解决方案：promise是一个对象，承诺它过一段时间会给你一个结果，promise有三种状态： pending(等待态)，fulfiled(成功态)，rejected(失败态)；状态一旦改变，就不会再变。
    promise是用来解决两个问题的：
    回调地狱，代码难以维护
    `},{title:"JS --- 27.Promsie 和 async await 的区别",content:` 
    区别：
    Promise 允许链式调用和异步处理错误，但可能导致代码的可读性较差。
    async/await 提供了更简洁的语法，看起来像同步代码，同时提供了同步地处理错误的能力，增强了代码的可读性。
    两者都是非阻塞的，但 async/await 提供了更好的错误处理和可读性
    `},{title:"JS --- 28.promise常用api",content:`
    Promise.resolve(value) : 类方法，该方法返回一个以 value 值解析后的 Promise 对象 
    Promise.reject : 类方法，且与 resolve 唯一的不同是，返回的 promise 对象的状态为 rejected。
    Promise.prototype.then : 实例方法，为 Promise 注册回调函数，函数形式：fn(vlaue){}，value 是上一个任务的返回结果，then 中的函数一定要 return 一个结果或者一 个新的 Promise 对象，才可以让之后的 then 回调接收。
    Promise.prototype.catch : 实例方法，捕获异常，函数形式：fn(err){}, err 是 catch 注册 之前的回调抛出的异常信息。
    Promise.race ：类方法，多个 Promise 任务同时执行，返回最先执行结束的 Promise 任务的结果，不管这个 Promise 结果是成功还是失败。
    Promise.all : 类方法，多个 Promise 任务同时执行，如果全部成功执行，则以数组的方式返回所有 Promise 任务的执行结果。 如果有一个 Promise 任务 rejected，则只返 回 rejected 任务的结果。 
    `},{title:"JS --- 29.设计模式",content:`
    * 发布订阅模式:
      这种设计模式可以大大降低程序模块之间的耦合度，便于更加灵活的扩展和维护。
    * 中介者模式 :
      观察者模式通过维护一堆列表来管理对象间的多对多关系，中介者模式通过统一接口来维护一对多关系，且通信者之间不需要知道彼此之间的关系，只需要约定好API即可。
    * 代理模式 :
      为其他对象提供一种代理以控制对这个对象的访问。
      代理模式使得代理对象控制具体对象的引用。代理几乎可以是任何对象：文件，资源，内存中的对象，或者是一些难以复制的东西。
    * 单例模式 :
      保证一个类只有一个实例，并提供一个访问它的全局访问点（调用一个类，任何时候返回的都是同一个实例）。
    * 工厂模式 :
      工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。该模式使一
      个类的实例化延迟到了子类。而子类可以重写接口方法以便创建的时候指定自己的对象类型
    * 装饰者模式 : 
      装饰者(decorator)模式能够在不改变对象自身的基础上，在程序运行期间给对像动态的添加职责（方法或属性）。与继承相比，装饰者是一种更轻便灵活的做法。
      `},{title:"JS --- 30.new一个对象的过程",content:`
    * 1.开辟一个堆内存，创建一个空对象
    * 2.执行构造函数，对这个空对象进行构造
    * 3.给这个空对象添加__proto__属性
    `},{title:"JS --- 31.http 和 https 的区别",content:`
    * 1、https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。
    * 2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
    * 3、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
    * 4、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。
    `},{title:"JS --- 32.http状态码",content:`
    1xx 信息，表示临时响应并需要请求者继续执行操作
    100：（继续） 请求者应当继续提出请求。 服务器返回此代码表示已收到请求的第一部分，正在等待其余部分。
    101：（切换协议） 请求者已要求服务器切换协议，服务器已确认并准备切换。
    102：由WebDAV（RFC 2518）扩展的状态码，代表处理将被继续执行。
    2XX 成功
    200 表示从客户端发来的请求在服务器端被正确处理 ✨
    201  请求已经被实现，⽽且有⼀个新的资源已经依据请求的需要⽽建⽴
    202  请求已接受，但是还没执⾏，不保证完成请求
    204 表示请求成功，但响应报⽂不含实体的主体部分
    206 进⾏范围请求 ✨
    3XX 重定向
    301 永久性重定向，表示资源已被分配了新的 URL
    302 临时性重定向，表示资源临时被分配了新的 URL ✨
    303 表示资源存在着另⼀个 URL，应使⽤ GET ⽅法丁⾹获取资源
    304 表示服务器允许访问资源，但因发⽣请求未满⾜条件的情况
    307 临时重定向，和302含义相同
    4XX 客户端错误
    400 请求报⽂存在语法错误 ✨
    401 表示发送的请求需要有通过 HTTP 认证的认证信息 ✨
    403 表示对请求资源的访问被服务器拒绝 ✨
    404 表示在服务器上没有找到请求的资源 ✨
    408  客户端请求超时
    409 请求的资源可能引起冲突
    5XX 服务器错误
    500 表示服务器端在执⾏请求时发⽣了错误 ✨
    501 请求超出服务器能⼒范围，例如服务器不⽀持当前请求所需要的某个功能，或者请求是服务
    器不⽀持的某个⽅法
    503 表明服务器暂时处于超负载或正在停机维护，⽆法处理请求
    505 服务器不⽀持，或者拒绝⽀持在请求中使⽤的 HTTP 版本
`},{title:"JS --- 33.懒加载和预加载",content:`
    * 懒加载：懒加载也叫延迟加载，延迟加载网络资源或符合某些条件时才加载资源。常见的就是图片延时加载。
      懒加载的意义：懒加载的主要目的是作为服务器前端的优化，减少请求数或延迟请求数。
      懒惰实现方式：
      * 1.第一种是纯粹的延迟加载，使用setTimeOut或setInterval进行加载延迟.
      * 2.第二种是条件加载，符合某些条件，或触发了某些事件才开始异步下载。
      * 3.第三种是可视区加载，即仅加载用户可以看到的区域，这个主要由监控滚动条来实现，一般会在距用户看到某图片前一定距离遍开始加载，这样能保证用户拉下时正好能看到图片。
    * 预加载：提前加载图片，当用户需要查看时可直接从本地缓存中渲染。
      两者的行为是相反的，一个是提前加载，一个是迟缓甚至不加载。懒加载对服务器前端有一定的缓解压力作用，预加载则会增加服务器前端压力。预加载应用如广告弹窗等。
  `},{title:"JS --- 34.less和sass的区别",content:`
    * 编译环境不一样，sass是服务器端处理的，可以用Ruby、node-sass来编译；less需要引入less.js来处理输出，也可以使用工具在服务器端处理成css，也有在线编译的。
    * 变量定义符不一样，less用的是@，而sass用$。
    * sass支持分支语句，less不支持
    * `},{title:"JS --- 35.闭包",content:`
    闭包就是函数内部返回另一个函数，并且在外部有变量接收这个函数，就会形成闭包
    闭包的优点：
    1.保存变量不被销毁
    2.保护变量不被外部作用域访问
    闭包的缺点：
    1.产生的闭包内存不会被销毁，容易造成内存泄露
    `},{title:"JS --- 36.http请求类型",content:`
    GET: 通常⽤于请求服务器发送某些资源
    HEAD: 请求资源的头部信息, 并且这些头部与 HTTP GET ⽅法请求时返回的⼀致. 该请求⽅法的⼀个使⽤场景是在
    下载⼀个⼤⽂件前先获取其⼤⼩再决定是否要下载, 以此可以节约带宽资源
    OPTIONS: ⽤于获取⽬的资源所⽀持的通信选项
    POST: 发送数据给服务器
    PUT: ⽤于新增资源或者使⽤请求中的有效负载替换⽬标资源的表现形式
    DELETE: ⽤于删除指定的资源
    PATCH: ⽤于对资源进⾏部分修改
    CONNECT: HTTP/1.1协议中预留给能够将连接改为管道⽅式的代理服务器
    TRACE: 回显服务器收到的请求，主要⽤于测试或诊断
    `},{title:"JS --- 37.==和===的区别",content:`
    “==”：不全相等，只⽐较数据，不⽐较类型，如果两边的类型不⼀致，则会
    进⾏强制类型转化后再进⾏⽐较
    “===”：全等，既要⽐较数据，也⽐较数据类型，如果两边的类型不⼀致时，
    不会做强制类型准换，直接返回 false
    `},{title:"JS --- 38.实现new操作符",content:`
    new操作符的执⾏过程：
    1、在函数内部创建⼀个新的空对象，
    2、将创建好的对象的__proto__指向该函数的prototype；
    3、执⾏构造函数中的代码，将其中的this指向当前新创建的对象，
    4、将该对象作为函数的返回值通过return将该对象返回
    `},{title:"JS --- 39.事件冒泡和事件捕获",content:`
    事件冒泡（Event Bubbling）。事件从触发元素开始，逐级向上传播到DOM树的最顶层，通常是document对象。
    事件捕获（Event Capturing）。事件从DOM树的根节点开始，逐级向下传播到最具体的元素
    `},{title:"JS --- 40.forEach和map⽅法有什么区别",content:`
    这⽅法都是⽤来遍历数组的，两者区别如下：
    forEach()⽅法会针对每⼀个元素执⾏提供的函数，对数据的操作会改变
    原数组，该⽅法没有返回值；
    map()⽅法不会改变原数组的值，返回⼀个新数组，新数组中的值为原数
    组调⽤函数处理之后的值；
    `},{title:"JS --- 41.虚拟dom",content:`
    ⽤ JavaScript 对象结构表示 DOM 树的结构；然后⽤这个树构建⼀
    个真正的 DOM 树，插到⽂档当中 当状态变更的时候，重新构造⼀棵新
    的对象树。然后⽤新的树和旧的树进⾏⽐较，记录两棵树差异 把所记录
    的差异应⽤到所构建的真正的 DOM 树上，视图就更新了。Virtual DOM
    本质上就是在 JS 和 DOM 之间做了⼀个缓存
    `},{title:"JS --- 41.call、apply、bind区别",content:`
    执行时机：call和apply会在调用时立即执行函数；bind返回的是一个改变了this指向的新函数，这个新函数只有在被调用时才会执行。
    参数传递方式：call方法接受一个参数列表，其中参数通过逗号分隔；
    apply方法接受一个数组或类数组对象作为参数，这些参数会在函数调用时被展开；
    bind方法也接受一个参数列表，并且可以多次传入参数。
    `},{title:"JS --- 42.requestAnimationFrame",content:`
    requestAnimationFrame() ⽅法告诉浏览器您希望执⾏动画并请求浏
    览器在下⼀次重绘之前调⽤指定的函数来更新动画。该⽅法使⽤⼀
    个回调函数作为参数，这个回调函数会在浏览器重绘之前调⽤。
    `},{title:"JS --- 43.js组成部分",content:`
    ECMAScript（语法部分）：JavaScript 语言基础
    DOM（文档对象模型）：规定了访问 HTML 和 XML 的方法
    BOM（浏览器对象模型）：提供了浏览器窗口之间进行交互的对象和方法
    `},{title:"JS --- 44.js事件流模型",content:`
    “事件冒泡”：事件逐级向上传播
    “事件捕捉”：事件逐级向下传播，一直到最具体的
    “DOM事件流”：三个阶段：事件捕捉，目标阶段，事件冒泡
    `},{title:"JS --- 44.jsdom委托原理",content:`
    事件委托原理: 事件冒泡机制（把子元素的事件行为 委托给 父级元素执行优点）

    优点:
    1. 可以大量节省内存占用，减少事件注册
    2. 可以实现当新增子对象时，无需再对其进行事件绑定

    缺点:
    如果把所有事件都用事件代理，可能会出现事件误判
    `},{title:"JS --- 45.js变量提升与块级作用域",content:`
    变量提升：就是会把变量定义提升到当前作用域的最上面,只有var定义的变量存在变量提升
    块级作用域：JS 中作用域有：全局作用域、函数作用域。没有块作用域的概念。ES6中新增了块级作用域。块作用域由 { } 包括，if 语句和 for 语句里面的{ }也属于块作用域。在外边不能调用块作用域里边定义的变量
    `},{title:"JS --- 46.js prototype 和 proto 的关系是什么",content:`
    prototype: 所有函数都会有一个prototype属性, 它就是函数的原型对象
    proto: 所有实例对象上都会有一个proto属性, 它等同于函数的原型对象
    `},{title:"JS --- 47.js原型链详细",content:`
    所有的对象都拥有proto属性，它指向对象构造函数的 prototype 属性
    所有的函数都同时拥有proto和 prototype 属性
    函数的proto指向自己的函数实现 函数的 protytpe 是一个对象(原型)
    所以函数的 prototype 也有proto属性 指向 Object.prototype
    Object.prototype.proto指向 null
    `},{title:"JS --- 48.js数组方法",content:`
    1）Array.push()：此方法是在数组的后面添加新加元素，此方法改变了数组的长度：
    2）Array.pop()：此方法在数组后面删除最后一个元素，并返回数组，此方法改变了数组的长度：
    3） Array.shift()：此方法在数组后面删除第一个元素，并返回数组，此方法改变了数组的长度：
    4） Array.unshift()：此方法是将一个或多个元素添加到数组的开头，并返回新数组的长度：
    5）Array.isArray()：判断一个对象是不是数组，返回的是布尔值
    6） Array.concat()：此方法是一个可以将多个数组拼接成一个数组：
    7）Array.toString() ： 把数组作为字符串返回
    8） Array.join()       ：以指定字符拼接成字符串，然后返回
    9） Array.splice：(开始位置， 删除的个数，元素)
    10）Array.map()：此方法是将数组中的每个元素调用一个提供的函数，结果作为一个新的数组返回，并没有改变原来的数组
    11）Array.forEach()：此方法是将数组中的每个元素执行传进提供的函数，没有返回值，直接改变原数组，注意和 map 方法区分
    12）Array.filter()：此方法是将所有元素进行判断，将满足条件的元素作为一个新的数组返回
    13）Array.every()：此方法是将所有元素进行判断返回一个布尔值，如果所有元素都满足判断条件，则返回 true，否则为 false：
    14）Array.some()：此方法是将所有元素进行判断返回一个布尔值，如果存在元素都满足判断条件，则返回 true，若所有元素都不满足判断条件，则返回 false：
    15）Array.reduce()：此方法是所有元素调用返回函数，返回值为最后结果,传入的值必须是函数类型：
    `},{title:"JS --- 49.js字符串方法",content:`
    trim(): 去首尾空格
    split(sep，limit)：将字符串分割为字符数组，limit 为从头开始执行分割的最大数量
    indexOf(str):返回 str 在父串中第一次出现的位置，若没有则返回-1
    lastIndexOf(str):返回 str 在父串中最后一次出现的位置，若没有则返回-1
    substr(start，length)：从字符索引 start 的位置开始，返回长度为 length 的子串
    substring(from,to)：返回字符索引在 from 和 to（不含）之间的子串
    slice(start,end)：返回字符索引在 start 和 end（不含）之间的子串
    toLowerCase()：将字符串转换为小写
    toUpperCase()：将字符串转换为大写
    replace(str1,str2):str1 也可以为正则表达式，用 str2 替换 str1
    concat(str1,str2,...):连接多个字符串，返回连接后的字符串的副本
    match(regex):搜索字符串，并返回正则表达式的所有匹配
    charAt(index):返回指定索引处的字符串
    charCodeAt(index):返回指定索引处的字符的 Unicode 的值
    fromCharCode():将 Unicode 值转换成实际的字符串
    search(regex):基于正则表达式搜索字符串，并返回第一个匹配的位置
    valueOf()：返回原始字符串值
    `},{title:"JS --- 50.js new操作符具体做了什么？",content:`
    在内存创建一个新对象
    把构造函数中this指向新建的对象
    会在新对象上添加一个__proto__属性,指向函数的原型对象prototype
    判断函数返回值,如果值是引用类型就直接返回值；否则返回this(创建的新对象)
    `},{title:"JS --- 51.js 深浅拷贝区别",content:`
    浅拷贝的话，如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址。就是浅拷贝是拷贝一层，深层次的引用类型就是共享内存地址。
    深拷贝除了拷贝基本类型的值，还完全复刻了对象类型。就是开辟一个新的栈，两个对象属完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。
  
    浅拷贝方法：Object.assign、Array.prototype.slice(), Array.prototype.concat()和 拓展运算符实现的复制
    深拷贝方法：最常用的就是JSON.stringify()，还有就是JQuery的jQuery.extend()，再就是lodash的_.cloneDeep()，或者手写循环递归了
    `},{title:"JS --- 52.js同步异步区别",content:`
    同步: 下面代码会等待上面 同步代码执行完毕
    异步: 下面代码不会等待上面异步代码执行完毕
    同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求,等请求完，页面刷新，
    新内容出现，用户看到新内容,进行下一步操作
    异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求。
    等请求完，页面不刷新，新内容也会出现，用户看到新内容
    `},{title:"JS --- 53.js为什么 JS 是单线程,  而不是多线程",content:`
    单线程是指 JavaScript 在执行的时候，有且只有一个主线程来处理所有的任务。
    目的是为了实现与浏览器交互。
    我们设想一下，如果 JavaScript 是多线程的，现在我们在浏览器中同时操作一个
    DOM，一个线程要求浏览器在这个 DOM 中添加节点，
    而另一个线程却要求浏览器删掉这个 DOM 节点，
    那这个时候浏览器就会很郁闷，他不知道应该以哪个线程为准。
    所以为了避免此类现象的发生，降低复杂度，JavaScript
    选择只用一个主线程来执行代码，以此来保证程序执行的一致性。
    `},{title:"JS --- 54.js严格模式的使用与作用",content:`
    答案：在代码前面使用"use strict"就可以开启严格模式;

    作用：
    消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;
    消除代码运行的一些不安全之处，保证代码运行的安全；
    提高编译器效率，增加运行速度；
    为未来新版本的 Javascript 做好铺垫。

    特点
    变量必须要通过修饰符进行声明
    函数的参数不能有同名属性，否则报错
    禁止 this 指向全局对象
    增加了保留字（比如 protected 、 static 和 interface ）
    不能删除变量 delete prop
    `},{title:"JS --- 55.js线程与进程的区别",content:`
    一个程序至少有一个进程, 一个进程至少有一个线程。
    线程的划分尺度小于进程，使得多线程程序的并发性高。
    另外，进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率。
    线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，
    由应用程序提供多个线程执行控制。
    从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别。
    `},{title:"JS --- 56.Promise.all() 原理",content:`
    Promise.all() 是一个内置的辅助函数，它接收一个包含多个 Promise 的可迭代对象作为参数，并返回一个新的 Promise。这个新的 Promise 在传入的所有 Promise 都成功解决时才会成功解决，并将所有 Promise 的解决值按顺序组成的数组作为结果；如果任何一个 Promise 被拒绝，则返回的 Promise 会立即被拒绝，并传递第一个被拒绝 Promise 的拒绝原因。
    `},{title:"JS --- 57.Promise.all()实现根据传入url顺序, 返回按序结果",content:`
    用参数数组下标用来保证按序存储，循环的时候用变量记录和保证获取到了想要的所有数据，就比如说定义一个count循环的时候count++，起一个计数的作用，确保所有传入的 Promise 都被成功处理后，才会触发 resolve(res)，解决返回的 Promise。这样可以保证返回的 Promise 在所有传入的 Promise 都完成后才会被解决，返回结果数组中的顺序也与传入的 Promise 数组保持一致。
    `},{title:"JS --- 58. promise的链式调用",content:`
    链式调用的话就是说 then 的函数和新 promise 的 resolve 一起 push 到前一个 promise 的 callbacks 数组中，就是当前一个 promise 完成后，调用它的 resolve 变更状态，在这个 resolve 里会依次调用 callbacks 里的回调，这样就执行了 then 里的方法了，然后等 then 里的方法执行完成后，返回一个结果，如果这个结果是个简单的值，就直接调用新 promise 的 resolve，让其状态变更，这又会依次调用新 promise 的 callbacks 数组里的方法，循环往复。。如果返回的结果是个 promise，则需要等它完成之后再触发新 promise 的 resolve，所以可以在其结果的 then 里调用新 promise 的 resolve，基本就是这么一个过程吧。
    `},{title:"JS --- 59. 三次握手",content:`
    第一次握手（SYN）
    客户端发送SYN包：
    客户端发送一个 SYN 包到服务端。这个 SYN 包的 Seq=0，表明客户端希望与服务端建立连接，并且告知服务端的起始序列号为0。

    第二次握手（SYN-ACK）
    服务器回应SYN-ACK包：
    服务器确认客户端的SYN请求，发送SYN和ACK，Ack=1， 说明服务器已经收到客户端 Seq=0 的字节，期望下次收到服务端 Seq=1 的字节，Seq = 0，告知客户端的起始序列号也为0。

    第三次握手（ACK）
    客户端发送ACK包：
    客户端收到服务器的SYN-ACK包后，会发送一个ACK包。这个包的ACK=1，说明客户端已经收到服务端 Seq=0 的包，期望收到 Seq=1 的包
    `},{title:"JS --- 60. 四次挥手",content:`
    四次挥手过程：
    第一次挥手：客户端发送一个FIN，用来关闭客户端到服务器的数据传送，客户端进入fin_wait_1状态。
    第二次挥手：服务端收到FIN后，发送一个ACK给客户端，确认序号为收到序号+1，服务端进入Close_wait状态。
    第三次挥手：服务端发送一个FIN，用来关闭服务端到客户端的数据传送，服务端进入Last_ack状态。
    第四次挥手：客户端收到FIN后，客户端进入Time_wait状态，接着发送一个ACK给服务端，确认后，服务端进入Closed状态，完成四次挥手。
    `},{title:"JS --- 61. 事件循环",content:`
    JS 是一种单线程编程语言，这就是说它在同一时间只能执行一个任务，或者说，在任何给定的时间里，JS 引擎中只会有一个执行线程来处理JS脚本。这个执行线程遵循从上至下逐行执行代码的原则。事件循环呢，就是JS执行上下文中的一种机制，用来处理异步操作。它的核心思想是把所有的异步任务放入一个队列中，然后按照队列中的顺序依次执行，直到队列为空为止。主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop（事件循环）。
    下面是执行顺序：
    1.先执行同步代码，所有同步代码都在主线程上执行，形成一个执行栈。
    2.当遇到异步任务时，会把它挂起并添加到任务队列中，宏任务放入宏任务队列，微任务放进微任务队列。
    3.当执行栈为空时，事件循环从任务队列中取出一个任务，加入到执行栈中执行。
    4.重复上述步骤，直到任务队列为空。
    概括以下就是 js是一门单线程语言，通过事件循环机制实现异步执行代码。
    `},{title:"JS --- 62. 单线程的好处",content:`
    首先就是占用资源少，因为只有一个线程
    然后相比于多线程的话，它不用切换执行上下文，速度更快；
    然后对于访问DOM结构获取变量的时候不用考虑复杂的并发
    `},{title:"JS --- 63. JSON.stringify实现深拷贝的缺点",content:`
    会忽略 undefined和Symbol
    不能序列化函数
    无法处理循环引用
    不支持RegExp(正则)和Map还有Set

    `},{title:"JS --- 64. js数组去重方法",content:`
    利用 ES6 Set 去重（ES6 中最常用）
    利用 for 嵌套 for，然后 splice 去重（ES5 中最常用）
    利用 indexOf 去重
    利用 sort()
    利用 includes()
    利用 hasOwnProperty
    利用 filter
    利用递归去重
    利用 Map 数据结构去重
    `},{title:"JS --- 65. BigInt 的使用",content:`
    BigInt 是一种数值数据类型，用于表示旧数值数据类型 number 无法表示的小数和大数。每个 BigInt 值都必须在数字后包含小写字母 n。
    使用场景：
    财务计算：BigInt 在财务计算中很重要，因为可以处理非常大量的交易和货币转换
    密码学和安全计算：BigInt 在密码学中用于生成非常难以预测或破解的非常大的随机数
    游戏开发：在游戏开发中，大数通常用于保存时间戳、分数和跟踪进度。 BigInt 的使用确保了此类值的准确表示
    分布式系统：分布式系统需要唯一身份才能准确执行。由于 BigInt 值是无限的，因此它们可用于生成标识符和密钥
    `},{title:"JS --- 66.基本数据类型和引用数据类型的区别",content:`
    1.基本数据类型存储在栈内存中
    2.数据存储时，基本数据类型在变量中存的是值，引用数据类型在变量中存储的是空间地址
    `},{title:"JS --- 67.什么是堆栈内存",content:`
    1.堆内存和栈内存是浏览器形成的两个虚拟内存
    2.栈内存主要是用来存储基本数据的值，栈内存是一种简单的存储，但是存储的数据都是有范围上线的，一旦超过，就会造成栈溢出
    3.堆内存主要是用来存储引用数据类型的
    堆内存：存储引用类型，对象类型就是键值对，函数就是代码字符串
    堆内存释放：将引用类型的空间地址变量赋值成null，或者没有变量占用堆内存了，浏览器就会释放掉这个地址
    栈内存：提供代码执行的环境和存储基本类型值
    栈内存释放：一般当函数执行完后，函数的私有作用域就会被释放掉
    `},{title:"JS --- 68.isNaN() 和 Number.isNaN()的区别是什么",content:`
    NaN（Not a Number）有一个非常特殊的特性，NaN不等于其本身，也不等于任何
    isNaN：先尝试转换为数字，如果隐式转换为Number类型失败，就会返回NaN
    Numnber.isNaN()：直接判断是否为NaN
    `},{title:"JS --- 69.讲讲JS/ES6中的数组方法",content:`
    数组和字符串方法：toString()，toLocalString()，join()
    数组增删（前增后增，前删后删）的方法：pop() 和 push()，shift() 和 unshift()
    数组排序方法：reverse() 和 sort()
    数组连接方法：concat() 不影响原数组
    数组截取方法：slice() 不影响原数组
    数组插入方法：splice()，影响原数组
    数组通过索引查找方法：indexOf() 和 lastIndexOf() 迭代方法 every()、some()、filter()、map() 和 forEach()
    数组归并方法：reduce() 和 reduceRight() 方法
    数组判断是否存在值：includes()
    `}],he=[{title:"TS --- 1. TS的数据类型",content:`
    boolean（布尔类型）
    number（数字类型）
    string（字符串类型）
    array（数组类型）
    tuple（元组类型）
    enum（枚举类型）
    any（任意类型）
    null 和 undefined 类型
    void 类型
    never 类型
    object 对象类型
    `},{title:"TS --- 2. TS是什么和使用ts的好处",content:`
    1. 拓展了语法：TypeScript是JavaScript的加强版，它给JavaScript添加了可选的静态类型和基于类的面向对象编程，它拓展了JavaScript的语法。
    2. 明确的数据类型：作为强类型语言，你可以明确知道数据的类型。代码可读性极强。
    3. 友好的报错提示：TS 在开发时就能给出编译错误， 而 JS 错误则需要在运行时才能暴露。
    4. 方便的特性：ts中有很多很方便的特性, 比如可选链.
    5. 纯面向对象：Typescript 是纯面向对象的编程语言，包含类和接口的概念.
    `},{title:"TS --- 3. TypeScript 相对于 JavaScript 的优势",content:`
    增加了静态类型，可以在开发人员编写脚本时检测错误，使得代码质量更好，更健壮。
    优势:
    1. 杜绝手误导致的变量名写错;
    2. 类型可以一定程度上充当文档;
    3. IDE自动填充，自动联想;
    `},{title:"TS --- 4. TypeScript 中 any 类型的作用",content:`
    为编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。
    `},{title:"TS --- 5. TypeScript 中 any、never、unknown、null & undefined 和 void 的区别",content:`
    any: 动态的变量类型（失去了类型检查的作用）。
    never: 永不存在的值的类型。例如：never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
    unknown: 任何类型的值都可以赋给 unknown 类型，但是 unknown 类型的值只能赋给 unknown 本身和 any 类型。
    null & undefined: 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和  undefined 赋值给 number 类型的变量。当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自。
    void: 没有任何类型。例如：一个函数如果没有返回值，那么返回值可以定义为void。
    `},{title:"TS --- 6. TypeScript 中的 this 和 JavaScript 中的 this 的不同",content:`
    TypeScript：noImplicitThis: true 的情况下，必须去声明 this 的类型，才能在函数或者对象中使用this。
    Typescript 中箭头函数的 this 和 ES6 中箭头函数中的 this 是一致的。
    `},{title:"TS --- 7. TypeScript 中 type 和 interface 的区别?",content:`
    共同点：
      1.都是TS中用来定义对象或者函数类型限制的方式
      2.type和interface都可以被继承（type继承type、interface是通过&，interface继承）
    区别：
      type可以定义基本类型别名，interface只能定义函数或对象接口
      type可以声明联合类型
      type可以声明元组
      type不能声明合并（多次声明合并成一次），interface可以
      type可以使用typeof获取实例类型
    `},{title:"TS --- 8. 对 TypeScript 类中成员的 public、private、protected、readonly 修饰符的理解",content:`
    public: 成员都默认为public，被此限定符修饰的成员是可以被外部访问；
    private: 被此限定符修饰的成员是只可以被类的内部访问；
    protected: 被此限定符修饰的成员是只可以被类的内部以及类的子类访问;
    readonly: 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
    它的一个权限范围排序的话就是：public>protected>private，readonly与所属成员的修饰符相同，就不涉及排序了。
    `},{title:"TS --- 9. keyof 和 typeof 关键字的作用",content:`
    keyof 索引类型查询操作符 获取索引类型的属性名，构成联合类型。
    typeof 获取一个变量或对象的类型。
    `},{title:"TS --- 10. 泛型",content:`
     泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，使用时再去指定类型的一种特性。 可以把泛型理解为代表类型的参数 // 我们希望传入的值是什么类型，返回的值就是什么类型 // 传入的值可以是任意的类型，这时候就可以用到 泛型
    `},{title:"TS --- 11. 为什么要用 TypeScript",content:`
     TS 在开发时就能给出编译错误， 而 JS 错误则需要在运行时才能暴露。 作为强类型语言，你可以明确知道数据的类型。代码可读性极强，几乎每个人都能理解。 TS 非常流行，被很多业界大佬使用。像 Asana、Circle CI 和 Slack 这些公司都在用 TS。
    `},{title:"TS --- 12. 优点缺点和使用场景",content:`
    TS 的优点：
    可以减少低级的语法错误。
    规范团队代码，对大型项目来说规范很重要。
    智能提示，定义类型能让编辑器更好的自动提示，提升编码效率。

    TS 的缺点：
    学习成本高。
    开发成本高，又要做业务又要编写类型文件，有时候还得解决奇奇怪怪的报错。
    TypeScript需要很长时间来编译代码
    它不支持抽象类
    如果我们在浏览器中运行TypeScript应用程序，则需要执行编译步骤才能将TypeScript转换为JavaScript
    要使用任何第三方库，定义文件是必须的
    类型定义文件的质量是一个问题

    适用场景：
    大型项目和团队开发。
    库和框架开发。
    对于一些重要的逻辑或者代码，可以使用TS来增强其可靠性。
    `},{title:"TS --- 13. any用的多吗，有什么弊端？",content:`
    使用any类型的主要目的是在不清楚变量类型的情况下避免编译错误，但是，频繁地使用any类型那就等于白白浪费了TS的类型检查能力。
    正确的做法是尽可能避免使用any类型，尽可能地使用明确的类型，这样可以提高代码的可读性和可维护性，并且可以减少潜在的运行时错误。
    但是有时候时间紧任务重又不得不用，所以一句话总结就是，尽量不用，不到万不得已不轻易用any。
    `},{title:"TS --- 14.never和void的区别",content:`
    void 表示没有任何类型（可以被赋值为 null 和 undefined）。
    never 表示一个不包含值的类型，即表示永远不存在的值。
    拥有 void 返回值类型的函数能正常运行。拥有 never 返回值类型的函数无法正常返回，无法终止，或会抛出异常。
    `},{title:"TS --- 15.any和unknown有什么区别",content:`
    unknown 和 any 的主要区别是 unknown 类型会更加严格：在对 unknown 类型的值执行大多数操作之前，我们必须进行某种形式的检查；而在对 any 类型的值执行操作之前，我们不必进行任何检查。
    `},{title:"TS --- 16.const和readonly的区别",content:`
    const 用于变量，readonly 用于属性
    const 在运行时检查，readonly 在编译时检查
    使用 const 变量保存的数组，可以使用 push，pop 等方法；但是如果使用 Readonly Array 声明的数组不能使用 push，pop 等方法
    `},{title:"TS --- 17.TypeScript 模块的加载机制",content:`
    假设有一个导入语句 import { a } from "moduleA"

    首先，编译器会尝试定位需要导入的模块文件，通过绝对或者相对的路径查找方式
    如果上面的解析失败了，没有查找到对应的模块，编译器会尝试定位一个外部模块声明（.d.ts）
    最后，如果编译器还是不能解析这个模块，则会抛出一个错误 error TS2307: Cannot find module 'moduleA'
    `},{title:"TS --- 18.TypeScript装饰器",content:`
    装饰器是一种特殊类型的声明、它能够被附加到类声明、方法、属性、参数的功能
    装饰器就是一个方法，可以注入到类、方法、属性、参数上来拓展类、属性、方法、参数的功能
    常见装饰器：类装饰器、属性装饰器、方法装饰器、参数装饰器
    类的装饰器：
    是一种与类(class)相关的语法,用来注释或修改类和类方法,装饰器本身是一个函数,装饰器通过@来使用
    方法装饰器：
    方法装饰器会被应用到方法的属性描述上，可以用来监视、修改或替换方法定义
    方法装饰器运行时需要传入三个参数：
    - 对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
    - 成员的名称
    - 成员的属性描述符

    方法参数装饰器：
    参数装饰器会在运行时当作函数调用，可以使用参数装饰器为类的原型增加一些元素数据，传入下列3个参数：
    - 对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象
    - 方法的名称
    - 参数在函数参数列表中的索引
    装饰器执行的顺序：
    属性装饰器 > 方法参数装饰器（如有多个从后到前）> 方法装饰器 > 类装饰器（如有多个从后到前）
    `}],me=[{title:"小程序 --- 1. 小程序与H5的区别",content:`
    运行环境方面
    从运行环境方面开看，H5 的宿主环境是浏览器，只要有浏览器，就可以使用，包括APP中的 web-view 组件，以及小程序提供的 web-view 组件
    小程序就不一样了，它运行于特定的移动软件平台 (Wechat / 支付宝 / 字节跳动 / 百度 / QQ 等)
    拿微信小程序来说，它是基于浏览器内核重构的内置解析器，它并不是一个完整的浏览器，官方文档中重点强调了脚本内无法使用浏览器中常用的 window 对象和 document 对象，就是没有 DOM 和 BOM 的相关的 API，这一条就干掉了 JQ 和一些依赖于 BOM 和 DOM 的NPM包
    运行机制方面
    H5 的运行就是一个网页的运行,小程序还是以微信小程序举例
    一.启动
      1.如果用户已经打开过某小程序，在一定时间内再次打开该小程序，此时无需重新启动，只需将后台的小程序切换到前台，整个过程就是所谓的 热启动
      2.如果用户首次打开或小程序被微信主动销毁后再次打开的情况，此时小程序需要重新加载启动，就是 冷启动
    二.销毁
      1.当小程序进入后台一定时间，或系统资源占用过高，或者是你手动销毁，才算真正的销毁
    系统权限方面
    H5最被诟病的地方在哪？系统权限不够，比如网络通信状态、数据缓存能力、通讯录、或调用硬件的，如蓝牙功能等等一些APP有的功能，H5就没有这些系统权限，因为它重度依赖浏览器能力
    依旧是微信小程序举例，微信客户端的这些系统级权限都可以和微信小程序无缝衔接，官方宣称拥有 Native App 的流畅性能
    开发语言方面
    H5 开发大家都知道，标准的 HTML、CSS、JavaScript ，万变不离其三剑客
    小程序不同， (Wechat / 支付宝 / 字节跳动 / 百度 / QQ 等)不同的小程序都有自己定义独特的语言
    最常用的微信小程序，自定义的 WXML、WXSS，WXML 中全部是微信自定义的标签，WXSS、JSON 和 JS 文件中的写法都稍有限制，官方文档中都有明确的使用介绍，虽容易上手，但还是有区别的
    开发成本方面
    还是先说 H5，开发一个 H5 ，我们要考虑什么，首先开发工具 ( vscode/webstorm/atom/sublim等 )，其次是开发框架 ( Vue/React/Angular等 )， 接着考虑模块化工具 ( Webpack/Gulp/Parcel等 )，再然后UI库、各种包的选择，更是数不胜数，还要考虑兼容问题，成本还是比较高的
    这块小程序的话不用再去考虑浏览器兼容性，拿微信小程序举例子，没有兼容性问题后，只需要看着文档在微信开发工具里写就行了，小程序还独立出来了很多原生APP的组件，在H5需要模拟才能实现的功能，小程序里可以直接调用组件，都是封装好的，你也可以使用转译框架来写小程序，也有很多UI库选择，单论开发成本的话，小程序应该是胜出的
    不过小程序再简单也是需要学习过程的，坑肯定也多，因为它还在逐步变强的过程中嘛，毕竟是和H5不一样的东西
    更新机制方面
    H5 的话想怎么更新就怎么更新，更新后抛开CDN/浏览器缓存啥的，基本上更新结束刷新就可以看到效果
    小程序不同，还是微信举例，微信小程序更新啥的是需要通过审核的
    而且开发者在发布新版本之后，无法立刻影响到所有现网用户，要在发布之后 24 小时之内才下发新版本信息到用户
    小程序每次 冷启动 时，都会检查有无更新版本，如果发现有新版本，会异步下载新版本代码包，并同时用客户端本地包进行启动，所以新版本的小程序需要等下一次 冷启动 才会应用上，当然微信也有 wx.getUpdateManager 可以做检查更新
    渲染机制方面
    H5就是 web 渲染，浏览器渲染
    微信小程序的宿主环境是微信，宿主环境为了执行小程序的各种文件：wxml文件、wxss文件、js文件，提供了双线模型 ，什么是双线程模型呢
    一.小程序的渲染层和逻辑层分别由2个线程管理
    1.渲染层：界面渲染相关的任务全都在 WebView 线程里执行，一个小程序存在多个界面，所以渲染层存在多个 WebView线程
    2.逻辑层：一个单独的线程执行 JavaScript，在这个环境下执行的都是有关小程序业务逻辑的代码，就是通过图中的 JsCore 线程来运行 JS 脚本
    3.这两个线程都会经过微信客户端( Native )中的 WeixinJsBridage 进行中转通信，逻辑层把数据变化通知到视图层，触发视图层页面更新，视图层把触发的事件通知到逻辑层进行业务处理二.小程序的渲染逻辑
      1.在渲染层将 WXML 先转换为 js 对象也就是虚拟 DOM
      2.在逻辑层将虚拟 DOM 对象生成真实 DOM 树，交给渲染层渲染
      3.当视图有数据需更新时，逻辑层调用小程序宿主环境提供的 setData 方法将数据从逻辑层传递到渲染层
      4.经过对比前后差异 ( diff算法 )，把差异应用在真实的 Dom 树上，渲染出正确的 UI 界面完成视图更新
    虽然小程序是通过 Native 原生渲染的，但是小程序也支持web渲染，就是 web-view 组件，在 web-view 中加载 H5 页面，而我们开发小程序时，通常会使用 hybrid 的方式，根据具体情况选择部分功能用小程序原生的代码来开发，部分功能通过 web-view 加载 H5 页面来实现，Native 与 Web 渲染 混合使用，实现项目最优解
    `},{title:"小程序 --- 2. 对小程序的理解和优缺点",content:`
    2017年，微信正式推出了小程序，允许外部开发者在微信内部运行自己的代码，开展业务
    截至目前，小程序已经成为国内前端的一个重要业务，跟 Web 和手机 App 有着同等的重要性
    小程序是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或者搜一下即可打开应用
    也体现了“用完即走”的理念，用户不用关心是否安装太多应用的问题。应用将无处不在，随时可用，但又无需安装卸载
    注意的是，除了微信小程序，还有百度小程序、微信小程序、支付宝小程序、抖音小程序，都是每个平台自己开发的，都是有针对性平台的应用程序
    ⼩程序并⾮凭空冒出来的⼀个概念，当微信中的 WebView 逐渐成为移动 Web的⼀个重要⼊⼝时，微信就有相关的 JS-SDK
    JS-SDK 解决了移动⽹⻚能⼒不⾜的问题，通过暴露微信的接⼝使得 Web 开发者能够拥有更多的能⼒，然⽽在更多的能⼒之外，JS-SDK的模式并没有解决使⽤移动⽹⻚遇到的体验不良的问题
    因此需要设计⼀个⽐较好的系统，使得所有开发者在微信中都能获得⽐较好的体验：
    快速的加载
    更强⼤的能⼒
    原⽣的体验
    易⽤且安全的微信数据开放
    ⾼效和简单的开发
    这些是JS-SDK做不到的，需要设计一个全新的小程序系统
    对于小程序的开发，提供一个简单、高效的应用开发框架和丰富的组件及API，帮助开发者开发出具有原生体验的服务
    其中相比H5，小程序与其的区别有如下：
    运⾏环境：⼩程序基于浏览器内核重构的内置解析器
    系统权限：⼩程序能获得更多的系统权限，如⽹络通信状态、数据缓存能⼒等
    渲染机制：⼩程序的逻辑层和渲染层是分开的
    小程序可以视为只能用微信打开和浏览的H5，小程序和网页的技术模型是一样的，用到的 JavaScript 语言和 CSS 样式也是一样的，只是网页的 HTML 标签被稍微修改成了 WXML 标签
    因此可以说，小程序页面本质上就是网页
    优缺点
    优点：
    随搜随用，用完即走：使得小程序可以代替许多APP，或是做APP的整体嫁接，或是作为阉割版功能的承载体
    流量大，易接受：小程序借助自身平台更加容易引入更多的流量
    安全
    开发门槛低
    降低兼容性限制
    缺点：
    用户留存：及相关数据显示，小程序的平均次日留存在13%左右，但是双周留存骤降到仅有1%
    体积限制：微信小程序只有2M的大小，这样导致无法开发大型一些的小程序
    受控微信：比起APP，尤其是安卓版的高自由度，小程序要面对很多来自微信的限制，从功能接口，甚至到类别内容，都要接受微信的管控
    `},{title:"小程序 --- 3. 说说提高微信小程序的应用速度的手段有哪些？",content:`
    产生原因小程序首次启动前，微信会在小程序启动前为小程序准备好通用的运行环境，如运行中的线程和一些基础库的初始化
    然后才开始进入启动状态，展示一个固定的启动界面，界面内包含小程序的图标、名称和加载提示图标。此时，微信会在背后完成几项工作：
    下载小程序代码包
    加载小程序代码包
    初始化小程序首页
    下载到的小程序代码包不是小程序的源代码，而是编译、压缩、打包之后的代码包
    处理手段
    围绕上图小程序的启动流程， 我们可以从加载、渲染两个纬度进行切入：
    #加载
    提升体验最直接的方法是控制小程序包的大小，常见手段有如下：
    代码包的体积压缩可以通过勾选开发者工具中“上传代码时，压缩代码”选项
    及时清理无用的代码和资源文件
    减少资源包中的图片等资源的数量和大小（理论上除了小icon，其他图片资源从网络下载），图片资源压缩率有限
    并且可以采取分包加载的操作，将用户访问率高的页面放在主包里，将访问率低的页面放入子包里，按需加载
    当用户点击到子包的目录时，还是有一个代码包下载的过程，这会感觉到明显的卡顿，所以子包也不建议拆的太大，当然我们可以采用子包预加载技术，并不需要等到用户点击到子包页面后在下载子包
    渲染方面
    关于微信小程序首屏渲染优化的手段如下：
    请求可以在页面onLoad就加载，不需要等页面ready后在异步请求数据
    尽量减少不必要的https请求，可使用 getStorageSync() 及 setStorageSync() 方法将数据存储在本地
    可以在前置页面将一些有用的字段带到当前页，进行首次渲染（列表页的某些数据--> 详情页），没有数据的模块可以进行骨架屏的占位
    在微信小程序中，提高页面的多次渲染效率主要在于正确使用setData：
    不要过于频繁调用setData，应考虑将多次setData合并成一次setData调用
    数据通信的性能与数据量正相关，因而如果有一些数据字段不在界面中展示且数据结构比较复杂或包含长字符串，则不应使用setData来设置这些数据
    与界面渲染无关的数据最好不要设置在data中，可以考虑设置在page对象的其他字段下
    除此之外，对于一些独立的模块我们尽可能抽离出来，这是因为自定义组件的更新并不会影响页面上其他元素的更新
    各个组件也将具有各自独立的逻辑空间。每个组件都分别拥有自己的独立的数据、setData调用
    总结
    小程序启动加载性能：
    控制代码包的大小
    分包加载
    首屏体验（预请求，利用缓存，避免白屏，及时反馈
    小程序渲染性能：
    避免不当的使用setData
    使用自定义组件
    `},{title:"小程序 --- 4. 小程序的安卓版和ios版是怎么开发出来",content:`
    小程序开发基于html、css、javascript，与web开发一样具有跨平台特性，一次开发即可在安卓和iOS等平
    台访问，但与普通web开发不同，小程序运行环境并不是浏览器，而是依附于各自的软件App，如微信小
    程序必须在微信中访问，支付宝小程序必须在支付宝中访问等，小程序的开发流程也有所不同，需要经
    过申请小程序帐号、安装小程序开发者工具、配置项目、开发、调试、上线发布等过程方可完成
    `},{title:"小程序 --- 5. 小程序生命周期",content:`
    onReady 生命周期函数--监听页面初次渲染完成
    onShow 生命周期函数--监听页面显示
    onHide 生命周期函数--监听页面隐藏
    onUnload 生命周期函数--监听页面卸载
    onPullDownRefresh 页面相关事件处理函数--监听用户下拉动作
    onReachBottom 页面上拉触底事件的处理函数
    onShareAppMessage 用户点击右上角转发
    onPageScroll 页面滚动触发事件的处理函数
    onTabItemTap 当前是 tab 页时，点击 tab 时触发
    `},{title:"小程序 --- 6. 小程序的兼容问题有哪些",content:`
    遇到的如下：
    1，ios下的zIndex层级问题，主要发生在iphone7和iphoneX下 绝对定位必须有一个共同的父元素。
    2，左右边框不生效 当边框的宽度设置为奇数的时候，可能会不生效 解决方法：将宽度设置为偶数
    的时候，在ios下就可以解决
    3，还有尽量不要用margin-bottom ，当元素是在整个页面的最底部的时候，在ios下可能marginbottom会失效，所以建议，都使用padding-bottom
    new Date跨平台兼容性问题
    在Andriod使用new Date(“2018-05-30 00:00:00”)木有问题，但是在ios下面识别不出来。
    因为IOS下面不能识别这种格式，需要用2018/05/30 00:00:00格式。可以使用正则表达式对做字符串替
    换，将短横替换为斜杠。var iosDate= date.replace(/-/g, '/');。
    wx.getUserInfo()接口更改问题
    微信小程序最近被吐槽最多的一个更改，就是用户使用wx.getUserInfo（开发和体验版）时不会弹出授
    权，正式版不受影响。现在授权方式是需要引导用户点击一个授权按钮，然后再弹出授权。
    `},{title:"小程序 --- 7. 小程序的登录流程",content:`
    首次登录
    调用小程序api接口 wx.login() 获取 临时登录凭证code ，这个code是有过期时间的.
    将这个 code 回传到开发者服务器（就是请求开发者服务器的登录接口，通过凭证进而换取用
    户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等）
    拿到开发者服务器传回来的会话密钥（session_key）之后，前端需要保存起来.
    wx.setStorageSync('sessionKey', 'value')
    再次登录的时候，就要判断存储的session_key是否过期了
    获取缓存中的session_key， wx.getStorageSync('sessionKey')
    如果缓存中存在session_key，那么调用小程序api接口 wx.checkSession() 来判断登录态是
    否过期，回调成功说明当前 session_key 未过期，回调失败说明 session_key 已过期。登录态过
    期后前端需要再调用 wx.login()获取新的用户的code，然后再向开发者服务器发起登录请求.
    一般在项目开发，开发者服务器也会对用户的登录态做过期限制，所以这时在判断完微信服务
    器中登录态如果没有过期之后还要判断开发者服务器的登录态是否过期。（请求开发者服务器
    给定的接口进行请求判断就好）
    `},{title:"小程序 --- 8. 小程序如果版本更新了怎么通知用户",content:`
    当小程序发布新的版本后，用户如果之前访问过该小程序，通过已打开的小程序进入（未手动删除），
    则会弹出提示，提醒用户更新新的版本。用户点击确定就可以自动重启更新，点击取消则关闭弹窗，不
    再更新.
    核心步骤:
    打开小程序, 检查小程序是否有新版本发布
    小程序有新版本，则静默下载新版本，做好更新准备
    新的版本已经下载好，调用 applyUpdate 应用新版本并重启小程序
    更新版本的模拟测试
    微信开发者工具上可以通过「编译模式」下的「下次编译模拟更新」开关来调试.
    点击编译模式设置下拉列表，然后点击“添加编译模式”，在自定义编译条件弹窗界面，点击下次编
    译时模拟更新，然后点击确定，重新编译就可以了.
    注: 需要注意的是，这种方式模拟更新一次之后就失效了，后边再测试仍需要对这种编译模式进行
    重新设置才可以.
    `},{title:"小程序 --- 9. 小程序嵌入H5页面怎么做",content:`
    解决方式 ：web-view
    webview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录小程序管理后台配置业务域
    名。
    具体实现步骤:
    登陆小程序管理后台, 配置服务器域名( h5页面所在的域名 )
    在小程序里面嵌入h5
    在小程序里面定义一个你想要的H5入口
    新建一个页面，放置 webview , src指向h5网页的链接.
    注: 实际开发中在h5页面中有可能需要向小程序发送消息, 实现h5页面和小程序页面的通信
    需要使用postMessage向小程序发送消息, 在h5中postMessage 注意，key必须叫做data,否则取不到
    `},{title:"小程序 --- 10. 小程序的wxss和css有哪些不一样的地方",content:`
    WXSS 和 CSS 类似，不过在 CSS 的基础上做了一些补充和修改
    尺寸单位 rpx
    rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。 如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。
    换算成px 就是实际尺寸/2 = px;
    使用 @import 标识符来导入外联样式。@import 后跟需要导入的外联样式表的相对路径，用;表示语句结束
    @import '../plugins/wxParse/wxParse.wxss';
    `},{title:"小程序 --- 11. 小程序页面间传递数据的方法",content:`
    URL 参数传递：可以通过在跳转时将数据作为 URL 参数传递给目标页面。目标页面可以通过 getCurrentPages() 方法获取到当前页面的实例，并从中获取到传递过来的参数。
    全局变量：可以将数据保存在小程序的全局变量中，然后在目标页面中直接访问这些全局变量。
    Storage API：可以使用小程序提供的 Storage API 将数据存储在本地缓存中，然后在目标页面中读取这些数据。常用的方法包括 wx.setStorage() 和 wx.getStorage()。
    事件总线（EventBus）：可以使用事件总线模式，在页面间建立事件订阅和发布机制，一个页面发布事件，另一个页面订阅事件，实现页面间的数据传递。
    页面栈：小程序的页面栈提供了一种简单的页面间通信机制。通过在页面 A 中使用 wx.navigateTo() 或 wx.redirectTo() 打开页面 B，然后在页面 B 关闭时返回数据给页面 A。
    组件通信：如果页面中包含多个组件，可以通过组件间的事件传递机制来实现数据的传递。
    `},{title:"小程序 --- 12. 小程序有几个文件",content:`
    WXML： 微信自己定义的一套组件
    WXSS :    用于描述 WXML 的组件样式
    js :   逻辑处理
    json  :  小程序页面配置`},{title:"小程序 --- 13. 微信小程序与vue区别",content:`
    生命周期不一样，微信小程序生命周期比较简单
    数据绑定也不同，微信小程序数据绑定需要使用{{}}，vue 直接:就可以 显示与隐藏元素，vue中，使用 v-if和 v-show控制元素的显示和隐藏，小程序中，使用wx-if和hidden 控制元素的显示和隐藏
    事件处理不同，小程序中，全用 bindtap(bind+event)，或者
    catchtap(catch+event)绑定事件,vue：使用v-on:event 绑定事件，或者使用@event绑定事件
    数据双向绑定也不也不一样在 vue中,只需要再表单元素上加上 v-model,然后再绑定data中对应的一个值，当表单元素内容发生变化时，data中对应的值也会相应改变，这是 vue非常 nice的一点。微信小程序必须获取到表单元素，改变的值，然后再把值赋给一个 data中声明的变量。
    `},{title:"小程序 --- 14. 微信小程序的优劣势",content:`
    优势：
    1、无需下载，通过搜索和扫一扫就可以打开。
    2、良好的用户体验：打开速度快。
    3、开发成本要比App要低。
    4、安卓上可以添加到桌面，与原生App差不多。
    5、为用户提供良好的安全保障。小程序的发布，微信拥有一套严格的审查流程，不能通过审查的小程序是无法发布到线上的。
    缺点：
    1、限制较多。页面大小不能超过1M。不能打开超过5个层级的页面。
    2、样式单一。小程序的部分组件已经是成型的了，样式不可以修改。例如：幻灯片、导航。
    3、推广面窄，不能分享朋友圈，只能通过分享给朋友，附近小程序推广。其中附近小程序也受到微信的限制。
    4、依托于微信，无法开发后台管理功能。
    `},{title:"小程序 --- 15. 小程序的双向绑定和Vue哪里不一样。",content:`
    小程序 直接使用this.data.key = value  是  不能更新到视图当中的。
    必须使用  this.setData({  key ： value  })  来更新值。
    `},{title:"小程序 --- 16. bindtap和catchtap的区别是什么",content:`
    相同点：首先他们都是作为点击事件函数，就是点击时触发。在这个作用上他们是一样的，可以不做区分
    不同点：他们的不同点主要是bindtap是不会阻止冒泡事件的，catchtap是阻值冒泡的
    `},{title:"小程序 --- 17. 说说微信小程序的实现原理",content:`
    在小程序开发中，渲染线程和脚本是互斥的，即长时间的脚本运行可能会导致页面失去响应，这是因为JS是单线程的。小程序采用Hybrid渲染方式，将视图层和逻辑层分开，视图层使用WebView进行渲染，逻辑层运行在JSCore中，实现了双线程同时运行。
    通信方面，小程序的渲染层和逻辑层之间采用线程间通信。在逻辑层发生数据变更时，通过宿主环境提供的setData方法将数据从逻辑层传递到渲染层，再根据前后差异更新视图。事件分发处理也经过特殊处理，所有事件被拦截后交给逻辑层的JavaScript进行处理。
    小程序的运行机制分为冷启动和热启动两种情况。冷启动是指首次打开或者小程序被微信主动销毁后再次打开的情况，而热启动是指用户已经打开过小程序，再次打开时无需重新启动，只需将后台态的小程序切换到前台。
    需要注意的是，小程序没有重启的概念，当进入后台一段时间后会被微信主动销毁，也可能由于内存警告而被销毁。开发者发布新版本后，无法立即影响到所有用户，而是在下一次冷启动时应用新版本。
    `},{title:"小程序 --- 18. 小程序什么时候会主动销毁？",content:`
    小程序在进入后台之后，客户端会帮我们在一定时间内维持我们的一个状态，超过五分钟后，会被微信主动销毁.
    官方也没有明确说明 什么时候销毁， 在不同机型表现也不一样，
    2019年开发时：时间官方文档没有说明，但是经过询问一般指5分钟内
    2020年开发时：时间官方文档没有说明，实测安卓没有固定时间，内存足够情况下，有时候一天了还在，有时候几分钟就没了。
    `},{title:"小程序 --- 19. 谈谈你对uni-app的理解/描述一下Uniapp的工作原理/描述一下在Uniapp中如何实现跨平台开发",content:`
    uni-app是一个使用Vue.js开发所有前端应用的框架，开发者编写一套代码，可以发布到IOS、Android、Web（响应式）、以及各种小程序、快应用等多个平台。
    uniapp真正做到一套代码多端发行，支持原生代码混写和原生sdk集成。
    运行体验更好。组件、api与微信小程序一致，兼容 Weex 原生渲染。
    通用技术栈，学习成本更低。Vue的语法，微信小程序的api，对于前端开发人员来说更容易上手。
    开放生态，组件更丰富。支持通过npm安装第三方包；支持微信小程序自定义组件及sdk；兼容 mpvue 组件及项目；app端支持与原生混合编码；
    `},{title:"小程序 --- 20. uni中如何为不同的平台设置不同的代码",content:`
    通过条件注释来为不同平台设置不同的代码：
    条件注释的作用：实现跨端兼容
    使用方法：以 #ifdef 或 #ifndef 加平台代值开头，以 #endif 结尾
    #ifdef：if defined 如果是xx平台则运行代码块 #ifndef：if not defined 如果不是xx平台才运行代码块
    H5 H5
    MP-WEIXIN 微信小程序
    APP-PLUS app
    MP 所有小程序
    `},{title:"小程序 --- 21. uni-app 在非h5端上运行为什么要在架构上分为逻辑层和视图层？",content:`
    主要原因是性能。web端都运行在webview里，js运算和界面渲染会抢资源导致卡顿，而小程序和app，逻辑层都独立为了单独的 js 引擎，渲染层仍然是webvbiew（app也支持原生渲染）。所以在小程序和app上不支持window，dom等API（app可以在渲染层操作window,dom）
    `},{title:"小程序 --- 22. 开发uni-app遇到的坑",content:`
    上传图片
    小程序时必须要写header:{“Content-Type”: “multipart/form-data”}, h5是必须省略
    uni-app h5 端的ios图片不能加载问题
    uni-app h5端 ios只能加载https的图片
    uni-app 使用deep 穿透微信小程序生效 h5无作用
    需要在methods同级下加一个 ：
    options: { styleIsolation: ‘shared’ },
    uni-app post请求如何传递数组 参数
    在开发中我们接口上传图片是post请求 无法传递一个数组 解决方法如下
    我们可以把数据转换成字符串 然后拼接到请求地址后后面
    拼接字符串格式：image[]=arr[0]&image[]=arr[1]
    `},{title:"小程序 --- 23. PC端与移动端在UI设计方面有什么区别",content:`
    1、PC端在开发过程中考虑的是浏览器兼容性移动端开发面试，移动端开发中考虑的是手机兼容性问题，做移动端开发，更多考虑的是手机分辨率的自适应和不同手机操作系统的略微差异化；
    2、在部分事件的处理上，移动端自然是偏向于触屏的，另外包括移动端弹出的手机键盘该如何处理，这样的问题在PC上肯定不会遇到，但在移动端，如果移动端开发面试你没有经验，处理起来是相当麻烦的；
    3、布局上，移动端开发是要做到页面布局自适应的，而PC端页面布局的比例会相对固定；
    4、在动画效果处理上，PC端要考虑IE的兼容性，通常用JS做动画的通用性会好一些，但相比CSS3却牺牲了较大的性能，而在手机端，如果要做一些动画、特效等，第一选择肯定是CSS3，既简单，效率又高。
  `},{title:"小程序 --- 24. 什么是响应式设计？你如何实现响应式设计？",content:`
    是一种网络页面设计布局，页面的设计与开发应当根据用户行为以及设备环境(系统平台、屏幕尺寸、屏幕定向等)进行相应的响应和调整
    响应式网站常见特点
    同时适配PC + 平板 + 手机等
    标签导航在接近手持终端设备时改变为经典的抽屉式导航
    网站的布局会根据视口来调整模块的大小和位置
    响应式设计的基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理，为了处理移动端，页面头部必须有meta声明viewport
    第一种就是通过媒体查询的方式 css中 @Media，可以针对不同的媒体类型定义不同的样式,例如当视口在375px - 600px之间，设置特定字体大小18px
    @media screen (min-width: 375px) and (max-width: 600px) {
      body {
        font-size: 18px;
      }
    }
    第二种就是通过百分比单位 " % " 来实现响应式的效果
    比如当浏览器的宽度或者高度发生变化时，通过百分比单位，可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果
    height、width属性的百分比依托于父标签的宽高，但是其他盒子属性则不完全依赖父元素：
    子元素的top/left和bottom/right如果设置百分比，则相对于直接非static定位(默认定位)的父元素的高度/宽度
    子元素的padding如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的width，而与父元素的height无关。
    子元素的margin如果设置成百分比，不论是垂直方向还是水平方向，都相对于直接父元素的width
    border-radius不一样，如果设置border-radius为百分比，则是相对于自身的宽度
    可以看到每个属性都使用百分比，会照成布局的复杂度，所以不建议使用百分比来实现响应式
    第三种 vw/vh,vw表示相对于视图窗口的宽度，vh表示相对于视图窗口高度。 任意层级元素，在使用vw单位的情况下，1vw都等于视图宽度的百分之一
    第四种rem是相对于根元素html的font-size属性，默认情况下浏览器字体大小为16px，此时1rem = 16px
    可以利用前面提到的媒体查询，针对不同设备分辨率改变font-size的值无论设备可视窗口如何变化，始终设置rem为width的1/10，实现了百分比布局
    除此之外，我们还可以利用主流UI框架，如：element ui、antd提供的栅格布局实现响应式
    响应式设计实现通常会从以下几方面思考：
    弹性盒子（包括图片、表格、视频）和媒体查询等技术
    使用百分比布局创建流式布局的弹性UI，同时使用媒体查询限制元素的尺寸和内容变更范围
    使用相对单位使得内容自适应调节
    选择断点，针对不同断点实现不同布局和内容展示
    总结
    响应式布局优点可以看到：
    面对不同分辨率设备灵活性强
    能够快捷解决多设备显示适应问题
    缺点：
    仅适用布局、信息、框架并不复杂的部门类型网站
    兼容各种设备工作量大，效率低下
    代码累赘，会出现隐藏无用的元素，加载时间加长
    其实这是一种折中性质的设计解决方案，多方面因素影响而达不到最佳效果
    一定程度上改变了网站原有的布局结构，会出现用户混淆的情况`},{title:"小程序 --- 25. 为什么移动端click会有300毫秒延迟？",content:`
    因为移动端浏览器会有一些默认的行为，比如双击缩放、双击滚动。这些行为尤其是双击缩放，主要是为桌面网站在移动端的浏览体验设计的。而在用户对页面进行操作的时候，移动端浏览器会优先判断用户是否要触发默认的行为
    `},{title:"小程序 --- 26. 为什么安卓浏览器看背景图片，有些设备会模糊",content:`
    因为手机分辨率太小，如果按照分辨率来显示网页，字会非常小，安卓手机devicePixoRadio比较乱，有1.5的，有2的也有3的。想让图片在手机里显示更为清晰，必须使用2x的背景图来代替img标签（一般情况下都是2倍的），或者指定background-size:contain;都可以。
    用-webkit-min-device-pixel-ratio可以做到不同倍数不同尺寸的图片
    `},{title:"小程序 --- 27. 如何防止手机中页面放大和缩小",content:`
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    `},{title:"小程序 --- 28. 如何解决上下拉动滚动条时出现卡顿的现象？",content:`
    body{
      -webkit-overflow-scrolling:touch;
      overflow-scrolling:touch;
    }
    Android3+和iOSi5+支持CSS3的新属性为overflow-scrolling
    `},{title:"小程序 --- 29. 如何解决长时间按住页面闪退的现象？",content:`element{
      -webkit-touch-callout:none;
    }
      `},{title:"小程序 --- 30. 移动端为什么会有一像素问题？如何解决？",content:`
    移动端出现一像素问题的主要原因是由于不同分辨率的设备渲染一像素边框时可能会出现模糊或者多像素渲染的情况。为了解决这个问题，可以采取以下几种方法：
    使用伪类元素实现边框效果，并通过媒体查询操控transform: scale来适配不同分辨率。
    使用border-image来代替border样式，通过设置border-image的方式来达到一像素边框的效果。
    使用viewport + rem 的方式，通过动态设置meta标签的内容来适配不同的分辨率，然后使用rem作为单位来定义边框的大小。
    引入border.css等专门解决一像素边框问题的库或者样式文件。
    `},{title:"小程序 --- 31. React Native与ReactJS有什么不同？",content:`
    React Native是一个JavaScript框架，由Facebook开发，以满足日益增长的移动应用开发的需求。它是开源的，基于JavaScript的。它被设计为用可重复使用的组件构建本地移动应用程序。它使用了大量的ReactJS组件，但在不同的设备上以原生方式实现它们。它调用Objective-C（用于iOS）和Java（用于Android）中的本地渲染API。
    ReactJS也是由Facebook开发的。它是一个开源的JavaScript库，用于为移动和网络应用开发响应式的用户界面。它有一个可重复使用的组件库，旨在帮助开发者为他们的应用程序建立基础。
    让我们来看看它们的一些主要区别。
    语法。React Native和ReactJS都使用JSX，但ReactJS使用HTML标签，而React Native不使用。
    导航。React Native使用自己的内置导航库，而ReactJS使用react-router。
    动画。ReactJS使用CSS动画。React Native使用其动画API。
    DOM。ReactJS使用部分刷新的虚拟DOM。React Native在渲染UI组件时需要使用其本地API。
    用法。ReactJS主要用于Web应用开发，而React Native则专注于移动应用。
`},{title:"小程序 --- 32. React Native相对于原生的ios和Android有哪些优势？/与原生应用程序开发相比，React Native 的优势/为什么选择RN",content:`
    1.性能媲美原生APP
    2.使用JavaScript编码，只要学习这一种语言 
    3.绝大部分代码安卓和IOS都能共用
    4.组件式开发，代码重用性很高 
    5.跟编写网页一般，修改代码后即可自动刷新，不需要慢慢编译，节省很多编译等待时间
    6.支持APP热更新，更新无需重新安装APP
    缺点： 内存占用相对较高 版本还不稳定，一直在更新，现在还没有推出稳定的1.0版本
    1 优势
    性能方面媲美原生App。
    绝大部分代码同时适用IOS/Android，一套代码两套系统适用。
    使用Javascript编码，上手容易。
    组件式开发，易于管理维护，代码复用率高。
    代码更改后会自动刷新，节省等待时间。
    支持热更新，更新无需重新安装App。
    2 劣势
    RN组件库不全，第三方组件库也不全，当遇到某些特殊功能，需要花费大量时间、精力完成；性能方面也无法媲美原生，还是会有一些损耗，特别是大数据交换时；
    系统适配方面， IOS版本略好，android发展较慢；
    编程方面， ios和android代码并非通用，有可能需要维护两套代码或者在代码中做一些条件判断或编译；
    开发人员还是需要会原生开发，不然自定义组件无法编码；
    开发复杂应用必须精通原生开发，开发效率并不比原生开发的熟手快。很多问题（包括兼容性问题解决）任然需要原生开发。
    升级RN版本或需要大动干戈，尤其向下兼容不好；
    `}],ve=[{title:"CSS --- 1.元素水平垂直居中",content:`
        一、flex弹性布局：display：flex；Justify-content：center；align-item：center  浏览器兼容问题
        二、用定位：父元素相对定位，子元素绝对定位（父相子绝）
        1、子：top:50%；left:50%；子盒子移动自身宽高的一半  适用于盒子宽高已知
        2、子：position上下左右设为0； margin：auto       适用于盒子有宽高
        3、子：top:50%；left:50%；transform:translate(-50%,-50%)  考虑浏览器兼容问题
        三、table布局：设置父元素为display:table-cell，子元素设置 display: inline-block; vertical-align: middle; text-align: center;
        四、grid网格布局：display: grid; justify-items:center; align-items: center ;`},{title:"CSS --- 2.BFC",content:`
        BFC （块格式化上下文）可以看成是一个容器，容器内部元素不会影响外部元素。
        特征
        1.Bfc是一个块级元素，块级元素在垂直方向上依次排列
        2.Bfc是一个独立的容器，内部元素不会影响外部的元素
        3.属于同一个bfc的两个盒子，外边距margin会发生重叠，并且取最大外边距
        4.计算bfc高度时，浮动元素也要参与计算
        如何添加：
        给父级元素添加以下任意样式：overflow:hidden;  display:flex; display:inline-flex;  display:inline-block;  position:absolute;  position:fixed;
        作用：
        1.解决margin的重叠问题
        2.解决子元素外边距会使父元素塌陷
        3.创建自适应两栏布局
        创建BFC的条件?
        1.float除none以外的值
        2.position的值为absolute或者fixed
        3.overflow为auto、scroll和hidden（overflow的值不设置成 visible）
        4.display的值为inline-block、inline-flex、flex、flow-root、table-caption、table-cell。
        `},{title:"CSS --- 3.flex布局",content:`
        flex布局 也就是 弹性布局
        设为Flex布局以后，子元素的float、clear和vertical-align属性就会失效。
        flex布局是CSS3新增的一种布局方式，可以通过将一个元素的display属性值设置为flex从而使它成为一个flex容器，它的所有子元素都会成为它的项目。一个容器默认有两条轴：一个是水平的主轴，一个是与主轴垂直的交叉轴。可以使用flex-direction来指定主轴的方向。可以使用justify-content来指定元素在主轴上的排列方式，使用align-items来指定元素在交叉轴上的排列方式。还可以使用flex-wrap来规定当一行排列不下时的换行方式。对于容器中的项目，可以使用order属性来指定项目的排列顺序，还可以使用flex-grow来指定当排列空间有剩余的时候，项目的放大比例，还可以使用flex-shrink来指定当排列空间不足时，项目的缩小比例。`},{title:"CSS --- 4.flex:1",content:`
        flex属性是flex-grow(哥肉)，flex-shrink（神可）和flex-basis（呗谁死）的简写，默认值为0 1 auto。flex:1 表示 flex: 1 1 0%：
        ● 第一个参数表示: flex-grow 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大；
        ● 第二个参数表示: flex-shrink 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小；
        ● 第三个参数表示: flex-basis给上面两个属性分配多余空间之前, 计算项目是否有多余空间, 默认值为 auto, 即项目本身的大小。`},{title:"CSS --- 5.Less和Sass的区别",content:`
        1、编译环境不同
        sass通过ruby 是在服务器端处理
        less是通过js编译 是在客户端处理，引入less.js 
        2、变量符不一样
        less是用@,sass是用$
        3、sass支持条件语句，可以使用if{}else{},for{}循环等等。而less不支持。
        4、输出设置不同
        Sass提供4中输出选项：nested（默认，嵌套缩进）, compact（简洁）, compressed（压缩）和 expanded（展开）。
        而Less没有输出设置
        5、Sass和Less的工具库不同
        Sass有工具库 Compass。Less有UI组件库Bootstrap
        7、引用外部 CSS 文件
        Scss引用的外部文件命名必须以_开头。`},{title:"CSS --- 6.伪元素和伪类的区别",content:`
        伪类（:单引号）：把特殊的效果加到特定的选择器上。是已有的元素添加类别的，不会产生新元素。
        伪元素（::双引号）：在内容元素上添加额外的元素或者元素样式，但是这些元素不会在文档的源代码内找到，只会显示在页面上。
        总结：伪类是通过在元素选择器上加入伪类改变元素状态，而伪元素通过对元素的操作进行元素的改变.`},{title:"CSS --- 7.隐藏元素的方法",content:`
        1、display：none;不占位置（在渲染树内消失），不响应绑定的监听事件
        2、visibility：hidden；占位置（不会消失），不响应
        3、opacity：0；占位，响应
        4、position：absolute；移出可视区域
        5、z-index：复值；其他元素遮盖
        6、transform：scale（0,0）；元素缩放为0，占位不响应`},{title:"CSS --- 8.标准盒模型和怪异盒模型",content:`
        标准盒模型：
        标准盒模型在计算宽高的时候只计算 content 内容的宽高，不包含内外边距和边框的宽高
        当标准盒模型的宽高确认时，增加内外边距和边框会撑大原盒子
        怪异盒模型：
        怪异盒模型在计算宽高时包含 conntent 内容、padding内边距、border边框的宽高
        当怪异盒模型的宽高确认时，给怪异盒模型添加内边距和边框，怪异盒模型的宽高不会改变，而是通过向内压缩，挤压 content 内容的`},{title:"CSS --- 9.rem、em、vw、vh、px的区别",content:`
        px是固定的像素，一旦设置就无法因为适应页面大小而改变
        em和rem是相对长度单位，其长度不是固定的，更适应响应式布局
        em是相对父元素来设置大小的，rem是相对根元素的
        vw/vh：viewpoint（为破特） width / viewpoint height，vw 相对于视窗的宽度，vh 相对于视窗的高度，1vw等于视窗宽度的1%
        vmin：vw和vh中的较小值；
        vmax：vw和vh中的较大值；
        `},{title:"CSS --- 10.display的属性值和作用",content:`
        none	元素不显示，并且会从文档流中移除。
        block	块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
        inline	行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
        inline-block	默认宽度为内容宽度，可以设置宽高，同行显示。
        list-item	像块类型元素一样显示，并添加样式列表标记。
        table	此元素会作为块级表格来显示。
        inherit	规定应该从父元素继承display属性的值。
        `},{title:"CSS --- 11.display的block、inline和inline-block的区别",content:`
        （1）block： 会独占一行，多个元素会另起一行，可以设置width、height、margin和padding属性；
        （2）inline： 元素不会独占一行，设置width、height属性无效。但可以设置水平方向的margin和padding属性，不能设置垂直方向的padding和margin；
        （3）inline-block： 将对象设置为inline对象，但对象的内容作为block对象呈现，之后的内联对象会被排列在同一行内。
        `},{title:"CSS --- 12.CSS的选择器和优先级",content:`
        选择器和对应的优先级：
        1. 标签选择器、伪元素选择器：1；
        2. 类class选择器、伪类选择器、属性选择器：10；
        3. id 选择器：100；
        4. 内联样式：1000；
        !important > 内联 > id选择器 > 类名选择器 > 标签选择器
        `},{title:"CSS --- 13.transition和animation的区别",content:`
        transition是过渡属性，强调过度，它的实现是像鼠标移动上去，焦点，点击等）才执行动画。它类似于flash的补间动画，设置一个开始关键帧，一个结束关键帧。
        animation是动画属性，它的实现不需要触发事件，设定好时间之后可以自己执行，他也能循环一个动画。它也类似于flash的补间动画，但是它可以设置多个关键帧（用@keyframe定义）完成动画。
        `},{title:"CSS --- 14.对line-height 的理解及其赋值方式",content:`
        （1）line-height的概念：
        1.line-height 指一行文本的高度，包含了字间距，本质上就是下一行基线到上一行基线距离；
        2.如果一个标签没有定义 height 属性，那么其最终表现的高度由 line-height 决定；
        3.一个容器没有设置高度，那么撑开容器高度的是 line-height，而不是容器内的文本内容；
        4.把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中；
        5.line-height 和 height 都能撑开一个高度；
        （2）line-height 的赋值方式：
        1.带单位：px 是固定值，而 em 会参考父元素 font-size 值计算自身的行高
        2.纯数字：会把比例传递给后代。例如，父级行高为 1.5，子元素字体为 18px，则子元素行高为 1.5 * 18 = 27px
        3.百分比：将计算后的值传递给后代
        `},{title:"CSS --- 15.如何解决 1px的问题",content:`
        1、直接写0.5px
        2、伪元素先放大后缩小
        3、viewport缩放解决
        `},{title:"CSS --- 16.回流（重排）重绘",content:`
        重绘：改变某个节点的样式
        重排：增加和删除某些节点，重新计算生成渲染树
        重排一定重绘，重绘不一定重排
        如何解决：
            1.不要直接操作样式，先设置好class，然后修改DOM的classname
            2.Position：absolute和flex布局不会导致重排
            3.不要把dom节点放在一个循环内当成循环的变量
            4.需要动画的元素脱离文档流
            5.不使用table布局
            6.需要多次添加都没，先使用碎片化创建一个盒子，里面添加子元素，添加完插入元素中
        `},{title:"CSS --- 17.响应式",content:`
        响应式就是跟随用户页面设备尺寸的变化，页面实现自动的适配
        比如你逛某个页面，缩放页面的时候发现1000-1160宽是一个适配，1160以外又是一个适配
        实现方案：
        1.弹性布局
        2.rem+媒体查询
        3.百分比
        4.媒体查询(代码量大)
        5.vw/vh：相对window大小
        `},{title:"CSS --- 18.高度塌陷",content:`
        产生原因：
        当父元素没有添加高度（高度自适应），而子元素脱离文档流的时候（当子元素设置了float或者子元素的position属性值为absolute或是fixed，都会脱离文档流），就会发生高度塌陷。
        解决方法：要么给父元素固定高度，要是高度自适应的情况下(念下面的四种)
        1、给父元素加overflow: hidden；
        2、给父元素添加border;
        3、给父元素添加padding;
        4、万能清除浮动法。给塌陷的父元素:after{content:"";display:block;clear:both; visibility:hidden;}
        `},{title:"CSS --- 19.说一下CSS权重优先级",content:`
        !important(无穷大) > 内联样式(1000) > id选择器(100) > 类选择器(属性选择器，伪类选择器)(10) > 标签选择器(伪元素选择器)(1) > 通配符选择器(0) > 继承(0)
        `},{title:"CSS --- 20.伪元素选择器",content:`
        :after => 在标签里的元素之后插入内容
        :before => 在标签里的元素之前插入内容
        :first-letter => 选择每个标签里的元素的首字母
        :first-line => 选择每个标签里的元素首行
        :selection => 选择用户选择的元素部分
        `},{title:"CSS --- 21.css属性，visibility，display，opacity有什么区别",content:`
        visibility：设置为hidden时，元素不可见，但是占位，元素在页面结构中不消失，默认值为visible可见
        display：设置为none时，元素不可见，不占位，元素在页面结构中不展示
        opacity：通过透明度，来实现元素不可见，为0时则不可见，占位，元素在页面结构中不消失
        `}],Se=[{title:"HTML --- 1.src和href的区别",content:`
        src指向外部资源；href指向网络资源所在位置。
        src 用于替换当前元素，href 用于在当前文档与引用资源之间确立联系。
        浏览器解析时，src会暂停其他资源的下载和处理，直到这个资源加载执行完才会进行之后的操作；href会并行下载资源并且不会停止对当前文档的处理
        `},{title:" HTML --- 2.defer和async的区别",content:`
        首先 defer 和 async 都是去异步加载外部的JS脚本文件，它们都不会阻塞页面的解析
        然后他们的区别是：执行顺序和脚本是否异步执行；
        1、执行顺序：多个带async属性的标签，并不能保证加载的顺序；多个带defer属性的标签，他是按照加载顺序执行；
        2、脚本是否异步执行：async属性，表示后续文档的加载和执行与js脚本的加载和执行是异步进行的；defer属性，加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded事件触发执行之前。
        `},{title:"HTML --- 3.对HTML语义化理解",content:`
        内容语义话 + 代码语义化  也就是用正确的标签做正确的事
        标签 头部 header 导航 nac 区块 section  主要区域 main 主要内容 article
        侧边栏 aside  底部 footer
        `},{title:"HTML --- 4.HTML5有哪些更新",content:`
        1、新增语义化标签: nav、header、footer、aside、section、article
        2、音频、视频标签:audio、video
        3、数据存储:localStorage、sessionStorage
        4、canvas (画布)、Geolocation (地理定位)、websocket (通信协议) 
        5、input标签新增属性:placeholder、autocomplete、autofocus、required
        6、history APl: go、forward、back、 pushstate
        `}],fe=[{title:"Vue --- 1. Vue的基本原理",content:`
    当一个Vue实例创建时，Vue会遍历data中的属性，用 Object.defineProperty（vue3.0使用proxy ）将它们转为 getter/setter，并且在内部追踪相关依赖，在属性被访问和修改时通知变化。 每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的setter被调用时，会通知watcher重新计算，从而致使它关联的组件得以更新。
    `},{title:"Vue --- 2. 双向数据绑定的原理",content:`
    Vue通过Object.defineProperty()方法对数据进行劫持，监听数据的变化，并通过getter和setter方法对数据进行读写。
    其次，Vue通过发布订阅模式，维护了一个订阅者数组，当数据发生变化时，Vue会通知所有订阅者进行更新。因此，当用户在页面上进行修改时，Vue会更新对应的数据，并更新所有订阅者更新视图，同时当数据发生变化时，Vue也会更新对应的视图，通过这样的机制，Vue实现了双向数据绑定，使得数据和视图的变化可以互相影响
    `},{title:"Vue --- 3. 使用 Object.defineProperty() 来进行数据劫持有什么缺点？",content:`
      在对一些属性进行操作时，使用这种方法无法拦截，比如通过下标方式修改数组数据或者给对象新增属性，这都不能触发组件的重新渲染，因为 Object.defineProperty 不能拦截到这些操作。更精确的来说，对于数组而言，大部分操作都是拦截不到的，只是 Vue 内部通过重写函数的方式解决了这个问题。

      在 Vue3.0 中已经不使用这种方式了，而是通过使用 Proxy 对对象进行代理，从而实现数据劫持。使用Proxy 的好处是它可以完美的监听到任何方式的数据改变，唯一的缺点是兼容性的问题，因为 Proxy 是 ES6 的语法。
      `},{title:"Vue --- 4. MVC原理",content:`
    MVC 通过分离 Model、View 和 Controller 的方式来组织代码结构。其中 View 负责页面的显示逻辑，Model 负责存储页面的业务数据，以及对相应数据的操作。并且 View 和 Model 应用了观察者模式，当 Model 层发生改变的时候它会通知有关 View 层更新页面。Controller 层是 View 层和 Model 层的纽带，它主要负责用户与应用的响应操作，当用户与页面产生交互的时候，Controller 中的事件触发器就开始工作了，通过调用 Model 层，来完成对 Model 的修改，然后 Model 层再去通知 View 层更新。
    `},{title:"Vue --- 5. MVVM原理",content:`
      MVVM 分为 Model、View、ViewModel：
      ● Model代表数据模型，数据和业务逻辑都在Model层中定义；
      ● View代表UI视图，负责数据的展示；
      ● ViewModel负责监听Model中数据的改变并且控制视图的更新，处理用户交互操作；
      
      Model和View并无直接关联，而是通过ViewModel来进行联系的，Model和ViewModel之间有着双向数据绑定的联系。因此当Model中的数据改变时会触发View层的刷新，View中由于用户交互操作而改变的数据也会在Model中同步。
      
      这种模式实现了 Model和View的数据自动同步，因此开发者只需要专注于数据的维护操作即可，而不需要自己操作DOM。
      `},{title:"Vue --- 6. MVP原理",content:`
    MVP 模式与 MVC 唯一不同的在于 Presenter 和 Controller。在 MVC 模式中使用观察者模式，来实现当 Model 层数据发生变化的时候，通知 View 层的更新。这样 View 层和 Model 层耦合在一起，当项目逻辑变得复杂的时候，可能会造成代码的混乱，并且可能会对代码的复用性造成一些问题。MVP 的模式通过使用 Presenter 来实现对 View 层和 Model 层的解耦。MVC 中的Controller 只知道 Model 的接口，因此它没有办法控制 View 层的更新，MVP 模式中，View 层的接口暴露给了 Presenter 因此可以在 Presenter 中将 Model 的变化和 View 的变化绑定在一起，以此来实现 View 和 Model 的同步更新。这样就实现了对 View 和 Model 的解耦，Presenter 还包含了其他的响应逻辑。
    `},{title:"Vue --- 7. Computed 和 Watch 的区别",content:`
      ● computed 计算属性 : 依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值。 
      ● watch 侦听器 : 更多的是观察的作用，无缓存性，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作。
      `},{title:"Vue --- 8. Computed 和 Methods 的区别",content:`
      相同点：
      ● 可以将同一函数定义为一个 method 或者一个计算属性。对于最终的结果，两种方式是相同的 

      不同点： 
      ● computed: 计算属性是基于它们的依赖进行缓存的，只有在它的相关依赖发生改变时才会重新求值；
      ● method 调用总会执行该函数。
      `},{title:"Vue --- 9. slot是什么，有什么作用？",content:`
      slot又名插槽，是Vue的内容分发机制，组件内部的模板引擎使用slot元素作为承载分发内容的出口。插槽slot是子组件的一个模板标签元素，而这一个标签元素是否显示，以及怎么显示是由父组件决定的。slot又分三类，默认插槽，具名插槽和作用域插槽。
      ● 默认插槽：又名匿名插槽，当slot没有指定name属性值的时候一个默认显示插槽，一个组件内只有有一个匿名插槽。
      ● 具名插槽：带有具体名字的插槽，也就是带有name属性的slot，一个组件可以出现多个具名插槽。
      ● 作用域插槽：默认插槽、具名插槽的一个变体，可以是匿名插槽，也可以是具名插槽，该插槽的不同点是在子组件渲染作用域插槽时，可以将子组件内部的数据传递给父组件，让父组件根据子组件的传递过来的数据决定如何渲染该插槽。
      `},{title:"Vue --- 10. slot原理",content:`
    当子组件vm实例化时，获取到父组件传入的slot标签的内容，存放在vm.$slot中，默认插槽为vm.$slot.default，具名插槽为vm.$slot.xxx，xxx 为插槽名，当组件执行渲染函数时候，遇到slot标签，使用$slot中的内容进行替换，此时可以为插槽传递数据，若存在数据，则可称该插槽为作用域插槽。
    `},{title:"Vue --- 11. 过滤器是什么，有什么作用？",content:`
    过滤器是用来过滤数据的，在Vue中使用filters来过滤数据，filters不会修改数据，而是过滤数据，改变用户看到的输出（计算属性 computed ，方法 methods 都是通过修改数据来处理数据格式的输出显示）。
    `},{title:"Vue --- 12. 如何写一个过滤器",content:`
    过滤器是一个函数，它会把表达式中的值始终当作函数的第一个参数。过滤器用在插值表达式 {{ }} 和 v-bind 表达式 中，然后放在操作符“ | ”后面进行指示。
    `},{title:"Vue --- 13. 常见的事件修饰符及作用",content:`
      ● .stop：等同于 JavaScript 中的 event.stopPropagation() ，防止事件冒泡；
      ● .prevent ：等同于 JavaScript 中的 event.preventDefault() ，防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）；
      ● .capture ：与事件冒泡的方向相反，事件捕获由外到内；
      ● .self ：只会触发自己范围内的事件，不包含子元素；
      ● .once ：只会触发一次
      `},{title:"Vue --- 14. v-if、v-show、v-html 的原理",content:`
      ● v-if会调用addIfCondition方法，生成vnode的时候会忽略对应节点，render的时候就不会渲染；
      ●  v-show会生成vnode，render的时候也会渲染成真实节点，只是在render过程中会在节点的属性中修改show属性值，也就是常说的display； 
      ● v-html会先移除节点下的所有节点，调用html方法，通过addProp添加innerHTML属性，归根结底还是设置innerHTML为v-html的值。
      `},{title:"Vue --- 15. v-if和v-show的区别",content:`
      ● 手段：v-if是动态的向DOM树内添加或者删除DOM元素；v-show是通过设置DOM元素的display样式属性控制显隐；
      ● 编译过程：v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换；
      ● 编译条件：v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译; v-show是在任何条件下，无论首次条件是否为真，都被编译，然后被缓存，而且DOM元素保留；
      ● 性能消耗：v-if有更高的切换消耗；v-show有更高的初始渲染消耗；
      ● 使用场景：v-if适合运营条件不大可能改变；v-show适合频繁切换
      `},{title:"Vue --- 16. v-model是什么？",content:`
      v-model 是 vue 中进行数据双向绑定的指令，在内部实际上是通过语法糖来完成数据的双向绑定，v-model 绑定的形式有两种，一种是绑定在普通表单元素上，一种是绑定在自定义组件上，两者在实现上也略微不同；

      绑定在普通表单元素上，分别有 input select textarea radio 等，从源码中也可以看出，他们之间的实现也略微不同，区别在于改变值时触发的事件不同；
      `},{title:"Vue --- 17. v-model 是如何实现的，语法糖实际是什么",content:`
      ● 当 v-model 绑定在普通表单元素 select、checkbox、radio 时，语法糖为 v-bind:value 和 v-on:change；
      ● 当 v-model 绑定在 input、textarea时，语法糖分几种情况：
        ○ 默认为 input 事件；
        ○ 带 lazy 修饰符时为 change 事件；
        ○ 带 type="range" 属性时为 __r；
        ○ 带 trim或 number 时新增 blur 事件；
      ● 当 v-model 绑定在自定义组件时，语法糖为 v-bind:value 和 v-on:input 或者自定义 model 选项；
    `},{title:"Vue --- 18. data为什么是一个函数而不是对象",content:`
    Vue组件可能存在多个实例，如果使用对象形式定义data，则会导致它们共用一个data对象，那么状态变更将会影响所有组件实例，这是不合理的；采用函数形式定义，在initData时会将其作为工厂函数返回全新data对象，有效规避多实例之间状态污染问题。而在Vue根实例创建过程中则不存在该限制，也是因为根实例只能有一个，不需要担心这种情况。
    `},{title:"Vue --- 19. 对keep-alive的理解",content:`
      如果需要在组件切换的时候，保存一些组件的状态防止多次渲染，就可以使用 keep-alive 组件包裹需要保存的组件。
      keep-alive有以下三个属性：
      ● include 字符串或正则表达式，只有名称匹配的组件会被匹配；
      ● exclude 字符串或正则表达式，任何名称匹配的组件都不会被缓存；
      ● max 数字，最多可以缓存多少组件实例。
      `},{title:"Vue --- 20. keep-alive 实现原理",content:`
      1. 判断组件 name ，不在 include 或者在 exclude 中，直接返回 vnode，说明该组件不被缓存。
      2. 获取组件实例 key ，如果有获取实例的 key，否则重新生成。
      3. key生成规则，cid +"∶∶"+ tag ，仅靠cid是不够的，因为相同的构造函数可以注册为不同的本地组件。
      4. 如果缓存对象存在，则直接从缓存对象中获取组件实例给 vnode ，不存在则添加到缓存对象中。
      5. 最大缓存数量，当缓存组件数量超过 max 值时，清除 keys 数组内第一个组件。
      `},{title:"Vue --- 21. $nextTick原理",content:`
      Vue 的 nextTick 其本质是对 JavaScript 执行原理 EventLoop 的一种应用
      nextTick 的核心是利用了 Promise 、MutationObserver、setImmediate、setTimeout的原生 JavaScript 方法来模拟对应的微/宏任务的实现，本质是为了利用 JavaScript 的这些异步回调任务队列来实现 Vue 框架中自己的异步回调队列。
      `},{title:"Vue --- 22. $nextTick使用场景",content:`
      ● 在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的DOM结构的时候，这个操作就需要方法在nextTick()的回调函数中。
      ● 在vue生命周期中，如果在created()钩子进行DOM操作，也一定要放在nextTick()的回调函数中
      `},{title:"Vue --- 23. Vue 如何给 data 中的对象属性添加一个新的属性",content:`
    使用全局api：$set()方法，传参分别是：this.$set(要改变的数组/对象，你要改变的位置/key，你要改成的值)
    `},{title:"Vue --- 24. $set原理",content:`
      vm.$set 的实现原理是：
      ● 如果目标是数组，直接使用数组的 splice 方法触发响应式；
      ● 如果目标是对象，先判断属性是否存在、对象是否是响应式，最终如果要对属性进行响应式处理，则是通过调用 defineReactive 方法进行响应式处理（ defineReactive 方法就是 Vue 在初始化对象时，给对象属性采用 Object.defineProperty 动态添加 getter 和 setter 的功能所调用的方法)
      `},{title:"Vue --- 25. Vue中封装的数组方法有哪些，其如何实现页面更新",content:`
      ● 数组方法有：push、pop、shift、unshift、splice、sort、reverse
      ● 如何更新：重写了数组中的那些原生方法，首先获取到这个数组的__ob__，也就是它的Observer对象，如果有新的值，就调用observeArray继续对新的值观察变化（也就是通过target__proto__ == arrayMethods来改变了数组实例的型），然后手动调用notify，通知渲染watcher，执行update。
      `},{title:"Vue --- 26. Vue 单页应用与多页应用的区别",content:`
      ● SPA单页面应用（SinglePage Web Application），指只有一个主页面的应用，一开始只需要加载一次js、css等相关资源。所有内容都包含在主页面，对每一个功能模块组件化。单页应用跳转，就是切换相关组件，仅仅刷新局部资源。
      ● MPA多页面应用 （MultiPage Application），指有多个独立页面的应用，每个页面必须重复加载js、css等相关资源。多页应用跳转，需要整页资源刷新
      `},{title:"Vue --- 27. Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗？",content:`
      不会立即同步执行重新渲染。Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化， Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。

      如果同一个watcher被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环tick中，Vue 刷新队列并执行实际（已去重的）工作。
      `},{title:"Vue --- 28. Vue从template(模板)到render(渲染)的过程（Vue编译器工作原理）",content:`
      1.Vue中有个独特的编译器模块，称为"compiler"，它的主要作用是将用户编写的template编译为js中可执行的render函数；
      2.之所以需要这个编译过程是为了便于前端程序员能高效的编写视图模板；相比而言，我们还是更愿意用HTML来编写视图，直观且高效。手写render函数不仅效率底下，而且失去了编译期的优化能力，因此compiler的过程是必须的；
      3.在Vue中编译器会先对template进行解析，这一步称为parse，结束之后会得到一个JS对象，我们成为抽象语法树AST，然后是对AST进行深加工的转换过程，这一步称为transform，最后将前面得到的AST生成（generate）JS代码，也就是render函数；
      `},{title:"Vue --- 29. Vue中编译器的执行时刻？",content:`
    根据引入Vue的运行时不同，编译器的执行时刻是不同的：如果使用webpack环境，即Vue的预打包环境，这时webpack的vue-loader会提前将模板进行编译，这时编译器的执行时刻就是在打包阶段，即预编译；如果是非运行时版本，即携带编译器的版本，这时编译器就会在运行时工作：发现一个组件有模板没有渲染函数，就会去编译模板，将其转换为渲染函数，也就是发生在组件的创建阶段。
    `},{title:"Vue --- 30. React中有没有编译器？",content:"react中又jsx，这不是编译器，可以理解为一种语法糖，语言本身没有变化，通过babel-loader将jsx变为js，因此react是没有编译器的。"},{title:"Vue --- 31. 简述 mixin、extends 的覆盖逻辑",content:`
      mixin 和 extends均是用于合并、拓展组件的，两者均通过 mergeOptions 方法实现合并。
      ● mixins 接收一个混入对象的数组，其中混入对象可以像正常的实例对象一样包含实例选项，这些选项会被合并到最终的选项中。Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。
      ● extends 主要是为了便于扩展单文件组件，接收一个对象或构造函数。
      `},{title:"Vue --- 32. mergeOptions的执行过程",content:`
      ● 规范化选项（normalizeProps、normalizelnject、normalizeDirectives)
      ● 对未合并的选项，进行判断
      ● 合并处理。根据一个通用 Vue 实例所包含的选项进行分类逐一判断合并，如 props、data、 methods、watch、computed、生命周期等，将合并结果存储在新定义的 options 对象里。
      ● 返回合并结果 options。
      `},{title:"Vue --- 33. 描述下Vue自定义指令",content:`
      概念：
      在 Vue2.0 中，代码复用和抽象的主要形式是组件。然而，有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。
      一般需要对DOM元素进行底层操作时使用，尽量只用来操作 DOM展示，不修改内部的值。当使用自定义指令直接修改 value 值时绑定v-model的值也不会同步更新；如必须修改可以在自定义指令中使用keydown事件，在vue组件中使用 change事件，回调中修改vue数据; 
      `},{title:"Vue --- 34. 自定义指令钩子函数、参数",content:`
      ● 全局定义：Vue.directive("focus",{})
      ● 局部定义：directives:{focus:{}}
      ● 钩子函数：指令定义对象提供钩子函数
        o el：指令所绑定的元素，可以用来直接操作 DOM。
        o binding：一个对象，包含以下 property：
        o name：指令名，不包括 v- 前缀。
        o value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
        o oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
        o expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
        o arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
        o modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
        o vnode：Vue 编译生成的虚拟节点。
        o oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
      `},{title:"Vue --- 35. 自定义指令使用场景",content:`
      ● 普通DOM元素进行底层操作的时候，可以使用自定义指令
      ● 自定义指令是用来操作DOM的。尽管Vue推崇数据驱动视图的理念，但并非所有情况都适合数据驱动。自定义指令就是一种有效的补充和扩展，不仅可用于定义任何的DOM操作，并且是可复用的。
      ● 鼠标聚焦
      ● 下拉菜单
      ● 相对时间转换
      ● 滚动动画
      `},{title:"Vue --- 36. Vue子组件可以直接改变父组件的数据吗",content:`
      不可以，
      因为vue是单向数据流，数据流向从上到下，父级 props的更新向下流动到子组件，但是反过来则不行。这样防止从子组件意外变更父级组件的状态。子组件只能通过$emit派发一个自定义事件，父组件接收到后，由父组件修改。
      `},{title:"Vue --- 37. Vue单向数据流",content:`
    在Vue中，单向数据流指的是数据从父组件流向子组件的单向过程。这意味着子组件不能直接修改从父组件接收的props数据，只能通过触发事件来通知父组件修改数据。这种数据流的方式是从上至下单向的，有利于数据的可预测性和可维护性。
    `},{title:"Vue --- 38. 为什么需要单向数据流？",content:`
      ● 可预测性: 由于数据是单向流动的，因此更容易理解和预测数据的变化。当数据变化时，你只需要关注数据的来源，而不需要追踪数据在多个组件之间的流动。
      ● 可维护性: 当数据流动是单向的，组件之间的依赖关系变得更加清晰。这使得代码更容易维护，因为修改一个组件通常只影响其下游组件，而不会影响其他不相关的组件。
      ● 简化组件间通信: 通过明确的数据流，开发者可以更容易地管理组件之间的通信。子组件通过事件通知父组件，这使得组件间通信更加明确和简单。
      ● 降低出错概率: 双向数据流可能会导致更复杂的错误，因为任何组件都可以修改数据，这可能导致数据的不一致性和不可预测的行为。单向数据流限制了直接修改数据的能力，从而减少了出错的机会。
      ● 促进最佳实践: 单向数据流鼓励将状态管理逻辑集中在一个地方（如Vuex），这有助于更好地组织和结构化代码，使得代码更加清晰和容易理解。
      `},{title:"Vue --- 39. Vue是如何进行依赖收集的？",content:`
      ● 依赖收集是 Vue 实现响应式数据的核心。当组件被初始化时，Vue 会对组件的 data 进行初始化，将普通的 js 对象变成响应式对象。通过使用 Object.defineProperty 来实现，将属性转化为 getter/setter，在访问和修改属性时触发依赖收集和更新。
      ● 依赖收集的过程，在底层主要涉及到三个类：Dep、Watcher 和 Vue
        o Dep 是依赖收集的核心，它的主要作用是管理所有的 Watcher。Dep 类中有一个静态属性 target，它指向当前正在计算的 Watcher，保证了同一时间全局只有一个 Watcher 被计算。Dep 类中还有一个 subs 属性，它是一个 Watcher 的数组，用来存储所有依赖这个 Dep 的 Watcher。
        o Watcher 是一个用来计算表达式的类。在 Watcher 的构造函数中，它会执行表达式，这个表达式可能会触发数据的 getter，从而进行依赖收集。Watcher 类中还有一个 addDep 方法，它会将当前的 Watcher 添加到 Dep 的 subs 数组中。
        o Vue 类是 Vue 的入口，它的主要作用是初始化 Vue 应用。在 Vue 类的初始化过程中，会对组件的 data 进行初始化，将普通的 JavaScript 对象变成响应式对象。在这个过程中，会进行依赖收集。
      `},{title:"Vue --- 40. Vue的优点",content:`
      ● 轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十 kb ；
      ● 简单易学：国人开发，中文文档，不存在语言障碍 ，易于理解和学习；
      ● 双向数据绑定：保留了 angular 的特点，在数据操作方面更为简单；
      ● 组件化：保留了 react 的优点，实现了 html 的封装和重用，在构建单页面应用方面有着独特的优势；
      ● 视图，数据，结构分离：使数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作；
      ● 虚拟DOM：dom 操作是非常耗费性能的，不再使用原生的 dom 操作节点，极大解放 dom 操作，但具体操作的还是 dom 不过是换了另一种方式；
      ● 运行速度更快：相比较于 react 而言，同样是操作虚拟 dom，就性能而言， vue 存在很大的优
      `},{title:"Vue --- 41. asset和static的区别",content:`
      ● 相同点： assets 和 static 两个都是存放静态资源文件。项目中所需要的资源文件图片，字体图标，样式文件等都可以放在这两个文件下，这是相同点
      ● 不相同点：assets 中存放的静态资源文件在项目打包时，也就是运行 npm run build 时会将 assets 中放置的静态资源文件进行打包上传，所谓打包简单点可以理解为压缩体积，代码格式化。而压缩后的静态资源文件最终也都会放置在 static 文件中跟着 index.html 一同上传至服务器。static 中放置的静态资源文件就不会要走打包压缩格式化等流程，而是直接进入打包好的目录，直接上传至服务器。因为避免了压缩直接进行上传，在打包时会提高一定的效率，但是 static 中的资源文件由于没有进行压缩等操作，所以文件的体积也就相对于 assets 中打包后的文件提交较大点。在服务器中就会占据更大的空间。
      ● 建议： 将项目中 template需要的样式文件js文件等都可以放置在 assets 中，走打包这一流程。减少体积。而项目中引入的第三方的资源文件如iconfoont.css 等文件可以放置在 static 中，因为这些引入的第三方文件已经经过处理，不再需要处理，直接上传。
      `},{title:"Vue --- 42. Vue和React对比",content:`
      ● 相似之处：
        o 都将注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库；
        o 都有自己的构建工具，能让你得到一个根据最佳实践设置的项目模板；
        o 都使用了虚拟DOM来提高重绘性能；
        o 都有props的概念，允许组件间的数据传递；
        o 都鼓励组件化应用，将应用分拆成一个个功能明确的模块，提高复用性；
        o react和vue都支持服务端渲染
        o 都有支持native的方案（react的react native，vue的weex）
      ● 不同点：
        o react严格上只能算是MVC的view层，vue则是MVVM模式
        o 虚拟DOM不一样，vue会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树，而对于react而言，每当应用的状态被改变时，全部组件都会重新渲染，所以react中会需要shouldComponentUpdate这个生命周期函数方法来进行控制
        o 组件写法不一样，react推荐的做法是JSX+inline style,也就是把HTML和CSS全都写进javaScript了，vue是dom、css、js分离
        o 数据绑定：vue实现了数据的双向绑定，react数据流动是单向的
        o state对象在react应用中是不可变的，需要使用setState方法更新状态，在vue中，state对象不是必须的，数据有data属性在vue对象中管理
      `},{title:"Vue --- 43. delete和Vue.delete删除数组的区别",content:`
    delete和和Vue.delete都是对数组或对象的删除。这两种方法对于对象来说没有区别，直接删除对象的属性；但是对于数组来说有区别。delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。数组长度也不变。 Vue.delete是直接删除该元素，长度发生变化。
    `},{title:"Vue --- 44. 对SSR的理解",content:`
      SSR也就是服务端渲染，也就是将Vue在客户端把标签渲染成HTML的工作放在服务端完成，然后再把html直接返回给客户端

      SSR的优势：
      ● 更好的SEO
      ● 首屏加载速度更快

      SSR的缺点：
      ● 开发条件会受到限制，服务器端渲染只支持beforeCreate和created两个钩子；
      ● 当需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于Node.js的运行环境；
      ● 更多的服务端负载。
      `},{title:"Vue --- 45. 单页面应用spa的优缺点",content:`
      SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。

      优点：
      ● 用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
      ● 基于上面一点，SPA 相对对服务器压力小；
      ● 前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；

      缺点：
      ● 初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；
      ● 前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；
      ● SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。
      `},{title:"Vue --- 46. template和jsx的区别",content:`
      对于 runtime 来说，只需要保证组件存在 render 函数即可，而有了预编译之后，只需要保证构建过程中生成 render 函数就可以。在 webpack 中，使用vue-loader编译.vue文件，内部依赖的vue-template-compiler模块，在 webpack 构建过程中，将template预编译成 render 函数。与 react 类似，在添加了jsx的语法糖解析器babel-plugin-transform-vue-jsx之后，就可以直接手写render函数。
      所以，template和jsx的都是render的一种表现形式，不同的是：JSX相对于template而言，具有更高的灵活性，在复杂的组件中，更具有优势，而 template 虽然显得有些呆滞。但是 template 在代码结构上更符合视图与逻辑分离的习惯，更简单、更直观、更好维护。
      `},{title:"Vue --- 47. Vue初始化页面闪动问题",content:`
      使用vue开发时，在vue初始化之前，由于div是不归vue管的，所以我们写的代码在还没有解析的情况下会容易出现花屏现象，看到类似于{{message}}的字样，虽然一般情况下这个时间很短暂，但是还是有必要让解决这个问题的。
      在css代码中添加：[v-cloak] { display: none; }
      如果没有彻底解决问题，则在根元素加上style="display: none;" :style="{display: 'block'}"
      `},{title:"Vue --- 48. MVVM的优缺点",content:`
      优点: 
      ● 分离视图（View）和模型（Model），降低代码耦合，提⾼视图或者逻辑的重⽤性: ⽐如视图（View）可以独⽴于Model变化和修改，⼀个ViewModel可以绑定不同的"View"上，当View变化的时候Model不可以不变，当Model变化的时候View也可以不变。你可以把⼀些视图逻辑放在⼀个ViewModel⾥⾯，让很多view重⽤这段视图逻辑 
      ● 提⾼可测试性: ViewModel的存在可以帮助开发者更好地编写测试代码 
      ● ⾃动更新dom: 利⽤双向绑定,数据更新后视图⾃动更新,让开发者从繁琐的⼿动dom中解放 

      缺点: 
      ● Bug很难被调试: 因为使⽤双向绑定的模式，当你看到界⾯异常了，有可能是你View的代码有Bug，也可能是Model的代码有问题。数据绑定使得⼀个位置的Bug被快速传递到别的位置，要定位原始出问题的地⽅就变得不那么容易了。另外，数据绑定的声明是指令式地写在View的模版当中的，这些内容是没办法去打断点debug的 
      ●  ⼀个⼤的模块中model也会很⼤，虽然使⽤⽅便了也很容易保证了数据的⼀致性，当时⻓期持有，不释放内存就造成了花费更多的内存 
      ● 对于⼤型的图形应⽤程序，视图状态较多，ViewModel的构建和维护的成本都会⽐较⾼。
      `},{title:"Vue --- 49. v-if和v-for优先级，以及为什么不让同时使用？",content:`
      ● Vue2中v-for是优先于v-if。而在Vue3中v-if是优先于v-for
      ● 为什么不能同时使用：v-for优先于v-if被解析，如果同时出现，每次渲染都会先执行循环再判断条件，无论如何循环都不可避免，浪费了性能。
      ● 如何解决：
        应该用以下方式替换v-if和v-for同时使用的方案：
        1. 如果是为了过滤一个列表中的项目（v-for循环，v-if过滤条件），可以将列表作为计算属性，在computed中过滤出需要渲染的列表，再进行渲染。
        2. 如果是为了控制整个列表的展示和隐藏（v-for循环，v-if判断整个列表是否需要展示），可以将判断条件放到父元素（ul、ol）上。这样展示和隐藏的判断只需要执行一次（在列表最开始）。
      ● 注意：Vue3修改了v-if和v-for的优先级，v-if没有权限访问v-for的变量，这个需要注意。
      `},{title:"Vue --- 50. 对Vue组件化的理解",content:`
      1. 组件是独立和可复用的代码组织单元。组件系统是Vue核心特性之一，它使开发者使用小型、独立和通常可复用的组件构建大型应用；
      2. 组件化开发能大幅提高应用开发效率、测试性、复用性等；
      3. 组件使用按分类有：页面组件、业务组件、通用组件；
      4. vue的组件是基于配置的，我们通常编写的组件是组件配置而非组件，框架后续会生成其构造函数，它们基于VueComponent，扩展于Vue；
      5. vue中常见组件化技术有：属性prop，自定义事件，插槽等，它们主要用于组件通信、扩展等；6.合理的划分组件，有助于提升应用性能；
      6. 组件应该是高内聚、低耦合的；
      7. 遵循单向数据流的原则。
      `},{title:"Vue --- 51. 对Vue设计原则的理解",content:`
      1. 渐进式JavaScript框架：与其它大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue也完全能够为复杂的单页应用提供驱动。
      2. 易用性：vue提供数据响应式、声明式模板语法和基于配置的组件系统等核心特性。这些使我们只需要关注应用的核心业务即可，只要会写js、html和css就能轻松编写vue应用。
      3. 灵活性：渐进式框架的最大优点就是灵活性，如果应用足够小，我们可能仅需要vue核心特性即可完成功能；随着应用规模不断扩大，我们才可能逐渐引入路由、状态管理、vue-cli等库和工具，不管是应用体积还是学习难度都是一个逐渐增加的平和曲线。
      4. 高效性：超快的虚拟DOM和diﬀ算法使我们的应用拥有最佳的性能表现。追求高效的过程还在继续，vue3中引入Proxy对数据响应式改进以及编译器中对于静态内容编译的改进都会让vue更加高效。
      `},{title:"Vue --- 52. 常见的Vue性能优化方法",content:`
      1. 路由懒加载：{ path: '/foo', component: () => import('./Foo.vue') }
      2. 使用keep-alive缓存页面
      3. 使用v-show复用DOM
      4. v-for 遍历避免同时使用 v-if
      5. 长列表性能优化，如果是大数据长列表，可采用虚拟滚动，只渲染少部分区域的内容
      6. 事件的销毁，Vue 组件销毁时，会自动解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。
      7. 图片懒加载，对于图片过多的页面，为了加速页面加载速度，所以很多时候我们需要将页面内未出现在可视区域内的图片先不做加载， 等到滚动到可视区域后再去加载。<img v-lazy="/static/img/1.png">
      8. 第三方插件按需引入，像element-ui这样的第三方组件库可以按需引入避免体积太大。
      9. 无状态的组件标记为函数式组件：<template functional></template>
      `},{title:"Vue --- 53. Vue生命周期",content:`
      Vue 实例有⼀个完整的⽣命周期，也就是从开始创建、初始化数据、编译模版、挂载Dom -> 渲染、更新 -> 渲染、卸载 等⼀系列过程，称这是Vue的⽣命周期。 
      1. beforeCreate（创建前）：数据观测和初始化事件还未开始，此时 data 的响应式追踪、event/watcher 都还没有被设置，也就是说不能访问到data、computed、watch、methods上的方法和数据。
      2. created（创建后） ：实例创建完成，实例上配置的 options 包括 data、computed、watch、methods 等都配置完成，但是此时渲染得节点还未挂载到 DOM，所以不能访问到 $el 属性。
      3. beforeMount（挂载前）：在挂载开始之前被调用，相关的render函数首次被调用。实例已完成以下的配置：编译模板，把data里面的数据和模板生成html。此时还没有挂载html到页面上。
      4. mounted（挂载后）：在el被新创建的 vm.$el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的html内容替换el属性指向的DOM对象。完成模板中的html渲染到html 页面中。此过程中进行ajax交互。
      5. beforeUpdate（更新前）：响应式数据更新时调用，此时虽然响应式数据更新了，但是对应的真实 DOM 还没有被渲染。
      6. updated（更新后） ：在由于数据更改导致的虚拟DOM重新渲染和打补丁之后调用。此时 DOM 已经根据响应式数据的变化更新了。调用时，组件 DOM已经更新，所以可以执行依赖于DOM的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。
      7. beforeDestroy（销毁前）：实例销毁之前调用。这一步，实例仍然完全可用，this 仍能获取到实例。
      8. destroyed（销毁后）：实例销毁后调用，调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务端渲染期间不被调用。

      另外还有 keep-alive 独有的生命周期，分别为 activated 和 deactivated 。用 keep-alive 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 deactivated 钩子函数，命中缓存渲染后会执行 activated 钩子函数。
      `},{title:"Vue --- 54. Vue 子组件和父组件执行顺序",content:`
      加载渲染过程：
      1.父组件 beforeCreate
      2.父组件 created
      3.父组件 beforeMount
      4.子组件 beforeCreate
      5.子组件 created
      6.子组件 beforeMount
      7.子组件 mounted
      8.父组件 mounted

      更新过程：
      1. 父组件 beforeUpdate
      2.子组件 beforeUpdate
      3.子组件 updated
      4.父组件 updated

      销毁过程：
      1. 父组件 beforeDestroy
      2.子组件 beforeDestroy
      3.子组件 destroyed
      4.父组件 destoryed
      `},{title:"Vue --- 55. created和mounted的区别",content:`
      ● created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
      ● mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
      `},{title:"Vue --- 56. 一般在哪个生命周期请求异步数据",content:`
      可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。
      推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：
      ● 能更快获取到服务端数据，减少页面加载时间，用户体验更好；
      ● SSR不支持 beforeMount 、mounted 钩子函数，放在 created 中有助于一致性。
      `},{title:"Vue --- 57. keep-alive 中的生命周期哪些",content:`
      ● keep-alive是 Vue 提供的一个内置组件，用来对组件进行缓存——在组件切换过程中将状态保留在内存中，防止重复渲染DOM。
      ● 如果为一个组件包裹了 keep-alive，那么它会多出两个生命周期：deactivated、activated。同时，beforeDestroy 和 destroyed 就不会再被触发了，因为组件不会被真正销毁。
      ● 当组件被换掉时，会被缓存到内存中、触发 deactivated 生命周期；当组件被切回来时，再去缓存里找这个组件、触发 activated钩子函数。
      `},{title:"Vue --- 58. Vue组件通信",content:`
      （1）父子组件间通信
      ● 子组件通过 props 属性来接受父组件的数据，然后父组件在子组件上注册监听事件，子组件通过 emit 触发事件来向父组件发送数据。
      ● 通过 ref 属性给子组件设置一个名字。父组件通过 $refs 组件名来获得子组件，子组件通过 $parent 获得父组件，这样也可以实现通信。
      ● 使用 provide/inject，在父组件中通过 provide提供变量，在子组件中通过 inject 来将变量注入到组件中。不论子组件有多深，只要调用了 inject 那么就可以注入 provide中的数据。
      （2）兄弟组件间通信
      ● 使用 eventBus 的方法，它的本质是通过创建一个空的 Vue 实例来作为消息传递的对象，通信的组件引入这个实例，通信的组件通过在这个实例上监听和触发事件，来实现消息的传递。
      ● 通过 $parent/$refs 来获取到兄弟组件，也可以进行通信。
      （3）任意组件之间
      ● 使用 eventBus ，创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件。
      ● Vuex等
      `},{title:"Vue --- 59. hash(哈希)路由和history路由介绍",content:`
      ● hash指的是地址中#号以及后面的字符，也称为散列值；hash值会出现在URL里面，但是不会出现在HTTP请求中，对后端完全没有影响。所以改变hash值，不会重新加载页面；浏览器兼容好，是开发中默认的模式；hash变化对应的url都会被浏览器记录在历史访问栈中，可以使用浏览器的前进后退功能，虽然没有请求服务器，但页面内容和url一一对应；hash模式的工作原理是hashchange事件，window就可以监听hash的变化，而不需要向后端发起请求，并按规则加载相应的代码
      ● history模式的URL中没有#，它使用的是传统的路由分发模式，即用户在输入一个URL时，服务器会接收这个请求，并解析这个URL，然后做出相应的逻辑处理。特点： 当使用history模式时，URL就像这样：http://abc.com/user/id。相比hash模式更加好看。但是，history模式需要后台配置支持。如果后台没有正确配置，访问时会返回404。
      `},{title:"Vue --- 60. hash(哈希)路由和history路由，两种模式对比",content:`
      调用 history.pushState() 相比于直接修改 hash，存在以下优势:
      ● pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL；
      ● pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中；
      ● pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；而 hash 只可添加短字符串；
      ● pushState() 可额外设置 title 属性供后续使用。
      ● hash模式下，仅hash符号之前的url会被包含在请求中，后端如果没有做到对路由的全覆盖，也不会返回404错误；history模式下，前端的url必须和实际向后端发起请求的url一致，如果没有对用的路由处理，将返回404错误。
      `},{title:"Vue --- 61. Vue如何监听页面url中hash变化",content:`
      1. 监听 $route 的变化：在Vue中，你可以使用watch属性来监听$route的变化。当路由发生变化时，会执行相应的处理函数。
      2. 使用 window.location.hash：直接读取window.location.hash的值。这个属性可读可写。绑定一个hashChange事件即可监听到。
      });
      `},{title:"Vue --- 62. $route 和 $router 的区别",content:`
      $route 和 $router 是Vue Router提供的两个对象。
      ● $route 是一个只读对象，代表了当前活动的路由信息，包括路径、参数、查询字符串等。它用于获取路由的信息。
      ● $router 是 Vue Router 的实例，提供了一些方法用于导航路由，如 push、replace 和 go。它用于在应用程序中进行路由导航操作
      `},{title:"Vue --- 63. params和query的区别",content:`
      params和query的区别区别：
      ● params 是通过路径的一部分来传递参数，用于捕获和处理特定的路由请求。参数是必需的，出现在路径中，可以通过 $route.params 访问。
      ● query 是通过查询字符串来传递参数，用于配置和过滤路由请求。参数是可选的，出现在 URL 的查询字符串中，可以通过 $route.query 访问。
      总结：监听 hashchange 事件可获取页面哈希的变化；$route 用于获取当前路由信息，$router 用于进行路由导航；params 通过路径传递参数，query 通过查询字符串传递参数。
      `},{title:"Vue --- 64. 刷新页面时，params和query的差异",content:`
      关于刷新时的差异：
      ● 对于params，当页面刷新时，参数会丢失，因为参数只存在于URL路径中，并不会被浏览器记忆。
      ● 对于query，当页面刷新时，参数不会丢失，因为参数是作为查询字符串出现在URL中，浏览器会自动保留这些参数。
      `},{title:"Vue --- 65. Vue-router你们用的哪个版本？",content:`
    v3和v4版本都用了，老项目使用了vue2 + vue-router3.x，新项目使用vue3 + vue-router4.x
    `},{title:"Vue --- 66. Vue动态路由传参有几种方法",content:`
      动态路由：就是不确定的路由，需要传递动态参数来拼接为真实的路由
      1. params 方式
      ● 配置路由格式：/router/:id
      ● 传递的方式：在path后面跟上对应的值
      ● 传递后形成的路径：/router/123
      2. query 方式
      ● 配置路由格式：/router，也就是普通配置
      ● 传递的方式：对象中使用query的key作为传递方式
      ● 传递后形成的路径：/route?id=123
      `},{title:"Vue --- 67. Vue动态路由传参具体用法",content:`
      ● params 方式具体用法：
      1. 路由定义
      // 在APP.vue中
      <router-link :to="'/user/'+userId" replace>用户</router-link>    
      
      //在index.js
      {
         path: '/user/:userid',
         component: User,
      },
      2. 路由跳转
      // 方法1：
      <router-link :to="{ name: 'users', params: { uname: wade }}">按钮</router-link
      // 方法2：
      this.$router.push({name:'users',params:{uname:wade}})
      // 方法3：
      this.$router.push('/user/' + wade)
      3. 参数获取：通过 $route.params.userid 获取传递的值
      =============
      ● query 方式具体用法：
      1. 路由定义
      //方式1：直接在router-link 标签上以对象的形式
      <router-link :to="{ path: '/user', query: { name: 'tom', age: 18 }}"></router-link>

      // 方式2：写成按钮以点击事件形式
      this.$router.push({
        path: "/user",
        query: {
          name: "tom",
          age: "18",
        }
      })
      2. 跳转方法
      // 方法1：
      <router-link :to="{ name: 'users', query: { uname: james }}">按钮</router-link>
      // 方法2：
      this.$router.push({ name: 'users', query:{ uname:james }})
      // 方法3：
      <router-link :to="{ path: '/user', query: { uname:james }}">按钮</router-link>
      // 方法4：
      this.$router.push({ path: '/user', query:{ uname:james }})
      // 方法5：
      this.$router.push('/user?uname=' + jsmes)
      3. 参数获取：通过$route.query 获取传递的值
      `},{title:"Vue --- 68. Vue-router 路由钩子函数有哪些",content:`
      简单的回答：
      ● 全局前置/钩子：beforeEach、beforeResolve、afterEach
      ● 路由独享的守卫：beforeEnter
      ● 组件内的守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave

      详细的回答：
      1. 全局有三个路由钩子：
      ● router.beforeEach：全局前置守卫 进入路由之前，接收参数(to, from, next)
      ● router.beforeResolve：全局解析守卫在 beforeRouteEnter 调用之后调用，接收参数(to, from, next)
      ● router.afterEach：全局后置钩子 进入路由之后调用，接收参数(to, from)
      2. 路由独享的守卫
      ● 可以在路由配置上直接定义 beforeEnter 守卫
      3. 组件内的守卫
      ● beforeRouteEnter：在渲染该组件的对应路由被 confirm 前调用，不能获取组件实例this，因为当守卫执行前，组件实例还没被创建
      ● beforeRouteUpdate (2.2 新增)：在当前路由改变，但是该组件被复用时调用，可以访问组件实例this
      ● beforeRouteLeave：导航离开该组件的对应路由时调用，可以访问组件实例this
      `},{title:"Vue --- 69. 导航守卫，完整的导航解析流程",content:`
      1. 导航被触发。
      2. 在失活的组件里调用 beforeRouteLeave 守卫。
      3. 调用全局的 beforeEach 守卫。
      4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
      5. 在路由配置里调用 beforeEnter。
      6. 解析异步路由组件。
      7. 在被激活的组件里调用 beforeRouteEnter。
      8. 调用全局的 beforeResolve 守卫 (2.5+)。
      9. 导航被确认。
      10. 调用全局的 afterEach 钩子。
      11. 触发 DOM 更新。
      12. 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。
      `},{title:"Vue --- 70. 路由守卫：参数 to、from、next 的含义",content:`
      ● to: Route: 即将要进入的目标 路由对象
      ● from: Route: 当前导航正要离开的路由
      ● next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
        - next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
        - next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
        - next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
        - next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
      `},{title:"Vue --- 71. Vue-router 路由跳转和 location.href 区别",content:`
      ● 使用 location.href= /url 来跳转，简单方便，但是刷新了页面；
      ● 使用 history.pushState( /url ) ，无刷新页面，静态跳转；
      ● 引进 router ，然后使用 router.push( /url ) 来跳转，使用了 diff 算法，实现了按需加载，减少了 dom 的消耗。其实使用 router 跳转和使用 history.pushState() 没什么差别的，因为vue-router就是用了 history.pushState() ，尤其是在history模式下。
      `},{title:"Vue --- 72. vuex是什么",content:`
    Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
    `},{title:"Vue --- 73. vuex实现原理",content:`
      源码实现：
      1. store是怎么注册的？
      ● Vuex在vue的生命周期中的初始化钩子前插入一段Vuex初始化代码，给Vue的实例注入一个$store的属性，这就是为什么我们在Vue的组件中可以通过this.$store.xxx,访问到Vuex的各种数据和状态
      2. mutation，commit是怎么实现的？
      ● mutation 在源码中：registerMutation 是对store的mutation的初始化。接受4个参数，store为当前Store实例，type为mutation的key，handler为mutation执行的回调函数，path为当前模块的路径
      mutation的作用就是同步修改当前模块的state
        - 函数首先通过type拿到对应的mutation对象数组，
        - 然后把一个mutation的包装函数push到这个数组中
        - 这个函数接收一个参数payload，这就是我们在定义mutation的时候接收的额外参数
        - 这个函数执行的时候会调用mutation的回调函数
        - 并通过getNestedState(store.state,path)方法得到当前模块的state，和playload一起作为回调函数的参数
      ● commit 支持3个参数，type表示mutation的类型，payload表示额外的参数，根据type查找对应的mutation，找不到就输出一条错误信息，否则遍历这个type对应的mutation对象数组，执行handler(payload)方法，这个方法就是之前定义的wrappedMutationHandler(handler), 执行它就相当于执行了registerMutation注册的回调函数
      `},{title:"Vue --- 74. 什么情况下使用vuex",content:`
    Vuex 可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。如果不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，最好不要使用 Vuex。一个简单的 store 模式就足够您所需了。但是，如果需要构建一个中大型单页应用，很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。
    `},{title:"Vue --- 75. vuex辅助函数有哪些",content:`
    Vuex提供了mapState、MapGetters、MapActions、mapMutations等辅助函数给开发在vm中处理store
    `},{title:"Vue --- 76. vuex属性包含哪些？",content:`
      有五种，分别是 State、Getter、Mutation 、Action、Module
      ● state => 基本数据(数据源存放地)
      ● getters => 从基本数据派生出来的数据
      ● mutations => 提交更改数据的方法，同步
      ● actions => 像一个装饰器，包裹mutations，使之可以异步。
      ● modules => 模块化Vuex
      `},{title:"Vue --- 77. mutation和action有什么区别",content:`
    ● Mutation专注于修改State，理论上是修改State的唯一途径；Action业务代码、异步请求。
    ● Mutation：必须同步执行；Action：可以异步，但不能直接操作State。
    ● 在视图更新时，先触发actions，actions再触发mutation
    ● mutation的参数是state，它包含store中的数据；action的参数是context，它是 state 的父级，包含 state、getters
    `},{title:"Vue --- 78. vuex工作流程",content:`
      1. 通过new Vuex.Store()创建一个仓库 state是公共的状态，state--->components渲染页面
      2. 在组件内部通过this.$store.state.属性 来调用公共状态中的state，进行页面的渲染。
      3. 当组件需要修改数据的时候，必须遵循单向数据流。通过this.$store.dispatch来触发actions中的方法
      4. actions中的每个方法都会接受一个对象 这个对象里面有一个commit方法，用来触发mutations里面的方法
      5. mutations里面的方法用来修改state中的数据 mutations里面的方法都会接收到2个参数 一个是store中的state，另外一个是需要传递的参数
      6. 当mutations中的方法执行完毕后state会发生改变，因为vuex的数据是响应式的 所以组件的状态也会发生改变
      `},{title:"Vue --- 79. Vuex和单纯的全局对象有什么区别？",content:`
    ● Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
    ● 不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化，从而能够实现一些工具帮助更好地了解我们的应用。
    `},{title:"Vue --- 80. Vuex的mutation为什么不能做异步操作？",content:`
    ● 原因是因为mutation必须是同步函数。这是因为Vuex的设计原则是通过mutation来改变状态，而状态改变后，视图会立即更新。如果mutation中是异步操作，那么当状态改变时，视图可能还没有更新完成，这会导致视图和状态不一致的情况。
    ● 另外，如果mutation中进行异步操作，那么就无法保证状态的改变是按照预期的顺序执行的，这可能会导致一些难以预料的问题。
    ● 如果需要进行异步操作，可以在action中进行。action可以包含任意异步操作，当异步操作完成后，再通过调用mutation来改变状态。这样可以保证状态的改变是按照预期的顺序执行的，同时也保证了视图和状态的一致性。
    ● 除了保证状态改变的一致性和可预测性，Vuex要求mutation必须是同步函数还有另一个重要的原因，那就是为了确保devtools中的时间旅行功能可以正常使用。
    `},{title:"Vue --- 81. 如何在组件中批量使用Vuex的getter属性",content:`
    使用mapGetters辅助函数, 利用对象展开运算符将getter混入computed 对象中
    computed:{
      ...mapGetters(['total','discountTotal'])
    }
    `},{title:"Vue --- 82. vue2和vue3的区别",content:`
    1. 双向数据绑定不同：vue2 的双向数据绑定是利用ES5 的一个 API Object.definePropert()对数据进行劫持 结合 发布订阅模式的方式来实现的。vue3 中使用了 es6 的 Proxy 对数据代理
    2. 根节点不同：Vue3支持碎片(Fragments)，vue2中必须要有根标签。vue3中可以没有根标签，会默认将多个根标签包裹在一个fragement虚拟标签中，有利于减少内存
    3. Vue2使用选项式API（Options API），Vue3引入了组合式API（Composition API）
    4. 性能体积：Vue 3相比Vue 2在速度上更快，体积更小。Vue 3重写了虚拟DOM，优化了响应式系统的实现。
    5. 生命周期不同：创建前：beforeCreate -> 使用setup()
      ○ 创建后：created -> 使用setup()
      ○ 挂载前：beforeMount -> onBeforeMount
      ○ 挂载后：mounted -> onMounted
      ○ 更新前：beforeUpdate -> onBeforeUpdate
      ○ 更新后：updated -> onUpdated
      ○ 销毁前：beforeDestroy -> onBeforeUnmount
      ○ 销毁后：destroyed -> onUnmounted
      ○ 异常捕获：errorCaptured -> onErrorCaptured
    6. diff算法不同
    7. 更好的支持ts
    8. v-if和v-for优先级不同：在vue2中v-for的优先级高于v-if，可以放在一起使用，但是会带来性能上的浪费；在vue3中v-if的优先级高于v-for，一起使用会报错。可以通过在外部添加一个标签，将v-for移到外层
      `},{title:"Vue --- 83. defineProperty和proxy的区别",content:`
    ● Vue2 中在实例初始化时遍历 data 中的所有属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。这样当追踪数据发生变化时，setter 会被自动调用。
    但是存在以下问题：
    1. 添加或删除对象的属性时，Vue 检测不到。因为添加或删除的对象没有在初始化进行响应式处理，只能通过$set 来调用Object.defineProperty()处理。
    2. 无法监控到数组下标和长度的变化。
    ● Vue3 使用 Proxy 来监控数据的变化。Proxy 是 ES6 中提供的功能，其作用为：用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。相对于Object.defineProperty()，其有以下特点：
    1. Proxy 直接代理整个对象而非对象属性，这样只需做一层代理就可以监听同级结构下的所有属性变化，包括新增属性和删除属性。
    2. Proxy 可以监听数组的变化。
    `},{title:"Vue --- 84. vue3为什么要用proxy",content:`
    Proxy 是创建对象的虚拟表示，提供了 set 、get 和 deleteProperty 等处理器，这些处理器可在访问或修改原始对象上的属性时进行拦截，有以下特点∶
    ● 不需用使用 Vue.$set 或 Vue.$delete 触发响应式。
    ● 全方位的数组变化检测，消除了Vue2 无效的边界情况。
    ● 支持 Map，Set，WeakMap 和 WeakSet。
    `},{title:"Vue --- 85. vue3 Composition API(组合式api) 是什么",content:`
    组合式 API (组合式API) 是一系列 API 的集合，使我们可以使用函数而不是声明选项的方式书写 Vue 组件。它是一个概括性的术语，涵盖了以下方面的 API：
    ● 响应式 API：例如 ref() 和 reactive()，使我们可以直接创建响应式状态、计算属性和侦听器。
    ● 生命周期钩子：例如 onMounted() 和 onUnmounted()，使我们可以在组件各个生命周期阶段添加逻辑。
    ● 依赖注入：例如 provide() 和 inject()，使我们可以在使用响应式 API 时，利用 Vue 的依赖注入系统。

    主要目的是：
    为了增强代码的可读性和可维护性；
    允许相同逻辑代码在不同组件中进行完整复用
    `},{title:"Vue --- 86. 组合式api和选项式api区别 / 优缺点",content:`
    选项式：
    一、优点：
    1，简单易用：选项式API提供了一些预定义的选项，使得开发者可以快速构建API。
    2，可靠性高：选项式API的选项是由API提供者预先定义的，经过测试和验证，可靠性较高。
    3，集成容易：选项式API提供了一些预定义的选项，使得开发者无需具备过多的集成能力。
    二、缺点：
    1，灵活性差：选项式API的选项是由API提供者预先定义的，开发者无法自由地组合API。
    2，可复用性差：选项式API的选项仅适用于特定情况，不能被其他场景重复使用。
    3，可扩展性差：选项式API的选项是由API提供者预先定义的，如果需要增加新的选项，需要API提供者进行更新。

    组合式:
    一、优点：
    1，灵活性高：组合式API可以根据具体需求组合不同的API，实现更加灵活的功能。
    2，可复用性好：组合式API中的每个API可以独立使用或者组合使用，使得API的复用性更高。
    3，可扩展性强：组合式API可以通过不断增加新的API来扩展功能。
    二、缺点：
    1，复杂度高：组合式API中的每个API都需要单独维护，当API数量增多时，会增加系统的复杂度。
    2，集成难度大：组合式API需要对API进行组合，需要开发者具备一定的集成能力。
    3，可靠性低：组合式API的可靠性取决于每个API的稳定性，如果其中一个API出现问题，整个系统都会受到影响。
    `},{title:"Vue --- 87. Vue3中的Teleport是什么？它的作用是什么？",content:`
    Vue3中的Teleport 是控制渲染位置的新指令。它的作用是在DOM中移动一个组件的内容而不改变组件的父级。
    `},{title:"Vue --- 88. Vue3中的Suspense是什么？它的作用是什么？",content:`
    Vue3中的Suspense是Vue3中新增的一个组件，它的作用是实现延迟加载和错误处理。在组件中加入Suspense，可以让异步组件可以渲染出加载状态，并且如果异步组件加载时出现错误，也能够处理这些错误。
    `},{title:"Vue --- 89. Vue3中的Fragment是什么？它的作用是什么？",content:`
    Vue3中的Fragment是用来承载多个子元素的虚拟组件。它的作用是可以解决在Vue2中，使用v-for迭代元素时需要添加一个包装元素的问题。
    `},{title:"Vue --- 90. Vue3中setup是什么？",content:`
    setup是所有CompositionAPI（组合API）的基础，组件中所用到的数据、方法等都需要在setup中进行配置；
    <script setup>
      `},{title:"Vue --- 91. Vue3兼容Vue2写法的情况",content:`
    ①、vue3支持向下兼容，vue2中的data、methods配置项在vue3中都能够使用，但是尽量不要将vue3中的配置项和vue2.x配置项混用；
    ②、vue2.x配置（data、methods、computed等）中可以访问setup中的属性、方法，但是在setup中不能访问vue2.x配置（data、methods、computed等）；
    ③、如果vue2.x配置与vue3配置存在重名，则以setup优先；
    ④、setup不能是一个async函数，因为返回值不再是return的对象，而是promise，模板看不到return对象中的属性；
    `},{title:"Vue --- 92. ref和reactive的区别",content:`
    1. 数据类型不同：ref用于包装JavaScript基本类型的数据（如字符串、数字、布尔值等），而reactive可以用于包装JavaScript对象和数组等复杂类型的数据。
    2. 使用方式不同：ref需要通过在模板中使用ref指令以及在JavaScript代码中使用ref函数进行创建和使用，而reactive则需要通过调用Vue.js提供的reactive函数进行包装和创建。
    3. 访问方式不同：对于通过ref函数创建的响应式数据，我们可以通过.value属性来访问其实际值；而对于通过reactive函数创建的响应式对象，我们可以直接访问其属性或调用其方法。
    4. 设计理念不同：ref主要是为了解决单一元素/数据的响应式问题，而reactive则是为了解决JavaScript对象和数组等复杂数据结构的响应式问题。

    总的来说，ref和reactive都是用于实现Vue.js组件的数据响应式更新，但是它们的使用方法、适用范围和设计理念等方面略有不同，需要根据具体的应用场景选择合适的API进行使用。
    `},{title:"Vue --- 93. ref和reactive如何选择",content:`
    1. ref()主要用于创建一个响应式数据，它会将一个普通的JavaScript对象转换为一个响应式的对象，从而使数据的变化可以被Vue实例所追踪，当数据发生变化时，Vue会自动更新相关视图。ref()创建的响应式数据可以通过.value属性来访问和修改。
    2. reactive()则主要用于创建一个响应式对象，可以用作包含多个值的状态对象，通常用于管理复杂的状态。它可以将一个普通的JavaScript对象转换为一个响应式对象，并且支持嵌套属性，即使嵌套属性发生变化也会被Vue实例所追踪。当响应式对象中有任何一个属性发生变化时，Vue也会自动更新相关的视图。
    3. 明确知道需要包裹的是一个对象，那么推荐使用 reactive，其他情况使用 ref 即可。
    `},{title:"Vue --- 94. toRef和toRefs的作用",content:`
    ● toRef 函数可以将一个响应式对象的属性转换为一个独立的 ref 对象。返回的是一个指向源对象属性的 ref 引用，任何对该引用的修改都会同步到源对象属性上。使用 toRef 时需要传入源对象和属性名作为参数。
    ● toRefs 函数可以将一个响应式对象转换为一个普通的对象，该对象的每个属性都是独立的 ref 对象。返回的对象可以进行解构，每个属性都可以像普通的 ref 对象一样访问和修改，而且会保持响应式的关联。toRefs 的使用场景主要是在将响应式对象作为属性传递给子组件时，确保子组件可以正确地访问和更新这些属性。
    `},{title:"Vue --- 95. toRef和toRefs的相同点和不同点",content:`
    相同点：
    ● toRef 和 toRefs 都用于将响应式对象的属性转换为 ref 对象。
    ● 转换后的属性仍然保持响应式，对属性的修改会反映到源对象上。
    ● 不管是使用 toRef 还是 toRefs 将响应式对象转成普通对象，在 script 中修改和访问其值都需要通过 .value 进行。
    不同点：
    ● toRef 修改的是对象的某个属性，生成一个单独的 ref 对象。
    ● toRefs 修改的是整个对象，生成多个独立的 ref 对象集合。
    ● toRefs 适用于在组件传递属性或解构时使用，更加方便灵活，而 toRef 更适合提取单个属性进行操作。
    `},{title:"Vue --- 96. Vue事件机制原理",content:`
    Vue.js 的事件机制基于发布-订阅模式（Publish-Subscribe Pattern），也称为观察者模式（Observer Pattern）。它主要由以下几个核心组件构成：
    ● 事件触发器（Event Emitter）：Vue 实例中的 $emit 方法用于触发事件。当某个事件被触发时，它会发送消息给注册了该事件的监听器。
    ● 事件监听器（Event Listener）：Vue 实例中的 $on 方法用于监听特定的事件。当事件被触发时，注册了该事件的监听器会接收到通知，并执行相应的回调函数。
    ● 事件中心（Event Bus）：Vue 实例中的 $emit 和 $on 方法的底层实现依赖于一个事件中心，用于管理事件的注册和触发。在 Vue 中，可以通过 new Vue() 创建一个全局事件中心，也可以创建多个局部事件中心。
    ● 事件对象（Event Object）：当事件被触发时，可以传递一个事件对象作为参数，其中包含了关于事件的相关信息。事件对象可以携带额外的数据，以便监听器在接收到事件时进行处理。
    `},{title:"Vue --- 97. Vue2和Vue3的diff算法有何不同",content:`
    vue2中的diff算法
    遍历每一个虚拟节点，进行虚拟节点对比，并返回一个patch对象，用来存储两个节点不同的地方。用patch记录的消息去更新dom
    缺点：比较每一个节点，而对于一些不参与更新的元素，进行比较是有点消耗性能的。特点：特别要提一下Vue的patch是即时的，并不是打包所有修改最后一起操作DOM，也就是在vue中边记录变更新。（React则是将更新放入队列后集中处理）。

    vue3中的diff算法
    在初始化的时候会给每一个虚拟节点添加一个patchFlags，是一种优化的标识。只会比较patchFlags发生变化的节点，进行识图更新。而对于patchFlags没有变化的元素作静态标记，在渲染的时候直接复用。
    `},{title:"Vue --- 98. vue页面(组件)销毁时，哪些东西会自动销毁，哪些需要手动销毁",content:`
    ● 自动销毁：
    1. 数据和方法：组件的所有响应式数据和方法都会被销毁，这包括"data"函数中返回的所有属性和在组件中定义的方法
    2. 侦听器：组件内部使用"watch"创建的侦听器会被自动移除
    3. 子组件：当前组件的所有子组件也会经历同样的销毁过程
    4. 事件监听器：如果在组件内部使用"this.$on"等方法绑定的事件监听器，它们通常在组件销毁时会被自动移除，然而，如果在外部（如在"mounted"生命周期钩子中）手动添加到DOM元素上的事件监听器，需要在"beforeDestroy"或"unmounted"生命周期钩子中手动移除它们
    5. DOM元素：组件的DOM元素及其子元素会被从文档对象模型中移除
    6. 指令：自定义指令将调用其"unbind"钩子函数
    7. Ref引用：与该组件关联的所有Ref引用将失效

    ● 手动销毁
    1. 全局事件监听器和定时器：window、document、定时器
    2. 全局状态或单例：vuex、pinia等
    3. 外部引用：如果该组件被外部变量引用，比如被添加到一个全局数组或对象中，这种引用关系不会自动解除
    `},{title:"Vue --- 99. 什么是虚拟 DOM",content:`
    虚拟dom本质就是一个js对象,用来描述真正dom是什么样的,这个对象就称为虚拟dom
    `},{title:"Vue --- 100. 虚拟 DOM 的好处",content:`
    虚拟 DOM 就是为了解决浏览器性能问题而被设计出来的。如前，若一次操作中有 10 次更新 DOM 的动作，虚拟 DOM 不会立即操作 DOM，而是将这 10 次更新的 diff 内容保存到本地一个 JS 对象中，最终将这个 JS 对象一次性 attch 到 DOM 树上，再进行后续操作，避免大量无谓的计算量。所以，用 JS 对象模拟 DOM 节点的好处是，页面的更新可以先全部反映在 JS 对象(虚拟 DOM )上，操作内存中的 JS 对象的速度显然要更快，等更新完成后，再将最终的 JS 对象映射成真实的 DOM，交由浏览器去绘制。
    `},{title:"Vue --- 101. Vue 虚拟 DOM 如何实现高效更新?",content:`
    初始化渲染的时候,会根据数据和模板生成一份虚拟dom树,当数据发生变化,会根据新的数据和模板生成新的虚拟dom树,将两份虚拟dom树进行对比,对比的算法采用的是diff算法。
    diff算法的话就是同级比较.深度优先,比较核心的就是采用了双指针算法,四个指针,遍历旧的虚拟dom有两个指针,指向开始的位置和结束的位置,同理新的虚拟dom也有这两个指针,循环的时候开始的指针对比完后,指针向后推,后面的指针对比后向前推,从而达到效率提升。然后元素不同的话就删除重建，元素相同,属性不同的话元素复用,属性更新。
    `},{title:"Vue --- 102. key 的作用与原理",content:`
    key 作用 ：用来作为节点的唯一标识
    当为一个列表绑定一个key属性时，该属性会存在于虚拟的DOM中，key是虚拟DOM对象的标识，当数据发生变化时，会生成新的虚拟DOM。随后Vue会使用Diff算法进行新虚拟DOM与 旧虚拟DOM的差异比较。进行比较的过程可以分成两种情况：
     当旧虚拟DOM中找到了与新虚拟DOM相同的key时，若虚拟DOM中内容没变, 直接使用之前的真实DOM；若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM；
     当旧虚拟DOM中未找到与新虚拟DOM相同的key时，创建新的真实DOM，随后渲染到到页面。
    `},{title:"Vue --- 103. index做key值为什么不行",content:`
    因为如果对数据进行：逆序添加、逆序删除等破坏顺序操作:
    会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，
    使用index作为key是没有问题的。
    最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号等唯一值，开发过程中一般用id。
    `},{title:"Vue --- 104. vue的v-modal的实现原理",content:`
    vue中v-model可以实现数据的双向绑定，但是为什么这个指令就可以实现数据的双向绑定呢？其实v-model是vue的一个语法糖。即利用v-model绑定数据后，既绑定了数据，又添加了一个input事件监听。
    实现原理：
    ● v-bind绑定响应数据
    ● 触发input事件并传递数据
    `},{title:"Vue --- 105. Vue中自定义指令的钩子函数有哪些",content:`
    1. bind: 此钩子在指令第一次被绑定到元素上时调用。在这里，你可以对元素进行一次性的初始化设置。el 是指令所绑定的元素，binding 是一个对象，其中包含了关于这个指令的所有参数，vnode 是虚拟节点，oldVnode 是之前的虚拟节点。
    2. inserted: 此钩子在指令被插入到宿主元素时调用（元素在DOM中）。这和 bind 钩子的区别在于，inserted 钩子是在元素被插入父节点时立即调用的，而 bind 钩子是在元素第一次出现在父节点之前调用的。
    3. update: 此钩子在数据更新时调用。你可以在这里根据新的数据更新元素。
    4. unbind: 此钩子在指令与元素解绑时调用。你可以在这里执行一些清理工作，如取消事件监听等。
    `},{title:"Vue --- 106. vue的渲染原理，为什么采用异步渲染",content:`
    原理:
    Vue 的渲染原理是基于虚拟 DOM 的机制。Vue 通过创建一个组件树形式的虚拟 DOM 来表示实际 DOM 结构,当数据发生变化时,Vue 会对比前后两个虚拟 DOM 的差异,只更新需要更新的部分,从而达到高效的更新。
    为啥采用:
    vue是组件级的更新，如果不采用异步更新，那么每次更新数据都会对当前组件进行重新渲染，所以为了性能，vue会在本轮数据更新后，在异步更新视图。这也是nextTick产生的原因。异步渲染的核心思想就是nextTick
    作用：
    nextTick接收一个回调函数作为参数，并将这个回调函数延迟到DOM更新后才执行，减少操作DOM的次数；
    使用场景：想要操作基于最新数据生成的DOM时，就将这个操作放在nextTick的回调中；
    实现原理：将传入的回调函数包装成异步任务，异步任务又分为微任务和宏任务（setTimeout、promise、等），定义了一个异步方法，多次调用nextTick会将方法存入队列，通过异步方法清空当前队列。
    整个vue是一个大的异步渲染
    `},{title:"Vue --- 107. vue的diff和react的diff有什么区别？",content:`
    一、性能优化策略不同
      Vue和React在处理diff算法时采用了不同的性能优化策略，以提高虚拟DOM更新的效率。
      Vue的优化策略：
      静态节点的标记：Vue在编译模板时，会标记出静态节点，这样在更新时可以跳过不需要变化的部分，从而减少计算量。
      依赖追踪：Vue使用基于依赖追踪的响应式系统，只有数据变化时才会重新渲染相关组件。
      React的优化策略：
      树的分层更新：React通过将虚拟DOM树分层次进行比较，以减少更新范围。
      shouldComponentUpdate：React允许开发者通过shouldComponentUpdate方法手动控制组件是否需要更新，从而避免不必要的diff计算。
    二、实现方式不同
      Vue和React在具体实现diff算法时也有不同之处。
      Vue的实现方式：
      双端比较：Vue的diff算法采用双端比较策略，从新旧虚拟DOM的两端同时开始比较，遇到不相同的节点时再进行具体处理。
      快速路径：Vue通过一些快速路径优化来处理常见的列表操作，如添加、删除、移动等，进一步提高diff算法的效率。
      React的实现方式：
      逐层比较：React的diff算法采用逐层比较策略，从根节点开始逐层进行比较，遇到不同的节点时再进行具体处理。
      唯一key标识：React要求列表中的每个元素都有唯一的key值，以便更高效地找到变化的节点并进行更新。
    三、更新机制不同
      Vue和React在更新机制上也有一些差异，这些差异源于它们对组件状态和生命周期的管理方式不同。
      Vue的更新机制：
      响应式系统：Vue通过响应式系统自动追踪数据的变化，并在数据变化时自动更新相关的组件，无需手动触发更新。
      模板编译：Vue在编译模板时会生成渲染函数，并在数据变化时自动调用这些渲染函数进行更新。
      React的更新机制：
      手动触发更新：React通过调用setState或useState来显式地触发组件的重新渲染。
      生命周期方法：React提供了一系列生命周期方法，如componentDidMount、componentDidUpdate等，开发者可以在这些方法中手动控制组件的更新过程。
    `}],Me=[{title:"react---1.react生命周期",content:`
    1.constructor(props), 挂载时执行的,此方法只会执行一次,当组件被实例化后第一个被执行的方法，不推荐在此方法中完成ajax请求
    2.getDerivedStateFromProps,副作用生命周期方法,此方法就是用来对于当前state状态进行修改操作,它会执行N次,父组件通过props传过来的数据转为了当前state数据,如果使用此方法,一定要满足两个条件:1.必须要有声明过state2.此方法必须要有返回值,null|{}
    3.render， 组件界面开始渲染，执行N次,不建议使用ajax
    4.componentDidMount，虚拟dom挂载到真实的dom中,完成后执行的方法,推荐在此方法中完成ajax
    5.shouldComponentUpdate，更新时执行的，此方法必须要有返回值,返回值的类型必须为boolean true/false，表示继续还是直接退出
    6.getSnapshotBeforeUpdate，数据更新之前，此方法要有一个返回值,此返回值会在componentUpdate方法的第3个参数中得到
    7.componentDidUpdate，数据更新完成执行的方法
    8.componentWillUnmount，在组件卸载及销毁之前直接调用，在此方法中执行必要的清理操作
    `},{title:"react---2.react组件传值",content:`
    1.父传子
    父组件将自己的状态传递给子组件，子组件当做属性来接收，当父组件更改自己状态的时候，子组件接收到的属性就会发生改变props
    父组件利用ref对子组件做标记，通过调用子组件的方法以更改子组件的状态,也可以调用子组件的方法(说明: ref获取当前组件对象，只针对的是使用类创建的组件才可以用此方案，类有实例，而函数没有实例)
    2.子组件修改props数据
    子组件通过父组件props传过来的数据(方法或函数),进行调用，通过调用实现子向父传值
    3.状态提升
    此方案是用来解决兄弟组件间的传值问题，就是把公用的状态信息提升到父组件状态中
    4.跨组件通信
    在react中没有类似vue中的事件总线来解决这个问题，当需要组件间跨级访问信息时，可以使用context来实现跨级父子组件间的通信。
    `},{title:"react---3.redux",content:`
    Redux 是 JavaScript 应用的状态容器，提供可预测的状态管理。可以开发出行为稳定可预测的应用，运行于不同的环境（客户端、服务器、原生应用），并且易于测试。Redux 除了和 React 一起用外，还支持其它界面库。
    redux不依赖于任何的前端框架，可以使用在任何的前端框架中，用来管理全局状态数据
    解决问题：多层级组件间的通信问题
    核心概念：
    - 单一数据源(state)，数据中单向数据流
    - 数据不可以直接修改，只能通过纯函数reducer来完成对于state状态修改，修改：每次返回一个新的state对象
    缺点：
    - 因为它是单一数据源，如果数据过多，它的操作性能就不会太高，所以在redux中就不要存储过多的数据
    `},{title:"react---4.redux使用步骤",content:`
    1.在src目录下创建一个store目录，里面创建一个index.js文件
    2.在index.js文件中按需引入redux中的方法createStore
    3.初始化state数据和定义纯函数reducer，此reducer函数一定返回state
    4.调用createStore方法，参数1，传入reducer
    5.导出createStore执行方法的返回值
  `},{title:"react---5.纯函数",content:`
    1. 确定的输入，会产生确定的输出
    2. 不会产生副作用
      -  在这里副作用的意思就是在执行一个函数的时候，除了返回函数值以外，还对调用函数产生了附加的影响，比如修改了全局变量，修改了参数或者改变外部的存储。 
      -  纯函数在执行的过程中不能产生这样的副作用，有副作用的话往往容易产生不易发觉的BUG 
    redux定义了一个reducer函数来完成state数据的修改，reducer会接收先前的 state 和 action，并返回新的 state
    `},{title:"react---6.raect合成事件",content:`
    React合成事件是React模拟原生DOM事件所有能力的一个事件对象。根据W3C规范来定义合成事件，兼容所有浏览器，拥有与浏览器原生事件相同的接口，包括stopPropagetion()和 preventDefault()。
    在React中，所有事件都是合成的，不是原生DOM事件，可以通过 e.nativeEvent属性获取原生DOM事件。合成事件不会映射到原生事件，浏览器兼容，实现更好的跨平台
    
    为什么出现这个技术?
    - 性能优化:使用事件代理统一接收原生事件的触发,从而可以使得真实 DOM上不用绑定事件。React合成事件触发可以知道用户触发了什么事件，是通过什么原生事件调用的真实事件。这样可以通过对原生事件的优先级定义进而确定真实事件的优先级，再进而可以确定真实事件内触发的更新是什么优先级，最终可以决定对应的更新应该在什么时机更新。
    - 分层设计:解决跨平台问题，抹平浏览器差异。
    `},{title:"react---7.合成事件和原生事件的区别",content:`
    事件机制：react合成事件不是把onClick事件直接绑定到DOM上，而是采用事件冒泡的形式冒泡到document上，使用一个统一的事件去监听。这个事件监听器上维持了一个映射来保存所有组件内部的事件监听和处理函数。当组件挂载或卸载时，只是在这个统一的事件监听器上插入或删除一些对象。当事件发生时，首先被这个统一的事件监听器处理，然后在映射里找到真正的事件处理函数并调用。这样做简化了事件处理和回收机制，效率也有很大提升。
    - React 所有事件都挂载在 document 对象上
    - 当真实 DOM 元素触发事件，会冒泡到 document 对象后，再处理 React 事件
    - 所以会先执行原生事件，然后处理 React 事件
    - 最后真正执行 document 上挂载的事件
    `},{title:"react---8.react异步问题",content:`
    react17之前的版本会有这样异步的事件的问题，17之后已经修复,如果在异步的情况下，最好对于evt事件中的数据提前给保存起来，合成事件为了提升性能，它对于事件对象进行了统一的优化处理,全局是一个对象，所以在有的异步的情况下直接使用evt事件数据会出现异常情况，所以要在同步的情况下提前赋值，在异步使用
    `},{title:"react---9.高阶组件",content:`
    函数的参数可以是函数，返回值也可以是一个函数(传递一个函数，返回一个增强后的函数),简称HOC，就是一个函数，在参数中传给它一个组件，返回一个新的组件，高阶组件相当于手机壳，通过包装组件，增强组件功能。

    实现步骤：
    1. 定义一个函数，此函数必须在参数中传入一个组件，参数指定为组件的，参数的首字母大写
    2. 在此函数内部创建一个类组件或函数组件，并且进行返回

    高阶组件常见业务作用：【高阶组件和vue中的自定义组件可以划相等】进行权限控制;路由权限;访问统计;统一布局
`},{title:"react---10.redux-thunk",content:`
    redux-thunk是由redux官方开发出来的redux中间件，主要作用：解决redux中使用异步方案。redux-thunk中间件允许在connect参数2中派发任务时返回的是一个函数，此函数形参中，redux-thunk会自动注入一个dispatch派发函数，从而让你调用dispatch函数来派发任务给redux，从而实现异步处理。
    缺点：使用的是将异步转换为同步的方案，使用回调函数，出错不好追踪

    - 优点：使用简单，体积小
    - 解决了action操作，原来只能是一个同步的对象，现在可以为回调函数，可以异步
    - 缺点：● 样板代码过多: 与redux本身⼀样,通常⼀个请求需要⼤量的代码,⽽且很多都是重复性质的。
    ● 耦合严重: 异步操作与redux的action偶合在⼀起,不⽅便管理。
    ● 功能孱弱: 有⼀些实际开发中常⽤的功能需要⾃⼰进⾏封装
`},{title:"react---11.redux-saga",content:`
    redux-sage是redux的一个中间件，是基于ES6的Generator功能实现，用于解决异步问题,使用了generator，所以在实现异步过程中，完全的就是异步当同步使用，方便异步获取,处理有清晰的实现步骤，方便维护和升级
    saga.js配置
    - take 监听1次
    - takeEvery 一直监听
    - put 派发动作给redux
    - call 调用promise方法
    - cps 调用node样式回调函数处理异步方案的方法
    - all 批量调用监听saga
    优点：
    ● 异步解耦：把异步操作单独分离出来放在saga文件中。当我们提交普通action的时候，如果匹配到了saga文件中的监听器就会被拦截下来，然后调用saga里配置的方法进行异步操作。如果没匹配上就走提交普通action的逻辑。总体来说逻辑较为清晰，但是使用成本增加。
    ● 异常处理: 受益于 generator function 的 saga 实现，代码异常/请求失败 都可以直接通过 try/catch 语法直接捕获处理
    ● 功能强⼤: redux-saga提供了⼤量的Saga 辅助函数和Effect 创建器供开发者使⽤,开发者⽆须封装或者简单封装即可使⽤。
    ● 灵活: redux-saga可以将多个Saga可以串⾏/并⾏组合起来,形成⼀个⾮常实⽤的异步flow
    缺点：
    ● 额外的学习成本: redux-saga不仅在使⽤难以理解的 generator function,⽽且有数⼗个API,学习成本远超redux-thunk
    ● 体积庞⼤: 体积略⼤,代码近2000⾏，min版25KB左右
    ● 功能过剩: 实际上并发控制等功能很难⽤到,但是我们依然需要引⼊这些代码
  `},{title:"react---11.redux-toolkit  ",content:`
    redux-toolkit是 Redux 官方推荐的工具集，他简化 Redux 应用的编写和维护。它提供了一些工具和函数
    主要特性
    1. 配置 Store 简化：提供 configureStore() 方法来自动设置 store。这个方法默认集成了常见的中间件，简化了 store 的配置。
    2. 创建 Reducer 和 Action 简化：通过 createSlice() 方法，可以在一个函数中同时定义 reducer 和相关的 actions。这减少了样板代码，并使得逻辑更加集中。
    3. 不可变性管理：内置了 Immer 库，允许在 reducer 中以更直观的方式修改 state，而无需手动保证 state 的不可变性。
    4. 异步逻辑处理：提供 createAsyncThunk 函数用于处理异步逻辑，使得在 Redux 应用中处理异步操作变得更简单。
    5. 扩展性和可重用性：鼓励将 Redux 逻辑切割成更小的片段，通过提供的 API，这些片段可以轻松重用和测试。
    `},{title:"react---12.immutable.js  ",content:`
    immutablejs库，它给我们创建了一新的js对象，此对象数据是不可变结构化数据。数据结构共享
    Immutable.js出自Facebook，是最流行的不可变数据结构的实现之一。它实现了完全的持久化数据结构，使用结构共享。所有的更新操作都会返回新的值，但是在内部结构是共享的，来减少内存占用。形成了历史可追溯，获取或修改时才会执行
    优点:1.降低对象深复制带来的复杂度;2.节省内存;3.历史追溯性
    
    缺点:1.需要重新学习api，有学习成本2.容易与原生对象混淆：由于api与原生不同，混用的话容易出错;3.第3方组件库不支持，使用时，还需要转换
  `},{title:"react---13.react函数组件",content:`
    函数组件没有state状态，在React16.8后新增了hook，增强了函数组件的功能，让函数组件有类组件的能力，hook是一套工具函数的集合，hook不等于函数组件，所有的hook函数都是以use开头
    好处
    1. **代码可读性更强**，<u>原本同一块功能的代码逻辑被拆分在了不同的生命周期函数中</u>，容易使开发者修改代码时不易去查找，通过React Hook可以将功能代码聚合，方便维护。
    2. **组件树层级变浅**，在原木的代码中，我们经常使用 HOC/render/Props等方式来复用组件的状态，增强功能等，无疑增加了组件树层数及渲染，而在 React Hooks 中，这些功能都可以通过强大的自定义的Hooks来实现·
  `},{title:"react---14.react hooks限制",content:`
    hook内部的实现就是一个链表数据结构，它结构中有一个next来指向下一个对象，所以使用hook时就一定不要把hook函数写到if/for等块作用语句中
    1. hook只能用在函数组件中，class组件中不行
    2. 普通函数不能使用hook，默认只能是函数组件才可以
    3. 函数组件内部的函数不能使用hook
    4. 函数组件的hook只能放在第一层，在if/for中不能使用，只能写在函数组件或自定义组件的顶层（是因为）
    5. 要求函数组件首字母必须大写

    <H3>hooks为什么只能在顶层使用?</H3>
    因为react存储的hook单链表，只能通过顺序去记录，如果在if和for里面使用，就分叉了，顺序乱套了。
  `},{title:"react---15.react hooks",content:`
    hook内部的实现就是一个链表数据结构，它结构中有一个next来指向下一个对象，所以使用hook时就一定不要把hook函数写到if/for等块作用语句中
    1.useState,是一个hook工具函数，**用来在函数组件中模拟出类组件中的state状态**
    2.useEffect(副作用函数),此 hook可以**模拟函数组件的生命周期**，函数组件对于在一些生命周期中操作还是无能为力，所以 React提供了useEffect 来帮助开发者处理函数组件，来帮助模拟完成一部分	的开发中非常常用的生命周期方法。常被别的称为:副作用处理函数。此函数的操作是异步的。
    3.useReducer,这个Hooks在使用上几乎跟Redux一模一样，唯一缺点的就是无法使用redux.提供的中间件。 useReducer 是单个组件状态管理， 组件通讯还需要 props。
    4.useContext，Context对象解决跨层级组件通信方案
    5.useMemo(计算属性)，记忆组件，**如果依赖项没有发生改变**，则下一次结果走缓存
    6.useCallback，用于缓存操作方法，并且只监听依赖项的数据的变化才触发，其余状态不会重新创建函数方法，提高效率
    7.useRef，useRef 跟 createRef 类似，都可以用来生成对 DOM 对象的引用
    8.useLayoutEffect，同步操作，useEffect能做到的他能做到，但是可能会卡死，阻塞
  `},{title:"react --- 16.useEffect和useLayoutEffect的区别",content:`
    主要区别在于执行时机：useEffect 在所有的 DOM 更改之后异步执行，不会阻塞页面渲染，而 useLayoutEffect 则在 DOM 更新之后立即同步执行，适用于对 DOM 布局和样式有影响的操作。在大多数情况下，useEffect 已足够使用，但在需要同步更改 DOM 或者避免闪烁时，应该使用 useLayoutEffect。
    `},{title:"react --- 17.useEffect 模拟生命周期",content:`
    useEffect第二个参数依赖项
    空列表[ ]           componentDidMount         挂载
    无依赖或者[a,b,c]    componentDidUpdate        更新
    返回一个函数       componentWillUnmount        将要卸载
    函数组件相对应类组件的缺点：没有生命周期，使用useEffect来模拟该组件的副作用函数
    `},{title:"react --- 18.useMemo 和useCallback 的区别",content:`
    usememo返回函数的返回值，usecallback返回函数本身
    1、useMemo
    ● useMemo 用于对复杂的计算结果进行记忆化。当你有一段计算逻辑，但只希望在特定的依赖项改变时才重新计算时，可以使用 useMemo。
    ● 它接受一个“创建”函数和一个依赖项数组。只有当依赖项发生变化时，这个“创建”函数才会被执行。
    ● useMemo 返回的是“创建”函数的返回值。
    2、useCallback
    ● useCallback 用于对函数本身进行记忆化。当你将函数作为 props 传递给子组件，或者在依赖于函数的 useEffect 中使用函数时，使用 useCallback 可以防止组件不必要的重新渲染。
    ● 它接受一个内联函数和一个依赖项数组。只有当依赖项发生变化时，这个函数才会被重新创建。
    ● useCallback 返回的是记忆化的函数本身。
    `},{title:"react --- 19.useState和useReducer的区别",content:`
    ● useState和useReducer都是用于函数组件内部定义状态的，区别在于，useState用于简单的状态管理和局部状态更新，而useReducer用于复杂的状态逻辑和全局状态管理。
    ● useState实际是一个自带了reducer功能的useReducer语法糖。
    ● 当你使用useState时，如果state没有发生变化，那么组件就不会更新。而使用了useReducer时，在state没有发生变化时，组件依然会更新。
    `},{title:"react --- 20.setState到底是同步还是异步",content:`
    ● React 18之前，React采用了一种同步和异步处理的机制，进入React调度流程的操作是异步处理，包括合成事件，而未进入调度流程的原生事件（如setTimeout、setInterval）是同步处理。这种同步处理方式可能会导致性能浪费，因为多次调用setState会重复触发多次渲染，即使只需要渲染最后一次的结果。
    ● 从React 18开始，通过使用createRoot创建应用，所有事件都会自动进行批量处理，而不再区分同步和异步。这意味着无论是合成事件还是原生事件，都会进入React的调度流程，以实现性能的优化。但如果仍然使用render方法进行渲染，事件处理流程仍然与React 18之前的机制相同，可能会导致不必要的性能问题。react18引入了Automatic Batching(自动批处理机制)。
    `},{title:"react --- 21.hooks解决了什么问题",content:`
    ● 更好的逻辑组织和代码分离：Hooks 允许开发者按照逻辑关系而非生命周期方法来组织代码，这使得相关代码更加集中和一致，提高了代码的可维护性。
    ● Hoc高阶组件，render props使得使组件结构复杂化。复杂组件变得难以理解。
    ● 在函数组件中使用状态和其他 React 特性：扩展了函数组件的功能。
    `},{title:"react --- 22.react组件通信的方式",content:`
    ● ⽗组件向⼦组件通讯: ⽗组件可以向⼦组件通过传 props 的⽅式，向⼦组件进⾏通讯 
    ● ⼦组件向⽗组件通讯: props+回调的⽅式，⽗组件向⼦组件传递props进⾏通讯，此props为作⽤域为⽗组件⾃身的函 数，⼦组件调⽤该函数，将⼦组件想要传递的信息，作为参数，传递到⽗组件的作⽤域中。 
    ● 兄弟组件通信: 找到这两个兄弟节点共同的⽗节点,进行状态提升，结合上⾯两种⽅式由⽗节点转发信息进⾏通信 
    ● 跨层级通信: 
      ○ props层层传递回调函数。
      ○ Context 设计⽬的是为了共享那些对于⼀个组件树⽽⾔是“全局”的数据，例如当前认证的⽤户、主题或⾸选语⾔，对于跨越多层的全局数据通过 Context 通信再适合不过。
    ● 非嵌套关系的组件通信：
      ○  (发布订阅模式): 发布者发布事件，订阅者监听事件并做出反应,我们可以通过引⼊event模块进⾏通信 
      ○ (全局状态管理⼯具): 借助Redux或者Mobx等全局状态管理⼯具进⾏通信,这种⼯具会维护⼀个全局状态中⼼Store,并根据不同的事件产⽣新的状态
      `},{title:"react --- 23.哪些方法会触发 React 重新渲染以及如何避免不必要的重新渲染？",content:`
    ● 触发 React 重新渲染：
    ○ setState() 、useState被调用
    ○ props发生变化
    ○ 组件依赖的上下文 context 发生变化
    ○ 自定义hook发生变化
    ○ forceUpdate强制组件重新渲染
    ● 如何避免不必要的重新渲染：
    ○ React.memo：包裹函数式组件，react渲染之前会先做属性值的对比，如果没有变化，则不重新渲染。
    ○ useMemo：缓存计算结果，只有在依赖项变化时才重现计算结果，而不是每次都渲染，避免因为计算开销大会导致渲染时间长。
    ○ useCallback：缓存函数，只有在依赖项变化时才重现创建函数，而不是每次都创建。
    ○ React.PureComponent/shouldComponentUpdate：控制是否重新渲染类组件。
    ○ key：增加key，提升就进复用率。
    `},{title:"react --- 24.受控组件和非受控组件的区别",content:`
    ● 受控组件：组件的展示完全由传入的属性决定。比如说，如果一个输入框中的值完全由传入的 value 属性决定，而不是由用户输入决定，那么就是受控组件，写法是：<input value={value} onChange={handleChange} />。
    ● 非受控组件：表单组件可以有自己的内部状态，而且它的展示值是不受控的。比如 input 在非受控状态下的写法是：< input onChange={handleChange}/>。
      ○ 使用场景：1.必须手动操作DOM的  2.文件上传 3.富文本编辑，需要传入DOM元素
    `},{title:"react --- 25.虚拟dom",content:`
    虚拟dom是用js模拟一颗dom树,放在浏览器内存中，相当于在js和真实dom中加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能。
    优点：
      （1）虚拟DOM具有批处理和高效的Diff算法,最终表现在DOM上的修改只是变更的部分，可以保证非常高效的渲染,优化性能；
      （2）虚拟DOM不会立马进行排版与重绘操作，对虚拟DOM进行频繁修改，最后一次性比较并修改真实DOM中需要改的部分；
      （3）虚拟 DOM 有效降低大面积真实 DOM 的重绘与排版，因为最终与真实 DOM 比较差异，可以只渲染局部；
    缺点：首次渲染大量DOM时，由于多了一层虚拟DOM的计算，会比innerHTML插入慢；
    `},{title:"react --- 26.为什么使用虚拟dom",content:`
    1. 性能提升：保证性能下限，在不进行手动优化的情况下，提供过得去的性能。操作真实 DOM 是昂贵的（性能开销较大），因为它会导致浏览器的重绘和重排。虚拟 DOM 允许 React 在内存中进行所有的计算，减少了直接操作真实 DOM 的次数，从而提升性能。
    2. 跨平台：虚拟 DOM 是平台无关的，这意味着相同的组件可以在不同的环境中渲染，如浏览器、服务器（SSR）或原生应用（React Native）。
    `},{title:"react --- 27.虚拟 DOM 的引入与直接操作原生 DOM 相比，哪一个效率更高，为什么？",content:`
    1. 开发体验与效率：虚拟 DOM 主要提升了开发体验和效率。它允许开发者通过更声明式的编程方式来管理 UI，专注于数据和状态，而不是复杂的 DOM 操作。这种方法简化了代码，提高了可维护性和开发效率，特别是在构建大型和复杂的应用时。
    2. 性能的平衡和适用性：虚拟 DOM 在性能方面提供了一种平衡。它通过减少不必要的 DOM 操作和优化批量更新，避免了一些性能瓶颈。虽然在某些简单操作中，直接操作原生 DOM 可能更快，但在处理大量数据和复杂的 UI 更新时，虚拟 DOM 可以提供更稳定和预测性更强的性能。虚拟 DOM 的性能优势并非绝对，而是依赖于特定的应用场景和需求。
    3. React 官方的立场：React 官方从未声称虚拟 DOM 主要是为了性能优化。相反，React卖点强调的是组件化开发和声明式 UI，这提高了开发的灵活性和效率。
    `},{title:"react --- 28.diff算法",content:`
    React 在执行 render 过程中会产生新的虚拟 DOM, 在浏览器平台下, 为了尽量减少 DOM 的创建, React 会对新旧虚拟 DOM 进行 diff 算法找到它们之间的差异, 尽量复用 DOM 从而提高性能; 所以 diff 算法主要就是用于查找新旧虚拟 DOM 之间的差异。
    流程：
    对新旧两棵树做深度优先遍历，避免对两棵树做完全比较，因此算法复杂度可以达到 O(n)。然后给每个节点生成一个唯一的标志。 在遍历的过程中，每遍历到一个节点，就将新旧两棵树作比较，并且只对同一级别的元素进行比较：
    ● 只进行同一层级的比较，如果跨层级的移动则视为创建和删除操作。
    ● 如果是不同类型的元素，则认为是创建了新的元素，而不会递归比较他们的孩子。
    ● 如果是列表元素等比较相似的内容，可以通过key来唯一确定是移动还是创建或删除操作。
    `},{title:"react --- 29. diff算法策略",content:`
    1、tree diff 同级元素比较
    2、component diff 组件之间比较
    3、element diff 节点比较
    element 同一层级的节点的比较规则, 根据每个节点在对应层级的唯一 key 作为标识, 并且对于同一层级的节点操作只有 3 种, 分别为 INSERT_MARKUP(插入)MOVE_EXISTING(移动)REMOVE_NODE(删除)	
    `},{title:"react --- 30.为什么需要fiber",content:`
    在React 16之前的版本中，是使用递归的方式处理组件树更新，称为堆栈调和（Stack Reconciliation），这种方法一旦开始就不能中断，直到整个组件树都被遍历完。这种机制在处理大量数据或复杂视图时可能导致主线程被阻塞，从而使应用无法及时响应用户的输入或其他高优先级任务。
    Fiber的引入改变了这一情况。Fiber可以理解为是React自定义的一个带有链接关系的DOM树，每个Fiber都代表了一个工作单元，React可以在处理任何Fiber之前判断是否有足够的时间完成该工作，并在必要时中断和恢复工作。
    `},{title:"react --- 31.fiber工作原理",content:`
    Fiber工作原理中最核心的点就是：可以中断和恢复，这个特性增强了React的并发性和响应性。
    实现可中断和恢复的原因就在于：Fiber的数据结构里提供的信息让React可以追踪工作进度、管理调度和同步更新到DOM
    `},{title:"react --- 32.fiber核心特点",content:`
    增量渲染： React Fiber 将更新任务拆分成多个小任务单元（称为 “fiber”），并使用优先级调度器来处理这些任务，以提高响应性和用户体验。
    优先级调度： Fiber 引入了优先级概念，使 React 能够根据任务的优先级来决定任务的执行顺序，确保高优先级任务得到及时处理。
    中断与恢复： React Fiber 允许在渲染过程中中断任务，然后在适当的时机恢复执行，从而避免了阻塞的情况。
    任务取消： Fiber 具备任务取消的能力，可以取消不必要的更新，提高性能。
    `},{title:"react --- 33.react-redux和redux的区别",content:`
    Redux和组件进行对接的时候是直接在组件中创建。React-redux是运用Provider将组件和store对接，使在provider里的所有组件都能共享store里的数据，还要使用connect将组件和react连接。
    获取state的方式不一样：redux获取state是直接通过store.getState()；react-redux获取state是通过mapStateToProps函数，只要数据变化就能获取最新数据。
    触发action的方式不一样：redux通过dispatch直接触发来操作store的数据；react-redux是使用mapDispatchToProps函数然后调用dispatch进行触发。
    `},{title:"react --- 33.react-redux的provider和connect",content:`
    Provider：提供器，在该组件内部的所有组件都可以使用store，是react组件可以被连接
    Connect：连接器，获取store数据。使用connect可以把state和dispatch绑定到react组件，使得组件可以访问到redux的数据。函数最终返回的是将state和dispatch绑定到connect之后的新组件。
    `},{title:"react --- 34. React-Router的实现原理是什么？",content:`
    客户端路由的实现思想：
    1. 基于 Hash 的路由：
      ○ 这种路由方式利用了 URL 的 hash（#后面的部分）。
      ○ 当 hash 变化时，页面不会重新加载，但可以通过监听 hashchange 事件来响应 URL 的变化。
      ○ 这种方式的优点是兼容性好，适用于老旧浏览器。
    2. 基于 H5 History 路由：
      ○ HTML5 引入了一个新的 History API，允许开发者直接操作浏览器的历史记录栈。
      ○ 使用 history.pushState 和 history.replaceState 方法可以改变 URL 而不重新加载页面。
      ○ 通过 history.go、history.forward、history.back 等 API 可以控制浏览器的历史记录导航。
    React-Router 的实现思想：
    1. 基于 History 库：
      ○ React Router 使用了 history 库来抽象化这些底层机制，提供了一个统一的 API。
      ○ 通过这个库，React Router 能够无缝地在不同类型的历史记录（hash、browser、memory）之间切换，同时磨平了浏览器之间的差异。
    2. 路由匹配和渲染：
      ○ React Router 维护了一个路由配置的列表。
      ○ 每次 URL 发生变化时，React Router 会根据当前的 URL 和这个列表匹配，找到对应的组件（Component），然后进行渲染。
    3. History 类型：
      ○ createHashHistory：用于老版本浏览器，基于 URL 的 hash 部分。
      ○ createBrowserHistory：用于现代浏览器，基于 HTML5 History API。
      ○ createMemoryHistory：主要用于非浏览器环境，如服务器端渲染（SSR）或测试，历史记录保存在内存中。
    总的来说，React Router 的实现依赖于底层的 URL 变化机制，通过 history 库对这些机制进行封装和抽象，提供了一套易用且功能强大的路由管理解决方案。无论是基于 hash 还是基于 HTML5 History API 的路由，React Router 都能够提供一致的开发体验，并且使得路由的变化和组件的渲染能够高效地协同工作。
    `},{title:"react --- 35.react-router 里的 Link 标签和 a 标签的区别？",content:`
    从最终渲染的 DOM 来看，这两者都是链接，都是 a标签，区别是∶
    <Link>是react-router 里实现路由跳转的链接，一般配合<Route> 使用，react-router接管了其默认的链接跳转行为，区别于传统的页面跳转，<Link> 的“跳转”行为只会触发相匹配的<Route>对应的页面内容更新，而不会刷新整个页面。
    `},{title:"react --- 36.react父组件props变化的时候子组件怎么监听",content:`
    当props发生变化时执行，初始化render时不执行，在这个回调函数里面，你可以根据属性的变化，通过
    调用this.setState()来更新你的组件状态，旧的属性还是可以通过this.props来获取,这里调用更新状态是安
    全的，并不会触发额外的render调用
    `},{title:"react --- 37.redux和mobx的区别",content:`
    Redux 数据流流动很自然，可以充分利用时间回溯的特征，增强业务的可预测性；MobX 没有那么自然的数据流动，也没有时间回溯的能力，但是 View 更新很精确，粒度控制很细。
    Redux 通过引入一些中间件来处理副作用；MobX  没有中间件，副作用的处理比较自由，比如依靠 autorunAsync 之类的方法。
    Redux 的样板代码更多，看起来就像是我们要做顿饭，需要先买个调料盒装调料，再买个架子放刀叉。。。做一大堆准备工作，然后才开始炒菜；而 MobX 基本没啥多余代码，直接硬来，拿着炊具调料就开干，搞出来为止
    `},{title:"react --- 38.redux和dva的区别",content:`
    dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架。
    简单理解，就是让使用 react-redux 和 redux-saga 编写的代码组织起来更合理，维护起来更方便。
    区别：
    1、简化: Dva 提供了一些约定和内置功能，使得开发者能够更快速地搭建和开发应用，相比之下，Redux 需要开发者手动处理更多的细节。
    2、副作用处理: Dva 内置了基于 redux-saga 的 Effects，简化了处理异步操作的流程，而 Redux 需要使用中间件（如redux-thunk、redux-saga）来处理异步操作。
    3、约定优于配置: Dva 鼓励使用约定优于配置的方式，通过遵循约定来减少配置，使得开发流程更加简洁高效。
    4、轻量级: Dva 是一个轻量级的框架，相比 Redux 来说，它的 API 更少，学习曲线更低，适合快速开发小到中型规模的应用。
    `},{title:"react --- 39.umi定制化方案做过哪些",content:`
    插件扩展：umi 提供了丰富的插件系统，开发者可以通过编写插件来扩展 umi 的功能。比如可以编写自定义的插件来增加路由功能、状态管理功能、代码分割功能等。umi 的插件系统提供了一些生命周期钩子，使得开发者能够在不同的阶段介入，并且可以根据需要修改配置、注入代码等。
    布局定制：umi 允许开发者自定义应用的布局，包括页面结构、公共组件、全局样式等。开发者可以通过编写布局组件来定义应用的整体结构，比如头部导航、底部栏等，使得页面布局更加灵活和统一。
    主题定制：umi 支持主题定制，开发者可以通过配置主题变量来定制应用的样式。umi 内置了一些主题变量，比如颜色、字体大小等，开发者可以根据项目需求修改这些变量，从而定制应用的整体风格。
    路由配置：umi 允许开发者灵活地配置路由，包括动态路由、嵌套路由、权限控制等。开发者可以根据项目需求定义路由结构，并且可以通过路由配置来控制页面的访问权限、页面的展示效果等。
    打包优化：umi 提供了一些打包优化的配置选项，开发者可以根据项目需求调整打包策略，比如代码分割、按需加载、压缩代码等。umi 默认采用了基于 webpack 的打包工具，开发者可以根据需要修改 webpack 配置文件，以满足特定的优化需求。
    `},{title:"react --- 40.插件中配置umi",content:`
    插件中配置 Umi
    在插件开发中使用 modifyConfig 修改用户的配置，这是我最喜欢用的一种方式，因为可以“黑盒”的修改一些 Umi 的配置，其实也相当于修改了 Umi 的默认行为，比如在同一个团队中，我们可以将一些共同的配置，放到插件中，这样每一个项目的配置文件就会非常的干净。同团队中，会大大减少配置文件的维护工作。
    像 alita 中，使用 modifyConfig 修改了 alita 项目中默认的一些配置信息，这样 alita 项目中的配置文件就可以很干净。加入说我们不使用 modifyConfig，而是要求用户严格编写如下配置，才能正常使用。这肯定会增加框架的维护成本。
    `},{title:"react --- 41.umi插件实现原理",content:`
    Umi 是一个可扩展的企业级前端框架，其插件系统是其核心特性之一。Umi 插件实现原理主要有几个关键点：
    1、插件接口定义：Umi 定义了一套插件接口，插件需要遵循这些接口来开发。这样，Umi 框架可以识别并加载这些插件。
    2、动态加载机制：Umi 使用动态加载机制来加载插件。当框架启动或运行时，根据配置或需求动态加载相应的插件。
    3、插件生命周期：每个插件都有其生命周期，包括初始化、挂载、卸载等阶段。在这些阶段，插件可以执行特定的操作，如注册路由、添加中间件等。
    4、扩展性：Umi 的插件系统是高度扩展的，允许开发者自定义插件，并通过遵循接口规范来集成到框架中。
    `},{title:"react --- 42.dva设计思想",content:`
    Dva 是一个基于 React 和 Redux 的轻量级前端框架，设计思想包括：
    1、简化 Redux 开发：Redux 是一个强大的状态管理库，但是在使用过程中需要编写大量的模板代码，比如定义 action 类型、编写 action 创建函数、编写 reducer 等。Dva 提供了一些约定和工具来简化 Redux 的开发，比如约定式的文件目录结构、自动创建 action 和 reducer 等，使开发者能够更快速地编写 Redux 相关的代码。
    2、集成 React-Router：Dva 默认集成了 React-Router，使得路由管理变得更加简单。开发者可以通过 Dva 提供的路由配置方式来管理页面之间的跳转和传参，而不需要手动管理路由的状态。
    3、内置异步处理方案：在实际项目中，经常需要处理异步操作，比如发送网络请求获取数据。Dva 内置了基于 Redux-Saga 的异步处理方案，使得开发者能够更加方便地管理异步操作，比如发起请求、监听响应、更新状态等。
    4、支持插件扩展：Dva 提供了一些插件，比如 dva-loading、dva-immer 等，用来增强开发体验或者提供额外的功能。开发者可以根据项目需求选择合适的插件，并且可以自定义插件来满足特定的需求。
    5、约定优于配置：Dva 遵循约定优于配置的设计原则，通过约定式的方式来减少配置，提高开发效率。比如约定 model 文件的命名和目录结构、约定路由配置的格式等，使得开发者能够更快速地上手并且降低维护成本。
    总的来说，Dva 的设计思想是简化 Redux 开发、集成常用的前端技术、提供便捷的异步处理方案，并且支持插件扩展，以提高开发效率和降低学习成本。
    `},{title:"react --- 43.dva实现原理",content:`
    Dva 的实现原理包括以下几个方面：
    1、Redux：Dva 使用 Redux 作为状态管理库，通过 Redux 提供的 store 和 reducer 来管理状态。
    2、React-Router：Dva 默认集成了 React-Router，使得路由管理更加简单。
    3、Redux-Saga：Dva 内置了基于 Redux-Saga 的异步处理方案，使得开发者能够更加方便地管理异步操作。
    `},{title:"react --- 44.自定义Hooks",content:`
    以 use 开头，按照需要可以使用其他hook，像useState、useEffect之类的，然后主要是逻辑要能复用的，创建一个独立的状态和逻辑，能在在多个组件中使用互不影响，就比如可以结合localStorage封装状态数据存储或者结合fetch封装异步数据获取的Hook或者表单处理和验证的之类的。
    `},{title:"react --- 45.react useState useEffect实现原理",content:`
    useState:React 内部维护了一个数据结构，用于存储组件的状态。当调用 usestate时，React 会根据组件的标识符找到相应的状态，并返回状态值及更新状态的函数。更新状态时，React 会更新相应的状态，并触发组件的重新渲染。
    useEffect:React 使用链表来管理副作用。每个组件都有一个链表，用于存储其副作用。当调用 useEffect时，React 会创建一个副作用对象，并将其添加到组件的链表中。在组件渲染后，React 会依次执行链表中的副作用对象的回调函数。当组件卸载或者依赖项变化时，React 会清理相应的副作用对象。
    `},{title:"react --- 46. react.memo",content:`
    这个方法是一个 React 顶层 Api 方法，给函数组件来减少重复渲染，类似于 PureComponent 和 shouldComponentUpdate 方法的一个集合体。
    React.memo顶层Api方法，它可以用来减少子组件的重复渲染次数，从而提升组件渲染性能。
    React.memo它是一个只能在函数组件中使用的顶层Api方法。
    当父组件发生改变时，默认情况下它的子孙组件也会重新渲染，当某些子组件不需要更新时，也会被强制更新，为了避免这种情况，我们可以使用 React.memo。
    `},{title:"react --- 47. React 17 的新特性是什么？",content:`
    React 17 的主要新特性是改进了 React 的事件系统，使得事件处理程序的行为更加一致，并且更好地支持像 Web Components 这样的可重用组件库。
    此外，React 17 还引入了一种新的渲染方法，称为“服务器渲染的渲染”，它允许使用 React 在非 DOM 环境中进行渲染，例如在 Canvas 或游戏引擎中。
    `},{title:"react --- 48. React 17 中如何避免了一些常见的错误？",content:`
    React 17 中引入了一些新的警告和错误，这些错误可以帮助开发人员更早地发现常见的错误，例如错误地使用 ref、将字符串传递给事件处理程序等等。
    此外，React 17 还改进了错误消息，使得它们更加易于理解和调试。
    `},{title:"react --- 49. React 17 中的事件处理机制发生了什么变化？",content:`
    React 17 中的事件处理机制已经升级，它现在更好地支持像 Web Components 这样的可重用组件库。在 React 17 中，事件处理程序的行为更加一致，无论是在 DOM 还是在自定义组件中。
    React 17 还引入了一个新的事件系统，称为“选择器事件系统”，它可以让开发人员使用类似于 CSS 选择器的语法来选择元素并绑定事件处理程序。
    `},{title:"react --- 50. React 17 中的错误边界有什么变化？",content:`
    在 React 17 中，错误边界的行为与之前基本相同，但是现在可以将多个错误边界嵌套在一起，以更好地控制错误的边界范围。此外，React 17 还引入了一些新的 API，使得错误边界更容易使用和调试。
    `},{title:"react --- 51. React 17 中的 React.StrictMode 有什么变化？",content:`
    在 React 17 中，React.StrictMode 的行为与之前基本相同，但是现在已经删除了对 UNSAFE_ 生命周期的支持。此外，React 17 还引入了一些新的警告和错误，使得在 StrictMode 下调试更加容易。
    `},{title:"react --- 52. React 17 中如何使用服务端渲染的渲染？",content:`
    React 17 中引入了一种新的渲染方法，称为“服务器渲染的渲染”，它允许使用 React 在非 DOM 环境中进行渲染，例如在 Canvas 或游戏引擎中。
    要使用这种新的渲染方法，需要使用 ReactDOMServer 类的 renderToStaticNodeStream 或 renderToNodeStream 方法来渲染应用程序，并将输出流发送到目标环境中。
    `},{title:"react --- 53. React 18已经在正式发布哪些新特性",content:`
    React 18 包括了一些新特性和改进，具体包括：
    自适应渲染（Adaptive Rendering）：新的渲染模式，可以根据用户设备、网络和性能情况，动态调整渲染策略，以提高 Web 应用的响应速度和性能表现。
    增量更新（Incremental Updates）：引入了新的渲染器（Renderer），可以实现增量更新，只更新需要变化的部分，提高了应用的性能和响应速度。
    服务器渲染（Server Components）：可以在服务器端渲染 React 组件，以提高应用的性能和 SEO 表现。
    异步渲染（Async Rendering）：通过新的 Suspense API 和 useTransition Hook，可以实现更细粒度的异步渲染，以提高应用的用户体验和性能表现。
    其他改进：包括对 React 核心架构的优化、对 React DevTools 的改进、对 Hooks API 的扩展和改进等。
    `},{title:"react --- 54. 类组件和函数组件有什么区别",content:`
    类组件是继承自 React.Component 类的 JavaScript 类，必须要有一个 render 方法来定义组件的输出。类组件可以通过 this.props 来获取父组件传递下来的 props 属性，并通过 this.state 来存储组件自己的状态。
    函数组件是简单的 JavaScript 函数，函数的返回值就是组件的输出。函数组件可以通过参数来获取父组件传递下来的 props 属性，并通过 useState 等 Hook 来存储组件自己的状态。
    下面是类组件和函数组件的区别：
    1. 语法：类组件是一个继承自 React.Component 的 JavaScript 类，而函数组件是一个简单的 JavaScript 函数。
    2. 状态管理：类组件使用 this.state 来管理状态，而函数组件使用 useState 等 Hook 来管理状态。
    3. 生命周期：类组件有一系列生命周期方法，如 componentDidMount、componentDidUpdate 等，而函数组件可以使用 useEffect 等 Hook 来模拟这些生命周期方法。
    4. 性能：函数组件比类组件更加轻量级，因为它不需要创建类实例，所以在渲染大量组件时，函数组件的性能会更好。
    总的来说，随着 React Hooks 的推出，函数组件越来越成为 React 的主要开发方式。当你只需要展示一些简单的 UI 时，使用函数组件会更加简洁和方便，而在需要进行复杂的状态管理和生命周期控制时，则需要使用类组件。
    `}],ye=[{title:"工程化 --- 1. GIT常用命令",content:`
    git clone           克隆远程仓库到本地。
    git init            在当前目录初始化一个新的Git仓库。
    git add             将文件添加到暂存区，准备提交。
    git commit -m "commit_message"：提交暂存区的改动到本地仓库，附带提交信息。
    git status          查看工作区、暂存区的状态，显示文件的修改情况。
    git log             显示提交日志，包括提交哈希、作者、日期等信息。
    git branch          列出所有分支，当前分支前会有一个星号。
    git checkout        切换到指定分支。
    git checkout -b     创建并切换到新分支。
    git merge           将指定分支合并到当前分支。
    git pull            拉取远程仓库的更新并合并到当前分支。
    git push            将本地分支的更新推送到远程仓库。
    git diff            显示工作区与暂存区之间的差异。
    git diff --staged   显示暂存区与最后一次提交之间的差异。
    `},{title:"工程化 --- 2. git pull 和 git fetch 的区别",content:`
    它俩都是把远程仓库的变化下载下来，但是git pull下载下来之后跟当前分支合并了。
    git fetch 只是把远程仓库的变化下载下来，并没有和本地分支合并。
    git pull 会把远程仓库的变化下载下来，并和当前分支合并。
    `},{title:"工程化 --- 3. git rebase 和 git merge 的区别",content:`
    git merge 和 git rebase 它俩都是用于分支合并，关键在 commit(提交) 记录的处理上不同：
    git merge 会新建一个新的 commit 对象，然后两个分支以前的 commit 记录都指向这个新 commit 记录。这种方法会保留之前每个分支的 commit 历史。
    git rebase 会先找到两个分支的第一个共同的 commit 祖先记录，然后将提取当前分支这之后的所有 commit 记录，然后将这个 commit 记录添加到目标分支的最新提交后面。经过这个合并后，两个分支合并后的 commit 记录就变为了线性的记录了。通俗点说就是，从master上拉出来一个分支A，在这个分支上有几次 commit，master上也有几次commit，这时候在A这个分支上git rebase 就是将 master 上面的 commit 作为A分支的基底，实际操作为把A分支之后 commit 的提交先暂存下来，然后删掉原来这些提交，再找到master的最新提交位置拉下来，然后把存下来的提交再接上去。
    `},{title:"工程化 --- 4. git 和 svn 的区别",content:`
    git 和 svn 最大的区别在于 git 是分布式的，而 svn 是集中式的。因此我们不能再离线的情况下使用 svn。如果服务器出现问题，就没有办法使用 svn 来提交代码。
    svn 中的分支是整个版本库的复制的一份完整目录，而 git 的分支是指针指向某次提交，因此 git 的分支创建更加开销更小并且分支上的变化不会影响到其他人。svn 的分支变化会影响到所有的人。
    svn 的指令相对于 git 来说要简单一些，比 git 更容易上手。
    GIT把内容按元数据方式存储，而SVN是按文件：因为git目录是处于个人机器上的一个克隆版的版本库，它拥有中心版本库上所有的东西，例如标签，分支，版本记录等。
    GIT分支和SVN的分支不同：svn会发生分支遗漏的情况，而git可以同一个工作目录下快速的在几个分支间切换，很容易发现未被合并的分支，简单而快捷的合并这些文件。
    GIT没有一个全局的版本号，而SVN有
    GIT的内容完整性要优于SVN：GIT的内容存储使用的是SHA-1哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏
    `},{title:"工程化 --- 5. webpack的构建流程",content:`
    Webpack 的运⾏流程是⼀个串⾏的过程，从启动到结束会依次执⾏以下流程： 
    初始化参数：从配置⽂件和 Shell 语句中读取与合并参数，得出最终的参数； 
    开始编译：⽤上⼀步得到的参数初始化 Compiler 对象，加载所有配置的插件，执⾏对象的 run ⽅法开始执⾏编译； 
    确定⼊⼝：根据配置中的 entry 找出所有的⼊⼝⽂件； 
    编译模块：从⼊⼝⽂件出发，调⽤所有配置的 Loader 对模块进⾏翻译，再找出该模块依赖的模块，再递归本步骤直到所有⼊⼝依赖的⽂件都经过了本步骤的处理； 
    完成模块编译：在经过第4步使⽤ Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系； 
    输出资源：根据⼊⼝和模块之间的依赖关系，组装成⼀个个包含多个模块的 Chunk，再把每个 Chunk 转换成⼀个单独的⽂件加⼊到输出列表，这步是可以修改输出内容的最后机会； 
    输出完成：在确定好输出内容后，根据配置确定输出的路径和⽂件名，把⽂件内容写⼊到⽂件系统。
    在以上过程中，Webpack 会在特定的时间点⼴播出特定的事件，插件在监听到感兴趣的事件后会执⾏特定的逻辑，并且插件可以调⽤ Webpack 提供的 API 改变 Webpack 的运⾏结果。 
    `},{title:"工程化 --- 6. webpack配置有哪些",content:`
    entry：入口文件
    output：输出文件配置
    resolve：用来配置模块的解析方式
    module：用来配置模块如何被解析
    plugins：插件
    devServer：开发服务器配置
    devtool：调试工具
    optimization：优化相关配置
    externals：外部扩展的配置
    performance：性能相关配置
    target：构建的目标环境
    `},{title:"工程化 --- 7. 有哪些常⻅的Loader",content:`
    babel-loader：将ES6+的代码转换成ES5的代码。
    css-loader：解析CSS文件，并处理CSS中的依赖关系。
    style-loader：将CSS代码注入到HTML文档中。
    file-loader：解析文件路径，将文件赋值到输出目录，并返回文件路径。
    url-loader：类似于file-loader，但是可以将小于指定大小的文件转成base64编码的Data URL格式
    sass-loader：将Sass文件编译成CSS文件。
    less-loader：将Less文件编译成CSS文件。
    postcss-loader：自动添加CSS前缀，优化CSS代码等。
    vue-loader：将Vue单文件组件编译成JavaScript代码。
    `},{title:"工程化 --- 8. 有哪些常⻅的Plugin",content:`
    HtmlWebpackPlugin：生成HTML文件，并自动将打包后的javaScript和CSS文件引入到HTML文件中。
    CleanWebpackPlugin：清除输出目录。
    ExtractTextWebpackPlugin：将CSS代码提取到单独的CSS文件中。
    DefinePlugin：定义全局变量。
    UglifyJsWebpackPlugins(啊哥拉发艾js铺拉根)：压缩JavaScript代码。
    HotModuleReplacementPlugin：热模块替换，用于在开发环境下实现热更新。
    ExtractTextWebpackPlugin：将CSS代码提取到单独的CSS文件中。
    MiniCssExtractPlugin：与ExtractTextWebpackPlugin类似，将CSS代码提取到单独的CSS文件中。
    BundleAnalyzerPlugin(颁刀啊呢拉艾热铺拉根)：分析打包后的文件大小和依赖关系。
    `},{title:"工程化 --- 9. Loader和Plugin的区别",content:`
    功能不同：
    Loader本质是一个函数，它是一个转换器。webpack只能解析原生js文件，对于其他类型文件就需要loade进行转换。
    Plugin它是一个插件，用于增强webpack功能。webpack在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 API 改变输出结果 。
    用法不同：
    Loader的配置是在module.rules下进行。类型为数组，每⼀项都是⼀个 Object ，⾥⾯描述了对于什么类型的⽂件（ test ），使⽤什么加载( loader )和使⽤的参数（ options ） 。
    Plugin的配置在plugins下。类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。
    `},{title:"工程化 --- 10. 如何⽤webpack来优化前端性能",content:`
    ⽤webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运⾏的更快更⾼效。 
    你比如说，压缩代码：删除多余的代码、注释、简化代码的写法等等⽅式。可以利⽤webpack的 UglifyJsPlugin(啊哥拉发艾js铺拉根) 和 ParallelUglifyPlugin(啪若来奥啊哥拉发艾铺拉根) 来压缩JS⽂件， 利⽤ cssnano （css-loader的minimize(迷你马艾斯)）来压缩css 
    利⽤CDN加速: 在构建过程中，将引⽤的静态资源路径修改为CDN上对应的路径。可以利⽤webpack对于 output 参数和各loader的 publicPath 参数来修改资源路径 
    Tree Shaking(shei ken): 将代码中永远不会⾛到的⽚段删除掉。可以通过在启动webpack时追加参数 --optimize(奥克忒马埃丝)-minimize 来实现
    Code Splitting(斯布里听): 将代码按路由维度或者组件分块(chunk),这样做到按需加载,同时可以充分利⽤浏览器缓存 
    提取公共第三⽅库: SplitChunksPlugin(斯普里尝死铺拉根)插件来进⾏公共模块抽取,利⽤浏览器缓存可以⻓期缓存这些⽆需频繁变动的公共代码 
    `},{title:"工程化 --- 11. 如何提⾼webpack的打包速度",content:`
    happypack(哈皮帕克): 利⽤进程并⾏编译loader,⽤缓存让 rebuild 更快,这个的话作者已经不会继续开发了,可以用thread(死乳癌的)-loader 代替
    外部扩展(externals(伊克斯带闹死)): 将不怎么需要更新的第三⽅库脱离webpack打包，不被打⼊bundle中，从⽽减少打包时间，⽐如jQuery⽤script标签引⼊ 
    dll: 采⽤webpack的 DllPlugin 和 DllReferencePlugin 引⼊dll，让⼀些基本不会改动的代码先打包成静态资源，避免反复编译浪费时间 
    利⽤缓存: webpack.cache 、babel-loader.cacheDirectory、 HappyPack.cache 都可以利⽤缓存提⾼rebuild效率缩⼩⽂件搜索范围: ⽐如babel-loader插件,如果你的⽂件仅存在于src中,那么可以 include: path.resolve(__dirname,'src') ,当然绝⼤多数情况下这种操作的提升有限，除⾮不⼩⼼build了node_modules⽂件 
    `},{title:"工程化 --- 12. 如何提⾼webpack的构建速度",content:`
    多⼊⼝情况下，使⽤ CommonsChunkPlugin(康们死常客铺拉根) 来提取公共代码 
    通过 externals(伊克斯带闹死) 配置来提取常⽤库 
    利⽤ DllPlugin 和 DllReferencePlugin 预编译资源模块 通过 DllPlugin 来对那些我们引⽤但是绝对不会修改的npm包来进⾏预编译，再通过 DllReferencePlugin 将预编译的模块加载进来。 
    使⽤ Happypack 实现多线程加速编译 
    使⽤ webpack-uglify-parallel(啪若来奥) 来提升 uglifyPlugin 的压缩速度。 原理上 webpack-uglify-parallel 采⽤了多核并⾏压缩来提升压缩速度 
    使⽤ Tree-shaking(shei ken) 和 Scope Hoisting(后死听) 来剔除多余代码 
    `},{title:"工程化 --- 13. 如何减少打包后的代码体积",content:`
    代码分割（Code Splitting）：将应用程序的代码划分为多个代码块，按需加载
    Tree Shaking：配置Webpack的Tree Shaking机制，去除未使用的代码
    压缩代码：使用工具如UglifyJS或Terser来压缩JavaScript代码
    使用生产模式：在Webpack中使用生产模式，通过设置mode: 'production'来启用优化
    使用压缩工具：使用现代的压缩工具，如Brotli和Gzip，来对静态资源进行压缩
    利用CDN加速：将项目中引用的静态资源路径修改为CDN上的路径，减少图片、字体等静态资源等打包
    `},{title:"工程化 --- 14. webpack 热更新的实现原理",content:`
    它其实就是不⽤刷新浏览器⽽将新变更的模块替换掉旧的模块
    ⾸先要知道server端和client端都做了处理⼯作：
    1. 第⼀步，在 webpack 的 watch 模式下，⽂件系统中某⼀个⽂件发⽣修改，webpack 监听到⽂件变化，根据配置⽂ 
    件对模块重新编译打包，并将打包后的代码通过简单的 JavaScript 对象保存在内存中。 
    2. 第⼆步是 webpack-dev-server 和 webpack 之间的接⼝交互，⽽在这⼀步，主要是 dev-server 的中间件 webpack- dev-middleware 和 webpack 之间的交互，webpack-dev-middleware 调⽤ webpack 暴露的 API对代码变化进⾏监 控，并且告诉 webpack，将代码打包到内存中。 
    3. 第三步是 webpack-dev-server 对⽂件变化的⼀个监控，这⼀步不同于第⼀步，并不是监控代码变化重新打包。当我们在配置⽂件中配置了devServer.watchContentBase 为 true 的时候，Server 会监听这些配置⽂件夹中静态⽂件的变化，变化后会通知浏览器端对应⽤进⾏ live reload。注意，这⼉是浏览器刷新，和 HMR 是两个概念。 
    4. 第四步也是 webpack-dev-server 代码的⼯作，该步骤主要是通过 sockjs（webpack-dev-server 的依赖）在浏览器端和服务端之间建⽴⼀个 websocket ⻓连接，将 webpack 编译打包的各个阶段的状态信息告知浏览器端，同时也包括第三步中 Server 监听静态⽂件变化的信息。浏览器端根据这些 socket 消息进⾏不同的操作。当然服务端传递的最主要信息还是新模块的 hash 值，后⾯的步骤根据这⼀ hash 值来进⾏模块热替换。 
    5. webpack-dev-server/client 端并不能够请求更新的代码，也不会执⾏热更模块操作，⽽把这些⼯作⼜交回给了webpack，webpack/hot/dev-server 的⼯作就是根据 webpack-dev-server/client 传给它的信息以及 dev-server 的配置决定是刷新浏览器呢还是进⾏模块热更新。当然如果仅仅是刷新浏览器，也就没有后⾯那些步骤了。 
    6. HotModuleReplacement.runtime 是客户端 HMR 的中枢，它接收到上⼀步传递给他的新模块的 hash 值，它通过JsonpMainTemplate.runtime 向 server 端发送 Ajax 请求，服务端返回⼀个 json，该 json 包含了所有要更新的模块的 hash 值，获取到更新列表后，该模块再次通过 jsonp 请求，获取到最新的模块代码。这就是上图中 7、8、9 步骤。 
    7. ⽽第 10 步是决定 HMR 成功与否的关键步骤，在该步骤中，HotModulePlugin 将会对新旧模块进⾏对⽐，决定是否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引⽤。 
    8. 最后⼀步，当 HMR 失败后，回退到 live reload 操作，也就是进⾏浏览器刷新来获取最新打包代码。
    `},{title:"工程化 --- 15. 为什么需要热更新",content:`
    Hot Module Replacement（以下简称 HMR）是 webpack 发展至今引入的最令人兴奋的特性之一 ，当你对代码进行修改并保存后，webpack 将对代码重新打包，并将新的模块发送到浏览器端，浏览器通过新的模块替换老的模块，这样在不刷新浏览器的前提下就能够对应用进行更新。例如，在开发 Web 页面过程中，当你点击按钮，出现一个弹窗的时候，发现弹窗标题没有对齐，这时候你修改 CSS 样式，然后保存，在浏览器没有刷新的前提下，标题样式发生了改变。感觉就像在 Chrome 的开发者工具中直接修改元素样式一样。
    `},{title:"工程化 ---HMR是怎样实现自动编译的",content:`
    webpack通过watch可以监听文件编译完成和监听文件的变化，webpack-dev-middleware可以调用webpack的API监听代码的变化，webpack-dev-middleware利用sockjs和webpack-dev-server/client建立webSocket长连接。将webpack的编译编译打包的各个阶段告诉浏览器端。主要告诉新模块hash的变化，然后webpack-dev-server/client是无法获取更新的代码的，通过webpack/hot/server获取更新的模块，然后HMR对比更新模块和模块的依赖。
    `},{title:"工程化 --- 16. Vite 预构建流程",content:`
    首先会去查找缓存目录（默认是 node_modules/.vite）下的 _metadata.json 文件；然后找到当前项目依赖信息（xxx-lock 文件）拼接上部分配置后做哈希编码，最后对比缓存目录下的 hash 值是否与编码后的 hash 值一致，一致并且没有开启 force 就直接返回预构建信息，结束整个流程；
    如果开启了 force 或者项目依赖有变化的情况，先保证缓存目录干净（node_modules/.vite 下没有多余文件），在 node_modules/.vite/package.json 文件写入 type: module 配置。这就是为什么 vite 会将预构建产物视为 ESM 的原因。
    分析入口，依次查看是否存在 optimizeDeps.entries、build.rollupOptions.input、*.html，匹配到就通过 dev-scan 的插件寻找需要预构建的依赖，输出 deps 和 missing，并重新做 hash 编码；
    最后使用 es-module-lexer 对 deps 模块进行模块化分析，拿到分析结果做预构建。构建结果将合并内部模块、转换 CommonJS 依赖。最后更新 data.optimizeDeps 并将结果写入到缓存文件。
    `},{title:"工程化 --- 17. Vite 和 Webpack 的区别",content:`
    首先webpack和vite都是现代化打包工具。然后Vite的启动要快一些，因为Vite的底层原理是基于esbuild预构建依赖。而esbuild是采用go语言编写，因为go语言的操作是纳秒级别，而js是以毫秒计数，所以vite比用js编写的打包器快10-100倍。
    就是 webpack 会先打包，然后启动开发服务器，请求服务器时直接给予打包结果。而vite是直接启动开发服务器，请求哪个模块再对该模块进行实时编译。
    因为现代浏览器本身就支持ES Module，会自动向依赖的Module发出请求。vite就利用这一点，将开发环境下的模块文件，就作为浏览器要执行的文件，而不是像webpack那样进行打包合并。
    由于vite在启动的时候不需要打包，也就意味着不需要分析模块的依赖、不需要编译，因此启动速度非常快。当浏览器请求某个模块时，再根据需要对模块内容进行编译。这种按需动态编译的方式，极大的缩减了编译时间，项目越复杂、模块越多，vite的优势越明显。
    在HMR(热更新)方面，当改动了一个模块后，仅需让浏览器重新请求该模块即可，不像webpack那样需要把该模块的相关依赖模块全部编译一次，效率更高。
    当需要打包到生产环境时，vite使用传统的rollup进行打包，因此，vite的主要优势在开发阶段。另外，由于vite利用的是ES Module，因此在代码中不可以使用CommonJS。然后的话vite它的相关生态没有webpack完善，我理解的差不多这么多。
    `},{title:"工程化 --- 18. babel的原理",content:`
    babel 的转译过程就三个阶段，就是解析转换和输出。 
    首先 Parse 就是将代码解析⽣成抽象语法树（AST），就是词法分析与语法分析的过程；
    然后 Transform 就是对于 那个抽象语法树 (AST) 进⾏变换⼀系列的操作，babel 它接受到 AST 并通过 babel-traverse(踹沃斯) 对它进⾏遍历，在这个过程中进⾏添加、更新及移除等操作；
    最后 Generate(摘呢瑞特) 就是把变换后的 AST 再转换为 JS 代码, 使⽤到的模块是 babel-generator(摘呢瑞特)。
    `},{title:"工程化 --- 19. 为什么 pnpm 比 npm 快",content:`
    Pnpm 比 npm 快的原因在于其优化的文件存储方式、依赖管理方式以及并行下载能力。 以下是详细介绍：
    Pnpm 使用基于内容寻址的文件系统来存储磁盘上的所有文件，这意味着它不会在磁盘中重复存储相同的依赖包，即使这些依赖包被不同的项目所依赖。这种存储方式使得Pnpm在安装依赖时能够更高效地利用磁盘空间，同时也减少了下载和安装的时间。
    Pnpm 在下载和安装依赖时采用了并行下载的能力，这进一步提高了安装速度。
    Pnpm 还具有一些其他特性，例如节省空间的硬链接和符号链接的使用，这些都有助于提高其性能。
    `},{title:"工程化 --- 20. npm install 的执行过程",content:`
    npm install 是 Node.js 包管理器 (npm) 的一个命令，用于安装一个项目所依赖的模块。
    执行过程大致如下：
    读取 package.json 文件，该文件列出了项目所需要的依赖。
    根据 package.json 中的依赖信息以及 node_modules 目录状态，npm 会决定哪些模块需要下载和安装。
    npm 会查看每个模块的可用版本，并选择符合 package.json 中指定版本范围的最新版本进行安装。
    下载所需模块到本地的 node_modules 目录。
    如果模块包含子模块（package.json 中 dependencies 或 devDependencies 中的模块），则递归执行上述步骤安装这些子模块。
    `}],ge=[{title:"Node --- 1. 对Node.js 的理解",content:`
      Node.js 是一个开源与跨平台的 JavaScript 运行时环境
      在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核），利用事件驱动、非阻塞和异步输入输出模型等技术提高性能
      可以理解为 Node.js 就是一个服务器端的、非阻塞式I/O的、事件驱动的JavaScript运行环境
      `},{title:"Node --- 2. Node.js 的优缺点",content:`
      优点：
        处理高并发场景性能更佳
        适合I/O密集型应用，值的是应用在运行极限时，CPU占用率仍然比较低，大部分时间是在做 I/O硬盘内存读写操作

      因为Nodejs是单线程，带来的缺点有：
        不适合CPU密集型应用
        只支持单核CPU，不能充分利用CPU
        可靠性低，一旦代码某个环节崩溃，整个系统都崩溃
      `},{title:"Node --- 3. Node. js 有哪些全局对象",content:`
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
      `},{title:"Node --- 4.  Node 中的 process 的理解",content:`
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
      `},{title:"Node --- 5. Node 中的 fs模块的理解",content:`
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
      `},{title:"Node --- 6. Node 中的 Buffer 的理解",content:`
      在Node应用中，需要处理网络协议、操作数据库、处理图片、接收上传文件等，在网络流和文件的操作中，要处理大量二进制数据，而Buffer就是在内存中开辟一片区域（初次初始化为8KB），用来存放二进制数据
      `}],be=[{title:"性能优化 --- 1. 性能优化从那些方面",content:`
      性能优化的话基本就分资源压缩，网络优化和代码和代码优化吧。然后资源压缩的话就是代码压缩和媒体资源压缩，网络优化就连接方面和缓存方面，代码方面就预加载懒加载减少重绘和重排还有防抖节流再就是有一个良好的编程习惯了。我先说一下资源压缩吧。
      `},{title:"性能优化 --- 2.  资源压缩",content:`
      首先是代码资源压缩
      像压缩JavaScript的话 Webpack 通过使用如 Terser 这样的插件，移除 JavaScript 中的无用代码、注释、空格和换行符，以及对代码进行缩短变量名和函数名等操作以减少文件大小，提高加载速度。
      还有压缩CSS的话 Webpack 可以利用 cssnano、OptimizeCSSAssetsPlugin 等插件来优化和最小化 CSS 代码。
      再就是模块优化的话Webpack 可以进行 Tree shaking 来剔除项目中未引用的模块。
      然后是媒体资源
      首先是图片压缩可以通过缩小尺寸、降低分辨率、改变图像格式（如使用 JPEG、PNG、WebP 等），以及利用工具如 imagemin 对图像文件进行无损或有损压缩。
      还有视频压缩可以调整视频的编码参数，如比特率、分辨率，或转换为更高效的视频格式（如H.264、H.265或VP9）来减少视频文件的大小。
      再就是音频压缩可以通过更改音频格式（如MP3、AAC等），减少比特率来降低音频文件的体积。
      然后字体压缩因为全量字体包很大，所以具体需要哪些文案利用类似 font-spider 的工具裁剪后引入。
      `},{title:"性能优化 --- 3. 网络连接",content:`
      先是连接优化，像使用CDN （内容分发网络）啊，DNS预解析，避免重定向和HTTP/2或HTTP/3这些。
      然后缓存优化的话，就是用一些响应头缓存控制头，比如：
      Cache-Control：这是一个 HTTP 响应头，可以指定资源被缓存的方式和时间。例如，Cache-Control: max-age=31536000 表示资源可以在本地缓存并在请求时重用一年。
      Expires：这是早期HTTP/1.0的缓存控制头，用于设置资源过期的绝对时间。现在通常推荐使用 Cache-Control 替代它。
      ETag/Last-Modified：这些响应头用于验证缓存的资源是否仍然是最新的。当资源变化时，服务器会提供更新的 ETag 或 Last-Modified 值，以此来触发资源的重新下载。
      `},{title:"性能优化 --- 4. 代码优化",content:`
      1.预加载（Preloading）：对于核心资源，使用 <link rel="preload"> 提前加载。
      2.懒加载（Lazy Loading）：对于非关键资源推迟加载，如下方图片、非首屏的 JavaScript 模块等。可以减少初始加载的资源数量，加快页面加载速度。
        懒加载实现方式：
        JavaScript 监听滚动事件，当元素进入视口时，动态地将资源的URL设置到元素的src属性中。
        或利用现成的懒加载库（如lozad.js、lazysizes等）来实现懒加载效果
        适用场景：
        图像/视频 懒加载
      3.减少重绘与重排，这哥俩是浏览器渲染过程中最耗费性能的操作之二。
        正确使用防抖节流，处理页面上频繁触发的事件时（如滚动、窗口大小调整、键盘输入等），利用防抖节流能够减少事件处理函数被调用的次数，减少不必要计算和重绘，提升性能。
        保持良好编码习惯，便于功能上线后性能优化啊重构之类的。
      4.然后防抖节流，防抖的话比如：搜索框实时搜索啊，表单输入验证，还有浏览器窗口调整事件和鼠标移动事件。
        节流的话像：页面滚动事件，窗口大小调整，频繁点击按钮或者拖拽场景。

        以下是具体的，先不说，问再说！！！！！
        搜索框实时搜索：当用户在搜索框中输入内容时，通常需要实时进行搜索。使用防抖函数可以延迟搜索请求的发送，只在用户停止输入一段时间后才真正发送请求，避免频繁的请求操作。
        表单输入验证：在表单输入过程中，每次用户输入都可能触发验证操作。使用防抖函数可以延迟触发验证操作，只在用户输入完毕一段时间后进行验证，避免频繁的验证操作。
        浏览器窗口调整事件：当用户调整浏览器窗口大小时，会触发resize事件。使用防抖函数可以延迟resize事件的触发，只在用户停止调整窗口一段时间后才执行对应的操作，避免频繁的计算和布局操作。
        鼠标移动事件：在一些特定的交互场景中，需要根据鼠标的移动位置做出相应的交互。使用防抖函数可以延迟鼠标移动事件的触发，只在用户停止移鼠标一段时间后才执行相应的操作，避免过度频繁的操作。

        页面滚动事件：当用户滚动页面时，会频繁触发滚动事件。使用节流函数可以控制滚动事件的触发频率，避免过多的计算和渲染操作，提高页面的性能和流畅度。
        窗口大小调整：当用户调整浏览器窗口大小时，会不断触发resize事件。使用节流函数可以限制resize事件的触发频率，以避免过度计算和布局操作。
        频繁点击按钮：在某些场景下，点击按钮可能会触发重复的提交操作。使用节流函数可以限制按钮点击的触发频率，防止重复的提交。
        拖拽场景: 在某些场景下，频繁触发位置变动会造成性能问题，固定时间内只执行一次，防止超高频次触发位置变动
      `},{title:"性能优化 --- 5. CDN的概念",content:`
        CDN（内容分发网络）通过一组位于全球各地的服务器，将网站的内容（例如图片、视频、网页文件等）从最靠近用户的服务器快速、可靠地发送给用户，从而提供快速、高效、低成本的内容传输服务。CDN系统通常由三个主要部分组成：
        分发服务系统：
        这里的关键部件是缓存设备，它们负责直接向用户提供内容，并通过与源站同步来获取更新的内容。缓存设备的数量和规模是衡量CDN系统服务性能的基本标准。
        负载均衡系统：
        负载均衡系统的主要职责是对发起服务请求的用户进行访问调度，以确定向用户提供服务的最优服务器物理位置。全局负载均衡根据用户就近原则进行调度，而本地负载均衡则负责内部设备的负载分配。
        运营管理系统：
        该系统包括运营管理和网络管理子系统，处理与外部系统的业务交互，并包含客户管理、产品管理、计费管理和统计分析等功能。
        就是说，CDN通过将网站内容存储在全球各地的服务器中，帮助网站提高内容传输速度和用户体验。这个系统的工作原理就像是把网站的内容放到离用户更近的地方，当用户访问网站时，就可以从距离最近的服务器获取所需的内容，从而减少传输时间和提高网页加载速度。
      `},{title:"性能优化 --- 6. CDN的作用",content:`
        CDN（内容分发网络）的作用是为了让网站的内容能够更快速、更可靠地传输给用户，从而提升用户访问网站时的速度和体验。具体来说，CDN有以下几个作用：
        加速网站加载速度：CDN会将网站的图片、视频和其他静态资源缓存在离用户更近的服务器上，这样用户在访问网站时可以从附近的服务器获取这些内容，从而加快网站加载速度。
        减少网络延迟：由于用户能够从距离更近的服务器获取内容，CDN可以减少网络延迟，提高网站的响应速度，让用户能够更快地打开网页和浏览内容。
        减轻服务器负载：部分用户的访问请求会被分配给CDN的服务器处理，这样可以减轻原始服务器的负载压力，提高服务器的性能和稳定性。
        节省带宽成本：CDN可以减少网站跨地区传输的流量，降低网站的带宽成本，使网站运营更加经济高效。
        除此之外，CDN还有助于提高网站的安全性，能够抵御一些网络攻击，例如通过监控异常流量来防御DDoS攻击，以及通过全链路HTTPS通信来防范中间人攻击。作为一种基础的云服务，CDN还具有资源托管、按需扩展等优势，能够更好地处理流量高峰和突发访问量。
      `},{title:"性能优化 --- 7. CDN的原理",content:`
        CDN（内容分发网络）的工作原理与DNS（域名解析系统）确实有密切关联。 CDN 和 DNS 是如何协同工作的。
        首先，当用户在浏览器中输入一个网址（比如www.test.com）时，浏览器会先检查自身的缓存，如果没找到，就会依次检查操作系统缓存、路由器缓存，再向网络服务提供商（ISP）的DNS服务器请求解析。
        这就引出了我们对 CDN 的讨论。CDN 会通过将网站的内容缓存在世界各地的服务器上，来优化网站内容的传输。当用户访问网站时，CDN会根据用户的位置和服务器负载情况，将用户的请求路由到最近的服务器上，这样用户可以更快速地获取所需的内容。这种方式可以加速网站的加载速度，减少网络延迟，同时减轻原始服务器的负载，提高整体的用户体验。
        在DNS中，当本地DNS服务器没有找到网址对应的IP地址时，它会向根域名服务器请求解析，然后依次向顶级域名服务器和次级域名服务器查询，最终获得网址对应的IP地址并返回给用户。而在CDN中，当用户访问网站时，CDN会根据用户位置和服务器负载情况，选择最合适的服务器来提供网站内容，从而加速内容传输。
        综上所述，CDN通过缓存和就近提供内容的方式，优化了网站内容的传输，而DNS则负责将用户输入的网址解析为对应的IP地址，二者共同协作，使用户能快速、高效地访问网站内容，提升了整体的用户体验。
      `},{title:"性能优化 --- 8. CDN的使用场景",content:`
        CDN（内容分发网络）在实际应用中有着多种场景：
        网站加速：通过将静态资源如图片、视频、样式表等放在CDN上，用户可以从距离更近的CDN服务器获取这些资源，从而加快网页加载速度，改善用户体验。
        流媒体分发：CDN可用于快速、可靠地传输视频、音频等大型媒体文件到全球各地的用户设备，确保用户可以流畅观看视频、听取音频。
        软件分发：对于大型软件或游戏的发布与更新，CDN能够快速地将软件分发到全球各地的用户，减少下载时间，加快软件更新的部署。
        API请求加速：对于需要频繁请求后端API的网站和应用程序，CDN能够加速API的响应时间，提高系统的稳定性和性能。
        跨地区网络优化：对于跨地区的企业、服务提供商等，CDN能够优化全球网络传输，提高数据传输效率，降低网络延迟，改善数据传输质量。
        此外，还有其他使用场景，例如：
        第三方CDN服务：开发者可以使用第三方CDN服务来加速其开源项目的网络传输和加载速度。
        直播传送：CDN也支持直播传送，通过在全球范围内部署服务器来提高访问速度，确保用户可以流畅观看直播内容。
        `}],Ce=[{title:"公共 --- 1.时间复杂度和空间复杂度",content:`
        时间复杂度是指执行这个算法所需要的计算工作量； 而空间复杂度是指执行这个算法所需要的内存空间。
        时间复杂度的话像常见的常数就是O(1)，比如直接访问对象的属性或者数组的元素或者返回函数固定值之类的，然后对数就是O(log n)的话比较典型的就二分查找然后就是O(n)、O(n^2)平方、就是一层循环和嵌套循环。
        空间复杂度的话像常见的常数就是O(1)，比如交换两个变量的值或者数组反转之类的不需要额外的空间，然后对数就是O(log n)的话比较典型的就二分查找每次迭代中只需要存储几个变量这种，然后就是O(n)、O(n^2)平方、就比如创建一个那个元素的数组，平方就是二维数组就是矩阵嘛
        `},{title:"公共 --- 2.前端数据库indexdb",content:`
        1.键值对存储。IndexedDB内部采用对象仓库（Object Store）存放数据，所有类型的数据都可以直接存入，包括JavaScript对象。在对象仓库中，数据以键值对的形式保存，每一个数据记录都有对应的主键，且主键是唯一的，不可重复，否则会抛出错误。
        2.异步。IndexedDB在操作时不会锁死浏览器（异步线程，不会挂起其他线程），用户依然可以可以进行其他操作。这与LocalStorage形成对比，后者的操作是同步的（会挂起其他线程）。异步设计是为了防止读写大量数据的时候拖慢网页的表现性能。
        3.支持事务。IndexedDB是支持事务（Transaction）的，也同样支持事务的ACID特性。这意味着在一系列的操作步骤中，只要有一步失败，整个事务就会取消，数据库将回滚到事务发生之前的状态，不存在只改写一部分数据的情况，保证数据的完整性和一致性。
        4.同源限制。IndexedDB受浏览器同源策略的限制，每一个数据库都严格对应创建它的域名。网页只能访问自身域名下面的数据库，而不能访问跨域的数据库。
        5.存储空间大。IndexedDB的存储空间比LocalStorage大得多，一般来说不小于250MB，甚至没有上限。
        6.支持二进制存储。IndexedDB不仅可以存储字符串，还可以存储二进制数据（ArrayBuffer对象和Blob对象）。
        `},{title:"公共 --- 3.什么是websocket",content:`
        WebSocket用于在Web浏览器和服务器之间进行任意的双向数据传输的一种技术。WebSocket协议基于TCP协议实现，包含初始的握手过程，以及后续的多次数据帧双向传输过程。其目的是在WebSocket应用和WebSocket服务器进行频繁双向通信时，可以使服务器避免打开多个HTTP连接进行工作来节约资源，提高了工作效率和资源利用率
        `},{title:"公共 --- 4.websocket有哪些特点",content:`
        与http协议有良好的兼容性；
        建立在TCP协议之上，和http协议同属于应用层；
        数据格式比较轻量，性能开销小，通信高效；
        可以发送文本，也可以发送二进制；
        没有同源限制，可以与任意服务器通信。
        `},{title:"公共 --- 5.http和websocket的区别",content:`
        http协议是短链接，因为请求之后，都会关闭连接，下次请求需要重新打开链接。 websocket协议是一种长连接，只需要通过一次请求来初始化连接，然后所有请求和响应都是通过TCP链接进行通信。
        `},{title:"公共 --- 6.WebSocket中的常用注解有哪些",content:`
        @ServerEndpoint ：类似与servlet中的 RequestMapping
        @OnOpen：类似与servlet中的 init（）初始化
        @OnClose：类似与servlet中的destroy() 销毁
        @OnMessage：类似于servlet中的service请求 （意思就是发送数据的方式 @doPost() / @doGet() 组合）
        `}],xe=[...Se,...ve,...pe,...fe,...Me,...be,...he,...ye,...ge,...me,...Ce];function Ve(){return n.jsx(v,{arr:xe})}const ke=[{title:"Java基础 --- 1、变量的作用域",content:`
     局部变量：在方法、构造器或者块语句中定义的变量，其作用域仅限于该方法、构造器或块内部。
     类变量（静态变量）：用static修饰的变量，属于类级别，只有一份存储空间，所有类的实例共享这个变量。
     实例变量（成员变量）：在类中定义，但不在任何方法内的变量，每个类实例都有自己的一份拷贝。
      `},{title:"Java基础 --- 2、变量的生命周期",content:`
      - 局部变量：随着方法调用结束而销毁。
      - 实例变量：随着对象的创建而存在，随着对象变为垃圾而被回收。
      - 类变量（静态变量）：当类被加载时初始化，直到类被卸载才会消失。
      `},{title:"Java基础 --- 3、 变量的初始化",content:`
      - 局部变量必须初始化才能使用，否则编译器会报错。
      - 实例变量和类变量（静态变量）则不需要在声明时初始化，它们会被赋予默认值（如0、null、false等），但在使用前最好显式初始化。
      `},{title:"Java基础 --- 4、数据类型分类",content:`
      1、基本数据类型：包括整型（byte, short, int, long）、浮点型（float, double）、字符型（char）、布尔型（boolean）。
      2、引用数据类型：包括类（Class）、接口（Interface）、数组（Array）。
      `},{title:"Java基础 --- 5、基本数据类型的大小、取值范围以及默认值 ",content:`
       - byte：8位，-128~127，默认值为0。
       - short：16位，-32768~32767，默认值为0。
       - int：32位，-2^31~2^31-1，默认值为0。
       - long：64位，-2^63~2^63-1，默认值为0L。
       - float：32位单精度浮点数，默认值为0.0f。
       - double：64位双精度浮点数，默认值为0.0d。
       - char：16位Unicode字符，\0~￿，默认值为'\0'。
       - boolean：表示逻辑值，只有true和false两个值，默认值为false。
      `},{title:"Java基础 --- 6、 面向对象",content:`
      1. 封装
         封装是指将对象的状态（属性）和行为（方法）封装在一起，对外部隐藏对象的内部实现细节，只暴露必要的接口供外部访问。这样可以提高代码的安全性和可靠性，同时简化外部调用者与对象之间的交互，降低耦合度。

      2. 继承
         继承是指一个类（子类）可以继承另一个类（父类）的属性和方法，子类可以重用父类的代码并且可以在其基础上进行扩展和修改。通过继承，可以实现代码的复用，提高代码的可维护性和可扩展性。

      3. 多态
         多态是指同一个方法可以根据调用者的不同而表现出不同的行为。在面向对象编程中，多态可以通过继承和接口实现，使得不同类的对象可以以统一的方式进行操作，提高了代码的灵活性和可扩展性。
      `},{title:"Java基础 --- 7、 抽象类和接口的区别与联系",content:`
      抽象类（Abstract Class）：
      抽象类是Java中一种不能被实例化的类，使用'abstract'关键字进行声明。抽象类可以包含抽象方法（只有方法签名没有方法体的方法）和非抽象方法（具有具体实现的方法）。抽象类的主要目的是为了被其他类继承，它的子类必须实现抽象类中所有的抽象方法。抽象类可以包含变量（实例变量或静态变量）和构造方法，可以为子类提供共性方法的实现。

      接口（Interface）：
      接口同样不能被实例化，它代表一种契约，定义了一组方法签名，所有实现该接口的类都必须提供这些方法的实现。在Java 8之前，接口中的方法默认都是抽象的，不提供实现。Java 8及以后版本中，接口还可以包含默认方法（default methods）和静态方法，这两种方法都有具体的实现。接口中的变量默认是静态和最终的（static final），即常量。

      区别：

      1. 抽象类可以有构造方法，而接口不能有构造方法。
      2. 抽象类中可以有非抽象方法（即具体实现的方法），而接口中只能有抽象方法（在Java 8之前）。
      3. 一个类只能继承一个抽象类，但可以实现多个接口（Java 8之前）。Java 8引入了多重继承的功能，接口可以继承其他接口，一个类也可以通过实现多个接口来间接实现多重继承的效果。
      4. 抽象类可以包含实例变量，而接口中的变量默认是静态的、最终的常量。
      5. 抽象类允许使用protected、public、private访问修饰符来控制成员的可见性，而接口中的成员默认为public，从Java 9开始，接口中也可以使用private方法。

      联系：

      1. 抽象类和接口都是为了实现代码复用和面向对象设计原则中的多态性。
      2. 抽象类和接口都可以包含抽象方法，要求子类或实现类去实现这些方法。
      3. 在设计层面，抽象类通常用于定义一个类族的共性，而接口强调的是实现类之间的共同行为或责任。
      `},{title:"Java基础 --- 8、 如何选择使用抽象类还是接口",content:`
      场景示例：
      假如你要设计一个图形处理软件，其中包含圆形、矩形等各种形状。所有形状都有颜色、绘制、尺寸等共性特征，但绘制方法的具体实现各不相同。这时，你可以定义一个抽象类'Shape'，包含共性的成员变量和方法，如'getColor()'、'setDimension()'等，而绘制方法'draw()'则声明为抽象方法。各个具体的形状类如'Circle'、'Rectangle'等继承'Shape'并实现'draw()'方法。

      另一种情况，如果图形软件需要新增一个可拖拽功能，该功能不是所有形状都必须具备的，而是部分形状可以选择实现的附加功能。此时，你可以定义一个'Draggable'接口，包含'startDragging()'、'drag()'和'stopDragging()'方法。然后，那些需要实现拖拽功能的形状类（如'Circle'、'Rectangle'等）可以选择实现'Draggable'接口，提供拖拽功能的实现。
      `},{title:"Java基础 --- 9、 什么是Java内部类？为什么我们需要使用内部类？",content:`
      内部类是在一个类的内部定义的类，它可以访问外部类的所有成员（包括私有成员）。内部类提供了更好的封装性和更强的关联性，使得我们可以将一些逻辑相关的类组织在一起，同时可以根据需要隐藏内部类的实现细节，提高代码的内聚性。
      `},{title:"Java基础 --- 10、 内部类有哪些种类",content:`
      - 在Java中，内部类主要有以下几种类型：
     - 成员内部类（Member Inner Class）：定义在外部类的成员位置上，可以访问外部类的所有成员。
     - 静态内部类（Static Nested Class）：使用static关键字修饰的内部类，不需要外部类实例就可以创建对象，不能直接访问外部类的非静态成员。
     - 局部内部类（Local Inner Class）：定义在方法、代码块或者构造器内部的类，只在其所在作用域有效。
     - 匿名内部类（Anonymous Inner Class）：没有名字的内部类，一般用来简化单例实现或者事件监听器等场景下的代码。
      `},{title:"Java基础 --- 11、枚举有哪些特点 ",content:`
       - 枚举类型在编译时就确定了所有可能的值，提供了类型安全。
       - 枚举类型天然地实现了Comparable接口和Serializable接口。
       - 枚举类型可以拥有方法和变量，可以实现接口。
       - 枚举类型的所有实例都在第一次加载时创建，因此它们是单例的。
      `},{title:"Java基础 --- 12、 异常处理机制",content:`
      Java异常处理机制是Java提供的一种错误处理机制，它通过try、catch、finally和throw等关键字来处理程序运行过程中可能出现的错误情况。当程序运行时发生异常，异常处理机制可以捕获并处理这些错误，从而确保程序的健壮性和稳定性。
      `},{title:"Java基础 --- 13、异常类层次结构",content:`
      Java中的所有异常类都继承自java.lang.Throwable类，Throwable有两个直接子类：Error和Exception。Error类通常指Java虚拟机自身无法处理的严重错误，如系统崩溃、虚拟机错误等。Exception类则包含了程序运行时可以捕获和处理的异常，它又分为两大类：Checked Exception（受检异常）和Unchecked Exception（非受检异常，也称为运行时异常），受检异常需要在方法签名中通过throws声明或在方法内部捕获处理，非受检异常则可以在运行时被捕获处理，但不是必须的。
      `},{title:"Java基础 --- 14、 throw和throws关键字的区别",content:`
        - throw：关键字用于在方法体内部手动抛出一个异常对象，中断当前方法的执行流程。
        - throws：关键字用于声明方法可能抛出的异常列表，这些异常需要由方法的调用者来处理。在方法声明后面跟上throws关键字和异常列表。
      `},{title:"Java基础 --- 15、 字节流与字符流的区别",content:`
      1、字节流（Byte Stream）：操作的基本单元是字节（8位），如InputStream和OutputStream家族，主要用于处理二进制数据，如图像、音频、视频等非文本文件。
      2、字符流（Character Stream）：操作的基本单元是字符（通常是16位的Unicode字符），如Reader和Writer家族，主要用于处理文本数据，它会自动处理字符编码转换，如从字节流中读取数据并解码为字符。
      `},{title:"Java基础 --- 16、缓冲流的作用",content:`
      缓冲流是对原始流的包装，它增加了缓冲功能，可以一次性读取或写入多个字节或字符，减少系统I/O操作次数，提高数据读写效率。例如，BufferedReader和BufferedWriter是针对字符流的缓冲，而BufferedInputStream和BufferedOutputStream是针对字节流的缓冲。
      `},{title:"Java基础 --- 17、文件操作常见类",content:`
      1、File类：用于表示文件和目录路径，可以进行文件或目录的创建、删除、重命名等操作。
      2、FileReader和FileWriter：用于读写文件内容，它们是字符流，内部会隐含使用FileInputStream和FileOutputStream。
      3、FileInputStream和FileOutputStream：用于读写文件的字节流。
      `},{title:"Java基础 --- 18、NIO（New I/O）体系",content:`
      1、通道（Channel）：是NIO的核心组件，用于在应用程序和操作系统之间高效地传输数据。它可以从文件、网络连接等来源获取数据，也可以向这些目标发送数据。
      2、缓冲区（Buffer）：是NIO用来存储和管理数据的地方，它在内存中开辟一片区域，提供了数据的读写功能，相比于传统I/O的每次读写一个字节或字符，NIO的缓冲区可以批量读写数据，从而提高效率。
      3、选择器（Selector）：在NIO中，选择器用于检测一个或多个通道的状态变化，如是否准备好进行读写操作。它使得单个线程可以监控多个通道，从而实现多路复用，减少线程上下文切换的开销。
      `},{title:"Java基础 --- 19、动态代理？",content:`
      Java动态代理是一种在运行时创建代理类的技术，无需在编译期就确定代理类。通过Java反射包中的Proxy类和InvocationHandler接口实现。动态代理可以在运行时动态地创建一个实现了一组给定接口的新类，这个新类的行为可以由InvocationHandler的invoke方法来定义，以便在方法调用前后添加额外的操作，如权限校验、日志记录、事务处理等。
      `},{title:"Java基础 --- 20、动态代理的工作原理",content:`
      Java动态代理的工作原理主要包括两部分：
       - Proxy类：Java标准库提供，通过调用其newProxyInstance方法创建代理对象，需要传入ClassLoader、目标类实现的接口数组以及InvocationHandler对象。
       - InvocationHandler接口：自定义实现，它有一个invoke方法，当我们通过代理对象调用方法时，实际上会调用到此invoke方法。在invoke方法内部，可以决定如何调用实际的目标对象的方法，以及在调用前后添加额外的操作。
      `},{title:"Java基础 --- 21、Java动态代理与CGLIB代理的区别",content:`
      Java动态代理基于Java反射API实现，只能对接口进行代理。而CGLIB（Code Generation Library）代理则通过字节码底层技术生成一个继承自目标类的子类来实现代理，因此CGLIB不仅能够代理接口，还可以代理没有实现接口的类。不过，CGLIB需要第三方库支持，并且由于是通过继承的方式进行代理，所以如果目标类是final类或含有final方法，CGLIB将无法进行代理。
      `},{title:"Java基础 --- 22、注解的生命周期",content:`
      Java注解的生命周期由@Retention元注解决定，包括以下三种策略：

       - RetentionPolicy.SOURCE：注解只保留在源代码中，编译器处理后丢弃，不在class文件中保存。
       - RetentionPolicy.CLASS：默认策略，注解保留在class文件中，但在运行时无法访问到。
       - RetentionPolicy.RUNTIME：注解不仅保留在class文件中，而且能在运行时通过反射API读取到。
      `},{title:"Java基础 --- 23、 反射API的主要用途",content:`
       - 动态类加载：根据字符串类名加载相应的Class对象。
       - 获取类信息：获取类的属性、方法、构造器、接口等信息，包括访问私有成员和受保护成员。
       - 创建对象实例：即使没有明确的类引用，也能通过反射创建对象。
       - 方法调用：在运行时调用对象的任意方法，不受编译期限制。
       - 修改对象属性：可以动态地设置或获取对象的属性值，即使属性是私有的。
       - 检查类兼容性：在运行时判断类是否实现了特定接口或继承了某个类。
       - 实现通用代理、框架设计、序列化反序列化、动态编译等高级功能。
      `},{title:"Java基础 --- 24、什么是Java反射API？",content:`
      Java反射API是Java运行时环境提供的内省机制，允许运行中的Java程序对自身或者其他类的结构进行访问和操作，包括获取类的信息（如类名、属性、方法等）、创建对象实例、调用方法、改变字段值等。这种能力使得Java程序能够在运行时动态地发现和操作类及对象的元数据，增强了程序的灵活性和适应性。
      `},{title:"Java基础 --- 25、 反射API有什么潜在的风险或注意事项？",content:`
      - 安全性：反射绕过了正常的访问控制检查，可能导致安全漏洞，例如未经授权访问私有数据或执行私有方法。
   - 性能开销：反射操作比直接的静态方法调用慢很多，因为它涉及到查找和解析类、方法、字段等额外的操作，频繁或不必要的反射调用可能会导致性能下降。
   - 强制转换问题：反射调用可能需要进行强制类型转换，如果不小心可能会抛出ClassCastException异常。
   - 稳定性：过度依赖反射可能会降低代码的稳定性，因为如果类的结构发生变化，而反射代码未及时更新，则可能导致运行时错误。
      `},{title:"Java基础 --- 26、 new Integer(123) 与 Integer.valueOf(123) 的区别",content:`
      new Integer(123) 每次都会新建一个对象
      Integer.valueOf(123)  会使用缓存池中的对象，多次调用会取得同一个对象的引用。
      在 Java 8 中，Integer 缓存池的大小默认为 -128~127。
      `},{title:"Java基础 --- 27、String 为什么不可变？",content:`
       1  可以缓存 hash 值
      因为 String 的 hash 值经常被使用，例如 String 用做 HashMap 的 key。不可变的特性可以使得 hash 值也不可变，因此只需要进行一次计算。

      2 String Pool 的需要
      如果一个 String 对象已经被创建过了，那么就会从 String Pool 中取得引用。只有 String 是不可变的，才可能使用 String Pool。

      3 安全性
      String 经常作为参数，String 不可变性可以保证参数不可变。例如在作为网络连接参数的情况下如果 String 是可变的，那么在网络连接过程中，String 被改变，改变 String 对象的那一方以为现在连接的是其它主机，而实际情况却不一定是。

      4  线程安全
      String 不可变性天生具备线程安全，可以在多个线程中安全地使用。
      `}],Je=[{title:"集合框架 --- 1、 问题：ArrayList ?",content:` 
          ArrayList是Java中的一种动态数组，它实现了List接口，允许我们存储和操作可变大小的数组。
          ArrayList中的元素是有序的，并且可以包含重复的元素。
          它允许我们通过索引访问元素，增长量可以通过构造函数指定或者默认自动增长。
           `},{title:"集合框架 --- 2、 问题：ArrayList的特点",content:` 
          1、动态扩容：当添加的元素超过当前容量时，ArrayList会自动扩容，一般扩容为原来的1.5倍。
          2、索引访问：提供了类似数组的索引访问方式，时间复杂度为O(1)。
          3、不保证线程安全：在多线程环境下进行读写操作可能会导致数据不一致或抛出异常，
          如果需要线程安全，可以使用Collections.synchronizedList()方法包装得到线程安全的ArrayList。
          4、元素增删：在列表中间插入或删除元素，除了被删除元素之外的所有元素都需要移动，
          所以插入和删除元素的时间复杂度为O(n)。
           `},{title:"集合框架 --- 3、 问题：ArrayList与LinkedList的区别",content:` 
          1、ArrayList是实现了基于动态数组的数据结构，而LinkedList是基于双向链表的数据结构；
          2、对于随机访问get和set，ArrayList要优于LinkedList，因为LinkedList要移动指针；
          3、对于添加和删除操作add和remove，一般大家都会说LinkedList要比ArrayList快，
          因为ArrayList要移动数据，但是实际情况可能会有差异。
          4、综上所述，在需要频繁读取集合中的元素时，使用ArrayList效率较高，而在插入和删除操作较多时，使用LinkedList效率较高。
           `},{title:"集合框架 --- 4、 问题：如果你有一个很大的ArrayList，如何高效的从中查找一个元素？",content:` 
          	可以使用contains()方法，但其时间复杂度为O(n)，如果对查找效率有较高要求，可以考虑使用HashSet或TreeSet等集合类，它们的查找速度通常更快。
           `},{title:"集合框架 --- 5、 问题：ArrayList扩容",content:` 
          当ArrayList的size超过当前容量时，它会创建一个新的数组，新数组的容量是原数组的1.5倍加上1，然后将所有元素复制到新的数组中，最后将新元素添加到新数组的末尾。
           `},{title:"集合框架 --- 6、 问题：ArrayList线程安全吗",content:` 
          	不是线程安全的， 可以使用锁来解决线程安全问题(Collections.synchronizedList)

            问：使用锁效率不高哦，有其他方法吗？
            答：可以使用CopyOnWriteArrayList
            原理：
            1、CopyOnWriteArrayList内部也是用数组实现的，在向CopyOnWriteArrayList添加元素时，会复制一个新的数组，写操作在新数组上进行，读操作在原数组上进行。并且写操作会加锁，防止出现并发写入丢失数据的问题。
            2、写操作结束之后会把原数组指向新数组
            3、CopyOnWriteArrayList允许在写操作时来读取数据，大大提高了读的性能，因此适合读多写少的应用场景，但是CopyOnWriteArrayList会比较占内存，同时可能读到的数据不是实时最新的数据，所以不适合实时性要求很高的场景。
           `},{title:"集合框架 --- 7、 问题： 为什么ArrayList的add()方法是O(1)时间复杂度，但在实际操作中可能达到O(n)？",content:` 
           ArrayList的add(E e)方法在大多数情况下时间复杂度确实是O(1)，因为它只是简单地将元素追加到现有数组的末尾。然而，如果添加元素后，ArrayList的实际大小超过了其当前容量，那么就需要扩容并重新分配内存空间，这个过程涉及到了数组元素的复制，因此此时的时间复杂度变为O(n)。
           `},{title:"集合框架 --- 8、 问题： 如何确定ArrayList的初始容量以及何时扩容？",content:` 
           创建ArrayList时，如果不指定初始容量，默认大小是10。
           当ArrayList的实际大小（即已添加元素的数量）超过其当前容量时，就会触发扩容机制，新的容量通常是原始容量的1.5倍加1，具体扩容规则由grow()方法实现。
           `},{title:"集合框架 --- 9、 问题： ArrayList添加删除过程",content:` 
          插入元素：
          在ArrayList的任意位置插入元素时，首先会检查是否需要扩容，如果不需要扩容，
          则将插入点之后的所有元素都向后移动一位，然后在插入点插入新元素。
          删除元素：
          在ArrayList中删除一个元素时，同样需要将该元素之后的所有元素都向前移动一位以填补空位，然后更新size属性。
           `},{title:"集合框架 --- 10、 问题： ArrayList能否存储null值？为什么？",content:` 
           ArrayList可以存储null值，这是因为在Java中，ArrayList的实现允许任何类型的对象包括null作为元素存储。
           但是，在处理ArrayList时，需要特别注意对null值的操作，避免引发NullPointerException。
           `},{title:"集合框架 --- 11、 问题： 请描述下ArrayList的toArray()方法的作用及其重载版本的区别。",content:` 
           toArray()方法用于将ArrayList转换成Object数组形式。
           它有两个重载版本：
           toArray(): 返回一个新分配的对象数组，长度等于ArrayList的大小，类型为Object[]。
           toArray(T[] a)：若传入的数组a足够大，将ArrayList中的元素复制到a中，并返回a；若a不够大，将创建一个和ArrayList大小相同的具有相同类型的新数组，并将ArrayList的元素复制进去，再返回新数组。如果知道ArrayList的具体元素类型，使用后者可以减少不必要的类型转换。
           `},{title:"集合框架 --- 12、 问题： ArrayList、LinkedList、Vector的区别",content:` 
           1、实现原理：ArrayList、Vector 基于数组，LinkedList 基于双向链表
           2、安全性： LinkedList 方法同步的  ArrayList、LinkedList 方法不同步
           3、查询效率：ArrayList、Vector 基于索引，查询效率高  但是增加会导致扩容问题 所以添加效率低   
           `},{title:"集合框架 --- 13、 问题： 什么是HashMap？它是如何工作的？",content:` 
           HashMap是Java中的一个实现Map接口的数据结构，它使用哈希表存储键值对。
           工作原理是利用键对象的哈希码（hashCode）经过某种运算，转化为数组索引，将键值对存储在数组对应的位置上。如果发生冲突（两个不同的键映射到同一数组索引），则采用链地址法解决，即数组的每个槽位是一个链表或红黑树（JDK 1.8之后引入优化）。
           `},{title:"集合框架 --- 14、 问题： HashMap的初始容量和加载因子是什么，它们如何影响性能？",content:` 
          1、初始容量：HashMap创建时的内部数组大小，默认是16，可以通过构造函数设置初始容量。
          2、加载因子：决定了HashMap何时需要调整容量，它是用来衡量HashMap满的程度的一个阈值，默认是0.75。
          当HashMap中的条目数超过容量与加载因子的乘积时，将会自动扩容至原来容量的两倍，并重新哈希所有元素，
          这一过程会影响性能。HashMap的大小只能是2次幂的，假设你传一个10进去，实际上最终HashMap的大小是16，
          你传一个7进去，HashMap最终的大小是8，具体的实现在tableSizeFor可以看到。
           `},{title:"集合框架 --- 15、 问题： HashMap在什么情况下会发生哈希冲突，如何解决冲突？",content:` 
           当两个不同键经过哈希函数计算后得出相同的索引值时，会发生哈希冲突。
           HashMap通过链地址法解决冲突，即将冲突的元素放在同一个桶中形成链表。

           在JDK 1.8以后，当链表长度超过8时，链表会转换为红黑树，进一步优化查找、插入和删除操作的性能。
           `},{title:"集合框架 --- 16、 问题： HashMap如何实现扩容，扩容过程是怎样的？",content:` 
           当HashMap的条目数量超过阈值（容量 * 加载因子）时，会触发扩容操作。
           扩容会创建一个新的、容量更大的哈希表，然后将旧表中的所有元素重新计算哈希值并放入新表中，
           这个过程中涉及到元素的迁移，所以是比较耗时的操作。
           `},{title:"集合框架 --- 17、 问题： HashMap在高并发环境下可能出现什么问题，如何解决？",content:` 
           在高并发环境下，由于HashMap非线程安全，可能会出现数据不一致、死循环等问题。
           解决方案是在并发环境下使用线程安全的ConcurrentHashMap，或者在外部做好同步控制。

           对于仅读操作较多的情况，也可以通过Collections.synchronizedMap()方法获得线程安全的HashMap视图。
           `},{title:"集合框架 --- 18、 问题： HashMap的put 和get方法",content:` 
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
           `},{title:"集合框架 --- 19、 问题： 如果一个类的实例用作HashMap的键，应该如何正确覆盖equals()和hashCode()方法？",content:` 
           要确保在HashMap中键的行为正确无误，应该同时重写equals()和hashCode()方法。
           这两个方法必须遵循以下原则：
           1、相等性：如果两个对象通过equals()方法判断为相等（即equals()返回true），那么它们必须具有相同的哈希码（即hashCode()方法返回的结果相等）。
           2、哈希不变性：一旦对象创建完成，其hashCode()返回的值在整个生命周期内应当保持不变，即使对象的其他状态发生变化也不应影响其哈希码。
           3、分布均匀：理想情况下，hashCode()应尽量分散对象的分布，降低哈希冲突的概率。
           `},{title:"集合框架 --- 20、 问题： 请解释一下HashMap的resize()方法以及在什么时候会被调用？",content:` 
           resize()方法在HashMap中负责扩容操作，当HashMap的大小（size）超过阈值（threshold，即容量 * 加载因子）时会被调用。
           扩容会创建一个新的更大容量的数组，并将原有数组中的所有Entry重新映射到新数组中，这个过程也伴随着rehash操作。
           `},{title:"集合框架 --- 21、 问题： 为什么HashMap的大小永远是2的幂次方？",content:` 
           HashMap之所以选择2的幂作为容量是为了方便进行索引计算。通过“&(按位与)”操作符与容量-1进行计算可以快速找到元素在数组中的位置，如果容量是2的幂，那么容量-1的二进制表示就是一串连续的1，这样“hash & (容量-1)”就等同于对hash值做一次模运算，而且速度更快。
           `},{title:"集合框架 --- 22、 问题： 在多线程环境下，如果多个线程同时put元素到HashMap中，可能导致什么问题，如何避免？",content:` 
           在多线程环境下，如果不加同步控制，多个线程同时对HashMap进行put操作可能会导致数据不一致，
           例如丢失更新、死循环等问题。为了避免这些问题，可以使用线程安全的ConcurrentHashMap替代HashMap，
           它内部采用了分段锁机制来提高并发性能。如果坚持使用HashMap，需要在外部自行添加适当的同步控制代码。
           `},{title:"集合框架 --- 23、 问题：那在HashMap中是怎么判断一个元素是否相同的呢？",content:` 
          1、首先会比较hash值，随后会用 == 运算符和 equals() 来判断该元素是否相同。
          2、说白了就是：如果只有hash值相同，那说明该元素哈希冲突了，如果hash值和equals() || == 都相同，那说明该元素是同一个。  
           `},{title:"集合框架 --- 24、 问题：你说HashMap的数据结构是数组+链表/红黑树，那什么情况拿下才会用到红黑树呢？",content:` 
          1、数组的大小大于64且链表的大小大于8的时候才会将链表改为红黑树，当红黑树大小为6时，会退化为链表。
          2、这里转红黑树退化为链表的操作主要出于查询和插入时对性能的考量。
          3、链表查询时间复杂度O(N)，插入时间复杂度O(1)，红黑树查询和插入时间复杂度O(logN)
           `},{title:"集合框架 --- 25、 问题：ConcurrentHashMap数据结构",content:` 
          1、JDK 1.7:
          ConcurrentHashMap 使用Segment数组配合HashEntry数组和链表的形式实现，
          Segment继承了ReentrantLock，可以理解为将整个Map分割成多个小的哈希表（Segment），
          每个Segment独立负责一部分数据的读写锁操作，以此实现并发控制。  
          2、JDK 1.8: 取消了Segment分段锁的设计，改为使用CAS + synchronized来保证并发操作的安全性。
          数据结构变为数组+链表/红黑树的形式，与HashMap相似，但是针对并发操作做了很多优化，
          如使用尾部节点自旋+CAS的方式来减少锁的竞争。
           `},{title:"集合框架 --- 26、 问题：ConcurrentHashMap 如何实现线程安全？",content:` 
          1、JDK 1.7: 通过Segment分段锁，同一时刻多个线程可以在不同Segment上进行写操作，只有涉及同一个Segment时才需要加锁。
          2、JDK 1.8: 使用了CAS（Compare and Swap）原子操作来保证并发增删改查的安全性，针对某些操作如扩容等，仍然可能使用synchronized进行同步。另外，读操作在大多数情况下是无锁的。
           `},{title:"集合框架 --- 27、 问题：ConcurrentHashMap 在迭代时如何处理并发修改异常？",content:` 
          ConcurrentHashMap 提供了弱一致性的迭代器（弱一致性迭代器不会抛出ConcurrentModificationException），在迭代期间允许其他线程对映射进行修改，但迭代器只能看到修改前的映射或者是修改后的映射，不能保证实时可见性。
           `},{title:"集合框架 --- 28、 问题：ConcurrentHashMap 初始化和扩容的过程是怎样的？",content:` 
          1、初始化时会根据预设的初始容量和负载因子计算实际容量（初始容量为16，加载因子为0.75），并分配合适的数组大小。
          2、扩容时，新的容量通常为原来的两倍，利用迁移算法将旧数组中的元素迁移到新的数组中，
          这个过程同样是线程安全的，尤其是在JDK 1.8中，使用了重新散列和分裂链表/红黑树的方式。
           `},{title:"集合框架 --- 29、 问题：为什么从JDK1.8开始，ConcurrentHashMap放弃了Segment设计而转向了CAS+Synchronized？",content:` 
          1、主要原因是简化了数据结构，降低了内存开销，提高了并发效率。
          2、Segment设计虽然能够细粒度地控制锁，但是在高并发场景下，由于锁的数量固定，容易造成热点问题。
          3、而使用CAS+Synchronized结合，能更好地适应动态变化的并发需求，同时减少锁竞争。
           `},{title:"集合框架 --- 30、 问题： 为何 ConcurrentHashMap 不支持 null 键和值？",content:` 
          	考虑到并发环境下的安全性，ConcurrentHashMap规定了键和值都不能为null，因为null作为特殊的标识符，
            如果允许作为键或值，会在并发操作时带来判断困难和潜在的问题。
           `},{title:"集合框架 --- 31、 问题：ConcurrentHashMap 在高并发场景下相比其他集合类有哪些优势？",content:` 
          	具备优秀的并发性能，通过锁分离、CAS操作等方式减少了锁竞争，使得在多线程环境下读写操作更为高效，几乎无需担心线程安全问题。
           `},{title:"集合框架 --- 32、 问题：什么是 ConcurrentHashMap 的 CAS 操作？举例说明其在 put 操作中的应用。",content:` 
          1、CAS（Compare and Set/Compare and Swap）是一种无锁算法，它会在修改共享变量时先检查该变量是否为预期值，如果是，则更新其值；如果不是，则不做任何修改。
          2、在 ConcurrentHashMap 的put操作中，例如，当向某个桶位置插入新节点时，会使用CAS操作来尝试将新节点设置为桶的头节点，如果在此过程中桶头发生了变化（被其他线程修改过），则CAS操作会失败，当前线程会重试直到成功。
           `},{title:"集合框架 --- 33、 问题：ConcurrentHashMap 在并发环境下如何避免无限循环的重试？",content:` 
          1、在 ConcurrentHashMap 的resize（扩容）和putVal等操作中，为了避免因并发导致的无限循环重试，采用了一些策略：
          2、使用自旋+CAS的方式，设定一定的自旋次数限制，超过限制则暂停，让出CPU资源给其他线程，待下次获取CPU时间片后再继续尝试。
          3、在扩容过程中，迁移操作并非一次性完成所有桶的数据迁移，而是采用分散迁移的方式，每次只迁移一部分，降低并发冲突的可能性。
           `},{title:"集合框架 --- 34、 问题：请描述一下 ConcurrentHashMap 的 resize 过程以及涉及到的并发问题和解决方案。",content:` 
          1、当ConcurrentHashMap的元素数量达到阈值时，会触发resize操作，即将容量扩大一倍。在这个过程中，原数组中的元素需要被移动到新的更大的数组中去。
          2、并发问题主要包括：    
          - 在扩容过程中，新的元素仍可能被添加到旧数组中，需要有一种机制将其正确地移动到新数组中。    
          - 多个线程同时参与扩容，可能导致元素重复迁移或者遗漏。
          3、解决方案：    
          - 使用辅助变量forwardingNode标记正在进行扩容的桶，新插入的元素会帮助迁移。    
          - 对于正在迁移的桶，其他线程在尝试插入时也会参与到迁移工作，共同完成扩容任务。
           `},{title:"集合框架 --- 35、 问题：ConcurrentHashMap 是否保证线程间的操作可见性？",content:` 
          是的，
          ConcurrentHashMap通过volatile关键字保证了线程间的操作可见性。
          例如，table引用以及节点的next引用都是volatile类型，这使得当一个线程修改了map的内容后，其他线程可以立即看到这个修改。
           `},{title:"集合框架 --- 36、 问题：说说 ConcurrentHashMap 和 Collections.synchronizedMap(Map<K, V> m) 方法返回的同步Map有何区别？",content:` 
          1、Collections.synchronizedMap() 返回的同步Map是对传入的Map进行包装，其所有方法都被synchronized关键字修饰，
          因此每次只有一个线程能执行操作，实现了线程安全，但牺牲了并发性能。
          2、而ConcurrentHashMap通过更精细的锁机制（如JDK 1.8中的CAS和synchronized块），允许在大部分操作上做到更高的并发性能，更适合高并发场景。
           `},{title:"集合框架 --- 37、 问题：ConcurrentHashMap 中为什么采用尾部节点自旋+CAS的方式来减少锁的竞争？",content:` 
           在JDK 1.8版本中，ConcurrentHashMap在插入和删除操作时，首先定位到链表或红黑树的尾部节点，然后通过自旋+CAS的方式尝试更新尾部节点。
           这是因为头部节点往往是最活跃的部分，如果每次都试图获取头部节点的锁，会造成严重的锁竞争。而尾部节点相对稳定，通过这种方式可以大幅减少锁竞争，提高并发效率。
           `},{title:"集合框架 --- 38、 问题：集合框架中四种Map实现类在数据结构上的对比",content:` 
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
           `},{title:"集合框架 --- 39、 问题：HashMap与Hashtable区别",content:` 
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
           `},{title:"集合框架 --- 40、 问题：HashMap与LinkedHashMap区别",content:` 
          HashMap和LinkedHashMap都是Java集合框架中的Map接口实现类，它们之间主要存在以下区别：1. 有序性：   - HashMap是无序的，即它不保证映射关系的迭代顺序。当哈希表调整大小时，原有的键值对顺序可能会被打乱。   - LinkedHashMap是有序的，它不仅实现了Map接口，还维护了元素的插入顺序。默认情况下，它按插入顺序进行迭代，但也可以通过设置构造函数的参数使其按照访问顺序（最近最少使用LRU算法）进行迭代。2. 内部结构：   - HashMap内部采用哈希表（数组+链表/红黑树）结构存储数据。   - LinkedHashMap在HashMap的基础上，每个条目(Entry)除了包含HashMap中的基本字段外，还增加了“前驱”和“后继”引用，形成一个双链表，这样就能记录元素间的顺序关系。3. 性能比较：   - HashMap查找、插入和删除操作的时间复杂度在理想情况下为O(1)，但在哈希冲突严重时可能会退化至O(n)。   - LinkedHashMap由于需要维护额外的链表结构，所以在插入、删除等操作时，除了完成HashMap的基本操作之外，还需要更新链表结构，所以相比于HashMap来说，这些操作的开销稍大，特别是当进行大量迭代时，尽管这种开销通常很小。4. 应用场景：   - HashMap适用于对顺序没有要求，且追求高效查找、删除和插入的场景。   - LinkedHashMap适用于需要保持元素插入顺序或者最近访问顺序（LRU缓存淘汰策略）的场景，比如实现LRU缓存、需要遍历输出顺序与插入顺序一致的情况。总结起来，LinkedHashMap在功能上扩展了HashMap，保留了快速查找的优势，同时引入了有序性这一重要特性，从而满足了更多特定的需求场景。
           `},{title:"集合框架 --- 41、 问题：HashMap和ConcurrentHashMap区别",content:` 
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
           `},{title:"集合框架 --- 42、 `问题：ConcurrentHashMap 与 Hashtable区别",content:` 
          除了线程安全实现方式（Hashtable使用synchronized，ConcurrentHashMap使用CAS和分段锁/JDK 1.8之后的进一步优化），
          它们还存在以下区别：   
          1、Hashtable不允许键值为null，而ConcurrentHashMap允许键和值都为null（但只能有一个null键）。  
          2、Hashtable的方法调用都需要进行同步，性能较低；ConcurrentHashMap在保证线程安全的同时，通过减少锁粒度提升了性能。   
          3、Hashtable不支持泛型，而ConcurrentHashMap支持泛型。
           `},{title:"集合框架 --- 43、 问题：线程安全的Map",content:` 
          1、ConcurrentHashMap，是线程安全的Map实现类，它在juc包下的。
          2、线程安全的Map实现类除了ConcurrentHashMap还有一个叫做Hashtable。
          3、也可以使用Collections来包装出一个线程安全的Map。但无论是Hashtable还是Collections包装出来的都比较低效（因为是直接在外层套synchronize），所以我们一般有线程安全问题考量的，都使用ConcurrentHashMap
           `}],Re=[{title:"JVM --- 1、 问题：JVM是什么？",content:` 
          	JVM (Java Virtual Machine) 是一种抽象化的计算机系统，它负责执行Java字节码文件（.class文件）。
            JVM提供了一个运行环境，使Java程序能够在多种操作系统上运行而不受硬件架构的影响，实现了“一次编写，到处运行”。
           `},{title:"JVM --- 2、 问题：JVM内存区域划分？",content:` 
          	JVM内存主要分为五大区域：
            程序计数器（PC Register）、
            虚拟机栈（VM Stack）、
            本地方法栈（Native Method Stack）、
            Java堆（Heap）和方法区（Method Area）。	

            另外，从Java 8开始，元空间（Metaspace）取代了方法区的一部分职责。
           `},{title:"JVM --- 3、 问题：Java内存泄漏的定义及原因？",content:` 
          	Java内存泄漏是指程序中已不再使用的对象无法被垃圾回收器回收，导致系统可用内存不断减少的现象。通常是由长期持有对无用对象的强引用引起的，即使这些对象不再被程序逻辑所使用。
           `},{title:"JVM --- 4、 问题：垃圾回收机制（GC）的工作原理？",content:` 
          	JVM通过可达性分析算法确定对象是否可达，不可达的对象被认为是垃圾。	
            垃圾回收器根据不同的算法（如新生代的复制算法、标记-清除算法、标记-压缩算法，老年代的标记-清除算法、标记-压缩算法以及增量式GC等）进行垃圾回收，
            回收策略可以根据内存区域和对象生命周期的不同选择不同的垃圾回收器（如Serial、Parallel、CMS、G1、ZGC、Shenandoah等）。
           `},{title:"JVM --- 5、 问题：解释一下JVM的类加载机制？",content:` 
          	Java的类加载机制包含五个阶段：加载（Loading）、验证（Verification）、准备（Preparation）、解析（Resolution）和初始化（Initialization）。
            类加载器（ClassLoader）根据类的全限定名查找相应的二进制流，并将二进制流转化为方法区的运行时数据结构。
           `},{title:"JVM --- 6、 问题：JVM如何确定对象是否可以被回收？",content:` 
          	JVM使用可达性分析算法，通过一系列称为根对象集合的对象作为起点，遍历对象图，如果一个对象无法从这些根对象通过引用链到达，则认为它是不可达的，也就是垃圾对象。
           `},{title:"JVM --- 7、 问题：能否强制执行垃圾回收？如果有，应该如何做？",content:` 
          	可以通过System.gc()方法请求系统进行垃圾回收，但这只是建议而不是命令，具体是否执行以及何时执行由JVM自行决定。	在实际开发中不推荐随意调用System.gc()，因为这可能会导致系统性能下降。
           `},{title:"JVM --- 8、 问题：HotSpot JVM的内存模型是什么样的？",content:` 
          	HotSpot JVM的内存模型遵循JSR-133规范，即Java Memory Model（JMM），它定义了主内存与工作内存之间的交互协议，以及保证数据一致性的各种规则，如happens-before原则等。
           `},{title:"JVM --- 9、 问题：解释一下JVM的双亲委派模型？",content:` 
          	双亲委派模型是类加载器的一种工作模式，当收到类加载请求时，首先将请求委托给父类加载器，依次向上，直至启动类加载器。
            只有当父加载器找不到指定类时，当前类加载器才会尝试自己加载。这样可以保证类加载的唯一性以及核心类库的安全性。
           `},{title:"JVM --- 10、 问题：列举几种常见的JVM调优工具？",content:` 
          	包括但不限于JConsole、VisualVM、JProfiler、MAT（Memory Analyzer Tool）、YourKit等，它们可以帮助开发者监控和分析JVM的内存消耗、线程状态、垃圾回收情况、CPU使用率等指标，进而进行性能调优。
           `},{title:"JVM --- 11、 问题：Minor GC和Full GC有什么区别？",content:` 
          	Minor GC清理的是年轻代（Young Generation）的内存空间，主要用于回收新生代中的Eden区和Survivor区的废弃对象。
            当年轻代空间不足时会发生Minor GC。	Full GC清理的是整个堆内存，包括年轻代和老年代（Old Generation），甚至包括方法区（永久代或元空间）。
            在老年代空间不足、持久代空间不足、System.gc()被显式调用或者上一次GC后堆内存未使用率依然很低等情况时，JVM会触发Full GC。
           `},{title:"JVM --- 12、 问题：什么是OOM（Out Of Memory）错误？",content:` 
          	OOM是Java虚拟机内存溢出错误的简称，当JVM无法申请到足够的内存来完成新的内存分配请求时，就会抛出OutOfMemoryError。
            根据错误发生的区域不同，可以分为Java Heap Space（堆内存溢出）、PermGen Space（永久代溢出，在Java 8中替换为Metaspace溢出）、StackOverflowError（栈溢出）等多种类型。
           `},{title:"JVM --- 13、 问题：JVM的栈和堆的区别？",content:` 
          	栈（Stack）主要是用来存储方法调用过程中的局部变量、方法参数以及返回地址等信息，每个线程都有自己独立的栈空间，
            栈的特点是快速分配和回收，线程私有，生命周期与线程相同。   
            堆（Heap）是用来存储Java对象实例，所有的线程共享堆内存，堆内存按照GC算法进行分配和回收，特点是分配速度较慢，但灵活性较高，生命周期从对象创建到成为垃圾被回收。
           `},{title:"JVM --- 14、 问题：谈谈JVM的类加载优化手段有哪些？",content:` 
          	类加载优化包括静态绑定、动态绑定、类数据共享（Class Data Sharing，CDS）、提前加载（Premature Class Loading）等技术。
            例如，通过 -Xshare:dump 和 -XX:UseSharedSpaces 参数启用CDS，可以将类的元数据在服务器启动时预先加载到共享内存中，加快后续的类加载速度。
           `},{title:"JVM --- 15、 问题：JVM如何处理指令重排序带来的并发问题？",content:` 
          	JVM遵守“as-if-serial”语义，即不管怎么重排序（编译器和处理器为了优化做的指令重排），程序的执行结果不能被改变。
            为此，Java内存模型引入了内存屏障和happens-before原则来解决多线程环境下的指令重排序问题，保证多线程视图的一致性和有序性。
           `},{title:"JVM --- 16、 问题：请解释JVM的JIT（Just-In-Time）编译器的作用？",content:` 
          	JIT编译器是JVM的一个组件，它可以将热点代码（频繁执行的代码）动态编译成本地机器代码，从而提高代码执行的效率。
            相对于解释执行，JIT编译器能够带来显著的性能提升。例如，HotSpot JVM中的C1和C2编译器就起到了这样的作用。
           `},{title:"JVM --- 17、 问题：请解释一下JVM中的ThreadLocal变量的工作原理？",content:` 
          	ThreadLocal为每个线程维护一个单独的副本，每个线程都有自己的ThreadLocalMap，键是ThreadLocal对象，值是实际存储的变量副本。
            这样每个线程都可以有自己的专属变量，互不影响，有效地解决了多线程间的数据隔离问题。
           `},{title:"JVM --- 18、 问题：请详细解释一下JVM中的分代垃圾回收机制？",content:` 
          	分代垃圾回收机制是基于这样一个事实：大部分对象在生成后很快就变得不可达。因此，JVM将内存划分为几个不同的区域，每个区域都有不同的垃圾回收策略。
            主要有年轻代（Young Generation）和老年代（Old Generation）。年轻代又分为Eden区、From Survivor区和To Survivor区。
            新创建的对象首先放在年轻代的Eden区，经过几次Minor GC后仍然存活的对象会被晋升到老年代。而Major GC（或Full GC）则负责回收老年代的空间。
            这种机制减少了垃圾回收的压力，并优化了系统的整体性能。
           `},{title:"JVM --- 19、 问题：请描述一下Java内存模型中的“重排序”现象以及如何避免它？",content:` 
          	在多线程环境下，编译器和处理器为了优化性能，可能会改变代码执行的顺序，这就可能导致所谓的“重排序”现象。
            为了避免由此引发的并发问题，Java内存模型通过“happens-before”原则定义了先行发生关系，只要满足happens-before条件，那么就不会发生指令重排序带来的可见性问题。
            此外，还可以通过volatile关键字和synchronized同步块来实现内存屏障，防止指令重排序。
           `},{title:"JVM --- 20、 问题：请解释一下JVM的类卸载机制？",content:` 
          	JVM在满足一定条件下会卸载不再使用的类，这个过程也称为类卸载或类回收。条件包括：该类的所有实例都已被回收，加载该类的ClassLoader已经被回收，
            该类的Class对象没有任何地方被引用，即该类对应的Class对象也成为垃圾。然而，由于全局常量池中对类的引用以及反射等机制的存在，类卸载的实际难度较大，
            因此在实践中很少遇到真正的类卸载情况。
           `},{title:"JVM --- 21、 问题：请解释一下Java HotSpot VM的即时编译器C1和C2的区别？",content:` 
          	C1编译器（Client Compiler）注重启动性能，倾向于较小的内存占用和较快的编译速度，适用于客户端应用。C2编译器（Server Compiler）关注峰值性能，
            采用大量的优化技术，比如全局代码优化，产生的代码质量更高，但编译时间相对较长，适用于服务端应用。
            在HotSpot VM中，根据应用程序的运行状况，可以选择激活C1或C2编译器，或者二者结合使用。
           `},{title:"JVM --- 22、 问题：请描述一下Java的逃逸分析技术以及其在JVM中的应用？",content:` 
          	逃逸分析是JVM的一项优化技术，用于分析对象动态作用域：如果一个对象在方法中被创建，但仅在方法内部使用，没有“逃逸”到方法外部，那么就认为该对象是局部有效的。通过逃逸分析，

            JVM可以做出如下优化：   
            - 栈上分配：将原本分配在堆上的对象分配到栈上，减少了垃圾回收的压力。   
            - 同步省略：如果一个对象不会逃逸出线程，那么对该对象的同步操作是可以省略的。   
            - 标量替换：将对象拆解成若干个原始类型变量在栈上存储，消除对象的创建成本。
           `},{title:"JVM --- 23、 问题：请简述G1垃圾收集器的工作原理？",content:` 
          	G1垃圾收集器是一种面向服务端应用的垃圾收集器，采用分区式的堆内存布局，将堆划分为多个大小固定的Region。
            G1可以预测停顿时间，通过维护Remembered Set来跟踪跨Region的引用，并在整个堆中并行进行垃圾回收。
            G1收集器以整个堆作为回收单位，收集过程分为并发标记、初始标记、最终标记和清理回收四个步骤，逐步推进垃圾回收，尽量减少STW（Stop-The-World）的时间。
            同时，G1还会优先回收收益最大的Region，以实现更高效的内存回收。
           `}],we=[{title:"多线程并发 --- 1、 问题：线程的定义和作用",content:` 
          线程的基本定义：线程是操作系统能够进行运算调度的最小单位，它是进程内的一个执行流，是程序中单一顺序的控制流程。
          在一个进程中可以并发地执行多个线程，每个线程都拥有自己的程序计数器（PC，指示下一条要执行的指令地址）、寄存器集合以及栈空间。
          线程不拥有独立的系统资源（如地址空间、打开的文件等），而是共享其所属进程的这些资源，
          但每个线程有自己的线程上下文，包括程序计数器、栈、线程本地存储等。

          线程的作用：
          1. 并发执行：线程允许多个任务在同一进程中并发执行，这意味着即使在单个处理器上，通过操作系统的时间片轮转机制，也可以模拟出“并行”效果，提升程序的执行效率和响应速度。
          2. 资源共享：同一进程中的所有线程可以访问相同的地址空间和其他资源，这样它们可以轻松地共享数据和同步信息，简化编程模型。
          3. 提高系统资源利用率：当一个线程等待I/O操作完成时，其他线程可以继续执行，避免了因单一线程阻塞导致整个进程停滞的情况，提高了系统整体的资源利用率。
          4. 实时响应与高性能计算：在网络服务、GUI应用程序、实时系统、并行计算等领域，线程能帮助程序更好地响应外部事件，同时在多核或多CPU架构上，通过多线程技术可以实现真正的并行计算，显著加快数据处理速度。
          5. 模块化与简化编程：线程使得复杂的应用程序可以分解成多个相对独立且并发执行的任务模块，有利于软件设计、调试和维护。
          总结来说，线程作为操作系统调度的最小单元，通过并发执行多个任务实现了现代操作系统中的并发处理能力，极大地提升了计算机系统的运行效率和服务质量。
           `},{title:"多线程并发 --- 2、 问题：并发与并行的概念及其在操作系统中的体现",content:` 
          1、并发 (Concurrency)：	
          并发是指在一段时间内，系统看似同时处理多个任务或者执行多个操作的现象。	
          在操作系统中，即便是在单个处理器或单个CPU核心的情况下，也能通过快速切换上下文（context switching）来实现并发。	
          操作系统将CPU时间划分为非常短的时间片（time slice），然后轮流让不同的任务（进程或线程）使用CPU，这样在宏观上看起来好像所有的任务都在同一时间内执行。	但实际上，微观上每个任务只在特定时间片段里运行，而非真正的同时执行。	例如，在单核系统中，浏览器可以一边下载网页，一边播放音频，虽然CPU在同一个时间点只能执行其中的一个操作，但是通过时间分片的方式，这两个任务在用户看来就像是同时进行的。2、并行 (Parallelism)：	并行则是指在同一时刻，系统确实能够同时执行多个任务或操作。这需要依赖于硬件支持，通常是指有多核CPU或者多个处理器的系统。在这样的环境下，操作系统可以将不同的任务分配给不同的处理器或核心，从而实现在物理层面的真正同时执行。例如，在一个多核CPU的计算机上，一个核心可以运行游戏程序，另一个核心可以处理操作系统服务，这时，两个任务是在同一时刻分别在不同的硬件资源上执行的，这就是并行。总结：- 并发是逻辑上的同时发生，是通过时间片轮转、事件驱动等方式使多个任务交错执行，产生并发效果。- 并行是物理上的同时发生，是利用多处理器或多核结构使得多个任务真正意义上的同时执行。在操作系统中，无论是并发还是并行，都需要有效的调度算法、同步机制和通信手段来协调和管理这些任务，确保它们高效、安全地执行。随着多核CPU的发展，现代操作系统的设计越来越多地结合并发和并行技术来提升系统性能。
           `},{title:"多线程并发 --- 3、 问题：使用多线程的原因及优势",content:` 
          1. 提高资源利用率：多线程可以充分利用多核CPU的并行处理能力，当一个线程等待I/O操作或其他外部资源时，其他线程可以继续执行，从而减少CPU空闲时间，提高系统整体性能。
          2. 提高响应速度与实时性：在图形用户界面（GUI）应用中，主线程可以专注于处理用户的交互和界面更新，而将耗时的后台任务放在辅助线程中执行，这样就不会阻塞界面响应，提升用户体验。
          3. 并发处理与提高吞吐量：多线程可实现对并发请求、网络通信、数据处理等任务的并行处理，尤其在服务器和分布式系统中，能有效提高系统处理大量并发事务的能力。
          4. 易于建模与程序结构优化：对于大型复杂的任务，可以将其拆分成多个小任务（子线程），各自独立运行，简化程序设计和维护，同时也有利于代码重用和模块化。
          5. 资源共享与通信方便：同一线程内的各个线程可以共享进程的大部分资源，包括内存空间，这降低了通信成本，简化了数据传递的过程。

          然而，多线程编程也存在相应的挑战：
          1. 线程安全问题：当多个线程同时访问和修改共享资源时，容易出现竞态条件（race condition）、死锁（deadlock）、活锁（livelock）和资源饥饿（resource starvation）等问题，需要采取适当的同步机制（如互斥锁、信号量、条件变量等）来保证数据一致性。
          2. 上下文切换开销：线程切换时需要保存和恢复线程上下文（如寄存器状态、栈信息等），频繁的上下文切换会消耗系统资源，降低总体性能。
          3. 编程复杂度增加：多线程编程要求开发者具备良好的并发编程思维和技巧，以避免各种并发问题的发生，这对程序员的要求较高。
          4. 测试和调试难度增大：由于线程执行的不确定性，多线程程序的错误可能难以复现，增加了调试和测试的复杂性。
          5. 资源竞争与性能瓶颈：若资源竞争过于激烈，同步机制可能会成为新的性能瓶颈，影响程序整体效率。
          因此，在设计和实现多线程应用程序时，需要权衡多线程带来的优势与解决上述挑战所需的额外工作，合理安排线程间的协作和同步策略，以达到最优的程序性能和可靠性。
           `},{title:"多线程并发 --- 4、 问题：创建线程",content:` 
          - 继承 Thread 类并重写 run() 方法
          - 实现 Runnable 接口并提供 run() 方法
          - 使用 Callable 和 Future 接口配合 ExecutorService- 线程池（ThreadPoolExecutor）
           `},{title:"多线程并发 --- 5、 问题：请解释Java中的Callable与Future接口在多线程编程中的作用及其使用场景？",content:` 
          	Callable接口允许我们创建一个可以返回值并抛出检查型异常的任务对象。
               相比于Runnable，Callable任务可以获取一个泛型化的结果。配合Future接口，我们可以异步获取该任务的结果，并提供取消任务的方法。

               使用场景：
               1、当我们需要从线程中获取一个具体的返回值时，可以选择使用Callable。
               2、使用Future.get()方法可以阻塞当前线程直到Callable任务执行完毕并获取其结果，这对于监控任务执行状态和结果很有用。
               3、若线程执行过程中出现异常，可以通过Future.get()捕获该异常。
               4、Future还提供了取消任务的方法cancel(boolean mayInterruptIfRunning)，可以更加灵活地控制任务的生命周期。
           `},{title:"多线程并发 --- 6、 问题：Runnable 和 Callable 区别",content:` 
          1. Runnable 接口：   
          - Runnable 是 Java 中最基本的线程任务接口，它只有一个 void run() 方法，用于定义线程的执行体。   
          - Runnable 对象被传递给 Thread 类的构造函数，然后通过调用 Thread 的 start() 方法来启动线程执行 run() 方法里的代码。   
          - Runnable 不支持返回值，也不能抛出受检异常，如果需要反馈线程执行结果，需要自行定义共享变量或使用第三方库提供的机制。

          2. Callable 接口：   
          - Callable 是比 Runnable 更高级别的接口，它定义了一个 V call() 方法，该方法可以有返回值（类型为泛型 V）并且可以抛出异常。   
          - Callable 任务通常与 Future 和 ExecutorService 结合使用，通过 ExecutorService.submit(Callable) 提交任务后，可以获得一个 Future 对象，通过 Future.get() 方法可以阻塞等待获取 Callable 任务的返回结果，同时也可以检查任务是否已经完成、取消或抛出异常。   
          - 因此，Callable 更适合那些需要获取线程执行结果的场景。总结一下，如果你的任务不需要返回结果，选择 Runnable 就足够了；
          但如果你的任务需要返回一个结果，并且/或者可能抛出异常，那么 Callable 是更好的选择。
           `},{title:"多线程并发 --- 7、 问题：什么是Java线程池？为什么使用线程池？",content:` 
          	Java线程池是Java标准库提供的一个工具，通过预先创建一组工作线程来执行提交的任务，而不是每次需要执行任务时创建和销毁线程。
               线程池的核心组件是java.util.concurrent.ExecutorService接口，具体实现类如ThreadPoolExecutor。

               使用线程池的主要原因包括：
               1、资源重用：减少了线程创建和销毁的开销。
               2、统一管理：能够限制系统中并发线程的数量，防止过多线程消耗系统资源。
               3、线程控制：能够设置线程的优先级、超时策略、拒绝策略等，对线程行为进行更精细的控制。
               4、容量规划：通过调整线程池大小，可以应对不同规模的任务负载。
           `},{title:"多线程并发 --- 8、 问题：Java中的线程池有哪些种类？",content:` 
          Java中有多种内置线程池实现，包括：
          1、FixedThreadPool：线程池中的线程数量始终保持固定，超过线程池容量的任务会被放入无界队列中等待执行。
          2、CachedThreadPool：线程池中的线程数量可根据需求动态增加，没有预设的线程最大数量，适用于执行大量短生命周期的任务。
          3、SingleThreadExecutor：线程池中只有一个线程，按照先进先出的顺序执行任务。
           `},{title:"多线程并发 --- 9、 问题：ThreadPoolExecutor的构造参数有哪些？",content:` 
          ThreadPoolExecutor构造函数接受如下几个核心参数：
          corePoolSize：核心线程数
          maximumPoolSize：最大线程数。
          keepAliveTime：超时时间。
          unit：时间单位。
          workQueue：工作队列，用于存放待执行的任务。
          threadFactory：线程工厂，用于生成新线程，默认情况下使用的是
          DefaultThreadFactory。handler：拒绝策略，当线程池和工作队列均无法接纳新任务时，所采取的策略。
           `},{title:"多线程并发 --- 10、 问题：如何关闭线程池？",content:` 
          可以通过调用ThreadPoolExecutor的shutdown()或shutdownNow()方法来关闭线程池。
          shutdown()：不再接收新的任务，但会把已提交的任务执行完。
          shutdownNow()：尝试停止所有正在执行的任务，并放弃等待队列中的任务，返回尚未开始执行的任务列表。
           `},{title:"多线程并发 --- 11、 问题：描述一下线程池的工作流程？",content:` 
          线程池的工作流程大致如下：
          1、当提交任务到线程池时，首先检查线程池中的线程数量是否少于核心线程数，如果是，则创建一个新线程来执行任务
          2、如果线程数已经达到核心线程数，且工作队列未满，则将任务添加到工作队列中等待执行。
          3、如果工作队列已满，且线程数未达到最大线程数，则创建新线程执行任务。
          4、当线程池中线程数达到最大线程数，且工作队列已满时，如果还有新的任务提交，则依据拒绝策略处理新任务，比如丢弃任务或抛出异常。

          工作队列
          1. ArrayBlockingQueue   基于数组的有界队列
          2. LinkedBlockingQueue  基于链表的无界队列 , 核心线程数满了之后,会一直存进队列  最大数 Integer
          3. SynchronousQuene  不缓存任务的阻塞队列   生产者放入一个任务就等待消费者取出一个任务;
          4. PriorityBlockingQueue  具有优先级的无界阻塞队列，优先级通过参数Comparator实现。
           `},{title:"多线程并发 --- 12、 问题：如何设定线程池的拒绝策略？",content:` 
          Java中提供了四种预设的拒绝策略：
          AbortPolicy：默认拒绝策略，直接抛出RejectedExecutionException异常。
          CallerRunsPolicy：调用者所在线程直接执行任务。
          DiscardPolicy：默默地丢弃掉任务，不做任何处理。
          DiscardOldestPolicy：丢弃队列中最旧的任务，尝试重新提交当前任务。用户还可以自定义拒绝策略，实现RejectedExecutionHandler接口并传给线程池构造函数。
           `},{title:"多线程并发 --- 13、 问题：在使用线程池时，如何避免OOM（内存溢出）问题？ 答：为了避免OOM，可以考虑以下几个方面：",content:` 
          1、设置合理的线程池大小，避免因过多线程导致内存消耗过大。
          2、限制工作队列的大小，尤其是对于无界队列（如LinkedBlockingQueue），如果不加以限制，大量任务堆积可能导致内存溢出。
          3、注意任务本身占用的内存资源，确保任务完成后能够及时释放内存。
          4、使用有界队列（如ArrayBlockingQueue），结合合理的拒绝策略，可以防止因队列无限增长而导致内存溢出。
           `},{title:"多线程并发 --- 14、 问题：线程池中如何处理线程的异常？",content:` 
          	在ThreadPoolExecutor中，如果线程在执行任务时抛出了未捕获的异常，那么这个异常会被封装成RunnableFuture的ExecutionException并传递给调用者。	
               此外，可以通过扩展线程池或者覆盖ThreadPoolExecutor的afterExecute(Runnable r, Throwable t)方法来自定义异常处理逻辑，
               此方法会在任务执行后无论成功与否都会被调用。
           `},{title:"多线程并发 --- 15、 问题：为何不建议在高并发场景下使用 newFixedThreadPool 搭配无界队列？",content:` 
          	在高并发场景下，如果使用Executors.newFixedThreadPool并配置一个无界队列（如LinkedBlockingQueue），由于无界队列的特性，
               它会无限制地存储提交的任务，而固定线程数无法继续增长。	
               这样，在任务提交速度远大于线程处理速度的情况下，会导致任务不断堆积，进而可能耗尽系统内存，引发OOM。
               因此，通常建议在这种情况下考虑设置有界队列，或者使用能自动伸缩线程数量的线程池。
           `},{title:"多线程并发 --- 16、 问题：解释一下ThreadPoolExecutor中的“饱和策略”是什么意思？",content:` 
           	“饱和策略”是指当线程池无法再接受新任务的情况下的处理机制。 	当线程池中所有的核心线程都在工作，且工作队列也已满，此时若继续提交任务，则线程池进入饱和状态。 	
               线程池通过拒绝策略来应对饱和情况，可以选择丢弃任务、让提交任务的线程自己执行任务、抛出异常等不同的处理方式。
           `},{title:"多线程并发 --- 17、 问题：什么是线程同步？为什么需要线程同步？",content:` 
          	线程同步是一种机制，它确保了在多线程环境下，当多个线程访问同一块资源时，同一时间只能有一个线程访问资源或者某个临界区的代码块。	
               线程同步是为了避免多个线程同时访问和修改共享资源时产生的数据不一致和竞态条件，从而保持数据的一致性和完整性。
           `},{title:"多线程并发 --- 18、 问题：Java中有哪些常见的线程同步机制？",content:` 
          Java中常见的线程同步机制包括：
          1、synchronized关键字：可以修饰方法或代码块，保证同一时刻只有一个线程访问被synchronized保护的代码区域。
          2、ReentrantLock：一个可重入的互斥锁定机制，相比synchronized提供了更多灵活性，如公平锁、非公平锁，以及tryLock、lockInterruptibly等方法。
          3、volatile关键字：确保了多线程环境下的共享变量可见性，但并不能替代互斥锁来保证原子性。
          4、Semaphore（信号量）：用于控制同时访问特定资源的线程数量。
          5、Condition：与Lock配套使用，提供更为灵活的线程间协调机制，允许线程在满足某种条件时才继续执行。
          6、CountDownLatch：一个同步辅助类，允许一个或多个线程等待其他线程完成操作后再执行。
          7、CyclicBarrier：让一组线程等待至某个屏障点，所有线程都到达后才能继续执行。
          8、Exchanger：允许两个线程之间交换数据。
           `},{title:"多线程并发 --- 19、 问题：什么是死锁？如何预防死锁？",content:` 
          	死锁是指两个或更多的线程互相等待对方持有的锁资源，形成循环等待，导致所有线程都无法继续执行的情况。

               预防死锁的策略包括：
               1、避免嵌套加锁，尽量按固定的顺序获取锁。
               2、使用超时机制，防止无限期等待锁。
               3、设定锁的层次结构，遵循避免环路的原则。
               4、使用可中断锁，并适时检测和处理中断信号。
               5、尽可能减少锁持有时间，尽早释放锁资源。
           `},{title:"多线程并发 --- 20、 问题：什么是线程局部变量（ThreadLocal）？它的应用场景是什么？",content:` 
          	线程局部变量(ThreadLocal)是一个可以为每个线程维持其自身的独立变量副本的类。每个线程都拥有自己的ThreadLocal变量副本，互不影响。

               应用场景包括：
               1、在多线程环境下为每个线程提供独立的变量副本，避免线程间共享和同步的问题。
               2、为每个线程提供线程特有的上下文信息，例如数据库连接、用户会话信息等。
           `},{title:"多线程并发 --- 21、 问题：解释一下Java内存模型中的“可见性”、“原子性”和“有序性”。",content:` 
          1、可见性：当一个线程修改了共享变量的值后，其他线程能够立即得知这个修改。为了确保可见性，可以使用synchronized、volatile关键字或者final字段。
          2、原子性：一个操作（或一系列操作）要么全部完成，要么全部不完成，不会出现在执行过程中被其他线程干扰的情况。为了保证原子性，可以使用锁或者其他原子操作类如AtomicInteger等。
          3、有序性：程序执行的顺序按照代码的编写顺序进行。Java内存模型允许编译器和处理器对指令进行重排序，但在多线程环境下可能导致意料之外的行为。happens-before原则和内存栅栏（Memory Barrier）可以用来保障有序性。
           `},{title:"多线程并发 --- 22、 问题：什么是Java中的synchronized关键字？",content:` 
          	synchronized是Java中用于实现线程同步的关键字，它可以确保任何时刻只有一个线程访问特定的代码块或方法。
               通过synchronized修饰的方法或者代码块，同一时间只能有一个线程执行，以此来保证数据的完整性，防止多线程环境下并发访问共享资源时可能出现的数据不一致或竞态条件。
           `},{title:"多线程并发 --- 23、 问题：什么是Java中的ReentrantLock？",content:` 
          	ReentrantLock是Java并发包java.util.concurrent.locks中提供的一个可重入的互斥锁，它提供了与synchronized关键字类似的线程同步功能，
               但更强大且更灵活。ReentrantLock允许获取锁的线程再次进入，也支持公平锁和非公平锁两种模式，同时还提供了诸如等待可中断、超时获取锁等功能。
           `},{title:"多线程并发 --- 24、 问题：synchronized和ReentrantLock有什么区别？",content:` 
          1、synchronized是Java的内置关键字，使用起来相对简单，无需手动管理锁的释放，而ReentrantLock是一个API级别的锁，需要显示调用lock()和unlock()方法来获取和释放锁。
          2、ReentrantLock提供了公平锁和非公平锁的选择，而synchronized是非公平锁。
          3、ReentrantLock提供了tryLock()、lockInterruptibly()等高级功能，可以更好地控制线程的中断和超时。
          4、ReentrantLock在通过Condition进行线程间协作时更加灵活。
           `},{title:"多线程并发 --- 25、 问题：Semaphore（信号量）",content:` 
          	Semaphore是一种用于控制同时访问特定资源的线程数量的工具类。	通过它可以设定一个许可证的数量，每当线程调用acquire()方法时就会获取一个许可证，
               如果没有可用的许可证，线程将被阻塞直到其他线程释放许可证。线程在完成资源访问后调用release()方法释放许可证。	

               Semaphore的应用场景是什么？ 	
               Semaphore常用于限制数据库连接数、并发打印任务数、窗口服务客户数等场景，确保在任何时候，都不会超过预定的并发执行数。
           `},{title:"多线程并发 --- 26、 问题：什么是线程间的通信机制？",content:` 
          	线程间的通信机制是指在多线程环境下，线程之间通过某种方式传递信息、协调执行或同步状态，确保线程之间能正确、有效地共享资源和执行任务。
           `},{title:"多线程并发 --- 27、 问题：Java中有哪些常见的线程间通信机制？",content:` 
          1、wait()、notify()、notifyAll()：	这些方法基于Object类，配合synchronized关键字使用，实现线程间的唤醒和等待。
          wait()会使当前线程等待，
          notify()或notifyAll()可以唤醒一个或所有等待的线程。

          2、管程（Monitors）：	通过synchronized关键字隐式实现，它包括了对象监视器，允许线程获取和释放锁以及进行等待/通知操作。
          3、条件变量（Condition Objects）：	Java并发包中的java.util.concurrent.locks.Condition接口提供了比wait()/notify()更灵活的条件等待机制，
          它与ReentrantLock等锁类一起使用，每个锁可以有多个条件变量，每个条件变量代表一种线程等待和唤醒的条件。
          4、阻塞队列（Blocking Queue）：	Java并发包中的阻塞队列如ArrayBlockingQueue、LinkedBlockingQueue等，可以实现生产者-消费者模式的线程间通信，当队列满或空时，线程会自动阻塞等待或被唤醒继续执行。
          5、显式锁（Explicit Locks）：	如java.util.concurrent.locks.ReentrantLock等，除了提供互斥锁的功能，还支持获取锁的可中断性、尝试获取锁的超时时间等，以及与Condition接口联合使用的条件等待机制。
          6、信号量（Semaphore）：	用于控制同时访问特定资源的线程数量，线程在获取不到许可时会被阻塞，直到其他线程释放许可。
          7、Future与Callable：	Future接口表示异步计算的结果，可用于线程间的通信和结果的获取。Callable接口定义了call()方法，返回一个结果，可以用FutureTask包装Callable对象并提交给线程池执行。
           `},{title:"多线程并发 --- 29、 问题：什么是Java线程的中断机制？",content:` 
          	Java线程的中断机制是一种协作式的线程停止方法。通过调用Thread.interrupt()方法，一个线程可以向另一个线程发送中断请求，被中断的线程并不会立即停止执行，而是会设置其内部的中断标志为true。
               线程在合适的时机检查中断状态，并根据业务逻辑决定如何响应中断请求。
           `},{title:"多线程并发 --- 30、 问题：请说明Phaser类在Java并发中的作用。",content:` 
          	Phaser是Java 7引入的更为灵活的并发同步工具类，它可以用于多线程间的相互通信和同步。	
               Phaser允许注册参与阶段的线程，并在所有参与者都到达阶段时进行同步，它支持灵活的注册、未到达阶段的线程取消、阶段重用等特性。
               Phaser可以看作是CountDownLatch和CyclicBarrier的加强版，更加适应复杂的并发场景。
           `},{title:"多线程并发 --- 31、 问题：什么是线程安全？",content:` 
             线程安全是指一个类或者程序在多线程环境下被多个线程同时访问时，依然能够表现出正确的行为，不会出现数据不一致、竞态条件或死锁等问题。
             换句话说，即使在并发执行的情况下，也能保证对象状态的完整性。
           `},{title:"多线程并发 --- 33、 问题：如何确保线程安全？",content:` 
             1、同步机制：使用synchronized关键字同步代码块或方法，确保同一时间只有一个线程访问共享资源。   
             2、原子类：Java并发包java.util.concurrent.atomic中提供了原子操作类，如AtomicInteger等，它们的更新操作是原子性的。  
             3、线程安全的数据结构：使用线程安全的集合类，如ConcurrentHashMap、CopyOnWriteArrayList等。   
             4、锁机制：如ReentrantLock等，提供了比synchronized更强大的功能，如可中断锁、公平锁等。
           `},{title:"多线程并发 --- 34、 问题：列举一些Java中线程安全的类。",content:` 
             Vector（ 推荐使用CopyOnWriteArrayList代替）   
             Collections.synchronizedList/Set/Map返回的包装类   
             java.util.concurrent包下的并发容器类，如ConcurrentHashMap、CopyOnWriteArrayList等   
             Atomic系列的原子类，如AtomicInteger、AtomicLong、AtomicReference等
           `},{title:"多线程并发 --- 35、 问题：线程安全问题有哪些？",content:` 
             竞态条件（Race Condition）：多个线程访问共享资源时，由于执行顺序不确定导致结果不一致。   
             死锁（Deadlock）：两个或多个线程相互等待对方释放资源，导致所有线程都无法继续执行。   
             活锁（Livelock）：线程间互相等待，虽然都在执行却没有进展，就像陷入僵局。   
             资源饥饿（Resource Starvation）：某个线程始终得不到必要的资源，无法继续执行。
           `}],Pe=[...ke,...Je,...Re,...we];function De(){return n.jsx(v,{arr:Pe})}const Oe=[];function He(){return n.jsx(v,{arr:Oe})}const Ae=[];function Le(){return n.jsx(v,{arr:Ae})}const Te=[];function Ie(){return n.jsx(v,{arr:Te})}const u=async()=>sessionStorage.getItem("token")===window.uuid?null:w("/login"),je=async()=>sessionStorage.getItem("token")===window.uuid?w("/"):null,Ne=()=>{const t=L([{path:"/",Component:le,loader:u},{path:"/login",Component:de,loader:je},{path:"/frontend",Component:Ve,loader:u},{path:"/backend",Component:De,loader:u},{path:"/dataAnalysis",Component:He,loader:u},{path:"/cloudComputing",Component:Ie,loader:u},{path:"/linux",Component:Le,loader:u},{path:"*",element:n.jsx(I,{to:"/",replace:!0})}]);return n.jsx(T,{router:t})};let S;const Ee=new Uint8Array(16);function Ue(){if(!S&&(S=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!S))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return S(Ee)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function _e(e,t=0){return s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]}const Be=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),R={randomUUID:Be};function We(e,t,c){if(R.randomUUID&&!t&&!e)return R.randomUUID();e=e||{};const a=e.random||(e.rng||Ue)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,t){c=c||0;for(let o=0;o<16;++o)t[c+o]=a[o];return t}return _e(a)}function ze(){return n.jsx(F,{children:n.jsx(Ne,{})})}window.uuid=We();b.createRoot(document.getElementById("root")).render(n.jsx(ze,{}));
