import React from 'react'

interface ListProps<T>{
  items: T[]
  renderItem: (item: T) => React.ReactNode

}

export function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <div>
      {items.map(renderItem)}
    </div>
  )
}

// export const List: FC<T> = ({ items, renderItem }: ListProps<T>) => (
//   <div>
//     {items.map(renderItem)}
//   </div>
// )
