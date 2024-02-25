import React from 'react'
import Card from './Card'

export default function NewArrivalSection() {
  return (
    <div>
      <section className='py-10'>
              <div className='wrapper'>
                  <h1 className='text-center font-rubik font-bold text-5xl pb-10'>New Arrival</h1>
                  <div className='md:flex md:items-center md:gap-8'>
                       <Card />
                  <Card />
                  <Card />
                 </div>
              </div>
      </section>
    </div>
  )
}
