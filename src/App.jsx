import Contact from './components/Contact';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import images from './constants/images';
import Profile from './components/Profile';
function App() {
  return (
    <div className="bg-white h-screen relative z-0">
      <div className='contactWrapper relative z-20'>
        <Contact />
      </div>
      <div className='navWrapper sticky top-0 z-20 '>
        <Nav />
      </div>
      {/* <div className='promoWrapper z-10 relative'>
        <Profile />
      </div> */}
      <div className='carouselWrapper z-10 relative'>
        <Carousel />
      </div>
      

      <div className='overlay w-full absolute top-0 z-0'>
        <img src={images.bg}/>
      </div>
    </div>
  );
}
export default App;

