import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CookingClass from "./pages/CookingClass";
import PrivateDining from "./pages/PrivateDining";
import Recipes from "./pages/Recipes";
import AboutMe from "./pages/AboutMeSection";
import Thankyou from "./pages/Thankyou";
import IndividualRecipe from "./pages/IndividualRecipe";
import BookTable from "./pages/BookTable";
function App() {
  
  return (
    <div className="relative m-auto max-w-screen-2xl" id='nav' >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/cooking-class" element={<CookingClass />}/>
          <Route path="/private-dining" element={<PrivateDining />}/>
          <Route path="/recipes" element={<Recipes />}/>
          <Route path="/about-me" element={<AboutMe />}/>
          <Route path="/thank-you" element={<Thankyou />}/>
          <Route path="/recipe" element={<IndividualRecipe />}/>
          <Route path="/book-table" element={<BookTable />}/>
        </Routes>
      </BrowserRouter>
        
    </div>

    
  );
}
export default App;

