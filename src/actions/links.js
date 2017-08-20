import { createAction } from '../lib/utils'

export const GET_LINKS_REQUEST = 'GET_LINKS_REQUEST'
export const GET_LINKS_SUCCESS = 'GET_LINKS_SUCCESS'

export const getLinksRequest = createAction(GET_LINKS_REQUEST, 'onSuccess')
export const getLinksSuccess = createAction(GET_LINKS_SUCCESS, 'links')
