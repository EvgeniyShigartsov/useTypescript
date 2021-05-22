import React, { FC } from 'react'
import { IUser } from '../types/types'

interface UserProps {
  user: IUser
}

export const User: FC<UserProps> = ({ user }) => (
  <div style={{ padding: '15px 10px', border: '1px solid tomato' }}>
    {user.id}
    .
    {' '}
    {user.name}
    {', '}
    {user.email}
    {' '}
    Проживает по адресу:
    {' '}
    {user.address.city}
    {' '}
    {user.address.street}
    {' '}
    Почтовый код:
    {' '}
    {user.address.zipcode}
  </div>

)
