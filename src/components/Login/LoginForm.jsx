import LogoPlantCare from '@assets/images/plantCare transpa.png'
import Login from '@components/Login/login'
import './loginForm.scss'
const LoginForm = () => {
  return (
    <div className="loginForm">
      <div className="loginForm-wrapp">
        <div className="loginForm-welcome">
          <div className="loginForm-welcome--imagen">
            <h1 className="loginForm-welcome--imagen---titulo">
              Welcome to PlantCare{' '}
              <span className="loginForm-welcome--imagen---titulo2">
                {' '}
                A website for all the variety of plants
              </span>
            </h1>

            <img className="loginForm-welcome--imagen---img" alt="" />
          </div>
        </div>

        <div className="loginForm-register">
          <div className="loginForm-register--data">
            <div className="loginForm-register--data---logo">
              <img
                className="loginForm-register--data---logo----lg"
                src={LogoPlantCare}
                alt="image logo"
              />
            </div>
            <Login />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
