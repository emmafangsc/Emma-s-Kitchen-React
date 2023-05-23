import images from "../constants/images";
const Profile = () =>{
    return(
        <div>
            <div className="profile w-full h-[644px] border-black border-[1px] pl-[200px] flex mt-[60px]">
                <div className="profile__image w-[330px] h-[570px]">
                    <img src={images.profile} />
                </div>
                <div className="profile__content flex flex-col justify-between items-center py-[40px] mx-[120px] h-[570px]">
                    <div className="title w-[280px] h-[110px] px-[40px]">
                        <h1 className="font-[800] text-[36px] text-center ">Nice to meet you!</h1>
                    </div>
                    <div className="union flex items-center h-[60px]">
                        <img src={images.union} width='350'/>
                    </div>
                    <div className="paragraph w-[500px] h-[220px]">
                        <p className="font-[400] text-[18px] leading-[44px] text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt eaque placeat numquam, nihil dignissimos laboriosam cupiditate earum, aperiam quo quasi corporis pariatur iusto aliquam iste totam libero architecto velit!</p>
                    </div>
                    <div className="button bg-yellow text-black py-[10px] px-[30px] rounded-lg shadow-lg flex items-center justify-center font-[600] text-[24px]">
                        <button>Book a call</button>
                    </div>
                </div>
                <div className="arrow flex justify-center items-center">
                    <div className="arrowImageWraper">
                    <img src={images.arrow} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;