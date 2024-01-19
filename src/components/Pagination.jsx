// import React, { useState } from 'react';
function Pagination({ totalItems, itemsPerPage, handleClick }) {
  // const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  

  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => (
        <button  key={i} id={i} onClick={()=>handleClick(i+1)} className={`border-[1px] border-[red] p-3` }>
          {i+1}
        </button>
      ))}
    </div>
  );
}
export default Pagination