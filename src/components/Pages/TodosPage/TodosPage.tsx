import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { ITodo } from '../../../types/types'
import { List } from '../../List/List'
import { Todo } from './Todo/Todo'

export const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <Todo key={todo.id} todo={todo} />}
    />
  )
}
