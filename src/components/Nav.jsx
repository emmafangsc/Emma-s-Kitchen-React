import { FaPhoneAlt, FaFacebookF, FaUserCircle, FaCaretDown, FaAngleRight, FaEnvelope} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import images from "../constants/images";
import { useState } from "react";
import React, {useRef} from "react";

const Nav = () => {
    const [languageMenu, setLanguageMenu] = useState(false);
    function showLanguageMenu(){
        setLanguageMenu(!languageMenu);
    }

    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    function showHamburgerMenu(){
        setHamburgerMenu(!hamburgerMenu);
    }

    function closeLanguageMenu(){
        setLanguageMenu(false);
    }

    const [isX, setIsX] = useState(false);
    const buttonRef = useRef(null);
    function toggleButton(){
        setIsX(!isX);
        const button = buttonRef.current;
        button.classList.toggle('open');
    }
    const [subMenu1, setSubMenu1] = useState(false);
    function showSubMenu1(){
        setSubMenu1(!subMenu1);
    }
    const [subMenu2, setSubMenu2] = useState(false);
    function showSubMenu2(){
        setSubMenu2(!subMenu2);
    }
     function closeSubmenu(){
        setSubMenu1(false);
        setSubMenu2(false);
     }
    
    return (
        <div>
            <div className="contact flex flex-col  md:flex-row justify-between bg-[#fef84c] text-[#111111] h-[6rem] md:h-[3rem] px-0 md:px-[10rem] ">
                <div className="contact__phone flex flex-1 gap-2 items-center justify-center hover:opacity-[0.5] cursor-pointer">
                    <FaPhoneAlt className="text-[20px]"/>
                    <p>+34 665487981</p>
                </div>
                <div className="contact__email flex-1 flex items-center justify-center gap-2 hover:opacity-[0.5] cursor-pointer">
                    <FaEnvelope className="text-[20px]"/>
                    <p className="text-[16px] font-Lato tracking-wide">xavier.figueras.garcia@gmail.com</p>
                </div>
                <div className="contact__social flex-1 flex justify-center  md:pb-0 items-center gap-8 ">            
                    <RiWhatsappFill className="hover:opacity-[0.5] cursor-pointer text-[25px]"/>
                    <AiFillInstagram className="hover:opacity-[0.5] cursor-pointer text-[25px]"/>
                    <FaFacebookF className="hover:opacity-[0.5] cursor-pointer  text-[20px]"/>
                </div>
            </div>
            <nav className='nav flex justify-between px-[2rem] h-[6rem] lg:px-[4rem] relative bg-navBackground bg-cover'>
                <div className="logo flex">
                    <img src={images.Logo} className='logo' alt="logo" /> 
                </div>
                <div className="menu hidden lg:flex justify-center items-center">
                    <ul className="flex flex-nowrap font-Lato">
                        <li className="text-[18px] cursor-pointer px-[1rem] hover:text-[grey] py-[2rem]"><a>Home</a></li>
                        <div className="subMenu group relative" >
                            <li className="text-[18px] cursor-pointer px-[1rem] hover:text-[grey] py-[2rem]"><a>Company <span className="triangle"></span></a></li>
                            <div className="courseMenu__content group-hover:block hidden absolute w-[11rem] bg-[#FFEFCD] justify-start p-[1rem] rounded-[3px]">
                                <ul>
                                    <li className="pb-[1rem] cursor-pointer hover:opacity-[0.5] text-[16px]">Executive Coaching</li>
                                    <li className="pb-[1rem] cursor-pointer hover:opacity-[0.5] text-[16px]">Other Course</li>
                                    <li className="cursor-pointer hover:opacity-[0.5] text-[16px]">Other Course</li>
                                </ul>
                            </div>
                        </div>
                        <div className="subMenu group relative">
                            <li className="text-[18px] cursor-pointer px-[1rem] hover:text-[grey] py-[2rem]"><a>Personal<span className="triangle"></span></a></li>
                            <div className="subMenu__content group-hover:block hidden absolute w-[11rem] bg-[#FFEFCD] justify-start p-[1rem] rounded-[3px]">
                                <ul>
                                    <li className="pb-[1rem] cursor-pointer hover:opacity-[0.5] text-[16px]">Life Coaching</li>
                                    <li className="pb-[1rem] cursor-pointer hover:opacity-[0.5] text-[16px]">Other Course</li>
                                    <li className="cursor-pointer hover:opacity-[0.5] text-[16px]">Other Course</li>
                                </ul>
                            </div>
                        </div>
                        <li className="text-[18px] cursor-pointer px-[1rem] hover:text-[grey] py-[2rem]"><a>About</a></li>
                        <li className="text-[18px] cursor-pointer px-[1rem] hover:text-[grey] py-[2rem]"><a>Blog</a></li>
                    </ul>
                </div>
                <div className="right flex items-center ">
                    <div className="login flex  px-[1rem]">
                            <FaUserCircle className="text-[30px] cursor-pointer"/>
                    </div>
                    <div className="flex flex-col justify-center relative" onClick={showLanguageMenu}>
                        <div className="languageButton flex gap-[1px] justify-center items-center w-[4rem] cursor-pointer">
                            EN
                            <FaCaretDown />
                        </div>
                        {languageMenu && (
                            <div className="languageMenu flex-col absolute bg-[#FFEFCD] p-[1rem] top-[2rem] right-0 rounded-[10px] shadow-lg" >
                                <ul className="text-[12px]">
                                    <li className="pb-2 cursor-pointer hover:opacity-[0.5]"><a>ENGLISH</a></li>
                                    <li className="pb-2 cursor-pointer hover:opacity-[0.5]"><a>SPANISH</a></li>
                                    <li className="pb-2 cursor-pointer hover:opacity-[0.5]"><a>CATALAN</a></li>
                                    <li className="cursor-pointer hover:opacity-[0.5]"><a>VIETNAMESE</a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="hamburgerButton flex flex-col lg:hidden self-center pl-[1rem]" ref={buttonRef} onClick={()=>{toggleButton(); showHamburgerMenu(); closeLanguageMenu(); closeSubmenu()}} >
                        <span  className="bg-black h-[3px] w-[25px]  mb-[5px] relative ease-in-out duration-300"></span>
                        <span  className="bg-black h-[3px] w-[25px] mb-[5px] relative ease-in-out duration-300"></span>
                        <span  className="bg-black h-[3px] w-[25px]   relative ease-in-out duration-300"></span>
                    </div>
                </div>
            </nav>
            <div className={`overlayMenu bg-[#ff8c00] flex lg:hidden h-screen w-full p-[2rem] transition-opacity duration-500 ease-in-out ${hamburgerMenu ? "opacity-100" : "opacity-0"}`}>
                <ul className="text-[18px] w-full">
                    <div className="flex justify-between items-center p-[1rem] border-b border-[orange] hover:opacity-[0.5] cursor-pointer">
                        <li><a>Home</a></li>
                    </div>
                    <div className="flex justify-between items-center p-[1rem] border-b border-[orange] hover:opacity-[0.5] cursor-pointer" onClick={showSubMenu1}>
                        <li><a>Company</a></li>
                        <FaAngleRight className="text-[15px]"/>
                    </div>
                    <div className={`subMenu px-[1rem] ${subMenu1 ? "show" : "hide"}`}>
                        <ul className="text-[16px]">
                            <li className="p-[1rem] border-b border-[orange] hover:opacity-[0.5] cursor-pointer">Executive Coaching</li>
                            <li  className="p-[1rem] border-b border-[orange] hover:opacity-[0.5] cursor-pointer">Other Course</li>
                            <li  className="p-[1rem] border-b border-[orange] hover:opacity-[0.5] cursor-pointer">Other Course</li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-center p-[1rem] border-b border-[orange] hover:opacity-[0.5] cursor-pointer" onClick={showSubMenu2}>
                        <li><a>Personal</a></li>
                        <FaAngleRight className="text-[15px]"/>
                    </div>
                    <div className={`subMenu2 px-[1rem] ${subMenu2 ? "show" : "hide"}`}>
                        <ul className="text-[16px]">
                            <li className="p-[1rem] border-b border-[orange] hover:opacity-[0.5] cursor-pointer">Life Coaching</li>
                            <li  className="p-[1rem] border-b border-[orange] hover:opacity-[0.5] cursor-pointer">Other Course</li>
                            <li  className="p-[1rem] border-b border-[orange] hover:opacity-[0.5] cursor-pointer">Other Course</li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-center p-[1rem] border-b border-[orange] hover:opacity-[0.5] cursor-pointer">
                        <li><a>About</a></li>
                    </div>
                    <div className="flex justify-between items-center p-[1rem] hover:opacity-[0.5] cursor-pointer">
                        <li><a>Blog</a></li>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default Nav;
