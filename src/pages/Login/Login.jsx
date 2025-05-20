import React, { useState } from 'react'
import "./Login.css"
import Logo from "./../../assets/logo.png"
import {auth,login,signup} from "../../firebase.js"
function Login() {

  const[signState,setSignState]=useState('Login');
  const[email,SetEmail]=useState('');;
  const[password,setPassword]=useState('');
  const[name,SetName]=useState('')
  
  const user_auth = async (event)=>{
    event.preventDefault();
    if(signState==="Login"){
        login(email,password);
    }else{
      await signup(email,password)
    }
  }
  const directCall =()=>{
    window.location.href ="/"
}

  // SetName("");
  // setPassword("");
  // SetEmail('');
  return (
    <div className='login'>
      <img src={Logo} alt="" className='logo' onClick={directCall}/>
      <div className="login-form">
        <h1>{signState} </h1>
        <form action="">
          {
            signState==="Sign Up" ? <input type="text" placeholder='Your name'/>:<></>
          }
          
          <input type="email" placeholder='Your Email' value={email} onChange={(e)=>{ SetEmail(e.target.value)
            
          }}/>
          <input type="password" placeholder='Your Password' value={password} onChange={(e)=>{
            setPassword(e.target.value)
          }} />
           <button className='btn' onClick={user_auth} type='submit'> {signState==="Sign Up"? "Sign Up":"Login"} </button>

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

export default Login;
