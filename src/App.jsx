import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CookingClass from "./pages/CookingClass";
function App() {
  
  return (
    <div className="relative m-auto max-w-screen-2xl" id='nav' >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/cookingClass" element={<CookingClass />}/>
        </Routes>
      </BrowserRouter>
        
    </div>

    
  );
}
export default App;

