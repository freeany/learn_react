import React, { Component } from 'react'
import qs from 'querystring'

export default class Detail extends Component {
  state = {
    messageArr: [
      { id: 1, content: '内容一' },
      { id: 2, content: '内容二' },
      { id: 3, content: '内容叁' }
    ]
  }
  render() {
    // 路由组件获取prams参数
    // const { id, title } = this.props.match.params
    // 路由组件获取query参数
    // const { search } = this.props.location
    // 路由组件获取state参数
    // 注：state参数刷新页面后也能获取到，因为操作了浏览器中的历史记录保存下来了，但是复制地址栏新打开一个浏览器窗口或者清空浏览器中的历史记录则报错。因为此时this.props.location.state 是undefined, 这种方式可以向路由偷偷的传递参数，可以隐私一些信息，但是为防止用户赋值网址粘贴到新开的浏览器窗口或者清空历史记录，则需要做如果没xxx参数跳转404路由或向用户报出一些提示之类的。 但是如果使用的是HashRouter的话，则state这个数据会丢失，因为没有history保留数据。
    const { state } = this.props.location // 因为要赋默认值，所以才写的这么冗余
    const { id, title } = state || {}
    // const { id, title } = qs.parse(search.slice(1))
    const findR = this.state.messageArr.find(item => item.id === Number(id)) // 因为要赋默认值，所以才写的这么冗余
    const { content } = findR || {}
    return (
      <ul>
        <li>id: {id}</li>
        <li>title: {title}</li>
        <li>content: {content}</li>
      </ul>
    )
  }
}
