import images from "../constants/images";
import { sections } from "../constants/data";
import Section from "../components/Section";
const HomeSection = () => {
    return (
        <div>
            <div className="pb-16 md:pb-0">
                <Section  title={sections.section1.title1} content={sections.section1.content1} image={sections.section1.image1} />
            </div>
            <div className="section2 pb-16 md:pb-0">
                <img src={images.sectionTopBG} alt="headerBG"/>
                <div className="bg-yellow">
                    <Section  title={sections.section2.title2} content={sections.section2.content2} image={sections.section2.image2} />
                </div>
                <img src={images.sectionBottomBG} alt="footerBG"/>
            </div>
            <div className="section3 pb-16 md:pb-0">
                <Section  title={sections.section3.title3} content={sections.section3.content3} image={sections.section3.image3} />
            </div>
        </div>
    )
}

export default HomeSection;