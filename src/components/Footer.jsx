import images from "../constants/images";
import { useTranslation } from 'react-i18next';
const Footer = () => {
    const { t } = useTranslation();
    return(
        <div>
            <div className="yellow-line w-[90%] xl:w-[990px] h-[1px] bg-[#FFFB23] m-auto"></div>
            <div className="footer h-[183px] flex justify-center items-center relative">
                <div className="content w-[750px] flex flex-col justify-between font-OrkneyRegular px-[1rem]">
                    <p className="content-bottom text-[12px] md:text-[15px] leading-[32px] text-center my-5">
                    {t('language.copyright')}
                    </p>
                </div>
                <div className="overlayBG absolute bottom-0 w-full">
                    <img src={images.footerBG} alt="footer" className="w-full" />
                </div>
            </div>
        </div>
    )
}
export default Footer;


