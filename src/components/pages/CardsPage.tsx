import React, { FC } from 'react'
import { Card, CardVariant } from '../Card'

export const CardsPage: FC = () => (
  <Card
    variant={CardVariant.outlined}
    width="200px"
    height="200px"
    backgroundColor="tomato"
    onClick={(num) => num}
  >
    <button type="button">Some button</button>
    <div>Some div</div>
  </Card>
)
