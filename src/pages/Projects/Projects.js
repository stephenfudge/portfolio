import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

// project card to be reused in index.js 
export default function ProjectCard(props) {
  return (
    <div className="project-body pb-3">
      <li className="project-list">
        <div className="projects border border-lightpurple">
          <div className="item">
            {/* title with link to deployed application */}
            <h2 className="project-name text-2xl text-bold underline text-purple">
              <a
                href={props.deployed}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.title}
              </a>
            </h2>
            <br />
            {/* description */}
            <h3 className="project-description">{props.description}</h3>
            <br />
            {/* screenshot of application */}
            <img
              className="project-images"
              src={props.image}
              alt={`screenshot of ${props.title}`}
            />{" "}
            <br />
            {/* buttons to go to deployed application or GitHub repo */}
            <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
              <a
                href={props.deployed}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border rounded-xl px-0.5 py-1 mr-2 text-navy dark:text-rose">
                  See it live! <FontAwesomeIcon icon={faExternalLinkAlt}  />
                </button>
              </a>
              <br />
              <a href={props.repo} target="_blank" rel="noopener noreferrer">
                <button className="border rounded-xl px-2 py-1 ml-1 text-navy dark:text-rose">
                  View the GitHub repository! <FontAwesomeIcon icon={faExternalLinkAlt}  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}
