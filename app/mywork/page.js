import "./mywork.scss";
import Image from "next/image";
import htmlprojects from "../../DataJson/htmlProjects";
import Link from "next/link";

export default function MyWork() {
  return (
    <div className="myworks">
      <h1>HTML&CSS Projects</h1>

      {htmlprojects.map((proj) => (
        <ProjectCard project={proj} key={proj.name} />
      ))}
    </div>
  );
}

const ProjectCard = ({ project }) => {
  return (
    <div className="card-container">
      <div className="card projectCard">
        <div className="projectCard-left">
          <h1 className="">{project.name}</h1>
          <p className="">{project.description}</p>
          <div>
            <Link href={project.srclink} target="_blank">
              <Image
                src="/images/code-icon.svg"
                width="10"
                height="10"
                alt=""
              />
              <span>Source Code</span>
            </Link>
            <Link href={project.livelink} target="_blank">
              <Image
                src="/images/code-icon2.svg"
                width="10"
                height="10"
                alt=""
              />
              <span>Live Demo</span>
            </Link>
          </div>
        </div>
        <div className="projectCard-right">
          <Image src={`${project.img}`} width="400" height="100" alt="image" />
        </div>
      </div>
    </div>
  );
};
