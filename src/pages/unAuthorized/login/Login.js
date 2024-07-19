import React from 'react'
import './login.css'
import loginLogo from '../../../img/fav-icon.svg'
import kistrLogoWhite from '../../../img/kistr-logo-white.svg'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <header className="login-header">
          <h1><img src={kistrLogoWhite} alt="kistr-logo" /></h1>
      </header>
      <main className="login-body">
        <div className="login-wraper">
            <div className="login-form-wraper">
                <header className="login-form-head">
                    <div><img src={loginLogo} alt="" /></div>
                    <h2>Log in to your account</h2>
                    <p>Welcome back! Please enter your details.</p>
                </header>
                <section className="login-form-body">
                    <div className="form-elm">
                        <label htmlFor="">Email</label>
                        <div className="input-wrap">
                          <input type="email" className="input-elm" placeholder="Enter your email" />
                        </div>
                        <span className="error-elm">Please enter valid email...</span>
                    </div>
                    <div className="form-elm">
                        <label htmlFor="">Password</label>
                        <div className="input-wrap">
                            <input type="password" className="input-elm" placeholder="**********" />
                            <button className="eye-btn input-icon">
                                <span className="icon-eye-open"></span>
                            </button>
                        </div>
                        <span className="error-elm">Please enter valid Password...</span>
                    </div>
                    <div className="forgot-btn-wrap">
                        <button className="forgot-btn">Forgot password</button>
                    </div>
                    <div className="login-form-btn">
                        <button className="site-btn btn-secondery">
                            <Link to={'/dashboard/home'}>
                                Sign in
                            </Link>
                        </button>
                        <button className="site-btn btn-primeray">Sign in with SSO</button>
                    </div>
                </section>
            </div>

        </div>
      </main>
    </>
  )
}

export default Login