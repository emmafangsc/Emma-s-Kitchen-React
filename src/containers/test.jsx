import {FaUserCircle, FaCaretDown, FaAngleRight, FaEnvelope, FaFacebook} from "react-icons/fa";
import images from "../constants/images";
import { useState } from "react";
import React, {useRef, useEffect} from "react";
const Nav = () => {
    const [languageMenuDesktop, setLanguageMenuDesktop] = useState(false);
    const [languageMenuMobile, setLanguageMenuMobile] = useState(false);
    const refDesktop = useRef(); 
    const refMobile = useRef(); 
    useEffect(() => {
        const handleClickOutside = (event, ref, menu) => { // add a menu parameter
          if (!ref?.current?.contains(event.target)) {
            menu(false); // set the menu to false
          } 
        };
        document.addEventListener("mouseup", (event) => handleClickOutside(event, refDesktop, setLanguageMenuDesktop)); // pass the setLanguageMenuDesktop as an argument
        document.addEventListener("mouseup", (event) => handleClickOutside(event, refMobile, setLanguageMenuMobile)); // pass the setLanguageMenuMobile as an argument
      }, [refDesktop, refMobile]);


    function showLanguageMenuDesktop(){
        setLanguageMenuDesktop(!languageMenuDesktop);
    }
    function showLanguageMenuMobile(){
        setLanguageMenuMobile(!languageMenuMobile);
    }
    return (
        <div className="navWrapper">
            <nav className='navDesktop hidden sm:flex justify-between px-[1rem] h-[4rem] lg:h-[6rem] md:px-[4rem] xl:px-[6rem] relative'>
                <div className="right flex items-center font-OrkneyRegular">
                    
                    <div ref={refDesktop} className="flex flex-col justify-center relative" onClick={showLanguageMenuDesktop}>
                        <div className="languageButtonDesktop flex gap-[1px] justify-center items-center text-[14px] py-1 px-1 bg-yellow text-black hover:bg-black hover:text-yellow cursor-pointer shadow-md rounded">
                            EN
                            <FaCaretDown />
                        </div>
                        {languageMenuDesktop && (
                            <div className="languageMenu flex-col absolute bg-black p-[1rem] top-[2rem] right-0 rounded-[10px] shadow-lg" >
                                <ul className="text-[12px] text-yellow">
                                    <li className="pb-2 cursor-pointer hover:text-white"><a>ENGLISH</a></li>
                                    
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <nav className='navMobile flex sm:hidden justify-between px-[1rem] py-[1rem] relative'>
                <div className="flex items-center font-OrkneyRegular">                    
                </div>
                <div className="logo flex items-center w-[10rem] cursor-pointer">
                    <img src={images.newLogo} className='logo' alt="logo"/> 
                </div>
                <div ref={refMobile} className="flex flex-col justify-center relative" onClick={showLanguageMenuMobile}>
                        <div className="languageButtonMobile flex gap-[1px] justify-center items-center text-[14px] py-1 px-1 bg-yellow text-black hover:bg-black hover:text-yellow cursor-pointer shadow-md rounded">
                            EN
                            <FaCaretDown />
                        </div>
                        {languageMenuMobile && (
                            <div className="languageMenu flex-col absolute bg-black p-[1rem] top-[3rem] right-0 rounded-[10px]" >
                                <ul className="text-[12px] text-yellow">
                                    <li className="pb-2 cursor-pointer hover:text-white"><a>ENGLISH</a></li>
                                    
                                </ul>
                            </div>
                        )}
                    </div>
            </nav>            
        </div>
        
    )
}
export default Nav;
