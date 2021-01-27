React 是一个将数据渲染为 HTML 视图的开源 JavaScript 库

### 原生 js 的痛点

1. 原生 JavaScript 操作 dom 繁琐， 效率低（DOM-API 操作 UI）
   1.1 DOM-API  
   document.getElementById('app')
   document.querySelector('app')...
2. 使用 JavaScript 直接操作 DOM，浏览器会进行大量的重绘重排
3. 原生 JavaScript 没有组件化编码方案，代码复用率低

### react 的特点

1. 采用组件化模式、声明式编码，提高开发效率及组件复用率
2. 在 rn 中可以使用 react 语法进行移动端开发
3. 使用虚拟 dom+优秀的 diffing 算法，尽量减少与真实 dom 的交互

### 关于虚拟dom
/*
    关于虚拟dom：
        1. 本质式Object类型的对象（一般对象）
        2. 虚拟dom比较"轻"， 真实dom比较"重"，因为虚拟dom是react内部再用，无需真实dom上那么多属性
        3. 虚拟dom最终会被react转化成真实dom，呈现在页面上。 
*/

```HTML
 const vdom = (
    <div>
        <h1 id={myId.toLowerCase()} className="title">
        <span style={{ color: 'red', fontSize: '40px' }}>{myData.toUpperCase()}</span>
        </h1>
        {/* <goods></goods> */}
        {/* <Goods></Goods> */}
    </div>
)
```

### jsx语法规则
        1. 定义虚拟dom时，不要写引号
        2. 标签中混入js表达式时要用{}
            (1). 注意时js表达式 而不是js语句(代码)
            (2). 表达式： 一个表达式会产生一个值， 可以放在任何一个需要值的地方
                    下面这些语句都是表达式, 有返回值的就是表达式
                    1. a
                    2. a+b
                    3. fn(1)
                    4. arr.map/...
                    5. function fn() {}
                    下面这些都是语句（代码）
                    1. if(){}
                    2. for() {}
                    3. switch() {}
        3. 样式的类名指定不要用class， 要用className
        4. 内联样式， 要用style={{key: value}}的形式去写
        5. 只有一个根标签
        6. 标签必须闭合
        7. 标签首字母
            (1). 若小写字母开头，则将该标签转为html中同名元素，若html中无该标签对应的同名元素，则报错
            <goods></goods>
            The tag <goods> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
            (2). 若大写字母开头，react就去渲染对应的组件，如果组件没定义则报错
            <Goods></Goods>
            Goods is not defined
        8. object/function类型不能作为react的节点, 即使数组中套对象[{}] 这种的结构也不行。
                数组可以直接作为react的节点， react会帮你自动遍历
      

### 何为组件
组件就是实现一个功能的该区域的所有的html、css、js、img、video、font、交互...等功能抽成一个文件，这个文件就是组件，所以才有的组件通信等...概念
组件的作用
复用编码、简化项目编码、提高运行效率

### 函数式组件
```HTML
function Fn() {
    console.log(this) // babel开启严格模式， this指向undefined
    return <h1>函数式组件</h1>
}
ReactDOM.render(<Fn />, document.getElementById('root'))
/*
  执行了ReactDOM.render(<Fn />, ...) 发生的事情
    1. react解析组件标签， 找到了Fn组件
    2. 发现组件是使用函数定义的，随后调用该函数，将返回的虚拟dom转为真实dom， 随后呈现到页面中
*/
```

### 类组件
```HTML
class MyComponent extends React.Component {
    render() {
        // render是放在哪里的？ --- MyComponentM的原型对象上。供实例使用
        // render中的this是谁？ --- react内部new 的MyComponent的实例对象。
        console.log(this)
        return <h2>我是class定义的组件(适用于【复杂组件的定义】)</h2>
    }
}
ReactDOM.render(<MyComponent />, document.getElementById('root'))
/*
  执行了ReactDOM.render(<Fn />, ...) 发生的事情
    1. react解析组件标签， 找到了MyComponent组件
    2. 发现组件是使用类定义的，随后new出该类的实例，并通过该实例调用原型上的方法。
    3. 将render返回的虚拟dom转为真实dom，随后呈现在页面中。
*/
```

### 组件的状态
人      状态        影响        行为
组件    状态        驱动        页面

