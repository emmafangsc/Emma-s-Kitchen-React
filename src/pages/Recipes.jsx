// import ContactBar from "../components/ContactBar";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Search from "../components/Search";
import RecipeGallery from "../components/RecipeGallery";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import ScrollToTop from "../components/ScrollToTop";
function Recipes() {
    return(
        <div>
            <div className='header sticky top-0 z-20  bg-yellow'>
                {/* <ContactBar /> */}
                <Nav />
            </div>
            <div>
                <Header title="Sichuan home cooking to satisfy your belly and soul"/>
            </div>
            <div className="recipes-search">
                <Search />
            </div>
            <div className="recipes-gallery">
                <RecipeGallery />
            </div>
            <div className='newsletter relative z-10'>
                <Newsletter />
            </div>
            <div className='footerWrapper relative z-10'>
                <Footer />
            </div>
            <BackToTopButton />
            <ScrollToTop />
        </div>
    )
}

export default Recipes;