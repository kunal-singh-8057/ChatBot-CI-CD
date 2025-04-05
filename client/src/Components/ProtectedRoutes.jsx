import { useEffect, useState } from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import Axios from 'axios'

  const ProtectedRoutes = ()=>{

    const[users,setusers] = useState(null);

    Axios.defaults.withCredentials = true

    useEffect(()=>{
        
        Axios.get("http://localhost:4500/api/v1/verify")
        .then((response)=>{
            
            if(response.data === "success")
            {
                setusers(true);
            }

            else
            {
                setusers(null);
            }
            
        })
    },[])


    return users ? <Outlet/> : <Navigate to= '/home' />
}


export default ProtectedRoutes