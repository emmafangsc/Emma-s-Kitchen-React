import {FaEnvelope} from "react-icons/fa";
import images from "../constants/images";
import { useState, useRef, useEffect } from "react";

const Contact = () => {
    const [whatsappNumber, setWhatsappNumber] = useState(false);
    const whatsappRef = useRef();
    const [emailNumber, setEmailNumber] = useState(false);
    const emailRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event, ref, whatsappNumber) => {
          if (!ref?.current?.contains(event.target)) {
            whatsappNumber(false);
          } 
        };
        document.addEventListener("mouseup", (event) => handleClickOutside(event, whatsappRef, setWhatsappNumber));
        document.addEventListener("mouseup", (event) => handleClickOutside(event, emailRef, setEmailNumber));
      }, [whatsappRef, emailRef]);
    function toggleWhatsappNumber(){
        setWhatsappNumber(!whatsappNumber);
    }
    function toggleEmailNumber(){
        setEmailNumber(!emailNumber);
    }
    return (
        <div>
            <div className="contact hidden sm:flex flex-row justify-between font-OrkneyRegular text-[#111111] h-[6rem] lg:h-[3rem] md:px-[2rem] lg:px-[6rem] xl:px-[12rem]">
                    <div className="contact__phone flex flex-1 gap-2 items-center justify-center hover:opacity-50 cursor-pointer">
                        <img  src={images.whatsapp} alt="whatsup" className='hover:opacity-50 cursor-pointer w-[25px]'/>
                        <p>+34 665487981</p>
                    </div>
                    <div className="contact__email flex-1 flex items-center justify-center gap-2 hover:opacity-50 cursor-pointer">
                        <FaEnvelope className="text-[20px]"/>
                        <p className="text-[16px] tracking-wide">xavier.figueras.garcia@gmail.com</p>
                    </div>
                    <div className="contact__social flex-1 flex justify-center md:pb-0 items-center gap-8 order-first md:order-last">  
                        <img src={images.instagram} alt="instagram" className='hover:opacity-50 cursor-pointer w-[25px]'/>          
                        <img src={images.linkedin}  alt="linkedin" className='hover:opacity-50 cursor-pointer w-[25px]'/> 
                        <img src={images.facebook}  alt="facebook" className='hover:opacity-50 cursor-pointer w-[25px] self-center'/> 
                    </div>
            </div>
            <div className="contact-mobile px-[1rem] flex sm:hidden justify-between items-end font-OrkneyRegular text-[#111111] h-[2.5rem]">
                    <div className="contact__phone flex gap-3 items-center justify-center">
                        <div ref={whatsappRef} className="flex gap-1"> 
                            <div onClick={toggleWhatsappNumber} ><img src={images.whatsapp}  alt="wahtsapp" className='hover:opacity-50 cursor-pointer w-[25px]'/></div>
                            {whatsappNumber && (
                            <div className="whatsappNumber">93888155</div>
                            )}
                        </div>
                        <div ref={emailRef} className="flex gap-1">
                            <div onClick={toggleEmailNumber} className="bg-white w-[25px] h-[18px] relative self-center">
                                <FaEnvelope className="icon text-[25px] cursor-pointer hover:opacity-50 absolute -bottom-[3px]" />
                            </div>
                            {/* <div onClick={toggleEmailNumber} ><img src={images.Email} className='hover:opacity-50 cursor-pointer w-[30px]'/></div> */}
                            {emailNumber && (
                            <div className="emailNumber">xavierfiguerassp@gmail.com</div>
                            )}
                        </div>
                    </div>
                    
                    <div className="contact__social flex justify-center md:pb-0 items-center gap-3 order-first md:order-last">  
                        <img src={images.instagram}  alt="instagram"  className='hover:opacity-50 cursor-pointer w-[25px]'/>          
                        <img src={images.linkedin}  alt="linkedin"  className='hover:opacity-50 cursor-pointer w-[25px]'/> 
                        <img src={images.facebook}  alt="facebook" className='hover:opacity-50 cursor-pointer w-[25px] self-center'/> 
                    </div>
            </div>
        </div>
    )
}
export default Contact