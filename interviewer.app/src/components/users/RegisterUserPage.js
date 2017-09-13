import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../common/user/Auth'
import RegisterUserForm from './RegisterUserForm'
import FormHelpers from '../common/form/FormHelpers'
import UserActions from '../../actions/UserActions'
import UserStore from '../../stores/UserStore'
import toastr from 'toastr'

class RegisterUserPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: 'user@user.com',
        password: 'aA$123456',
        confirmPassword: 'sfdasfd'
      },
      error: ''
    }

    this.handleUserRegister = this.handleUserRegister.bind(this)

    UserStore.on(
      UserStore.eventTypes.USER_REGISTERED,
      this.handleUserRegister
    )
  }

  componentWillUnmount () {
    UserStore.removeListener(
      UserStore.eventTypes.USER_USER_REGISTERED,
      this.handleUserRegister
    )
  }

  handleUserChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'user')
  }

  handleUserForm (event) {
    event.preventDefault()

    UserActions.register(this.state.user)
  }

  handleUserRegister (data) {
    if (!data.success) {
      this.setState({error: data.message})
    } else {
      Auth.authenticateUser(data.access_token)
      Auth.saveUser(data.user)
      toastr.success('You have registered successfully!')
      this.props.history.push('/')
    }
  }

  render () {
    return (
      <div>
        <h1>Register user page</h1>
        <RegisterUserForm
          error={this.state.error}
          user={this.state.user}
          onChange={this.handleUserChange.bind(this)}
          onSave={this.handleUserForm.bind(this)} />

        <Link to='/login'>Login</Link>
      </div>
    )
  }
}

export default RegisterUserPage
