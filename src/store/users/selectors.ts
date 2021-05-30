import { RootState } from '../index'
import { IUser } from '../../globalTypes/globalTypes'

export const usersSelector = (state: RootState): IUser[] => state.users.users
export const usersIsLoadingSelector = (state: RootState): boolean => state.users.loading
export const usersErrorSelector = (state: RootState): string | null => state.users.error
