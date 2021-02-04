import React, { Component } from 'react'

export default class CountUI extends Component {
  state = {
    selectValue: 1
  }
  // 受控组件
  handleSelectChange(e) {
    this.setState({
      selectValue: e.target.value * 1
    })
  }
  incrementIfOdd(value) {
    const { state, incrementIfOdd } = this.props
    if (state % 2 !== 0) {
      incrementIfOdd(value)
    }
  }

  render() {
    const { state, incrementAction, decrementAction, incrementAsyncAction } = this.props

    const value = this.state.selectValue
    return (
      <div>
        <h1>{state}</h1>
        <select onChange={e => this.handleSelectChange(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={() => incrementAction(value)}>+</button>&nbsp;
        <button onClick={() => decrementAction(value)}>-</button>&nbsp;
        <button onClick={() => this.incrementIfOdd(value)}>odd +</button>&nbsp;
        <button onClick={() => incrementAsyncAction(value, 500)}>async +</button>
      </div>
    )
  }
}
