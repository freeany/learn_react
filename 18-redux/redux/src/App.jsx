import React, { Component } from 'react'
import store from './store'
import CountContainer from './containers/CountContainer'
import { Provider } from 'react-redux'

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <CountContainer></CountContainer>
        </Provider>
      </div>
    )
  }
}
