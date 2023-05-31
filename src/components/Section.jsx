// import images from "../constants/images";
import SubHeading from "./SubHeading";
import styles from "../constants/style";
const Section = ({title, content, image}) => {
    return (

        <div className="wrapper px-[2rem] lg:px-[12rem]">
            <div className="section flex flex-col md:flex-row pt-24">
                <div className="section__image flex md:flex-1 md:pr-[4rem] h-[300px] md:h-auto ">
                    <img src={image} alt="section" className="rounded-xl min-w-full object-cover"/>
                </div>
                <div className="section__content px-8 md:flex-1">
                    <SubHeading title={title} />
                    <div className="text font-[400] text-[14px] leading-normal md:text-[18px] lg:leading-relaxed text-justify indent-12">{content}</div>
                    <div className="button flex justify-end pt-8">
                        <button className={`bg-[#383838] text-yellow ${styles.sectionButton}`} >Learn more</button>
                    </div>
                    
                </div>
                
            </div>

        </div>
    )
}
export default Section;