import React from 'react'
import "./layout.scss"
import { Navbar } from '../../components'

const Layout = () => {
  return (
    <div className='layout' >
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        Outlet
      </div>
    </div>
  )
}

export default Layout