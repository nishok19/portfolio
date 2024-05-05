import { useScroll } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const ScrollManager = ({ section, onSectionChange, children }: any) => {
  const scroll = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  scroll.fill.classList.add("top-0");
  scroll.fill.classList.add("absolute");

  useEffect(() => {
    gsap.to(scroll.el, {
      duration: 1,
      scrollTop: section * scroll.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);

  // useFrame(() => {
  //   if (isAnimating.current) {
  //     lastScroll.current = scroll.scroll.current;
  //     scroll.return;
  //   }
  //   const curSection = Math.floor(scroll.scroll.current * scroll.pages);
  //   if (scroll.scroll.current > lastScroll.current && curSection === 0) {
  //     onSectionChange(1);
  //   }
  //   if (
  //     scroll.scroll.current < lastScroll.current &&
  //     scroll.scroll.current < 1 / (scroll.pages - 1)
  //   ) {
  //     onSectionChange(0);
  //   }
  // });
  return <>{children}</>;
};

export default ScrollManager;
