import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swipe from "react-easy-swipe";
import { slides } from "../constants/data";
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; 
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        const newSlide =
          currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, paused]);

  const nextSlide = () => {
    const newSlide =
      currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    const newSlide =
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };
  
    return (
      <div className="slideContainer group relative">
        <div className="slide flex flex-col overflow-hidden relative" 
          onMouseEnter={() => {
          setPaused(true);
        }}
          onMouseLeave={() => {
          setPaused(false);
        }}
        >
          {/* big arrow start */}
          <div
            onClick={prevSlide}
            className="absolute left-8 inset-y-1/2 cursor-pointer z-10 hidden md:flex items-center"
          >
            <div className="arrow transform translate-x-1/2 rotate-90 cursor-pointer">
              <span className="opacity-0 group-hover:opacity-80 duration-300 block w-12 lg:w-16 h-12 lg:h-16 border-b-[6px] border-r-[6px] border-white transform rotate-45 group-hover:animate-scale hover:scale-110"></span>
            </div>
          </div>
          {/* big arrow end */}
          <AiOutlineLeft
            onClick={prevSlide}
            className="absolute left-0 text-white text-3xl opacity-80 inset-y-1/2 cursor-pointer z-10 sm:hidden"
          />
          <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}>
          
          <div className="slides flex w-full md:border-b-2 sm:shadow-ShadowGrey justify-center">
            
            {slides.map((slide, index) => {
              return (
                  <div className={`carousel-item flex slides relative justify-center min-h-[400px] md:h-[680px]
                  ${index === currentSlide
                    ? "block w-full"
                    : "hidden"}
                    `} 
                    key={slide.id}>
                    <img
                      src={slide.image}
                      alt="This is a carousel slide"
                      className="w-screen object-cover"
                      
                    />
                    <div className="overlayBG w-full h-full bg-black absolute opacity-40">

                    </div>
                    <div className="caption absolute self-center flex flex-col items-center px-6">
                      <h1 className="md:leading-[60px] text-white font-bold text-[32px] md:text-[48px] text-center font-OrkneyRegular ">{t(`slides.${slide.id-1}.caption.title`)}</h1>
                      <p className="py-[2rem] md:leading-[44px] text-[19px] md:text-[24px] text-center text-white px-[1rem] font-OrkneyLight max-w-[700px]">{t(`slides.${slide.id-1}.caption.content`)}</p>
                      <NavLink to='/recipes'><button className="button shadow-boxShadow text-[16px] md:text-[20px] font-OrkneyLight bg-yellow w-[180px] md:w-[220px] h-[44px] md:h-[50px] rounded-[4px] cursor-pointer hover:text-white">{t("language.emma's recipes")}</button></NavLink>
                    </div>
                  </div>
              );
            })}
            <div className="slide__indication absolute w-full flex justify-center bottom-3 md:bottom-5">
            {slides.map((element, index) => {
              return (
                <div
                  className={
                    index === currentSlide
                      ? "h-[8px] md:h-[12px] w-[12px]  bg-[#000000] opacity-70 rounded-[8px] mx-[22px] mb-2 cursor-pointer"
                      : "h-[8px] md:h-[12px] w-[12px]  bg-[#000000] opacity-30 rounded-[8px] mx-[22px] mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                ></div>
              );
            })}
            </div>
            
          </div>
          </Swipe>
          
          <AiOutlineRight
            onClick={nextSlide}
            className="absolute right-0 text-white text-3xl opacity-80 inset-y-1/2 cursor-pointer sm:hidden"
          />
          {/* big arrow start*/}
          <div
            onClick={nextSlide}
            className="absolute right-16 -translate-x-full inset-y-1/2 cursor-pointer z-10 hidden md:flex items-center"
          >
            
            <div className="arrow transform  rotate-90 cursor-pointer">
              <span className="opacity-0 group-hover:opacity-80 duration-300 block w-12 lg:w-16 h-12 lg:h-16 border-t-[6px] border-l-[6px] border-white transform rotate-45 -m-5 group-hover:animate-scale  hover:scale-110"></span>
            </div>
          </div>
          {/* big arrow end*/}
        </div>
      </div>
      
    );
  }

export default Carousel;


