import Section from "../components/OtherSection";
import { cookingSection1 } from "../constants/data";
import { useTranslation } from "react-i18next";
const CookingSection1 = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Section 
            title={t('cookingClass-section1.title')} 
            content={<div>
                <p className="pb-6">{t('cookingClass-section1.p1')}</p> 
                <p>{t('cookingClass-section1.p2')}</p> 

            </div>}
            image={cookingSection1.image} 
            buttonText="Contact me"/>
        </div>
    )
}
export default CookingSection1;