import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
function App() {
  return (
    // HEADER component
    /* despues pondras condicion para hacer protected route que es => si hay user show me esos componenets y si no hay user vamos al login */
    <Routes>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    // FOOTER component
  )
}

export default App
