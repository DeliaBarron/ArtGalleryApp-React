import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../../pages/Home.jsx'
import Profile from '../../pages/Profile.jsx'
const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Profile' element={<Profile/>}/>
    </Routes>
  )
}

export default AppRoutes