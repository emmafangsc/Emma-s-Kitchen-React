import images from "../constants/images";
const Footer = () => {
    return(
        <div className="wrapper px-[2rem] lg:px-[12rem] ">
            <div className="footer flex justify-between flex-col md:flex-row pt-8 border-[1px]">
                <div className="logo w-[8rem] h-[9rem]">
                    <img src={images.X}/>
                </div>
                <div className="menu leading-[3rem]">
                    <h2 className="font-[800] text-[18px] md:text-[20px]">Menu</h2>
                    <ul className="font-[400] text-[14px] md:text-[16px] list-disc">
                        <li className="cursor-pointer"><a>Home Xavier Figueras</a></li>
                        <li className="cursor-pointer"><a>Company</a></li>
                        <li className="cursor-pointer"><a>Individual</a></li>
                        <li className="cursor-pointer"><a>About me</a></li>
                        <li className="cursor-pointer"><a>Blog</a></li>
                   </ul>
                </div>
                <div className="last-post leading-[3rem]">
                    <h2 className="font-[800] text-[18px] md:text-[20px]">Last Post</h2>
                    <ul className="font-[400] text-[14px] md:text-[16px] list-disc">
                        <li className="cursor-pointer"><a>Healing Process</a></li>
                        <li className="cursor-pointer"><a>Making Your Way</a></li>
                        <li className="cursor-pointer"><a>Individual</a></li>
                        <li className="cursor-pointer"><a>The Personalities</a></li>
                        <li className="cursor-pointer"><a>Hello</a></li>
                    </ul>
                </div>
                <div className="contact-me leading-[3rem]">
                    <h2 className="font-[800] text-[18px] md:text-[20px]">Contact Me</h2>
                    <ul className="font-[400] text-[14px] md:text-[16px] list-disc">
                        <li className="cursor-pointer"><a>Write A Message</a></li>
                        <li className="cursor-pointer"><a>Wahtsapp</a></li>
                        <li className="cursor-pointer"><a>Email</a></li>
                        <li className="cursor-pointer"><a>Policy</a></li>
                        <li className="cursor-pointer"><a>Cookies</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer;