import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import { UsersPage } from './components/pages/UsersPage'
import { TodosPage } from './components/pages/TodosPage'
import { EventsPage } from './components/pages/EventsPage'
import { CardsPage } from './components/pages/CardsPage'
import { Navigation } from './components/Navigation'
import { UserPage } from './components/pages/UserPage'

const App: FC = () => (
  <div className="app">
    <Navigation />
    <Switch>
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
