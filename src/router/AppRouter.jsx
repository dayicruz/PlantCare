import { Route, Routes } from 'react-router-dom'
import Footer from '../components/UI/footer/Footer'
import Header from '../components/UI/header/header'
import Countries from '../pages/Countries'
import Home from '../pages/Home'
import Search from '../pages/Search'

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/search" element={<Search />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
      <Footer />
    </>
  )
}
