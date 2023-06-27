import {FaEnvelope} from "react-icons/fa";
import images from "../constants/images";

const Contact = () => {
    return (
        <div>
            <div className="contact hidden sm:flex flex-row justify-between font-OrkneyRegular text-[#111111] h-[6rem] lg:h-[3rem] md:px-[2rem] lg:px-[6rem] xl:px-[12rem]">
                    <div className="contact__phone flex flex-1 gap-2 items-center justify-center hover:opacity-50 cursor-pointer">
                        <img  src={images.whatsapp} className='hover:opacity-50 cursor-pointer w-[25px]'/>
                        <p>+34 665487981</p>
                    </div>
                    <div className="contact__email flex-1 flex items-center justify-center gap-2 hover:opacity-50 cursor-pointer">
                        <FaEnvelope className="text-[20px]"/>
                        <p className="text-[16px] tracking-wide">xavier.figueras.garcia@gmail.com</p>
                    </div>
                    <div className="contact__social flex-1 flex justify-center md:pb-0 items-center gap-8 order-first md:order-last">  
                        <img src={images.instagram} className='hover:opacity-50 cursor-pointer w-[25px]'/>          
                        <img src={images.linkedin} className='hover:opacity-50 cursor-pointer w-[25px]'/> 
                        <img src={images.facebook} className='hover:opacity-50 cursor-pointer w-[25px] self-center'/> 
                    </div>
            </div>
            <div className="contact-mobile px-[1rem] flex sm:hidden justify-between font-OrkneyRegular text-[#111111] h-[3rem] border-[blue] border-[1px]">
                    <div className="contact__phone flex gap-6 items-center justify-center hover:opacity-50 cursor-pointer">
                        <img  src={images.whatsapp} className='hover:opacity-50 cursor-pointer w-[25px]'/>
                        <FaEnvelope className="text-[25px]"/>
                    </div>
                    
                    <div className="contact__social  flex justify-center md:pb-0 items-center gap-6 order-first md:order-last">  
                        <img src={images.instagram} className='hover:opacity-50 cursor-pointer w-[25px]'/>          
                        <img src={images.linkedin} className='hover:opacity-50 cursor-pointer w-[25px]'/> 
                        <img src={images.facebook} className='hover:opacity-50 cursor-pointer w-[25px] self-center'/> 
                    </div>
            </div>
        </div>
    )
}
export default Contact