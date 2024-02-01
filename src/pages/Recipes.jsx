// import ContactBar from "../components/ContactBar";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Search from "../components/Search";
import RecipeGallery from "../components/RecipeGallery";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import ScrollToTop from "../components/ScrollToTop";
import { useState, useEffect } from "react";
import axios from "axios";
function Recipes() {
    const [searchQuery, setSearchQuery] = useState('');
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://emmaskitchen.emmafang.com/search.php`)
          .then((response) => {
            setAPIData(response.data);
          })
      }, [])

      const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
      };

      const filteredData = APIData.filter((post) => {
        return Object.keys(post).some((key) => {
          return post[key].toString().toLowerCase().includes(searchQuery.toLowerCase())
        })
      })
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
                <Search handleSearchInputChange={handleSearchInputChange}/>
            </div>
            <div className="recipes-gallery">
                <RecipeGallery filteredData={filteredData}/>
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