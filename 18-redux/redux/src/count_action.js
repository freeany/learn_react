import { INCREMENT, DECREMENT, INCREMENTIFODD, INCREMENTASYNC } from './count_constant'

export const incrementAction = data => ({ type: INCREMENT, data })
export const decrementAction = data => ({ type: DECREMENT, data })
export const incrementIfOddAction = data => ({ type: INCREMENTIFODD, data })
export const incrementAsyncAction = (data, time) => dispatch => {
  setTimeout(() => {
    dispatch(incrementAction(data))
  }, time)
}
