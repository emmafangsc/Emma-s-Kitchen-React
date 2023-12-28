const TestimonialCard = ({title, content})=>{
    
    return(
                <div className="testimonial flex self-center m-auto p-[2rem] md:p-[6rem] bg-[teal] justify-center items-center w-full max-w-[800px] h-[600px] rounded-xl">
                   
                    <div className="content flex flex-col text-center items-center h-full">
                        <h2 className="text-[30px] py-[2rem] font-OrkneyBold ">{title}</h2>
                        <p className="text-[15px] md:text-[18px] leading-[32px] md:leading-[40px] text-justify font-OrkneyRegular">{content}</p>
                        <p className="text-[20px] font-semibold pt-[2rem]">Emma</p>
                        <div className="link flex self-end gap-[13px] items-center pt-[2rem]">
                            {/* <button className="leading-[44px] text-[18px] text-yellow font-OrkneyRegular group-hover:text-white opacity-70">See more</button> */}
                            <div className="leftArrow rotate-90 cursor-pointer">
                                <span className="block w-[12px] h-[12px] border-b-[1px] border-r-[1px] border-yellow rotate-45 hover:border-white opacity-70"></span>
                            </div>
                            <div className="rightArrow rotate-90 cursor-pointer ">
                                <span className="block w-[12px] h-[12px] border-t-[1px] border-l-[1px] border-yellow rotate-45 hover:border-white opacity-70"></span>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export default TestimonialCard;