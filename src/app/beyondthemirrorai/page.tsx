"use client";
import { FC, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import Button from "@/components/Button";
import { FiGithub, FiYoutube, FiGlobe } from "react-icons/fi";
import Link from "next/link";

const faqs = [
  {
    question: "Can you give a brief overview of this project?",
    answer:
      "BTM is an AI-powered interview preparation tool where users can manage questions, practice interviews using text or voice input, and receive detailed feedback and ratings for each question and overall performance.",
  },
  {
    question: "What was your role, and what tools did you use?",
    answer: (
      <>
        <p>
          I was the sole developer of this full-stack app, handling everything
          from managing the database to integrating the AI using CRUD
          operations.
        </p>
        <p>
          <br></br>For the tools, I used React, Tailwind CSS, and shadcn/ui for
          the frontend, and Node.js, Express, and MongoDB for the backend. For
          integrating the AI, I got my API key from Google Gemini and used the
          Web Speech API to transform users spoken answers into text so the AI
          can process the data.
        </p>
      </>
    ),
  },
  {
    question: "What challenges did you face, and how did you solve them?",
    answer: (
      <>
        <p>
          The biggest challenge was building the form where users could input
          their details and designing the resume templates.
        </p>
        <p>
          <br></br>At the time, I only knew vanilla CSS, and I was torn between
          sticking with it or learning Tailwind CSS. I chose the latter, and it
          turned out to be the best decision! It significantly sped up my
          development process and made styling much more efficient.
        </p>
      </>
    ),
  },
];

const BeyondTheMirrorPage: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-10 mt-6 md:mt-8 lg:mt-10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#8046F3] text-center mb-6">
          Beyond The Mirror AI
        </h2>
        <div className="relative w-full h-64 md:h-96 lg:h-[32rem] overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/oSCmyd1bWgQ"
            title="Project Preview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex gap-4 mt-12 justify-center items-center">
          <div className="flex flex-col items-center">
            <a
              href="https://github.com/seanverano/beyond-the-mirror"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 size-12 md:size-16 inline-flex items-center justify-center rounded-full hover:bg-[#8046F3] border-[#8046F3] group transition-all duration-500"
            >
              <FiGithub className="text-xl md:text-3xl text-[#8046F3] group-hover:text-white" />
            </a>

            <span className="text-[#8046F3] mt-2 text-base md:text-lg">
              Source Code
            </span>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://www.youtube.com/watch?v=oSCmyd1bWgQ"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 size-12 md:size-16 inline-flex items-center justify-center rounded-full hover:bg-[#8046F3] border-[#8046F3] group transition-all duration-500"
            >
              <FiYoutube className="text-xl md:text-3xl text-[#8046F3] group-hover:text-white" />
            </a>

            <span className="text-[#8046F3] mt-2 text-base md:text-lg">
              Preview
            </span>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://beyond-the-mirror.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 size-12 md:size-16 inline-flex items-center justify-center rounded-full hover:bg-[#8046F3] border-[#8046F3] group transition-all duration-500"
            >
              <FiGlobe className="text-xl md:text-3xl text-[#8046F3] group-hover:text-white" />
            </a>

            <span className="text-[#8046F3] mt-2 text-base md:text-lg">
              Official Site
            </span>
          </div>
        </div>
      </div>
      <div className="container mb-6">
        <div className="mt-10 md:mt-16 lg:mt-20 cursor-pointer">
          {faqs.map(({ question, answer }, faqIndex) => (
            <div
              key={question}
              className="border-t border-stone-400 border-dotted px-5 py-6 md:py-8 lg:py-10 last:border-b relative isolate group/faq"
              onClick={() => {
                if (faqIndex === selectedIndex) {
                  setSelectedIndex(null);
                } else {
                  setSelectedIndex(faqIndex);
                }
              }}
            >
              <div
                className={twMerge(
                  "absolute h-0 w-full bottom-0 left-0 bg-[#3C3C3C] -z-10 group-hover/faq:h-full transition-all duration-700 rounded-xl",
                  faqIndex === selectedIndex && "h-full"
                )}
              >
                {" "}
              </div>
              <div
                className={twMerge(
                  "flex items-center justify-between gap-4 transition-all duration-700 group-hover/faq:lg:px-8",
                  faqIndex === selectedIndex && "lg:px-8"
                )}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl group-hover/faq:text-white font-semibold transition-all duration-300">
                  {question}
                </div>
                <div
                  className={twMerge(
                    "inline-flex border border-[#8046F3] items-center justify-center size-11 rounded-full shrink-0 transition duration-300",
                    faqIndex === selectedIndex && "rotate-45"
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#8046F3"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {faqIndex === selectedIndex && (
                  <motion.div
                    className="overflow-hidden lg:px-8"
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    <p className="text-white text-xl md:text-2xl lg:text-2xl mt-4">
                      {answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <a href="/" className="flex justify-center items-center mb-6">
          <Button
            variant="primary"
            className="inline-flex items-center text-lg"
            iconBefore={
              <div className="size-5 overflow-hidden">
                <div className="w-10 h-5 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                </div>
              </div>
            }
          >
            HOME
          </Button>
        </a>
        <Link href="/seoulbound">
          <div className="flex justify-center items-center mb-6">
            <Button
              variant="primary"
              className="inline-flex items-center text-lg"
              iconAfter={
                <div className="size-5 overflow-hidden">
                  <div className="w-10 h-5 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              }
            >
              NEXT
            </Button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BeyondTheMirrorPage;
