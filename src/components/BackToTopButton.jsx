import React from "react";
import { useState, useEffect } from "react";
import images from "../constants/images";

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
            <div onClick={scrollUp} className="scrollUp flex sm:hidden self-end mt-4 mb-16 cursor-pointer fixed z-30 -bottom-12 right-0">
                <button><img src={images.scrollUp} alt="scrollUp Button"/></button>
            </div>
        )}
        </div>
    
        )
}
export default BackToTopButton;

