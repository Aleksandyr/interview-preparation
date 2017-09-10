import React from 'react'
import Input from '../common/form/Input'

const RegisterUserForm = (props) => (
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
        <Input
          name='confirmPassword'
          type='password'
          placeholder='Confirm Password'
          value={props.user.confirmPassword}
          onChange={props.onChange} />
        <input type='submit' className='form-control' value='Register' onClick={props.onSave} />
      </div>
    </form>
  </div>
)

export default RegisterUserForm
