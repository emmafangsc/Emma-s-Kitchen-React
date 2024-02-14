import React, { useState } from 'react';
import {testimonials} from '../constants/data';
import { useTranslation } from 'react-i18next';
const TestimonialCard = ({title, content})=>{
    const [currentIndex, setCurrentIndex] = useState(0);

    const Prev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }

    const Next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }

    const { t } = useTranslation();
    return(
        <div className="testimonial flex flex-col self-center m-auto px-[2rem] md:px-[6rem] bg-white opacity-80 justify-between md:justify-center w-full max-w-[800px] h-[600px] rounded-xl">
                {testimonials.map((testimonial, index)=>(
                    <div className={`content flex flex-col text-center items-center md:h-[500px] lg:h-[400px] ${index===currentIndex  ? 'block' : 'hidden'}`} key={testimonial.id}>
                        <h2 className="text-[30px]  pt-[2rem] pb-[1rem] font-OrkneyBold ">{t(`testimonials.${testimonial.id-1}.title`)}</h2>
                        <p className="text-[15px] md:text-[18px] leading-[32px] md:leading-[40px] text-justify font-OrkneyRegular">{t(`testimonials.${testimonial.id-1}.content`)}</p>
                        <p className="text-[20px] font-semibold pt-[2rem]">{t(`testimonials.${testimonial.id-1}.author`)}</p>
                        
                    </div>
                ))}
            <div className="link flex self-end gap-[13px] items-center pb-[2rem] ">
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