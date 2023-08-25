import images from './constants/images';
import Contact from './components/Contact';
import Nav from './components/Nav';
// import Nav from './containers/test';
import Carousel from './containers/Carousel';
import HomeSection from './containers/HomeSection';
import Certification from './containers/Certification';
import Testimonial from './containers/Testimonial';
import Newsletter from './containers/Newsletter';
import Footer from './containers/Footer';
import Blog from './containers/Blog';
function App() {
  return (
    <div className="relative m-auto max-w-screen-2xl bg-bgBody bg-no-repeat h-screen" id='nav' >
        <div className='navWrapper sticky top-0 z-20 backdrop-blur-md bg-yellow/25'>
          <Contact />
          <Nav />
        </div>
        <div className='carouselWrapper z-10 relative'>
          <Carousel />
        </div>      
        <div className='sectionWrapper relative z-10 mt-16'>
          <HomeSection />
        </div>
        <div className='certificationWrapper relative z-10'>
          <Certification />
        </div>
        <div className='testimonialWrapper relative z-10 -mt-40 sm:-mt-0'>
          <Testimonial />
        </div>
        <div className='newsletterWrapper relative z-10'>
          <Newsletter />
        </div>
      <div className='footerWrapper relative z-10'>
        <Footer />
      </div>
      
      <div className="scrollUp flex sm:hidden self-end mt-4 mb-16 cursor-pointer fixed z-30 -bottom-12 right-0">
          <a href="#nav"><img src={images.scrollUp}/></a>
      </div>
    </div>

    
  );
}
export default App;

