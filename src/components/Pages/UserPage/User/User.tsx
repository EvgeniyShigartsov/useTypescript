import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { IUser } from '../../../../globalTypes/globalTypes'

interface UserProps {
  user: IUser
}

export const User: FC<UserProps> = ({ user }) => {
  const history = useHistory()

  return (
    <div style={{ padding: '15px 10px', border: '1px solid tomato' }} onClick={() => history.push(`/users/${user.id}`)}>
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
}
