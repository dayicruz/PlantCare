import LogoPlantCare from '@assets/images/plantCare logo.png'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { userContext } from '../../../context/userContext'
import './header.scss'

import BurgerMenu from './BurgerMenu'

const Header = () => {
  const { user } = useContext(userContext)

  const { logout } = useContext(userContext)

  const handleClick = () => {
    logout()
  }

  const [bottonIsRotate, setBottonIsRotate] = useState(false)

  const handdleChangeBurgerMenu = function () {
    setBottonIsRotate((prevstate) => !prevstate)
    console.log(bottonIsRotate)
  }

  useEffect(() => {
    const checkIsRotate = () => {
      if (window.innerWidth > 750) {
        setBottonIsRotate(false)
      }
    }

    window.addEventListener('resize', checkIsRotate)
    return () => {
      window.removeEventListener('resize', checkIsRotate)
    }
  }, [])

  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <div className="header-wrapper--container">
            <img className="header-logo" src={LogoPlantCare} alt="image logo" />
          </div>

          <div className="header-nav">
            <div>
              <NavLink to="/home" className="header-nav--link">
                Home
              </NavLink>
            </div>

            <div>
              <NavLink to="/search" className="header-nav--link">
                Search
              </NavLink>
            </div>
            <div>
              <NavLink to="/countries" className="header-nav--link">
                Countries
              </NavLink>
            </div>
          </div>
          {/*   <div className="header-redes">
            <NavLink
              NavLink
              to={'https://www.facebook.com/'}
              className="header-redes---icon"
            >
              <AiFillFacebook />
            </NavLink>
            <NavLink
              to={'https://www.instagram.com/'}
              className="header-redes---icon"
            >
              <AiFillInstagram />
            </NavLink>
            <NavLink
              to="#"
              onClick={(e) => {
                window.location.href = 'whatsapp://send?dayana=+34 604 248 563'
                e.preventDefault()
              }}
              className="header-redes---icon"
            >
              <FaWhatsappSquare />
            </NavLink>
            <NavLink
              to={'https://www.linkedin.com/in/dayana-cruz-gonzalez/'}
              className="header-redes---icon"
            >
              <FaLinkedin />
            </NavLink>
          </div> */}

          <div className="header-welcome">
            <div className="header-welcome--texto">
              <h2 className="header-welcome--texto">
                Welcome {user.displayName}{' '}
              </h2>
            </div>
            <div>
              <button
                onClick={handleClick}
                type="submit"
                className="header-welcome--btn"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="header-burger">
            <button
              onClick={handdleChangeBurgerMenu}
              className="header-burgermenu"
            >
              <div
                className={`header-burgermenu--div ${
                  bottonIsRotate ? 'rotaterpositive' : ''
                }`}
              ></div>
              <div
                className={`header-burgermenu--div ${
                  bottonIsRotate ? 'rotateopacity' : ''
                }`}
              ></div>
              <div
                className={`header-burgermenu--div ${
                  bottonIsRotate ? 'rotatenegative' : ''
                }`}
              ></div>
            </button>
          </div>
          {<BurgerMenu bottonIsRotate={bottonIsRotate} />}
        </div>
      </header>
    </>
  )
}

export default Header
