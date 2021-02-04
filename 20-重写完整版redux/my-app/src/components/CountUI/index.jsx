import React, { Component } from 'react'

export default class Count extends Component {
  state = {
    count: 1
  }
  getSelectVale(e) {
    this.setState({ count: e.target.value * 1 })
  }
  incrementIfOdd(data) {
    const { count, incrementIfOdd } = this.props
    if (count % 2 !== 0) {
      incrementIfOdd(data)
    }
  }
  render() {
    const data = this.state.count
    const { count, persons, increment, decrement, incrementAsync } = this.props
    return (
      <div>
        <h1>求和的总数是{count}</h1>
        <select onChange={e => this.getSelectVale(e)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={() => increment(data)}>+</button>&nbsp;
        <button onClick={() => decrement(data)}>-</button>&nbsp;
        <button onClick={() => this.incrementIfOdd(data)}>odd +</button>&nbsp;
        <button onClick={() => incrementAsync(data, 500)}>async +</button>&nbsp;
        <ul>
          {persons.map(person => (
            <li key={person.id}>
              {person.name} -- {person.age}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
