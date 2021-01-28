import React, { Component } from 'react'
import style from './index.module.css' // 如果css的名字变成xxx.module.css, 那么只能使用变量接，直接引入无效

class Welcom extends Component {
  render() {
    return <h2 className={style.hello}>Welcom React</h2>
  }
}

export default Welcom
