"use client";

import "./mywork.scss";
import Image from "next/image";
import htmlprojects from "../../DataJson/htmlProjects";
import Link from "next/link";
import { Expo, gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MyWork() {
  const [selectedTab, setSelectedTab] = useState({
    index: 0,
    type: "",
    selectedStyle:
      "inline-block bg-gray-500 text-white rounded-t-lg py-4 px-4 text-sm font-medium text-center",
    unSelectedStyle:
      "inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center",
  });
  const tl2 = useRef(gsap.timeline());

  useEffect(() => {
    tl2.current.from(
      ".projectCard",
      { stagger: 0.5, opacity: 0, x: -100, duration: 2 },
      "+=0.5"
    );
  }, []);

  useEffect(()=>{
    console.log('tabbbs.. ', selectedTab)
  },[selectedTab])

  return (
    <>
      <TabNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="myworks">
        {htmlprojects.map((proj) => (
          proj.type === selectedTab.type ? <ProjectCard project={proj} key={proj.name} /> : null
        ))}
        <div></div>
        <div className="marker fixed top-0 left-0 w-[100vw] h-[50vh] z-[-10]"></div>
      </div>
    </>
  );
}

const TabNav = ({selectedTab, setSelectedTab}) => {

  const updateSelectedTab = (i) => {
    let clickedTab = "react"
    if(i==0) clickedTab = "react"
    else if(i==1) clickedTab = "htmlcss"
    else if(i==2) clickedTab = "others"
    else clickedTab = "react"

    setSelectedTab({ ...selectedTab, index: i, type: clickedTab });
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
            Full-Stack Projects
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
            HTML, CSS & TailwindCSS
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
  const tl3 = useRef();

  // useEffect(() => {
  //   //
  //   gsap.registerPlugin(ScrollTrigger);
  //   // var color = gsap
  //   //   .timeline({ paused: true })
  //   //   .set(".center", { color: "#4e4e4e" });
  //   // ScrollTrigger.create({
  //   //   trigger: ".cardContainer",
  //   //   start: "top top",
  //   //   end: "bottom center+=21",
  //   //   pin: ".projectCard-left",
  //   // onLeave: () => color.play(),
  //   // onEnterBack: () => color.reverse(),
  //   // onLeaveBack: () => color.reverse(),
  //   // });

  //   var sections = gsap.utils
  //     .toArray(".cardContainer")
  //     .forEach(function (elem) {
  //       var thisLine = elem.querySelectorAll(".projectCard");
  //       console.log("thissslinge", thisLine);
  //       var tlst = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: elem,
  //           start: "top center",
  //           end: "bottom center",
  //           pin: thisLine,
  //           scrub: true,
  //           //entering,leaving,entering backwards,back past the beginning
  //           toggleActions: "play reverse play reverse",
  //           // markers: true,
  //         },
  //       });
  //       tlst.from(thisLine, {
  //         backgroundColor: "blue",
  //         opacity: 0.8,
  //         duration: 1,
  //       });
  //     });
  //   //
  // }, []);

  return (
    <div className="cardContainer  w-[100%] my-8 ">
      <div className="card projectCard">
        <div className="projectCard-left max-w-[70%]">
          <h1 className="title">{project.name}</h1>
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
        <div className="projectCard-right min-w-[30%] max-w-[30%]">
          <div>
            <Image
              src={`${project.img}`}
              // fill={true}
              height={300}
              width={300}
              alt="image"
              className="h-[auto] w-[900px] max-h-[300px] min-h-[300px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
