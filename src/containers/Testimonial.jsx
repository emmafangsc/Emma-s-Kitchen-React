import images from "../constants/images";
import Section from "../components/Section";
import { sections } from "../constants/data";
const Testimonial = () => {
    return (
        <div className="testimonials md:mb-32">
            <img src={images.headerBG} alt="headerBG"/>
            <div className="bg-yellow">
                <Section  title={sections.testimonials.title} content={sections.testimonials.content} image={sections.testimonials.image} />
            </div>
            <img src={images.footerBG} alt="footerBG"/>
        </div>
       
    )
}
export default Testimonial;