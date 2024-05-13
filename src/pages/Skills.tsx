import { motion } from "framer-motion";
import { skills } from "../ProjectsData";

const Skills = () => {
  return (
    <section className="h-screen flex p-12">
      <motion.div whileInView={"visible"} className="ml-20 mt-8 space-y-4">
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
    </section>
  );
};

export default Skills;
