import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Splash from "./components/Splash";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Splash />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
