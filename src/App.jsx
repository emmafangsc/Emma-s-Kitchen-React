import images from './constants/images';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
// import Newsletter from './components/Newsletter';
// import Footer from './components/Footer';
import HomeSection from './components/HomeSection'
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
      
      {/* <div className='newsletterWrapper relative z-10 mt-8'>
        <Newsletter />
      </div>
      <div className='footerWrapper relative z-10 mt-8'>
        <Footer />
      </div> */}
      <div className='sectionWrapper relative z-10 mt-8'>
        <HomeSection />
      </div>
      <div className='overlay w-full absolute top-0 z-0'>
        <img src={images.bg}/>
      </div>
    </div>
  );
}
export default App;

