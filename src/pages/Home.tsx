import { Button } from "@material-tailwind/react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Home = ({ menuOpened, setSection }: any) => {
  const ref = useRef(null);
  const isHomeInView = useInView(ref, { amount: 0 });

  useEffect(() => {
    console.log("isHomeInView ", isHomeInView);
    isHomeInView ? setSection(0) : null;
  }, [isHomeInView]);

  if (menuOpened) return <section className="h-screen w-screen"></section>;

  return (
    <section className="h-screen w-screen">
      <motion.div className="flex justify-start pt-[20%] ml-[10%] h-full">
        <div className="flex flex-col">
          <h2 className="font-[400] text-[48px]">
            Solve Problems! Write Code!
          </h2>
          <h5 className="text-[24px] mt-2">
            I'm Nishok, the one with the code.
          </h5>
          <Button ref={ref} size="lg" className="w-max mt-5">
            Contact Nishok
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
