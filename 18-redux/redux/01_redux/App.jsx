import React, { Component } from 'react'
import store from './store'
import { incrementAction, decrementAction, incrementIfOddAction, incrementAsyncAction } from './count_action'

export default class App extends Component {
  state = {
    selectValue: 1,
    count: 0
  }
  getValue(e) {
    this.setState({
      selectValue: e.target.value
    })
  }
  increment() {
    const { selectValue } = this.state
    // this.setState({
    //   count: count + selectValue * 1
    // })
    // store.dispatch({ type: 'increment', data: selectValue * 1 })
    store.dispatch(incrementAction(selectValue * 1))
  }
  decrement() {
    const { selectValue } = this.state
    // this.setState({
    //   count: count - selectValue * 1
    // })
    // store.dispatch({ type: 'decrement', data: selectValue * 1 })
    store.dispatch(decrementAction(selectValue * 1))
  }
  incrementIfOdd() {
    const { selectValue } = this.state
    if (store.getState() % 2 !== 0) {
      //   this.setState({
      //     count: count + selectValue * 1
      //   })
      //   store.dispatch({ type: 'incrementIfOdd', data: selectValue * 1 })
      store.dispatch(incrementIfOddAction(selectValue * 1))
    }
  }
  incrementAsync() {
    // const { selectValue } = this.state
    // setTimeout(() => {
    //   this.setState({
    //     count: count + 1
    //   })
    //   store.dispatch({ type: 'incrementAsync', data: 1 })
    // 异步action
    store.dispatch(incrementAsyncAction(1, 2000))
    // }, 500)
  }
  render() {
    return (
      <div>
        <div>值： {store.getState()}</div>
        <select onChange={e => this.getValue(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={() => this.increment()}>+</button>&nbsp;&nbsp;
        <button onClick={() => this.decrement()}>-</button>&nbsp;&nbsp;
        <button onClick={() => this.incrementIfOdd()}>结果为奇数的时候+</button>&nbsp;&nbsp;
        <button onClick={() => this.incrementAsync()}>异步加一</button>&nbsp;&nbsp;
      </div>
    )
  }
}
