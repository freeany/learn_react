import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

//引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store
