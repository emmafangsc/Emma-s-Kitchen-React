function Recipes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [APIData, setAPIData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
      axios.get(`https://emmaskitchen.emmafang.com/search.php`)
        .then((response) => {
          setAPIData(response.data);
          setFilteredData(response.data);
        })
    }, [])
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.textContent);
      if (event.target.textContent === '') {
          setFilteredData(APIData);
          console.log(filteredData);
        } else {
          const filtered = APIData.filter(item => item.category === event.target.textContent);
          setFilteredData(filtered);
          console.log(filteredData);
        }
  };
    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value);
      if (selectedCategory === '') {
        setFilteredData(APIData.filter(item => item.title.toLowerCase().includes(event.target.value.toLowerCase())));
      } else {
        const filtered = APIData.filter(item => item.category === selectedCategory && item.title.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredData(filtered);
      }
    };
  return(
      <div>
          <div className="recipes-search">
              <Search handleSearchInputChange={handleSearchInputChange} handleCategoryChange={handleCategoryChange}/>
          </div>
          <div className="recipes-gallery">
              <RecipeGallery filteredData={filteredData}/>
          </div>
      </div>
  )
}