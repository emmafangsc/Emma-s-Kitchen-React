import images from "../constants/images";
const Certification = () => {
    return (
        <div className="wrapper lg:px-[12rem] flex justify-center">
            <div className="certification flex p-20 w-full md:w-3/5 px-8 justify-between">
                    <img src={images.X} alt='certificstion' className="w-[100px] md:w-[150px]"/>
                    <img src={images.X} alt='certificstion' className="w-[100px] md:w-[150px]"/>
                    <img src={images.X} alt='certificstion' className="w-[100px] md:w-[150px]" />
                </div>
        </div>
    )
}

export default Certification; 