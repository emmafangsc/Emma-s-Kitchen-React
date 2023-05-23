import images from "../constants/images";
import React from "react";
const SubHeading = ({title}) => {
    return (
        <div>
            <h1 className="font-[800] text-[36px] leading-[60px]">{title}</h1>
            <div className="line w-[500px] py-[1rem]">
                <img src={images.union} />
            </div>
        </div>
    )
}
export default SubHeading;