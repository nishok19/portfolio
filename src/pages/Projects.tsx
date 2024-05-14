import { Button, ButtonGroup } from "@material-tailwind/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../ProjectsData.js";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const Projects = ({ setSection }: any) => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 2000,
    nextArrow: <PrevBtn />,
    prevArrow: <NextBtn />,
  };

  const [projectsDisplay, setProjectsDisplay] = useState(projects);
  const [selectedType, setSelectedType] = useState("all");

  const ref = useRef(null);
  const isProjectsInView = useInView(ref);

  useEffect(() => {
    console.log(projects.filter((item) => item.type === "react"));
    setProjectsDisplay(ProjectTypes("react"));
  }, []);

  useEffect(() => {
    console.log("isProjectsInView", isProjectsInView);
    isProjectsInView ? setSection(2) : null;
  }, [isProjectsInView]);

  const ProjectTypes = (type: any) => {
    if (type === "htmlcss") {
      setSelectedType("htmlcss");
      return projects.filter((item) => item.type === "htmlcss");
    } else if (type === "react") {
      setSelectedType("react");
      return projects.filter((item) => item.type === "react");
    } else if (type === "others") {
      setSelectedType("others");
      return projects.filter((item) => item.type === "others");
    } else if (type === "backend") {
      setSelectedType("backend");
      return projects.filter((item) => item.type === "backend");
    } else if (type === "all") {
      setSelectedType("all");
      return projects;
    } else {
      return projects;
    }
  };

  return (
    <section className="h-screen bg-[#064e3b] overflow-hidden w-screen">
      <div className="flex items-center">
        <h3
          ref={ref}
          className="text-[#fb923c] mt-10 ml-20 text-bold text-[70px]"
        >
          Portfolio
        </h3>
      </div>
      <div className="flex justify-center">
        <ButtonGroup variant="gradient" color="lime">
          <Button
            onClick={() => setProjectsDisplay(ProjectTypes("all"))}
            className={selectedType === "all" ? "" : "opacity-50"}
          >
            All
          </Button>
          <Button
            onClick={() => setProjectsDisplay(ProjectTypes("react"))}
            className={selectedType === "react" ? "" : "opacity-50"}
          >
            React
          </Button>
          <Button
            onClick={() => setProjectsDisplay(ProjectTypes("htmlcss"))}
            className={selectedType === "htmlcss" ? "" : "opacity-50"}
          >
            HTML & CSS
          </Button>
          <Button
            onClick={() => setProjectsDisplay(ProjectTypes("backend"))}
            className={selectedType === "backend" ? "" : "opacity-50"}
          >
            Backend
          </Button>
          <Button
            onClick={() => setProjectsDisplay(ProjectTypes("others"))}
            className={selectedType === "others" ? "" : "opacity-50"}
          >
            Others
          </Button>
        </ButtonGroup>
      </div>
      <div className="w-[80vw] m-auto pt-10">
        <div className="mt-20 p-7 rounded-xl">
          <Slider {...settings}>
            {projectsDisplay.map((item) => (
              <CardItem
                key={item.name}
                name={item.name}
                tech={item.type}
                summary={item.description}
                img={item.img}
                livelink={item.livelink}
                srclink={item.srclink}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const CardItem = ({ name, tech, summary, img, livelink, srclink }: any) => {
  return (
    <div className="bg-white h-[520px] w-[400px] text-black rounded-xl">
      <div className="rounded-t-xl flex justify-center items-center h-56 bg-[#86efac] p-4">
        <img src={img} alt="image" className="h-44 rounded-sm w-full" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <p className="text-xl font-semibold">{name}</p>
        <p>{summary}</p>
        <a href={srclink} target="_blank">
          <Button className="bg-indigo-400">Source Code</Button>
        </a>
        <a href={livelink} target="_blank">
          <Button className="bg-indigo-400">Live Link</Button>
        </a>
      </div>
    </div>
  );
};

const PrevBtn = ({ className, style, onClick }: any) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
};

const NextBtn = ({ className, style, onClick }: any) => {
  return (
    <div className={className} style={style} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};

// const data = [
//   {
//     name: "E-Commerce 1",
//     tech: ["React.js", "Next.js", "Tailwind CSS"],
//     summary:
//       "Developed an e-commerce web application using React.js, Next.js, and Tailwind CSS. Implemented features such as product filtering, product details page, and shopping cart",
//     img: "https://code.google.com/images/developers.png",
//   },
//   {
//     name: "E-Commerce 2",
//     tech: ["React.js", "Next.js", "Tailwind CSS"],
//     summary:
//       "Developed an e-commerce web application using React.js, Next.js, and Tailwind CSS. Implemented features such as product filtering, product details page, and shopping cart",
//     img: "https://code.google.com/images/developers.png",
//   },
//   {
//     name: "E-Commerce 3",
//     tech: ["React.js", "Next.js", "Tailwind CSS"],
//     summary:
//       "Developed an e-commerce web application using React.js, Next.js, and Tailwind CSS. Implemented features such as product filtering, product details page, and shopping cart",
//     img: "https://code.google.com/images/developers.png",
//   },
//   {
//     name: "E-Commerce 4",
//     tech: ["React.js", "Next.js", "Tailwind CSS"],
//     summary:
//       "Developed an e-commerce web application using React.js, Next.js, and Tailwind CSS. Implemented features such as product filtering, product details page, and shopping cart",
//     img: "https://code.google.com/images/developers.png",
//   },
//   {
//     name: "E-Commerce 5",
//     tech: ["React.js", "Next.js", "Tailwind CSS"],
//     summary:
//       "Developed an e-commerce web application using React.js, Next.js, and Tailwind CSS. Implemented features such as product filtering, product details page, and shopping cart",
//     img: "https://code.google.com/images/developers.png",
//   },
// ];

export default Projects;
