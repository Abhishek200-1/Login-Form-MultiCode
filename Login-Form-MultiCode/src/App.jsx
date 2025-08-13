import React from 'react'
import './App.css'
import logo from './assets/logo.png' 

const App = () => {
  return (
    <>
      <div className="main-container">
        <div className="left-part">
          <img src={logo} alt="" className='logo'/>

          <p>Say hello to global food and beverage producers and suppliers, all in one place</p>
        </div>

        <div className="right-part">
          <p>Let's get started<br />with a few simple steps</p>

          <form className='form-container'>
            <label htmlFor="email">Email</label>
            <input type="email" />

            <label htmlFor="Full Name">FullName</label>
            <input type="text" />

            <label htmlFor="Password">Password</label>
            <input type="password" />

            <button>Sign up</button>
          </form>

          <div className="term-conditions">
            <p className='term-text'>By signing up, you agree to our <a href="" style={{color:'rgb(151, 150, 150)'}}>Terms of Service.</a><br />Already have an account? <a href="#">Log in</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
