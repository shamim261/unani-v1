import MenuIcon from '@mui/icons-material/Menu';
import bag from '../assets/icon/bag.png';
import handshake from '../assets/icon/handshake.png';
import list from '../assets/icon/list.png';
import govt from '../assets/images/282689fb22fd6519258e99ffc3ab2048.png';
import medi from "../assets/images/DGDA_1.png";
import iso from '../assets/images/iso-logo 1.png';
import kk from '../assets/images/kk.png';
import map from "../assets/images/map.png";
import topper from "../assets/images/toppng 1.png";

import asg from "../assets/images/AGS-B-1808007-Q-Silco-Pharmaceuticals-Ltd.png";
import factoty from "../assets/images/Factory-License-Page-01-copy.png";
import gmp from "../assets/images/GMP-Certificate-Page-1-copy.png";
    
import React from "react";
import Button from '../components/Button';
import ButtonOutlined from '../components/ButtonOutlined';
import ButtonPrimary from '../components/ButtonPrimary';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewArrivalSection from '../components/NewArrivalSection';
import Pagination from '../components/Pagination';
import Product from '../components/Product';
import ReviewSection from '../components/ReviewSection';
export default function Home() {
  return (
      <div>
        <div className="hero-section">
              <div className='w-[80%] m-auto hidden md:block'>
                  <Navbar />
              </div>
              <div className="flex flex-col md:flex-row-reverse">
                  <div className="wrapper ">
                      <div className='md:hidden'>
                          <MenuIcon className="text-white mt-2  " />
                      </div>
                      <div className="flex items-center justify-center">
                          
                          <img src={kk} className="h-[74vh] w-auto scale-x-[-1] " />
                      </div>
                  </div>

                  <section className="bg-primary md:bg-transparent text-white text-center py-5">
                      <div className="wrapper md:pt-12">
                          <div className="font-bold text-[48px]  pt-2 " >
                          <h1>Natural Solution </h1>
                          <h1>For Healthy Life </h1>
                          </div>
                          <p className="text-sm font-light py-3">
                              Let's try our way to get your dream job, with offers from different
                              countries and job positions, create opportunities for a better life
                          </p>
                          <div className='flex items-center justify-around py-5'>
                              <ButtonOutlined> Order Product</ButtonOutlined>
                              <ButtonPrimary> See Products </ButtonPrimary>
                          </div>
                      </div>
                  </section>
              </div>
        </div>
      <div className=''>
              <div className='wrapper py-12 px-5 flex flex-col gap-5 md:flex-row'>
                  <div className='px-7 py-11 bg-white '> 
                      {/* <BusinessCenterIcon className='text-[#15B769] m-3' fontSize='large' /> */}
                      <img className='p-4' src={bag}  alt="" />
                      <h1 className='py-4 font-semibold text-2xl'>Certified Sources</h1>
                      <p className='py-3 text-sm max-w-[90%]'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis</p>
                  </div>
                  <div className='px-7 py-11 bg-[#f6ecd1] '> 
                     
                         <img className='p-4 bg-white' src={list} alt="" />
                  
                      <h1 className='py-4 font-semibold text-2xl'>Bio-Active Benifits</h1>
                      <p className='py-3 text-sm max-w-[90%]'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis</p>
                  </div>
                  <div className='px-7 py-11 bg-white '> 
                      <img className='p-4' src={handshake} alt="" />
                      <h1 className='py-4 font-semibold text-2xl'>Formulation Purpose</h1>
                      <p className='py-3 text-sm max-w-[90%]'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis</p>
                  </div>
                </div>
          </div>
          <section>
              <div className='wrapper'>
                  <h1 className='text-[40px] font-semibold text-center py-8'>Our Products</h1>
                  
                  <div className='md:flex md:items-center md: gap-5'>
                      <Product />
                  <Product />
                  <Product />
                  </div>
                  <div className='md:flex md:items-center md: gap-5'>
                      <Product />
                  <Product />
                  <Product />
                  </div>
                <div className="hidden md:block">  <Pagination /></div>
                  <div className='flex justify-center items-center'>
                      <Button>Order Now</Button>
                  </div>
                  
          </div>
          </section>
          <section id="bgSection" className='my-3 py-5 md:py-8 text-white'>
              <div className='wrapper text-center md:text-left'>
                 
                  <div className='md:flex md:flex-row-reverse md:items-center md:justify-around'>
                       <div>
                  <img src={topper} />
              </div>
                 <div>
                     <div className="font-bold text-[48px]   pt-2 " >
                          <h1>Natural Solution </h1>
                          <h1>For Healthy Life </h1>
                      </div>  
                       <p className="text-sm font-light py-3 md:w-2/4">
                              Let's try our way to get your dream job, with offers from different
                              countries and job positions, create opportunities for a better life
                          </p>
                          </div>
                  </div>
              
              </div>
          </section>
         <ReviewSection />
          <NewArrivalSection />
          <section id="mapSection" className='hidden md:block pt-20 pb-10'>
              <div className='wrapper text-white flex flex-col justify-center items-center'>
                  <div className='text-center w-2/3 flex flex-col justify-center items-center'>
                       <h1 className='text-6xl font-semibold font-rubik pb-4' >Our National Presence</h1>
                  <p className=' font-light py-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames urna, varius ultricies et in interdum. Id nascetur urna rhoncus.</p>
                 </div>
                  <img src={map} alt="" />
              </div>
          </section>
          <section className='hidden md:block pt-20 pb-10'>
                <div className='wrapper  flex flex-col justify-center items-center'>
                  <div className='text-center w-2/3 lex flex-col justify-center items-center'>
                       <h1 className='text-6xl font-semibold font-rubik pb-4' >We Are Certified</h1>
                  <p className=' font-light py-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames urna, varius ultricies et in interdum. Id nascetur urna rhoncus.</p>
                  </div>
                  <div className='flex items-center gap-16 py-4'>
                      <img src={govt} className='w-56 h-56' alt="" />
                      <img src={medi} className='w-56 h-56' alt="" />
                      <img src={iso} className='w-56 h-56' alt="" />
                  </div>
                  <div className='flex items-center gap-7 py-10'>
                      <img src={ gmp} alt="" />
                      <img src={factoty } alt="" />
                      <img src={ asg} alt="" />
                  </div>
              </div>
          </section>
          <section className='hidden md:block pt-20 pb-10'>
              <div className="wrapper">
                  <div className='text-center flex flex-col justify-center items-center'>
                       <h1 className='text-6xl font-semibold font-rubik pb-4'>Our Team</h1>
                  <p className=' font-light py-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames urna, varius ultricies et in interdum. Id nascetur urna rhoncus.</p>
              </div>
              <div className='flex justify-around items-center gap-8 '>
                  <Card />
                  <Card />
                  <Card />
              </div>
              </div>
          </section>
          <Footer />
      </div>
  );
}
