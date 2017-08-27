import { UPDATE_USER_FIELDS } from '../actions/user'

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
  default:
    return state
  }
}

export default user
