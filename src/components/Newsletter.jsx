import SubHeading from './SubHeading';
const Newsletter = () =>{
     return(
        <div className="wrapper px-[200px]">
            <form action="newsletter.php" method="post" >
                <div className="newsletter-container px-[3rem] h-[15rem] border-[1px]">
                    <SubHeading title={'Newsletter'}/>
                    <p className="font-[400] text-[14px] leading-normal lg:text-[18px] lg:leading-[44px] text-justify">be the first to hear my news, subscribe from my newsletter</p>
                    <div className="input-container flex justify-between pt-[2rem] text-[#f0f0f0]">
                        <input type="text" placeholder="First name" name="first-name" required className="border-1px w-[12rem] bg-[#000000] opacity-20 pl-[1rem] py-[4px]" />
                        <input type="text" placeholder="Last name" name="last-name" required className="border-1px w-[12rem] bg-[#000000] opacity-20 pl-[1rem] py-[4px]" />
                        <input type="text" placeholder="Your email" name="email" required className="border-1px w-[18rem] bg-[#000000] opacity-20 pl-[1rem] py-[4px]" />
                        <button type="submit" className="border-[1px] w-[12rem] bg-[#383838] pl-[1rem] py-1 rounded-lg" >subscribe</button>

                    </div>
                </div>
            </form>
        </div>


        
     )
}

export default Newsletter;


