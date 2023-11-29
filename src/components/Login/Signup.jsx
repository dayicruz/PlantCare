import LogoPlantCare from '@assets/images/plantCare transpa.png'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './signup.scss'

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup">
        <div className="signup-logo">
          <img
            className="signup-logo--lg"
            src={LogoPlantCare}
            alt="image logo"
          />
        </div>

        <h1 className="signup-title">Register in to your PlantCare</h1>
        <form className="signup-form" action="">
          <p className="signup-form--para">Name</p>
          <input
            className="signup-form--input "
            type="text"
            placeholder="name"
            name="displayName"
            required
          />

          <p className="signup-form--para">Email</p>
          <input
            className="signup-form--input "
            type="text"
            placeholder="email"
            name="email"
            required
          />

          <p className="signup-form--para">Password</p>
          <input
            className="signup-form--input "
            type="password"
            placeholder="password"
            name="password"
            required
          />

          <button type="submit" className="signup-form--btn">
            Register
          </button>
          <p className="formSection-form--signup">
            ¿Do you already have an account?
            <NavLink to={'/'} className="formSection-form--signup---nav">
              Login
            </NavLink>{' '}
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup
