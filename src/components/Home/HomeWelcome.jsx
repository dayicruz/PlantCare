import React from 'react'
import './HomeWelcome.scss'
import Button from '../UI/header/Button/Button'
import { NavLink } from 'react-router-dom'

const HomeWelcome = () => {
  return (
    <div className="HomeCarousel">
      <div className="HomeCarousel-text">
        <h1 className="HomeCarousel-text--title">Happy plants, Happy houses</h1>
        <p className="HomeCarousel-text--text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          voluptatibus voluptas minima saepe ipsam blanditiis est corporis
          ullam, dolorum animi accusamus incidunt dolorem dignissimos aliquid
          asperiores eos totam illo? Laborum.
        </p>
        <NavLink to={'/categories'}>
          <Button>Categories</Button>
        </NavLink>
      </div>
      <div className="HomeCarousel-images">
        <img className="HomeCarousel-images--img" alt="" />
      </div>
    </div>
  )
}

export default HomeWelcome
