import ProjectCards from "./Projects";
import projects from "./projects.json";
import "./projects.css";

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl underline">Projects</h1>
      <p>Here are some projects that I have created</p>
      <br />
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
