import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Snips from "./pages/Snips";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css"


function App() {
  return (
    <div className="App">
      <div className="HeadingBar">
        Snips
      </div>
      <div className="contents">
        <div className="LeftPanel">Hii</div>
          <div className="SnipApp">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Snips/>}></Route>
              <Route path="/add" element={<Add/>}></Route>
              <Route path="/update/:id" element={<Update/>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
        <div className="RightPanel"></div>
      </div>
      
      
      
      
      
    </div>
  ); 
}

export default App;
