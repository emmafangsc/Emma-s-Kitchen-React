import Section from "../components/OtherSection";
import { aboutMeSection } from "../constants/data";
import { useTranslation } from 'react-i18next';
const AboutMeSection = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Section 
            title={aboutMeSection.title} 
            content={<div>
                <p className="pb-6">{t('aboutMe.p1')}</p>
                <p>{t('aboutMe.p2')}</p>
            </div>

            }
            image={aboutMeSection.image} 
            buttonText={t('language.contactMe')}/>
        </div>
    )
}
export default AboutMeSection;