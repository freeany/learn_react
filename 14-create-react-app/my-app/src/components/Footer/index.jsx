import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default class Footer extends Component {
  changeAllTodo(e) {
    this.props.changeAllTodo(e.target.checked)
  }
  clearDoneTodo() {
    this.props.clearDoneTodo()
  }
  render() {
    const { todoList } = this.props
    const doneLength = todoList.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={e => this.changeAllTodo(e)} checked={doneLength === todoList.length && doneLength !== 0} />
        </label>
        <span>
          <span>已完成{doneLength}</span> / 全部{todoList.length}
        </span>
        <button className="btn btn-danger" onClick={() => this.clearDoneTodo()}>
          清除已完成任务
        </button>
      </div>
    )
  }
}

Footer.propTypes = {
  changeAllTodo: PropTypes.func.isRequired,
  clearDoneTodo: PropTypes.func.isRequired
}
