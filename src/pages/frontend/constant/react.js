export default [

  {
    title: "react---1.react生命周期",
    content: `
    1.constructor(props), 挂载时执行的,此方法只会执行一次,当组件被实例化后第一个被执行的方法，不推荐在此方法中完成ajax请求
    2.getDerivedStateFromProps,副作用生命周期方法,此方法就是用来对于当前state状态进行修改操作,它会执行N次,父组件通过props传过来的数据转为了当前state数据,如果使用此方法,一定要满足两个条件:1.必须要有声明过state2.此方法必须要有返回值,null|{}
    3.render， 组件界面开始渲染，执行N次,不建议使用ajax
    4.componentDidMount，虚拟dom挂载到真实的dom中,完成后执行的方法,推荐在此方法中完成ajax
    5.shouldComponentUpdate，更新时执行的，此方法必须要有返回值,返回值的类型必须为boolean true/false，表示继续还是直接退出
    6.getSnapshotBeforeUpdate，数据更新之前，此方法要有一个返回值,此返回值会在componentUpdate方法的第3个参数中得到
    7.componentDidUpdate，数据更新完成执行的方法
    8.componentWillUnmount，在组件卸载及销毁之前直接调用，在此方法中执行必要的清理操作
    `,
  },
  {
    title: "react---2.react组件传值",
    content: `
    1.父传子
    父组件将自己的状态传递给子组件，子组件当做属性来接收，当父组件更改自己状态的时候，子组件接收到的属性就会发生改变props
    父组件利用ref对子组件做标记，通过调用子组件的方法以更改子组件的状态,也可以调用子组件的方法(说明: ref获取当前组件对象，只针对的是使用类创建的组件才可以用此方案，类有实例，而函数没有实例)
    2.子组件修改props数据
    子组件通过父组件props传过来的数据(方法或函数),进行调用，通过调用实现子向父传值
    3.状态提升
    此方案是用来解决兄弟组件间的传值问题，就是把公用的状态信息提升到父组件状态中
    4.跨组件通信
    在react中没有类似vue中的事件总线来解决这个问题，当需要组件间跨级访问信息时，可以使用context来实现跨级父子组件间的通信。
    `,
  },
  {
    title: "react---3.redux",
    content: `
    Redux 是 JavaScript 应用的状态容器，提供可预测的状态管理。可以开发出行为稳定可预测的应用，运行于不同的环境（客户端、服务器、原生应用），并且易于测试。Redux 除了和 React 一起用外，还支持其它界面库。
    redux不依赖于任何的前端框架，可以使用在任何的前端框架中，用来管理全局状态数据
    解决问题：多层级组件间的通信问题
    核心概念：
    - 单一数据源(state)，数据中单向数据流
    - 数据不可以直接修改，只能通过纯函数reducer来完成对于state状态修改，修改：每次返回一个新的state对象
    缺点：
    - 因为它是单一数据源，如果数据过多，它的操作性能就不会太高，所以在redux中就不要存储过多的数据
    `,
  },
  {
    title: "react---4.redux使用步骤",
    content: `
    1.在src目录下创建一个store目录，里面创建一个index.js文件
    2.在index.js文件中按需引入redux中的方法createStore
    3.初始化state数据和定义纯函数reducer，此reducer函数一定返回state
    4.调用createStore方法，参数1，传入reducer
    5.导出createStore执行方法的返回值
  `,
  },
  {
    title: "react---5.纯函数",
    content: `
    1. 确定的输入，会产生确定的输出
    2. 不会产生副作用
      -  在这里副作用的意思就是在执行一个函数的时候，除了返回函数值以外，还对调用函数产生了附加的影响，比如修改了全局变量，修改了参数或者改变外部的存储。 
      -  纯函数在执行的过程中不能产生这样的副作用，有副作用的话往往容易产生不易发觉的BUG 
    redux定义了一个reducer函数来完成state数据的修改，reducer会接收先前的 state 和 action，并返回新的 state
    `,
  },
  {
    title: "react---6.raect合成事件",
    content: `
    React合成事件是React模拟原生DOM事件所有能力的一个事件对象。根据W3C规范来定义合成事件，兼容所有浏览器，拥有与浏览器原生事件相同的接口，包括stopPropagetion()和 preventDefault()。
    在React中，所有事件都是合成的，不是原生DOM事件，可以通过 e.nativeEvent属性获取原生DOM事件。合成事件不会映射到原生事件，浏览器兼容，实现更好的跨平台
    
    为什么出现这个技术?
    - 性能优化:使用事件代理统一接收原生事件的触发,从而可以使得真实 DOM上不用绑定事件。React合成事件触发可以知道用户触发了什么事件，是通过什么原生事件调用的真实事件。这样可以通过对原生事件的优先级定义进而确定真实事件的优先级，再进而可以确定真实事件内触发的更新是什么优先级，最终可以决定对应的更新应该在什么时机更新。
    - 分层设计:解决跨平台问题，抹平浏览器差异。
    `,
  },
  {
    title: "react---7.合成事件和原生事件的区别",
    content: `
    事件机制：react合成事件不是把onClick事件直接绑定到DOM上，而是采用事件冒泡的形式冒泡到document上，使用一个统一的事件去监听。这个事件监听器上维持了一个映射来保存所有组件内部的事件监听和处理函数。当组件挂载或卸载时，只是在这个统一的事件监听器上插入或删除一些对象。当事件发生时，首先被这个统一的事件监听器处理，然后在映射里找到真正的事件处理函数并调用。这样做简化了事件处理和回收机制，效率也有很大提升。
    - React 所有事件都挂载在 document 对象上
    - 当真实 DOM 元素触发事件，会冒泡到 document 对象后，再处理 React 事件
    - 所以会先执行原生事件，然后处理 React 事件
    - 最后真正执行 document 上挂载的事件
    `
  },
  {
    title: "react---8.react异步问题",
    content: `
    react17之前的版本会有这样异步的事件的问题，17之后已经修复,如果在异步的情况下，最好对于evt事件中的数据提前给保存起来，合成事件为了提升性能，它对于事件对象进行了统一的优化处理,全局是一个对象，所以在有的异步的情况下直接使用evt事件数据会出现异常情况，所以要在同步的情况下提前赋值，在异步使用
    `,
  },
  {
    title: "react---9.高阶组件",
    content: `
    函数的参数可以是函数，返回值也可以是一个函数(传递一个函数，返回一个增强后的函数),简称HOC，就是一个函数，在参数中传给它一个组件，返回一个新的组件，高阶组件相当于手机壳，通过包装组件，增强组件功能。

    实现步骤：
    1. 定义一个函数，此函数必须在参数中传入一个组件，参数指定为组件的，参数的首字母大写
    2. 在此函数内部创建一个类组件或函数组件，并且进行返回

    高阶组件常见业务作用：【高阶组件和vue中的自定义组件可以划相等】进行权限控制;路由权限;访问统计;统一布局
`,
  },
  {
    title: "react---10.redux-thunk",
    content: `
    redux-thunk是由redux官方开发出来的redux中间件，主要作用：解决redux中使用异步方案。redux-thunk中间件允许在connect参数2中派发任务时返回的是一个函数，此函数形参中，redux-thunk会自动注入一个dispatch派发函数，从而让你调用dispatch函数来派发任务给redux，从而实现异步处理。
    缺点：使用的是将异步转换为同步的方案，使用回调函数，出错不好追踪

    - 优点：使用简单，体积小
    - 解决了action操作，原来只能是一个同步的对象，现在可以为回调函数，可以异步
    - 缺点：● 样板代码过多: 与redux本身⼀样,通常⼀个请求需要⼤量的代码,⽽且很多都是重复性质的。
    ● 耦合严重: 异步操作与redux的action偶合在⼀起,不⽅便管理。
    ● 功能孱弱: 有⼀些实际开发中常⽤的功能需要⾃⼰进⾏封装
`,
  },
  {
    title: "react---11.redux-saga",
    content: `
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
  `,
  },
  {
    title: "react---11.redux-toolkit  ",
    content: `
    redux-toolkit是 Redux 官方推荐的工具集，他简化 Redux 应用的编写和维护。它提供了一些工具和函数
    主要特性
    1. 配置 Store 简化：提供 configureStore() 方法来自动设置 store。这个方法默认集成了常见的中间件，简化了 store 的配置。
    2. 创建 Reducer 和 Action 简化：通过 createSlice() 方法，可以在一个函数中同时定义 reducer 和相关的 actions。这减少了样板代码，并使得逻辑更加集中。
    3. 不可变性管理：内置了 Immer 库，允许在 reducer 中以更直观的方式修改 state，而无需手动保证 state 的不可变性。
    4. 异步逻辑处理：提供 createAsyncThunk 函数用于处理异步逻辑，使得在 Redux 应用中处理异步操作变得更简单。
    5. 扩展性和可重用性：鼓励将 Redux 逻辑切割成更小的片段，通过提供的 API，这些片段可以轻松重用和测试。
    `
  },
  {
    title: "react---12.immutable.js  ",
    content: `
    immutablejs库，它给我们创建了一新的js对象，此对象数据是不可变结构化数据。数据结构共享
    Immutable.js出自Facebook，是最流行的不可变数据结构的实现之一。它实现了完全的持久化数据结构，使用结构共享。所有的更新操作都会返回新的值，但是在内部结构是共享的，来减少内存占用。形成了历史可追溯，获取或修改时才会执行
    优点:1.降低对象深复制带来的复杂度;2.节省内存;3.历史追溯性
    
    缺点:1.需要重新学习api，有学习成本2.容易与原生对象混淆：由于api与原生不同，混用的话容易出错;3.第3方组件库不支持，使用时，还需要转换
  `,
  },
  {
    title: "react---13.react函数组件",
    content: `
    函数组件没有state状态，在React16.8后新增了hook，增强了函数组件的功能，让函数组件有类组件的能力，hook是一套工具函数的集合，hook不等于函数组件，所有的hook函数都是以use开头
    好处
    1. **代码可读性更强**，<u>原本同一块功能的代码逻辑被拆分在了不同的生命周期函数中</u>，容易使开发者修改代码时不易去查找，通过React Hook可以将功能代码聚合，方便维护。
    2. **组件树层级变浅**，在原木的代码中，我们经常使用 HOC/render/Props等方式来复用组件的状态，增强功能等，无疑增加了组件树层数及渲染，而在 React Hooks 中，这些功能都可以通过强大的自定义的Hooks来实现·
  `,
  },
  {
    title: "react---14.react hooks限制",
    content: `
    hook内部的实现就是一个链表数据结构，它结构中有一个next来指向下一个对象，所以使用hook时就一定不要把hook函数写到if/for等块作用语句中
    1. hook只能用在函数组件中，class组件中不行
    2. 普通函数不能使用hook，默认只能是函数组件才可以
    3. 函数组件内部的函数不能使用hook
    4. 函数组件的hook只能放在第一层，在if/for中不能使用，只能写在函数组件或自定义组件的顶层（是因为）
    5. 要求函数组件首字母必须大写

    <H3>hooks为什么只能在顶层使用?</H3>
    因为react存储的hook单链表，只能通过顺序去记录，如果在if和for里面使用，就分叉了，顺序乱套了。
  `,
  },
  {
    title: "react---15.react hooks",
    content: `
    hook内部的实现就是一个链表数据结构，它结构中有一个next来指向下一个对象，所以使用hook时就一定不要把hook函数写到if/for等块作用语句中
    1.useState,是一个hook工具函数，**用来在函数组件中模拟出类组件中的state状态**
    2.useEffect(副作用函数),此 hook可以**模拟函数组件的生命周期**，函数组件对于在一些生命周期中操作还是无能为力，所以 React提供了useEffect 来帮助开发者处理函数组件，来帮助模拟完成一部分	的开发中非常常用的生命周期方法。常被别的称为:副作用处理函数。此函数的操作是异步的。
    3.useReducer,这个Hooks在使用上几乎跟Redux一模一样，唯一缺点的就是无法使用redux.提供的中间件。 useReducer 是单个组件状态管理， 组件通讯还需要 props。
    4.useContext，Context对象解决跨层级组件通信方案
    5.useMemo(计算属性)，记忆组件，**如果依赖项没有发生改变**，则下一次结果走缓存
    6.useCallback，用于缓存操作方法，并且只监听依赖项的数据的变化才触发，其余状态不会重新创建函数方法，提高效率
    7.useRef，useRef 跟 createRef 类似，都可以用来生成对 DOM 对象的引用
    8.useLayoutEffect，同步操作，useEffect能做到的他能做到，但是可能会卡死，阻塞
  `,
  },
  {
    title: "react --- 16.useEffect和useLayoutEffect的区别",
    content:
      `
    主要区别在于执行时机：useEffect 在所有的 DOM 更改之后异步执行，不会阻塞页面渲染，而 useLayoutEffect 则在 DOM 更新之后立即同步执行，适用于对 DOM 布局和样式有影响的操作。在大多数情况下，useEffect 已足够使用，但在需要同步更改 DOM 或者避免闪烁时，应该使用 useLayoutEffect。
    `
  },
  {
    title: "react --- 17.useEffect 模拟生命周期",
    content:
      `
    useEffect第二个参数依赖项
    空列表[ ]           componentDidMount         挂载
    无依赖或者[a,b,c]    componentDidUpdate        更新
    返回一个函数       componentWillUnmount        将要卸载
    函数组件相对应类组件的缺点：没有生命周期，使用useEffect来模拟该组件的副作用函数
    `
  },
  {
    title: "react --- 18.useMemo 和useCallback 的区别",
    content: `
    usememo返回函数的返回值，usecallback返回函数本身
    1、useMemo
    ● useMemo 用于对复杂的计算结果进行记忆化。当你有一段计算逻辑，但只希望在特定的依赖项改变时才重新计算时，可以使用 useMemo。
    ● 它接受一个“创建”函数和一个依赖项数组。只有当依赖项发生变化时，这个“创建”函数才会被执行。
    ● useMemo 返回的是“创建”函数的返回值。
    2、useCallback
    ● useCallback 用于对函数本身进行记忆化。当你将函数作为 props 传递给子组件，或者在依赖于函数的 useEffect 中使用函数时，使用 useCallback 可以防止组件不必要的重新渲染。
    ● 它接受一个内联函数和一个依赖项数组。只有当依赖项发生变化时，这个函数才会被重新创建。
    ● useCallback 返回的是记忆化的函数本身。
    `
  },
  {
    title: "react --- 19.useState和useReducer的区别",
    content: `
    ● useState和useReducer都是用于函数组件内部定义状态的，区别在于，useState用于简单的状态管理和局部状态更新，而useReducer用于复杂的状态逻辑和全局状态管理。
    ● useState实际是一个自带了reducer功能的useReducer语法糖。
    ● 当你使用useState时，如果state没有发生变化，那么组件就不会更新。而使用了useReducer时，在state没有发生变化时，组件依然会更新。
    `
  },
  {
    title: "react --- 20.setState到底是同步还是异步",
    content: `
    ● React 18之前，React采用了一种同步和异步处理的机制，进入React调度流程的操作是异步处理，包括合成事件，而未进入调度流程的原生事件（如setTimeout、setInterval）是同步处理。这种同步处理方式可能会导致性能浪费，因为多次调用setState会重复触发多次渲染，即使只需要渲染最后一次的结果。
    ● 从React 18开始，通过使用createRoot创建应用，所有事件都会自动进行批量处理，而不再区分同步和异步。这意味着无论是合成事件还是原生事件，都会进入React的调度流程，以实现性能的优化。但如果仍然使用render方法进行渲染，事件处理流程仍然与React 18之前的机制相同，可能会导致不必要的性能问题。react18引入了Automatic Batching(自动批处理机制)。
    `
  },
  {
    title: "react --- 21.hooks解决了什么问题",
    content: `
    ● 更好的逻辑组织和代码分离：Hooks 允许开发者按照逻辑关系而非生命周期方法来组织代码，这使得相关代码更加集中和一致，提高了代码的可维护性。
    ● Hoc高阶组件，render props使得使组件结构复杂化。复杂组件变得难以理解。
    ● 在函数组件中使用状态和其他 React 特性：扩展了函数组件的功能。
    `
  },
  {
    title: "react --- 22.react组件通信的方式",
    content: `
    ● ⽗组件向⼦组件通讯: ⽗组件可以向⼦组件通过传 props 的⽅式，向⼦组件进⾏通讯 
    ● ⼦组件向⽗组件通讯: props+回调的⽅式，⽗组件向⼦组件传递props进⾏通讯，此props为作⽤域为⽗组件⾃身的函 数，⼦组件调⽤该函数，将⼦组件想要传递的信息，作为参数，传递到⽗组件的作⽤域中。 
    ● 兄弟组件通信: 找到这两个兄弟节点共同的⽗节点,进行状态提升，结合上⾯两种⽅式由⽗节点转发信息进⾏通信 
    ● 跨层级通信: 
      ○ props层层传递回调函数。
      ○ Context 设计⽬的是为了共享那些对于⼀个组件树⽽⾔是“全局”的数据，例如当前认证的⽤户、主题或⾸选语⾔，对于跨越多层的全局数据通过 Context 通信再适合不过。
    ● 非嵌套关系的组件通信：
      ○  (发布订阅模式): 发布者发布事件，订阅者监听事件并做出反应,我们可以通过引⼊event模块进⾏通信 
      ○ (全局状态管理⼯具): 借助Redux或者Mobx等全局状态管理⼯具进⾏通信,这种⼯具会维护⼀个全局状态中⼼Store,并根据不同的事件产⽣新的状态
      `
  },
  {
    title: "react --- 23.哪些方法会触发 React 重新渲染以及如何避免不必要的重新渲染？",
    content: `
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
    `
  },
  {
    title: "react --- 24.受控组件和非受控组件的区别",
    content: `
    ● 受控组件：组件的展示完全由传入的属性决定。比如说，如果一个输入框中的值完全由传入的 value 属性决定，而不是由用户输入决定，那么就是受控组件，写法是：<input value={value} onChange={handleChange} />。
    ● 非受控组件：表单组件可以有自己的内部状态，而且它的展示值是不受控的。比如 input 在非受控状态下的写法是：< input onChange={handleChange}/>。
      ○ 使用场景：1.必须手动操作DOM的  2.文件上传 3.富文本编辑，需要传入DOM元素
    `
  },
  {
    title: "react --- 25.虚拟dom",
    content: `
    虚拟dom是用js模拟一颗dom树,放在浏览器内存中，相当于在js和真实dom中加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能。
    优点：
      （1）虚拟DOM具有批处理和高效的Diff算法,最终表现在DOM上的修改只是变更的部分，可以保证非常高效的渲染,优化性能；
      （2）虚拟DOM不会立马进行排版与重绘操作，对虚拟DOM进行频繁修改，最后一次性比较并修改真实DOM中需要改的部分；
      （3）虚拟 DOM 有效降低大面积真实 DOM 的重绘与排版，因为最终与真实 DOM 比较差异，可以只渲染局部；
    缺点：首次渲染大量DOM时，由于多了一层虚拟DOM的计算，会比innerHTML插入慢；
    `
  },
  {
    title: "react --- 26.为什么使用虚拟dom",
    content: `
    1. 性能提升：保证性能下限，在不进行手动优化的情况下，提供过得去的性能。操作真实 DOM 是昂贵的（性能开销较大），因为它会导致浏览器的重绘和重排。虚拟 DOM 允许 React 在内存中进行所有的计算，减少了直接操作真实 DOM 的次数，从而提升性能。
    2. 跨平台：虚拟 DOM 是平台无关的，这意味着相同的组件可以在不同的环境中渲染，如浏览器、服务器（SSR）或原生应用（React Native）。
    `
  },
  {
    title: "react --- 27.虚拟 DOM 的引入与直接操作原生 DOM 相比，哪一个效率更高，为什么？",
    content: `
    1. 开发体验与效率：虚拟 DOM 主要提升了开发体验和效率。它允许开发者通过更声明式的编程方式来管理 UI，专注于数据和状态，而不是复杂的 DOM 操作。这种方法简化了代码，提高了可维护性和开发效率，特别是在构建大型和复杂的应用时。
    2. 性能的平衡和适用性：虚拟 DOM 在性能方面提供了一种平衡。它通过减少不必要的 DOM 操作和优化批量更新，避免了一些性能瓶颈。虽然在某些简单操作中，直接操作原生 DOM 可能更快，但在处理大量数据和复杂的 UI 更新时，虚拟 DOM 可以提供更稳定和预测性更强的性能。虚拟 DOM 的性能优势并非绝对，而是依赖于特定的应用场景和需求。
    3. React 官方的立场：React 官方从未声称虚拟 DOM 主要是为了性能优化。相反，React卖点强调的是组件化开发和声明式 UI，这提高了开发的灵活性和效率。
    `
  },
  {
    title: "react --- 28.diff算法",
    content: `
    React 在执行 render 过程中会产生新的虚拟 DOM, 在浏览器平台下, 为了尽量减少 DOM 的创建, React 会对新旧虚拟 DOM 进行 diff 算法找到它们之间的差异, 尽量复用 DOM 从而提高性能; 所以 diff 算法主要就是用于查找新旧虚拟 DOM 之间的差异。
    流程：
    对新旧两棵树做深度优先遍历，避免对两棵树做完全比较，因此算法复杂度可以达到 O(n)。然后给每个节点生成一个唯一的标志。 在遍历的过程中，每遍历到一个节点，就将新旧两棵树作比较，并且只对同一级别的元素进行比较：
    ● 只进行同一层级的比较，如果跨层级的移动则视为创建和删除操作。
    ● 如果是不同类型的元素，则认为是创建了新的元素，而不会递归比较他们的孩子。
    ● 如果是列表元素等比较相似的内容，可以通过key来唯一确定是移动还是创建或删除操作。
    `
  },
  {
    title: "react --- 29. diff算法策略",
    content: `
    1、tree diff 同级元素比较
    2、component diff 组件之间比较
    3、element diff 节点比较
    element 同一层级的节点的比较规则, 根据每个节点在对应层级的唯一 key 作为标识, 并且对于同一层级的节点操作只有 3 种, 分别为 INSERT_MARKUP(插入)MOVE_EXISTING(移动)REMOVE_NODE(删除)	
    `
  },
  {
    title: "react --- 30.为什么需要fiber",
    content: `
    在React 16之前的版本中，是使用递归的方式处理组件树更新，称为堆栈调和（Stack Reconciliation），这种方法一旦开始就不能中断，直到整个组件树都被遍历完。这种机制在处理大量数据或复杂视图时可能导致主线程被阻塞，从而使应用无法及时响应用户的输入或其他高优先级任务。
    Fiber的引入改变了这一情况。Fiber可以理解为是React自定义的一个带有链接关系的DOM树，每个Fiber都代表了一个工作单元，React可以在处理任何Fiber之前判断是否有足够的时间完成该工作，并在必要时中断和恢复工作。
    `
  },
  {
    title: "react --- 31.fiber工作原理",
    content: `
    Fiber工作原理中最核心的点就是：可以中断和恢复，这个特性增强了React的并发性和响应性。
    实现可中断和恢复的原因就在于：Fiber的数据结构里提供的信息让React可以追踪工作进度、管理调度和同步更新到DOM
    `
  },
  {
    title: "react --- 32.fiber核心特点",
    content: `
    增量渲染： React Fiber 将更新任务拆分成多个小任务单元（称为 “fiber”），并使用优先级调度器来处理这些任务，以提高响应性和用户体验。
    优先级调度： Fiber 引入了优先级概念，使 React 能够根据任务的优先级来决定任务的执行顺序，确保高优先级任务得到及时处理。
    中断与恢复： React Fiber 允许在渲染过程中中断任务，然后在适当的时机恢复执行，从而避免了阻塞的情况。
    任务取消： Fiber 具备任务取消的能力，可以取消不必要的更新，提高性能。
    `
  },
  {
    title: "react --- 33.react-redux和redux的区别",
    content: `
    Redux和组件进行对接的时候是直接在组件中创建。React-redux是运用Provider将组件和store对接，使在provider里的所有组件都能共享store里的数据，还要使用connect将组件和react连接。
    获取state的方式不一样：redux获取state是直接通过store.getState()；react-redux获取state是通过mapStateToProps函数，只要数据变化就能获取最新数据。
    触发action的方式不一样：redux通过dispatch直接触发来操作store的数据；react-redux是使用mapDispatchToProps函数然后调用dispatch进行触发。
    `
  },
  {
    title: "react --- 33.react-redux的provider和connect",
    content: `
    Provider：提供器，在该组件内部的所有组件都可以使用store，是react组件可以被连接
    Connect：连接器，获取store数据。使用connect可以把state和dispatch绑定到react组件，使得组件可以访问到redux的数据。函数最终返回的是将state和dispatch绑定到connect之后的新组件。
    `
  },
  {
    title: "react --- 34. React-Router的实现原理是什么？",
    content: `
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
    `
  },
  {
    title: "react --- 35.react-router 里的 Link 标签和 a 标签的区别？",
    content: `
    从最终渲染的 DOM 来看，这两者都是链接，都是 a标签，区别是∶
    <Link>是react-router 里实现路由跳转的链接，一般配合<Route> 使用，react-router接管了其默认的链接跳转行为，区别于传统的页面跳转，<Link> 的“跳转”行为只会触发相匹配的<Route>对应的页面内容更新，而不会刷新整个页面。
    `
  },
  {
    title: "react --- 36.react父组件props变化的时候子组件怎么监听",
    content: `
    当props发生变化时执行，初始化render时不执行，在这个回调函数里面，你可以根据属性的变化，通过
    调用this.setState()来更新你的组件状态，旧的属性还是可以通过this.props来获取,这里调用更新状态是安
    全的，并不会触发额外的render调用
    `
  },
  {
    title: "react --- 37.redux和mobx的区别",
    content: `
    Redux 数据流流动很自然，可以充分利用时间回溯的特征，增强业务的可预测性；MobX 没有那么自然的数据流动，也没有时间回溯的能力，但是 View 更新很精确，粒度控制很细。
    Redux 通过引入一些中间件来处理副作用；MobX  没有中间件，副作用的处理比较自由，比如依靠 autorunAsync 之类的方法。
    Redux 的样板代码更多，看起来就像是我们要做顿饭，需要先买个调料盒装调料，再买个架子放刀叉。。。做一大堆准备工作，然后才开始炒菜；而 MobX 基本没啥多余代码，直接硬来，拿着炊具调料就开干，搞出来为止
    `
  },
  {
    title: "react --- 38.redux和dva的区别",
    content: `
    dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架。
    简单理解，就是让使用 react-redux 和 redux-saga 编写的代码组织起来更合理，维护起来更方便。
    区别：
    1、简化: Dva 提供了一些约定和内置功能，使得开发者能够更快速地搭建和开发应用，相比之下，Redux 需要开发者手动处理更多的细节。
    2、副作用处理: Dva 内置了基于 redux-saga 的 Effects，简化了处理异步操作的流程，而 Redux 需要使用中间件（如redux-thunk、redux-saga）来处理异步操作。
    3、约定优于配置: Dva 鼓励使用约定优于配置的方式，通过遵循约定来减少配置，使得开发流程更加简洁高效。
    4、轻量级: Dva 是一个轻量级的框架，相比 Redux 来说，它的 API 更少，学习曲线更低，适合快速开发小到中型规模的应用。
    `
  },
  {
    title: "react --- 39.umi定制化方案做过哪些",
    content: `
    插件扩展：umi 提供了丰富的插件系统，开发者可以通过编写插件来扩展 umi 的功能。比如可以编写自定义的插件来增加路由功能、状态管理功能、代码分割功能等。umi 的插件系统提供了一些生命周期钩子，使得开发者能够在不同的阶段介入，并且可以根据需要修改配置、注入代码等。
    布局定制：umi 允许开发者自定义应用的布局，包括页面结构、公共组件、全局样式等。开发者可以通过编写布局组件来定义应用的整体结构，比如头部导航、底部栏等，使得页面布局更加灵活和统一。
    主题定制：umi 支持主题定制，开发者可以通过配置主题变量来定制应用的样式。umi 内置了一些主题变量，比如颜色、字体大小等，开发者可以根据项目需求修改这些变量，从而定制应用的整体风格。
    路由配置：umi 允许开发者灵活地配置路由，包括动态路由、嵌套路由、权限控制等。开发者可以根据项目需求定义路由结构，并且可以通过路由配置来控制页面的访问权限、页面的展示效果等。
    打包优化：umi 提供了一些打包优化的配置选项，开发者可以根据项目需求调整打包策略，比如代码分割、按需加载、压缩代码等。umi 默认采用了基于 webpack 的打包工具，开发者可以根据需要修改 webpack 配置文件，以满足特定的优化需求。
    `
  },
  {
    title: "react --- 40.插件中配置umi",
    content: `
    插件中配置 Umi
    在插件开发中使用 modifyConfig 修改用户的配置，这是我最喜欢用的一种方式，因为可以“黑盒”的修改一些 Umi 的配置，其实也相当于修改了 Umi 的默认行为，比如在同一个团队中，我们可以将一些共同的配置，放到插件中，这样每一个项目的配置文件就会非常的干净。同团队中，会大大减少配置文件的维护工作。
    像 alita 中，使用 modifyConfig 修改了 alita 项目中默认的一些配置信息，这样 alita 项目中的配置文件就可以很干净。加入说我们不使用 modifyConfig，而是要求用户严格编写如下配置，才能正常使用。这肯定会增加框架的维护成本。
    `
  },
  {
    title: "react --- 41.umi插件实现原理",
    content: `
    Umi 是一个可扩展的企业级前端框架，其插件系统是其核心特性之一。Umi 插件实现原理主要有几个关键点：
    1、插件接口定义：Umi 定义了一套插件接口，插件需要遵循这些接口来开发。这样，Umi 框架可以识别并加载这些插件。
    2、动态加载机制：Umi 使用动态加载机制来加载插件。当框架启动或运行时，根据配置或需求动态加载相应的插件。
    3、插件生命周期：每个插件都有其生命周期，包括初始化、挂载、卸载等阶段。在这些阶段，插件可以执行特定的操作，如注册路由、添加中间件等。
    4、扩展性：Umi 的插件系统是高度扩展的，允许开发者自定义插件，并通过遵循接口规范来集成到框架中。
    `
  },
  {
    title: "react --- 42.dva设计思想",
    content: `
    Dva 是一个基于 React 和 Redux 的轻量级前端框架，设计思想包括：
    1、简化 Redux 开发：Redux 是一个强大的状态管理库，但是在使用过程中需要编写大量的模板代码，比如定义 action 类型、编写 action 创建函数、编写 reducer 等。Dva 提供了一些约定和工具来简化 Redux 的开发，比如约定式的文件目录结构、自动创建 action 和 reducer 等，使开发者能够更快速地编写 Redux 相关的代码。
    2、集成 React-Router：Dva 默认集成了 React-Router，使得路由管理变得更加简单。开发者可以通过 Dva 提供的路由配置方式来管理页面之间的跳转和传参，而不需要手动管理路由的状态。
    3、内置异步处理方案：在实际项目中，经常需要处理异步操作，比如发送网络请求获取数据。Dva 内置了基于 Redux-Saga 的异步处理方案，使得开发者能够更加方便地管理异步操作，比如发起请求、监听响应、更新状态等。
    4、支持插件扩展：Dva 提供了一些插件，比如 dva-loading、dva-immer 等，用来增强开发体验或者提供额外的功能。开发者可以根据项目需求选择合适的插件，并且可以自定义插件来满足特定的需求。
    5、约定优于配置：Dva 遵循约定优于配置的设计原则，通过约定式的方式来减少配置，提高开发效率。比如约定 model 文件的命名和目录结构、约定路由配置的格式等，使得开发者能够更快速地上手并且降低维护成本。
    总的来说，Dva 的设计思想是简化 Redux 开发、集成常用的前端技术、提供便捷的异步处理方案，并且支持插件扩展，以提高开发效率和降低学习成本。
    `
  },
  {
    title: "react --- 43.dva实现原理",
    content: `
    Dva 的实现原理包括以下几个方面：
    1、Redux：Dva 使用 Redux 作为状态管理库，通过 Redux 提供的 store 和 reducer 来管理状态。
    2、React-Router：Dva 默认集成了 React-Router，使得路由管理更加简单。
    3、Redux-Saga：Dva 内置了基于 Redux-Saga 的异步处理方案，使得开发者能够更加方便地管理异步操作。
    `
  },
  {
    title: "react --- 44.自定义Hooks",
    content: `
    以 use 开头，按照需要可以使用其他hook，像useState、useEffect之类的，然后主要是逻辑要能复用的，创建一个独立的状态和逻辑，能在在多个组件中使用互不影响，就比如可以结合localStorage封装状态数据存储或者结合fetch封装异步数据获取的Hook或者表单处理和验证的之类的。
    `
  },
  {
    title: "react --- 45.react useState useEffect实现原理",
    content: `
    useState:React 内部维护了一个数据结构，用于存储组件的状态。当调用 usestate时，React 会根据组件的标识符找到相应的状态，并返回状态值及更新状态的函数。更新状态时，React 会更新相应的状态，并触发组件的重新渲染。
    useEffect:React 使用链表来管理副作用。每个组件都有一个链表，用于存储其副作用。当调用 useEffect时，React 会创建一个副作用对象，并将其添加到组件的链表中。在组件渲染后，React 会依次执行链表中的副作用对象的回调函数。当组件卸载或者依赖项变化时，React 会清理相应的副作用对象。
    `
  },
  {
    title: "react --- 46. react.memo",
    content: `
    这个方法是一个 React 顶层 Api 方法，给函数组件来减少重复渲染，类似于 PureComponent 和 shouldComponentUpdate 方法的一个集合体。
    React.memo顶层Api方法，它可以用来减少子组件的重复渲染次数，从而提升组件渲染性能。
    React.memo它是一个只能在函数组件中使用的顶层Api方法。
    当父组件发生改变时，默认情况下它的子孙组件也会重新渲染，当某些子组件不需要更新时，也会被强制更新，为了避免这种情况，我们可以使用 React.memo。
    `
  },
  {
    title: "react --- 47. React 17 的新特性是什么？",
    content: `
    React 17 的主要新特性是改进了 React 的事件系统，使得事件处理程序的行为更加一致，并且更好地支持像 Web Components 这样的可重用组件库。
    此外，React 17 还引入了一种新的渲染方法，称为“服务器渲染的渲染”，它允许使用 React 在非 DOM 环境中进行渲染，例如在 Canvas 或游戏引擎中。
    `
  },
  {
    title: "react --- 48. React 17 中如何避免了一些常见的错误？",
    content: `
    React 17 中引入了一些新的警告和错误，这些错误可以帮助开发人员更早地发现常见的错误，例如错误地使用 ref、将字符串传递给事件处理程序等等。
    此外，React 17 还改进了错误消息，使得它们更加易于理解和调试。
    `
  },
  {
    title: "react --- 49. React 17 中的事件处理机制发生了什么变化？",
    content: `
    React 17 中的事件处理机制已经升级，它现在更好地支持像 Web Components 这样的可重用组件库。在 React 17 中，事件处理程序的行为更加一致，无论是在 DOM 还是在自定义组件中。
    React 17 还引入了一个新的事件系统，称为“选择器事件系统”，它可以让开发人员使用类似于 CSS 选择器的语法来选择元素并绑定事件处理程序。
    `
  },
  {
    title: "react --- 50. React 17 中的错误边界有什么变化？",
    content: `
    在 React 17 中，错误边界的行为与之前基本相同，但是现在可以将多个错误边界嵌套在一起，以更好地控制错误的边界范围。此外，React 17 还引入了一些新的 API，使得错误边界更容易使用和调试。
    `
  },
  {
    title: "react --- 51. React 17 中的 React.StrictMode 有什么变化？",
    content: `
    在 React 17 中，React.StrictMode 的行为与之前基本相同，但是现在已经删除了对 UNSAFE_ 生命周期的支持。此外，React 17 还引入了一些新的警告和错误，使得在 StrictMode 下调试更加容易。
    `
  },
  {
    title: "react --- 52. React 17 中如何使用服务端渲染的渲染？",
    content: `
    React 17 中引入了一种新的渲染方法，称为“服务器渲染的渲染”，它允许使用 React 在非 DOM 环境中进行渲染，例如在 Canvas 或游戏引擎中。
    要使用这种新的渲染方法，需要使用 ReactDOMServer 类的 renderToStaticNodeStream 或 renderToNodeStream 方法来渲染应用程序，并将输出流发送到目标环境中。
    `
  },
  {
    title: "react --- 53. React 18已经在正式发布哪些新特性",
    content: `
    React 18 包括了一些新特性和改进，具体包括：
    自适应渲染（Adaptive Rendering）：新的渲染模式，可以根据用户设备、网络和性能情况，动态调整渲染策略，以提高 Web 应用的响应速度和性能表现。
    增量更新（Incremental Updates）：引入了新的渲染器（Renderer），可以实现增量更新，只更新需要变化的部分，提高了应用的性能和响应速度。
    服务器渲染（Server Components）：可以在服务器端渲染 React 组件，以提高应用的性能和 SEO 表现。
    异步渲染（Async Rendering）：通过新的 Suspense API 和 useTransition Hook，可以实现更细粒度的异步渲染，以提高应用的用户体验和性能表现。
    其他改进：包括对 React 核心架构的优化、对 React DevTools 的改进、对 Hooks API 的扩展和改进等。
    `
  },
  {
    title: "react --- 54. 类组件和函数组件有什么区别",
    content: `
    类组件是继承自 React.Component 类的 JavaScript 类，必须要有一个 render 方法来定义组件的输出。类组件可以通过 this.props 来获取父组件传递下来的 props 属性，并通过 this.state 来存储组件自己的状态。
    函数组件是简单的 JavaScript 函数，函数的返回值就是组件的输出。函数组件可以通过参数来获取父组件传递下来的 props 属性，并通过 useState 等 Hook 来存储组件自己的状态。
    下面是类组件和函数组件的区别：
    1. 语法：类组件是一个继承自 React.Component 的 JavaScript 类，而函数组件是一个简单的 JavaScript 函数。
    2. 状态管理：类组件使用 this.state 来管理状态，而函数组件使用 useState 等 Hook 来管理状态。
    3. 生命周期：类组件有一系列生命周期方法，如 componentDidMount、componentDidUpdate 等，而函数组件可以使用 useEffect 等 Hook 来模拟这些生命周期方法。
    4. 性能：函数组件比类组件更加轻量级，因为它不需要创建类实例，所以在渲染大量组件时，函数组件的性能会更好。
    总的来说，随着 React Hooks 的推出，函数组件越来越成为 React 的主要开发方式。当你只需要展示一些简单的 UI 时，使用函数组件会更加简洁和方便，而在需要进行复杂的状态管理和生命周期控制时，则需要使用类组件。
    `
  },
];
