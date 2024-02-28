import Pagination from "./Pagination";
import { useState } from "react";
import { recipes } from "../constants/data";
const RecipeGallery = ({filteredData}) =>{
    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage-1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentRecipes = recipes.slice(startIndex, endIndex);
    function handleChange(pageNumber) {
        setCurrentPage(pageNumber);
        const firstImageId = pageNumber;
        const firstImageElement = document.getElementById(firstImageId);
        if (firstImageElement) {
          const imagePosition = firstImageElement.getBoundingClientRect().top;
          window.scrollTo({ top: imagePosition, behavior: 'smooth' });
          console.log(`This is page ${pageNumber}`)
        }
      }
   }
   function Pagination({ totalItems, itemsPerPage, handleClick, currentPage }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    return (
      <div className="pagination flex gap-2 pt-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button  key={i} id={i} onClick={()=>handleClick(i+1)} className={`w-10 h-10 ${currentPage === i + 1 ? "bg-yellow" : "bg-[beige]"} hover:bg-yellow` }>
            {i+1}
          </button>
        ))}
      </div>
    );
  }
