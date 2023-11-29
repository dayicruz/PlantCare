import React from 'react'
import { NavLink } from 'react-router-dom'
import './login.scss'
const Login = () => {
  return (
    <div className="formSection">
      <h1 className="formSection-title">Login in to your PlantCare Account </h1>
      <form className="formSection-form" action="">
        <p className="formSection-form--para">Email</p>
        <input
          className="formSection-form--input"
          type="text"
          placeholder="email"
          name="email"
        />

        <p className="formSection-form--para">Password</p>
        <input
          className="formSection-form--input"
          type="password"
          placeholder="password"
          name="password"
        />

        <button type="submit" className="formSection-form--btn">
          {/*   <NavLink to={'/home'}></NavLink> */}
          Login
        </button>

        <p className="formSection-form--signup">
          Don't have account?{' '}
          <NavLink to={'/signup'} className="formSection-form--signup---nav">
            Signup
          </NavLink>{' '}
        </p>
      </form>
    </div>
  )
}

export default Login
