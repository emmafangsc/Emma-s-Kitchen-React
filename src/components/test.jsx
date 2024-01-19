import images from "../constants/images";
import Pagination from "./Pagination";
import { useState } from "react";
function RecipeGallery() {
    const recipes = [
        {
            id: 1,
            title: 'Steamed pork belly with rice flour',
            image: images.feature1
        },
        {
            id: 2,
            title: 'Steamed pork belly with rice flour',
            image: images.feature2
        },
        {
            id: 3,
            title: 'Steamed pork belly with rice flour',
            image: images.feature3
        },
        {
            id: 4,
            title: 'Steamed pork belly with rice flour',
            image: images.feature4
        },
    ];
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(recipes.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentRecipes = recipes.slice(startIndex, endIndex);
    function handleClick() {
      console.log('click');
    }
    return (
      <div>
        <div className="recipeGallery grid grid-cols-3 gap-8 px-[1rem] md:px-[4rem] xl:px-[6rem] w-full flex-wrap ">
          {currentRecipes.map((recipe) => (
            <div className="individualRecipe "  key={recipe.id}>
                 <img src={recipe.image} alt="recipe" className="w-full h-[250px] object-cover"/>
                <h2 className="text-[24px] font-OrkneyRegular pt-4">{recipe.title}</h2>
             </div>
          ))}
        </div>
        <Pagination totalItems={recipes.length} itemsPerPage={itemsPerPage} onClick={handleClick}/>
      </div>
    );}
    export default RecipeGallery;