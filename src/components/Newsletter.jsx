import SubHeading from './SubHeading';
const Newsletter = () => {
     return(
        <div className="wrapper lg:px-[12rem]">
            <form action="newsletter.php" method="post" >
                <div className="newsletter-container px-[2rem] border-[1px]">
                    <SubHeading title={'Newsletter'}/>
                    <p className="font-[400] text-[14px] leading-normal lg:text-[18px] lg:leading-[44px] text-justify">be the first to hear my news, subscribe from my newsletter</p>
                    <div className="input-container flex flex-col gap-[1rem] md:flex-row justify-between pt-[2rem] text-[#f0f0f0]">
                        <input type="text" placeholder="First name" name="first-name" required className="shadow-md w-[12rem] bg-[#000000] opacity-20 pl-[1rem] py-[4px]" />
                        <input type="text" placeholder="Last name" name="last-name" required className="shadow-md w-[12rem] bg-[#000000] opacity-20 pl-[1rem] py-[4px]" />
                        <input type="text" placeholder="Your email" name="email" required className="shadow-md w-[18rem] bg-[#000000] opacity-20 pl-[1rem] py-[4px]" />
                        <button type="submit" className="shadow-md w-[12rem] bg-[#383838] pl-[1rem] py-1 rounded-lg" >subscribe</button>

                    </div>
                </div>
            </form>
        </div>


        
     )
}

export default Newsletter;


