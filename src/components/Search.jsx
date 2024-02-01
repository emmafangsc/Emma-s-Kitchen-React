import { useState, useEffect} from "react";
import axios from "axios";
const Search = () => {
    const [showMenu, setShowMenu] = useState(false);
    function showDropdownMenu(){
        setShowMenu(!showMenu);
    }
    const [searchQuery, setSearchQuery] = useState('');
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://emmaskitchen.emmafang.com/search.php`)
          .then((response) => {
            setAPIData(response.data);
          })
      }, [])

      const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
      };

      const filteredData = APIData.filter((post) => {
        return Object.keys(post).some((key) => {
          return post[key].toString().toLowerCase().includes(searchQuery.toLowerCase())
        // return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
      })
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
                    <input className="px-4 py-4 w-full py-3 bg-[beige] outline-grey" placeholder="Search... " type="text" name='searchQuery' value={searchQuery}  onChange={handleSearchInputChange}></input>
                        {/* <ul>
                            {filteredData.map((post) => (
                            <li key={post.id}>{post.title}</li>
                            ))}
                        </ul> */}
                </div>
                

            </div>
        </div>
    )
}

export default Search;