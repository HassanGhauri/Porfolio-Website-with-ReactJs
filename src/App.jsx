import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Projectsview from "./Components/Projectsview/Projectsview";
import Skills from "./Components/Skills/Skills";


function App() {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projectsview/>
      <Footer/>
    </div>
  );
}

export default App;
