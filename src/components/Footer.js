import React from 'react';
import insta from "../assets/icon/ig.png";
import mail from "../assets/icon/ph_envelope-fill.png";
import fb from "../assets/icon/ph_facebook-logo-fill.png";
import loc from "../assets/icon/ph_map-pin-line-fill.png";
import phone from "../assets/icon/ph_phone-call-fill.png";
import yt from "../assets/icon/ph_youtube-logo-fill.png";
import twitter from "../assets/icon/tw.png";
import logo from "../assets/images/Group 10.png";

export default function Footer() {
  return (
    <div className='md:bg-white md:overflow-hidden'>
      <div className='hidden md:flex  py-20 flex-col justify-center items-center '>
        <div className='w-2/3 text-center'>
          <h1 className='text-6xl font-semibold font-rubik pb-4'>At ultricies parturient dolor 
mi porta varius.</h1>
          <p className=' font-light py-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames urna, varius ultricies et in interdum. Id nascetur urna rhoncus.</p>
          <div className='flex gap-2 items-center justify-center'>
             <button className="text-primary border border-primary bg-white px-10 py-4 font-bold">
              Contact us
          </button>
          <button className="text-white bg-primary px-10 py-4 font-bold">
              Order Now
          </button>
        </div>
</div>
      </div>

      <div className='my-4 px-7'>
     
      <div className='wrapper  border-y-2 border-[#D6B85C]'>
        <div className='py-20 md:flex md:gap-32 '>
          <div>
            <h1 className='font-semibold text-2xl ml-5'>Get in touch</h1>
            <div className='flex items-center gap-2 py-2 pt-6 text-[#48555B]'>
              <img src={mail} alt="" />
              <p className=''>khandoker@company.com</p>
            </div>
            <div className='flex items-center gap-2 py-2 text-[#48555B]'>
              <img src={phone} alt="" />
              <p className=''>(021) 876 347 294</p>
            </div>
            <div className='flex items-center gap-2 py-2 text-[#48555B]'>
              <img src={loc} alt="" />
              <p className='w-3/4'>Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. 
Tristique.</p>
            </div>
     </div>
         
          <div className='ml-5 py-5 pt-8 md:ml-0 md:py-0'>
            <h1 className='font-semibold text-2xl '>Our Catagory</h1>
            <ul className='text-[#48555B] py-2 '>
              <li className='py-2'>Category 1</li>
              <li className='py-2'>Category 2</li>
              <li className='py-2'>Category 3</li>
              <li className='py-2'>Category 4</li>
           </ul>
          </div>
           <div className='ml-5 py-5 md:ml-0 md:py-0'>
            <h1 className='font-semibold text-2xl '>More Links</h1>
            <ul className='text-[#48555B] py-2 '>
              <li className='py-2'>FAQs</li>
              <li className='py-2'>About</li>
              <li className='py-2'>Contact</li>
              <li className='py-2'>Our Process</li>
              <li className='py-2'>Our Team</li>
           </ul>
          </div>
          <div className='py-5 md:ml-0 md:py-0  '>
            <img src={logo} alt="" />
            <p className='py-6 w-4/5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien adipiscing platea sed mattis sit elementum mauris. Praesent.</p>

            <div className='flex gap-4 pt-10'>
              <img src={insta} alt="" />
              <img src={yt} alt="" />
              <img src={twitter} alt="" />
              <img src={fb} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
