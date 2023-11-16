import './loginForm.scss'

const LoginForm = () => {
  return (
    <div className="loginForm">
      <div className="loginForm-wrapp">
        <div className="loginForm-welcome">
          <div className="loginForm-welcome--imagen">
            <img className="loginForm-welcome--imagen---img" alt="" />
          </div>
        </div>

        <div className="loginForm-register">
          <div className="loginForm-register--data">
            <h1 className="loginForm-register--data---title">
              Search according to the plant you want
            </h1>
            <p className="loginForm-register--data--text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum voluptatibus voluptas minima saepe ipsam blanditiis est
              corporis ullam, dolorum animi accusamus incidunt dolorem
              dignissimos aliquid asperiores eos totam illo? Laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
