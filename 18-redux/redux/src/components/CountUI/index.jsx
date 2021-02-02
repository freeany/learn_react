import React, { Component } from 'react'

export default class CountUI extends Component {
  state = {
    selectValue: 1
  }
  getSelectValue(e) {
    this.setState({
      selectValue: e.target.value * 1
    })
  }
  render() {
    const { count, decrement, increment, incrementAsync, incrementIfOdd } = this.props
    const { selectValue } = this.state
    return (
      <div>
        <div>值： {count}</div>
        <select onChange={e => this.getSelectValue(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;&nbsp;
        <button onClick={() => increment(selectValue)}>+</button>&nbsp;&nbsp;
        <button onClick={() => decrement(selectValue)}>-</button>&nbsp;&nbsp;
        <button onClick={() => incrementIfOdd(selectValue)}>结果为奇数的时候+</button>&nbsp;&nbsp;
        <button onClick={() => incrementAsync(1, 500)}>异步加一</button>&nbsp;&nbsp;
      </div>
    )
  }
}
