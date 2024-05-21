import images from "../constants/images";
import { useTranslation } from 'react-i18next';
const CookingSection2 = () => {
    const { t } =  useTranslation();
    return (
        <div className="CookingSection2 flex flex-col  lg:gap-0 lg:flex-row lg:h-[750px] bg-[beige] items-center">
            <div className="text flex-1 p-[2rem] md:px-[4rem] xl:px-[6rem]">
                <h2 className="font-OrkneyRegular text-[18px] md:text-[34px] pt-4 lg:pt-0">
                    {t('cookingClass-section2.title')}
                </h2>
                <p className="pt-4 font-[400] text-[14px] leading-normal md:text-[18px] lg:leading-relaxed text-justify font-OrkneyLight">
                    {t('cookingClass-section2.p1')}
                </p>
                <p className="pt-4 font-[400] text-[14px] leading-normal md:text-[18px] lg:leading-relaxed text-justify font-OrkneyLight">
                    {t('cookingClass-section2.p2')}
                </p>
                <ul className="pt-4 pl-8 list-disc font-[400] text-[14px] leading-normal lg:leading-loose md:text-[18px] text-justify font-OrkneyLight">
                    <li>{t('cookingClass-section2.li1')}</li>
                    <li>{t('cookingClass-section2.li2')}</li>
                    <li>{t('cookingClass-section2.li3')}</li>
                    <li>{t('cookingClass-section2.li4')}</li>
                </ul> 
            
                <p className="pt-4 font-[400] text-[14px] leading-normal md:text-[18px] lg:leading-relaxed text-justify font-OrkneyLight">
                {t('cookingClass-section2.p3')}             
                </p>



            </div>
            <div className="image flex-1 h-full">
            <img src={images.cooking2} alt="cooking" loading="lazy" className="h-full w-full object-cover" />
            </div>

        </div>
    )
}
export default CookingSection2;


