"use client";

import { FC, useEffect } from "react";
import { useInView, useAnimate, stagger } from "motion/react";
import SplitType from "split-type";

const Intro: FC = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    new SplitType(scope.current.querySelector("h2"), {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  useEffect(() => {
    if (inView) {
      animate(
        scope.current.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        }
      );
    }
  }, [inView, animate, scope]);

  return (
    <section
      className="section mt-12 md:mt-16 lg:mt-20 relative z-5"
      id="intro"
      ref={scope}
    >
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">
          Driven by innovation,
          <br></br>I craft{" "}
          <span className="text-[#8046F3] font-semibold whitespace-nowrap">
            solutions
          </span>{" "}
          that elevate the{" "}
          <span className="text-[#8046F3] font-semibold whitespace-nowrap">
            user
          </span>{" "}
          experience and drive{" "}
          <span className="text-[#8046F3] font-semibold whitespace-nowrap">
            business
          </span>{" "}
          success.
        </h2>
      </div>
    </section>
  );
};

export default Intro;
