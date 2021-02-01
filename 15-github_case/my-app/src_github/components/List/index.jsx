import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const { isFirst, isLoading, users, err } = this.props
    return (
      <div className="row">
        {isFirst ? (
          <h1>请点击搜索进行查找github用户</h1>
        ) : isLoading ? (
          <h1>Loading...</h1>
        ) : err ? (
          <h1>{err.message}</h1>
        ) : (
          users.map(user => (
            <div className="card" key={user.id}>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                <img alt="header_avatars" src={user.avatar_url} style={{ width: '100px' }} />
              </a>
              <p className="card-text">{user.login}</p>
            </div>
          ))
        )}
      </div>
    )
  }
}
