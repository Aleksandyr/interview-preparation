import React from 'react'
import Input from '../common/form/Input'

const LoginUserForm = (props) => (
  <div className='login-form'>
    <form id='login-form' className='text-left'>
      <div className='login-form-main-message' />
      <div className='main-login-form'>
        <div>{props.error}</div>
        <Input
          name='email'
          type='email'
          placeholder='E-Mail'
          value={props.user.email}
          onChange={props.onChange} />
        <Input
          name='password'
          type='password'
          placeholder='Password'
          value={props.user.password}
          onChange={props.onChange} />
        <input type='submit' className='form-control' value='Login' onClick={props.onSave} />
      </div>
    </form>
  </div>
)

export default LoginUserForm
