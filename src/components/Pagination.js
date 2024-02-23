import React from 'react'
import left from '../assets/icon/arrow-left.png'

export default function Pagination() {
  return (
    <div className='wrapper flex justify-between !w-1/3 py-5 font-rubik '>
      <div className='border px-2 py-1 border-black'>
        <img src={left} alt="" />
      </div>
      <div className='flex gap-2'>
        <p className='text-center border px-2 py-1 border-black bg-[#D6B85C]'>1</p>
        <p className='text-center border px-2 py-1 border-black'>2</p>
        <p className='text-center border px-2 py-1 border-black'>3</p>
        <p className='text-center border px-2 py-1 border-black'>4</p>
        <p className='text-center border px-2 py-1 border-black'>5</p>
      </div>
      <div className='border px-2 py-1 border-black'>
        <img className='scale-x-[-1]' src={left} alt="" />
      </div>
    </div>
  )
}
