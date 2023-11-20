import { Route, Routes } from 'react-router-dom'
import LoginForm from './components/Login/LoginForm'
import Footer from './components/UI/footer/Footer'
import Header from './components/UI/header/header'
import Categories from './pages/Categories'
import Countries from './pages/Countries'
import Home from './pages/Home'
import Search from './pages/Search'
function App() {
  return (
    // HEADER component
    /* despues pondras condicion para hacer protected route que es => si hay user show me esos componenets y si no hay user vamos al login */
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/search" element={<Search />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
