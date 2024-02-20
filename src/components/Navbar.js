import React from 'react'
import logo from '../assets/icon/logo (1) 2.png'

export default function Navbar() {
  return (
    <div className='text-white flex items-center justify-between'>
      <div> <img src={logo} alt="" /></div>
      <div>
        <ul className='flex gap-7 font-light items-center'>
         <a href='#'> <li>Products</li></a>
         <a href='#'> <li>About us</li></a>
        <a href='#'>  <li>Our process</li></a>
         <a href='#'> <li>Contact</li></a>
        <a href='#'>  <li>FAQ</li> </a>
        </ul>
      </div>
    </div>
  )
}
