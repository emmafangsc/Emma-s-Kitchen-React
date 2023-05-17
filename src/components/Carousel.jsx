import React, { Component } from "react";
import { carouselImages } from "../constants/data";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
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
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === carouselImages.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);
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
        <div className="slide flex flex-col overflow-hidden h-[710px] relative border-[red] border-[1px]" 
          onMouseEnter={() => {
          this.setState({ paused: true });
        }}
          onMouseLeave={() => {
          this.setState({ paused: false });
        }}
        >
          {/* test start */}
          <div
            onClick={this.prevSlide}
            className="absolute left-5 text-3xl inset-y-1/2 text-[red] cursor-pointer z-10"
          >
            <img src={images.arrow} className="rotate-180"/>
          </div>
          {/* test end */}
          {/* <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-[red] cursor-pointer z-10"
          /> */}
          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
          <div className="flex slide__background w-screen text-center relative  z-0">
            <div className="profile w-full h-[650px] border-black border-[1px] pl-[200px] flex mt-[60px]">
                  <div className="profile__image w-[330px] h-[570px] ">
                      <img src={images.profile} />
                  </div>
                  <div className="profile__content flex flex-col justify-between items-center py-[40px] mx-[120px] h-[570px]">
                      <div className="title w-[280px] h-[110px] px-[40px]">
                          <h1 className="font-[800] text-[36px] text-center ">Nice to meet you!</h1>
                      </div>
                      <div className="union flex items-center h-[60px]">
                          <img src={images.union} width='350'/>
                      </div>
                      <div className="paragraph w-[500px] h-[220px]">
                          <p className="font-[400] text-[18px] leading-[44px] text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt eaque placeat numquam, nihil dignissimos laboriosam cupiditate earum, aperiam quo quasi corporis pariatur iusto aliquam iste totam libero architecto velit!</p>
                      </div>
                      <div className="button bg-[#FFDF12] text-black py-[10px] px-[30px] rounded-lg shadow-lg flex items-center justify-center font-[600] text-[24px]">
                          <button>Book a call</button>
                      </div>
                  </div>
                  <div className="arrow flex justify-center items-center">
                      <div className="arrowImageWraper">
                      {/* <img src={images.arrow} /> */}
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
                          ? "block w-full h-[710px] object-cover"
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
                      ? "h-[12px] w-[22px] bg-[#FFDF12] rounded-[8px] mx-2 mb-2 cursor-pointer"
                      : "h-[12px] w-[22px] bg-[#000000] opacity-50 rounded-[8px] mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    this.setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
          </div>
          {/* <AiOutlineRight
            onClick={this.nextSlide}
            className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          /> */}
          {/* test start */}
          <div
            onClick={this.nextSlide}
            className="absolute right-5 text-3xl inset-y-1/2 text-[red] cursor-pointer z-10"
          >
            <img src={images.arrow} />
          </div>
          {/* test end */}
        </div>
      </div>
      
    );
  }
  
}

export default Carousel;


