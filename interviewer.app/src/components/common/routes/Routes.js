import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginUserPage from '../../users/LoginUserPage'
import RegisterUserPage from '../../users/RegisterUserPage'
import LogoutPage from '../../users/LogoutPage'
import HomePage from '../../home/HomePage'
import PrivateRoute from './PrivateRoute'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/login' exact component={LoginUserPage} />
    <Route path='/register' exact component={RegisterUserPage} />
    <PrivateRoute path='/logout' exact component={LogoutPage} />
  </Switch>
)

export default Routes
