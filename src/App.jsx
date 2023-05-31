import images from './constants/images';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Carousel from './containers/Carousel';
import HomeSection from './containers/HomeSection'
import Certification from './containers/Certification'
import Testimonial from './containers/Testimonial'
import Newsletter from './containers/Newsletter';
import Footer from './containers/Footer';
// import Test from './containers/test';
function App() {
  return (
    <div className="relative">
      <div className='contactWrapper relative z-20'>
        <Contact />
      </div>
      <div className='navWrapper sticky top-0 z-20 '>
        <Nav />
      </div>
      <div className='carouselWrapper z-10 relative'>
        <Carousel />
      </div>      
      <div className='sectionWrapper relative z-10 mt-8'>
        <HomeSection />
      </div>
      <div className='certificationWrapper relative z-10 mt-8'>
        <Certification />
      </div>
      <div className='testimonialWrapper relative z-10 mt-8'>
        <Testimonial />
      </div>
      <div className='newsletterWrapper relative z-10 mt-8'>
        <Newsletter />
      </div>
      <div className='footerWrapper relative z-10 mt-8'>
        <Footer />
      </div>
      {/* <div className='footerWrapper relative z-10 mt-8'>
        <Test />
      </div> */}

      <div className='overlay w-full absolute top-0 z-0'>
        <img src={images.bg}/>
      </div>
    </div>
  );
}
export default App;

