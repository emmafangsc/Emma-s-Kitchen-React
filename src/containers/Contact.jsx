import images from "../constants/images";
// import styles from "../constants/style";
const Contact = () => {
    return (
        <div className="contactSection">
            <div className="contact-banner relative h-[300px] flex">
                    <img src={images.connect} alt="headerBG" className="w-full object-cover  "/>
                    <div className="overlayBG w-full h-full bg-black absolute opacity-10"></div>
                    <div className="flex items-center w-full h-full absolute px-[1rem] md:px-[4rem] xl:px-[6rem] ">
                        <h2 className="text-white font-bold text-[32px] md:text-[48px] font-OrkneyRegular text-left">Lets Connect!</h2>
                    </div>
            </div>
            <div className="contact-content flex flex-col md:flex-row gap-[2rem] md:gap-[10rem] pt-[2rem] md:items-center md:h-[400px] bg-yellow  px-[1rem] md:px-[4rem] xl:px-[6rem]">
                
                <div className="text items-center ">
                    <h3 className="text-[24px] font-OrkneyBold">Emma's Kitchen</h3>
                    <div className="text font-[400] text-[14px] md:text-[18px] text-start font-OrkneyLight">
                        ​<p>If you have any questions about our events, courses or opening hours, you are always welcome to contact us below.</p>
                        ​ <p>We are looking forward to hear from you.</p>
                        <div className="contact__social flex justify-start gap-10 pt-8">  
                            <img src={images.instagram} alt="instagram" className='hover:opacity-50 cursor-pointer w-[30px]'/>          
                            <img src={images.linkedin}  alt="linkedin" className='hover:opacity-50 cursor-pointer w-[30px]'/> 
                            <img src={images.facebook}  alt="facebook" className='hover:opacity-50 cursor-pointer w-[30px] self-center'/> 
                            </div>
                    </div>
                    
                </div>
                <div className="contact-info text font-[400] text-[14px] md:text-[18px] text-start font-OrkneyLight">
                    <p className="font-OrkneyBold">Call us directly</p>
                    <p>Telephone: +45 99999999</p>

                    ​<p className="font-OrkneyBold">Send an email</p>
                    <p>emmafang@gmail.com</p>

                    ​<p className="font-OrkneyBold">Address information</p>
                    <p>Rued Langgaards Vej, 2300 Copenhagen</p>
                </div>


            </div>

        </div>
    )
}
export default Contact;