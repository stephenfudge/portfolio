import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="">
      <div className="">
        <p id="arr">&copy; 2023 Stephen Fudge. All Rights Reserved.</p>
        <ul className="social-icons">
          <li>
            <a
              href="https://github.com/stephenfudge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="4x" className="icons" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/stephenfudge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="4x" className="icons" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
