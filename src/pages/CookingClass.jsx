import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import CookingSection1 from "../containers/CookingSection1";
import Features from "../containers/Features";
import Testimonial from "../components/Testimonial";
import CookingSection2 from "../containers/CookingSection2";
function CookingClass() {
    return (
        <div className="relative m-auto max-w-screen-2xl" id='nav' >
            <div className='header sticky top-0 z-20  bg-yellow'>
            <Contact />
            <Nav />
            </div>
            <div>
                <Header />
            </div>
            <div className="mt-16">
                <CookingSection1 />
            </div>
            <div className="mt-16">
                <Features />
            </div>
            <div className="mt-16">
                <CookingSection2 />
            </div>
            <div className="mt-16">
                <Testimonial />
            </div>
            <div className='newsletterWrapper mt-16 relative z-10'>
            <Newsletter />
            </div>
            <div className='footerWrapper relative z-10 '>
                <Footer />
            </div>
            <BackToTopButton/>
        </div>
    )
}

export default CookingClass;