// import images from "../constants/images";
import { NavLink } from "react-router-dom";
import {SubHeading1} from "../components/SubHeading"
import styles from "../constants/style";
import {useTranslation} from "react-i18next"
const HomeSection = ({title, content, image, link}) => {
    const { t } = useTranslation();
    return (
        <div className="wrapper px-[2rem] md:px-[4rem] xl:px-[6rem] flex">
            <div className="section flex flex-col lg:flex-row lg:gap-[7rem] justify-center items-start">
                <div className="section__image flex flex-1 w-full md:items-start">
                    <img src={image} alt="section" className="rounded-xl min-w-full object-cover md:h-[500px] lg:h-[700px]"/>
                </div>
                <div className="section__content flex-1">
                    <SubHeading1 title={title} />
                    <div className="text font-[400] text-[14px] leading-normal md:text-[18px] lg:leading-relaxed text-justify indent-12 font-OrkneyLight">{content}</div>
                    <div className="button flex justify-end pt-8">
                        <NavLink to={link}><button className={`bg-[#383838] border-black border-[1px] text-yellow font-OrkneyBold ${styles.sectionButton} hover:text-black hover:bg-yellow`} >{t('language.learnMore')}</button></NavLink>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}



export default HomeSection;
