import Section from "../components/OtherSection";
import { aboutMeSection } from "../constants/data";
const AboutMeSection = () => {
    return (
        <div>
            <Section title={aboutMeSection.title} content={aboutMeSection.content} image={aboutMeSection.image} buttonText="Contact me"/>
        </div>
    )
}
export default AboutMeSection;