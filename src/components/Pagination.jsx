// import React, { useState } from 'react';
function Pagination({ totalItems, itemsPerPage, handleClick, currentPage }) {
  // const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  return (
    <div className="pagination flex gap-2 pt-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button  key={i} id={i} onClick={()=>handleClick(i+1)} className={`w-10 h-10 ${currentPage === i + 1 ? "bg-yellow" : "bg-[beige]"}` }>
          {i+1}
        </button>
      ))}
    </div>
  );
}
export default Pagination