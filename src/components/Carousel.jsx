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
        <div className="slide flex h-[644px] overflow-hidden relative" 
          onMouseEnter={() => {
          this.setState({ paused: true });
        }}
          onMouseLeave={() => {
          this.setState({ paused: false });
        }}
        >
          <AiOutlineLeft
            onClick={this.prevSlide}
            className="absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />
          <Swipe onSwipeLeft={this.nextSlide} onSwipeRight={this.prevSlide}>
          <div className="slide__background w-screen h-[700px] text-center relative  z-0">
            <div className="profile w-full h-[644px] border-black border-[1px] pl-[200px] flex mt-[60px]">
                  <div className="profile__image w-[330px] h-[570px]">
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
                      <img src={images.arrow} />
                      </div>
                  </div>
              </div>
          </div>
            {carouselImages.map((slide, index) => {
              return (
                  <div className="slide__overlayImage absolute top-0 left-0 ">
                    <img
                      src={slide}
                      alt="This is a carousel slide"
                      key={index}
                      className={
                        index === this.state.currentSlide
                          ? "block w-full h-auto object-cover"
                          : "hidden"
                      }
                    />
                  </div>
              );
            })}
          </Swipe>
          <div className="slide__indication absolute w-full flex justify-center bottom-10">
            {carouselImages.map((element, index) => {
              return (
                <div
                  className={
                    index === this.state.currentSlide
                      ? "h-2 w-2 bg-blue-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer"
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
            className="absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer"
          />
        </div>
      </div>
      
    );
  }
  
}

export default Carousel;


