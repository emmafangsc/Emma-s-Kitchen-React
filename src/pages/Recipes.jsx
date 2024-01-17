import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Search from "../components/Search";
function Recipes() {
    return(
        <div>
            <div className='header sticky top-0 z-20  bg-yellow'>
                <Contact />
                <Nav />
            </div>
            <div>
                <Header title="Sichuan home cooking to satisfy your belly and soul"/>
            </div>
            <div className="pt-16">
                <Search />
            </div>
                
        </div>
    )
}

export default Recipes;