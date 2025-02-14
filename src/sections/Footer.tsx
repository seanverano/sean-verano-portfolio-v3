"use client";

import { FC, useEffect } from "react";
import Button from "@/components/Button";
import { useAnimate, useInView, stagger } from "motion/react";
import SplitType from "split-type";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Footer: FC = () => {
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
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container">
        <div className="section">
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2" ref={scope}>
              <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight">
                Every door that curiosity opens leads to progress.
              </h2>
              <a href="mailto:verano.seandustin@gmail.com">
                <Button
                  variant="primary"
                  className="mt-8"
                  iconAfter={
                    <div className="size-6 overflow-hidden">
                      <div className="w-12 h-6 flex group-hover/button:-translate-x-1/2 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  CURIOUS? LET&apos;S BUILD!
                </Button>
              </a>
            </div>
            <div>
              <div className="flex flex-col md:items-end gap-6 mt-16 md:mt-0">
                <a
                  href="mailto:verano.seandustin@gmail.com"
                  className="flex items-center gap-3 text-lg md:text-2xl lg:text-3xl text-white hover:text-[#8046F3] transition-colors"
                >
                  <FaEnvelope className="text-3xl" /> Gmail
                </a>
                <a
                  href="https://github.com/seanverano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg md:text-2xl lg:text-3xl  text-white hover:text-[#8046F3] transition-colors"
                >
                  <FaGithub className="text-3xl" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/sdverano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg md:text-2xl lg:text-3xl  text-white hover:text-[#8046F3] transition-colors"
                >
                  <FaLinkedin className="text-3xl" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="pt-4 text-white/30 text-sm">
            Developed by Sean Dustin Verano &bull; All Rights Reserved &copy;
            2025
          </p>
          <div className="pb-4 text-white/30 text-sm">
            Hero (Door) Image by{" "}
            <a
              className="hover:text-white"
              href="https://unsplash.com/@luke_co?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luke Collinson
            </a>{" "}
            on{" "}
            <a
              className="hover:text-white"
              href="https://unsplash.com/photos/an-empty-room-with-a-light-coming-through-the-wall-_ix7oXz4kXo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>
          </div>
          <div className="pb-4 text-white/30 text-sm">
            This is the version 3 of my portfolio. Check out the previous
            version
            <a
              className="hover:text-white"
              href="https://seanverano.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;here
            </a>
            —albeit old and unfinished.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
