import "tailwindcss/tailwind.css";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
