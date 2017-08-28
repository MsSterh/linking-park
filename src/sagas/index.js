import { all, call } from 'redux-saga/effects'
import { watchLink } from './link'
import { watchLinks } from './links'
import { watchToken } from './token'
import { watchUser } from './user'

export default function *rootSaga(context) {
  yield all([
    call(watchLink, context),
    call(watchLinks, context),
    call(watchToken),
    call(watchUser)
  ])
}
