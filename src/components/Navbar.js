import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/icon/logo (1) 2.png'

export default function Navbar() {
  return (
    <div className='text-white flex items-center justify-between py-5'>
      <div> <NavLink to='/'> <img src={logo} alt="" /> </NavLink> </div>
      <div>
        <ul className='flex gap-7 font-light items-center'>
         <NavLink to='/products'> <li>Products</li></NavLink>
         <NavLink to='/about1'> <li>About us</li></NavLink>
        <NavLink to='/our-process' href='#'>  <li>Our process</li></NavLink>
         <NavLink to='/contact'> <li>Contact</li></NavLink>
        <NavLink to='/faq'>  <li>FAQ</li> </NavLink>
        </ul>
      </div>
    </div>
  )
}
