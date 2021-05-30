import { IUserState, UserAction, UserActionTypes } from './types'
import { IUser } from '../../globalTypes/globalTypes'

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
}

export const MODULE_NAME = 'users'

export const userReducer = (state = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        ...state,
        loading: true,
      }
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
    case UserActionTypes.FETCH_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
