import { call, all, select, takeEvery, put } from 'redux-saga/effects'

import { POST_LINK_REQUEST, REMOVE_LINK_REQUEST,
  postLinkSuccess } from '../actions/link'
import { getLinksRequest } from '../actions/links'

const getLink = state => ({
  link: state.link
})

export function *postLink({db}) {
  const link = yield select(getLink)
  const linksRef = yield call([db, db.ref], 'links')
  yield call([linksRef, linksRef.push], link)
  yield put(postLinkSuccess())
  yield put(getLinksRequest())
}


export function *removeLink({db}, {linkId}) {
  const itemRef = yield call([db, db.ref], `/links/${linkId}`)
  yield call([itemRef, itemRef.remove])
  yield put(getLinksRequest())
}

export function *watchLink(context) {
  yield all([
    takeEvery(POST_LINK_REQUEST, postLink, context),
    takeEvery(REMOVE_LINK_REQUEST, removeLink, context)
  ])
}
