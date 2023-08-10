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
function App() {
  return (
    <div className="relative m-auto max-w-screen-2xl">
      <div className='bg-bgBody bg-no-repeat'>
        <div className='navWrapper sticky top-0 z-20 backdrop-blur-md bg-yellow/25'>
          <Contact />
          <Nav />
        </div>
        <div className='carouselWrapper z-10 relative'>
          <Carousel />
        </div>      
        <div className='sectionWrapper relative z-10 mt-12'>
          <HomeSection />
        </div>
        <div className='certificationWrapper relative z-10'>
          <Certification />
        </div>
        <div className='testimonialWrapper relative z-10'>
          <Testimonial />
        </div>
        <div className='newsletterWrapper relative z-10 '>
          <Newsletter />
        </div>
      </div>
      <div className='footerWrapper relative z-10'>
        <Footer />
      </div>

    </div>

    
  );
}
export default App;

