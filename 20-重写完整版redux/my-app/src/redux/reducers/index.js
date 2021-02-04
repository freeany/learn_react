import { combineReducers } from 'redux'
import countReducer from './count'
import personReducer from './person'

// 此处的键是mapStateToProps中回调参数state对象的键，其值对应reducer处理后的数据
export default combineReducers({ count: countReducer, persons: personReducer })
