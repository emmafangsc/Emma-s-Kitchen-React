import images from "../constants/images";
const Footer = () => {
    return(
        <div>
            <div className="yellow-line w-[90%] xl:w-[990px] h-[1px] bg-[#FFFB23] m-auto"></div>
            <div className="footer h-[183px] flex justify-center items-center relative">
                <div className="content w-[750px] flex flex-col justify-between font-OrkneyRegular px-[1rem]">
                    <div className="content-top flex justify-center">
                        <ul className="flex text-[12px] md:text-[15px] gap-[12px] md:gap-[30px] gap-y-0 md:gap-[60px] flex-wrap leading-[32px]">
                            <li className="cursor-pointer hover:opacity-50">COOKIE POLICY</li>
                            <li className="cursor-pointer hover:opacity-50">PRIVACY POLICY</li>
                            <li className="cursor-pointer hover:opacity-50">DISCLAIMER</li>
                            <li className="cursor-pointer hover:opacity-50">LOGIN</li>
                        </ul>
                    </div>
                    <p className="content-bottom text-[12px] md:text-[15px] leading-[32px] text-center my-5">
                    Copyright © 2023 emmafang. All rights reserved.

                    </p>
                </div>
                <div className="overlayBG absolute bottom-0 w-full">
                    <img src={images.footerBG} alt="footer" className="w-full" />

                </div>
            </div>
        </div>
    )
}
export default Footer;


