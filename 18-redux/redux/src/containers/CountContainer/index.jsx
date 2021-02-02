import { connect } from 'react-redux'
import { incrementAction, decrementAction, incrementIfOddAction, incrementAsyncAction } from '../../count_action'
import CountUI from '../../components/CountUI'

const mapStateToProps = state => ({ count: state })
// 会自动调用 dispatch
const mapDispatchToProps = {
  increment: incrementAction,
  decrement: decrementAction,
  incrementIfOdd: incrementIfOddAction,
  incrementAsync: incrementAsyncAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
