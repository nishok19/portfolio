import "./MyWork.scss";

import ProjectCard from "./ProjectCard/ProjectCard";
import htmlprojects from "../../DataJson/htmlProjects";

const MyWork = () => {
  return (
    <div className="myworks">
      <h1>HTML&CSS Projects</h1>

      {htmlprojects.map((proj) => (
        <ProjectCard project={proj} key={proj.name} />
      ))}
    </div>
  );
};

export default MyWork;
