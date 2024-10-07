import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
   <>
    <Header/>
    <Navbar/>
    <Outlet/>
   </>
  )
}

export default Layout
