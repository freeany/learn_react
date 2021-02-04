import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction, createIncrementIfOdd, createIncrementAsyncAction } from '../../redux/actions/count'

export default class CountUI extends Component {
  state = {
    selectValue: 1
  }
  // 受控组件
  handleSelectChange(e) {
    this.setState({
      selectValue: e.target.value
    })
  }

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
  render() {
    console.log(this.props)
    console.log(store)
    console.log(store.getState())
    const value = this.state.selectValue
    return (
      <div>
        <h1>{store.getState()}</h1>
        <select onChange={e => this.handleSelectChange(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={() => this.handleIncrement(value)}>+</button>&nbsp;
        <button onClick={() => this.handleDecrement(value)}>-</button>&nbsp;
        <button onClick={() => this.handleIncrementIfOdd(value)}>odd +</button>&nbsp;
        <button onClick={() => this.handleIncrementAsync(value)}>async +</button>
      </div>
    )
  }
}
