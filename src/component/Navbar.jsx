import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
    <nav className="bg-white p-4 text-gray-800 shadow-md fixed top-0 left-0 right-0 z-10 px-[140px]">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">AzureDev</Link> 
        <div className="space-x-14">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-[#db4961] font-semibold' : 'hover:text-[#db4961]'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-[#db4961] font-semibold' : 'hover:text-[#db4961]'}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-[#db4961] font-semibold' : 'hover:text-[#db4961]'}>Contact</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'text-[#db4961] font-semibold' : 'hover:text-[#db4961]'}>Portfolio</NavLink>
        </div>
        </div>
         </nav>
   
   </>
  )
}

export default Navbar
