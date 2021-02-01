import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MyLinkNav from '../../component/MyNavLink'
import Messages from './Messages'
import News from './News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              {/* <a className="list-group-item active" href="./home-news.html">
              News
            </a> */}
              <MyLinkNav to="/home/news">News</MyLinkNav>
            </li>
            <li>
              {/* <a className="list-group-item " href="./home-message.html">
              Message
            </a> */}
              <MyLinkNav to="/home/messages">Messages</MyLinkNav>
            </li>
          </ul>
          <Route path="/home/news" component={News}></Route>
          <Route path="/home/message" component={Messages}></Route>
        </div>
      </div>
    )
  }
}
