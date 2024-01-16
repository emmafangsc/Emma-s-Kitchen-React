import Section from "../components/Section";
import { cookingSection1 } from "../constants/data";
const CookingSection1 = () => {
    return (
        <div>
            <Section title={cookingSection1.title} content={cookingSection1.content} image={cookingSection1.image}/>
        </div>
    )
}
export default CookingSection1;