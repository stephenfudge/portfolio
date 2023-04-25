import { useState } from "react";
import "./App.css";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App min-h-screen bg-persian text-rose">
      <Navbar
        activeSection={activeSection}
        handleSectionChange={handleSectionChange}
      />
      <main className="container mx-auto mt-8">
        {activeSection === "about" && <About />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "contact" && <Contact />}
        {activeSection === "skills" && <Skills />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
