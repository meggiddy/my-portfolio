import "tailwindcss/tailwind.css";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Resume from "./components/Resume";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Projects from "./components/Projects";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:title" element={<ProjectPage />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default App;
