import { motion, useScroll } from "framer-motion";

import "./ProjectCard.scss";
// import CodeIcon from ".."

const cardVariants = {
  offscreen: {
    x: -1100,
  },
  onscreen: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.5,
    },
  },
};

const ProjectCard = ({ project }) => {
  // const { scrollYProgress } = useScroll();
  // console.log(scrollYProgress);
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants} className="card projectCard">
        <div className="projectCard-left">
          <h1 className="">{project.name}</h1>
          <p className="">{project.description}</p>
          <div>
            <a href={project.srclink} target="_blank">
              <img
                src={require("../../../assets/svg/code-icon.svg").default}
                alt=""
              />
              <span>Source Code</span>
            </a>
            <a href={project.livelink} target="_blank">
              <img
                src={require("../../../assets/svg/code-icon2.svg").default}
                alt=""
              />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
        <div className="projectCard-right">
          <img src={project.img} alt="image" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
