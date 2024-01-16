import images from "../constants/images";
const CookingSection2 = () => {
    return (
        <div className="CookingSection2 flex flex-col  lg:gap-0 lg:flex-row lg:h-[750px] bg-[beige] items-center">
            <div className="text flex-1 p-[2rem] md:px-[4rem] xl:px-[6rem]">
                <h2 className="font-OrkneyRegular text-[18px] md:text-[34px] pt-4 lg:pt-0">
                    Private dining for festive events
                </h2>
                <p className="pt-4 font-[400] text-[14px] leading-normal md:text-[18px] lg:leading-relaxed text-justify font-OrkneyLight">
                    In Emma's Kitchen, we invite our guests into the kitchen, where we teach and talk about the proud Italian food traditions. Here you are not just served a delicious meal – you get the opportunity to prepare it yourself and develop your culinary skills. It is also an entertaining and pleasant activity where you and your guests get to know each other and have fun together.
                </p>
                <p className="pt-4 font-[400] text-[14px] leading-normal md:text-[18px] lg:leading-relaxed text-justify font-OrkneyLight">
                    Our private dining experience is therefore quite obvious if you have to organize a party, a company event or another special occasion that is something out of the ordinary.
                </p>
                <p className="pt-4 font-[400] text-[14px] leading-normal md:text-[18px] lg:leading-relaxed text-justify font-OrkneyLight">
                    We can also offer to hold brunch, lunch and dinner parties - each with 3 starters, 3 main courses and 3 desserts, made together. You will therefore have the opportunity to try a large selection of the different recipes that we have carefully developed over the years. We also offer food courses & Gastronomic team building .
                </p>
            </div>
            <div className="image flex-1 h-full">
            <img src={images.dining2} alt="cooking" className="h-full w-full object-cover" />
            </div>

        </div>
    )
}
export default CookingSection2;


