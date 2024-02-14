import images from "../constants/images";
import { sections } from "../constants/data";
import Section from "../components/HomeSection";
import {  useTranslation } from 'react-i18next';

const HomeSection = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="pb-16 md:pb-0">
                <Section  
                    title={t('home-section1.title')} 
                    content={<div>
                        <p className="pb-6">{t('home-section1.p1')}</p>
                        <p className="pb-6">{t('home-section1.p2')}</p>
                        <p>{t('home-section1.p3')}</p>
                    </div>}  
                    image={sections.section1.image1} link="/cooking-class"/>
            </div>
            <div className="section2 pb-16 md:pb-0">
                <img src={images.sectionTopBG} alt="headerBG"/>
                <div className="bg-yellow">
                    <Section  title={t('home-section2.title')} 
                    content={<div>
                        <p className="pb-6">{t('home-section2.p1')}</p>
                        <p className="pb-6">{t('home-section2.p2')}</p>
                        
                    </div>}   
                    image={sections.section2.image2} link="/private-dining"/>
                </div>
                <img src={images.sectionBottomBG} alt="footerBG"/>
            </div>
            <div className="section3 pb-16 md:pb-0">
                <Section  title={t('home-section3.title')} 
                content={<div>
                    <p className="pb-6">{t('home-section3.p1')}</p>
                    <p className="pb-6">{t('home-section3.p2')}</p>
                    
                </div>}  
                image={sections.section3.image3}  link="/about-me"/>
            </div>
        </div>
    )
}

export default HomeSection;