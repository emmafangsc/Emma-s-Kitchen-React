import Nav from './components/Nav';
import Carousel from './components/Carousel';
function App() {
  return (
    <div className="bg-white h-screen relative">
      <div className='navWrapper relative z-10'>
        <Nav />
      </div>
      <div className='carouselWrapper z-0 relative'>
        <Carousel />
      </div>
    </div>
  );
}
export default App;

