import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    // console.log(this.props)
    // 使用this.props.children 可以接收标签体中的内容
    // 在标签上写children={xx} 也可以指定标签体中的内容
    return <NavLink activeClassName="active" className="list-group-item" {...this.props}></NavLink>
  }
}
