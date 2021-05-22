import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { Card, CardVariant } from './components/Card'
import { List } from './components/List'
import { Todo } from './components/Todo'
import { User } from './components/User'
import { ITodo, IUser } from './types/types'

const App: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  console.log(todos)
  return (
    <div className="app">
      <h1>Hello world</h1>
      <Card variant={CardVariant.outlined} width="200px" height="200px" backgroundColor="tomato" onClick={(num) => num}>
        <button type="button">Some button</button>
        <div>Some div</div>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <User user={user} key={user.id} />}
      />
      <br />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <Todo key={todo.id} todo={todo} />}
      />
      <div style={{ height: '50vh' }} />
    </div>
  )
}

export default App
