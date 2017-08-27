import { call, all, takeEvery, put } from 'redux-saga/effects'

import { GET_TOKEN_REQUEST, updateToken, getTokenSuccess } from '../actions/token'
import { updateUserFields } from '../actions/user'
import { getLinksRequest } from '../actions/links'
import { signInWithPopup } from '../lib/firebase'

export function *setToken() {
  try {
    const result = yield call(signInWithPopup)

    if (result) {
      const token = result.credential.accessToken
      const user = result.user

      yield put(updateToken(token))
      yield put(updateUserFields(user.uid, user.displayName, user.email, user.photoURL))
      yield put(getTokenSuccess())
      yield put(getLinksRequest(user.uid))
    }
  } catch(error) {
    console.log('error.message === ', error.message)
  }
}

export function *watchToken() {
  yield all([
    takeEvery(GET_TOKEN_REQUEST, setToken),
  ])
}
