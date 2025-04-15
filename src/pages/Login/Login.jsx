import React, { useState } from 'react'
import "./Login.css"
import Logo from "./../../assets/logo.png"
function Login() {

  const [signState,setSignState]=useState('Login')
  return (
    <div className='login'>
      <img src={Logo} alt="" className='logo'/>
      <div className="login-form">
        <h1>{signState} </h1>
        <form action="">
          {
            signState==="Sign Up" ? <input type="text" placeholder='Your name' />:<></>
          }
          
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Your Password' />
           <button className='btn'> {signState==="Sign Up"? "Sign Up":"Login"} </button>

           <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
              <p> Need Help?</p>
           </div>
        </form> 
          <div className="form-switch">
           
           {signState==="Sign Up"? <p>Already have account? <span onClick={()=>{
            setSignState("Login")
           }}> Login Now</span></p>:<p>
            New to Netflix? <span onClick={()=>{
              setSignState("Sign Up")
            }}> Sign Up Now</span>
            </p>} 
          </div>
      </div>
    </div>
  )
}

export default Login
