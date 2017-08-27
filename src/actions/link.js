import { createAction } from '../lib/utils'

export const UPDATE_LINK_FIELD = 'UPDATE_LINK_FIELD'
export const POST_LINK_REQUEST = 'POST_LINK_REQUEST'
export const POST_LINK_SUCCESS = 'POST_LINK_SUCCESS'
export const POST_LINK_FAILURE = 'POST_LINK_FAILURE'
export const REMOVE_LINK_REQUEST = 'REMOVE_LINK_REQUEST'
export const REMOVE_LINK_SUCCESS = 'REMOVE_LINK_SUCCESS'

export const upadteLinkField = createAction(UPDATE_LINK_FIELD, 'name', 'value')
export const postLinkRequest = createAction(POST_LINK_REQUEST, 'userUid')
export const postLinkSuccess = createAction(POST_LINK_SUCCESS)
export const postLinkFailure = createAction(POST_LINK_FAILURE)
export const removeLinkRequest = createAction(REMOVE_LINK_REQUEST, 'userUid', 'linkId')
export const removeLinkSuccess = createAction(REMOVE_LINK_SUCCESS)
