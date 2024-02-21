import "tailwindcss/tailwind.css";

import "./App.css";
import NavBar from "./components/Nav";
import Hero from "./components/Hero";
import MidSection from "./components/MidSection";
import Projects from "./components/Projects";
import Accomplishments from "./components/Accomplish";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <MidSection />
      <Projects />
      <Accomplishments />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
