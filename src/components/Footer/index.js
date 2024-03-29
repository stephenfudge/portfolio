import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

export default function Footer() {
  return (
    <footer className=" py-10" data-testid="footer">
      <div className="justify-center">
        <ul className="social-icons py-3">
          <li>
            <a
              href="https://github.com/stephenfudge"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="github-link"
            >
              <FontAwesomeIcon icon={faGithub} size="4x" className="icons text-rose hover:text-deep" data-testid="github-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/stephenfudge"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="linkedin-link"
            >
              <FontAwesomeIcon icon={faLinkedin} size="4x" className="icons text-rose hover:text-deep" data-testid="linkedin-icon"/>
            </a>
          </li>
        </ul>
        <p className="pb-10 mb-9">&copy; {new Date().getFullYear()} Stephen Fudge. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
