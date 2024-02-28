import { SubHeading1 } from './SubHeading';
import { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
const Newsletter = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const { t } = useTranslation();
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
            axios.post(url, fData).then(response=>{window.location.href = "https://emmaskitchen.emmafang.com/thank-you"}).catch(error=>alert(error));
        }
    }
     return(
        <div className="wrapper xl:px-[12rem] py-24">
                <div className="newsletter-container px-8 md:px-16 xl:px-0">
                    <SubHeading1 title={t('language.newsletter-title')}/>
                    <p className="font-[400] text-[14px] leading-normal lg:text-[18px] lg:leading-[44px] text-justify font-OrkneyRegular">{t('language.newsletter-content')}</p>
                    <div className="input-container">
                        <form  method="post" className='flex flex-col gap-[1rem] lg:flex-row justify-between pt-[2rem] text-[#f0f0f0] font-OrkneyRegular'>
                            <input type="text" placeholder={t('language.newsletter-firstName')} name="firstName" autocomplete="given-name" required className="shadow-md w-full sm:w-[16rem] bg-[#000000] opacity-30 pl-[1rem] py-[4px]" onChange={(e)=>setFirstName(e.target.value)}/>
                            <input type="text" placeholder={t('language.newsletter-lastName')} name="lastName" autocomplete="family-name" required className="shadow-md w-full sm:w-[16rem] bg-[#000000] opacity-30 pl-[1rem] py-[4px]" onChange={(e)=>setLastName(e.target.value)}/>
                            <input type="text" placeholder={t('language.newsletter-email')} name="email" autocomplete="email" required className="shadow-md w-full sm:w-[16rem] bg-[#000000] opacity-30 pl-[1rem] py-[4px]" onChange={(e)=>setEmail(e.target.value)}/>
                            <button type="submit" className="self-end shadow-md text-center w-[10rem] md:w-[12rem] bg-[#383838] hover:opacity-50 pl-[1rem] py-1 rounded-lg" onClick={handleSubmit}>{t('language.newsletter-subscribe')}</button>
                        </form>
                    </div>
                </div>
        </div>
     )
}

export default Newsletter;




