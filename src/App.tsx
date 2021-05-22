import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { Card, CardVariant } from './components/Card'
import { EventExample } from './components/EventsExample'
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

  return (
    <div className="app">
      <div style={{ height: '50vh' }} />
    </div>
  )
}

export default App
