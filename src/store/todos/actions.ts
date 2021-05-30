import axios from 'axios'
import { Dispatch } from 'redux'
import { ITodo } from '../../globalTypes/globalTypes'
import { TodoAction, TodoActionTypes } from './types'

export const fetchTodos = (page = 1, limit = 10) => (dispatch: Dispatch<TodoAction>): void => {
  dispatch({ type: TodoActionTypes.FETCH_TODOS })

  axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`)
    .then(({ data }) => {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: data })
    })
    .catch(() => {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Todos loading error' })
    })
}

export const setTodoPage = (page: number): TodoAction => ({
  type: TodoActionTypes.SET_TODO_PAGE,
  payload: page,
})
