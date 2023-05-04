import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

export default function Footer() {
  return (
    <footer className=" py-10">
      <div className="justify-center">
        <ul className="social-icons">
          <li>
            <a
              href="https://github.com/stephenfudge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="4x" className="icons text-rose hover:text-deep" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/stephenfudge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="4x" className="icons text-rose hover:text-deep" />
            </a>
          </li>
        </ul>
        <p className="pb-10 mb-9"id="arr">&copy; {new Date().getFullYear()} Stephen Fudge. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
