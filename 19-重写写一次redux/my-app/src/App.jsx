import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Count from './containers/Count'
import Person from './containers/Person'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Count />
          <hr />
          <Person />
        </Provider>
      </div>
    )
  }
}
