import { useSpring, animated } from "react-spring";
import "./navbar.css";

export default function NavBar({ activeSection, handleSectionChange }) {
  const slideInAnimation = useSpring({
    from: { transform: "translate3d(-100%, 0, 0)", opacity: 0 },
    to: { transform: "translate3d(10, 0, 0)", opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="py-5">
      <div className="navbar lg:space-between">
        <div className="navbar-start">
          {/* dropdown for smaller screens */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              <li id="about" onClick={() => handleSectionChange("about")}>
                About Me
              </li>
              <li id="projects" onClick={() => handleSectionChange("projects")}>
                Projects
              </li>
              <li id="contact" onClick={() => handleSectionChange("contact")}>
                Contact Me
              </li>
              <li id="resume" onClick={() => handleSectionChange("skills")}>
                Skills
              </li>
            </ul>
          </div>

          <a
            href="/"
            className="btn btn-ghost normal-case text-xl text-secondary name"
          >
            <animated.span style={slideInAnimation}>
              Stephen Fudge
            </animated.span>
          </a>
        </div>
        {/* links for larger screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-rose  px-1">
            <li className="px-2">
              <button
                className={`px- py-1 rounded-lg text-sm font-medium border ${
                  activeSection === "about" ? "text-success" : "text-gray-700"
                }`}
                onClick={() => handleSectionChange("about")}
              >
                About Me
              </button>
            </li>
            <li className="px-2">
              <button
                className={`px-2 py-1 rounded-lg text-sm font-medium border ${
                  activeSection === "projects"
                    ? "text-success"
                    : "text-gray-700"
                }`}
                onClick={() => handleSectionChange("projects")}
              >
                Projects
              </button>
            </li>
            <li className="px-2">
              <button
                className={`px-2 py-1 rounded-lg text-sm font-medium border ${
                  activeSection === "contact" ? "text-success" : "text-gray-700"
                }`}
                onClick={() => handleSectionChange("contact")}
              >
                Contact Me
              </button>
            </li>
            <li className="px-2">
              <button
                className={`px-2 py-1 rounded-lg text-sm font-medium border ${
                  activeSection === "skills" ? "text-success" : "text-gray-700"
                }`}
                onClick={() => handleSectionChange("skills")}
              >
                Skills
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
