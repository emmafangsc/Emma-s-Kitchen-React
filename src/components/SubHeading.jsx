import images from "../constants/images";
import React from "react";
const SubHeading = ({title}) => {
    return (
        <div>
            <h1 className="font-OrkneyBold text-[18px] md:text-[36px] leading-[4rem]">{title}</h1>
            <div className="line pb-[2rem]">
                <img src={images.union} width="550px" alt="union"/>
            </div>
        </div>
    )
}
export default SubHeading;