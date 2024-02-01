export const CookingFeature = ({title, image, content})=>{
    return(
        <div className="feature-container flex items-start justify-start bg-yellow">
                <div className="feature flex flex-col items-center">
                    <div className="feature1-image flex w-full justify-start">
                        <img src={image}  alt="feature" className="h-[400px] md:h-[400px] xl:h-[500px] object-cover w-[700px]"/>
                    </div>
                    <div className="content flex flex-col px-[2rem] text-center items-center w-full">
                        <h2 className="text-[18px] xl:text-[20px] py-2 font-OrkneyLight">{title}</h2>
                        <p className="text-[15px] leading-[32px] text-justify font-OrkneyRegular">{content}</p>
                        <div className="link flex self-end gap-[13px] items-center group">
                            <button className="leading-[44px] text-[18px] text-[#288CF9] font-OrkneyRegular group-hover:text-white opacity-70">See recipe</button>
                            <div className="arrow rotate-90 cursor-pointer ">
                                <span className="block w-[9px] h-[9px] border-t-[1px] border-l-[1px] border-[#288CF9] rotate-45 group-hover:border-white opacity-70"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export const DiningFeature = ({title, image, content})=>{
    return(
        <div className="feature-container flex items-start justify-start bg-yellow">
                <div className="feature flex flex-col items-center">
                    <div className="feature1-image flex w-full justify-start">
                        <img src={image}  alt="feature" className="h-[400px] md:h-[400px] xl:h-[540px] object-cover w-[700px]"/>
                    </div>
                    <div className="content flex flex-col px-[2rem] text-center items-center">
                        <h2 className="text-[18px] xl:text-[20px] py-2 font-OrkneyLight">{title}</h2>
                        <p className="text-[15px] leading-[32px] text-justify font-OrkneyRegular">{content}</p>
                        <div className="link flex self-end gap-[13px] items-center group">
                            <button className="leading-[44px] text-[18px] text-[#288CF9] font-OrkneyRegular group-hover:text-white opacity-70">Book the table</button>
                            <div className="arrow rotate-90 cursor-pointer ">
                                <span className="block w-[9px] h-[9px] border-t-[1px] border-l-[1px] border-[#288CF9] rotate-45 group-hover:border-white opacity-70"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
