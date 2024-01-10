import Contact from '../components/Contact';
import Nav from '../components/Nav';
import Carousel from '../containers/Carousel';
import HomeSection from '../containers/HomeSection';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';
import images from '../constants/images';
function Home() {
  
  return (
    <div className="relative m-auto max-w-screen-2xl" id='nav' >
        <div className='header sticky top-0 z-20  bg-yellow'>
          <Contact />
          <Nav />
        </div>
        <div className='carouselWrapper z-10 relative'>
          <Carousel />
        </div>
        <div className='promoBG'><img src={images.Vector10} alt="background"/></div>      
        <div className='sectionWrapper relative z-10 mt-16'>
          <HomeSection />
        </div>
        
        <div className='testimonialWrapper relative z-10 '>
          <Testimonial />
        </div>
        <div className='newsletterWrapper relative z-10'>
          <Newsletter />
        </div>
        <div className='footerWrapper relative z-10 '>
          <Footer />
        </div>
        <BackToTopButton/>
    </div>

    
  );
}
export default Home;

