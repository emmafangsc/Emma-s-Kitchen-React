import images from './constants/images';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Carousel from './containers/Carousel';
import HomeSection from './containers/HomeSection';
import Certification from './containers/Certification';
import Testimonial from './containers/Testimonial';
import Newsletter from './containers/Newsletter';
import Footer from './containers/Footer';
function App() {
  return (
    <div className="relative m-auto max-w-screen-2xl">
      {/* <div class="cover fixed top-0  w-full z-20 backdrop-blur-md h-[150px] bg-yellow/30"></div> */}
      <div className='contactWrapper relative z-20 backdrop-blur-lg'>
        <Contact />
      </div>
      <div className='navWrapper sticky top-0 z-20 backdrop-blur-lg'>
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
      <div className='footerWrapper relative z-10'>
        <Footer />
      </div>
      

      <div className='overlay w-full absolute top-0 z-0'>
        <img src={images.bg}/>
      </div>
    </div>
  );
}
export default App;

