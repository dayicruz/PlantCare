import { useContext } from 'react'
import { userContext } from '../context/userContext'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ children }) => {
  const { user } = useContext(userContext)

  return !user ? children : <Navigate to="/home" />
}
