import Contact from "../components/ContactBar";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import ScrollToTop from "../components/ScrollToTop";
import AboutMeSection from "../containers/AboutMe";
function AboutMe() {
    return(
        <div>
            <div className='header sticky top-0 z-20  bg-yellow'>
                <Contact />
                <Nav />
            </div>
            <div>
                <Header title="Welcome to Emma's Kitchen!"/>
            </div>
            <div className="pt-16">
                <AboutMeSection title="Welcome to Emma's Kitchen!"/>
            </div>
            
            <div className='footerWrapper relative z-10 mt-16'>
                <Footer />
            </div>
            <BackToTopButton />
            <ScrollToTop />
        </div>
    )
}

export default AboutMe;