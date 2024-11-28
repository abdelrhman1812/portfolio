import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import SkillsSection from "./components/Skills/SkillsSection";
import Timeline from "./components/Timeline/Timeline";

const App = () => {
  return (
    <div className="app">
      <Toaster />
      <Navbar />
      <Hero />
      <About />
      <SkillsSection />
      <Timeline />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
