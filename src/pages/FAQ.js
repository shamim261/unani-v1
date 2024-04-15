import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import MobileSidebar from '../components/MobileSidebar';
import Navbar from '../components/Navbar';
import NewArrivalSection from '../components/NewArrivalSection';
import ReviewSection from '../components/ReviewSection';


export default function FAQ() {

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
            <h1 className='font-rubik text-[48px] font-semibold w-3/4 py-6 md:pb-20 text-white'>FAQ</h1>
          </div>
</div>
    </section>
      <section className='wrapper'>
        <h1 className='text-[28px] md:text-[48px] font-semibold text-center py-8'>Frequently Asked Questions</h1>
        <Accordion title='Faucibus molestie eu eleifend proin.'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh scelerisque pulvinar netus gravida. Ultrices consequat lectus mattis at nunc tellus nullam nulla. Tempus vitae risus vitae ante massa, nam nam. Bibendum varius commodo aliquet enim dolor facilisis vitae montes, sed. Ac tellus risus imperdiet vitae. Urna et quis ultricies at sem.
Egestas placerat imperdiet ipsum ut augue ipsum. Fermentum imperdiet leo amet tempus. Sit massa facilisi porttitor id. </Accordion>
        <Accordion title='Faucibus molestie eu '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh scelerisque pulvinar netus gravida. Ultrices consequat lectus mattis at nunc tellus nullam nulla. Tempus vitae risus vitae ante massa, nam nam. Bibendum varius commodo aliquet enim dolor facilisis vitae montes, sed. Ac tellus risus imperdiet vitae. Urna et quis ultricies at sem.
Egestas placerat imperdiet ipsum ut augue ipsum. Fermentum imperdiet leo amet tempus. Sit massa facilisi porttitor id. </Accordion>
        <Accordion title='Faucibus molestie eu eleifend proin.'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh scelerisque pulvinar netus gravida. Ultrices consequat lectus mattis at nunc tellus nullam nulla. Tempus vitae risus vitae ante massa, nam nam. Bibendum varius commodo aliquet enim dolor facilisis vitae montes, sed. Ac tellus risus imperdiet vitae. Urna et quis ultricies at sem.
Egestas placerat imperdiet ipsum ut augue ipsum. Fermentum imperdiet leo amet tempus. Sit massa facilisi porttitor id. </Accordion>
        <Accordion title='Faucibus molestie eu eleifend proin.'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh scelerisque pulvinar netus gravida. Ultrices consequat lectus mattis at nunc tellus nullam nulla. Tempus vitae risus vitae ante massa, nam nam. Bibendum varius commodo aliquet enim dolor facilisis vitae montes, sed. Ac tellus risus imperdiet vitae. Urna et quis ultricies at sem.
Egestas placerat imperdiet ipsum ut augue ipsum. Fermentum imperdiet leo amet tempus. Sit massa facilisi porttitor id. </Accordion>
      </section>
      <ReviewSection />
      <NewArrivalSection />
      <Footer />
      </div>
    
  )
}
