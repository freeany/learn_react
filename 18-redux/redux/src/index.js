import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// 用了react-redux就不需要了
// store.subscribe(() => {
//   console.log('store改变了')
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   )
// })
