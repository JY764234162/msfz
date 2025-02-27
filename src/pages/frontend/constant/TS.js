export default [
  {
    title: "TS --- 1. TS的数据类型",
    content: `
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
    `,
  },
  {
    title: "TS --- 2. TS是什么和使用ts的好处",
    content: `
    1. 拓展了语法：TypeScript是JavaScript的加强版，它给JavaScript添加了可选的静态类型和基于类的面向对象编程，它拓展了JavaScript的语法。
    2. 明确的数据类型：作为强类型语言，你可以明确知道数据的类型。代码可读性极强。
    3. 友好的报错提示：TS 在开发时就能给出编译错误， 而 JS 错误则需要在运行时才能暴露。
    4. 方便的特性：ts中有很多很方便的特性, 比如可选链.
    5. 纯面向对象：Typescript 是纯面向对象的编程语言，包含类和接口的概念.
    `,
  },
  {
    title: "TS --- 3. TypeScript 相对于 JavaScript 的优势",
    content: `
    增加了静态类型，可以在开发人员编写脚本时检测错误，使得代码质量更好，更健壮。
    优势:
    1. 杜绝手误导致的变量名写错;
    2. 类型可以一定程度上充当文档;
    3. IDE自动填充，自动联想;
    `,
  },
  {
    title: "TS --- 4. TypeScript 中 any 类型的作用",
    content: `
    为编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。
    `,
  },
  {
    title: "TS --- 5. TypeScript 中 any、never、unknown、null & undefined 和 void 的区别",
    content: `
    any: 动态的变量类型（失去了类型检查的作用）。
    never: 永不存在的值的类型。例如：never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
    unknown: 任何类型的值都可以赋给 unknown 类型，但是 unknown 类型的值只能赋给 unknown 本身和 any 类型。
    null & undefined: 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和  undefined 赋值给 number 类型的变量。当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自。
    void: 没有任何类型。例如：一个函数如果没有返回值，那么返回值可以定义为void。
    `,
  },
  {
    title: "TS --- 6. TypeScript 中的 this 和 JavaScript 中的 this 的不同",
    content: `
    TypeScript：noImplicitThis: true 的情况下，必须去声明 this 的类型，才能在函数或者对象中使用this。
    Typescript 中箭头函数的 this 和 ES6 中箭头函数中的 this 是一致的。
    `,
  },
  {
    title: "TS --- 7. TypeScript 中 type 和 interface 的区别?",
    content: `
    共同点：
      1.都是TS中用来定义对象或者函数类型限制的方式
      2.type和interface都可以被继承（type继承type、interface是通过&，interface继承）
    区别：
      type可以定义基本类型别名，interface只能定义函数或对象接口
      type可以声明联合类型
      type可以声明元组
      type不能声明合并（多次声明合并成一次），interface可以
      type可以使用typeof获取实例类型
    `,
  },
  {
    title: "TS --- 8. 对 TypeScript 类中成员的 public、private、protected、readonly 修饰符的理解",
    content: `
    public: 成员都默认为public，被此限定符修饰的成员是可以被外部访问；
    private: 被此限定符修饰的成员是只可以被类的内部访问；
    protected: 被此限定符修饰的成员是只可以被类的内部以及类的子类访问;
    readonly: 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
    它的一个权限范围排序的话就是：public>protected>private，readonly与所属成员的修饰符相同，就不涉及排序了。
    `,
  },
  {
    title: "TS --- 9. keyof 和 typeof 关键字的作用",
    content: `
    keyof 索引类型查询操作符 获取索引类型的属性名，构成联合类型。
    typeof 获取一个变量或对象的类型。
    `,
  },
  {
    title: "TS --- 10. 泛型",
    content: `
     泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，使用时再去指定类型的一种特性。 可以把泛型理解为代表类型的参数 // 我们希望传入的值是什么类型，返回的值就是什么类型 // 传入的值可以是任意的类型，这时候就可以用到 泛型
    `,
  },
  {
    title: "TS --- 11. 为什么要用 TypeScript",
    content: `
     TS 在开发时就能给出编译错误， 而 JS 错误则需要在运行时才能暴露。 作为强类型语言，你可以明确知道数据的类型。代码可读性极强，几乎每个人都能理解。 TS 非常流行，被很多业界大佬使用。像 Asana、Circle CI 和 Slack 这些公司都在用 TS。
    `,
  },
  {
    title: "TS --- 12. 优点缺点和使用场景",
    content: `
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
    `,
  },
  {
    title: "TS --- 13. any用的多吗，有什么弊端？",
    content: `
    使用any类型的主要目的是在不清楚变量类型的情况下避免编译错误，但是，频繁地使用any类型那就等于白白浪费了TS的类型检查能力。
    正确的做法是尽可能避免使用any类型，尽可能地使用明确的类型，这样可以提高代码的可读性和可维护性，并且可以减少潜在的运行时错误。
    但是有时候时间紧任务重又不得不用，所以一句话总结就是，尽量不用，不到万不得已不轻易用any。
    `,
  },
  {
    title: "TS --- 14.never和void的区别",
    content: `
    void 表示没有任何类型（可以被赋值为 null 和 undefined）。
    never 表示一个不包含值的类型，即表示永远不存在的值。
    拥有 void 返回值类型的函数能正常运行。拥有 never 返回值类型的函数无法正常返回，无法终止，或会抛出异常。
    `,
  },
  {
    title: "TS --- 15.any和unknown有什么区别",
    content: `
    unknown 和 any 的主要区别是 unknown 类型会更加严格：在对 unknown 类型的值执行大多数操作之前，我们必须进行某种形式的检查；而在对 any 类型的值执行操作之前，我们不必进行任何检查。
    `,
  },
  {
    title: "TS --- 16.const和readonly的区别",
    content: `
    const 用于变量，readonly 用于属性
    const 在运行时检查，readonly 在编译时检查
    使用 const 变量保存的数组，可以使用 push，pop 等方法；但是如果使用 Readonly Array 声明的数组不能使用 push，pop 等方法
    `,
  },
  {
    title: "TS --- 17.TypeScript 模块的加载机制",
    content: `
    假设有一个导入语句 import { a } from "moduleA"

    首先，编译器会尝试定位需要导入的模块文件，通过绝对或者相对的路径查找方式
    如果上面的解析失败了，没有查找到对应的模块，编译器会尝试定位一个外部模块声明（.d.ts）
    最后，如果编译器还是不能解析这个模块，则会抛出一个错误 error TS2307: Cannot find module 'moduleA'
    `,
  },
  {
    title: "TS --- 18.TypeScript装饰器",
    content: `
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
    `,
  }
];
