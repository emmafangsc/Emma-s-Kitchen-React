import React, { Component } from "react";
// import { slides } from "../constants/data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import images from "../constants/images";
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
      <div className="slideContainer group relative md:border-b-4 sm:shadow-ShadowGrey">
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
              <span className="opacity-0 group-hover:opacity-100 duration-300 block w-12 lg:w-16 h-12 lg:h-16 border-b-[6px] border-r-[6px] border-black transform rotate-45 group-hover:animate-scale hover:border-grey hover:scale-110"></span>
            </div>
          </div>
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 cursor-pointer z-10 sm:hidden"
          />
          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
          
          <div className="slides flex w-full h-[22rem] md:h-[44rem] md:border-b-2 sm:shadow-ShadowGrey">
            {slides.map((slide, index) => {
              return (
                  <div className="slides absolute top-0 left-0">
                    <img
                      src={slide.image}
                      alt="This is a carousel slide"
                      key={slide.id}
                      className={
                        `${index === this.state.currentSlide
                          ? "block w-screen h-[22rem] md:h-[44rem]"
                          : "hidden"}
                          relative object-cover`
                      }
                    />
                    {/* {slide.caption==='true' && (
                    <div className="flex absolute top-0 left-0 w-full h-[16rem] md:h-[44rem]">
                      <div className="flex profile w-full gap-[1rem] md:gap-[7rem] h-[16rem] md:h-[35rem] px-[2rem] sm:px-[4rem] md:px-[6rem] xl:px-[16rem] lg:mt-[4rem] justify-center sm:justify-start">
                        <div className="profile__image flex w-[25rem] items-center justify-center">
                            <img src={images.profile} className="h-[16rem] sm:h-auto"/>
                        </div>
                        <div className="profile__content hidden sm:flex w-[45rem] flex-col md:justify-between items-center pt-[20px] md:py-[40px]">
                            <div className="title">
                                <h1 className="font-OrkneyBold text-[18px] md:text-[36px] text-center">Nice to </h1>
                                <h1 className="font-OrkneyBold text-[18px] md:text-[36px] text-center">meet you!</h1>
                            </div>
                            <div className="union flex items-center w-[10rem] md:w-[22rem]">
                                <img src={images.union}/>
                            </div>
                            <div className="paragraph">
                                <p className="line-clamp-3 md:line-clamp-none font-[400] font-OrkneyLight text-[14px] leading-normal md:text-[18px] md:leading-[44px] text-center my-4 md:my-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt eaque placeat numquam, nihil dignissimos laboriosam cupiditate earum, aperiam quo quasi corporis pariatur iusto aliquam iste totam libero architecto velit!</p>
                            </div>
                            <div className="button shadow-boxShadow font-OrkneyBold bg-yellow text-black hover:bg-grey hover:text-white py-[5px] md:py-[10px] px-[15px] md:px-[40px] rounded-lg flex items-center justify-center font-[600] text-[18px] md:text-[24px] cursor-pointer">
                                <button>Book a call</button>
                            </div>
                        </div>
                      </div>
                  </div>
                  
                  )} */}
                  </div>
              );
            })}
            </div>
          </Swipe>
          
          <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 cursor-pointer sm:hidden"
          />
          {/* big arrow */}
          <div
            onClick={this.nextSlide}
            className="absolute right-16 -translate-x-full inset-y-1/2 cursor-pointer z-10 hidden md:flex items-center"
          >
            
            <div className="arrow transform  rotate-90 cursor-pointer">
              <span className="opacity-0 group-hover:opacity-100 duration-300 block w-12 lg:w-16 h-12 lg:h-16 border-t-[6px] border-l-[6px] border-black transform rotate-45 -m-5 group-hover:animate-scale hover:border-grey hover:scale-110"></span>
            </div>
          </div>
          {/* big arrow */}
        </div>
        <div className="slide__indication absolute w-full flex justify-center -bottom-10 md:bottom-5">
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


