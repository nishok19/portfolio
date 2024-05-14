import { motion, useInView } from "framer-motion";
import { skills } from "../ProjectsData";
import { useEffect, useRef } from "react";

const Skills = ({ setSection }: any) => {
  const ref = useRef(null);
  const isSkillsInView = useInView(ref);

  useEffect(() => {
    console.log("isskillsinview", isSkillsInView);
    isSkillsInView ? setSection(1) : null;
  }, [isSkillsInView]);

  return (
    <motion.section className="h-screen w-screen flex p-12">
      <motion.div
        ref={ref}
        whileInView={"visible"}
        className="ml-auto mt-8 mr-48 space-y-4 p-20 bg-[#f3f4f6a4] rounded-3xl"
      >
        <h2 className="text-5xl font-[900]">Skills</h2>
        {skills.map((skill, index) => (
          <div className="w-64" key={index}>
            <motion.h3
              className="text-xl font-semibold text-gray-800"
              initial={{
                opacity: 0,
              }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1 + index * 0.2,
                  },
                },
              }}
            >
              {skill.title}
            </motion.h3>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
              <motion.div
                className="h-full bg-indigo-500 rounded-full "
                style={{ width: `${skill.level}%` }}
                initial={{
                  scaleX: 0,
                  originX: 0,
                }}
                variants={{
                  visible: {
                    scaleX: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
