import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Features from "./components/Features"
import Trainers from "./components/Trainers"
import Moreinfo from "./components/Moreinfo";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home/>
        <About/>
        <Features/>
        <Pricing/>
        <Trainers/>
       <Moreinfo/>
      </Router>
    </>
  );  
}

export default App;
