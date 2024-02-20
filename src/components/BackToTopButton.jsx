import React from "react";
import { useState, useEffect } from "react";

const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>150){
                setBackToTopButton(true)
            } else{
                setBackToTopButton(false);
            }
        })
    }, [])

    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {backToTopButton && (
            <div onClick={scrollUp} className="scrollUp flex self-end mt-4 mb-16 cursor-pointer fixed z-30 -bottom-12 right-0 sm:right-6">
                <button>
                    <div className="w-[42px] h-[48px] bg-yellow border-[1px] border-[black] border-b-[5px] flex flex-col items-center justify-center">
                            <div className="block w-[18px] h-[18px]  border-t-[3px] border-l-[3px] border-black transform rotate-45 translate-y-1/2 mt-[2px]"></div>
                            <div className="block w-[18px] h-[18px]  border-t-[3px] border-l-[3px] border-black opacity-60 transform rotate-45 mt-[3px]"></div>
                    </div>
                </button>
            </div>
        )}
        </div>
    
        )
}
export default BackToTopButton;

