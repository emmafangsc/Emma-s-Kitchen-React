import Contact from "../components/Contact";
import Nav from "../components/Nav";
function AboutMe() {
    return(
        <div>
            <div className='header sticky top-0 z-20  bg-yellow'>
                <Contact />
                <Nav />
          </div>
          <div className="h-[500px]">
            This is about me
          </div>
        </div>
    )
}

export default AboutMe;