import { all, call } from 'redux-saga/effects'
import { watchLink } from './link'
import { watchLinks } from './links'

export default function *rootSaga(context) {
  yield all([
    call(watchLink, context),
    call(watchLinks, context)
  ])
}
