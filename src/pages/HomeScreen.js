import React from 'react'
import Navbar from '../features/navbar/Navbar'
import { Outlet } from 'react-router-dom'

function HomeScreen() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default HomeScreen