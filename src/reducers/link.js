import { UPDATE_LINK_FIELD, POST_LINK_SUCCESS, POST_LINK_FAILURE } from '../actions/link'

const initialState = {
  link: '',
  title: '',
  error: false
}

const link = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_LINK_FIELD:
    return {
      ...state,
      [action.name]: action.value,
      error: false
    }
  case POST_LINK_SUCCESS:
    return initialState
  case POST_LINK_FAILURE:
    return {
      ...state,
      error: true
    }
  default:
    return state
  }
}

export default link
