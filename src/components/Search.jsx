import { useState} from "react";
import { useTranslation } from "react-i18next";
const Search = ({ handleCategoryChange, handleSearchInputChange, selectedCategory}) => {
    const { t } = useTranslation();
    const [showMenu, setShowMenu] = useState(false);
    const categories = [
        { name: 'All category', value: '' },
        { name: 'vegetarian', value: 'Vegetarian' },
        { name: 'chicken', value: 'Chicken' },
        { name: 'beef', value: 'Beef' },
        { name: 'pork', value: 'Pork' }
      ];
    function showDropdownMenu(){
        setShowMenu(!showMenu);
    }
    return (
        <div className="searchSection flex flex-col px-[1rem] md:px-[4rem] xl:px-[6rem] py-8 md:py-16" >
            <h2 className="font-OrkneyLight text-[18px] md:text-[24px] md:pb-16 pb-8 text-center">{t('language.search-title')}</h2>
            <div className="searchBar flex gap-8 flex-col md:flex-row font-OrkneyRegular text-[16px] xl:text-[18px]">
                
                <div className="search-left flex-1 flex flex-col">
                    <div className="flex items-center justify-between px-4 xl:w-1/2 py-4 bg-[beige] cursor-pointer" onClick={showDropdownMenu}>
                        <div>{selectedCategory}</div> 
                        <span className="triangle1"></span>
                    </div>
                    {
                        showMenu && (
                            <div className="categoryMenu pl-4 w-1/2 bg-[beige]"  >
                                <ul className="flex flex-col gap-2">
                                    {categories.map((item, index) => (
                                    <li key={index} value={item.value} className="cursor-pointer" onClick={()=>{handleCategoryChange(item.name); setShowMenu(false);}}>{item.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }

                </div>
                <div className="search-right flex-1 ">
                    <input className="px-4 py-4 w-full py-3 bg-[beige] outline-grey" placeholder={t('language.search-search')} type="text" name='searchQuery'  onChange={handleSearchInputChange}></input>
                </div>
            </div>
        </div>
    )
}

export default Search;