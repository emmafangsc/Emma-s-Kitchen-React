import Contact from './components/Contact';
import Nav from './components/Nav';
// import Nav from './containers/test';
import Carousel from './containers/Carousel';
import HomeSection from './containers/HomeSection';
import Certification from './containers/Certification';
import Testimonial from './containers/Testimonial';
import Newsletter from './containers/Newsletter';
import Footer from './containers/Footer';
import BackToTopButton from './components/BackToTopButton';
import images from './constants/images';
function App() {
  
  return (
    <div className="relative m-auto max-w-screen-2xl " id='nav' >
      {/* <div className='absolute top-0 left-0'><img src={images.bg} alt="background"/></div> */}
        <div className='navWrapper sticky top-0 z-20 bg-yellow'>
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
      <div className='footerWrapper relative z-10'>
        <Footer />
      </div>
      <BackToTopButton/>
    </div>

    
  );
}
export default App;

