1.  数据驱动视图
    数据 ==> vdom ==> 真实 dom ==> 渲染
    
2.  dom diff
    vdom ==> 真实 dom 需要经过 dom diff
    is someVdom? 如何判断? 通过选择器+key
    当旧的 vdom 与 新的 vdom 比对时(只可以同层对比) :: 这里不考虑对比策略 即 diff 的算法
    如果 key 相同，那么进行 patchVnode。 如果 key 不相同，则移除旧的真实 dom，重新创建新的 vdom 进行全覆盖。
    
3.  用 index 做 key 的坏处?

    1. 如果仅仅是显示数据，则用 index 做 key 无影响
    
    2. 如果只涉及到对数据的 push 操作，只向后插入数据则无影响
    3. 如果涉及到对数据的向前插入 或者 中间插入那么用 index 做 key 会造成下面这种问题
    
    第一 ：**效率问题， 不会复用以前的 dom**
        (1)   使用 index 作为 key 的情况：
    
    ```js
    oldVdom: [{id: 1, value: 'a'}, {id: 2, value: 'b'}]
    	向前插入 c ==>
    newVdom: [{id: 3, value: 'c'}, {id: 1, value: 'a'}, {id: 2, value: 'b'}]
    ```
    
    ​		 'a' 和 'c' 的 key 都是 0 . 即进行
    
    ```html
     patchVnode( <li key="0">a</li>, <li key="0">c</li>)
    ```
    
    ​	patchVnode中判断 vnode.text 不同，则重新替换
    
     	'b' 和 'a' key 是 1，则进行....上述相同的操作
    
    ​	  id: 2不存在，则需要创建`<li key="2">b</li>` dom元素，插入到页面最后
    
    
    
    
    
    ​	(2)   使用 id 作为 key 的情况：
    
    ```js
    oldVdom: [{id: 1, value: 'a'}, {id: 2, value: 'b'}]
    	向前插入 c ==>
    newVdom: [{id: 3, value: 'c'}, {id: 1, value: 'a'}, {id: 2, value: 'b'}]
    ```
    
    1. 通过 diff 算法的四种情况，id 为 3 不存在，重新创建 dom， 添加到 oldVdom 的最前面，
    
    2. id 为 1 存在， 进行 patchVnode(`<li key='1'>a</li>, <li key='1'>a</li>`)
             判断 vnode.text 相同不作任何操作。
    
    3. id为2存在，和上述一样的情况不作任何操作
    
          **通过对比可以发现。用index做key 进行了三次的dom操作， 而用id做key只进行了一次的dom操作。**
    
    第二： **输入类dom错位问题**
    
    ​	如果用index做key， 而且dom结构中有输入类的dom，则会产生错误的dom更新 ==> 会产生界面更新错位的问题。
