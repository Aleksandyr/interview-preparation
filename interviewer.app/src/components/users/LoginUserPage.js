import React, { Component } from 'react'
// import Auth from '../common/user/Auth'
import LoginUserForm from './LoginUserForm'
import FormHelpers from '../common/form/FormHelpers'
// import toastr from 'toastr'

class LoginUserPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        email: 'test@test.com',
        password: '123456'
      },
      error: ''
    }

    this.handleUserLogin = this.handleUserLogin.bind(this)
  }

  handleUserChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'user')
  }

  handleUserForm (event) {
    event.preventDefault()
  }

  handleUserLogin (data) {
    // TODO: Do some validation
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
      </div>
    )
  }
}

export default LoginUserPage
