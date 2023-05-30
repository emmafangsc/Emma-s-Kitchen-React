import images from "../constants/images";
import SubHeading from "./SubHeading";
import styles from "../constants/style";
const Section = () => {
    return (
        <div className="wrapper px-[2rem] lg:px-[12rem] ">
            <div className="section flex flex-col md:flex-row border-[1px] border-black">
                <div className="section__image flex md:flex-1 h-[300px] md:h-auto md:pr-[4rem]">
                    <img src={images.section1} width="500" alt="section"/>
                </div>
                <div className="section__content self-center px-8 md:flex-1">
                    <SubHeading title={"Feel welcome"} />
                    <p className="font-[400] text-[14px] leading-normal lg:text-[16px] lg:leading-10 text-justify indent-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore incidunt alias inventore blanditiis autem. Itaque, adipisci earum deleniti quas expedita non voluptatibus optio at provident labore exercitationem doloribus recusandae inventore.</p>
                    <p className="font-[400] text-[14px] leading-normal lg:text-[16px] lg:leading-10 text-justify indent-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore incidunt alias inventore blanditiis autem. Itaque, adipisci earum deleniti quas expedita non voluptatibus optio at provident labore exercitationem doloribus recusandae inventore.</p>
                    <div className="flex justify-end pt-8">
                        <button className={`bg-[#383838] text-yellow ${styles.sectionButton}`} >Learn more</button>
                    </div>
                    
                </div>
                
            </div>

        </div>
    )
}

export default Section;