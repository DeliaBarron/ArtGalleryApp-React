import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Profile from '../pages/Profile.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
    </Routes>
  )
}

export default AppRoutes