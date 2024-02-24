import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Navbar from '../components/Navbar';


export default function About1() {
  return (
    <div className=''>
      
      <section id="about1_hero-section">
        <div className='hidden md:block wrapper'>
<Navbar />
        </div>
        <div className='wrapper'>
          <div className='md:hidden'>
                          <MenuIcon className="text-white mt-2" />
          </div>
          <div className='flex justify-center items-center'>
            <h1 className=' text-[48px] font-semibold w-3/4 py-6 text-white'>About 
Khondoker
Laboratories</h1>
          </div>
</div>
      </section>
    </div>
  )
}
