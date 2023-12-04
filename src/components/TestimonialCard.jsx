const TestimonialCard = ({title, content})=>{
    return(
        <div className="tesimonial-container h-[500px] flex flex-1 items-center justify-center bg-yellow w-full">
                <div className="testimonial flex flex-col items-center">
                    <div className="testimonial1-image w-[169px] h-[180px] bg-[teal]">

                    </div>
                    <div className="content flex flex-col text-center items-center">
                        <h2 className="text-[30px] leading-[60px] font-OrkneyBold">{title}</h2>
                        <p className="text-[15px] leading-[32px] text-justify font-OrkneyRegular">{content}</p>
                        <div className="link flex self-end gap-[13px] items-center group">
                            <button className="leading-[44px] text-[18px] text-[#288CF9] font-OrkneyRegular group-hover:text-white opacity-70">See more</button>
                            <div className="arrow rotate-90 cursor-pointer ">
                                <span className="block w-[9px] h-[9px] border-t-[1px] border-l-[1px] border-[#288CF9] rotate-45 group-hover:border-white opacity-70"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default TestimonialCard;