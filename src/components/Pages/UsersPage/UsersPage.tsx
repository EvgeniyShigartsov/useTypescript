import React, { FC, useEffect } from 'react'
import { useActions } from '../../../hooks/useActions'
import { useTypedSelector } from '../../../hooks/useTypeSelector'
import { IUser } from '../../../globalTypes/globalTypes'
import { List } from '../../List/List'
import { User } from '../UserPage/User/User'
import { usersErrorSelector, usersIsLoadingSelector, usersSelector } from '../../../store/users/selectors'

export const UsersPage: FC = () => {
  const { fetchUsers } = useActions()
  const users = useTypedSelector(usersSelector)
  const isLoading = useTypedSelector(usersIsLoadingSelector)
  const error = useTypedSelector(usersErrorSelector)

  useEffect(() => {
    fetchUsers()
  }, [])

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>{error}</h1>
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
