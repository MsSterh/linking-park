import { UPDATE_TOKEN } from '../actions/token'
import { USER_LOG_OUT } from '../actions/user'

const initialState = {
  token: null
}

const token = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_TOKEN:
    return action.token
  case USER_LOG_OUT:
    return initialState
  default:
    return state
  }
}

export default token
