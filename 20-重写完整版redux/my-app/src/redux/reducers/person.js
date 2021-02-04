import { ADDPERSON } from '../constant/person'

const initState = []
function personReducer(preState = initState, action) {
  const { type, person } = action
  switch (type) {
    case ADDPERSON:
      return [person, ...preState]
    default:
      return preState
  }
}

export default personReducer
