import { createPortal } from 'react-dom'
import Modal from './Modal'

const mountElement = document.getElementById('portal')

const Overlays = ({ isOpen, setIsOpen, cardData }) => {
  return createPortal(
    <>{isOpen && <Modal setIsOpen={setIsOpen} cardData={cardData} />}</>,
    mountElement
  )
}

export default Overlays
