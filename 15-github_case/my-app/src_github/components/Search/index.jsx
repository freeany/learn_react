import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
  updateState(state) {
    const { updateState } = this.props
    updateState(state)
  }
  searchList() {
    const keyword = this.input.value
    if (!keyword) return
    this.updateState({ isFirst: false, isLoading: true })
    axios.get('/api/search/users', { params: { q: keyword } }).then(
      data => {
        const {
          data: { items }
        } = data
        this.updateState({ isLoading: false, users: items })

        this.input.value = ''
      },
      error => {
        // console.log(error)
        this.updateState({ isLoading: false, err: error })
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={c => (this.input = c)} placeholder="enter the name you search" />
          &nbsp;<button onClick={() => this.searchList()}>Search</button>
        </div>
      </section>
    )
  }
}
