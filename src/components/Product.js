import React from 'react'
import product from '../assets/images/product.png'

export default function Product() {
  return (
    <div className='wrapper py-4'>
      <div className='bg-[#F5EDD6]'>
        <div className='p-5 flex items-center justify-center'><img className='w-32' src={product} alt="" /></div>
      </div>
      <div className='text-center py-8'>
        <h1 className='text-[24px] font-semibold py-4'>Organica Joint Guard</h1>
        <p> functional food product, specially formulated 
to natural care for bone joint.</p>
      </div>
    </div>
  )
}
