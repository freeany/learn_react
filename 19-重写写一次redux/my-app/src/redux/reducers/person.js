import { ADD_PERSON } from '../constant/person'
const initState = []
function personReducer(preState = initState, action) {
  const { type, person } = action
  switch (type) {
    case ADD_PERSON:
      return [person, ...preState]
    default:
      return preState
  }
}

export default personReducer
