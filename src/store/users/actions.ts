import axios from 'axios';
import { Dispatch } from 'redux';
import { IUser } from '../../globalTypes/globalTypes';
import { UserAction, UserActionTypes } from './types';

// getState: () => Store // second arg declare type.
export const fetchUsers = () => (dispatch: Dispatch<UserAction>): void => {
  dispatch({ type: UserActionTypes.FETCH_USERS })

  axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    .then(({ data }) => {
      dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: data })
    })
    .catch(() => {
      dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Users loading error' })
    })
}
