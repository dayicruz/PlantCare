import React, { Suspense, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Overlays from './Overlays'
import './searchCards.scss'

export const SearchCards = ({
  data,
  selectedCardData,
  setIsOpen,
  isOpen,
  handleChangeNextPage,
  handleChangePrevPage,
}) => {
  const [cardData, setCardData] = useState(null)
  /*   const cardsToRender = selectedCardData.data || data.data */
  const cardsToRender =
    selectedCardData && selectedCardData.data
      ? selectedCardData.data
      : data.data

  const onClickOpenModal = (cardData) => {
    setIsOpen(true)
    setCardData(cardData)
  }

  return (
    <>
      <Overlays isOpen={isOpen} setIsOpen={setIsOpen} cardData={cardData} />
      <Suspense fallback={<div>Loading...</div>}>
        <div className=" buttonsPage">
          <button
            onClick={(event) => handleChangePrevPage(event)}
            className="buttonsPage-btn  "
          >
            <NavLink className="formSection-form--signup---nav">
              Prev page
            </NavLink>
          </button>
          <button
            onClick={(event) => handleChangeNextPage(event)}
            className="buttonsPage-btn "
          >
            <NavLink className="formSection-form--signup---nav">
              Next page
            </NavLink>
          </button>
        </div>
        <ul className="containerCards">
          {cardsToRender?.map((cardData) => (
            <li key={cardData.id} className="wrap animate pop">
              <div className="overlay">
                <div className="overlay-content animate slide-left delay-2">
                  <h1 className="animate slide-left pop delay-4">
                    {cardData.common_name
                      ? cardData.common_name
                      : cardData.synonyms[0] ||
                        cardData.scientific_name ||
                        cardData.genus}
                  </h1>
                  <p className="animate slide-left pop delay-5">
                    Kingdom: <em>Plantae</em>
                  </p>
                </div>
                <div className="image-content animate slide delay-5">
                  {cardData.image_url ? (
                    <img
                      className="image-content"
                      src={cardData.image_url}
                      alt="imagen planta"
                    />
                  ) : (
                    <img
                      className="image-content"
                      src="/src/assets/images/plantCare logo.png"
                      alt="imagen predeterminada"
                    />
                  )}
                </div>
                <div className="dots animate">
                  <div className="dot animate slide-up delay-6"></div>
                  <div className="dot animate slide-up delay-7"></div>
                  <div className="dot animate slide-up delay-8"></div>
                </div>
              </div>
              <div className="text">
                <p className="text-parrafo">
                  <span>Common Name :</span>{' '}
                  {cardData.common_name
                    ? cardData.common_name
                    : cardData.synonyms[0] ||
                      cardData.scientific_name ||
                      cardData.genus}
                </p>
                <p className="text-parrafo">
                  <span> Scientific Name:</span> {cardData.scientific_name}
                </p>
                <p className="text-parrafo">
                  <span>Family:</span> {cardData.family}
                </p>

                <p className="text-parrafo">
                  <span>Year :</span> {cardData.year}
                </p>
                <p className="text-parrafo">
                  <span>Genus : </span>
                  {cardData.genus}
                </p>
                <a className="button" href="#popup">
                  Open Modal
                </a>
                <button
                  onClick={() => onClickOpenModal(cardData)}
                  className="text-button"
                >
                  <NavLink className="formSection-form--signup---nav">
                    Learn more
                  </NavLink>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="buttonsPage">
          <button
            onClick={(event) => handleChangePrevPage(event)}
            className="buttonsPage-btn  "
          >
            <NavLink className="formSection-form--signup---nav">
              Prev page
            </NavLink>
          </button>

          <button
            onClick={(event) => handleChangeNextPage(event)}
            className="buttonsPage-btn  "
          >
            <NavLink className="formSection-form--signup---nav">
              Next page
            </NavLink>
          </button>
        </div>
      </Suspense>
    </>
  )
}
