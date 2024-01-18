import images from "../constants/images";
const RecipeGallery = () => {
    return (
        <div className="recipeGallery grid grid-cols-3 gap-8 px-[1rem] md:px-[4rem] xl:px-[6rem] w-full flex-wrap ">
            <div className="individualRecipe ">
                <img src={images.feature9} alt="recipe" className="w-full h-[250px] object-cover"/>
                <h2 className="text-[24px] font-OrkneyRegular pt-4">Chicken Dinner</h2>
                <p className="font-[400] text-[14px] md:text-[16px] text-justify font-OrkneyLight pt-2">This is a dinner made of chicken</p>
                <button className="leading-[44px] text-[18px] font-OrkneyLight cursor-pointer ">See recipe</button>
            </div>
            <div className="individualRecipe  ">
                <img src={images.feature9} alt="recipe" className="w-full h-[250px] object-cover"/>
                <h2 className="text-[24px] font-OrkneyRegular pt-4">Chicken Dinner</h2>
                <p className="font-[400] text-[14px] md:text-[16px] text-justify font-OrkneyLight pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptatem quasi quae, culpa aliquid delectus recusandae doloribus aut voluptate hic magni! Expedita nesciunt dolor nam officiis deserunt itaque cupiditate quos?</p>
                <button className="leading-[44px] text-[18px] font-OrkneyLight cursor-pointer ">See recipe</button>
            </div>
            <div className="individualRecipe  ">
                <img src={images.feature9} alt="recipe" className="w-full h-[250px] object-cover"/>
                <h2 className="text-[24px] font-OrkneyRegular pt-4">Chicken Dinner</h2>
                <p className="font-[400] text-[14px] md:text-[16px] text-justify font-OrkneyLight pt-2">This is a dinner made of chicken</p>
                <button className="leading-[44px] text-[18px] font-OrkneyLight cursor-pointer ">See recipe</button>
            </div>
            <div className="individualRecipe  ">
                <img src={images.feature9} alt="recipe" className="w-full h-[250px] object-cover"/>
                <h2 className="text-[24px] font-OrkneyRegular pt-4">Chicken Dinner</h2>
                <p className="font-[400] text-[14px] md:text-[16px] text-justify font-OrkneyLight pt-2">This is a dinner made of chicken</p>
                <button className="leading-[44px] text-[18px] font-OrkneyLight cursor-pointer ">See recipe</button>
            </div>
            <div className="individualRecipe  ">
                <img src={images.feature9} alt="recipe" className="w-full h-[250px] object-cover"/>
                <h2 className="text-[24px] font-OrkneyRegular pt-4">Chicken Dinner</h2>
                <p className="font-[400] text-[14px] md:text-[16px] text-justify font-OrkneyLight pt-2">This is a dinner made of chicken</p>
                <button className="leading-[44px] text-[18px] font-OrkneyLight cursor-pointer ">See recipe</button>
            </div>
            

        </div>
    )
}
export default RecipeGallery;