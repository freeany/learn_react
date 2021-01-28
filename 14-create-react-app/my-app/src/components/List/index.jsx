import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const { todoList } = this.props
    return (
      <ul className="todo-main">
        {todoList.map(todo => (
          <Item key={todo.id} {...todo} />
        ))}
      </ul>
    )
  }
}
