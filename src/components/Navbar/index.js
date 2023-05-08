import { useSpring, animated } from "react-spring";
import { useState } from "react";
import "./navbar.css";

export default function NavBar({ activeSection, handleSectionChange }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const slideInAnimation = useSpring({
    from: { transform: "translate3d(-100%, 0, 0)", opacity: 0 },
    to: { transform: "translate3d(10, 0, 0)", opacity: 1 },
    config: { duration: 1000 },
  });

  const handleDropdownClick = (section) => {
    handleSectionChange(section);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="py-5" data-testid="navigation">
      <div className="navbar lg:space-between">
        <div className="navbar-start">
          <a href="/" className="btn btn-ghost normal-case">
            {/* name/logo  */}
            <animated.span
              style={slideInAnimation}
              className="font-name text-2xl lg:text-5xl text-rose"
            >
              Stephen Fudge
            </animated.span>
          </a>
        </div>
        {/* hamburger menu */}
        <div className="navbar-end lg:hidden  m-4">
          {!dropdownOpen && (
            <button className="btn btn-ghost" onClick={toggleDropdown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          )}
          <ul
            className={`menu dropdown-content mt-3 p-2 rounded-box w-52
            ${dropdownOpen ? "block" : "hidden"}`}
          >
            <li id="about" onClick={() => handleDropdownClick("about")}>
              About Me
            </li>
            <li id="projects" data-testid="projects-button-small" onClick={() => handleDropdownClick("projects")}>
              Projects
            </li>
            <li id="skills" data-testid="skills-button-small" onClick={() => handleDropdownClick("skills")}>
              Skills
            </li>
            <li id="contact" data-testid="contact-button-small" onClick={() => handleDropdownClick("contact")}>
              Contact Me
            </li>
          </ul>
        </div>
        {/* links for larger screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-rose font-lato font-bold px-1">
            <li className="px-2">
              <button
                className={`px- py-1 rounded-lg border border-rose ${
                  activeSection === "about"
                    ? "text-navy dark:text-deep"
                    : "text-rose"
                }`}
                onClick={() => handleSectionChange("about")}
              >
                About Me
              </button>
            </li>
            <li className="px-2">
              <button
                className={`px-2 py-1 rounded-lg border border-rose ${
                  activeSection === "projects"
                    ? "text-navy dark:text-deep"
                    : "text-rose"
                }`}
                data-testid="projects-button-large"
                onClick={() => handleSectionChange("projects")}
              >
                Projects
              </button>
            </li>
            <li className="px-2">
              <button
                className={`px-2 py-1 rounded-lg border border-rose ${
                  activeSection === "skills"
                    ? "text-navy dark:text-deep"
                    : "text-rose"
                }`}
                data-testid="skills-button-large"
                onClick={() => handleSectionChange("skills")}
              >
                Skills 
              </button>
            </li>
            <li className="px-2">
              <button
                className={`px-2 py-1 rounded-lg border border-rose ${
                  activeSection === "contact"
                    ? "text-navy dark:text-deep"
                    : "text-rose"
                }`}
                data-testid="contact-button-large"
                onClick={() => handleSectionChange("contact")}
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
