import { INCREMENT, DECREMENT, INCREMENTIFODD, INCREMENTASYNC } from '../constant/count'

const initState = 333
function countReducer(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case INCREMENT:
    case INCREMENTIFODD:
    case INCREMENTASYNC:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}

export default countReducer
