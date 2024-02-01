import { useState} from "react";
const Search = ({handleSearchInputChange}) => {
    const [showMenu, setShowMenu] = useState(false);
    function showDropdownMenu(){
        setShowMenu(!showMenu);
    }
    return (
        <div className="searchSection flex flex-col px-[1rem] md:px-[4rem] xl:px-[6rem] py-8 md:py-16" >
            <h2 className="font-OrkneyLight text-[18px] md:text-[24px] md:pb-16 pb-8 text-center">Explore the recipe categories, select a meal and follow my cooking instructions to enjoy the authentic flavors of Sichuan in your kitchen.</h2>
            <div className="searchBar flex gap-8 flex-col md:flex-row font-OrkneyRegular text-[16px] xl:text-[18px]">
                
                <div className="search-left flex-1 flex flex-col">
                    <div className="flex items-center justify-between px-4 xl:w-1/2 py-4 bg-[beige] cursor-pointer" onClick={showDropdownMenu}>
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
                <div className="search-right flex-1 ">
                    <input className="px-4 py-4 w-full py-3 bg-[beige] outline-grey" placeholder="Search... " type="text" name='searchQuery'  onChange={handleSearchInputChange}></input>
                        {/* <ul>
                            {filteredData.map((post) => (
                            <div>
                                <li key={post.id}>{post.title}</li>
                                <img src={post.image} />
                            </div>
                            ))}
                        </ul> */}
                </div>
                

            </div>
        </div>
    )
}

export default Search;