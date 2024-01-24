import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CookingClass from "./pages/CookingClass";
import PrivateDining from "./pages/PrivateDining";
import Recipes from "./pages/Recipes";
import AboutMe from "./pages/AboutMeSection";
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
        </Routes>
      </BrowserRouter>
        
    </div>

    
  );
}
export default App;

