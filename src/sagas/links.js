import { call, all, takeEvery, put } from 'redux-saga/effects'

import { GET_LINKS_REQUEST, getLinksSuccess } from '../actions/links'

export function *getLinks({db}) {
  const linksRef = yield call([db, db.ref], 'links')
  const obj = yield call([linksRef, linksRef.once], 'value')
  const objValues = obj.val()

  const linksArray = Object.keys(objValues).map(function(key) {
    return {
      id: key,
      link: objValues[key].link.link,
      title: objValues[key].link.title
    }
  })

  yield put(getLinksSuccess(linksArray))
}

export function *watchLinks(context) {
  yield all([
    takeEvery(GET_LINKS_REQUEST, getLinks, context)
  ])
}
