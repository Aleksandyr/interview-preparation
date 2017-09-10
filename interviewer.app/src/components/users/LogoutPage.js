import { Component } from 'react'
import Auth from '../common/user/Auth'
import toastr from 'toastr'

class LogoutPage extends Component {
  componentWillMount () {
    Auth.deauthenticated()
    Auth.removeUser()
    toastr.success('You have successfully logged out!')
    this.props.history.push('/')
  }

  render () {
    return null
  }
}

export default LogoutPage
