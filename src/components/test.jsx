import { useState, useRef, useEffect } from "react";
const Search = () => {
    const [showMenu, setShowMenu] = useState(false);
    const dropdownRef = useRef(null);
    function showDropdownMenu(){
        setShowMenu(!showMenu);
    }
    
    
    return (
        <div className="searchSection flex flex-col px-[1rem] md:px-[4rem] xl:px-[6rem] h-[300px]" >
            <div className="searchBar flex">
                <div className="search-left flex-1 flex flex-col font-OrkneyRegular text-[16px] xl:text-[18px]" ref={dropdownRef}>
                    <div className="pl-3 w-1/2 py-4 bg-[grey] cursor-pointer" onClick={showDropdownMenu}>Choose a category</div>
                    {
                        showMenu && (
                            <div className="pl-3 w-1/2 bg-[beige]">
                                <ul className="flex flex-col gap-2">
                                    <li>Vegetables</li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;