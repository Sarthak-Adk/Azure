import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
    <nav className="bg-white p-4 text-gray-800 shadow-md px-[140px]">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">AzureDev</Link> 
        <div className="space-x-14">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}>Contact</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'text-blue-500 font-semibold' : 'hover:text-blue-500'}>Portfolio</NavLink>
        </div>
        </div>
         </nav>
   
   </>
  )
}

export default Navbar
