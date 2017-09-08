import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginUserPage from '../../users/LoginUserPage'
import HomePage from '../../home/HomePage'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/login' exact component={LoginUserPage} />
  </Switch>
)

export default Routes
