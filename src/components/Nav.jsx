import {FaCaretDown, FaAngleRight} from "react-icons/fa";
import images from "../constants/images";
import { useState } from "react";
import React, {useRef, useEffect} from "react";
import { translations } from "../constants/languageData";

const Nav = () => {
    const [languageMenuDesktop, setLanguageMenuDesktop] = useState(false);
    const [languageMenuMobile, setLanguageMenuMobile] = useState(false);
    const refDesktop = useRef();
    const refMobile = useRef();
    const [language, setLanguage] = useState('english');
    useEffect(() => {
        const handleClickOutside = (event, ref, menu) => {
          if (!ref?.current?.contains(event.target)) {
            menu(false);
          } 
        };
        document.addEventListener("mouseup", (event) => handleClickOutside(event, refDesktop, setLanguageMenuDesktop));
        document.addEventListener("mouseup", (event) => handleClickOutside(event, refMobile, setLanguageMenuMobile));
      }, [refDesktop, refMobile]);

    function showLanguageMenuDesktop(){
        setLanguageMenuDesktop(!languageMenuDesktop);
    }
    function showLanguageMenuMobile(){
        setLanguageMenuMobile(!languageMenuMobile);
    }

    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    function showHamburgerMenu(){
        setHamburgerMenu(!hamburgerMenu);
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
            <nav className='nav hidden sm:flex justify-between px-[1rem] h-[4rem] lg:pt-12 lg:pb-8 md:px-[4rem] xl:px-[6rem] relative mt-[-5px] md:mt-[-10px]'>
                <div className="logo flex items-center text-[18px] md:text-[36px] text-black font-bold cursor-pointer">
                    My portfolio
                </div>
                <div className="menu hidden lg:flex justify-center items-center">
                    <ul className="flex flex-nowrap font-OrkneyRegular text-[16px] xl:text-[18px]">
                        <li className="cursor-pointer px-[1rem] py-[2rem] font-black custom-link1"><a>{language === 'english' ? translations.home.english : translations.home.chinese}</a></li>
                        <div className="subMenu group relative" >
                            <li className=" cursor-pointer px-[1rem] custom-link py-[2rem]"><a>{language === 'english' ? translations.menu1.english : translations.menu1.chinese} <span className="triangle"></span></a></li>
                            <div className="courseMenu__content group-hover:block hidden absolute z-2 w-[6rem] bg-[black] justify-start p-[1rem] rounded-[3px]">
                                <ul className="text-yellow ">
                                    <li className="pb-[1rem] cursor-pointer hover:text-white text-[16px]">Item1</li>
                                    <li className="pb-[1rem] cursor-pointer hover:text-white text-[16px]">Item2</li>
                                    <li className="cursor-pointer hover:text-white text-[16px]">Item3</li>
                                </ul>
                            </div>
                        </div>
                        <div className="subMenu group relative font-OrkneyRegular">
                            <li className="cursor-pointer px-[1rem] custom-link py-[2rem]"><a>{language === 'english' ? translations.menu2.english :  translations.menu2.chinese}<span className="triangle"></span></a></li>
                            <div className="subMenu__content group-hover:block hidden absolute w-[6rem] bg-[black] justify-start p-[1rem] rounded-[3px]">
                                <ul className="text-yellow">
                                    <li className="pb-[1rem] cursor-pointer hover:text-white text-[16px]">Item1</li>
                                    <li className="pb-[1rem] cursor-pointer hover:text-white text-[16px]">Item2</li>
                                    <li className="cursor-pointer hover:text-white text-[16px]">Item3</li>
                                </ul>
                            </div>
                        </div>
                        <li className="cursor-pointer px-[1rem] custom-link py-[2rem]"><a>{language === 'english' ? translations.aboutme.english : translations.aboutme.chinese}</a></li>
                        <li className="cursor-pointer px-[1rem] custom-link py-[2rem]"><a>{language === 'english' ? translations.blog.english : translations.blog.chinese}</a></li>
                    </ul>
                </div>
                <div className="right flex items-center font-OrkneyRegular">
                    <div className="login flex  px-[1rem]">
                            <div className="signUpButton bg-black text-yellow hover:bg-yellow hover:text-black py-1 px-2  w-[5rem] text-[14px] flex justify-center shadow-md rounded cursor-pointer">{language === 'english' ? translations.signup.english : translations.signup.chinese}</div>
                    </div>
                    <div ref={refDesktop} className="flex flex-col justify-center relative">
                        <div className="languageButton flex gap-[1px] justify-center items-center text-[14px] w-[3rem] py-1 px-1 bg-yellow text-black hover:bg-black hover:text-yellow cursor-pointer shadow-md rounded" onClick={showLanguageMenuDesktop}>
                        {language === 'english' ? translations.languagebutton.english : translations.languagebutton.chinese}
                            <FaCaretDown />
                        </div>
                        {languageMenuDesktop && (
                            <div className="languageMenu flex-col absolute bg-black p-[1rem] top-[2rem] right-0 rounded-[10px] shadow-lg w-[6rem]" >
                                <ul className="text-[12px] text-yellow text-center">
                                    <li className="pb-2 cursor-pointer hover:text-white" onClick={()=>setLanguage('english')} ><a>{language === 'english' ? translations.english.english : translations.english.chinese}</a></li>
                                    <li className="pb-2 cursor-pointer hover:text-white" onClick={()=>setLanguage('chinese')}><a>{language === 'english' ? translations.chinese.english : translations.chinese.chinese}</a></li>                                        
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="hamburgerButton flex flex-col lg:hidden self-center pl-[1rem]" ref={buttonRef} onClick={()=>{toggleButton(); showHamburgerMenu(); closeSubmenu()}} >
                        <span  className="bg-black h-[3px] w-[25px] mb-[5px] relative ease-in-out duration-300"></span>
                        <span  className="bg-black h-[3px] w-[25px] mb-[5px] relative ease-in-out duration-300"></span>
                        <span  className="bg-black h-[3px] w-[25px] relative ease-in-out duration-300"></span>
                    </div>
                </div>
            </nav>
            <nav className='nav-mobile flex sm:hidden justify-between px-[1rem] py-[0.5rem] relative '>
                <div className="flex items-center font-OrkneyRegular">
                    <div className="hamburgerButton flex flex-col self-center cursor-pointer" ref={buttonRef} onClick={()=>{toggleButton(); showHamburgerMenu(); closeSubmenu()}} >
                        <span  className="bg-black h-[3px] w-[25px] mb-[5px] relative ease-in-out duration-300"></span>
                        <span  className="bg-black h-[3px] w-[25px] mb-[5px] relative ease-in-out duration-300"></span>
                        <span  className="bg-black h-[3px] w-[25px] relative ease-in-out duration-300"></span>
                    </div>
                    <div className="login flex pl-[1rem] cursor-pointer">
                        <img src={images.signIn} alt="signIn" className="w-[30px]"/>
                    </div>
                </div>
                <div className="logo flex items-center text-[20px] text-black font-bold cursor-pointer">
                    My portfolio
                </div>
                <div ref={refMobile} className="flex flex-col justify-center relative" >
                        <div className="languageButton flex gap-[1px] justify-center items-center text-[14px] w-[2.5rem] py-1 px-1 bg-yellow text-black hover:bg-black hover:text-yellow cursor-pointer shadow-md rounded" onClick={showLanguageMenuMobile}>
                        {language === 'english' ? translations.languagebutton.english :  translations.languagebutton.chinese}
                            <FaCaretDown />
                        </div>
                        {languageMenuMobile && (
                            <div className="languageMenu flex-col absolute bg-black p-[1rem] top-[3rem] right-0 rounded-[10px] w-[7rem]" >
                                <ul className="text-[12px] text-yellow">
                                    <li className="pb-2 cursor-pointer hover:text-white" onClick={()=>setLanguage('english')}><a>{language === 'english' ? translations.english.english : translations.english.chinese}</a></li>
                                    <li className="pb-2 cursor-pointer hover:text-white" onClick={()=>setLanguage('chinese')}><a>{language === 'english' ? translations.chinese.english : translations.chinese.chinese}</a></li>
                                </ul>
                            </div>
                        )}
                    </div>
            </nav>
            
            <div className={`overlayMenu bg-black font-OrkneyRegular flex lg:hidden h-screen w-full px-[2rem] transition-opacity duration-500 ease-in-out ${hamburgerMenu ? "show" : "hide"}`}>
                <ul className="text-[18px] w-full text-yellow">
                    <div className="flex justify-between items-center py-6 border-b border-yellow border-opacity-50 hover:text-white cursor-pointer">
                        <li><a>{language === 'english' ? translations.home.english : translations.home.chinese}</a></li>
                    </div>
                    <div className="flex justify-between items-center py-6 border-b border-yellow border-opacity-50 hover:text-white cursor-pointer" onClick={showSubMenu1}>
                        <li><a>{language === 'english' ? translations.menu1.english : translations.menu1.chinese}</a></li>
                        <FaAngleRight className="text-[15px]"/>
                    </div>
                    <div className={`subMenu px-[1rem] ${subMenu1 ? "show" : "hide"}`}>
                        <ul className="text-[16px]">
                            <li className="p-[1rem] border-b border-yellow border-opacity-50 hover:text-white cursor-pointer">Item1</li>
                            <li  className="p-[1rem] border-b border-yellow border-opacity-50 hover:text-white cursor-pointer">Item2</li>
                            <li  className="p-[1rem] border-b border-yellow border-opacity-50 hover:text-white cursor-pointer">Item3</li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-center py-6 border-b border-yellow border-opacity-50 hover:text-white cursor-pointer" onClick={showSubMenu2}>
                        <li><a>{language === 'english' ? translations.menu2.english : translations.menu2.chinese}</a></li>
                        <FaAngleRight className="text-[15px]"/>
                    </div>
                    <div className={`subMenu2 px-[1rem] ${subMenu2 ? "show" : "hide"}`}>
                        <ul className="text-[16px]">
                            <li className="p-[1rem] border-b border-yellow border-opacity-50 hover:text-white cursor-pointer">Item1</li>
                            <li  className="p-[1rem] border-b border-yellow border-opacity-50 hover:text-white cursor-pointer">Item2</li>
                            <li  className="p-[1rem] border-b border-yellow border-opacity-50 hover:text-white cursor-pointer">Item3</li>
                        </ul>
                    </div>
                    
                    <div className="flex justify-between items-center py-6 border-b border-yellow border-opacity-50 hover:text-white cursor-pointer">
                        <li><a>{language === 'english' ? translations.aboutme.english : translations.aboutme.chinese}</a></li>
                    </div>
                    <div className="flex justify-between items-center py-6 hover:text-white cursor-pointer">
                        <li><a>{language === 'english' ? translations.blog.english : translations.blog.chinese}</a></li>
                    </div>
                </ul>
            </div>
            
        </div>
        
    )
}
export default Nav;
