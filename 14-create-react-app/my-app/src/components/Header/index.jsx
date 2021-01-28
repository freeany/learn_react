import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default class Header extends Component {
  keyUpHandle(e) {
    const { addTodo } = this.props

    if (e.keyCode === 13 && e.target.value) {
      const todo = {
        id: Date.now(),
        name: e.target.value,
        done: false
      }
      addTodo(todo)
      e.target.value = ''
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={e => this.keyUpHandle(e)} placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}
