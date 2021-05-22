import React, { FC, useRef, useState } from 'react'

export const EventExample: FC = () => {
  const [value, setvalue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(e.target.value)
  }
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value)
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => null

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
    console.log('DROP')
  }
  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} placeholder="Controlled" />
      <input ref={inputRef} type="text" placeholder="Uncontrolled" />
      <button type="button" onClick={clickHandler}>Click me</button>
      <div draggable onDrag={dragHandler} style={{ width: 200, height: 200, backgroundColor: 'tomato' }} />
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: 200, height: 200, backgroundColor: isDrag ? 'green' : 'yellow', marginTop: '15px',
        }}
      />
    </div>
  )
}
