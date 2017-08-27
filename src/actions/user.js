import { createAction } from '../lib/utils'

export const UPDATE_USER_FIELDS = 'UPDATE_USER_FIELDS'

export const updateUserFields = createAction(UPDATE_USER_FIELDS, 'uid', 'name', 'email', 'photo')
