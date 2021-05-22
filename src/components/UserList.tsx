import React, { FC } from 'react'
import { IUser } from '../types/types'
import { User } from './User'

interface UserListProps {
  users: IUser[]
}

export const UserList: FC<UserListProps> = ({ users }) => (
  <div>
    {users.map((user) => <User key={user.id} user={user} />)}
  </div>
)
