import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginUserPage from '../../users/LoginUserPage'
import RegisterUserPage from '../../users/RegisterUserPage'
import HomePage from '../../home/HomePage'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/login' exact component={LoginUserPage} />
    <Route path='/register' exact component={RegisterUserPage} />
  </Switch>
)

export default Routes
