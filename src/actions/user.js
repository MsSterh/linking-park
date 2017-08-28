import { createAction } from '../lib/utils'

export const UPDATE_USER_FIELDS = 'UPDATE_USER_FIELDS'
export const USER_LOG_OUT = 'USER_LOG_OUT'

export const updateUserFields = createAction(UPDATE_USER_FIELDS, 'uid', 'name', 'email', 'photo')
export const userLogOut = createAction(USER_LOG_OUT)
