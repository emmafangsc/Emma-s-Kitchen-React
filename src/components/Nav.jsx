import {FaUserCircle, FaCaretDown, FaAngleRight, FaEnvelope, FaFacebook} from "react-icons/fa";
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
        <div className="Wrapper">
            <div className="contact flex flex-col md:flex-row justify-between text-[#111111] h-[6rem] lg:h-[3rem] md:px-[2rem] lg:px-[6rem] xl:px-[12rem] ">
                <div className="contact__social flex-1 flex justify-center  md:pb-0 items-center gap-8 ">  
                    <img src={images.instagram} className='hover:opacity-50 cursor-pointer w-[25px]'/>          
                    <img src={images.linkedin} className='hover:opacity-50 cursor-pointer w-[25px]'/> 
                    <FaFacebook className='hover:opacity-50 cursor-pointer text-[25px]'/>
                </div>
                <div className="contact__phone flex flex-1 gap-2 items-center justify-center hover:opacity-50 cursor-pointer">
                    <img  src={images.whatsapp} className='hover:opacity-50 cursor-pointer w-[25px]'/>
                    <p>+34 665487981</p>
                </div>
                <div className="contact__email flex-1 flex items-center justify-center gap-2 hover:opacity-50 cursor-pointer">
                    <FaEnvelope className="text-[20px]"/>
                    <p className="text-[16px] font-Lato tracking-wide">xavier.figueras.garcia@gmail.com</p>
                </div>
                
            </div>
            <nav className='nav flex justify-between px-[2rem] h-[6rem] md:px-[4rem] xl:px-[6rem] relative'>
                <div className="logo flex items-center w-[200px] xl:w-[300px] cursor-pointer">
                    <img src={images.newLogo} className='logo' alt="logo"/> 
                </div>
                <div className="menu hidden lg:flex justify-center items-center">
                    <ul className="flex flex-nowrap font-Lato text-[16px] xl:text-[18px]">
                        <li className=" cursor-pointer px-[1rem] hover:text-[grey] py-[2rem] font-black"><a>Home</a></li>
                        <div className="subMenu group relative" >
                            <li className=" cursor-pointer px-[1rem] hover:text-[grey] py-[2rem]"><a>Company <span className="triangle"></span></a></li>
                            <div className="courseMenu__content group-hover:block hidden absolute z-2 w-[11rem] bg-[#FFEFCD] justify-start p-[1rem] rounded-[3px]">
                                <ul>
                                    <li className="pb-[1rem] cursor-pointer hover:opacity-50 text-[16px]">Executive Coaching</li>
                                    <li className="pb-[1rem] cursor-pointer hover:opacity-50 text-[16px]">Other Course</li>
                                    <li className="cursor-pointer hover:opacity-50 text-[16px]">Other Course</li>
                                </ul>
                            </div>
                        </div>
                        <div className="subMenu group relative">
                            <li className="cursor-pointer px-[1rem] hover:text-[grey] py-[2rem]"><a>Individual<span className="triangle"></span></a></li>
                            <div className="subMenu__content group-hover:block hidden absolute w-[11rem] bg-[#FFEFCD] justify-start p-[1rem] rounded-[3px]">
                                <ul>
                                    <li className="pb-[1rem] cursor-pointer hover:opacity-50 text-[16px]">Life Coaching</li>
                                    <li className="pb-[1rem] cursor-pointer hover:opacity-50 text-[16px]">Other Course</li>
                                    <li className="cursor-pointer hover:opacity-50 text-[16px]">Other Course</li>
                                </ul>
                            </div>
                        </div>
                        <li className="cursor-pointer px-[1rem] hover:text-[grey] py-[2rem]"><a>Courses</a></li>
                        <li className="cursor-pointer px-[1rem] hover:text-[grey] py-[2rem]"><a>About me</a></li>
                        <li className="cursor-pointer px-[1rem] hover:text-[grey] py-[2rem]"><a>Blog</a></li>
                    </ul>
                </div>
                <div className="right flex items-center ">
                    <div className="login flex  px-[1rem]">
                            <div className="signUpButton bg-[black] text-[#FFDF12] py-1 px-2 text-[14px] flex justify-center shadow-md rounded cursor-pointer hover:opacity-50">Sign Up</div>
                    </div>
                    <div className="flex flex-col justify-center relative" onClick={showLanguageMenu}>
                        <div className="languageButton flex gap-[1px] justify-center items-center text-[14px] py-1 px-1 bg-[#FFDF12] text-black cursor-pointer hover:opacity-50 shadow-md rounded">
                            EN
                            <FaCaretDown />
                        </div>
                        {languageMenu && (
                            <div className="languageMenu flex-col absolute bg-[#FFEFCD] p-[1rem] top-[2rem] right-0 rounded-[10px] shadow-lg" >
                                <ul className="text-[12px]">
                                    <li className="pb-2 cursor-pointer hover:opacity-50"><a>ENGLISH</a></li>
                                    <li className="pb-2 cursor-pointer hover:opacity-50"><a>SPANISH</a></li>
                                    <li className="pb-2 cursor-pointer hover:opacity-50"><a>CATALAN</a></li>
                                    <li className="cursor-pointer hover:opacity-50"><a>VIETNAMESE</a></li>
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
            
            <div className={`overlayMenu bg-[#ff8c00] flex lg:hidden h-screen w-full p-[2rem] transition-opacity duration-500 ease-in-out ${hamburgerMenu ? "show" : "hide"}`}>
                <ul className="text-[18px] w-full">
                    <div className="flex justify-between items-center p-[1rem] border-b border-[orange] hover:opacity-50 cursor-pointer">
                        <li><a>Home</a></li>
                    </div>
                    <div className="flex justify-between items-center p-[1rem] border-b border-[orange] hover:opacity-50 cursor-pointer" onClick={showSubMenu1}>
                        <li><a>Company</a></li>
                        <FaAngleRight className="text-[15px]"/>
                    </div>
                    <div className={`subMenu px-[1rem] ${subMenu1 ? "show" : "hide"}`}>
                        <ul className="text-[16px]">
                            <li className="p-[1rem] border-b border-[orange] hover:opacity-50 cursor-pointer">Executive Coaching</li>
                            <li  className="p-[1rem] border-b border-[orange] hover:opacity-50 cursor-pointer">Other Course</li>
                            <li  className="p-[1rem] border-b border-[orange] hover:opacity-50 cursor-pointer">Other Course</li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-center p-[1rem] border-b border-[orange] hover:opacity-50 cursor-pointer" onClick={showSubMenu2}>
                        <li><a>Personal</a></li>
                        <FaAngleRight className="text-[15px]"/>
                    </div>
                    <div className={`subMenu2 px-[1rem] ${subMenu2 ? "show" : "hide"}`}>
                        <ul className="text-[16px]">
                            <li className="p-[1rem] border-b border-[orange] hover:opacity-50 cursor-pointer">Life Coaching</li>
                            <li  className="p-[1rem] border-b border-[orange] hover:opacity-50 cursor-pointer">Other Course</li>
                            <li  className="p-[1rem] border-b border-[orange] hover:opacity-50 cursor-pointer">Other Course</li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-center p-[1rem] border-b border-[orange] hover:opacity-50 cursor-pointer">
                        <li><a>About</a></li>
                    </div>
                    <div className="flex justify-between items-center p-[1rem] hover:opacity-50 cursor-pointer">
                        <li><a>Blog</a></li>
                    </div>
                </ul>
            </div>
        </div>
        
    )
}
export default Nav;
