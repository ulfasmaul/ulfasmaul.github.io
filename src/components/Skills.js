import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SiPython,
  SiGooglesheets
} from "react-icons/si";
import { 
  FaChartBar,
  FaDatabase
} from "react-icons/fa";
import { TbBrandOffice } from "react-icons/tb";


const technical = [
  {
    name: "Business Understanding",
    icon: CheckCircleIcon,
  },
  {
    name: "Data Cleaning",
    icon: CheckCircleIcon,
  },
  {
    name: "Exploratory Data Analysis (EDA)",
    icon: CheckCircleIcon,
  },
	{
    name: "A/B Testing",
    icon: CheckCircleIcon,
  },
  {
    name: "Statistical Analysis",
    icon: CheckCircleIcon,
  },
  {
    name: "Data Visualization",
    icon: CheckCircleIcon,
  },
  {
    name: "Dashboard Development",
    icon: CheckCircleIcon,
  },
  {
    name: "Business Performance Analysis",
    icon: CheckCircleIcon,
  },
  {
    name: "Data Storytelling",
    icon: CheckCircleIcon,
  },
 {
    name: "Data Interpretation",
    icon: CheckCircleIcon,
  },
  {
    name: "Insight Generation",
    icon: CheckCircleIcon,
  }
];
const soft = [
  {
    name: "Analytical Thinking",
    icon: CheckCircleIcon,
  },
  {
    name: "Problem Solving",
    icon: CheckCircleIcon,
  },
  {
    name: "Cross-functional Collaboration",
    icon: CheckCircleIcon,
  },
  {
    name: "Attention to Detail",
    icon: CheckCircleIcon,
  },
  {
    name: "Time Management",
    icon: CheckCircleIcon,
  },
  {
    name: "Adaptability",
    icon: CheckCircleIcon,
  },
];

const tool = [
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "SQL",
    icon: FaDatabase,
  },
  {
    name: "Tableau",
    icon: FaChartBar,
  },
  {
    name: "Microsoft Excel & SpreadSheets",
    icon: SiGooglesheets,
  },
  {
    name: "Microsoft Office",
    icon: TbBrandOffice,
  }
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
  <div className="py-24 sm:py-32" id="skills">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-xl leading-7">
          Explore my
        </h2>

        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Skills
        </p>
      </div>

      {/* Technical & Soft Skills */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Technical Skills */}
        <div
          className="bg-base-200 ring-2 ring-base-300 rounded-2xl p-8 shadow-xl"
          data-aos="zoom-in"
        >
          <p className="text-2xl text-center font-bold mb-8">
            Technical Skills
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technical.map((skill) => (
              <div key={skill.name} className="relative pl-12">
                <div className="absolute left-0 top-0">
                  <skill.icon className="h-6 w-6" />
                </div>

                <p className="font-semibold">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div
          className="bg-base-200 ring-2 ring-base-300 rounded-2xl p-8 shadow-xl"
          data-aos="zoom-in"
        >
          <p className="text-2xl text-center font-bold mb-8">
            Soft Skills
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {soft.map((skill) => (
              <div key={skill.name} className="relative pl-12">
                <div className="absolute left-0 top-0">
                  <skill.icon className="h-6 w-6" />
                </div>

                <p className="font-semibold">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Tools */}
      <div
        className="mt-10 bg-base-200 ring-2 ring-base-300 rounded-2xl p-10 shadow-xl"
        data-aos="zoom-in"
      >
        <p className="text-2xl text-center font-bold mb-10">
          Tools
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {tool.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center gap-4 hover:scale-110 duration-300"
            >
              <skill.icon className="text-6xl text-gray-500" />

              <p className="text-center font-medium">
                {skill.name}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>
  </div>
);
}
