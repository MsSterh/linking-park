import { GET_LINKS_SUCCESS } from '../actions/links'
import { USER_LOG_OUT } from '../actions/user'

const initialState = {
  links: []
}

const links = (state = initialState, action) => {
  switch (action.type) {
  case GET_LINKS_SUCCESS:
    return {
      ...state,
      links: action.links
    }
  case USER_LOG_OUT:
    return initialState
  default:
    return state
  }
}

export default links
