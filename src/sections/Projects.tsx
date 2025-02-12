import { FC } from "react";
import proj1 from "@/assets/images/Seoulbound.png";
import proj2 from "@/assets/images/Resumate.png";
import proj3 from "@/assets/images/Reboost.png";
import proj4 from "@/assets/images/BeyondTheMirror.png";
import proj5 from "@/assets/images/Careerly.png";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Seoulbound",
    image: proj1,
  },
  {
    name: "Résumate",
    image: proj2,
  },
  {
    name: "Reboost",
    image: proj3,
    featured: true,
    slug: "reboost",
  },
  {
    name: "BeyondTheMirror AI",
    image: proj4,
  },
  {
    name: "Careerly",
    image: proj5,
    featured: true,
  },
];

const Projects: FC = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl text-[#8046F3] font-semibold">
          Projects
        </h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {projects.map(({ name, image, featured, slug }) => (
            <Link
              href={`/${slug}`}
              key={name}
              className="border-t last:border-b border-stone-400 border-dotted px-5 py-6 md:py-8 lg:py-10 flex flex-col relative group/project hover:text-white transition-all duration-300"
            >
              <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-700 bg-[#3C3C3C] rounded-xl"></div>
              <div className="relative">
                <div className="aspect-video md:hidden">
                  <Image
                    src={image}
                    alt={`${name} Banner`}
                    className="size-full object-cover"
                  />
                </div>
                <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
                  <div className="lg:group-hover/project:pl-8 transition-all duration-700">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl flex items-center gap-2">
                      {name}
                      {featured && (
                        <span className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5 text-[#8046F3]"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          <span className="text-sm font-normal opacity-80">
                            Featured Project
                          </span>
                        </span>
                      )}
                    </h3>
                  </div>
                  <div className="relative">
                    <div className="absolute aspect-video w-full top-1/2 -translate-y-1/2 opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 lg:group-hover/project:scale-110 z-10 transition-all duration-500">
                      {" "}
                      <Image
                        src={image}
                        alt={`${name} Banner`}
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:group-hover/project:pr-8 transition-all duration-700">
                    <div className="size-6 overflow-hidden">
                      <div className="h6 w-12 flex group-hover/project:-translate-x-1/2 transition-transform duration-300">
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
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
