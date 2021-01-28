import React, { Component } from 'react'
import ProtTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
  state = {
    choose: false
  }
  handleMouseEvent(value) {
    this.setState({
      choose: value
    })
  }
  deleteTodo(id) {
    if (window.confirm('确认删除吗')) {
      this.props.deleteTodo(id)
    }
  }
  changeDone(e, id) {
    this.props.changeDone(e.target.checked, id)
  }
  render() {
    const { id, name, done } = this.props
    const { choose } = this.state
    return (
      <li
        style={{ backgroundColor: choose ? '#ddd' : '#fff' }}
        onMouseEnter={() => this.handleMouseEvent(true)}
        onMouseLeave={() => this.handleMouseEvent(false)}
      >
        <label>
          <input type="checkbox" checked={done} onChange={e => this.changeDone(e, id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => this.deleteTodo(id)} className="btn btn-danger" style={{ display: choose ? '' : 'none' }}>
          删除
        </button>
      </li>
    )
  }
}

Item.propTypes = {
  deleteTodo: ProtTypes.func.isRequired,
  changeDone: ProtTypes.func.isRequired,
  id: ProtTypes.number.isRequired,
  name: ProtTypes.string.isRequired,
  done: ProtTypes.bool.isRequired
}
