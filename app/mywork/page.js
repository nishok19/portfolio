"use client";

import "./mywork.scss";
import Image from "next/image";
import htmlprojects from "../../DataJson/htmlProjects";
import Link from "next/link";
import { Expo, gsap } from "gsap";
import { useEffect, useState } from "react";

export default function MyWork() {
  let tl = gsap.timeline({ defaults: { ease: Expo.easeOut }, duration: 2 });

  useEffect(() => {
    tl.from(
      ".projectCard",
      { stagger: 0.5, opacity: 0, x: -100, duration: 2 },
      "+=0.5"
    );
  }, []);

  return (
    <>
      <TabNav />
      <div className="myworks">
        {htmlprojects.map((proj) => (
          <ProjectCard project={proj} key={proj.name} />
        ))}
      </div>
    </>
  );
}

const TabNav = () => {
  const [selectedTab, setSelectedTab] = useState({
    index: 0,
    selectedStyle:
      "inline-block bg-gray-500 text-white rounded-t-lg py-4 px-4 text-sm font-medium text-center",
    unSelectedStyle:
      "inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center",
  });

  const updateSelectedTab = (i) => {
    setSelectedTab({ ...selectedTab, index: i });
    console.log(selectedTab);
  };

  return (
    <>
      <ul className="flex flex-wrap mt-6 justify-center border-b-4 border-gray-500">
        <li className="mr-2">
          <button
            onClick={() => updateSelectedTab(0)}
            className={
              selectedTab.index == 0
                ? selectedTab.selectedStyle
                : selectedTab.unSelectedStyle
            }
          >
            React - FullStack(MERN)
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => updateSelectedTab(1)}
            className={
              selectedTab.index === 1
                ? selectedTab.selectedStyle
                : selectedTab.unSelectedStyle
            }
          >
            HTML, CSS & Tailwind
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => updateSelectedTab(2)}
            className={
              selectedTab.index === 2
                ? selectedTab.selectedStyle
                : selectedTab.unSelectedStyle
            }
          >
            Others
          </button>
        </li>
      </ul>
    </>
  );
};

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
