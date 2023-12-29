import SubHeading from '../components/SubHeading';
const Newsletter = () => {
     return(
        <div className="wrapper xl:px-[12rem] py-24">
            <form action="newsletter.php" method="post" >
                <div className="newsletter-container px-8 md:px-16 xl:px-0">
                    <SubHeading title={"Newsletter"}/>
                    <p className="font-[400] text-[14px] leading-normal lg:text-[18px] lg:leading-[44px] text-justify font-OrkneyRegular">be the first to hear my news, subscribe from my newsletter</p>
                    <div className="input-container flex flex-col gap-[1rem] md:flex-row justify-between pt-[2rem] text-[#f0f0f0] font-OrkneyRegular">
                        <input type="text" placeholder="First name" name="first-name" required className="shadow-md w-full sm:w-[12rem] bg-[#000000] opacity-30 pl-[1rem] py-[4px]" />
                        <input type="text" placeholder="Last name" name="last-name" required className="shadow-md w-full sm:w-[12rem] bg-[#000000] opacity-30 pl-[1rem] py-[4px]" />
                        <input type="text" placeholder="Your email" name="email" required className="shadow-md w-full sm:w-[18rem] bg-[#000000] opacity-30 pl-[1rem] py-[4px]" />
                        {/* <div> */}
                            <button type="submit" className="self-end shadow-md text-center w-[10rem] md:w-[12rem] bg-[#383838] hover:opacity-50 pl-[1rem] py-1 rounded-lg" >subscribe</button>
                        {/* </div> */}
                    </div>
                </div>
            </form>
        </div>


        
     )
}

export default Newsletter;


