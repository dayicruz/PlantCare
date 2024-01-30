import { Suspense, useEffect } from 'react'
import './modal.scss'

const Modal = ({ setIsOpen, cardData }) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden'

    return () => {
      document.body.style.overflowY = 'scroll'
    }
  }, [])

  const onClickCloseModal = () => {
    setIsOpen(false)
  }
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="modal">
          <div className="modal-content">
            <div className="modal-content--image">
              <img
                src={cardData.image_url}
                alt="imagen planta"
                className="modal-content--image---img"
              />
            </div>

            <div className="modal-content--info">
              <h1 className="modal-content--info---title">
                {cardData.common_name}
              </h1>
              <p className="modal-content--info---texto">
                The scientific name of {cardData.common_name} is{' '}
                {cardData.scientific_name} and it belongs to the family of{' '}
                {cardData.family}, this plant dates back to year {cardData.year}{' '}
                and belongs to genus {cardData.genus}, its slug is{' '}
                {cardData.slug}, it is also known by its synonyms: 5
              </p>
            </div>

            <button
              onClick={onClickCloseModal}
              className="modal-content--closebtn"
            >
              x
            </button>
          </div>
        </div>
      </Suspense>
    </>
  )
}

export default Modal
