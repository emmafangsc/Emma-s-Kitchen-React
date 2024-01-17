import images from "../constants/images";
const Header = ({title}) => {
    return(
        <div className="header relative h-[250px] flex">
                    <img src={images.headerBG} alt="headerBG" className="w-full object-cover  "/>
                    <div className="overlayBG w-full h-full bg-black absolute opacity-60"></div>
                    <div className="flex items-center w-full h-full absolute px-[1rem] md:px-[4rem] xl:px-[6rem] ">
                        <h2 className="text-white font-bold text-[32px] md:text-[48px] font-OrkneyRegular text-left">{title}</h2>
                    </div>
                
        </div>
    )

}
export default Header;