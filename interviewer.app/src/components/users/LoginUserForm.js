import React from 'ract'
import Input from '../common/form/Input'

const LoginUserForm = (props) => (
  <div className='container'>
    <div className='row'>
      <div className='col-md-4 col-md-offset-4 text-center'>
        <div className='search-box'>
          <div className='caption'>
            <h3>Advance Password Validation</h3>
            <p>Find to All</p>
          </div>
          <form className='loginForm'>
            <div className='input-group'>
              <div>{props.error}</div>
              <Input
                name='email'
                type='email'
                placeholder='E-Mail'
                className='form-control'
                value={props.user.email}
                onChange={props.onChange} />
              <Input
                name='password'
                type='password'
                placeholder='Password'
                className='form-control'
                value={props.user.password}
                onChange={props.onChange} />
              <input type='submit' className='form-control' onClick={props.onSave} />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default LoginUserForm
