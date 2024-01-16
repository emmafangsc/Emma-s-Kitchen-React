import images from "../constants/images";
const CookingSection2 = () => {
    return (
        <div className="CookingSection2 flex flex-col  lg:gap-0 lg:flex-row lg:h-[750px] bg-[beige] items-center">
            <div className="text flex-1 p-[2rem] md:px-[4rem] xl:px-[6rem]">
                <h2 className="font-OrkneyRegular text-[18px] md:text-[34px] pt-4 lg:pt-0">
                    Get a basic understanding and good craftsmanship
                </h2>
                <p className="pt-4 font-[400] text-[14px] leading-normal md:text-[18px] lg:leading-relaxed text-justify font-OrkneyLight">
                    When you come to a cooking course at our cooking school , we don't just want to hand over a recipe and just let you follow it to the letter. Instead, we want to give you a basic understanding of the Italian traditions and equip you with good craftsmanship that brings out the best taste experience.
                </p>
                <p className="pt-4 font-[400] text-[14px] leading-normal md:text-[18px] lg:leading-relaxed text-justify font-OrkneyLight">
                    During your day on our cooking course, you will, among other things: 
                </p>
                <ul className="pt-4 pl-8 list-disc font-[400] text-[14px] leading-normal lg:leading-loose md:text-[18px] text-justify font-OrkneyLight">
                    <li>get a short cultural presentation</li>
                    <li>​be introduced to the dishes we will make with fresh ingredients of the best quality</li>
                    <li>​learn to enhance the taste experience with our expert guidance</li>
                    <li>and of course we round off by eating all the delicious food and enjoying the good company.</li>
                </ul> 
            
                <p className="pt-4 font-[400] text-[14px] leading-normal md:text-[18px] lg:leading-relaxed text-justify font-OrkneyLight">
                    You will then be sent home with new food knowledge, inspiring recipes and an experience you will never forget!               
                </p>



            </div>
            <div className="image flex-1 h-full">
            <img src={images.cooking2} alt="cooking" className="h-full w-full object-cover" />
            </div>

        </div>
    )
}
export default CookingSection2;


