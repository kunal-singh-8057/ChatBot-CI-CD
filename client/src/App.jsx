import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../src/Components/Home'
import Signup from '../src/Components/Signup'
import Login from '../src/Components/Login'
import ProtectedRoutes from './Components/ProtectedRoutes'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>

     <Route path='/' element={<Signup/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/home' element={<Home/>}></Route>

      <Route element={<ProtectedRoutes/>}>
           
      </Route>
      
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App