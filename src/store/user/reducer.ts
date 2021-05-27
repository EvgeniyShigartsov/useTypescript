const FETCH_USERS = 'FETCH_USERS'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'

interface IUserState {
  users: any[];
  loading: boolean;
  error: null | string
}

interface IUserAction {
  type: string
  payload?: any
}

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
}

export const userReducer = (state = initialState, action: IUserAction): IUserState => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      }
    case FETCH_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export {}
