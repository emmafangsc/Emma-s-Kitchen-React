import Section from "../components/Section";
import { cookingSection } from "../constants/data";
const CookingSection = () => {
    return (
        <div>
            <Section title={cookingSection.title} content={cookingSection.content} image={cookingSection.image}/>
        </div>
    )
}
export default CookingSection;