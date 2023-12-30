import React, { useState } from 'react';
import {testimonials} from '../constants/data';
const TestimonialCard = ({title, content})=>{
    const [currentIndex, setCurrentIndex] = useState(0);

    const Prev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }

    const Next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
    return(
                <div className="testimonial flex flex-col self-center m-auto px-[2rem] md:px-[6rem] bg-white opacity-80 justify-between md:justify-center w-full max-w-[800px] h-[600px] rounded-xl">
                        {testimonials.map((testimonial, index)=>(
                        // <div className="">
                            <div className={`content flex flex-col text-center items-center md:h-[500px] lg:h-[400px] ${index===currentIndex  ? 'block' : 'hidden'}`} >
                                <h2 className="text-[30px] py-[2rem] font-OrkneyBold ">{testimonial.title}</h2>
                                <p className="text-[15px] md:text-[18px] leading-[32px] md:leading-[40px] text-justify font-OrkneyRegular">{testimonial.content}</p>
                                <p className="text-[20px] font-semibold pt-[2rem]">{testimonial.author}</p>
                                
                            </div>
                        // </div>
                        ))}
                    <div className="link flex self-end gap-[13px] items-center pb-[2rem] ">
                        {/* <button className="leading-[44px] text-[18px] text-yellow font-OrkneyRegular group-hover:text-white opacity-70">See more</button> */}
                        <div className="leftArrow rotate-90 cursor-pointer" onClick={Prev}>
                            <span className="block w-[12px] h-[12px] border-b-[1px] border-r-[1px] border-black rotate-45 hover:border-grey"></span>
                        </div>
                        <div className="rightArrow rotate-90 cursor-pointer " onClick={Next}>
                            <span className="block w-[12px] h-[12px] border-t-[1px] border-l-[1px] border-black rotate-45 hover:border-grey"></span>
                        </div>
                    </div>
                </div>
    )
}
export default TestimonialCard;