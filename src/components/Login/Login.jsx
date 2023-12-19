import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { userContext } from '../../context/userContext'
import { auth } from '../../firebase/config'
import './login.scss'

const Login = () => {
  const { login } = useContext(userContext)

  const handleSubmit = (event) => {
    event.preventDefault()

    const email = event.target.email.value

    const password = event.target.password.value

    login(auth, email, password)
  }
  return (
    <div className="formSection">
      <h1 className="formSection-title">Login in to your PlantCare Account </h1>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="formSection-form"
        action=""
      >
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
