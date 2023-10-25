import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
     <NavLink to={"/"} style={{margin:"2%",color:"white"}}><h3 >Home</h3></NavLink>
     <NavLink to={"/signin"} style={{margin:"1%",color:"white"}}><h5 >Signin</h5></NavLink>    
     <NavLink to={"/signup"} style={{margin:"1%",color:"white"}}><h5 >Signup</h5></NavLink>     
    </div>
  )
}

export default Navbar
