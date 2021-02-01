import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import About from './pages/About'
import Home from './pages/Home'
import Test from './pages/Test'
import './css/bootstrap.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header a={1} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 导航区 */}
              {/* 标签体内容 也是当作属性传递过去的， 这个属性的名字固定为children */}
              <MyNavLink to="/about">About</MyNavLink>
              {/* <MyNavLink to="/home/a/b">Home</MyNavLink> */}
              <MyNavLink to="/home">真home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 展示区，需要进行路径的匹配 */}
                {/* 
                    一般情况下，react的路由是深度搜索，如果导航区的to找到了Route的path， 那么还会继续向下找，会将找到的所有对应的Route所对应的组件硬组合到一起
                    可以用Switch解决这个问题
                */}
                {/* 
                    Link的to属性与Route组件的path是包含的关系，如果有to包含了a，那么还是会匹配到包含的Route， 即Link的to可以模糊匹配Route的path
                    但是 注意： 以/分割，需要每级都对应.顺序要相同。
                    可以用exact解决， exact即必须to与path必须一摸一样，即精准匹配。
                 */}
                <Switch>
                  <Route path="/about" component={About}></Route>
                  {/* 如果写了exact则没有办法继续去匹配子路由了 */}
                  <Route exact path="/home" component={Home}></Route>
                  {/* <Route path="/home" component={Test}></Route> */}
                  <Route path="/home" component={Home}></Route>
                  {/* 
                    兜底的路由， 如果上面的都没匹配上，则跳转到Redirect中指定的to属性。
                   */}
                  <Redirect to="/home"></Redirect>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
