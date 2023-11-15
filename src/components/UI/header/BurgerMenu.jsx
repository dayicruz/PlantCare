import { AiFillFacebook } from '@react-icons/all-files/ai/AiFillFacebook'
import { AiFillInstagram } from '@react-icons/all-files/ai/AiFillInstagram'
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
import { FaWhatsappSquare } from '@react-icons/all-files/fa/FaWhatsappSquare'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './burgerMenu.scss'

const BurgerMenu = ({ bottonIsRotate }) => {
  return (
    <div className={`burgermenu ${bottonIsRotate ? 'showBurgerMenu' : ''}`}>
      <div>
        <NavLink to="/home" className="burgermenu-link">
          Home
        </NavLink>
      </div>

      <div>
        <NavLink to="/categories" className="burgermenu-link">
          Categories
        </NavLink>
      </div>

      <div>
        <NavLink to="/search" className="burgermenu-link">
          Search
        </NavLink>
      </div>

      <div>
        <NavLink to="/countries" className="burgermenu-link">
          Countries
        </NavLink>
      </div>

      <div className="burgermenu-redes">
        <NavLink
          to={'https://www.facebook.com/'}
          className="burgermenu-redes---icon"
        >
          <AiFillFacebook />
        </NavLink>

        <NavLink
          to={'https://www.instagram.com/'}
          className="burgermenu-redes---icon"
        >
          <AiFillInstagram />
        </NavLink>

        <NavLink
          to="#"
          onClick={(e) => {
            window.location.href = 'whatsapp://send?dayana=+34 604 248 563'
            e.preventDefault()
          }}
          className="burgermenu-redes---icon"
        >
          <FaWhatsappSquare />
        </NavLink>
        <NavLink
          to={'https://www.linkedin.com/in/dayana-cruz-gonzalez/'}
          className="burgermenu-redes---icon"
        >
          <FaLinkedin />
        </NavLink>
      </div>
    </div>
  )
}

export default BurgerMenu
