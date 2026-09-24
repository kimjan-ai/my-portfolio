import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>

          <Route path="/" element={<Navigate to="/about" replace />} />

          <Route path="/about" element={<About />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;