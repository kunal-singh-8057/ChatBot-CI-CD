import React, { useEffect, useState } from 'react'
import '../Styles/Home.css'
import send from '../Assets/send.png'
import logout from '../Assets/logout.png'
import del from '../Assets/delete.png'
import discord from '../Assets/discord.png'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import {URL} from '../Components/constants'


const Home = () => {

  
  
  const[promot,setpromot] = useState("");
  const[result,setresult] = useState(undefined);

 const payload = {
  "contents": [{
    "parts":[{"text": promot}]
    }]
}


const getdata = ()=>{
  Axios.post(`${URL}`,payload)
  .then((response)=>{
   console.log(response.data)
   setresult(response.data.candidates[0].content.parts[0].text)
  })
}


  return (
   <>



   <div className='div1'>

   <button className='upgrade'>Upgrade Now</button>

    <div className='sets'>


    <div className='sets1'>
      <img src={discord}></img>
      <p>Discord</p>
    </div>

    <div className='sets1'>
      <img src={del}></img>
      <p>Delete</p>
    </div>



    <div className='sets1'>
      <img src={logout}></img>
      <Link className='linkone' to='/'>Logout</Link>
    </div>


    </div>

   </div>

   
   
   
   
   <div className='div2'>
    <h1>Cricket GPT</h1>
    <br></br>
    <input placeholder='Enter Your Questions Here'  className='search' onChange={(e)=>{setpromot(e.target.value)}}></input>
    <img src={send} onClick={getdata}></img>
    <br></br>


   <div className='resultarea'>
   {result}
   </div>

    <p>Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</p>
   </div>

   </>
  )
}

export default Home