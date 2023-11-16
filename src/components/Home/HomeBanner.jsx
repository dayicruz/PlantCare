import React from 'react'
import './homeBanner.scss'
import { NavLink } from 'react-router-dom'
import Button from '../UI/header/Button/Button'
export const HomeBanner = () => {
  return (
    <div className="HomeBanner">
      <div className="HomeBanner-images">
        <img className="HomeBanner-images--img" alt="" />
      </div>
      <div className="HomeBanner-text">
        <h1 className="HomeBanner-text--title">
          Search according to the plant you want
        </h1>
        <p className="HomeBanner-text--text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          voluptatibus voluptas minima saepe ipsam blanditiis est corporis
          ullam, dolorum animi accusamus incidunt dolorem dignissimos aliquid
          asperiores eos totam illo? Laborum.
        </p>
        <NavLink>
          <Button>Search</Button>
        </NavLink>
      </div>
    </div>
  )
}
