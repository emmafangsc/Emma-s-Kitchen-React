// import images from "../constants/images";
import SubHeading from "./SubHeading";
import styles from "../constants/style";
const Section = ({title, content, image}) => {
    return (

        <div className="wrapper px-[2rem] lg:px-[12rem]">
            <div className="section flex flex-col md:flex-row pt-24">
                <div className="section__image flex md:flex-1 h-[300px] md:h-[600px] md:pr-[4rem]">
                    <img src={image} alt="section" className="rounded-xl"/>
                </div>
                <div className="section__content px-8 md:flex-1">
                    <SubHeading title={title} />
                    <div className="text font-[400] text-[14px] leading-normal lg:text-[16px] lg:leading-10 text-justify indent-12">{content}</div>
                    <div className="button flex justify-end pt-8">
                        <button className={`bg-[#383838] text-yellow ${styles.sectionButton}`} >Learn more</button>
                    </div>
                    
                </div>
                
            </div>

        </div>
    )
}
export default Section;