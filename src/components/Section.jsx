// import images from "../constants/images";
import SubHeading from "./SubHeading";
import styles from "../constants/style";
const Section = ({title, content, image}) => {
    return (

        <div className="wrapper px-[2rem] md:px-[4rem] lg:px-[14rem]">
            <div className="section flex flex-col md:flex-row pb-40  md:gap-[8rem] justify-center">
                <div className="section__image flex md:w-[20rem] h-[16rem] md:h-auto md:items-start">
                    <img src={image} alt="section" className="rounded-xl min-w-full object-cover"/>
                </div>
                <div className="section__content md:w-[40rem]">
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