import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import ScrollToTop from "../components/ScrollToTop";
import AboutMeSection from "../containers/AboutMe";
import Newsletter from "../components/Newsletter";
import Contact from "../containers/Contact";
import { useTranslation } from "react-i18next";
function AboutMe() {
    const { t } = useTranslation();
    return(
        <div>
            <div className='header sticky top-0 z-20  bg-yellow'>
                <Nav />
            </div>
            <div>
                <Header title={t('language.aboutMe-header')}/>
            </div>
            <div className="pt-16">
                <AboutMeSection />
            </div>
            <div className="pt-16" id="contact">
                <Contact />
            </div>
            <div className='newsletter relative z-10  '>
                <Newsletter />
            </div>
            <div className='footerWrapper relative z-10 '>
                <Footer />
            </div>
            <BackToTopButton />
            <ScrollToTop />
        </div>
    )
}

export default AboutMe;