import images from "../constants/images";
const Certification = () => {
    return (
        <div className="wrapper px-[2rem] lg:px-[12rem]">
            <div className="certification border-[blue] border-[1px] h-[300px] flex py-12 px-32 justify-between">
                <img src={images.X} className="object-cover flex"/>
                <img src={images.X} className="object-cover flex"/>
                <img src={images.X} className="object-cover flex"/>
            </div>
        </div>
    )
}

export default Certification; 