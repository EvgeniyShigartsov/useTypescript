import React, { FC, useEffect } from 'react'
import { ITodo } from '../../../globalTypes/globalTypes'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import { List } from '../../List/List'
import { Todo } from './Todo/Todo'
import {
  todosSelector,
  todosIsLoadingSelector,
  todosErrorSelector,
  todosLimitSelector,
  todosPageSelector,
} from '../../../store/todos/selectors'

export const TodosPage: FC = () => {
  const todos = useTypedSelector(todosSelector)
  const isLoading = useTypedSelector(todosIsLoadingSelector)
  const error = useTypedSelector(todosErrorSelector)
  const limit = useTypedSelector(todosLimitSelector)
  const page = useTypedSelector(todosPageSelector)

  const { fetchTodos, setTodoPage } = useActions()

  const pages = [1, 2, 3, 4, 5]

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])
  if (isLoading) return <h1>Todos isLoading...</h1>
  if (error) return <h1>{error}</h1>

  return (
    <div>
      <List
        items={todos}
        renderItem={(todo: ITodo) => <Todo key={todo.id} todo={todo} />}
      />
      <div>
        {pages.map((p) => (
          <button
            type="button"
            style={{ border: p === page ? '2px solid tomato' : '', padding: '5px 10px' }}
            onClick={() => setTodoPage(p)}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  )
}
