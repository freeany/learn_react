import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  pushRouter() {
    this.props.history.push('/about')
  }
  render() {
    console.log(this.props)

    return (
      <div className="page-header">
        <h2>React Router Demo</h2>
        <button onClick={() => this.pushRouter()}>withRouter跳转路由</button>
      </div>
    )
  }
}

export default withRouter(Header)

// withRouter可以加工一般组件，让一般组件具备路由组件所特有的api， withRouter返回的是一个新组件
