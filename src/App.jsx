import { Search } from '@mui/icons-material'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Login/Signup'
import Footer from './components/UI/footer/Footer'
import Header from './components/UI/header/Header'
import Categories from './pages/Categories'
import Countries from './pages/Countries'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/search" element={<Search />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
