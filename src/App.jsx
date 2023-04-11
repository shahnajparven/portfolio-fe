//import "./App.css";
import { Suspense } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Expertise from "./pages/expertise/Expertise";
import Skill from "./pages/skills/Skill";
import Projects from "./pages/project/Projects";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <div>
       <Suspense fallback={<Home />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;
