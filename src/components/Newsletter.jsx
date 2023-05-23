import SubHeading from './SubHeading';
const Newsletter = () =>{
     return(
        <div className="wrapper px-[200px]">
            <form>
                <div className="newsletterContainer border-black border-[1px] px-[40px] h-[234px]">
                    <SubHeading title={'Newsletter'}/>
                    <p className="font-[400] text-[14px] leading-normal lg:text-[18px] lg:leading-[44px] text-justify">be the first to hear my news, subscribe from my newsletter</p>
                    <div className="inputContainer flex justify-between pt-[1rem] text-white">
                        <input type="text" placeholder="First name" name="name" required className="border-[black] border-[1px] w-[200x] bg-[#000000] opacity-20 pl-[1rem] py-[4px]" />
                        <input type="text" placeholder="Last name" name="name" required className="border-[black] border-[1px] w-[200x] bg-[#000000] opacity-20 pl-[1rem] py-[4px]" />
                        <input type="text" placeholder="Your email" name="email" required className="border-[black] border-[1px] w-[300px] bg-[#000000] opacity-20 pl-[1rem] py-[4px]" />
                        <button className="border-[black] border-[1px] w-[200px] bg-[#383838] pl-[1rem] py-[4px] rounded-lg" >subscirbe</button>

                    </div>
                </div>
            </form>
        </div>
     )
}

export default Newsletter;