
import { sections } from "../constants/data";
import Section from "./Section";
const HomeSection = () => {
    return (
        <div>
            {sections.map((section, index)=>(
                <Section key={index} title={section.title} content={section.content} image={section.image} />
            ))}
        </div>
    )
}

export default HomeSection;