import { connect } from 'react-redux'
import CountUI from '../../components/CountUI'
import { createIncrementAction, createDecrementAction, createIncrementIfOdd, createIncrementAsyncAction } from '../../redux/actions/count'

// store.js中combineReducers参数中的对象， state是处理reducer后得到的state数据
const mapStateToProps = state => ({ state: state.count, persons: state.persons })
const mapDispatchToProps = {
  incrementAction: createIncrementAction,
  decrementAction: createDecrementAction,
  incrementIfOdd: createIncrementIfOdd,
  incrementAsyncAction: createIncrementAsyncAction
}
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
