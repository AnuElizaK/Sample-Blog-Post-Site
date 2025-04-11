//this file is specifically for the header component of the application
import React from 'react'
import { NavLink } from 'react-router-dom' 

const Header = () => {
  return (
    <header style={{ backgroundColor: 'rgb(218, 190, 249)'}}>
        <h1 style={{textAlign: 'center'}}>Blog Posts</h1>
        <nav>
            <ul style={{ display: 'flex', listStyleType: 'none', gap: '200px', justifyContent: 'center'}}>
                <li><NavLink to="/" style={{textDecoration: 'none'}}><p id="h">Dashboard</p></NavLink></li>
                <li><NavLink to="/home" style={{textDecoration: 'none'}}><p id="h">Home</p></NavLink></li>
                <li><NavLink to="/blogform" style={{textDecoration: 'none'}}><p id="h">Blog Form</p></NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header