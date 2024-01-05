import images from "../constants/images";
// import Section from "../components/Section";
// import { sections } from "../constants/data";
import TestimonialCard from "./TestimonialCard";
const Testimonial = () => {
    return (
        <div className="testimonials">
            <img src={images.sectionTopBG} alt="headerBG"/>
            {/* <div className="bg-yellow">
                <Section  title={sections.testimonials.title} content={sections.testimonials.content} image={sections.testimonials.image} />
            </div> */}
            <div className="wrapper px-[2rem] md:px-[4rem] lg:px-[12rem]">
            <div className="section flex flex-col md:flex-row md:gap-[7rem] justify-center">
                
            </div>

        </div>
            <div className="testimonials bg-yellow flex flex-col md:flex-row px-[2rem] md:px-[4rem] xl:px-[12rem] gap-[2rem] h-[700px]">
                <TestimonialCard title="Testimony 1" content="The feedback I have received has all been very positive, that it was a super good event, that it was fun to cook with the colleagues, that the food was good and that you were phenomenal at keeping an overview in an occasionally rather hectic kitchen. several members who have already expressed their desire for us to do a new cooking event for next year." />
                {/* <TestimonialCard title="Testimony 2" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid sit commodi nisi, labore neque ratione quasi praesentium aut omnis maiores in velit explicabo! Reprehenderit sed aspernatur eius! Quaerat, velit?" /> */}
                {/* <TestimonialCard title="Testimony 3" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid sit commodi nisi, labore neque ratione quasi praesentium aut omnis maiores in velit explicabo! Reprehenderit sed aspernatur eius! Quaerat, velit?" /> */}
            </div>
            <img src={images.sectionBottomBG} alt="footerBG"/>
        </div>
       
    )
}
export default Testimonial;