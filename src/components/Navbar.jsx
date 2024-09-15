import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Nav'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
       <NavLink to={'/resume'}>Resume</NavLink>
    </div>
  )
}

export default Navbar