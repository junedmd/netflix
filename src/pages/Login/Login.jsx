import React, { useState,useEffect } from 'react';
import "./Login.css";
import Logo from "./../../assets/logo.png";
import axios from "axios";

function Login() {

  const [signState, setSignState] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const directCall = () => {
    window.location.href = "/"
  }

   useEffect(()=>{
        const store = JSON.parse(localStorage.getItem("user" || "{}"));
        if(store?.name){
            alert(" you already login");
            window.location.href="/"
        }
    },[])
  const SignIn = async(e) => {

     e.preventDefault();
    
    try {

      if(signState==="sign up"){

      
      const response = await axios.post('/api/users', {
        name: name,
        email: email,
        password: password,
      });
      if (response?.data?.success) {
        alert(response?.data?.message)

        setSignState("login")
       
      } else {
        alert(response?.data?.message)
      };
      setName("");
      setPassword("");
      setEmail('');
    }else{
      const response = await axios.post('/api/logins', {
        email: email,
        password: password,
      });

       if (response?.data?.success) {
        alert(response?.data?.message)
        localStorage.setItem("user",JSON.stringify(response?.data?.data))
         window.location.href = "/"
       
      } else {
        alert(response?.data?.message)
      };
      setName("");
      setPassword("");
      setEmail('');
    }

    } catch (e) {
      console.log(e.message)
    };
  }


  return (
    <div className='login'>
      <img src={Logo} alt="" className='logo' onClick={directCall} />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="" >
          {
            signState === "Sign Up" ?<input type="Your Name" placeholder='Your Name' value={name} onChange={(e) => {
            setName(e.target.value)

          }} /> : <></>
          }
          

          <input type="email" placeholder='Your Email' value={email} onChange={(e) => {
            setEmail(e.target.value)

          }} />
          <input type="password" placeholder='Your Password' value={password} onChange={(e) => {
            setPassword(e.target.value)
          }} />
          <button className='btn' type='button' onClick={SignIn}> {signState === "Sign Up" ? "Sign Up" : "Login"}</button>

             
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p> Need Help?</p>
          </div>
        </form>
        <div className="form-switch">

          {signState === "Sign Up" ? <p>Already have account? <span onClick={() => {
            setSignState("Login")
          }}> Login Now</span></p> : <p>
            New to Netflix? <span onClick={() => {
              setSignState("Sign Up")
            }}> Sign Up Now</span>
          </p>}
        </div>
      </div>
    </div>
  )
};

export default Login;
