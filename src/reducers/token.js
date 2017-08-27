import { UPDATE_TOKEN } from '../actions/token'

const initialState = {
  token: null
}

const token = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_TOKEN:
    return action.token
  default:
    return state
  }
}

export default token
