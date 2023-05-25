import images from "../constants/images";
const Footer = () => {
    return(
        <div className="footer-container px-[2rem] lg:px-[12rem] border-black border-[1px]">
            <div className="footer flex justify-between flex-col md:flex-row pt-8">
                <div className="logo w-[8rem] h-[9rem]">
                    <img src={images.X}/>
                </div>
                <div className="menu leading-[3rem]">
                    <h2 className="font-[800] text-[18px] md:text-[20px]">Menu</h2>
                    <ul className="font-[400] text-[14px] md:text-[16px] list-disc">
                        <li><a>Home Xavier Figueras</a></li>
                        <li><a>Company</a></li>
                        <li><a>Individual</a></li>
                        <li><a>About me</a></li>
                        <li><a>Blog</a></li>
                   </ul>
                </div>
                <div className="last-post leading-[3rem]">
                    <h2 className="font-[800] text-[18px] md:text-[20px]">Last Post</h2>
                    <ul className="font-[400] text-[14px] md:text-[16px] list-disc">
                        <li><a>Healing Process</a></li>
                        <li><a>Making Your Way</a></li>
                        <li><a>Individual</a></li>
                        <li><a>The Personalities</a></li>
                        <li><a>Hello</a></li>
                    </ul>
                </div>
                <div className="contact-me leading-[3rem]">
                    <h2 className="font-[800] text-[18px] md:text-[20px]">Contact Me</h2>
                    <ul className="font-[400] text-[14px] md:text-[16px] list-disc">
                        <li><a>Write A Message</a></li>
                        <li><a>Wahtsapp</a></li>
                        <li><a>Email</a></li>
                        <li><a>Policy</a></li>
                        <li><a>Cookies</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer;