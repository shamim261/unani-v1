import React from 'react'
import card from '../assets/images/front-view-container-with-pills-copy-space 1.png'

export default function Card() {
  return (
    <div className='wrapper py-4'>
      
        <div className='flex justify-center items-center'><img className=' ' src={card} alt="" /></div>
      
      <div className=' py-8'>
        <h1 className='text-[24px] font-semibold py-4'>Tincidunt ac eu.</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna nec sapien, tellus orci, maecenas. Gravida magna scelerisque.</p>
      </div>
    </div>
  )
}
