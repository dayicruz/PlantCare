import LogoPlantCare from '@assets/images/plantCare transpa.png'
/* import { createUserWithEmailAndPassword } from 'firebase/auth' */
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { userContext } from '../../context/userContext'
import { auth } from '../../firebase/config'
import './signup.scss'

const Signup = () => {
  const { signup } = useContext(userContext)

  const handleSubmit = (event) => {
    event.preventDefault()

    const email = event.target.email.value

    const password = event.target.password.value

    const displayName = event.target.displayName.value

    signup(auth, email, password, displayName)
  }

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
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="signup-form"
          action=""
        >
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
            type="email"
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
