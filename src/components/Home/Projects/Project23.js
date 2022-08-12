import { useEffect } from "react";
import "./Project23.scss";

import todoPic from "../../../assets/images/todo-sample.png";
import weatherPic from "../../../assets/images/weather-sample.png";

import { gsap } from "gsap";

const Project23 = () => {
  useEffect(() => {
    gsap.from(".transition3", {
      scrollTrigger: {
        trigger: ".transition3",
        start: "top bottom",
        // end: "bottom center",
        toggleActions: "play reset play reset",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      stagger: 0.6,
    });
  }, []);

  return (
    <section className="portfolio project23">
      <div className="portfolio-container transition3">
        <div className="portfolio-left">
          <div className="inner">
            <p className="subtitle">Featured Project</p>
            <p className="featured-title">TODO App</p>
            <p className="featured-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
              tellus condimentum nisl adipiscing. Facilisis arcu pellentesque
              proin lobortis pharetra, nunc, purus.
            </p>
          </div>
        </div>
        <a href="/">
          <img src={todoPic} alt="TODO" />
        </a>
      </div>
      <div className="portfolio-container transition3">
        <div className="portfolio-left">
          <div className="inner">
            <p className="subtitle">Featured Project</p>
            <p className="featured-title">Weather App</p>
            <p className="featured-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
              tellus condimentum nisl adipiscing. Facilisis arcu pellentesque
              proin lobortis pharetra, nunc, purus.
            </p>
          </div>
        </div>
        <a href="/">
          <img src={weatherPic} alt="Weather" />
        </a>
      </div>
    </section>
  );
};

export default Project23;
