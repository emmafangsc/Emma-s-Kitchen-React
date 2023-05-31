import images from "../constants/images";
const Certification = () => {
    return (
        <div className="wrapper lg:px-[12rem] flex justify-center">
            <div className="certification h-[200px] md:h-[250px] flex pt-24 justify-between w-11/12 md:w-3/5">
                <img src={images.X} className="object-cover flex"/>
                <img src={images.X} className="object-cover flex"/>
                <img src={images.X} className="object-cover flex"/>
            </div>
        </div>
    )
}

export default Certification; 