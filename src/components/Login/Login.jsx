import React from 'react'
import './login.scss'
import Button from '../UI/header/Button/Button'
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
    <div className="formSection">
      <h1 className="formSection-title">Login in to your PlantCare Account </h1>
      <form className="formSection-form" action="">
        <p className="formSection-form--para">User Name</p>
        <input
          className="formSection-form--input"
          type="text"
          placeholder="email"
        />

        <p className="formSection-form--para">Password</p>
        <input
          className="formSection-form--input"
          type="password"
          placeholder="password"
        />

        <button className="formSection-form--btn">Login</button>

        <p className="formSection-form--signup">
          Don't have account?{' '}
          <NavLink className="formSection-form--signup---nav">Signup</NavLink>{' '}
        </p>
      </form>
    </div>
  )
}

export default Login
