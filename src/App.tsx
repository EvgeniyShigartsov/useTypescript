import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { UsersPage } from './components/Pages/UsersPage'
import { TodosPage } from './components/Pages/TodosPage'
import { EventsPage } from './components/Pages/EventsPage'
import { CardsPage } from './components/Pages/CardsPage'
import { Navigation } from './components/Navigation/Navigation'
import { UserPage } from './components/Pages/UserPage'
import { Homepage } from './components/Homepage/Homepage'

const App: FC = () => (
  <div className="app">
    <Navigation />
    <Switch>
      <Route path="/" exact>
        <Homepage />
      </Route>

      <Route path="/users" exact>
        <UsersPage />
      </Route>

      <Route path="/todos" exact>
        <TodosPage />
      </Route>

      <Route path="/events" exact>
        <EventsPage />
      </Route>

      <Route path="/cards" exact>
        <CardsPage />
      </Route>

      <Route path="/users/:id">
        <UserPage />
      </Route>
    </Switch>
    <div style={{ height: '50vh' }} />
  </div>
)

export default App
