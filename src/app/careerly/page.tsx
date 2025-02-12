"use client";
import { FC, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import Button from "@/components/Button";
import { FaExternalLinkAlt } from "react-icons/fa";

const faqs = [
  {
    question: "Can you give a brief overview of this project?",
    answer:
      "Careerly offers 3 essential tools in one platform to help job seekers advance their careers with ease and confidence. Users can build their resume effortlessly, practice interviews with AI feedback, or find job matches tailored to them.",
  },
  {
    question: "What was your role, and what tools did you use?",
    answer: (
      <>
        <p>
          I led a team of 4 in developing this full-stack platform, managing the
          database and designing the overall UI. I also implemented AI-driven
          interview prep using the Google Gemini AI API (Feature 2) and handled
          project compilation and deployment.
        </p>
        <p>
          <br></br>For the tools, our team used the MERN stack (MongoDB,
          Express, React, Node.js) and integrated 4 APIs (Google Gemini AI,
          TomTom, Web Speech, and Serper) for the features.
        </p>
      </>
    ),
  },
  {
    question: "What challenges did you face, and how did you solve them?",
    answer: (
      <>
        <p>
          The biggest challenge was during the brainstorming phase when our team
          struggled with communication. Since most of us were introverted,
          discussions felt stagnant.
        </p>
        <p>
          <br></br>To solve this, I took the initiative to reach out to each
          member privately, encouraging them to share their thoughts. Over time,
          this helped everyone become more open and engaged. Eventually, our
          group meetings became lively, which I believe played a key role in
          helping us deliver the project on time.
        </p>
      </>
    ),
  },

  {
    question:
      "Where can I try the platform, view the source code, or learn more?",
    answer: (
      <>
        You can try{" "}
        <a
          href="https://try-careerly.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8046F3] font-semibold inline-flex items-center gap-2 hover:text-white"
        >
          Careerly <FaExternalLinkAlt className="size-4" />
        </a>{" "}
        here to learn more and see how it works
        <br></br>
        <br></br>
        Or explore the source code on{" "}
        <a
          href="https://github.com/seanverano/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8046F3] font-semibold inline-flex items-center gap-2 hover:text-white"
        >
          GitHub <FaExternalLinkAlt className="size-4" />
        </a>
      </>
    ),
  },
];

const CareerlyPage: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-10 mt-6 md:mt-8 lg:mt-10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#8046F3] text-center mb-6">
          Careerly
        </h2>
        <div className="relative w-full h-64 md:h-96 lg:h-[32rem] overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/g8RL_s4DbIY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
      <a href="/" className="flex justify-center items-center mb-6">
        <Button
          variant="primary"
          className="inline-flex items-center gap-4 text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 inline-block pr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          HOME
        </Button>
      </a>
    </section>
  );
};

export default CareerlyPage;
