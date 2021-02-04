import { connect } from 'react-redux'
import CountUI from '../../components/CountUI'
//  在组件中需要触发action
import { createIncrementAction, createDecrementAction, createIncrementIfOddAction, createIncrementAsyncAction } from '../../redux/actions/count'

// combineReducers对象的键 state.键
const mapStateToProps = state => ({ count: state.count, persons: state.persons })

const mapDispatchToProps = {
  increment: createIncrementAction,
  decrement: createDecrementAction,
  incrementIfOdd: createIncrementIfOddAction,
  incrementAsync: createIncrementAsyncAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
