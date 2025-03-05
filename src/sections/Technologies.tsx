"use client";

import { FC, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiVercel,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiJavascript,
} from "react-icons/si";

const technologies = [
  {
    name: "Frontend",
    list: [
      { icon: SiHtml5, name: "HTML" },
      { icon: SiCss3, name: "CSS" },
      { icon: SiJavascript, name: "Javascript" },
      { icon: FaReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
  },
  {
    name: "Backend",
    list: [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: FaPython, name: "Python" },
      { icon: SiExpress, name: "Express" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    name: "DevOps",
    list: [
      { icon: FaGitAlt, name: "Git" },
      { icon: FaAws, name: "AWS" },
      { icon: FaDocker, name: "Docker" },
      { icon: SiVercel, name: "Vercel" },
    ],
  },
];

const Technologies: FC = () => {
  const [technologiesIndex, setTechnologiesIndex] = useState(0);
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start end", "end start"],
  });

  const transformTop = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const transformBottom = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  const handlePrevClick = () => {
    setTechnologiesIndex((prevIndex) =>
      prevIndex === 0 ? technologies.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setTechnologiesIndex((prevIndex) => (prevIndex + 1) % technologies.length);
  };

  const currentTech = technologies[technologiesIndex];

  return (
    <section className="section" id="skills">
      <h2
        className="text-3xl md:text-6xl lg:text-7xl flex flex-col overflow-hidden tracking-tighter"
        ref={titleRef}
      >
        <motion.div
          className="flex items-center whitespace-nowrap"
          style={{
            x: transformTop,
          }}
        >
          My
          <span className="text-[#8046F3] font-semibold ml-2 mr-2">
            {" "}
            skills{" "}
          </span>{" "}
          solve problems effectively, and the{" "}
          <span className="text-[#8046F3] font-semibold ml-2 mr-2">
            {" "}
            technologies.{" "}
          </span>{" "}
          I leverage bring ideas to life.
        </motion.div>
        <motion.div
          className="flex items-center whitespace-nowrap self-end"
          style={{
            x: transformBottom,
          }}
        >
          My
          <span className="text-[#8046F3] font-semibold ml-2 mr-2">
            {" "}
            skills{" "}
          </span>{" "}
          solve problems effectively, and the{" "}
          <span className="text-[#8046F3] font-semibold ml-2 mr-2">
            {" "}
            technologies{" "}
          </span>{" "}
          I leverage bring ideas to life.
        </motion.div>
      </h2>

      <div className="container text-center mt-20">
        <div className="bg-[#3C3C3C] p-20 rounded-3xl">
          <h2 className="text-4xl font-bold text-white mb-12">
            {currentTech.name}
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={technologiesIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {currentTech.list.map(({ icon: Icon, name }) => (
                <div
                  key={name}
                  className="flex flex-col items-center group hover:scale-105 transition-all duration-500"
                >
                  <div className="bg-transparent p-6 rounded-full mb-4">
                    <Icon
                      size={48}
                      className="text-white group-hover:text-[#B38DFF]  transition-all duration-500"
                    />
                  </div>
                  <p className="text-lg text-white group-hover:text-[#B38DFF] font-medium transition-all duration-500">
                    {name}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 mt-12 justify-center">
            <motion.button
              onClick={handlePrevClick}
              whileTap={{ scale: 0.95 }}
              className="border border-white size-11 inline-flex items-center justify-center rounded-full hover:bg-[#B38DFF] hover:border-[#B38DFF] transition-all duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </motion.button>
            <motion.button
              onClick={handleNextClick}
              whileTap={{ scale: 0.95 }}
              className="border border-white size-11 inline-flex items-center justify-center rounded-full hover:bg-[#B38DFF] hover:border-[#B38DFF] transition-all duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
