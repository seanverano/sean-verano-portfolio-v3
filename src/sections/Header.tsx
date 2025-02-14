"use client";
import { useState, useEffect } from "react";
import { FC } from "react";
import Button from "@/components/Button";
import { motion, useAnimate } from "motion/react";
const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
          },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          },
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
          },
        ],
      ]);

      navAnimate(
        navScope.current,
        {
          height: "100%",
        },
        {
          duration: 0.7,
        }
      );
    } else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          topLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);

      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);
      navAnimate(navScope.current, {
        height: 0,
      });
    }
  }, [
    isOpen,
    topLineAnimate,
    topLineScope,
    bottomLineAnimate,
    bottomLineScope,
    navScope,
    navAnimate,
  ]);

  const scrollToSection = (hash: string) => {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleNavItemClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(hash);
  };

  return (
    <header>
      <div
        className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-10"
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              className="text-stone-200 border-t border-stone-800 last:border-b py-8 group/nav-item relative isolate uppercase"
              onClick={(e) => handleNavItemClick(e, href)}
            >
              <div className="container !max-w-full flex items-center justify-between">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
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
              <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
            </a>
          ))}
        </nav>
      </div>

      <div className="fixed top-0 left-0 w-full z-10">
        <div className="container !max-w-full">
          <div className="hidden md:flex justify-between h-20 items-center">
            <div>
              <a
                href="/"
                className="flex items-center text-xl font-bold text-[#1C1917]"
              >
                <span className="text-[#8046F3] text-lg flex flex-col items-start mt-4">
                  <span>SEAN&nbsp;DUSTIN&nbsp;VERANO</span>
                  <span>Full&nbsp;Stack&nbsp;Developer</span>
                </span>
              </a>
            </div>

            <nav className="flex items-center space-x-6 text-lg">
              {navItems.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="
                  text-[#3C3C3C]
                  relative 
                  group 
                  px-0 
                  border-transparent hover:text-[#8046F3] transition-all duration-500 uppercase"
                  onClick={(e) => handleNavItemClick(e, href)}
                >
                  <span className="relative">
                    {label}
                    <span className="absolute left-0 bottom-[-2px] h-px w-0 bg-[#8046F3] transition-all duration-500 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={(e) => handleNavItemClick(e, "#contact")}
            >
              <Button variant="primary">Get in Touch</Button>
            </a>
          </div>

          <div className="flex md:hidden justify-between h-20 items-center">
            <div>
              <a
                href="/"
                className="flex items-center text-xl font-bold text-[#1C1917]"
              >
                <span className="text-[#8046F3] flex flex-col">
                  <span>SEAN&nbsp;DUSTIN&nbsp;VERANO</span>
                  <span>Full&nbsp;Stack&nbsp;Developer</span>
                </span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div
                className="size-11 border border-transparent rounded-full inline-flex items-center justify-center bg-[#8046F3]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="white"
                    ref={topLineScope}
                    style={{
                      transformOrigin: "12px 8px",
                      transform: "translateY(4px) rotate(45deg)",
                    }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="white"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: "12px 16px",
                      transform: "translateY(-4px) rotate(-45deg)",
                    }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
