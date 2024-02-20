import bag from '../assets/icon/bag.png';
import handshake from '../assets/icon/handshake.png';
import list from '../assets/icon/list.png';
import kk from '../assets/images/kk.png';

import React from "react";
import Button from '../components/Button';
import ButtonOutlined from '../components/ButtonOutlined';
import ButtonPrimary from '../components/ButtonPrimary';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Product from '../components/Product';
export default function Home() {
  return (
      <div>
        <div className="hero-section">
              <div className='w-[80%] m-auto'>
                  <Navbar />
              </div>
              <div className="flex flex-col md:flex-row-reverse">
                  <div className="wrapper ">
                      {/* <MenuIcon className="text-white mt-2 " /> */}
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
                  <Pagination />
                  <div className='flex justify-center items-center'>
                      <Button>Order Now</Button>
                  </div>
                  
          </div>
          </section>
      </div>
  );
}
