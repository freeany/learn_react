import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      { id: 1, title: '标题一' },
      { id: 2, title: '标题二' },
      { id: 3, title: '标题仨' }
    ]
  }
  pushRoute(id, title) {
    // 编程式路由导航传递params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    // 编程式路由导航传递search参数
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)
    // 编程式路由导航传递state参数
    this.props.history.push(`/home/message/detail/`, { id, title })
  }
  replaceRoute(id, title) {
    // 编程式路由导航传递params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)
    // 编程式路由导航传递search参数
    // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
    // 编程式路由导航传递state参数
    this.props.history.replace(`/home/message/detail/`, { id, title })
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.messageArr.map(item => (
            <li key={item.id}>
              {/* 路由传递params参数 */}
              {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>message00{item.id}</Link>&nbsp;&nbsp; */}
              {/* 路由传递query参数 */}
              {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>message00{item.id}</Link>&nbsp;&nbsp; */}
              {/* 路由传递state参数 */}
              <Link to={{ pathname: `/home/message/detail/`, state: { id: item.id, title: item.title } }}>message00{item.id}</Link>&nbsp;&nbsp;
              {/* 编程式路由导航 */}
              &nbsp;&nbsp;<button onClick={() => this.pushRoute(item.id, item.title)}>push查看</button>
              &nbsp;&nbsp;<button onClick={() => this.replaceRoute(item.id, item.title)}>replace查看</button>
            </li>
          ))}
        </ul>
        {/* 声明接收params参数 */}
        {/* <Route path="/home/message/detail/:id/:title" component={Detail}></Route> */}
        {/* query参数无需声明接收 */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}
        {/* state参数无需声明接收 */}
        <Route path="/home/message/detail" component={Detail}></Route>
      </div>
    )
  }
}
