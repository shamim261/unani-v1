import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import aboutImg from "../assets/images/069b48732f5221aa32644d32f81d5575.jpeg";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewArrivalSection from '../components/NewArrivalSection';
import ReviewSection from '../components/ReviewSection';


export default function Contact() {
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
            <h1 className='font-rubik text-[48px] font-semibold w-3/4 py-6 md:pb-20 text-white'>Contact</h1>
          </div>
</div>
      </section>
      
      <section>
<div className='wrapper py-4'>
         <div className='py-4 md:py-20 md:flex md:items-center md:justify-between md:gap-4 md:flex-row-reverse'>
            <div className='py-4 md:py-8 px-8 bg-[#F5EDD6] md:w-2/5'>
              <h1 className='text-[28px] font-semibold pb-3'>Send your questions</h1>
              <div>
                <input className='w-full py-2 px-5 my-2' placeholder='Full Name' type="text" name="" id="" />
                <input className='w-full py-2 px-5 my-2' placeholder='Email Address' type="text" name="" id="" />
                <input className='w-full py-2 px-5 my-2' placeholder='Phone Number' type="text" name="" id="" />
                <textarea className='resize-none w-full py-2 px-5 my-2' placeholder='Your Message' type="text" name="" id="" />
                <button className='bg-primary text-white font-bold w-full py-3'>Send Message</button>
              </div>
        </div>
        <div className='md:w-2/4'>
          <h1 className='font-semibold text-[28px] py-4'>Contact With Us</h1>
              <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem porttitor quam ac tellus aenean commodo tristique. Quis tortor duis nec in. Adipiscing semper blandit nulla feugiat amet. Facilisi vel magna bibendum eu hendrerit tortor. Duis in morbi qu</p>
              <p className='py-4'>or email to <span className='text-primary font-bold text-2xl'>email@gmail.com</span></p>
        </div>
      </div>
         <div className='py-4 md:py-20 md:flex md:items-center md:justify-between md:gap-4 '>
        <img src={aboutImg} className='md:w-2/5 ' alt="" />
        <div className='md:w-2/4'>
          <h1 className='font-semibold text-[28px] py-4'>Company Location</h1>
          <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla sem porttitor quam ac tellus aenean commodo tristique. Quis tortor duis nec in. Adipiscing semper blandit nulla feugiat amet. Facilisi vel magna bibendum eu hendrerit tortor. Duis in morbi quis nibh suspendisse commodo. Porttitor donec adipiscing etiam tincidunt feugiat egestas. Odio convallis fames interdum commodo purus faucibus placerat auctor massa. Vel enim enim fringilla fusce pharetra. Volutpat sit orci aliquet nunc, neque integer diam. Morbi cursus ullamcorper ultrices purus aliquet velit nibh faucibus sed. Semper auctor sed faucibus sed. Turpis interdum egestas mauris amet ante morbi. Sodales odio eget libero elit, arcu elementum turpis turpis proin. Tempus congue mattis vitae enim.</p>
        </div>
      </div>
         
     </div>
      </section>
      <ReviewSection />
       <NewArrivalSection />
      <Footer />
    </div>
  )
}
