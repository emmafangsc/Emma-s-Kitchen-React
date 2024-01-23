import images from "../constants/images";
import Pagination from "./Pagination";
import { useState } from "react";

function RecipeGallery() {
    const recipes = [
        {
            id: 1,
            title: 'Steamed pork belly with rice flour',
            content: "",
            image: images.feature1
        },
        {
            id: 2,
            title: 'Steamed pork belly with rice flour',
            content: "",
            image: images.feature2
        },
        {
            id: 3,
            title: 'Steamed pork belly with rice flour',
            content: "",
            image: images.feature3
        },
        {
            id: 4,
            title: 'Steamed pork belly with rice flour',
            content: "",
            image: images.feature4
        },
        {
            id: 5,
            title: 'Steamed pork belly with rice flour',
            content: "",
            image: images.feature5
        },
        {
            id: 6,
            title: 'Steamed pork belly with rice flour',
            content: "",
            image: images.feature6
        },
        {
            id: 7,
            title: 'Steamed pork belly with rice flour',
            content: "",
            image: images.feature7
        },
        {
            id: 8,
            title: 'Steamed pork belly with rice flour',
            content: "",
            image: images.feature8
        },
        {
            id: 9,
            title: 'Steamed pork belly with rice flour',
            content: "",
            image: images.feature9
        },
    ];
    const itemsPerPage = 6;
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
                <h2 className="text-[20px] md:text-[24px] font-OrkneyRegular pt-4">{recipe.title}</h2>
                 <p className="font-[400] text-[14px] md:text-[16px] text-justify font-OrkneyLight pt-2">{recipe.content}</p>
             </div>
          ))}
        </div>
        <div className="pagination px-[1rem] md:px-[4rem] xl:px-[6rem] flex justify-end">
            <Pagination totalItems={recipes.length} itemsPerPage={itemsPerPage} handleClick={handleChange} currentPage={currentPage}/>
        </div>
      </div>
    );}

    export default RecipeGallery;