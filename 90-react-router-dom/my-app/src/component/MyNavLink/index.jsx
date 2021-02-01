import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    // children=xxx 也自动带过来了
    return <NavLink activeClassName="active" className="list-group-item" {...this.props} />
  }
}
