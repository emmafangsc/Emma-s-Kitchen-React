import { useState} from "react";
const Search = () => {
    const [showMenu, setShowMenu] = useState(false);
    function showDropdownMenu(){
        setShowMenu(!showMenu);
    }
    
    return (
        <div className="searchSection flex flex-col px-[1rem] md:px-[4rem] xl:px-[6rem] h-[300px]" >
            <h2 className="font-OrkneyLight text-[18px] md:text-[34px] pt-4 lg:pt-0 pb-16 text-center">Explore the recipe categories, select a meal and follow my cooking instructions to enjoy the authentic flavors of Sichuan in your kitchen.</h2>
            <div className="searchBar flex">
                
                <div className="search-left flex-1 flex flex-col font-OrkneyRegular text-[16px] xl:text-[18px]">
                    <div className="flex items-center justify-between px-4 w-1/2 py-4 bg-[beige] cursor-pointer" onClick={showDropdownMenu}>
                        <div>Choose a category</div> 
                        <span className="triangle1"></span>
                    </div>
                    {
                        showMenu && (
                            <div className="pl-3 w-1/2 bg-[beige]">
                                <ul className="flex flex-col gap-2">
                                    <li>Vegetables</li>
                                    <li>Chicken</li>
                                    <li>Beef</li>
                                </ul>
                            </div>
                        )
                    }

                </div>
                <div className="search-right flex-1">
                    <input className="pl-3 py-2 w-full py-3 bg-[beige] outline-grey" placeholder="Search... "></input>
                </div>
                

            </div>
        </div>
    )
}

export default Search;