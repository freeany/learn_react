import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import MessageDetail from './MessageDetail'
export default class Messages extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/home/message/detail">news001</Link>
          </li>
          <li>
            <Link to="/home/message/2">news002</Link>
          </li>
          <li>
            <Link to="/home/message/3">news003</Link>
          </li>
        </ul>
        <Route path="/home/message/detail" component={MessageDetail}></Route>
      </div>
    )
  }
}
