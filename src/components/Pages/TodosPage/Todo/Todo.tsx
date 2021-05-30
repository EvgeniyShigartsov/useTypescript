import React, { FC } from 'react'
import { ITodo } from '../../../../globalTypes/globalTypes'

interface TodoProps {
  todo: ITodo
}

export const Todo: FC<TodoProps> = ({ todo }) => (
  <div>
    {todo.id}
    .
    {' '}
    {todo.title}
    {' '}
    <input type="checkbox" checked={todo.completed} readOnly />
  </div>
)
