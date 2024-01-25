import { SubHeading1 } from './SubHeading';
import { useState } from 'react';
import axios from 'axios';
const Newsletter = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (firstName.length === 0){
            alert("First name has left blank!")
        }
        if (lastName.length === 0){
            alert("Last name has left blank!")
        }
                else {
            const url = "https://emmaskitchen.emmafang.com/newsletter.php";
            let fData = new FormData();
            fData.append('firstName', firstName);
            fData.append('lastName', lastName);
            axios.post(url, fData).then(response=>{window.location.href = "https://emmaskitchen.emmafang.com/thank-you"}).catch(error=>alert(error));
        }
    }
     return(
        <div className="wrapper xl:px-[12rem] py-24">
                <div className="newsletter-container px-8 md:px-16 xl:px-0">
                    <div className="input-container">
                        <form  method="post" className='flex flex-col gap-[1rem] lg:flex-row justify-between pt-[2rem] text-[#f0f0f0] font-OrkneyRegular'>
                            <input type="text" placeholder="First name" name="firstName" required className="shadow-md w-full sm:w-[16rem] bg-[#000000] opacity-30 pl-[1rem] py-[4px]" onChange={(e)=>setFirstName(e.target.value)}/>
                            <input type="text" placeholder="Last name" name="lastName" required className="shadow-md w-full sm:w-[16rem] bg-[#000000] opacity-30 pl-[1rem] py-[4px]" onChange={(e)=>setLastName(e.target.value)}/>
                            <button type="submit" className="self-end shadow-md text-center w-[10rem] md:w-[12rem] bg-[#383838] hover:opacity-50 pl-[1rem] py-1 rounded-lg" onClick={handleSubmit}>subscribe</button>
                        </form>
                    </div>
                </div>
        </div>
     )
}

export default Newsletter;




