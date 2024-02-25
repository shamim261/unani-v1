import React from 'react';
import left from '../assets/icon/arrow-left.png';
import quote from "../assets/icon/quote.png";
import elipse from "../assets/images/Ellipse 54.png";


export default function ReviewSection() {
  return (
    <div>
       <section className=' bg-white py-7'>
              <div className='wrapper'>
                  <div className='flex justify-between items-center'>
                  <h1 className='font-rubik font-semibold text-[47px] md:w-[45%]'>Real Review From
                          Our Customer</h1>
                      <div className='hidden md:flex gap-2'>
                          <p className='text-4xl font-bold text-primary '>02<span className='text-lg font-medium text-black'>/05</span></p>
                          <div className='flex'>
                              <div className='border px-2 py-1 border-black'>
        <img src={left} alt="" />
      </div>
                              <div className='border px-2 py-1 border-black'>
        <img src={left} className='scale-x-[-1]' alt="" />
      </div>
                          </div>
                      </div>
                  </div>
                  <div className='flex justify-between gap-12'>
                      <div>
                  <div className='flex items-center justify-between py-8 pt-20 '>
                      <div className='flex justify-center items-center gap-4'>
                          <img src={elipse} alt="" />
                          <div>
                              <p className='font-semibold text-sm'>Amet lacus.</p>
                              <p className='font-light text-sm'>In nulla.</p>
                          </div>
                      </div>
                      <div>
                          <img src={quote} alt="" />
                      </div>
                  </div>
                  <div className='w-[80%] py-3'>
                      <p className='font-semibold  py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa adipiscing.</p>
                      <p className='font-light text-sm border-b-2  pb-3 border-[#D6B85C] border-w'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames urna, varius ultricies et in interdum. Id nascetur urna rhoncus.</p>
                        
                      </div>
                      </div>
                      <div className='hidden md:block'>
                  <div className='flex items-center justify-between py-8 pt-20 '>
                      <div className='flex justify-center items-center gap-4'>
                          <img src={elipse} alt="" />
                          <div>
                              <p className='font-semibold text-sm'>Amet lacus.</p>
                              <p className='font-light text-sm'>In nulla.</p>
                          </div>
                      </div>
                      <div>
                          <img src={quote} alt="" />
                      </div>
                  </div>
                  <div className='w-[80%] py-3'>
                      <p className='font-semibold  py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa adipiscing.</p>
                      <p className='font-light text-sm border-b-2  pb-3 border-[#D6B85C] border-w'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames urna, varius ultricies et in interdum. Id nascetur urna rhoncus.</p>
                        
                      </div>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}
