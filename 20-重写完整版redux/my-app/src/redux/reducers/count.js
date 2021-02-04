import { INCREMENT, DECREMENT, INCREMENTIFODD, INCREMENTASYNC } from '../constant/count'

const initState = 0
function countReducer(perState = initState, action) {
  const { type, count } = action
  switch (type) {
    case INCREMENT:
    case INCREMENTIFODD:
    case INCREMENTASYNC:
      return perState + count
    case DECREMENT:
      return perState - count
    default:
      return perState
  }
}

export default countReducer
