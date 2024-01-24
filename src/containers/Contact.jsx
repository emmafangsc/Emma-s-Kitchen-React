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
            <div className="contact-content flex flex-col md:flex-row gap-[2rem] md:gap-[10rem] py-[2rem] md:items-center md:h-[400px] bg-yellow  px-[1rem] md:px-[4rem] xl:px-[6rem]">
                
                <div className="text items-center ">
                    <h3 className="text-[24px] font-OrkneyBold">Emma's Kitchen</h3>
                    <div className="text font-[400] text-[14px] md:text-[18px] text-start font-OrkneyLight">
                        ​<p>If you have any questions about our events, courses or opening hours, you are always welcome to contact us below.</p>
                        ​ <p>We are looking forward to hear from you.</p>
                        <div className="contact__social flex justify-start gap-10 pt-8">  
                        <a href="https://www.instagram.com/emmafangsc/" className="hover:opacity-[0.5]"><img src={images.instagram} alt="instagram" className='hover:opacity-50 cursor-pointer w-[30px]'/></a>     
                        <a href="https://www.linkedin.com/in/emma-fang-aa0770197/" className="hover:opacity-[0.5]"><img src={images.linkedin}  alt="linkedin" className='hover:opacity-50 cursor-pointer w-[30px]'/></a>  
                        <a href="https://www.facebook.com/people/Emma-Fang/pfbid0qZPQmmqWSubLdy6UWjyPP7DhXLqQWA2rXD1YTT5LMwur9wJQs4q53cKvN4rCZMLvl/?mibextid=LQQJ4d" className="hover:opacity-[0.5]"><img src={images.facebook}  alt="facebook" className='hover:opacity-50 cursor-pointer w-[30px] self-center'/></a> 
                            </div>
                    </div>
                    
                </div>
                <div className="contact-info text font-[400] text-[14px] md:text-[18px] text-start font-OrkneyLight">
                    <p className="font-OrkneyBold">Call us directly</p>
                    <a href="https://api.whatsapp.com/send?phone=4593888155" className="hover:opacity-[0.5]"><p className="cursor-pointer hover:text-white">Telephone: +45 99999999</p></a>

                    ​<p className="font-OrkneyBold">Send an email</p>
                    <a href="mailto:emmafang@gmail.com"><p className="cursor-pointer hover:text-white">emmafang@gmail.com</p></a>

                    ​<p className="font-OrkneyBold">Address information</p>
                    <a href="https://www.google.com/maps/place/Rued Langgaards Vej"><p className="cursor-pointer hover:text-white">Rued Langgaards Vej, 2300 Copenhagen</p></a>
                </div>


            </div>

        </div>
    )
}
export default Contact;