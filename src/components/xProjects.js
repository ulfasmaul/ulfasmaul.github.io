import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    name: "Campaign Effectiveness & Customer Responsiveness Analysis",
    href: "#",
    imageSrc: "\DEEPP.jpg",
    used: "Python, Tableau, Jupyter Notebook, Pandas, NumPy, Matplotlib, Seaborn",
    description: "Conducted an end-to-end analytics project to evaluate campaign effectiveness and identify high-value customer segments for targeted marketing.",
  },
  {
    id: 2,
    name: "Paper Bag",
    href: "#",
    imageSrc: "\Data Visualization.jpg",
    used: "ReactJS, TailwindCSS",
    description: "An online shopping website.",
  },
  {
    id: 3,
    name: "My Blogs",
    href: "#",
    imageSrc: "\Python.jpg",
    used: "ReactJS, TailwindCSS",
    description: "A personal blogging website.",
  },
  {
    id: 4,
    name: "Canopy",
    href: "#",
    imageSrc: "\SQL.jpg",
    used: "ReactJS, TailwindCSS",
    description: "An online educational website.",
  },
  {
    id: 5,
    name: "Canopy",
    href: "#",
    imageSrc: "\Statistics & Spreadsheet.jpg",
    used: "ReactJS, TailwindCSS",
    description: "An online educational website.",
  },

];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="projects">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Project Experiences
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {(showAll ? projects : projects.slice(0, 3)).map((project) => (
            <div
              key={project.id}
              className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
              data-aos="flip-left"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:brightness-75 duration-300 delay-100 lg:h-80 rounded-t-2xl ">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between p-4">
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <a href={project.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-1 mb-5 text-sm">{project.description}</p>
                  <p className="text-sm font-medium">{project.used}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button className="btn btn-outline" onClick={() => setShowAll(!showAll)}>
		{showAll ? "View Less" : "View More"}
	  </button>
        </div>
      </div>
    </div>
  );
}
