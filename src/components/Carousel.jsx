import React, { Component } from "react";
import { carouselImages } from "../constants/data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import images from "../constants/images";

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
          this.state.currentSlide === carouselImages.length - 1
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
      this.state.currentSlide === carouselImages.length - 1
        ? 0
        : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide =
      this.state.currentSlide === 0
        ? carouselImages.length - 1
        : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
      <div className="slideContainer">
        <div className="slide flex flex-col overflow-hidden relative pb-[80px]" 
          onMouseEnter={() => {
          this.setState({ paused: true });
        }}
          onMouseLeave={() => {
          this.setState({ paused: false });
        }}
        >
          {/* big arrow */}
          <div
            onClick={this.prevSlide}
            className="absolute left-5 text-3xl inset-y-1/2 cursor-pointer z-10 hidden md:block"
          >
            <img src={images.arrow} className="rotate-180 w-[60px] xl:w-auto"/>
          </div>
          {/* big arrow */}
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 cursor-pointer z-10 sm:hidden"
          />
          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
          <div className="flex slide__background w-full relative  z-0">
            <div className="flex profile w-full h-[21rem] lg:h-[35rem] px-[1rem] sm:px-[4rem] md:px-[6rem] xl:px-[16rem] lg:mt-[4rem] justify-between">
                  <div className="profile__image flex flex-1">
                      <img src={images.profile} />
                  </div>
                  <div className="profile__content flex flex-1 flex-col justify-between items-center pt-[20px] lg:py-[40px]">
                      <div className="title md:w-[11rem] lg:w-[17rem] px-[40px]">
                      {/* <div className="title w-[230px] lg:w-[280px] px-[40px]"> */}
                          <h1 className="font-[800] text-[18px] lg:text-[36px] text-center">Nice to meet you!</h1>
                      </div>
                      <div className="union flex items-center w-[10rem] lg:w-[22rem]">
                          <img src={images.union}/>
                      </div>
                      <div className="paragraph ">
                          <p className="font-[400] text-[14px] leading-normal lg:text-[18px] lg:leading-[44px] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt eaque placeat numquam, nihil dignissimos laboriosam cupiditate earum, aperiam quo quasi corporis pariatur iusto aliquam iste totam libero architecto velit!</p>
                      </div>
                      <div className="button bg-black text-yellow lg:bg-yellow lg:text-black py-[5px] lg:py-[10px] px-[15px] lg:px-[40px] rounded-lg shadow-lg flex items-center justify-center font-[600] text-[18px] lg:text-[24px]">
                          <button>Book a call</button>
                      </div>
                  </div>
                  
              </div>
          </div>
          <div className="overlayImage flex">
            {carouselImages.map((slide, index) => {
              return (
                  <div className="slide__overlayImage absolute top-0 left-0">
                    <img
                      src={slide}
                      alt="This is a carousel slide"
                      key={index}
                      className={
                        index === this.state.currentSlide
                          ? "block w-full h-[44rem] object-cover"
                          : "hidden"
                      }
                    />
                  </div>
              );
            })}
            </div>
          </Swipe>
          <div className="slide__indication absolute w-full flex justify-center bottom-5">
            {carouselImages.map((element, index) => {
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
          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer sm:hidden"
          />
          {/* big arrow */}
          <div
            onClick={this.nextSlide}
            className="absolute right-5 text-3xl inset-y-1/2 cursor-pointer z-10 hidden md:block w-[60px] xl:w-auto"
          >
            <img src={images.arrow} />
          </div>
          {/* big arrow */}
        </div>
      </div>
      
    );
  }
  
}

export default Carousel;


