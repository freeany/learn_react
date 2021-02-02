import { INCREMENT, DECREMENT, INCREMENTIFODD, INCREMENTASYNC } from './count_constant'

const initState = 333
function countReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    case INCREMENTIFODD:
      if (preState % 2 === 0) {
        return preState
      } else {
        return preState + data
      }
    case INCREMENTASYNC:
      return preState + data
    default:
      return preState
  }
}
export default countReducer
