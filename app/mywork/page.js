"use client";

import "./mywork.scss";
import Image from "next/image";
import htmlprojects from "../../DataJson/htmlProjects";
import Link from "next/link";
import { Expo, gsap } from "gsap";
import { useEffect } from "react";

export default function MyWork() {
  let tl = gsap.timeline({ defaults: { ease: Expo.easeOut }, duration: 2 });

  useEffect(() => {
    tl.from(
      ".projectCard",
      { stagger: 0.5, opacity: 0, x: -100, duration: 2 },
      "-=1"
    );
  }, []);

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
    <div className="cardContainer">
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
          <div>
            <Image
              src={`${project.img}`}
              // fill={true}
              height={300}
              width={300}
              alt="image"
              className="h-[auto] w-[900px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
