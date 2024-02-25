import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewArrivalSection from '../components/NewArrivalSection';
import ReviewSection from '../components/ReviewSection';


export default function OurTeam() {
  return (
    <div>
      <section id="about1_hero-section">
        <div className='hidden md:block wrapper'>
<Navbar />
        </div>
        <div className='wrapper'>
          <div className='md:hidden'>
                          <MenuIcon className="text-white mt-2" />
          </div>
          <div className='flex justify-center items-center md:text-center'>
            <h1 className='font-rubik text-[48px] font-semibold w-3/4 py-6 md:pb-20 text-white'>Our Team</h1>
          </div>
</div>
      </section>
      <section>
        <div className='wrapper'>
          <h1 className='text-[28px] md:text-[48px] font-semibold text-center py-8'>Our Directors</h1>
          <div className='md:flex md:items-center md:gap-8'>
                       <Card />
                  <Card />
                  <Card />
          </div>
          <h1 className='text-[28px] md:text-[48px] font-semibold text-center py-8'>Others</h1>
          <div className='md:flex md:items-center md:gap-8'>
                       <Card />
                  <Card />
                  <Card />
          </div>
          <div className='md:flex md:items-center md:gap-8'>
                       <Card />
                  <Card />
                  <Card />
          </div>
        </div>
      </section>
      <ReviewSection />
      <NewArrivalSection />
      <Footer />
    </div>
  )
}
