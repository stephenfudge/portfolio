import ProjectCards from "./Projects";
import projects from "./projects.json";
import "./projects.css";

export default function Projects() {
  return (
    <div className="container mx-auto px-4 md:px-10">
      <div className="text-cyclamen">
        <h1 className="text-3xl underline font-bold text-caribbean">
          Projects
        </h1>
        <p className="pb-8 pt-1 text-center">
          Here are some projects that I have been involved in creating.
        </p>
        <br />
        <div className="project-body">
          {projects.map((project) => {
            return (
              <div className="cards" key={project.id}>
                <ProjectCards {...project} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
