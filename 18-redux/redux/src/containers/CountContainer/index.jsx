import { connect } from 'react-redux'
import { incrementAction, decrementAction, incrementIfOddAction, incrementAsyncAction } from '../../count_action'
import CountUI from '../../components/CountUI'

/* 
	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态
*/
const mapStateToProps = state => ({ count: state })

/* 
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
*/
// 本来的
/* 
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
*/
// function mapDispatchToProps(dispatch){
// 	return {
// 		increment:number => dispatch(incrementAction(number)),
// 		decrement:number => dispatch(decrementAction(number)),
// 		incrementAsync:(number,time) => dispatch(incrementAsyncAction(number,time)),
// 	}
// }
// 会自动调用 dispatch
const mapDispatchToProps = {
  increment: incrementAction,
  decrement: decrementAction,
  incrementIfOdd: incrementIfOddAction,
  incrementAsync: incrementAsyncAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
