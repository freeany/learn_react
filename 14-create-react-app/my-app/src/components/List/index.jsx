import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from '../Item'
import './index.css'

export default class List extends Component {
  render() {
    const { todoList, deleteTodo, changeDone } = this.props
    return (
      <ul className="todo-main">
        {todoList.map(todo => (
          <Item key={todo.id} {...todo} deleteTodo={deleteTodo} changeDone={changeDone} />
        ))}
      </ul>
    )
  }
}

List.propTypes = {
  todoList: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  changeDone: PropTypes.func.isRequired
}
