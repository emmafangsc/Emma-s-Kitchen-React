import Section from "../components/OtherSection";
import { privateDining1 } from "../constants/data";
import { useTranslation } from 'react-i18next';
const PrivateDining1 = () => {
    const { t } = useTranslation()
    return (
        <div>
            <Section title={t('privateDining-section1.title')} 
            content={<div>
                <p className="pb-6" >{t('privateDining-section1.p1')}</p>
                <p>{t('privateDining-section1.p2')}</p>
            </div>} 
            image={privateDining1.image} 
            buttonText={t('language.contactMe')}/>
        </div>
    )
}
export default PrivateDining1;