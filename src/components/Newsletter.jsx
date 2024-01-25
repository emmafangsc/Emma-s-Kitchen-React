import { SubHeading1 } from './SubHeading';
import { useState } from 'react';
import axios from 'axios';
const Newsletter = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstName.length === 0){
            alert("First name has left blank!")
        }
        if (lastName.length === 0){
            alert("Last name has left blank!")
        }
        else if (email.length === 0){
            alert("Email has left blank!")
        }
        
        else {
            const url = "https://emmaskitchen.emmafang.com/newsletter.php";
            let fData = new FormData();
            fData.append('firstName', firstName);
            fData.append('lastName', lastName);
            fData.append('email', email);
            axios.post(url, fData).then(response=>{window.location.href = "https://emmaskitchen.emmafang.com/thankyou.html"}).catch(error=>alert(error));
        }
    }
     return(
        <div className="wrapper xl:px-[12rem] py-24">
            <form  method="post" >
                <div className="newsletter-container px-8 md:px-16 xl:px-0">
                    <SubHeading1 title={"Newsletter"}/>
                    <p className="font-[400] text-[14px] leading-normal lg:text-[18px] lg:leading-[44px] text-justify font-OrkneyRegular">be the first to hear my news, subscribe from my newsletter</p>
                    <div className="input-container flex flex-col gap-[1rem] lg:flex-row justify-between pt-[2rem] text-[#f0f0f0] font-OrkneyRegular">
                        <input type="text" placeholder="First name" name="firstName" required className="shadow-md w-full sm:w-[16rem] bg-[#000000] opacity-30 pl-[1rem] py-[4px]" onClick={(e)=>setFirstName(e.target.value)}/>
                        <input type="text" placeholder="Last name" name="lastName" required className="shadow-md w-full sm:w-[16rem] bg-[#000000] opacity-30 pl-[1rem] py-[4px]" onClick={(e)=>setLastName(e.target.value)}/>
                        <input type="text" placeholder="Your email" name="email" required className="shadow-md w-full sm:w-[16rem] bg-[#000000] opacity-30 pl-[1rem] py-[4px]" onClick={(e)=>setEmail(e.target.value)}/>
                        {/* <div> */}
                            <button type="submit" className="self-end shadow-md text-center w-[10rem] md:w-[12rem] bg-[#383838] hover:opacity-50 pl-[1rem] py-1 rounded-lg" onClick={handleSubmit}>subscribe</button>
                        {/* </div> */}
                    </div>
                </div>
            </form>
        </div>


        
     )
}

export default Newsletter;




