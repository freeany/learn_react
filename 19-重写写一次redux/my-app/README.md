1. 安装redux

   1. 使用redux库创建store

      ```jsx
      import {createStore} from 'redux'
      import reducer from './reducers/count'
      const store = createStore(reducer)
      ```

   2. 创建constant常量文件

      ```jsx
      export const INCREMENT = 'increment'
      export const DECREMENT = 'decrement'
      export const INCREMENTIFODD = 'incrementIfOdd'
      export const INCREMENTASYNC = 'incrementAsync'
      ```

   3. store.js中需要reducers, 创建reducer

      > reducers是一个函数

      ```jsx
      import { INCREMENT, DECREMENT, INCREMENTIFODD, INCREMENTASYNC } from '../constant/count'
      
      const initState = 333
      function countReducer(preState = initState, action) {
        const { type, data } = action
        switch (type) {
          case INCREMENT:
          case INCREMENTIFODD:
          case INCREMENTASYNC:
            return preState + data
          case DECREMENT:
            return preState - data
          default:
            return preState
        }
      }
      
      export default countReducer
      ```

   4. 组件需要使用redux中的数据，在组件中引入redux

      `import store from '../../redux/store'`

      组件中的每个动作需要改变redux中的数据， 需要store.dispatch( action)。action是一个个的对象，创建action.

      ```jsx
      import { INCREMENT, DECREMENT, INCREMENTIFODD, INCREMENTASYNC } from '../constant/count'
      
      export const createIncrementAction = data => ({ type: INCREMENT, data })
      export const createDecrementAction = data => ({ type: DECREMENT, data })
      export const createIncrementIfOdd = data => ({ type: INCREMENTIFODD, data })
      export const createIncrementAsyncAction = data => dispatch => {
        setTimeout(() => {
          dispatch({ type: INCREMENTASYNC, data })
        }, 500)
      }
      ```

   5. 如果使用到了异步的action，则需要在store.js中引入中间件redux-thunk。

      ```jsx
      import { createStore, applyMiddleware } from 'redux'
      import thunk from 'redux-thunk'
      import reducer from './reducers/count'
      const store = createStore(reducer, applyMiddleware(thunk))
      
      export default store
      ```

   6. 组件中使用store的dispatch改变redux中的数据

      ```jsx
      handleIncrement(value) {
          store.dispatch(createIncrementAction(value))
      }
      handleDecrement(value) {
          store.dispatch(createDecrementAction(value))
      }
      handleIncrementIfOdd(value) {
          if (store.getState() % 2 !== 0) {
              store.dispatch(createIncrementIfOdd(value))
          }
      }
      handleIncrementAsync(value) {
          store.dispatch(createIncrementAsyncAction(value))
      }
      ```

   7. 当redux中的数据改变时并没有render组件。此时需要在index.js中监听store的变化，当store中数据发生变化时重新render组件

      ```jsx
      import React from 'react'
      import ReactDOM from 'react-dom'
      import store from './redux/store'
      import App from './App'
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('root')
      )
      
      store.subscribe(() => {
        ReactDOM.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>,
          document.getElementById('root')
        )
      })
      ```

### 使用react-redux管理redux

1. 将组件拆成ui组件和容器组件。(react-redux的规则)
2. 容器组件由react-redux提供的connect提供
3. 在根组件中使用react-redux提供的Provider组件向组件暴露store
4. index.js中不必监听store的变化然后重新render这个App。

容器组件

```jsx
import { connect } from 'react-redux'
import CountUI from '../../components/CountUI'
import { createIncrementAction, createDecrementAction, createIncrementIfOdd, createIncrementAsyncAction } from '../../redux/actions/count'

/* 
	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态
*/
// 回调函数的参数state 就是store.getState
const mapStateToProps = state => ({ state })

/* 
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
*/
// function mapDispatchToProps(dispatch){
// 	return {
// 		increment:number => dispatch(incrementAction(number)),
// 		decrement:number => dispatch(decrementAction(number)),
// 		incrementAsync:(number,time) => dispatch(incrementAsyncAction(number,time)),
// 	}
// }
// 这里已经自动调用了dispatch
const mapDispatchToProps = {
  incrementAction: createIncrementAction,
  decrementAction: createDecrementAction,
  incrementIfOdd: createIncrementIfOdd,
  incrementAsyncAction: createIncrementAsyncAction
}
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
```

ui组件由this.props接收

```jsx
const { state, incrementAction, decrementAction, incrementAsyncAction } = this.props
```

