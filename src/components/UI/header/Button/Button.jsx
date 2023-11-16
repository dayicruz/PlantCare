import './buton.scss'

function Button({ children }) {
  return (
    <>
      <button className="primarybutton">{children}</button>
    </>
  )
}

export default Button
