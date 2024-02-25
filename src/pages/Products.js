import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import Button from '../components/Button';
import ButtonRounded from '../components/ButtonRounded';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewArrivalSection from '../components/NewArrivalSection';
import Pagination from '../components/Pagination';
import Product from '../components/Product';
import ReviewSection from '../components/ReviewSection';

export default function Products() {
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
            <h1 className='font-rubik text-[48px] font-semibold w-3/4 py-6 md:pb-20 text-white'>All Products</h1>
          </div>
</div>
      </section>
      <section>
              <div className='wrapper'>
          <h1 className='text-[28px] md:text-[48px] font-semibold text-center py-8'>Choose Your Catagory</h1>
          <div className='md:flex md:gap-4 items-center justify-center'>
            <div className='pb-4 md:gap-2 flex justify-around items-center'>
            <ButtonRounded>Group 1</ButtonRounded>
            <ButtonRounded>Group 2</ButtonRounded>
          </div>
          <div className='pb-4  md:gap-2 flex justify-around items-center'>
            <ButtonRounded>Group 3</ButtonRounded>
            <ButtonRounded>Group 4</ButtonRounded>
          </div>
          </div>
                  
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
                <div className="">  <Pagination /></div>
                  <div className='flex justify-center items-center'>
                      <Button>Order Now</Button>
                  </div>
                  
          </div>
      </section>
      <ReviewSection />
      <NewArrivalSection />
      <Footer />
    </div>
  )
}
