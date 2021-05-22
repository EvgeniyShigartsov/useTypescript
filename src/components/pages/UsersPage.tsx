import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../../types/types'
import { List } from '../List'
import { User } from '../User'

export const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <List
      items={users}
      renderItem={(user: IUser) => <User user={user} key={user.id} />}
    />
  )
}
