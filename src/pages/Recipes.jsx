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
    const [selectedCategory, setSelectedCategory] = useState('Select a category');
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        axios.get(`https://emmaskitchen.emmafang.com/search.php`)
          .then((response) => {
            setAPIData(response.data);
            setFilteredData(response.data);
          })
      }, [])

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.textContent);
        if (selectedCategory === 'All category') {
            setFilteredData(APIData.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())));
          } else {
            const filtered = APIData.filter(item => item.category === selectedCategory && item.title.toLowerCase().includes(searchQuery.toLowerCase()));
            setFilteredData(filtered);
          }
        
      };
    
      const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
        if (selectedCategory === 'All category') {
          setFilteredData(APIData.filter(item => item.title.toLowerCase().includes(event.target.value.toLowerCase())));
        } else {
          const filtered = APIData.filter(item => item.category === selectedCategory && item.title.toLowerCase().includes(event.target.value.toLowerCase()));
          setFilteredData(filtered);
          console.log(filteredData);
        }
      };
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
                <Search  handleCategoryChange={handleCategoryChange} handleSearchInputChange={handleSearchInputChange} selectedCategory={selectedCategory}/>
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