import { INCREMENT, DECREMENT, INCREMENTIFODD, INCREMENTASYNC } from '../constant/count'

export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })
export const createIncrementIfOdd = data => ({ type: INCREMENTIFODD, data })
export const createIncrementAsyncAction = data => dispatch => {
  setTimeout(() => {
    dispatch({ type: INCREMENTASYNC, data })
  }, 500)
}
