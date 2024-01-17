import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import Testimonial from "../components/Testimonial";
import PrivateDining1 from "../containers/PrivateDining1";
import PrivateDining2 from "../containers/PrivateDining2";
import DiningFeatures from "../containers/DiningFeatures";

function PrivateDining() {
    return (
        <div className="relative m-auto max-w-screen-2xl" id='nav' >
            <div className='header sticky top-0 z-20  bg-yellow'>
            <Contact />
            <Nav />
            </div>
            <div>
                <Header title="We offer a unique private dining experience"/>
            </div>
            <div className="mt-16">
                <PrivateDining1 />
            </div>
            <div className="mt-16">
                <DiningFeatures />
            </div>
            <div className="mt-16">
                <PrivateDining2 />
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

export default PrivateDining;