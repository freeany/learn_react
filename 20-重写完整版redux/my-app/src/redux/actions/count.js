import { INCREMENT, DECREMENT, INCREMENTIFODD } from '../constant/count'

export const createIncrementAction = data => ({ type: INCREMENT, count: data })
export const createDecrementAction = data => ({ type: DECREMENT, count: data })
export const createIncrementIfOddAction = data => ({ type: INCREMENTIFODD, count: data })
export const createIncrementAsyncAction = (data, time) => dispatch => {
  setTimeout(() => {
    dispatch(createIncrementAction(data))
  }, time)
}
