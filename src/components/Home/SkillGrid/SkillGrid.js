import { useRef, useEffect } from "react";
import "./SkillGrid.scss";

import reactPic from "../../../assets/images/react.svg";
import expressPic from "../../../assets/images/express.svg";
import awsPic from "../../../assets/images/awsicon.svg";

import { gsap } from "gsap";

const SkillGrid = () => {
  const skillsRef = useRef();

  useEffect(() => {
    gsap.from(skillsRef.current, {
      scrollTrigger: {
        trigger: ".skills",
        // scrub: true,
        // markers: true,
        start: "top bottom",
        // end: "bottom top",
        toggleActions: "play reset play reset",
      },
      // scrollTrigger: ".transition2",
      x: -30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      delay: 0.6,
    });
  }, []);

  return (
    <section className="skills" ref={skillsRef}>
      <div className="skills-container">
        <ul>
          <li className="transition2">
            <div className="icon-container one">
              <img src={reactPic} alt="" />
            </div>
            <p className="skill-title">React JS Frontend Dev</p>
            <p className="featured-desc skill-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id luctus
              sem ac integer quis.
            </p>
          </li>
          <li className="transition2">
            <div className="icon-container two">
              <img src={expressPic} alt="" />
            </div>
            <p className="skill-title">Express JS Backend Dev</p>
            <p className="featured-desc skill-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id luctus
              sem ac integer quis.
            </p>
          </li>
          <li className="transition2">
            <div className="icon-container three">
              <img src={awsPic} alt="" />
            </div>
            <p className="skill-title">AWS Archietecht</p>
            <p className="featured-desc skill-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id luctus
              sem ac integer quis.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SkillGrid;
