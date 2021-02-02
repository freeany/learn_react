import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countReducers from './count_reducer'
export default createStore(countReducers, applyMiddleware(thunk))
