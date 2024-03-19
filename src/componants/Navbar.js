import React from 'react'
import { NavLink } from 'react-router-dom'
import Auth, { useAuth } from './Auth'

export default function Navbar() {
    const auth=useAuth()
  return (
    <div className='nav'>
        <NavLink to='/'>Home</NavLink>
        {sessionStorage.getItem("name") &&<NavLink to='/users'>User</NavLink>}
        {sessionStorage.getItem("name")==='admin'&&
        <NavLink to='/admin'>Admin</NavLink>}
        {sessionStorage.getItem("name") &&<NavLink to='/profile'>Profile</NavLink>}
        {!sessionStorage.getItem("name") &&<NavLink to='/login'>Login</NavLink>}
        {!sessionStorage.getItem("name") &&<NavLink to='/signup'>SignUp</NavLink>} 
    </div>
  )
}
