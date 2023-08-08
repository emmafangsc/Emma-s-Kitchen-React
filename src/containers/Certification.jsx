import images from "../constants/images";
const Certification = () => {
    return (
        <div className="wrapper lg:px-[12rem] flex justify-center">
            <div className="certification flex pb-24 w-full md:w-3/5 justify-between">
                    <img src={images.X} className="w-[100px] md:w-[8rem]"/>
                    <img src={images.X} className="w-[100px] md:w-[8rem]"/>
                    <img src={images.X} className="w-[100px] md:w-[8rem]" />
                </div>
        </div>
    )
}

export default Certification; 