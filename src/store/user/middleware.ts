import axios from 'axios';
import { Dispatch } from 'redux';
import { IUser } from '../../types/types';
import { UserAction, UserActionTypes } from './types';

export const fetchUsers = () => async (
  dispatch: Dispatch<UserAction>,
  // getState: () => Store,
): Promise<void> => {
  dispatch({ type: UserActionTypes.FETCH_USERS })

  axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    .then(({ data }) => {
      dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: data })
    })
    .catch((error) => {
      console.log(error.response)
      dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: error.response?.message || 'Error' })
    })
}
