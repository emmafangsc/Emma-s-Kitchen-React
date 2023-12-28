// import images from "../constants/images";
import SubHeading from "./SubHeading";
import styles from "../constants/style";
const Section = ({title, content, image}) => {
    return (

        <div className="wrapper px-[2rem] md:px-[4rem] lg:px-[6rem] flex">
            <div className="section flex flex-col lg:flex-row md:gap-[7rem] justify-center items-start">
                <div className="section__image flex flex-1 w-full md:items-start">
                    <img src={image} alt="section" className="rounded-xl min-w-full object-cover md:h-[500px] lg:h-[700px]"/>
                </div>
                <div className="section__content flex-1">
                    <SubHeading title={title} />
                    <div className="text font-[400] text-[14px] leading-normal md:text-[18px] lg:leading-relaxed text-justify indent-12 font-OrkneyLight">{content}</div>
                    <div className="button flex justify-end pt-8">
                        <button className={`bg-[#383838] border-black border-[1px] text-yellow font-OrkneyBold ${styles.sectionButton} hover:text-white hover:bg-grey`} >Learn more</button>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}
export default Section;