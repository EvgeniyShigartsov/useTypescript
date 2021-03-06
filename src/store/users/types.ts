import { IUser } from '../../globalTypes/globalTypes'

export interface IUserState {
  users: IUser[]
  loading: boolean
  error: null | string
}

export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface IFetchUsersAction {
  type: UserActionTypes.FETCH_USERS
}
interface IFetchUsersSuccesAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS
  payload: IUser[]
}
interface IFetchUsersErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR
  payload: string
}

export type UserAction = IFetchUsersAction | IFetchUsersSuccesAction | IFetchUsersErrorAction
