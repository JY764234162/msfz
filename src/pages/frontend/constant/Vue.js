export default [
  {
    title: "Vue --- 1. Vue的基本原理",
    content: `
    当一个Vue实例创建时，Vue会遍历data中的属性，用 Object.defineProperty（vue3.0使用proxy ）将它们转为 getter/setter，并且在内部追踪相关依赖，在属性被访问和修改时通知变化。 每个组件实例都有相应的 watcher 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的setter被调用时，会通知watcher重新计算，从而致使它关联的组件得以更新。
    `,
  },
  {
    title: "Vue --- 2. 双向数据绑定的原理",
    content: `
    Vue通过Object.defineProperty()方法对数据进行劫持，监听数据的变化，并通过getter和setter方法对数据进行读写。
    其次，Vue通过发布订阅模式，维护了一个订阅者数组，当数据发生变化时，Vue会通知所有订阅者进行更新。因此，当用户在页面上进行修改时，Vue会更新对应的数据，并更新所有订阅者更新视图，同时当数据发生变化时，Vue也会更新对应的视图，通过这样的机制，Vue实现了双向数据绑定，使得数据和视图的变化可以互相影响
    `,
  },
  {
    title: "Vue --- 3. 使用 Object.defineProperty() 来进行数据劫持有什么缺点？",
    content: `
      在对一些属性进行操作时，使用这种方法无法拦截，比如通过下标方式修改数组数据或者给对象新增属性，这都不能触发组件的重新渲染，因为 Object.defineProperty 不能拦截到这些操作。更精确的来说，对于数组而言，大部分操作都是拦截不到的，只是 Vue 内部通过重写函数的方式解决了这个问题。

      在 Vue3.0 中已经不使用这种方式了，而是通过使用 Proxy 对对象进行代理，从而实现数据劫持。使用Proxy 的好处是它可以完美的监听到任何方式的数据改变，唯一的缺点是兼容性的问题，因为 Proxy 是 ES6 的语法。
      `,
  },
  {
    title: "Vue --- 4. MVC原理",
    content: `
    MVC 通过分离 Model、View 和 Controller 的方式来组织代码结构。其中 View 负责页面的显示逻辑，Model 负责存储页面的业务数据，以及对相应数据的操作。并且 View 和 Model 应用了观察者模式，当 Model 层发生改变的时候它会通知有关 View 层更新页面。Controller 层是 View 层和 Model 层的纽带，它主要负责用户与应用的响应操作，当用户与页面产生交互的时候，Controller 中的事件触发器就开始工作了，通过调用 Model 层，来完成对 Model 的修改，然后 Model 层再去通知 View 层更新。
    `,
  },
  {
    title: "Vue --- 5. MVVM原理",
    content: `
      MVVM 分为 Model、View、ViewModel：
      ● Model代表数据模型，数据和业务逻辑都在Model层中定义；
      ● View代表UI视图，负责数据的展示；
      ● ViewModel负责监听Model中数据的改变并且控制视图的更新，处理用户交互操作；
      
      Model和View并无直接关联，而是通过ViewModel来进行联系的，Model和ViewModel之间有着双向数据绑定的联系。因此当Model中的数据改变时会触发View层的刷新，View中由于用户交互操作而改变的数据也会在Model中同步。
      
      这种模式实现了 Model和View的数据自动同步，因此开发者只需要专注于数据的维护操作即可，而不需要自己操作DOM。
      `,
  },
  {
    title: "Vue --- 6. MVP原理",
    content: `
    MVP 模式与 MVC 唯一不同的在于 Presenter 和 Controller。在 MVC 模式中使用观察者模式，来实现当 Model 层数据发生变化的时候，通知 View 层的更新。这样 View 层和 Model 层耦合在一起，当项目逻辑变得复杂的时候，可能会造成代码的混乱，并且可能会对代码的复用性造成一些问题。MVP 的模式通过使用 Presenter 来实现对 View 层和 Model 层的解耦。MVC 中的Controller 只知道 Model 的接口，因此它没有办法控制 View 层的更新，MVP 模式中，View 层的接口暴露给了 Presenter 因此可以在 Presenter 中将 Model 的变化和 View 的变化绑定在一起，以此来实现 View 和 Model 的同步更新。这样就实现了对 View 和 Model 的解耦，Presenter 还包含了其他的响应逻辑。
    `,
  },
  {
    title: "Vue --- 7. Computed 和 Watch 的区别",
    content: `
      ● computed 计算属性 : 依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值。 
      ● watch 侦听器 : 更多的是观察的作用，无缓存性，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作。
      `,
  },
  {
    title: "Vue --- 8. Computed 和 Methods 的区别",
    content: `
      相同点：
      ● 可以将同一函数定义为一个 method 或者一个计算属性。对于最终的结果，两种方式是相同的 

      不同点： 
      ● computed: 计算属性是基于它们的依赖进行缓存的，只有在它的相关依赖发生改变时才会重新求值；
      ● method 调用总会执行该函数。
      `,
  },
  {
    title: "Vue --- 9. slot是什么，有什么作用？",
    content: `
      slot又名插槽，是Vue的内容分发机制，组件内部的模板引擎使用slot元素作为承载分发内容的出口。插槽slot是子组件的一个模板标签元素，而这一个标签元素是否显示，以及怎么显示是由父组件决定的。slot又分三类，默认插槽，具名插槽和作用域插槽。
      ● 默认插槽：又名匿名插槽，当slot没有指定name属性值的时候一个默认显示插槽，一个组件内只有有一个匿名插槽。
      ● 具名插槽：带有具体名字的插槽，也就是带有name属性的slot，一个组件可以出现多个具名插槽。
      ● 作用域插槽：默认插槽、具名插槽的一个变体，可以是匿名插槽，也可以是具名插槽，该插槽的不同点是在子组件渲染作用域插槽时，可以将子组件内部的数据传递给父组件，让父组件根据子组件的传递过来的数据决定如何渲染该插槽。
      `,
  },
  {
    title: "Vue --- 10. slot原理",
    content: `
    当子组件vm实例化时，获取到父组件传入的slot标签的内容，存放在vm.$slot中，默认插槽为vm.$slot.default，具名插槽为vm.$slot.xxx，xxx 为插槽名，当组件执行渲染函数时候，遇到slot标签，使用$slot中的内容进行替换，此时可以为插槽传递数据，若存在数据，则可称该插槽为作用域插槽。
    `,
  },
  {
    title: "Vue --- 11. 过滤器是什么，有什么作用？",
    content: `
    过滤器是用来过滤数据的，在Vue中使用filters来过滤数据，filters不会修改数据，而是过滤数据，改变用户看到的输出（计算属性 computed ，方法 methods 都是通过修改数据来处理数据格式的输出显示）。
    `,
  },
  {
    title: "Vue --- 12. 如何写一个过滤器",
    content: `
    过滤器是一个函数，它会把表达式中的值始终当作函数的第一个参数。过滤器用在插值表达式 {{ }} 和 v-bind 表达式 中，然后放在操作符“ | ”后面进行指示。
    `,
  },
  {
    title: "Vue --- 13. 常见的事件修饰符及作用",
    content: `
      ● .stop：等同于 JavaScript 中的 event.stopPropagation() ，防止事件冒泡；
      ● .prevent ：等同于 JavaScript 中的 event.preventDefault() ，防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）；
      ● .capture ：与事件冒泡的方向相反，事件捕获由外到内；
      ● .self ：只会触发自己范围内的事件，不包含子元素；
      ● .once ：只会触发一次
      `,
  },
  {
    title: "Vue --- 14. v-if、v-show、v-html 的原理",
    content: `
      ● v-if会调用addIfCondition方法，生成vnode的时候会忽略对应节点，render的时候就不会渲染；
      ●  v-show会生成vnode，render的时候也会渲染成真实节点，只是在render过程中会在节点的属性中修改show属性值，也就是常说的display； 
      ● v-html会先移除节点下的所有节点，调用html方法，通过addProp添加innerHTML属性，归根结底还是设置innerHTML为v-html的值。
      `,
  },
  {
    title: "Vue --- 15. v-if和v-show的区别",
    content: `
      ● 手段：v-if是动态的向DOM树内添加或者删除DOM元素；v-show是通过设置DOM元素的display样式属性控制显隐；
      ● 编译过程：v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换；
      ● 编译条件：v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译; v-show是在任何条件下，无论首次条件是否为真，都被编译，然后被缓存，而且DOM元素保留；
      ● 性能消耗：v-if有更高的切换消耗；v-show有更高的初始渲染消耗；
      ● 使用场景：v-if适合运营条件不大可能改变；v-show适合频繁切换
      `,
  },
  {
    title: "Vue --- 16. v-model是什么？",
    content: `
      v-model 是 vue 中进行数据双向绑定的指令，在内部实际上是通过语法糖来完成数据的双向绑定，v-model 绑定的形式有两种，一种是绑定在普通表单元素上，一种是绑定在自定义组件上，两者在实现上也略微不同；

      绑定在普通表单元素上，分别有 input select textarea radio 等，从源码中也可以看出，他们之间的实现也略微不同，区别在于改变值时触发的事件不同；
      `,
  },
  {
    title: "Vue --- 17. v-model 是如何实现的，语法糖实际是什么",
    content: `
      ● 当 v-model 绑定在普通表单元素 select、checkbox、radio 时，语法糖为 v-bind:value 和 v-on:change；
      ● 当 v-model 绑定在 input、textarea时，语法糖分几种情况：
        ○ 默认为 input 事件；
        ○ 带 lazy 修饰符时为 change 事件；
        ○ 带 type="range" 属性时为 __r；
        ○ 带 trim或 number 时新增 blur 事件；
      ● 当 v-model 绑定在自定义组件时，语法糖为 v-bind:value 和 v-on:input 或者自定义 model 选项；
    `,
  },
  {
    title: "Vue --- 18. data为什么是一个函数而不是对象",
    content: `
    Vue组件可能存在多个实例，如果使用对象形式定义data，则会导致它们共用一个data对象，那么状态变更将会影响所有组件实例，这是不合理的；采用函数形式定义，在initData时会将其作为工厂函数返回全新data对象，有效规避多实例之间状态污染问题。而在Vue根实例创建过程中则不存在该限制，也是因为根实例只能有一个，不需要担心这种情况。
    `,
  },
  {
    title: "Vue --- 19. 对keep-alive的理解",
    content: `
      如果需要在组件切换的时候，保存一些组件的状态防止多次渲染，就可以使用 keep-alive 组件包裹需要保存的组件。
      keep-alive有以下三个属性：
      ● include 字符串或正则表达式，只有名称匹配的组件会被匹配；
      ● exclude 字符串或正则表达式，任何名称匹配的组件都不会被缓存；
      ● max 数字，最多可以缓存多少组件实例。
      `,
  },
  {
    title: "Vue --- 20. keep-alive 实现原理",
    content: `
      1. 判断组件 name ，不在 include 或者在 exclude 中，直接返回 vnode，说明该组件不被缓存。
      2. 获取组件实例 key ，如果有获取实例的 key，否则重新生成。
      3. key生成规则，cid +"∶∶"+ tag ，仅靠cid是不够的，因为相同的构造函数可以注册为不同的本地组件。
      4. 如果缓存对象存在，则直接从缓存对象中获取组件实例给 vnode ，不存在则添加到缓存对象中。
      5. 最大缓存数量，当缓存组件数量超过 max 值时，清除 keys 数组内第一个组件。
      `,
  },
  {
    title: "Vue --- 21. $nextTick原理",
    content: `
      Vue 的 nextTick 其本质是对 JavaScript 执行原理 EventLoop 的一种应用
      nextTick 的核心是利用了 Promise 、MutationObserver、setImmediate、setTimeout的原生 JavaScript 方法来模拟对应的微/宏任务的实现，本质是为了利用 JavaScript 的这些异步回调任务队列来实现 Vue 框架中自己的异步回调队列。
      `,
  },
  {
    title: "Vue --- 22. $nextTick使用场景",
    content: `
      ● 在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的DOM结构的时候，这个操作就需要方法在nextTick()的回调函数中。
      ● 在vue生命周期中，如果在created()钩子进行DOM操作，也一定要放在nextTick()的回调函数中
      `,
  },
  {
    title: "Vue --- 23. Vue 如何给 data 中的对象属性添加一个新的属性",
    content: `
    使用全局api：$set()方法，传参分别是：this.$set(要改变的数组/对象，你要改变的位置/key，你要改成的值)
    `,
  },
  {
    title: "Vue --- 24. $set原理",
    content: `
      vm.$set 的实现原理是：
      ● 如果目标是数组，直接使用数组的 splice 方法触发响应式；
      ● 如果目标是对象，先判断属性是否存在、对象是否是响应式，最终如果要对属性进行响应式处理，则是通过调用 defineReactive 方法进行响应式处理（ defineReactive 方法就是 Vue 在初始化对象时，给对象属性采用 Object.defineProperty 动态添加 getter 和 setter 的功能所调用的方法)
      `,
  },
  {
    title: "Vue --- 25. Vue中封装的数组方法有哪些，其如何实现页面更新",
    content: `
      ● 数组方法有：push、pop、shift、unshift、splice、sort、reverse
      ● 如何更新：重写了数组中的那些原生方法，首先获取到这个数组的__ob__，也就是它的Observer对象，如果有新的值，就调用observeArray继续对新的值观察变化（也就是通过target__proto__ == arrayMethods来改变了数组实例的型），然后手动调用notify，通知渲染watcher，执行update。
      `,
  },
  {
    title: "Vue --- 26. Vue 单页应用与多页应用的区别",
    content: `
      ● SPA单页面应用（SinglePage Web Application），指只有一个主页面的应用，一开始只需要加载一次js、css等相关资源。所有内容都包含在主页面，对每一个功能模块组件化。单页应用跳转，就是切换相关组件，仅仅刷新局部资源。
      ● MPA多页面应用 （MultiPage Application），指有多个独立页面的应用，每个页面必须重复加载js、css等相关资源。多页应用跳转，需要整页资源刷新
      `,
  },
  {
    title:
      "Vue --- 27. Vue data 中某一个属性的值发生改变后，视图会立即同步执行重新渲染吗？",
    content: `
      不会立即同步执行重新渲染。Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化， Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。

      如果同一个watcher被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环tick中，Vue 刷新队列并执行实际（已去重的）工作。
      `,
  },
  {
    title:
      "Vue --- 28. Vue从template(模板)到render(渲染)的过程（Vue编译器工作原理）",
    content: `
      1.Vue中有个独特的编译器模块，称为"compiler"，它的主要作用是将用户编写的template编译为js中可执行的render函数；
      2.之所以需要这个编译过程是为了便于前端程序员能高效的编写视图模板；相比而言，我们还是更愿意用HTML来编写视图，直观且高效。手写render函数不仅效率底下，而且失去了编译期的优化能力，因此compiler的过程是必须的；
      3.在Vue中编译器会先对template进行解析，这一步称为parse，结束之后会得到一个JS对象，我们成为抽象语法树AST，然后是对AST进行深加工的转换过程，这一步称为transform，最后将前面得到的AST生成（generate）JS代码，也就是render函数；
      `,
  },
  {
    title: "Vue --- 29. Vue中编译器的执行时刻？",
    content: `
    根据引入Vue的运行时不同，编译器的执行时刻是不同的：如果使用webpack环境，即Vue的预打包环境，这时webpack的vue-loader会提前将模板进行编译，这时编译器的执行时刻就是在打包阶段，即预编译；如果是非运行时版本，即携带编译器的版本，这时编译器就会在运行时工作：发现一个组件有模板没有渲染函数，就会去编译模板，将其转换为渲染函数，也就是发生在组件的创建阶段。
    `,
  },
  {
    title: "Vue --- 30. React中有没有编译器？",
    content: `react中又jsx，这不是编译器，可以理解为一种语法糖，语言本身没有变化，通过babel-loader将jsx变为js，因此react是没有编译器的。`,
  },
  {
    title: "Vue --- 31. 简述 mixin、extends 的覆盖逻辑",
    content: `
      mixin 和 extends均是用于合并、拓展组件的，两者均通过 mergeOptions 方法实现合并。
      ● mixins 接收一个混入对象的数组，其中混入对象可以像正常的实例对象一样包含实例选项，这些选项会被合并到最终的选项中。Mixin 钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。
      ● extends 主要是为了便于扩展单文件组件，接收一个对象或构造函数。
      `,
  },
  {
    title: "Vue --- 32. mergeOptions的执行过程",
    content: `
      ● 规范化选项（normalizeProps、normalizelnject、normalizeDirectives)
      ● 对未合并的选项，进行判断
      ● 合并处理。根据一个通用 Vue 实例所包含的选项进行分类逐一判断合并，如 props、data、 methods、watch、computed、生命周期等，将合并结果存储在新定义的 options 对象里。
      ● 返回合并结果 options。
      `,
  },
  {
    title: "Vue --- 33. 描述下Vue自定义指令",
    content: `
      概念：
      在 Vue2.0 中，代码复用和抽象的主要形式是组件。然而，有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。
      一般需要对DOM元素进行底层操作时使用，尽量只用来操作 DOM展示，不修改内部的值。当使用自定义指令直接修改 value 值时绑定v-model的值也不会同步更新；如必须修改可以在自定义指令中使用keydown事件，在vue组件中使用 change事件，回调中修改vue数据; 
      `,
  },
  {
    title: "Vue --- 34. 自定义指令钩子函数、参数",
    content: `
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
      `,
  },
  {
    title: "Vue --- 35. 自定义指令使用场景",
    content: `
      ● 普通DOM元素进行底层操作的时候，可以使用自定义指令
      ● 自定义指令是用来操作DOM的。尽管Vue推崇数据驱动视图的理念，但并非所有情况都适合数据驱动。自定义指令就是一种有效的补充和扩展，不仅可用于定义任何的DOM操作，并且是可复用的。
      ● 鼠标聚焦
      ● 下拉菜单
      ● 相对时间转换
      ● 滚动动画
      `,
  },
  {
    title: "Vue --- 36. Vue子组件可以直接改变父组件的数据吗",
    content: `
      不可以，
      因为vue是单向数据流，数据流向从上到下，父级 props的更新向下流动到子组件，但是反过来则不行。这样防止从子组件意外变更父级组件的状态。子组件只能通过$emit派发一个自定义事件，父组件接收到后，由父组件修改。
      `,
  },
  {
    title: "Vue --- 37. Vue单向数据流",
    content: `
    在Vue中，单向数据流指的是数据从父组件流向子组件的单向过程。这意味着子组件不能直接修改从父组件接收的props数据，只能通过触发事件来通知父组件修改数据。这种数据流的方式是从上至下单向的，有利于数据的可预测性和可维护性。
    `,
  },
  {
    title: "Vue --- 38. 为什么需要单向数据流？",
    content: `
      ● 可预测性: 由于数据是单向流动的，因此更容易理解和预测数据的变化。当数据变化时，你只需要关注数据的来源，而不需要追踪数据在多个组件之间的流动。
      ● 可维护性: 当数据流动是单向的，组件之间的依赖关系变得更加清晰。这使得代码更容易维护，因为修改一个组件通常只影响其下游组件，而不会影响其他不相关的组件。
      ● 简化组件间通信: 通过明确的数据流，开发者可以更容易地管理组件之间的通信。子组件通过事件通知父组件，这使得组件间通信更加明确和简单。
      ● 降低出错概率: 双向数据流可能会导致更复杂的错误，因为任何组件都可以修改数据，这可能导致数据的不一致性和不可预测的行为。单向数据流限制了直接修改数据的能力，从而减少了出错的机会。
      ● 促进最佳实践: 单向数据流鼓励将状态管理逻辑集中在一个地方（如Vuex），这有助于更好地组织和结构化代码，使得代码更加清晰和容易理解。
      `,
  },
  {
    title: "Vue --- 39. Vue是如何进行依赖收集的？",
    content: `
      ● 依赖收集是 Vue 实现响应式数据的核心。当组件被初始化时，Vue 会对组件的 data 进行初始化，将普通的 js 对象变成响应式对象。通过使用 Object.defineProperty 来实现，将属性转化为 getter/setter，在访问和修改属性时触发依赖收集和更新。
      ● 依赖收集的过程，在底层主要涉及到三个类：Dep、Watcher 和 Vue
        o Dep 是依赖收集的核心，它的主要作用是管理所有的 Watcher。Dep 类中有一个静态属性 target，它指向当前正在计算的 Watcher，保证了同一时间全局只有一个 Watcher 被计算。Dep 类中还有一个 subs 属性，它是一个 Watcher 的数组，用来存储所有依赖这个 Dep 的 Watcher。
        o Watcher 是一个用来计算表达式的类。在 Watcher 的构造函数中，它会执行表达式，这个表达式可能会触发数据的 getter，从而进行依赖收集。Watcher 类中还有一个 addDep 方法，它会将当前的 Watcher 添加到 Dep 的 subs 数组中。
        o Vue 类是 Vue 的入口，它的主要作用是初始化 Vue 应用。在 Vue 类的初始化过程中，会对组件的 data 进行初始化，将普通的 JavaScript 对象变成响应式对象。在这个过程中，会进行依赖收集。
      `,
  },
  {
    title: "Vue --- 40. Vue的优点",
    content: `
      ● 轻量级框架：只关注视图层，是一个构建数据的视图集合，大小只有几十 kb ；
      ● 简单易学：国人开发，中文文档，不存在语言障碍 ，易于理解和学习；
      ● 双向数据绑定：保留了 angular 的特点，在数据操作方面更为简单；
      ● 组件化：保留了 react 的优点，实现了 html 的封装和重用，在构建单页面应用方面有着独特的优势；
      ● 视图，数据，结构分离：使数据的更改更为简单，不需要进行逻辑代码的修改，只需要操作数据就能完成相关操作；
      ● 虚拟DOM：dom 操作是非常耗费性能的，不再使用原生的 dom 操作节点，极大解放 dom 操作，但具体操作的还是 dom 不过是换了另一种方式；
      ● 运行速度更快：相比较于 react 而言，同样是操作虚拟 dom，就性能而言， vue 存在很大的优
      `,
  },
  {
    title: "Vue --- 41. asset和static的区别",
    content: `
      ● 相同点： assets 和 static 两个都是存放静态资源文件。项目中所需要的资源文件图片，字体图标，样式文件等都可以放在这两个文件下，这是相同点
      ● 不相同点：assets 中存放的静态资源文件在项目打包时，也就是运行 npm run build 时会将 assets 中放置的静态资源文件进行打包上传，所谓打包简单点可以理解为压缩体积，代码格式化。而压缩后的静态资源文件最终也都会放置在 static 文件中跟着 index.html 一同上传至服务器。static 中放置的静态资源文件就不会要走打包压缩格式化等流程，而是直接进入打包好的目录，直接上传至服务器。因为避免了压缩直接进行上传，在打包时会提高一定的效率，但是 static 中的资源文件由于没有进行压缩等操作，所以文件的体积也就相对于 assets 中打包后的文件提交较大点。在服务器中就会占据更大的空间。
      ● 建议： 将项目中 template需要的样式文件js文件等都可以放置在 assets 中，走打包这一流程。减少体积。而项目中引入的第三方的资源文件如iconfoont.css 等文件可以放置在 static 中，因为这些引入的第三方文件已经经过处理，不再需要处理，直接上传。
      `,
  },
  {
    title: "Vue --- 42. Vue和React对比",
    content: `
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
      `,
  },
  {
    title: "Vue --- 43. delete和Vue.delete删除数组的区别",
    content: `
    delete和和Vue.delete都是对数组或对象的删除。这两种方法对于对象来说没有区别，直接删除对象的属性；但是对于数组来说有区别。delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。数组长度也不变。 Vue.delete是直接删除该元素，长度发生变化。
    `,
  },
  {
    title: "Vue --- 44. 对SSR的理解",
    content: `
      SSR也就是服务端渲染，也就是将Vue在客户端把标签渲染成HTML的工作放在服务端完成，然后再把html直接返回给客户端

      SSR的优势：
      ● 更好的SEO
      ● 首屏加载速度更快

      SSR的缺点：
      ● 开发条件会受到限制，服务器端渲染只支持beforeCreate和created两个钩子；
      ● 当需要一些外部扩展库时需要特殊处理，服务端渲染应用程序也需要处于Node.js的运行环境；
      ● 更多的服务端负载。
      `,
  },
  {
    title: "Vue --- 45. 单页面应用spa的优缺点",
    content: `
      SPA（ single-page application ）仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。

      优点：
      ● 用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
      ● 基于上面一点，SPA 相对对服务器压力小；
      ● 前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；

      缺点：
      ● 初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；
      ● 前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；
      ● SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。
      `,
  },
  {
    title: "Vue --- 46. template和jsx的区别",
    content: `
      对于 runtime 来说，只需要保证组件存在 render 函数即可，而有了预编译之后，只需要保证构建过程中生成 render 函数就可以。在 webpack 中，使用vue-loader编译.vue文件，内部依赖的vue-template-compiler模块，在 webpack 构建过程中，将template预编译成 render 函数。与 react 类似，在添加了jsx的语法糖解析器babel-plugin-transform-vue-jsx之后，就可以直接手写render函数。
      所以，template和jsx的都是render的一种表现形式，不同的是：JSX相对于template而言，具有更高的灵活性，在复杂的组件中，更具有优势，而 template 虽然显得有些呆滞。但是 template 在代码结构上更符合视图与逻辑分离的习惯，更简单、更直观、更好维护。
      `,
  },
  {
    title: "Vue --- 47. Vue初始化页面闪动问题",
    content: `
      使用vue开发时，在vue初始化之前，由于div是不归vue管的，所以我们写的代码在还没有解析的情况下会容易出现花屏现象，看到类似于{{message}}的字样，虽然一般情况下这个时间很短暂，但是还是有必要让解决这个问题的。
      在css代码中添加：[v-cloak] { display: none; }
      如果没有彻底解决问题，则在根元素加上style="display: none;" :style="{display: 'block'}"
      `,
  },
  {
    title: "Vue --- 48. MVVM的优缺点",
    content: `
      优点: 
      ● 分离视图（View）和模型（Model），降低代码耦合，提⾼视图或者逻辑的重⽤性: ⽐如视图（View）可以独⽴于Model变化和修改，⼀个ViewModel可以绑定不同的"View"上，当View变化的时候Model不可以不变，当Model变化的时候View也可以不变。你可以把⼀些视图逻辑放在⼀个ViewModel⾥⾯，让很多view重⽤这段视图逻辑 
      ● 提⾼可测试性: ViewModel的存在可以帮助开发者更好地编写测试代码 
      ● ⾃动更新dom: 利⽤双向绑定,数据更新后视图⾃动更新,让开发者从繁琐的⼿动dom中解放 

      缺点: 
      ● Bug很难被调试: 因为使⽤双向绑定的模式，当你看到界⾯异常了，有可能是你View的代码有Bug，也可能是Model的代码有问题。数据绑定使得⼀个位置的Bug被快速传递到别的位置，要定位原始出问题的地⽅就变得不那么容易了。另外，数据绑定的声明是指令式地写在View的模版当中的，这些内容是没办法去打断点debug的 
      ●  ⼀个⼤的模块中model也会很⼤，虽然使⽤⽅便了也很容易保证了数据的⼀致性，当时⻓期持有，不释放内存就造成了花费更多的内存 
      ● 对于⼤型的图形应⽤程序，视图状态较多，ViewModel的构建和维护的成本都会⽐较⾼。
      `,
  },
  {
    title: "Vue --- 49. v-if和v-for优先级，以及为什么不让同时使用？",
    content: `
      ● Vue2中v-for是优先于v-if。而在Vue3中v-if是优先于v-for
      ● 为什么不能同时使用：v-for优先于v-if被解析，如果同时出现，每次渲染都会先执行循环再判断条件，无论如何循环都不可避免，浪费了性能。
      ● 如何解决：
        应该用以下方式替换v-if和v-for同时使用的方案：
        1. 如果是为了过滤一个列表中的项目（v-for循环，v-if过滤条件），可以将列表作为计算属性，在computed中过滤出需要渲染的列表，再进行渲染。
        2. 如果是为了控制整个列表的展示和隐藏（v-for循环，v-if判断整个列表是否需要展示），可以将判断条件放到父元素（ul、ol）上。这样展示和隐藏的判断只需要执行一次（在列表最开始）。
      ● 注意：Vue3修改了v-if和v-for的优先级，v-if没有权限访问v-for的变量，这个需要注意。
      `,
  },
  {
    title: "Vue --- 50. 对Vue组件化的理解",
    content: `
      1. 组件是独立和可复用的代码组织单元。组件系统是Vue核心特性之一，它使开发者使用小型、独立和通常可复用的组件构建大型应用；
      2. 组件化开发能大幅提高应用开发效率、测试性、复用性等；
      3. 组件使用按分类有：页面组件、业务组件、通用组件；
      4. vue的组件是基于配置的，我们通常编写的组件是组件配置而非组件，框架后续会生成其构造函数，它们基于VueComponent，扩展于Vue；
      5. vue中常见组件化技术有：属性prop，自定义事件，插槽等，它们主要用于组件通信、扩展等；6.合理的划分组件，有助于提升应用性能；
      6. 组件应该是高内聚、低耦合的；
      7. 遵循单向数据流的原则。
      `,
  },
  {
    title: "Vue --- 51. 对Vue设计原则的理解",
    content: `
      1. 渐进式JavaScript框架：与其它大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue也完全能够为复杂的单页应用提供驱动。
      2. 易用性：vue提供数据响应式、声明式模板语法和基于配置的组件系统等核心特性。这些使我们只需要关注应用的核心业务即可，只要会写js、html和css就能轻松编写vue应用。
      3. 灵活性：渐进式框架的最大优点就是灵活性，如果应用足够小，我们可能仅需要vue核心特性即可完成功能；随着应用规模不断扩大，我们才可能逐渐引入路由、状态管理、vue-cli等库和工具，不管是应用体积还是学习难度都是一个逐渐增加的平和曲线。
      4. 高效性：超快的虚拟DOM和diﬀ算法使我们的应用拥有最佳的性能表现。追求高效的过程还在继续，vue3中引入Proxy对数据响应式改进以及编译器中对于静态内容编译的改进都会让vue更加高效。
      `,
  },
  {
    title: "Vue --- 52. 常见的Vue性能优化方法",
    content: `
      1. 路由懒加载：{ path: '/foo', component: () => import('./Foo.vue') }
      2. 使用keep-alive缓存页面
      3. 使用v-show复用DOM
      4. v-for 遍历避免同时使用 v-if
      5. 长列表性能优化，如果是大数据长列表，可采用虚拟滚动，只渲染少部分区域的内容
      6. 事件的销毁，Vue 组件销毁时，会自动解绑它的全部指令及事件监听器，但是仅限于组件本身的事件。
      7. 图片懒加载，对于图片过多的页面，为了加速页面加载速度，所以很多时候我们需要将页面内未出现在可视区域内的图片先不做加载， 等到滚动到可视区域后再去加载。<img v-lazy="/static/img/1.png">
      8. 第三方插件按需引入，像element-ui这样的第三方组件库可以按需引入避免体积太大。
      9. 无状态的组件标记为函数式组件：<template functional></template>
      `,
  },
  {
    title: "Vue --- 53. Vue生命周期",
    content: `
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
      `,
  },
  {
    title: "Vue --- 54. Vue 子组件和父组件执行顺序",
    content: `
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
      `,
  },
  {
    title: "Vue --- 55. created和mounted的区别",
    content: `
      ● created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
      ● mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
      `,
  },
  {
    title: "Vue --- 56. 一般在哪个生命周期请求异步数据",
    content: `
      可以在钩子函数 created、beforeMount、mounted 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。
      推荐在 created 钩子函数中调用异步请求，因为在 created 钩子函数中调用异步请求有以下优点：
      ● 能更快获取到服务端数据，减少页面加载时间，用户体验更好；
      ● SSR不支持 beforeMount 、mounted 钩子函数，放在 created 中有助于一致性。
      `,
  },
  {
    title: "Vue --- 57. keep-alive 中的生命周期哪些",
    content: `
      ● keep-alive是 Vue 提供的一个内置组件，用来对组件进行缓存——在组件切换过程中将状态保留在内存中，防止重复渲染DOM。
      ● 如果为一个组件包裹了 keep-alive，那么它会多出两个生命周期：deactivated、activated。同时，beforeDestroy 和 destroyed 就不会再被触发了，因为组件不会被真正销毁。
      ● 当组件被换掉时，会被缓存到内存中、触发 deactivated 生命周期；当组件被切回来时，再去缓存里找这个组件、触发 activated钩子函数。
      `,
  },
  {
    title: "Vue --- 58. Vue组件通信",
    content: `
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
      `,
  },
  {
    title: "Vue --- 59. hash(哈希)路由和history路由介绍",
    content: `
      ● hash指的是地址中#号以及后面的字符，也称为散列值；hash值会出现在URL里面，但是不会出现在HTTP请求中，对后端完全没有影响。所以改变hash值，不会重新加载页面；浏览器兼容好，是开发中默认的模式；hash变化对应的url都会被浏览器记录在历史访问栈中，可以使用浏览器的前进后退功能，虽然没有请求服务器，但页面内容和url一一对应；hash模式的工作原理是hashchange事件，window就可以监听hash的变化，而不需要向后端发起请求，并按规则加载相应的代码
      ● history模式的URL中没有#，它使用的是传统的路由分发模式，即用户在输入一个URL时，服务器会接收这个请求，并解析这个URL，然后做出相应的逻辑处理。特点： 当使用history模式时，URL就像这样：http://abc.com/user/id。相比hash模式更加好看。但是，history模式需要后台配置支持。如果后台没有正确配置，访问时会返回404。
      `,
  },
  {
    title: "Vue --- 60. hash(哈希)路由和history路由，两种模式对比",
    content: `
      调用 history.pushState() 相比于直接修改 hash，存在以下优势:
      ● pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL；
      ● pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中；
      ● pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；而 hash 只可添加短字符串；
      ● pushState() 可额外设置 title 属性供后续使用。
      ● hash模式下，仅hash符号之前的url会被包含在请求中，后端如果没有做到对路由的全覆盖，也不会返回404错误；history模式下，前端的url必须和实际向后端发起请求的url一致，如果没有对用的路由处理，将返回404错误。
      `,
  },
  {
    title: "Vue --- 61. Vue如何监听页面url中hash变化",
    content: `
      1. 监听 $route 的变化：在Vue中，你可以使用watch属性来监听$route的变化。当路由发生变化时，会执行相应的处理函数。
      2. 使用 window.location.hash：直接读取window.location.hash的值。这个属性可读可写。绑定一个hashChange事件即可监听到。
      });
      `,
  },
  {
    title: "Vue --- 62. $route 和 $router 的区别",
    content: `
      $route 和 $router 是Vue Router提供的两个对象。
      ● $route 是一个只读对象，代表了当前活动的路由信息，包括路径、参数、查询字符串等。它用于获取路由的信息。
      ● $router 是 Vue Router 的实例，提供了一些方法用于导航路由，如 push、replace 和 go。它用于在应用程序中进行路由导航操作
      `,
  },
  {
    title: "Vue --- 63. params和query的区别",
    content: `
      params和query的区别区别：
      ● params 是通过路径的一部分来传递参数，用于捕获和处理特定的路由请求。参数是必需的，出现在路径中，可以通过 $route.params 访问。
      ● query 是通过查询字符串来传递参数，用于配置和过滤路由请求。参数是可选的，出现在 URL 的查询字符串中，可以通过 $route.query 访问。
      总结：监听 hashchange 事件可获取页面哈希的变化；$route 用于获取当前路由信息，$router 用于进行路由导航；params 通过路径传递参数，query 通过查询字符串传递参数。
      `,
  },
  {
    title: "Vue --- 64. 刷新页面时，params和query的差异",
    content: `
      关于刷新时的差异：
      ● 对于params，当页面刷新时，参数会丢失，因为参数只存在于URL路径中，并不会被浏览器记忆。
      ● 对于query，当页面刷新时，参数不会丢失，因为参数是作为查询字符串出现在URL中，浏览器会自动保留这些参数。
      `,
  },
  {
    title: "Vue --- 65. Vue-router你们用的哪个版本？",
    content: `
    v3和v4版本都用了，老项目使用了vue2 + vue-router3.x，新项目使用vue3 + vue-router4.x
    `,
  },
  {
    title: "Vue --- 66. Vue动态路由传参有几种方法",
    content: `
      动态路由：就是不确定的路由，需要传递动态参数来拼接为真实的路由
      1. params 方式
      ● 配置路由格式：/router/:id
      ● 传递的方式：在path后面跟上对应的值
      ● 传递后形成的路径：/router/123
      2. query 方式
      ● 配置路由格式：/router，也就是普通配置
      ● 传递的方式：对象中使用query的key作为传递方式
      ● 传递后形成的路径：/route?id=123
      `,
  },
  {
    title: "Vue --- 67. Vue动态路由传参具体用法",
    content: `
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
      `,
  },
  {
    title: "Vue --- 68. Vue-router 路由钩子函数有哪些",
    content: `
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
      `,
  },
  {
    title: "Vue --- 69. 导航守卫，完整的导航解析流程",
    content: `
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
      `,
  },
  {
    title: "Vue --- 70. 路由守卫：参数 to、from、next 的含义",
    content: `
      ● to: Route: 即将要进入的目标 路由对象
      ● from: Route: 当前导航正要离开的路由
      ● next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
        - next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
        - next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
        - next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
        - next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
      `,
  },
  {
    title: "Vue --- 71. Vue-router 路由跳转和 location.href 区别",
    content: `
      ● 使用 location.href= /url 来跳转，简单方便，但是刷新了页面；
      ● 使用 history.pushState( /url ) ，无刷新页面，静态跳转；
      ● 引进 router ，然后使用 router.push( /url ) 来跳转，使用了 diff 算法，实现了按需加载，减少了 dom 的消耗。其实使用 router 跳转和使用 history.pushState() 没什么差别的，因为vue-router就是用了 history.pushState() ，尤其是在history模式下。
      `,
  },
  {
    title: "Vue --- 72. vuex是什么",
    content: `
    Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
    `,
  },
  {
    title: "Vue --- 73. vuex实现原理",
    content: `
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
      `,
  },
  {
    title: "Vue --- 74. 什么情况下使用vuex",
    content: `
    Vuex 可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。如果不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，最好不要使用 Vuex。一个简单的 store 模式就足够您所需了。但是，如果需要构建一个中大型单页应用，很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。
    `,
  },
  {
    title: "Vue --- 75. vuex辅助函数有哪些",
    content: `
    Vuex提供了mapState、MapGetters、MapActions、mapMutations等辅助函数给开发在vm中处理store
    `,
  },
  {
    title: "Vue --- 76. vuex属性包含哪些？",
    content: `
      有五种，分别是 State、Getter、Mutation 、Action、Module
      ● state => 基本数据(数据源存放地)
      ● getters => 从基本数据派生出来的数据
      ● mutations => 提交更改数据的方法，同步
      ● actions => 像一个装饰器，包裹mutations，使之可以异步。
      ● modules => 模块化Vuex
      `,
  },
  {
    title: "Vue --- 77. mutation和action有什么区别",
    content: `
    ● Mutation专注于修改State，理论上是修改State的唯一途径；Action业务代码、异步请求。
    ● Mutation：必须同步执行；Action：可以异步，但不能直接操作State。
    ● 在视图更新时，先触发actions，actions再触发mutation
    ● mutation的参数是state，它包含store中的数据；action的参数是context，它是 state 的父级，包含 state、getters
    `,
  },
  {
    title: "Vue --- 78. vuex工作流程",
    content: `
      1. 通过new Vuex.Store()创建一个仓库 state是公共的状态，state--->components渲染页面
      2. 在组件内部通过this.$store.state.属性 来调用公共状态中的state，进行页面的渲染。
      3. 当组件需要修改数据的时候，必须遵循单向数据流。通过this.$store.dispatch来触发actions中的方法
      4. actions中的每个方法都会接受一个对象 这个对象里面有一个commit方法，用来触发mutations里面的方法
      5. mutations里面的方法用来修改state中的数据 mutations里面的方法都会接收到2个参数 一个是store中的state，另外一个是需要传递的参数
      6. 当mutations中的方法执行完毕后state会发生改变，因为vuex的数据是响应式的 所以组件的状态也会发生改变
      `,
  },
  {
    title: "Vue --- 79. Vuex和单纯的全局对象有什么区别？",
    content: `
    ● Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
    ● 不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化，从而能够实现一些工具帮助更好地了解我们的应用。
    `,
  },
  {
    title: "Vue --- 80. Vuex的mutation为什么不能做异步操作？",
    content: `
    ● 原因是因为mutation必须是同步函数。这是因为Vuex的设计原则是通过mutation来改变状态，而状态改变后，视图会立即更新。如果mutation中是异步操作，那么当状态改变时，视图可能还没有更新完成，这会导致视图和状态不一致的情况。
    ● 另外，如果mutation中进行异步操作，那么就无法保证状态的改变是按照预期的顺序执行的，这可能会导致一些难以预料的问题。
    ● 如果需要进行异步操作，可以在action中进行。action可以包含任意异步操作，当异步操作完成后，再通过调用mutation来改变状态。这样可以保证状态的改变是按照预期的顺序执行的，同时也保证了视图和状态的一致性。
    ● 除了保证状态改变的一致性和可预测性，Vuex要求mutation必须是同步函数还有另一个重要的原因，那就是为了确保devtools中的时间旅行功能可以正常使用。
    `,
  },
  {
    title: "Vue --- 81. 如何在组件中批量使用Vuex的getter属性",
    content: `
    使用mapGetters辅助函数, 利用对象展开运算符将getter混入computed 对象中
    computed:{
      ...mapGetters(['total','discountTotal'])
    }
    `,
  },
  {
    title: "Vue --- 82. vue2和vue3的区别",
    content: `
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
      `,
  },
  {
    title: "Vue --- 83. defineProperty和proxy的区别",
    content: `
    ● Vue2 中在实例初始化时遍历 data 中的所有属性，并使用 Object.defineProperty 把这些属性全部转为 getter/setter。这样当追踪数据发生变化时，setter 会被自动调用。
    但是存在以下问题：
    1. 添加或删除对象的属性时，Vue 检测不到。因为添加或删除的对象没有在初始化进行响应式处理，只能通过$set 来调用Object.defineProperty()处理。
    2. 无法监控到数组下标和长度的变化。
    ● Vue3 使用 Proxy 来监控数据的变化。Proxy 是 ES6 中提供的功能，其作用为：用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。相对于Object.defineProperty()，其有以下特点：
    1. Proxy 直接代理整个对象而非对象属性，这样只需做一层代理就可以监听同级结构下的所有属性变化，包括新增属性和删除属性。
    2. Proxy 可以监听数组的变化。
    `,
  },
  {
    title: "Vue --- 84. vue3为什么要用proxy",
    content: `
    Proxy 是创建对象的虚拟表示，提供了 set 、get 和 deleteProperty 等处理器，这些处理器可在访问或修改原始对象上的属性时进行拦截，有以下特点∶
    ● 不需用使用 Vue.$set 或 Vue.$delete 触发响应式。
    ● 全方位的数组变化检测，消除了Vue2 无效的边界情况。
    ● 支持 Map，Set，WeakMap 和 WeakSet。
    `,
  },
  {
    title: "Vue --- 85. vue3 Composition API(组合式api) 是什么",
    content: `
    组合式 API (组合式API) 是一系列 API 的集合，使我们可以使用函数而不是声明选项的方式书写 Vue 组件。它是一个概括性的术语，涵盖了以下方面的 API：
    ● 响应式 API：例如 ref() 和 reactive()，使我们可以直接创建响应式状态、计算属性和侦听器。
    ● 生命周期钩子：例如 onMounted() 和 onUnmounted()，使我们可以在组件各个生命周期阶段添加逻辑。
    ● 依赖注入：例如 provide() 和 inject()，使我们可以在使用响应式 API 时，利用 Vue 的依赖注入系统。

    主要目的是：
    为了增强代码的可读性和可维护性；
    允许相同逻辑代码在不同组件中进行完整复用
    `,
  },
  {
    title: "Vue --- 86. 组合式api和选项式api区别 / 优缺点",
    content: `
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
    `,
  },
  {
    title: "Vue --- 87. Vue3中的Teleport是什么？它的作用是什么？",
    content: `
    Vue3中的Teleport 是控制渲染位置的新指令。它的作用是在DOM中移动一个组件的内容而不改变组件的父级。
    `,
  },
  {
    title: "Vue --- 88. Vue3中的Suspense是什么？它的作用是什么？",
    content: `
    Vue3中的Suspense是Vue3中新增的一个组件，它的作用是实现延迟加载和错误处理。在组件中加入Suspense，可以让异步组件可以渲染出加载状态，并且如果异步组件加载时出现错误，也能够处理这些错误。
    `,
  },
  {
    title: "Vue --- 89. Vue3中的Fragment是什么？它的作用是什么？",
    content: `
    Vue3中的Fragment是用来承载多个子元素的虚拟组件。它的作用是可以解决在Vue2中，使用v-for迭代元素时需要添加一个包装元素的问题。
    `,
  },
  {
    title: "Vue --- 90. Vue3中setup是什么？",
    content: `
    setup是所有CompositionAPI（组合API）的基础，组件中所用到的数据、方法等都需要在setup中进行配置；
    <script setup>
      `,
  },
  {
    title: "Vue --- 91. Vue3兼容Vue2写法的情况",
    content: `
    ①、vue3支持向下兼容，vue2中的data、methods配置项在vue3中都能够使用，但是尽量不要将vue3中的配置项和vue2.x配置项混用；
    ②、vue2.x配置（data、methods、computed等）中可以访问setup中的属性、方法，但是在setup中不能访问vue2.x配置（data、methods、computed等）；
    ③、如果vue2.x配置与vue3配置存在重名，则以setup优先；
    ④、setup不能是一个async函数，因为返回值不再是return的对象，而是promise，模板看不到return对象中的属性；
    `,
  },
  {
    title: "Vue --- 92. ref和reactive的区别",
    content: `
    1. 数据类型不同：ref用于包装JavaScript基本类型的数据（如字符串、数字、布尔值等），而reactive可以用于包装JavaScript对象和数组等复杂类型的数据。
    2. 使用方式不同：ref需要通过在模板中使用ref指令以及在JavaScript代码中使用ref函数进行创建和使用，而reactive则需要通过调用Vue.js提供的reactive函数进行包装和创建。
    3. 访问方式不同：对于通过ref函数创建的响应式数据，我们可以通过.value属性来访问其实际值；而对于通过reactive函数创建的响应式对象，我们可以直接访问其属性或调用其方法。
    4. 设计理念不同：ref主要是为了解决单一元素/数据的响应式问题，而reactive则是为了解决JavaScript对象和数组等复杂数据结构的响应式问题。

    总的来说，ref和reactive都是用于实现Vue.js组件的数据响应式更新，但是它们的使用方法、适用范围和设计理念等方面略有不同，需要根据具体的应用场景选择合适的API进行使用。
    `,
  },
  {
    title: "Vue --- 93. ref和reactive如何选择",
    content: `
    1. ref()主要用于创建一个响应式数据，它会将一个普通的JavaScript对象转换为一个响应式的对象，从而使数据的变化可以被Vue实例所追踪，当数据发生变化时，Vue会自动更新相关视图。ref()创建的响应式数据可以通过.value属性来访问和修改。
    2. reactive()则主要用于创建一个响应式对象，可以用作包含多个值的状态对象，通常用于管理复杂的状态。它可以将一个普通的JavaScript对象转换为一个响应式对象，并且支持嵌套属性，即使嵌套属性发生变化也会被Vue实例所追踪。当响应式对象中有任何一个属性发生变化时，Vue也会自动更新相关的视图。
    3. 明确知道需要包裹的是一个对象，那么推荐使用 reactive，其他情况使用 ref 即可。
    `,
  },
  {
    title: "Vue --- 94. toRef和toRefs的作用",
    content: `
    ● toRef 函数可以将一个响应式对象的属性转换为一个独立的 ref 对象。返回的是一个指向源对象属性的 ref 引用，任何对该引用的修改都会同步到源对象属性上。使用 toRef 时需要传入源对象和属性名作为参数。
    ● toRefs 函数可以将一个响应式对象转换为一个普通的对象，该对象的每个属性都是独立的 ref 对象。返回的对象可以进行解构，每个属性都可以像普通的 ref 对象一样访问和修改，而且会保持响应式的关联。toRefs 的使用场景主要是在将响应式对象作为属性传递给子组件时，确保子组件可以正确地访问和更新这些属性。
    `,
  },
  {
    title: "Vue --- 95. toRef和toRefs的相同点和不同点",
    content: `
    相同点：
    ● toRef 和 toRefs 都用于将响应式对象的属性转换为 ref 对象。
    ● 转换后的属性仍然保持响应式，对属性的修改会反映到源对象上。
    ● 不管是使用 toRef 还是 toRefs 将响应式对象转成普通对象，在 script 中修改和访问其值都需要通过 .value 进行。
    不同点：
    ● toRef 修改的是对象的某个属性，生成一个单独的 ref 对象。
    ● toRefs 修改的是整个对象，生成多个独立的 ref 对象集合。
    ● toRefs 适用于在组件传递属性或解构时使用，更加方便灵活，而 toRef 更适合提取单个属性进行操作。
    `,
  },
  {
    title: "Vue --- 96. Vue事件机制原理",
    content: `
    Vue.js 的事件机制基于发布-订阅模式（Publish-Subscribe Pattern），也称为观察者模式（Observer Pattern）。它主要由以下几个核心组件构成：
    ● 事件触发器（Event Emitter）：Vue 实例中的 $emit 方法用于触发事件。当某个事件被触发时，它会发送消息给注册了该事件的监听器。
    ● 事件监听器（Event Listener）：Vue 实例中的 $on 方法用于监听特定的事件。当事件被触发时，注册了该事件的监听器会接收到通知，并执行相应的回调函数。
    ● 事件中心（Event Bus）：Vue 实例中的 $emit 和 $on 方法的底层实现依赖于一个事件中心，用于管理事件的注册和触发。在 Vue 中，可以通过 new Vue() 创建一个全局事件中心，也可以创建多个局部事件中心。
    ● 事件对象（Event Object）：当事件被触发时，可以传递一个事件对象作为参数，其中包含了关于事件的相关信息。事件对象可以携带额外的数据，以便监听器在接收到事件时进行处理。
    `,
  },
  {
    title: "Vue --- 97. Vue2和Vue3的diff算法有何不同",
    content: `
    vue2中的diff算法
    遍历每一个虚拟节点，进行虚拟节点对比，并返回一个patch对象，用来存储两个节点不同的地方。用patch记录的消息去更新dom
    缺点：比较每一个节点，而对于一些不参与更新的元素，进行比较是有点消耗性能的。特点：特别要提一下Vue的patch是即时的，并不是打包所有修改最后一起操作DOM，也就是在vue中边记录变更新。（React则是将更新放入队列后集中处理）。

    vue3中的diff算法
    在初始化的时候会给每一个虚拟节点添加一个patchFlags，是一种优化的标识。只会比较patchFlags发生变化的节点，进行识图更新。而对于patchFlags没有变化的元素作静态标记，在渲染的时候直接复用。
    `,
  },
  {
    title: "Vue --- 98. vue页面(组件)销毁时，哪些东西会自动销毁，哪些需要手动销毁",
    content: `
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
    `,
  },
  {
    title: "Vue --- 99. 什么是虚拟 DOM",
    content: `
    虚拟dom本质就是一个js对象,用来描述真正dom是什么样的,这个对象就称为虚拟dom
    `,
  },
  {
    title: "Vue --- 100. 虚拟 DOM 的好处",
    content: `
    虚拟 DOM 就是为了解决浏览器性能问题而被设计出来的。如前，若一次操作中有 10 次更新 DOM 的动作，虚拟 DOM 不会立即操作 DOM，而是将这 10 次更新的 diff 内容保存到本地一个 JS 对象中，最终将这个 JS 对象一次性 attch 到 DOM 树上，再进行后续操作，避免大量无谓的计算量。所以，用 JS 对象模拟 DOM 节点的好处是，页面的更新可以先全部反映在 JS 对象(虚拟 DOM )上，操作内存中的 JS 对象的速度显然要更快，等更新完成后，再将最终的 JS 对象映射成真实的 DOM，交由浏览器去绘制。
    `,
  },
  {
    title: "Vue --- 101. Vue 虚拟 DOM 如何实现高效更新?",
    content: `
    初始化渲染的时候,会根据数据和模板生成一份虚拟dom树,当数据发生变化,会根据新的数据和模板生成新的虚拟dom树,将两份虚拟dom树进行对比,对比的算法采用的是diff算法。
    diff算法的话就是同级比较.深度优先,比较核心的就是采用了双指针算法,四个指针,遍历旧的虚拟dom有两个指针,指向开始的位置和结束的位置,同理新的虚拟dom也有这两个指针,循环的时候开始的指针对比完后,指针向后推,后面的指针对比后向前推,从而达到效率提升。然后元素不同的话就删除重建，元素相同,属性不同的话元素复用,属性更新。
    `,
  },
  {
    title: "Vue --- 102. key 的作用与原理",
    content: `
    key 作用 ：用来作为节点的唯一标识
    当为一个列表绑定一个key属性时，该属性会存在于虚拟的DOM中，key是虚拟DOM对象的标识，当数据发生变化时，会生成新的虚拟DOM。随后Vue会使用Diff算法进行新虚拟DOM与 旧虚拟DOM的差异比较。进行比较的过程可以分成两种情况：
     当旧虚拟DOM中找到了与新虚拟DOM相同的key时，若虚拟DOM中内容没变, 直接使用之前的真实DOM；若虚拟DOM中内容变了, 则生成新的真实DOM，随后替换掉页面中之前的真实DOM；
     当旧虚拟DOM中未找到与新虚拟DOM相同的key时，创建新的真实DOM，随后渲染到到页面。
    `,
  },
  {
    title: "Vue --- 103. index做key值为什么不行",
    content: `
    因为如果对数据进行：逆序添加、逆序删除等破坏顺序操作:
    会产生没有必要的真实DOM更新 ==> 界面效果没问题, 但效率低。如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，
    使用index作为key是没有问题的。
    最好使用每条数据的唯一标识作为key, 比如id、手机号、身份证号等唯一值，开发过程中一般用id。
    `,
  },
  {
    title: "Vue --- 104. vue的v-modal的实现原理",
    content: `
    vue中v-model可以实现数据的双向绑定，但是为什么这个指令就可以实现数据的双向绑定呢？其实v-model是vue的一个语法糖。即利用v-model绑定数据后，既绑定了数据，又添加了一个input事件监听。
    实现原理：
    ● v-bind绑定响应数据
    ● 触发input事件并传递数据
    `,
  },
  {
    title: "Vue --- 105. Vue中自定义指令的钩子函数有哪些",
    content: `
    1. bind: 此钩子在指令第一次被绑定到元素上时调用。在这里，你可以对元素进行一次性的初始化设置。el 是指令所绑定的元素，binding 是一个对象，其中包含了关于这个指令的所有参数，vnode 是虚拟节点，oldVnode 是之前的虚拟节点。
    2. inserted: 此钩子在指令被插入到宿主元素时调用（元素在DOM中）。这和 bind 钩子的区别在于，inserted 钩子是在元素被插入父节点时立即调用的，而 bind 钩子是在元素第一次出现在父节点之前调用的。
    3. update: 此钩子在数据更新时调用。你可以在这里根据新的数据更新元素。
    4. unbind: 此钩子在指令与元素解绑时调用。你可以在这里执行一些清理工作，如取消事件监听等。
    `,
  },
  {
    title: "Vue --- 106. vue的渲染原理，为什么采用异步渲染",
    content: `
    原理:
    Vue 的渲染原理是基于虚拟 DOM 的机制。Vue 通过创建一个组件树形式的虚拟 DOM 来表示实际 DOM 结构,当数据发生变化时,Vue 会对比前后两个虚拟 DOM 的差异,只更新需要更新的部分,从而达到高效的更新。
    为啥采用:
    vue是组件级的更新，如果不采用异步更新，那么每次更新数据都会对当前组件进行重新渲染，所以为了性能，vue会在本轮数据更新后，在异步更新视图。这也是nextTick产生的原因。异步渲染的核心思想就是nextTick
    作用：
    nextTick接收一个回调函数作为参数，并将这个回调函数延迟到DOM更新后才执行，减少操作DOM的次数；
    使用场景：想要操作基于最新数据生成的DOM时，就将这个操作放在nextTick的回调中；
    实现原理：将传入的回调函数包装成异步任务，异步任务又分为微任务和宏任务（setTimeout、promise、等），定义了一个异步方法，多次调用nextTick会将方法存入队列，通过异步方法清空当前队列。
    整个vue是一个大的异步渲染
    `,
  },
  {
    title: "Vue --- 107. vue的diff和react的diff有什么区别？",
    content: `
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
    `,
  },
];
