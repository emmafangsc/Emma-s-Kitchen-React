import Feature from "../components/Feature";
// import images from "../constants/images";
import { features } from "../constants/data";
import React, { useState } from 'react';

const Features = () => {
    const [startIndex, setStartIndex] = useState(0);

    const Prev = () => {
        setStartIndex(startIndex - 3);
    }

    const Next = () => {
        setStartIndex(startIndex + 3);
    }
    // const images = features.image;
    const visibleFeatures = features.slice(startIndex, startIndex + 3);
    return (
        <div className="features">
            <div className=" pt-4 lg:pt-0  pb-16">
             <h2 className="font-OrkneyRegular text-[18px] md:text-[36px] text-center">Sichuan Food Inspirations</h2>   
            </div>
            <div className="flex link-wrapper justify-end">
                <div className="link inline-flex gap-[13px] pb-4 pr-4 ">
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
                    {startIndex + 3 < features.length ? (
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
            <div className="features flex flex-col lg:flex-row gap-[30px] justify-start items-start px-4 w-full overflow-hidden">
            {visibleFeatures.map((feature, index)=>(
                    <div >
                    <Feature title={feature.title} image={feature.image} content={feature.content}/>
                    </div>
                    ))}
            </div>
        </div>
    )   
}
export default Features;