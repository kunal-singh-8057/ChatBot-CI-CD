import React, { useState } from 'react'
import '../Styles/Signup.css'
import { Link } from 'react-router-dom'
import gpt from '../Assets/ChatGPT Logo.png'
import  Axios  from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");

  const navigate = useNavigate();

  const add = ()=>{
    Axios.post("http://localhost:4500/api/v1/register",{
      email:email,
      password:password
    }).then(()=>{
      alert("Data Added Successfully")
      navigate("/login")
    })
  }

  return (
  <>

  <div className='form1'>
    <img src={gpt}></img>
    <br></br>
    <h1>Welcome User</h1>
    <br></br>
    <input placeholder='Enter the username here' onChange={(e)=>setemail(e.target.value)}></input>
    <br></br>
    <input placeholder='Enter the Password here' onChange={(e)=>setpassword(e.target.value)}></input>
    <br></br>
    <button onClick={add}>Continoue</button>
    <br></br>
    <p>Already Have An Account ? : <Link to='/login' className='loglink'>Login</Link></p>
    <br></br>
    <br></br>
    <h5>OR</h5>
    <p className='direct'>Try It Now For Free of cost : <Link to='/home' className='visite'>Visite</Link></p>
  </div>

  </>
  )
}

export default Signup