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
  render() {
    const { todoList } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todoList={todoList} />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
