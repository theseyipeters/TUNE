import React from 'react'
import { loginEndPoint } from '../../spotify';
import './login.css'
import tune from './logo.svg'

export default function Login() {
  return (
    <div className='login-page'>
        <img src={tune} alt='logo-spotify' className='logo' />
        <a href={loginEndPoint}><div className='login-btn'>Login</div></a>
    </div>
  )
}
