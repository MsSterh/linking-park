import { UPDATE_LINK_FIELD, POST_LINK_SUCCESS } from '../actions/link'

const initialState = {
  link: '',
  title: ''
}

const link = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_LINK_FIELD:
    return {
      ...state,
      [action.name]: action.value
    }
  case POST_LINK_SUCCESS:
    return initialState
  default:
    return state
  }
}

export default link
