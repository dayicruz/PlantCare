import { Route, Routes } from 'react-router-dom'
import Signup from '../src/components/Login/Signup'

import { useContext } from 'react'
import { userContext } from './context/userContext'
import Login from './pages/Login'
import { AppRouter } from './router/AppRouter'
import { PrivateRoute } from './router/PrivateRoute'
import { PublicRoute } from './router/PublicRoute'
function App() {
  const { user } = useContext(userContext)

  return (
    <Routes>
      {/*  <Route path="/" element={<Login />} /> */}
      {/*   <Route path="/signup" element={<Signup />} /> */}

      <Route
        path="/"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />

      <Route
        path="/*"
        element={
          <PrivateRoute>
            <AppRouter />
          </PrivateRoute>
        }
      />

      {/* <Route path="/*" element={<AppRouter />} /> */}
    </Routes>
  )
}

export default App
