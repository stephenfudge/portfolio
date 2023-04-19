import { useState } from "react";
import "./App.css";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [page, setPage] = useState("about");

  function RenderPage() {
    switch (page) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
    }
  }

  return (
    <div className="App h-full bg-persian text-rose">
      <Navbar page={page} setPage={setPage} />
      <RenderPage />
      <Footer />
    </div>
  );
}

export default App;
