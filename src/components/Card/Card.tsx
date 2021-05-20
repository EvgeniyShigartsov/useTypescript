import React, { FC, useState } from 'react'

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}

interface CardProps {
  width?: string,
  height?: string,
  backgroundColor?: string,
  onClick: (num: number) => void,
  variant: CardVariant,
}

export const Card: FC<CardProps> = ({
  width, height, backgroundColor, children, variant, onClick,
}) => {
  const [counter, setCounter] = useState(0)
  const handler = () => {
    onClick(counter)
    setCounter((prev) => prev + 1)
  }
  const styles = {
    width,
    height,
    backgroundColor,
    border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
    borderRadius: variant === CardVariant.primary ? '100%' : 'none',
  }
  return (
    <div
      style={styles}
      onClick={handler}
    >
      {children}
    </div>
  )
}
