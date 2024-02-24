import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/icon/logo (1) 2.png'

export default function Navbar() {
  return (
    <div className='text-white flex items-center justify-between py-5'>
      <div> <Link to={"/"}> <img src={logo} alt="" /> </Link> </div>
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
