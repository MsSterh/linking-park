import { createAction } from '../lib/utils'

export const UPDATE_TOKEN = 'UPDATE_TOKEN'
export const GET_TOKEN_REQUEST = 'GET_TOKEN_REQUEST'
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS'

export const updateToken = createAction(UPDATE_TOKEN, 'token')
export const getTokenRequest = createAction(GET_TOKEN_REQUEST)
export const getTokenSuccess = createAction(GET_TOKEN_SUCCESS)
