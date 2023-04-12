import ProjectCards from "./Projects";
import projects from "./projects.json";

export default function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
     {projects.map((project) => {
       return (
<div>
           <ProjectCards key={project.id} {...project} />
     </div>
       )
     })}
    </div>
  );
}
