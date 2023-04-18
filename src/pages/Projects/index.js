import ProjectCards from "./Projects";
import projects from "./projects.json";
import "./projects.css";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="project-body">
      {projects.map((project) => {
        return (
          <div className="cards"> 
            <ProjectCards key={project.id} {...project} />
          </div>
        );
      })}
      </div>
    </div>
  );
}
