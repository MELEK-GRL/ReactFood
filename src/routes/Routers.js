import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../page/home/index'
export default function Routers() {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/ReactFood'/>}/>
    <Route path='/ReactFood' element={<Home/>}/>
   
  </Routes>
  )
}