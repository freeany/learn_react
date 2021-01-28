import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
/// 状态在哪里，操作状态的方法就在哪里
import './App.css'
class App extends Component {
  state = {
    todoList: [
      {
        id: 1,
        name: '吃饭',
        done: false
      },
      {
        id: 2,
        name: '睡觉',
        done: true
      }
    ]
  }
  addTodo = todo => {
    this.setState({
      todoList: [...this.state.todoList, todo]
    })
  }
  deleteTodo = id => {
    const newTodos = this.state.todoList.filter(todo => id !== todo.id)
    this.setState({
      todoList: newTodos
    })
  }
  changeDone = (checked, id) => {
    const newTodos = this.state.todoList.map(todo => {
      if (todo.id === id) {
        todo.done = checked
      }
      return todo
    })
    this.setState({
      todoList: newTodos
    })
  }
  changeAllTodo = checked => {
    const newTodos = this.state.todoList.map(todo => {
      todo.done = checked
      return todo
    })
    this.setState({
      todoList: newTodos
    })
  }
  clearDoneTodo = () => {
    const newsTodo = this.state.todoList.filter(todo => !todo.done)
    this.setState({
      todoList: newsTodo
    })
  }
  render() {
    const { todoList } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todoList={todoList} deleteTodo={this.deleteTodo} changeDone={this.changeDone} />
          <Footer todoList={todoList} changeAllTodo={this.changeAllTodo} clearDoneTodo={this.clearDoneTodo} />
        </div>
      </div>
    )
  }
}

export default App
