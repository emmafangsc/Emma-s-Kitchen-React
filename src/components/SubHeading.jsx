import images from "../constants/images";
import React from "react";
const SubHeading = ({title}) => {
    return (
        <div>
            <h1 className="font-[800] text-[24px] md:text-[36px] leading-[60px]">{title}</h1>
            <div className="line py-[1rem]">
                <img src={images.union} width="550px" alt="union"/>
            </div>
        </div>
    )
}
export default SubHeading;