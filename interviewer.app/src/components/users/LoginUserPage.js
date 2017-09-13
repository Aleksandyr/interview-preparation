import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../common/user/Auth'
import LoginUserForm from './LoginUserForm'
import FormHelpers from '../common/form/FormHelpers'
import UserActions from '../../actions/UserActions'
import UserStore from '../../stores/UserStore'
import toastr from 'toastr'

class LoginUserPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: 'user@user.com',
        password: 'aA$123456'
      },
      error: ''
    }

    this.handleUserLogin = this.handleUserLogin.bind(this)

    UserStore.on(
      UserStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLogin
    )
  }

  componentWillUnmount () {
    UserStore.removeListener(
      UserStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLogin
    )
  }

  handleUserChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'user')
  }

  handleUserForm (event) {
    event.preventDefault()

    UserActions.login(this.state.user)
  }

  handleUserLogin (data) {
    if (!data.success) {
      this.setState({error: data.message})
    } else {
      Auth.authenticateUser(data.access_token)
      Auth.saveUser(data.user)
      toastr.success('You have logged successfully!')
      this.props.history.push('/')
    }
  }

  render () {
    return (
      <div>
        <h1>Login user page</h1>
        <LoginUserForm
          error={this.state.error}
          user={this.state.user}
          onChange={this.handleUserChange.bind(this)}
          onSave={this.handleUserForm.bind(this)} />

        <Link to='/register'>Register</Link>
      </div>
    )
  }
}

export default LoginUserPage
