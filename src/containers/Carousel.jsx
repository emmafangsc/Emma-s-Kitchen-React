import React, { Component } from "react";
// import { slides } from "../constants/data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import { slides } from "../constants/data";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }

  componentDidMount() {
   this.interval = setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === slides.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextSlide = () => {
    let newSlide =
      this.state.currentSlide === slides.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? slides.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="slideContainer group relative">
        <div className="slide flex flex-col overflow-hidden relative" 
          onMouseEnter={() => {
          this.setState({ paused: true });
        }}
          onMouseLeave={() => {
          this.setState({ paused: false });
        }}
        >
          <div
            onClick={this.prevSlide}
            className="absolute left-8 inset-y-1/2 cursor-pointer z-10 hidden md:flex items-center"
          >
            <div className="arrow transform translate-x-1/2 rotate-90 cursor-pointer">
              <span className="opacity-0 group-hover:opacity-80 duration-300 block w-12 lg:w-16 h-12 lg:h-16 border-b-[6px] border-r-[6px] border-white transform rotate-45 group-hover:animate-scale hover:border-grey hover:scale-110"></span>
            </div>
          </div>
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-white text-3xl opacity-80 inset-y-1/2 cursor-pointer z-10 sm:hidden"
          />
          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
          
          <div className="slides flex w-full md:border-b-2 sm:shadow-ShadowGrey ">
            {slides.map((slide, index) => {
              return (
                  <div className="slides relative" key={slide.id}>
                    <img
                      src={slide.image}
                      alt="This is a carousel slide"
                      // key={slide.id}
                      className={`
                        ${index === this.state.currentSlide
                          ? "block w-screen md:h-[700px] "
                          : "hidden"}
                          object-cover
                          `}
                    />
                    <div className="slide__indication absolute w-full flex justify-center bottom-3 md:bottom-5">
                    {slides.map((element, index) => {
                      return (
                        <div
                          className={
                            index === this.state.currentSlide
                              ? "h-[8px] md:h-[12px] w-[16px] md:w-[22px] bg-black rounded-[8px] mx-2 mb-2 cursor-pointer"
                              : "h-[8px] md:h-[12px] w-[16px] md:w-[22px] bg-[#000000] opacity-50 rounded-[8px] mx-2 mb-2 cursor-pointer"
                          }
                          key={index}
                          onClick={() => {
                            this.setCurrentSlide(index);
                          }}
                        ></div>
                      );
                    })}
                  </div>
                  </div>
              );
            })}
            </div>
          </Swipe>
          
          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-white text-3xl opacity-80 inset-y-1/2 cursor-pointer sm:hidden"
          />
          {/* big arrow */}
          <div
            onClick={this.nextSlide}
            className="absolute right-16 -translate-x-full inset-y-1/2 cursor-pointer z-10 hidden md:flex items-center"
          >
            
            <div className="arrow transform  rotate-90 cursor-pointer">
              <span className="opacity-0 group-hover:opacity-80 duration-300 block w-12 lg:w-16 h-12 lg:h-16 border-t-[6px] border-l-[6px] border-white transform rotate-45 -m-5 group-hover:animate-scale hover:border-grey hover:scale-110"></span>
            </div>
          </div>
          {/* big arrow */}
        </div>
        
        {/* <div className="profile__content-mobile flex items-center sm:hidden flex-col h-[16rem] mt-[1rem] border-b-1 shadow-ShadowGrey">
            <div className="title">
              <h1 className="font-OrkneyBold text-[22px] text-center">Nice to meet you!</h1>
            </div>
            <div className="union flex items-center w-[20rem] py-2">
                <img src={images.union}/>
            </div>
            <div className="paragraph w-[20rem]">
                <p className="line-clamp-3 font-[400] font-OrkneyLight text-[14px] leading-normal text-center my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt eaque placeat numquam, nihil dignissimos laboriosam cupiditate earum, aperiam quo quasi corporis pariatur iusto aliquam iste totam libero architecto velit!</p>
            </div>
            <div className="button mt-2 shadow-boxShadow font-OrkneyBold bg-yellow text-black hover:bg-grey hover:text-white py-[5px] px-[20px] rounded-lg flex items-center justify-center font-[600] text-[18px] cursor-pointer">
                <button>Book a call</button>
            </div>
          </div> */}
      </div>
      
    );
  }
  
}

export default Carousel;


