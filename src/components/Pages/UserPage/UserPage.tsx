import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { IUser } from '../../../globalTypes/globalTypes'
import { User } from './User/User'

interface IUserPageParams {
  id: string
}

export const UserPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null)
  const { id } = useParams<IUserPageParams>()
  const history = useHistory()

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
      setUser(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  if (!user) return null
  return (
    <div>
      <User user={user} />
      <button type="button" onClick={() => history.push('/users')}>Back</button>
    </div>
  )
}
