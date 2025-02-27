export default [
  {
    title: "工程化 --- 1. GIT常用命令",
    content: `
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
    `,
  },
  {
    title: "工程化 --- 2. git pull 和 git fetch 的区别",
    content: `
    它俩都是把远程仓库的变化下载下来，但是git pull下载下来之后跟当前分支合并了。
    git fetch 只是把远程仓库的变化下载下来，并没有和本地分支合并。
    git pull 会把远程仓库的变化下载下来，并和当前分支合并。
    `,
  },
  {
    title: "工程化 --- 3. git rebase 和 git merge 的区别",
    content: `
    git merge 和 git rebase 它俩都是用于分支合并，关键在 commit(提交) 记录的处理上不同：
    git merge 会新建一个新的 commit 对象，然后两个分支以前的 commit 记录都指向这个新 commit 记录。这种方法会保留之前每个分支的 commit 历史。
    git rebase 会先找到两个分支的第一个共同的 commit 祖先记录，然后将提取当前分支这之后的所有 commit 记录，然后将这个 commit 记录添加到目标分支的最新提交后面。经过这个合并后，两个分支合并后的 commit 记录就变为了线性的记录了。通俗点说就是，从master上拉出来一个分支A，在这个分支上有几次 commit，master上也有几次commit，这时候在A这个分支上git rebase 就是将 master 上面的 commit 作为A分支的基底，实际操作为把A分支之后 commit 的提交先暂存下来，然后删掉原来这些提交，再找到master的最新提交位置拉下来，然后把存下来的提交再接上去。
    `,
  },
  {
    title: "工程化 --- 4. git 和 svn 的区别",
    content: `
    git 和 svn 最大的区别在于 git 是分布式的，而 svn 是集中式的。因此我们不能再离线的情况下使用 svn。如果服务器出现问题，就没有办法使用 svn 来提交代码。
    svn 中的分支是整个版本库的复制的一份完整目录，而 git 的分支是指针指向某次提交，因此 git 的分支创建更加开销更小并且分支上的变化不会影响到其他人。svn 的分支变化会影响到所有的人。
    svn 的指令相对于 git 来说要简单一些，比 git 更容易上手。
    GIT把内容按元数据方式存储，而SVN是按文件：因为git目录是处于个人机器上的一个克隆版的版本库，它拥有中心版本库上所有的东西，例如标签，分支，版本记录等。
    GIT分支和SVN的分支不同：svn会发生分支遗漏的情况，而git可以同一个工作目录下快速的在几个分支间切换，很容易发现未被合并的分支，简单而快捷的合并这些文件。
    GIT没有一个全局的版本号，而SVN有
    GIT的内容完整性要优于SVN：GIT的内容存储使用的是SHA-1哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏
    `,
  },
  {
    title: "工程化 --- 5. webpack的构建流程",
    content: `
    Webpack 的运⾏流程是⼀个串⾏的过程，从启动到结束会依次执⾏以下流程： 
    初始化参数：从配置⽂件和 Shell 语句中读取与合并参数，得出最终的参数； 
    开始编译：⽤上⼀步得到的参数初始化 Compiler 对象，加载所有配置的插件，执⾏对象的 run ⽅法开始执⾏编译； 
    确定⼊⼝：根据配置中的 entry 找出所有的⼊⼝⽂件； 
    编译模块：从⼊⼝⽂件出发，调⽤所有配置的 Loader 对模块进⾏翻译，再找出该模块依赖的模块，再递归本步骤直到所有⼊⼝依赖的⽂件都经过了本步骤的处理； 
    完成模块编译：在经过第4步使⽤ Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系； 
    输出资源：根据⼊⼝和模块之间的依赖关系，组装成⼀个个包含多个模块的 Chunk，再把每个 Chunk 转换成⼀个单独的⽂件加⼊到输出列表，这步是可以修改输出内容的最后机会； 
    输出完成：在确定好输出内容后，根据配置确定输出的路径和⽂件名，把⽂件内容写⼊到⽂件系统。
    在以上过程中，Webpack 会在特定的时间点⼴播出特定的事件，插件在监听到感兴趣的事件后会执⾏特定的逻辑，并且插件可以调⽤ Webpack 提供的 API 改变 Webpack 的运⾏结果。 
    `,
  },
  {
    title: "工程化 --- 6. webpack配置有哪些",
    content: `
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
    `,
  },
  {
    title: "工程化 --- 7. 有哪些常⻅的Loader",
    content: `
    babel-loader：将ES6+的代码转换成ES5的代码。
    css-loader：解析CSS文件，并处理CSS中的依赖关系。
    style-loader：将CSS代码注入到HTML文档中。
    file-loader：解析文件路径，将文件赋值到输出目录，并返回文件路径。
    url-loader：类似于file-loader，但是可以将小于指定大小的文件转成base64编码的Data URL格式
    sass-loader：将Sass文件编译成CSS文件。
    less-loader：将Less文件编译成CSS文件。
    postcss-loader：自动添加CSS前缀，优化CSS代码等。
    vue-loader：将Vue单文件组件编译成JavaScript代码。
    `,
  },
  {
    title: "工程化 --- 8. 有哪些常⻅的Plugin",
    content: `
    HtmlWebpackPlugin：生成HTML文件，并自动将打包后的javaScript和CSS文件引入到HTML文件中。
    CleanWebpackPlugin：清除输出目录。
    ExtractTextWebpackPlugin：将CSS代码提取到单独的CSS文件中。
    DefinePlugin：定义全局变量。
    UglifyJsWebpackPlugins(啊哥拉发艾js铺拉根)：压缩JavaScript代码。
    HotModuleReplacementPlugin：热模块替换，用于在开发环境下实现热更新。
    ExtractTextWebpackPlugin：将CSS代码提取到单独的CSS文件中。
    MiniCssExtractPlugin：与ExtractTextWebpackPlugin类似，将CSS代码提取到单独的CSS文件中。
    BundleAnalyzerPlugin(颁刀啊呢拉艾热铺拉根)：分析打包后的文件大小和依赖关系。
    `,
  },
  {
    title: "工程化 --- 9. Loader和Plugin的区别",
    content: `
    功能不同：
    Loader本质是一个函数，它是一个转换器。webpack只能解析原生js文件，对于其他类型文件就需要loade进行转换。
    Plugin它是一个插件，用于增强webpack功能。webpack在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 webpack 提供的 API 改变输出结果 。
    用法不同：
    Loader的配置是在module.rules下进行。类型为数组，每⼀项都是⼀个 Object ，⾥⾯描述了对于什么类型的⽂件（ test ），使⽤什么加载( loader )和使⽤的参数（ options ） 。
    Plugin的配置在plugins下。类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。
    `,
  },
  {
    title: "工程化 --- 10. 如何⽤webpack来优化前端性能",
    content: `
    ⽤webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运⾏的更快更⾼效。 
    你比如说，压缩代码：删除多余的代码、注释、简化代码的写法等等⽅式。可以利⽤webpack的 UglifyJsPlugin(啊哥拉发艾js铺拉根) 和 ParallelUglifyPlugin(啪若来奥啊哥拉发艾铺拉根) 来压缩JS⽂件， 利⽤ cssnano （css-loader的minimize(迷你马艾斯)）来压缩css 
    利⽤CDN加速: 在构建过程中，将引⽤的静态资源路径修改为CDN上对应的路径。可以利⽤webpack对于 output 参数和各loader的 publicPath 参数来修改资源路径 
    Tree Shaking(shei ken): 将代码中永远不会⾛到的⽚段删除掉。可以通过在启动webpack时追加参数 --optimize(奥克忒马埃丝)-minimize 来实现
    Code Splitting(斯布里听): 将代码按路由维度或者组件分块(chunk),这样做到按需加载,同时可以充分利⽤浏览器缓存 
    提取公共第三⽅库: SplitChunksPlugin(斯普里尝死铺拉根)插件来进⾏公共模块抽取,利⽤浏览器缓存可以⻓期缓存这些⽆需频繁变动的公共代码 
    `,
  },
  {
    title: "工程化 --- 11. 如何提⾼webpack的打包速度",
    content: `
    happypack(哈皮帕克): 利⽤进程并⾏编译loader,⽤缓存让 rebuild 更快,这个的话作者已经不会继续开发了,可以用thread(死乳癌的)-loader 代替
    外部扩展(externals(伊克斯带闹死)): 将不怎么需要更新的第三⽅库脱离webpack打包，不被打⼊bundle中，从⽽减少打包时间，⽐如jQuery⽤script标签引⼊ 
    dll: 采⽤webpack的 DllPlugin 和 DllReferencePlugin 引⼊dll，让⼀些基本不会改动的代码先打包成静态资源，避免反复编译浪费时间 
    利⽤缓存: webpack.cache 、babel-loader.cacheDirectory、 HappyPack.cache 都可以利⽤缓存提⾼rebuild效率缩⼩⽂件搜索范围: ⽐如babel-loader插件,如果你的⽂件仅存在于src中,那么可以 include: path.resolve(__dirname,'src') ,当然绝⼤多数情况下这种操作的提升有限，除⾮不⼩⼼build了node_modules⽂件 
    `,
  },
  {
    title: "工程化 --- 12. 如何提⾼webpack的构建速度",
    content: `
    多⼊⼝情况下，使⽤ CommonsChunkPlugin(康们死常客铺拉根) 来提取公共代码 
    通过 externals(伊克斯带闹死) 配置来提取常⽤库 
    利⽤ DllPlugin 和 DllReferencePlugin 预编译资源模块 通过 DllPlugin 来对那些我们引⽤但是绝对不会修改的npm包来进⾏预编译，再通过 DllReferencePlugin 将预编译的模块加载进来。 
    使⽤ Happypack 实现多线程加速编译 
    使⽤ webpack-uglify-parallel(啪若来奥) 来提升 uglifyPlugin 的压缩速度。 原理上 webpack-uglify-parallel 采⽤了多核并⾏压缩来提升压缩速度 
    使⽤ Tree-shaking(shei ken) 和 Scope Hoisting(后死听) 来剔除多余代码 
    `,
  },
  {
    title: "工程化 --- 13. 如何减少打包后的代码体积",
    content: `
    代码分割（Code Splitting）：将应用程序的代码划分为多个代码块，按需加载
    Tree Shaking：配置Webpack的Tree Shaking机制，去除未使用的代码
    压缩代码：使用工具如UglifyJS或Terser来压缩JavaScript代码
    使用生产模式：在Webpack中使用生产模式，通过设置mode: 'production'来启用优化
    使用压缩工具：使用现代的压缩工具，如Brotli和Gzip，来对静态资源进行压缩
    利用CDN加速：将项目中引用的静态资源路径修改为CDN上的路径，减少图片、字体等静态资源等打包
    `,
  },
  {
    title: "工程化 --- 14. webpack 热更新的实现原理",
    content: `
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
    `,
  },
  {
    title: "工程化 --- 15. 为什么需要热更新",
    content: `
    Hot Module Replacement（以下简称 HMR）是 webpack 发展至今引入的最令人兴奋的特性之一 ，当你对代码进行修改并保存后，webpack 将对代码重新打包，并将新的模块发送到浏览器端，浏览器通过新的模块替换老的模块，这样在不刷新浏览器的前提下就能够对应用进行更新。例如，在开发 Web 页面过程中，当你点击按钮，出现一个弹窗的时候，发现弹窗标题没有对齐，这时候你修改 CSS 样式，然后保存，在浏览器没有刷新的前提下，标题样式发生了改变。感觉就像在 Chrome 的开发者工具中直接修改元素样式一样。
    `,
  },
  {
    title: "工程化 ---HMR是怎样实现自动编译的",
    content: `
    webpack通过watch可以监听文件编译完成和监听文件的变化，webpack-dev-middleware可以调用webpack的API监听代码的变化，webpack-dev-middleware利用sockjs和webpack-dev-server/client建立webSocket长连接。将webpack的编译编译打包的各个阶段告诉浏览器端。主要告诉新模块hash的变化，然后webpack-dev-server/client是无法获取更新的代码的，通过webpack/hot/server获取更新的模块，然后HMR对比更新模块和模块的依赖。
    `,
  },
  {
    title: "工程化 --- 16. Vite 预构建流程",
    content: `
    首先会去查找缓存目录（默认是 node_modules/.vite）下的 _metadata.json 文件；然后找到当前项目依赖信息（xxx-lock 文件）拼接上部分配置后做哈希编码，最后对比缓存目录下的 hash 值是否与编码后的 hash 值一致，一致并且没有开启 force 就直接返回预构建信息，结束整个流程；
    如果开启了 force 或者项目依赖有变化的情况，先保证缓存目录干净（node_modules/.vite 下没有多余文件），在 node_modules/.vite/package.json 文件写入 type: module 配置。这就是为什么 vite 会将预构建产物视为 ESM 的原因。
    分析入口，依次查看是否存在 optimizeDeps.entries、build.rollupOptions.input、*.html，匹配到就通过 dev-scan 的插件寻找需要预构建的依赖，输出 deps 和 missing，并重新做 hash 编码；
    最后使用 es-module-lexer 对 deps 模块进行模块化分析，拿到分析结果做预构建。构建结果将合并内部模块、转换 CommonJS 依赖。最后更新 data.optimizeDeps 并将结果写入到缓存文件。
    `,
  },
  {
    title: "工程化 --- 17. Vite 和 Webpack 的区别",
    content: `
    首先webpack和vite都是现代化打包工具。然后Vite的启动要快一些，因为Vite的底层原理是基于esbuild预构建依赖。而esbuild是采用go语言编写，因为go语言的操作是纳秒级别，而js是以毫秒计数，所以vite比用js编写的打包器快10-100倍。
    就是 webpack 会先打包，然后启动开发服务器，请求服务器时直接给予打包结果。而vite是直接启动开发服务器，请求哪个模块再对该模块进行实时编译。
    因为现代浏览器本身就支持ES Module，会自动向依赖的Module发出请求。vite就利用这一点，将开发环境下的模块文件，就作为浏览器要执行的文件，而不是像webpack那样进行打包合并。
    由于vite在启动的时候不需要打包，也就意味着不需要分析模块的依赖、不需要编译，因此启动速度非常快。当浏览器请求某个模块时，再根据需要对模块内容进行编译。这种按需动态编译的方式，极大的缩减了编译时间，项目越复杂、模块越多，vite的优势越明显。
    在HMR(热更新)方面，当改动了一个模块后，仅需让浏览器重新请求该模块即可，不像webpack那样需要把该模块的相关依赖模块全部编译一次，效率更高。
    当需要打包到生产环境时，vite使用传统的rollup进行打包，因此，vite的主要优势在开发阶段。另外，由于vite利用的是ES Module，因此在代码中不可以使用CommonJS。然后的话vite它的相关生态没有webpack完善，我理解的差不多这么多。
    `,
  },
  {
    title: "工程化 --- 18. babel的原理",
    content: `
    babel 的转译过程就三个阶段，就是解析转换和输出。 
    首先 Parse 就是将代码解析⽣成抽象语法树（AST），就是词法分析与语法分析的过程；
    然后 Transform 就是对于 那个抽象语法树 (AST) 进⾏变换⼀系列的操作，babel 它接受到 AST 并通过 babel-traverse(踹沃斯) 对它进⾏遍历，在这个过程中进⾏添加、更新及移除等操作；
    最后 Generate(摘呢瑞特) 就是把变换后的 AST 再转换为 JS 代码, 使⽤到的模块是 babel-generator(摘呢瑞特)。
    `,
  },
  {
    title: "工程化 --- 19. 为什么 pnpm 比 npm 快",
    content: `
    Pnpm 比 npm 快的原因在于其优化的文件存储方式、依赖管理方式以及并行下载能力。 以下是详细介绍：
    Pnpm 使用基于内容寻址的文件系统来存储磁盘上的所有文件，这意味着它不会在磁盘中重复存储相同的依赖包，即使这些依赖包被不同的项目所依赖。这种存储方式使得Pnpm在安装依赖时能够更高效地利用磁盘空间，同时也减少了下载和安装的时间。
    Pnpm 在下载和安装依赖时采用了并行下载的能力，这进一步提高了安装速度。
    Pnpm 还具有一些其他特性，例如节省空间的硬链接和符号链接的使用，这些都有助于提高其性能。
    `,
  },
  {
    title: "工程化 --- 20. npm install 的执行过程",
    content: `
    npm install 是 Node.js 包管理器 (npm) 的一个命令，用于安装一个项目所依赖的模块。
    执行过程大致如下：
    读取 package.json 文件，该文件列出了项目所需要的依赖。
    根据 package.json 中的依赖信息以及 node_modules 目录状态，npm 会决定哪些模块需要下载和安装。
    npm 会查看每个模块的可用版本，并选择符合 package.json 中指定版本范围的最新版本进行安装。
    下载所需模块到本地的 node_modules 目录。
    如果模块包含子模块（package.json 中 dependencies 或 devDependencies 中的模块），则递归执行上述步骤安装这些子模块。
    `,
  }
];
