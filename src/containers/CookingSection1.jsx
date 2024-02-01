import Section from "../components/OtherSection";
import { cookingSection1 } from "../constants/data";

const CookingSection1 = () => {
    return (
        <div>
            <Section title={cookingSection1.title} content={cookingSection1.content} image={cookingSection1.image} buttonText="Contact me"/>
        </div>
    )
}
export default CookingSection1;