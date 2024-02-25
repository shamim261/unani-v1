import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import aboutImg from "../assets/images/069b48732f5221aa32644d32f81d5575.jpeg";
import founder from "../assets/images/958abd1aa515525c880aad102608de20.jpeg";
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ReviewSection from '../components/ReviewSection';


export default function OurProcess() {
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
          <div className='flex justify-center items-center md:text-center'>
            <h1 className='font-rubik text-[48px] font-semibold w-3/4 py-6 md:pb-20 text-white'>Our Process</h1>
          </div>
</div>
      </section>
      
      <section>
<div className='wrapper py-4'>
         <div className='py-4 md:py-20 md:flex md:items-center md:justify-between md:gap-4 md:flex-row-reverse'>
        <img src={founder} className='md:w-2/5 ' alt="" />
        <div className='md:w-2/4'>
          <h1 className='font-semibold text-[28px] py-4'>Step 1</h1>
          <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem porttitor quam ac tellus aenean commodo tristique. Quis tortor duis nec in. Adipiscing semper blandit nulla feugiat amet. Facilisi vel magna bibendum eu hendrerit tortor. Duis in morbi quis nibh suspendisse commodo. Porttitor donec adipiscing etiam tincidunt feugiat egestas. Odio convallis fames interdum commodo purus faucibus placerat auctor massa. Vel enim enim fringilla fusce pharetra. Volutpat sit orci aliquet nunc, neque integer diam. Morbi cursus ullamcorper ultrices purus aliquet velit nibh faucibus sed. Semper auctor sed faucibus sed. Turpis interdum egestas mauris amet ante morbi. Sodales odio eget libero elit, arcu elementum turpis turpis proin. Tempus congue mattis vitae enim.</p>
        </div>
      </div>
         <div className='py-4 md:py-20 md:flex md:items-center md:justify-between md:gap-4 '>
        <img src={aboutImg} className='md:w-2/5 ' alt="" />
        <div className='md:w-2/4'>
          <h1 className='font-semibold text-[28px] py-4'>Step 2</h1>
          <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem porttitor quam ac tellus aenean commodo tristique. Quis tortor duis nec in. Adipiscing semper blandit nulla feugiat amet. Facilisi vel magna bibendum eu hendrerit tortor. Duis in morbi quis nibh suspendisse commodo. Porttitor donec adipiscing etiam tincidunt feugiat egestas. Odio convallis fames interdum commodo purus faucibus placerat auctor massa. Vel enim enim fringilla fusce pharetra. Volutpat sit orci aliquet nunc, neque integer diam. Morbi cursus ullamcorper ultrices purus aliquet velit nibh faucibus sed. Semper auctor sed faucibus sed. Turpis interdum egestas mauris amet ante morbi. Sodales odio eget libero elit, arcu elementum turpis turpis proin. Tempus congue mattis vitae enim.</p>
        </div>
      </div>
         <div className='py-4 md:py-20 md:flex md:items-center md:justify-between md:gap-4 md:flex-row-reverse'>
        <img src={founder} className='md:w-2/5 ' alt="" />
        <div className='md:w-2/4'>
          <h1 className='font-semibold text-[28px] py-4'>Step 3</h1>
          <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem porttitor quam ac tellus aenean commodo tristique. Quis tortor duis nec in. Adipiscing semper blandit nulla feugiat amet. Facilisi vel magna bibendum eu hendrerit tortor. Duis in morbi quis nibh suspendisse commodo. Porttitor donec adipiscing etiam tincidunt feugiat egestas. Odio convallis fames interdum commodo purus faucibus placerat auctor massa. Vel enim enim fringilla fusce pharetra. Volutpat sit orci aliquet nunc, neque integer diam. Morbi cursus ullamcorper ultrices purus aliquet velit nibh faucibus sed. Semper auctor sed faucibus sed. Turpis interdum egestas mauris amet ante morbi. Sodales odio eget libero elit, arcu elementum turpis turpis proin. Tempus congue mattis vitae enim.</p>
        </div>
      </div>
         <div className='py-4 md:py-20 md:flex md:items-center md:justify-between md:gap-4 '>
        <img src={aboutImg} className='md:w-2/5 ' alt="" />
        <div className='md:w-2/4'>
          <h1 className='font-semibold text-[28px] py-4'>Step 4</h1>
          <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem porttitor quam ac tellus aenean commodo tristique. Quis tortor duis nec in. Adipiscing semper blandit nulla feugiat amet. Facilisi vel magna bibendum eu hendrerit tortor. Duis in morbi quis nibh suspendisse commodo. Porttitor donec adipiscing etiam tincidunt feugiat egestas. Odio convallis fames interdum commodo purus faucibus placerat auctor massa. Vel enim enim fringilla fusce pharetra. Volutpat sit orci aliquet nunc, neque integer diam. Morbi cursus ullamcorper ultrices purus aliquet velit nibh faucibus sed. Semper auctor sed faucibus sed. Turpis interdum egestas mauris amet ante morbi. Sodales odio eget libero elit, arcu elementum turpis turpis proin. Tempus congue mattis vitae enim.</p>
        </div>
      </div>
         
     </div>
      </section>
      <ReviewSection />
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
      <Footer />
    </div>
  )
}
