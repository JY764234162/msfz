export default [
    {
        title: "CSS --- 1.元素水平垂直居中",
        content: `
        一、flex弹性布局：display：flex；Justify-content：center；align-item：center  浏览器兼容问题
        二、用定位：父元素相对定位，子元素绝对定位（父相子绝）
        1、子：top:50%；left:50%；子盒子移动自身宽高的一半  适用于盒子宽高已知
        2、子：position上下左右设为0； margin：auto       适用于盒子有宽高
        3、子：top:50%；left:50%；transform:translate(-50%,-50%)  考虑浏览器兼容问题
        三、table布局：设置父元素为display:table-cell，子元素设置 display: inline-block; vertical-align: middle; text-align: center;
        四、grid网格布局：display: grid; justify-items:center; align-items: center ;`
    },
    {
        title: "CSS --- 2.BFC",
        content: `
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
        `
    },
    {
        title: "CSS --- 3.flex布局",
        content: `
        flex布局 也就是 弹性布局
        设为Flex布局以后，子元素的float、clear和vertical-align属性就会失效。
        flex布局是CSS3新增的一种布局方式，可以通过将一个元素的display属性值设置为flex从而使它成为一个flex容器，它的所有子元素都会成为它的项目。一个容器默认有两条轴：一个是水平的主轴，一个是与主轴垂直的交叉轴。可以使用flex-direction来指定主轴的方向。可以使用justify-content来指定元素在主轴上的排列方式，使用align-items来指定元素在交叉轴上的排列方式。还可以使用flex-wrap来规定当一行排列不下时的换行方式。对于容器中的项目，可以使用order属性来指定项目的排列顺序，还可以使用flex-grow来指定当排列空间有剩余的时候，项目的放大比例，还可以使用flex-shrink来指定当排列空间不足时，项目的缩小比例。`
    },
    {
        title: "CSS --- 4.flex:1",
        content: `
        flex属性是flex-grow(哥肉)，flex-shrink（神可）和flex-basis（呗谁死）的简写，默认值为0 1 auto。flex:1 表示 flex: 1 1 0%：
        ● 第一个参数表示: flex-grow 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大；
        ● 第二个参数表示: flex-shrink 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小；
        ● 第三个参数表示: flex-basis给上面两个属性分配多余空间之前, 计算项目是否有多余空间, 默认值为 auto, 即项目本身的大小。`
    },
    {
        title: "CSS --- 5.Less和Sass的区别",
        content: `
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
        Scss引用的外部文件命名必须以_开头。`
    },
    {
        title: "CSS --- 6.伪元素和伪类的区别",
        content: `
        伪类（:单引号）：把特殊的效果加到特定的选择器上。是已有的元素添加类别的，不会产生新元素。
        伪元素（::双引号）：在内容元素上添加额外的元素或者元素样式，但是这些元素不会在文档的源代码内找到，只会显示在页面上。
        总结：伪类是通过在元素选择器上加入伪类改变元素状态，而伪元素通过对元素的操作进行元素的改变.`
    },
    {
        title: "CSS --- 7.隐藏元素的方法",
        content: `
        1、display：none;不占位置（在渲染树内消失），不响应绑定的监听事件
        2、visibility：hidden；占位置（不会消失），不响应
        3、opacity：0；占位，响应
        4、position：absolute；移出可视区域
        5、z-index：复值；其他元素遮盖
        6、transform：scale（0,0）；元素缩放为0，占位不响应`
    },
    {
        title: "CSS --- 8.标准盒模型和怪异盒模型",
        content: `
        标准盒模型：
        标准盒模型在计算宽高的时候只计算 content 内容的宽高，不包含内外边距和边框的宽高
        当标准盒模型的宽高确认时，增加内外边距和边框会撑大原盒子
        怪异盒模型：
        怪异盒模型在计算宽高时包含 conntent 内容、padding内边距、border边框的宽高
        当怪异盒模型的宽高确认时，给怪异盒模型添加内边距和边框，怪异盒模型的宽高不会改变，而是通过向内压缩，挤压 content 内容的`
    },
    {
        title: "CSS --- 9.rem、em、vw、vh、px的区别",
        content: `
        px是固定的像素，一旦设置就无法因为适应页面大小而改变
        em和rem是相对长度单位，其长度不是固定的，更适应响应式布局
        em是相对父元素来设置大小的，rem是相对根元素的
        vw/vh：viewpoint（为破特） width / viewpoint height，vw 相对于视窗的宽度，vh 相对于视窗的高度，1vw等于视窗宽度的1%
        vmin：vw和vh中的较小值；
        vmax：vw和vh中的较大值；
        `
    },
    {
        title: "CSS --- 10.display的属性值和作用",
        content: `
        none	元素不显示，并且会从文档流中移除。
        block	块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
        inline	行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
        inline-block	默认宽度为内容宽度，可以设置宽高，同行显示。
        list-item	像块类型元素一样显示，并添加样式列表标记。
        table	此元素会作为块级表格来显示。
        inherit	规定应该从父元素继承display属性的值。
        `
    },
    {
        title: "CSS --- 11.display的block、inline和inline-block的区别",
        content: `
        （1）block： 会独占一行，多个元素会另起一行，可以设置width、height、margin和padding属性；
        （2）inline： 元素不会独占一行，设置width、height属性无效。但可以设置水平方向的margin和padding属性，不能设置垂直方向的padding和margin；
        （3）inline-block： 将对象设置为inline对象，但对象的内容作为block对象呈现，之后的内联对象会被排列在同一行内。
        `
    },
    {
        title: "CSS --- 12.CSS的选择器和优先级",
        content: `
        选择器和对应的优先级：
        1. 标签选择器、伪元素选择器：1；
        2. 类class选择器、伪类选择器、属性选择器：10；
        3. id 选择器：100；
        4. 内联样式：1000；
        !important > 内联 > id选择器 > 类名选择器 > 标签选择器
        `
    },
    {
        title: "CSS --- 13.transition和animation的区别",
        content: `
        transition是过渡属性，强调过度，它的实现是像鼠标移动上去，焦点，点击等）才执行动画。它类似于flash的补间动画，设置一个开始关键帧，一个结束关键帧。
        animation是动画属性，它的实现不需要触发事件，设定好时间之后可以自己执行，他也能循环一个动画。它也类似于flash的补间动画，但是它可以设置多个关键帧（用@keyframe定义）完成动画。
        `
    },
    {
        title: "CSS --- 14.对line-height 的理解及其赋值方式",
        content: `
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
        `
    },
    {
        title: "CSS --- 15.如何解决 1px的问题",
        content: `
        1、直接写0.5px
        2、伪元素先放大后缩小
        3、viewport缩放解决
        `
    },
    {
        title: "CSS --- 16.回流（重排）重绘",
        content: `
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
        `
    },
    {
        title: "CSS --- 17.响应式",
        content: `
        响应式就是跟随用户页面设备尺寸的变化，页面实现自动的适配
        比如你逛某个页面，缩放页面的时候发现1000-1160宽是一个适配，1160以外又是一个适配
        实现方案：
        1.弹性布局
        2.rem+媒体查询
        3.百分比
        4.媒体查询(代码量大)
        5.vw/vh：相对window大小
        `
    },
    {
        title: "CSS --- 18.高度塌陷",
        content: `
        产生原因：
        当父元素没有添加高度（高度自适应），而子元素脱离文档流的时候（当子元素设置了float或者子元素的position属性值为absolute或是fixed，都会脱离文档流），就会发生高度塌陷。
        解决方法：要么给父元素固定高度，要是高度自适应的情况下(念下面的四种)
        1、给父元素加overflow: hidden；
        2、给父元素添加border;
        3、给父元素添加padding;
        4、万能清除浮动法。给塌陷的父元素:after{content:"";display:block;clear:both; visibility:hidden;}
        `
    },
    {
        title: "CSS --- 19.说一下CSS权重优先级",
        content: `
        !important(无穷大) > 内联样式(1000) > id选择器(100) > 类选择器(属性选择器，伪类选择器)(10) > 标签选择器(伪元素选择器)(1) > 通配符选择器(0) > 继承(0)
        `
    },
    {
        title: "CSS --- 20.伪元素选择器",
        content: `
        :after => 在标签里的元素之后插入内容
        :before => 在标签里的元素之前插入内容
        :first-letter => 选择每个标签里的元素的首字母
        :first-line => 选择每个标签里的元素首行
        :selection => 选择用户选择的元素部分
        `
    },
    {
        title: "CSS --- 21.css属性，visibility，display，opacity有什么区别",
        content: `
        visibility：设置为hidden时，元素不可见，但是占位，元素在页面结构中不消失，默认值为visible可见
        display：设置为none时，元素不可见，不占位，元素在页面结构中不展示
        opacity：通过透明度，来实现元素不可见，为0时则不可见，占位，元素在页面结构中不消失
        `
    },

]