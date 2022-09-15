import { useRef, useEffect } from "react";
import "./SkillGrid.scss";

// import reactPic from "../../../assets/images/react.svg";
// import expressPic from "../../../assets/images/express.svg";
import awsCert from "../../../assets/images/aws-cert.jpg";

import htmlCert from "../../../assets/images/html-css-cert.jpg";
import gitCert from "../../../assets/images/git-cert.jpg";

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
        <h2 className="skills-heading">Certificatons</h2>
        <ul>
          <li className="transition2">
            <div className="icon-container one">
              <img src={htmlCert} alt="" />
            </div>
            <p className="skill-title">
              HTML and CSS for modern web development
            </p>
            {/* <p className="featured-desc skill-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id luctus
              sem ac integer quis.
            </p> */}
          </li>
          <li className="transition2">
            <div className="icon-container two">
              <img src={gitCert} alt="" />
            </div>
            <p className="skill-title">GIT and GitHub</p>
            {/* <p className="featured-desc skill-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id luctus
              sem ac integer quis.
            </p> */}
          </li>
          <li className="transition2">
            <div className="icon-container three">
              <img src={awsCert} alt="" />
            </div>
            <p className="skill-title">AWS Archietecht</p>
            {/* <p className="featured-desc skill-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id luctus
              sem ac integer quis.
            </p> */}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SkillGrid;
