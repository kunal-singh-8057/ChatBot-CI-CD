import React, { useState } from 'react'
import '../Styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import gpt from '../Assets/ChatGPT Logo.png'
import Axios from 'axios'

const Login = () => {

  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");

  const navigate = useNavigate();

  const login = ()=>{
    Axios.post("http://localhost:4500/api/v1/login",{
      email:email,
      password:password
    }).then((response)=>{
      if(response.data === 'success')
      {
        alert("Welcome user")
        navigate("/home")
      }

      else
      {
        alert("Wrong Email or password")
      }
    })
  }

  return (

 
    <>

    <div className='form2'>
     <img src={gpt}></img>
    <br></br>
    <h1>Welcome Back Again User</h1>
    <br></br>
    <input placeholder='Enter the username here' onChange={(e)=>{setemail(e.target.value)}}></input>
    <br></br>
    <input placeholder='Enter the Password here' onChange={(e)=>{setpassword(e.target.value)}}></input>
    <br></br>
    <button onClick={login}>Continoue</button>
    <br></br>
    <p>Don't Have An Account yet ? : <Link to='/' className='loglink'>Signup</Link></p>
    <br></br>
    <br></br>
    <h5>OR</h5>
    <p className='direct2'>Try It Now For Free of cost : <Link to='/home' className='visite'>Visite</Link></p>
  </div>

    </>
  )
}

export default Login