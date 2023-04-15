import './navbar.css';

export default function NavBar(props) {
  function pageChange(event) {
    const id = event.target.id;
    props.setPage(id);
  }

  return (
    <div className="py-5">
      <div className="navbar bg-base-100 lg:space-between">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li id="about" onClick={pageChange}>
                About Me
              </li>
              <li id="projects" onClick={pageChange}>
                Projects
              </li>
              <li id="contact" onClick={pageChange}>
                Contact Me
              </li>
              <li id="resume" onClick={pageChange}>
                Resume
              </li>
            </ul>
          </div>

          <a href="/" className="btn btn-ghost normal-case text-xl text-secondary name">
            Stephen Fudge
          </a>
        </div>
        {/* links for larger screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1" id={props.page}>
            <li>
              <button id="about" onClick={pageChange}>
                About Me
              </button>
            </li>
            <li>
              <button id="projects" onClick={pageChange}>
                Projects
              </button>
            </li>
            <li>
              <button id="contact" onClick={pageChange}>
                Contact Me
              </button>
            </li>
            <li>
              <button id="resume" onClick={pageChange}>
                Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
