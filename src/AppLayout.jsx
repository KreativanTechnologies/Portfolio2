import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './global/NavBar'


const AppLayout = () => {
  return (
    <>
  
    <Navbar/>
    <Outlet/>
    {/* <Footer/> */}
  
      
    </>
  )
}

export default AppLayout
