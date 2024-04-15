import React from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import MobileSidebar from '../components/MobileSidebar';
import Navbar from '../components/Navbar';
import NewArrivalSection from '../components/NewArrivalSection';
import ReviewSection from '../components/ReviewSection';

export default function OurAlbum() {
  return (
    <div>
      <section id="about1_hero-section">
        <div className='hidden md:block wrapper'>
<Navbar />
        </div>
        <div className='wrapper'>
          <div className='md:hidden'>
                          <MobileSidebar />
          </div>
          <div className='flex justify-center items-center md:text-center'>
            <h1 className='font-rubik text-[48px] font-semibold w-3/4 py-6 md:pb-20 text-white'>Our Album</h1>
          </div>
</div>
      </section>
      <section>
        <div className="wrapper">
          <h1 className='text-[28px] md:text-[48px] font-semibold text-center py-8'>Special Moments</h1>
          <p className='text-center pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati delectus culpa corrupti! Eaque libero numquam nihil dolorem error officiis corrupti!</p>
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
