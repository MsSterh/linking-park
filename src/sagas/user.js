import { call, all, takeEvery, put } from 'redux-saga/effects'

import { USER_LOG_OUT } from '../actions/user'
import { updateToken } from '../actions/token'
import { signOut } from '../lib/firebase'

export function *userLogOut() {
  try {
    const result = yield call(signOut)

    if (result) {
      yield put(updateToken(null))
    }
  } catch(error) {
    console.log('error = ', error)
  }
}

export function *watchUser() {
  yield all([
    takeEvery(USER_LOG_OUT, userLogOut)
  ])
}
