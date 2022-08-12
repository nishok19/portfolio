import { useEffect } from "react";
import "./Hero.scss";

// import heroGraphic from "../../../images/hero-graphic.svg";
import sliderVect from "../../../assets/images/slider.svg";
import downVect from "../../../assets/images/down-arrow.svg";

// import { useSpring, animated } from "react-spring";
import { gsap, Power4, Back } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "bottom top",
        // scrub: true,
      },
    });

    tl.from(".content", {
      y: "-30%",
      opacity: 0,
      duration: 2,
      ease: Power4.easeOut,
    });

    tl.from(
      ".stagger1",
      {
        opacity: 0,
        y: -50,
        stagger: 0.3,
        ease: Power4.easeOut,
        duration: 2,
        // delay: 2,
      },
      "-=1"
    );

    tl.from(
      ".hero-design",
      {
        opacity: 0,
        y: 50,
        ease: Power4.easeOut,
        duration: 1,
      },
      "-=2"
    );

    gsap.from(
      ".square-anim",
      {
        stagger: 0.2,
        scale: 0.01,
        duration: 0.8,
        ease: Back.easeOut.config(1.7),
      },
      "+=0.7"
    );
  }, []);

  return (
    <section className="hero">
      <div className="content">
        <h1 className="stagger1">Beautifully Crafted Web Experiences</h1>
        <div className="meet stagger1">
          <span>
            <img src={downVect} alt="down" />
          </span>

          <p>Meet Nishok ;)</p>
        </div>

        {/* <img className="scroll stagger1" src={sliderVect} alt="slider" /> */}
        {/* slider-graphic */}
        <svg
          className="scroll stagger1"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="110"
          fill="none"
          viewBox="0 0 60 110"
        >
          <rect
            width="51"
            height="100.167"
            x="4.5"
            y="4.5"
            stroke="#fff"
            strokeWidth="9"
            rx="25.5"
          ></rect>
          <ellipse
            className="scrollCircle"
            cx="30"
            cy="34.5"
            fill="#fff"
            rx="12"
            ry="11.5"
          ></ellipse>
        </svg>
        {/* slider-graphic-end */}
      </div>

      {/* <img className="hero-design" src={heroGraphic} alt="graphic" /> */}

      {/* hero-design-graphic */}
      <svg
        className="hero-design"
        xmlns="http://www.w3.org/2000/svg"
        width="648"
        height="648"
        fill="none"
        viewBox="0 0 648 648"
      >
        <rect
          className="square-anim"
          width="162"
          height="162"
          x="324"
          fill="#6E00FF"
          rx="25"
        ></rect>
        <rect
          className="square-anim"
          width="162"
          height="162"
          y="324"
          fill="#9B50FF"
          rx="25"
        ></rect>
        <rect
          className="square-anim"
          width="162"
          height="162"
          x="324"
          y="324"
          fill="#6E00FF"
          rx="25"
        ></rect>
        <g style={{ mixBlendMode: "darken" }} opacity="0.6">
          <rect
            className="square-anim"
            width="162"
            height="162"
            x="486"
            y="162"
            fill="#6E00FF"
            rx="25"
          ></rect>
          <rect
            className="square-anim"
            width="162"
            height="162"
            x="162"
            y="162"
            fill="#fff"
            rx="25"
          ></rect>
          <circle
            className="square-anim"
            cx="400.5"
            cy="243.5"
            r="76.5"
            fill="#FF64CB"
          ></circle>
          <circle cx="242.5" cy="404.5" r="76.5" fill="#10F4E7"></circle>
        </g>
        <rect
          className="square-anim"
          width="162"
          height="162"
          x="166"
          y="486"
          fill="#fff"
          rx="25"
        ></rect>
      </svg>
      {/* hero-graphic-design-end */}
    </section>
  );

  //

  // const nameAnim = useSpring({
  //   from: { opacity: 0, y: -30 },
  //   to: { opacity: 1, y: 0 },
  //   config: { duration: 1000 },
  //   delay: 700,
  // });
  // (
  //   <animated.section style={heroBgAnim} className="hero">
  //     <div className="content">
  //       <animated.h1 style={heroAnim} className="stagger1">
  //         Beautifully Crafted Web Experiences
  //       </animated.h1>
  //       <animated.div style={nameAnim} className="meet stagger1">
  //         <span>
  //           <img src={downVect} alt="down" />
  //         </span>

  //         <p>Meet Nishok ;)</p>
  //       </animated.div>

  //       <animated.img
  //         style={nameAnim}
  //         className="scroll stagger1"
  //         src={sliderVect}
  //         alt="slider"
  //       />
  //     </div>

  //     <animated.img
  //       style={heroAnim}
  //       className="hero-design"
  //       src={heroGraphic}
  //       alt="graphic"
  //     />
  //   </animated.section>
  // );
};

export default Hero;
