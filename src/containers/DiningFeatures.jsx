import {DiningFeature} from "../components/Feature";
// import images from "../constants/images";
import { diningFeatures } from "../constants/data";
import React, { useState } from 'react';

const Features = () => {
    const [startIndex, setStartIndex] = useState(0);

    const Prev = () => {
        if (window.innerWidth >= 1024) {
            setStartIndex(startIndex - 3);
        } else {
            setStartIndex(startIndex - 1);
        }
        
    }
    const Next = () => {
        if (window.innerWidth >= 1024) {
            setStartIndex(startIndex + 3);
        } else {
            setStartIndex(startIndex + 1);
        }
    }
    const visibleFeatures = window.innerWidth >= 1024
    ? diningFeatures.slice(startIndex, startIndex + 3)
    : diningFeatures.slice(startIndex, startIndex + 1);

    return (
        <div className="flex flex-col features px-[1rem] md:px-[4rem] xl:px-[6rem]">
            <div className="pt-4 lg:pt-0">
                <h2 className="font-OrkneyRegular text-[18px] md:text-[34px] pt-4 lg:pt-0 text-center">Sichuan Food Inspirations</h2>
            </div>
            <div className="flex link-wrapper justify-end">
                <div className="link inline-flex gap-[13px] pb-4">
                    {startIndex > 0 ? (
                        <div className="leftArrow rotate-90 cursor-pointer" onClick={Prev}>
                            <span className="block w-[12px] h-[12px] border-b-[1px] border-r-[1px] border-black rotate-45 hover:border-grey"></span>
                        </div>
                    ) : (
                        <div className="leftArrow rotate-90 cursor-pointer">
                            <span className="block w-[12px] h-[12px] border-b-[1px] border-r-[1px] border-beige rotate-45 "></span>
                        </div>
                    )
                    }
                    {(window.innerWidth >= 1024 ? startIndex + 3 : startIndex + 1) < diningFeatures.length ? (
                        <div className="rightArrow rotate-90 cursor-pointer" onClick={Next}>
                            <span className="block w-[12px] h-[12px] border-t-[1px] border-l-[1px] border-black rotate-45 hover:border-grey"></span>
                        </div>
                    ) : (
                        <div className="rightArrow rotate-90 cursor-pointer">
                            <span className="block w-[12px] h-[12px] border-t-[1px] border-l-[1px] border-beige rotate-45"></span>
                        </div>
                    )
                    }
                </div>
            </div>
            <div className="features flex flex-col lg:flex-row gap-[30px] justify-start items-start w-full overflow-hidden ">
            {visibleFeatures.map((feature, index)=>(
                    <div key={feature.id}>
                    <DiningFeature title={feature.title} image={feature.image} content={feature.content}/>
                    </div>
                    ))}
            </div>
        </div>
    )   
}
export default Features;