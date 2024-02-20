import React from 'react'
import left from '../assets/icon/arrow-left.png'

export default function Pagination() {
  return (
    <div className='wrapper flex '>
      <div className='border w-5 border-black'>
        <img src={left} alt="" />
      </div>
      <div className='flex gap-2'>
        <p className='text-center border w-5 border-black'>1</p>
        <p className='text-center border w-5 border-black'>2</p>
        <p className='text-center border w-5 border-black'>3</p>
        <p className='text-center border w-5 border-black'>4</p>
        <p className='text-center border w-5 border-black'>5</p>
      </div>
      <div className='border w-5 border-black'>
        <img className='scale-x-[-1]' src={left} alt="" />
      </div>
    </div>
  )
}
