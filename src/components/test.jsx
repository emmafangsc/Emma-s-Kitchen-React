import { useState} from "react";
import axios from "axios";
const Search = () => {
    const [showMenu, setShowMenu] = useState(false);
    function showDropdownMenu(){
        setShowMenu(!showMenu);
    }
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
      const handleSearch = async () => {
        const response = await axios.post('https://emmaskitchen.emmafang/search.php', {
          searchQuery: searchQuery
        });
        const data = response.data;
        setSearchResults(data);
      };
    
      const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
      };
    return (
        <div className="searchSection flex flex-col px-[1rem] md:px-[4rem] xl:px-[6rem] py-8 md:py-16" >
            <h2 className="font-OrkneyLight text-[18px] md:text-[24px] md:pb-16 pb-8 text-center">Explore the recipe categories, select a meal and follow my cooking instructions to enjoy the authentic flavors of Sichuan in your kitchen.</h2>
            <div className="searchBar flex gap-8 flex-col md:flex-row font-OrkneyRegular text-[16px] xl:text-[18px]">
                <div className="search-right flex-1 ">
                    <input className="px-4 py-4 w-full py-3 bg-[beige] outline-grey" placeholder="Search... " type="text" name="searchQuery" value={searchQuery}  onChange={handleSearchInputChange}></input>
                        <ul>
                            {searchResults.map((result) => (
                            <li key={result.id}>{result.title}</li>
                            ))}
                        </ul>
                        <button type="submit" className="bg-grey p-2" onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    )
}
export default Search;