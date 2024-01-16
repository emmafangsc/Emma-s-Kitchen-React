import images from "../constants/images";
import React from "react";
export const SubHeading1 = ({title}) => {
    return (
        <div>
            <h1 className="font-OrkneyBold text-[18px] md:text-[36px] leading-relaxed pt-4 lg:pt-0">{title}</h1>
            <div className="line pb-[1.5rem]">
                <img src={images.union}  alt="union"/>
            </div>
        </div>
    )
}
export const SubHeading2 = ({title}) => {
    return (
        <div>
            <h2 className="font-OrkneyRegular text-[18px] md:text-[34px] pt-4 lg:pt-0 pb-[1.5rem]">{title}</h2>
        </div>
    )
}

