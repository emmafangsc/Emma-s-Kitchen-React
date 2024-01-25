// import images from "../constants/images";
import Pagination from "./Pagination";
import { useState } from "react";
import { recipes } from "../constants/data";
// import axios from "axios";
function RecipeGallery() {
    
    // const [recipes, setRecipes] = useState([]);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     getRecipes();
    //   }, []);
    
    
    // function getRecipes() {
    //     axios.get('https://emmaskitchen.emmafang.com/blog.php').then(function (response) {
    //       console.log(response.data);
    //       setRecipes(response.data);
    //     }).catch(function (error) {
    //       setError(error);
    //     });
    //   }
      
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage-1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentRecipes = recipes.slice(startIndex, endIndex);
    
    function handleChange(pageNumber) {
        setCurrentPage(pageNumber);
        
      }
  
    return (
      <div>
        <div className="recipeGallery grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-[1rem] md:px-[4rem] xl:px-[6rem] w-full flex-wrap">
          {currentRecipes.map((recipe) => (
            <div className="individualRecipe "  key={recipe.id}>
                 <img src={recipe.image} alt="recipe" className="w-full h-[250px] object-cover"/>
                <h2 className="text-[20px] font-OrkneyRegular pt-4">{recipe.title}</h2>
                 <p className="font-[400] text-[14px] md:text-[16px] text-justify font-OrkneyLight pt-2">{recipe.body}</p>
             </div>
          ))}
        </div>
        <div className="pagination px-[1rem] md:px-[4rem] xl:px-[6rem] flex justify-end">
            <Pagination totalItems={recipes.length} itemsPerPage={itemsPerPage} handleClick={handleChange} currentPage={currentPage}/>
        </div>
      </div>
    );}

    export default RecipeGallery;