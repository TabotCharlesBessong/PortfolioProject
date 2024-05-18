import React from 'react'
import "./layout.scss"

const Layout = () => {
  return (
    <div className='layout' >
      <div className="navbar">
        Header
      </div>
      <div className="content">
        Outlet
      </div>
    </div>
  )
}

export default Layout