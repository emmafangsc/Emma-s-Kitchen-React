import Nav from './components/Nav';
import Carousel from './components/Carousel';
import images from './constants/images';
function App() {
  return (
    <div className="bg-white h-screen relative z-0">
      <div className='navWrapper relative z-10'>
        <Nav />
      </div>
      <div className='carouselWrapper z-0 relative'>
        <Carousel />
      </div>
      <div className='overlay w-full absolute top-0 z-0'>
        <img src={images.bg}/>
      </div>
    </div>
  );
}
export default App;

