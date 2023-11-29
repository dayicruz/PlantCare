import LogoPlantCare from '@assets/images/plantCare transpa.png'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase/config'
import { signUp } from '../../redux/slices/authSlice'
import { useDispatch } from 'react-redux'
import './signup.scss'

const Signup = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')

  const SubmitForm = (event) => {
    event.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        const { uid, email } = user
        if (user) dispatch(signUp({ uid, email, displayName }))
        setDisplayName('')
        setEmail('')
        setPassword('')
      })
      .catch((err) => {
        console.log(err.code)
        console.log(err.message)
      })
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
        <form className="signup-form" action="" onSubmit={SubmitForm}>
          <p className="signup-form--para">Name</p>
          <input
            className="signup-form--input "
            type="text"
            placeholder="name"
            name="displayName"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            required
          />

          <p className="signup-form--para">Email</p>
          <input
            className="signup-form--input "
            type="text"
            placeholder="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />

          <p className="signup-form--para">Password</p>
          <input
            className="signup-form--input "
            type="password"
            placeholder="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
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
