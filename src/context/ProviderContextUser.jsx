import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config'
import { userContext } from './userContext'

const ProviderContextUser = ({ children }) => {
  const history = useNavigate()

  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [user])

  async function signup(auth, email, password, displayName) {
    try {
      const data = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        displayName
      )
      const user = data.user
      await updateProfile(auth.currentUser, { displayName })

      setUser(user)
      history('/home')
      return {
        displayName,
      }
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      alert(errorMessage)
    }
  }

  async function login(auth, email, password, displayName) {
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        email,
        password,
        displayName
      )
      /*   const { displayName } = data.user */

      const user = data.user
      await updateProfile(auth.currentUser, { displayName })
      setUser(user)
      history('/home')

      return {
        displayName,
      }
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      alert(errorMessage)
    }
  }

  async function logout() {
    const value = await signOut(auth)
    history('/')
  }

  return (
    <userContext.Provider
      value={{
        signup,
        login,
        logout,
        user,
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export default ProviderContextUser
