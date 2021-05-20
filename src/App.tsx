import React, { FC } from 'react'
import { Card, CardVariant } from './components/Card/Card'

const App: FC = () => (
  <div className="app">
    <h1>Hello world</h1>
    <Card
      variant={CardVariant.outlined}
      width="200px"
      height="200px"
      backgroundColor="tomato"
      onClick={(num) => console.log('click', num)}
    >
      <button type="button">Some button</button>
      <div>Some div</div>
    </Card>
  </div>
)

export default App
