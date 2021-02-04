import { connect } from 'react-redux'
import CountUI from '../../components/CountUI'
import { createIncrementAction, createDecrementAction, createIncrementIfOdd, createIncrementAsyncAction } from '../../redux/actions/count'

const mapStateToProps = state => ({ state })
const mapDispatchToProps = {
  incrementAction: createIncrementAction,
  decrementAction: createDecrementAction,
  incrementIfOdd: createIncrementIfOdd,
  incrementAsyncAction: createIncrementAsyncAction
}
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
