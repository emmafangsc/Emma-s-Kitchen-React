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
export default Pagination