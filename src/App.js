import "tailwindcss/tailwind.css";
import "./App.css";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Accomplishments from "./components/Accomplish";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Accomplishments />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
