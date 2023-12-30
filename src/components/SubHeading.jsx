import images from "../constants/images";
import React from "react";
const SubHeading = ({title}) => {
    return (
        <div>
            <h1 className="font-OrkneyBold text-[18px] md:text-[36px] leading-relaxed pt-4 lg:pt-0">{title}</h1>
            <div className="line pb-[1.5rem]">
                <img src={images.union}  alt="union"/>
            </div>
        </div>
    )
}
export default SubHeading;