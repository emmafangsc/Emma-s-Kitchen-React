import Section from "../components/OtherSection";
import { privateDining1 } from "../constants/data";
const PrivateDining1 = () => {
    return (
        <div>
            <Section title={privateDining1.title} content={privateDining1.content} image={privateDining1.image}/>
        </div>
    )
}
export default PrivateDining1;