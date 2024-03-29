import { useState } from "react";
import "./App.css";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [isDark, setIsDark] = useState(false);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App min-h-screen bg-ghost dark:bg-grey text-smoky dark:text-ghost font-lato">
      <div className="container mx-auto p-4">
        <Navbar
          activeSection={activeSection}
          handleSectionChange={handleSectionChange}
        />
        <div className="text-left">
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        </div>
        <main className="container mx-auto mt-8 ">
          {activeSection === "about" && <About />}
          {activeSection === "projects" && <Projects />}
          {activeSection === "skills" && <Skills />}
          {activeSection === "contact" && <Contact />}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
