import { UPDATE_USER_FIELDS, USER_LOG_OUT } from '../actions/user'

const initialState = {
  uid: null,
  name: '',
  email: '',
  photo: ''
}

const user = (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_USER_FIELDS:
    return {
      ...state,
      uid: action.uid,
      name: action.name,
      email: action.email,
      photo: action.photo
    }
  case USER_LOG_OUT:
    return initialState
  default:
    return state
  }
}

export default user
