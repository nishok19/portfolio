import { useEffect, useRef } from "react";
import "./Project1.scss";

import chatPic from "../../../assets/images/chat-sample.png";
import { gsap } from "gsap";

const Project1 = () => {
  const project1Ref = useRef();

  useEffect(() => {
    gsap.from(project1Ref.current, {
      scrollTrigger: {
        trigger: ".left",
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
      delay: 0.4,
    });
  }, []);

  return (
    <section className="featured" ref={project1Ref}>
      <div className="left">
        <div className="inner transition2">
          <p className="subtitle">Featured Project</p>
          <a href="/" className="featured-title">
            Realtime Chat Application
          </a>
          <p className="featured-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ea
            error tempore eum sunt nesciunt nam modi sequi, molestias omnis!
          </p>
        </div>
      </div>

      <img src={chatPic} alt="Featured Project" className="right transition2" />
    </section>
  );
};

export default Project1;

//
// function animateFrom(elem, direction) {
//   direction = direction || 1;
//   var x = 0,
//     y = direction * 100;
//   if (elem.classList.contains("left")) {
//     x = -100;
//     y = 0;
//   } else if (elem.classList.contains("right")) {
//     x = 100;
//     y = 0;
//   }
//   elem.style.transform = "translate(" + x + "px, " + y + "px)";
//   elem.style.opacity = "0";
//   gsap.fromTo(
//     elem,
//     { x: x, y: y, autoAlpha: 0 },
//     {
//       duration: 1.25,
//       x: 0,
//       y: 0,
//       autoAlpha: 1,
//       ease: "expo",
//       overwrite: "auto",
//     }
//   );
// }

// function hide(elem) {
//   gsap.set(elem, { autoAlpha: 0 });
// }

// useEffect(() => {
//   document.addEventListener("DOMContentLoaded", function () {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.utils.toArray(".featured").forEach(function (elem) {
//       hide(elem); // assure that the element is hidden when scrolled into view

//       ScrollTrigger.create({
//         trigger: elem,
//         onEnter: function () {
//           animateFrom(elem);
//         },
//         onEnterBack: function () {
//           animateFrom(elem, -1);
//         },
//         onLeave: function () {
//           hide(elem);
//         }, // assure that the element is hidden when scrolled into view
//       });
//     });
//   });
// }, []);

//
