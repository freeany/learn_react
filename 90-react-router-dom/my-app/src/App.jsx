import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './component/MyNavLink'
import './css/bootstrap.css'
/**
 * 一个细节上的问题， 开发服务器配置了public文件夹为根路径， 而且如果访问了一个不存在的路径，则会把index.html返回
 * 比如访问 localhost:3000/a/b/c/d/h.js  在public文件夹下找不到这个路径，则会把index.html返回出去。
 */
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">
                About
              </a>
              <a className="list-group-item active" href="./home.html">
                Home
              </a> */}
              {/* 编写路由链接 */}
              {/* <NavLink activeClassName="active" className="list-group-item" to="/about">
                About
              </NavLink>
              <NavLink activeClassName="active" className="list-group-item" to="/home">
                Home
              </NavLink> */}
              {/* 封装NavLink组件 */}
              {/* 会自动传入children */}
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 
                    路由的匹配顺序都是从先注册开始匹配的，如果当/news被触发时， 会先从这里开始匹配，因为这里是最先注册路由的地方，
                    一个都匹配不到，会走redirect，然后匹配到about组件
                    但是如果换成了/home/news的话， 会匹配到home组件，所以home会显示出来，然后会发现/home/news这个路由。最终会匹配到<Route path="/home/news" component={News}></Route>里面
              */}
                {/* 注册路由 */}
                {/* 
                    路由匹配规则， 如果相同的path有多个，那么就将该Route中的component 硬组合到一起展示
                    可以用switch解决这个问题。如果用了switch之后，那么匹配到一个就不继续进行匹配了
                 */}
                {/* 
                    Link组件的to去找Route组件的path， path会去模糊匹配to，只要to中有的属性那么path就会去匹配
                    即Link => to='/home/a/b' 那么Route => path='/home' 也可以匹配到并进行展示， 可以用extra解决这个问题

                */}
                <Switch>
                  <Route path="/home" component={Home}></Route>
                  <Route path="/about" component={About}></Route>
                  {/* 重定向路由 */}
                  {/* 当路由都匹配不到时， 就开始进行重定向 */}
                  <Redirect to="/about"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
