import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { userContext } from '../context/userContext'

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(userContext)

  return user ? children : <Navigate to="/" />
}
