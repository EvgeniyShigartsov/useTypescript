import React, { FC } from 'react'

export const Test: FC = () => {
  const contact: [string, number] = ['String', 123]

  enum Status {
    pending, // 0
    accepted, // 1
    rejected // 2
  }

  const request = Status.pending
  console.log(request) // 0
  const requestReverse = Status[2]
  const requestReverse2 = Status[100]

  console.log(requestReverse) // rejected
  console.log(requestReverse2) // undefined

  return null
}
