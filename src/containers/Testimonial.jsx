import images from "../constants/images";
import Section from "../components/Section";
const Testimonial = () => {
    return (
        <div className="certification">
            <Section title={'Testimonials'} image={images.testimonials} content={"Coaching has been a life-changing experience for me. Through the process, I gained a deeper understanding of my strengths and weaknesses, developed new skills, and discovered opportunities for growth. My coach was a supportive and non-judgmental guide who helped me overcome obstacles, stay focused, and remain accountable. As a result of coaching, I feel more confident, motivated, and empowered to pursue my goals. I highly recommend coaching to anyone seeking to improve their personal or professional life. The benefits are truly transformative."} />
        </div>
       
    )
}
export default Testimonial;