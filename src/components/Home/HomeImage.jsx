import React from 'react'
import './HomeImage.scss'

const HomeImage = () => {
  return (
    <div className="HomeCarrucel">
      <div className="HomeCarrucel-text">
        <h1 className="HomeCarrucel-text--title">Happy plants, Happy houses</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          voluptatibus voluptas minima saepe ipsam blanditiis est corporis
          ullam, dolorum animi accusamus incidunt dolorem dignissimos aliquid
          asperiores eos totam illo? Laborum.
        </p>
        <button>BUSCAR</button>
      </div>
      <div className="HomeCarrucel-images">
        <img className="HomeCarrucel-images--img" alt="" />
      </div>
    </div>
  )
}

export default HomeImage
