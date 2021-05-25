import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

export const Navigation: FC = () => (
  <div className="navigation">
    <NavLink className="nav-link" to="/">Homepage</NavLink>
    <NavLink className="nav-link" to="/users">Users</NavLink>
    <NavLink className="nav-link" to="/todos">Todos</NavLink>
    <NavLink className="nav-link" to="/events">Events</NavLink>
    <NavLink className="nav-link" to="/cards">Cards</NavLink>
  </div>
)
