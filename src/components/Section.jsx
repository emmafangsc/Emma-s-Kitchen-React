// import images from "../constants/images";
import SubHeading from "./SubHeading";
import styles from "../constants/style";
const Section = ({title, content, image}) => {
    return (

        <div className="wrapper px-[2rem] lg:px-[12rem] ">
            <div className="section flex flex-col md:flex-row border-[1px] border-black">
                <div className="section__image flex md:flex-1 h-[300px] md:h-auto md:pr-[4rem]">
                    <img src={image} width="500" alt="section" className="rounded-xl"/>
                </div>
                <div className="section__content self-center px-8 md:flex-1">
                    <SubHeading title={title} />
                    <p className="font-[400] text-[14px] leading-normal lg:text-[16px] lg:leading-10 text-justify indent-12">{content}</p>
                    <div className="flex justify-end pt-8">
                        <button className={`bg-[#383838] text-yellow ${styles.sectionButton}`} >Learn more</button>
                    </div>
                    
                </div>
                
            </div>

        </div>
    )
}
export default Section;