import { ITodo } from '../../globalTypes/globalTypes'
import { RootState } from '../index'

export const todosSelector = (state: RootState): ITodo[] => state.todos.todos
export const todosIsLoadingSelector = (state: RootState): boolean => state.todos.loading
export const todosErrorSelector = (state: RootState): string | null => state.todos.error
export const todosLimitSelector = (state: RootState): number => state.todos.limit
export const todosPageSelector = (state: RootState): number => state.todos.page
