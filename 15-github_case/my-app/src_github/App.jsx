import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './css/bootstrap.css'

class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    err: ''
  }
  updateState = state => {
    this.setState({
      ...state
    })
  }
  render() {
    return (
      <div className="container">
        <Search updateState={this.updateState} />
        <List {...this.state} />
      </div>
    )
  }
}

export default App
