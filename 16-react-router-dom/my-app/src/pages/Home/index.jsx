import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Message from './components/Message'
import News from './components/News'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
          </ul>
          <div>
            {/* 注册路由 */}
            <Route path="/home/message" component={Message}></Route>
            <Route path="/home/news" component={News}></Route>
            {/* 
                当用户进入首页重定向到home组件， 开始渲染home组件，在渲染的过程中发现了redirect，相当于点击了to="/home/message", 开始寻找path=/home/message对应的组件。
                路由的匹配是按照注册顺序来的，如果写了一个未知路由，则会匹配到app.jsx中的Redirect，只有当匹配到home组件中了，发现了未知路由才会匹配到这个redirect中来
             */}
            <Redirect to="/home/message"></Redirect>
          </div>
        </div>
      </div>
    )
  }
}
