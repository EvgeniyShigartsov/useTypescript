import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import { fetchUsers } from '../../../store/user/middleware'
import { IUser } from '../../../types/types'
import { List } from '../../List/List'
import { User } from '../UserPage/User/User'

export const UsersPage: FC = () => {
  const dispatch = useDispatch()
  const users = useTypedSelector((state) => state.users.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <User
            user={user}
            key={user.id}
          />
        )}
      />
    </>
  )
}
