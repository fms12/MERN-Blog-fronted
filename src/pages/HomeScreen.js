import React from 'react'
import Navbar from '../features/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import CustomNavbar from '../features/navbar/CustomNavbar'

function HomeScreen() {
  return (
    <div>
        <CustomNavbar />
        <Outlet />
    </div>
  )
}

export default HomeScreen