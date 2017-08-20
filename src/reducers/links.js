import { GET_LINKS_SUCCESS } from '../actions/links'

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
  default:
    return state
  }
}

export default links
