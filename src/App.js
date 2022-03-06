import Menu from "./components/Menu/Menu";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Calendrier from "./components/Calendrier/Calendrier";
function App() {
  return (
      <div className="App">
          <header>
            <Menu/>
          </header>
          <main>
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/calendrier" element={<Calendrier/>}/>
            </Routes>
          </main>
      </div>
  );
}

export default App;
