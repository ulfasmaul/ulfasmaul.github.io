import { useEffect, useState } from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";


const educations = [
  {
    logo: "/LogoRevoU.png",
    school: "RevoU",
    degree: "Full Stack Data Analytics Program",
    duration: "Feb - Jun 2026",
    desc: "Completed the RevoU Full Stack Data Analytics Program, applying SQL, Python, and Tableau to end-to-end analytics projects involving campaign analysis, customer segmentation, dashboard development, and data-driven recommendations.",
    gpa: "",
  },
  {
    logo: "/LogoUP.png",
    school: "Universitas Pancasila Jakarta",
    degree: "Bachelor’s Degree in Informatics Engineering",
    duration: "2014 - 2016",
    desc: "Designed and developed a web-based Blood Bag Management Information System for the Indonesian Red Cross (UTD PMI) using PHP Laravel and MySQL to improve blood donor operations and blood bag management. The system streamlined donor data recording, blood inventory tracking, and operational reporting, enabling faster access to information and improving service efficiency. By digitizing manual processes, the system enhanced data accuracy, accessibility, and monitoring of blood donation activities.",
    gpa: "",
  },
  {
    logo: "/LogoPoltek.jpg",
    school: "Politeknik Telkom Bandung",
    degree: "Diploma’s Degree in Informatics Management",
    duration: "2008 - 2011",
    desc: "Designed and developed a web-based Blood Donor Information System for the KSR PMI Unit at Telkom Polytechnic using PHP and MySQL to enhance the efficiency of blood donation operations within the campus community. The system streamlined donor data management and operational reporting, enabling faster access to information and supporting more effective decision-making. By digitizing previously manual processes, the solution improved data accuracy, accessibility, and the monitoring of blood donation activities, resulting in more efficient and reliable operational workflows.",
    gpa: "",
  },
];


function ReadMore({ text, maxLength = 180 }) {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  const shouldTruncate = text.length > maxLength;

  return (
    <div className="mt-6">
      <p className="text-gray-600 leading-8">
        {expanded || !shouldTruncate
          ? text
          : `${text.substring(0, maxLength)}...`}
      </p>

      {shouldTruncate && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-blue-600 font-medium hover:underline"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-1 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
          <div className="w-full">
            <div className="w-full">
              <h2 className="text-lg leading-7">Get to know more</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8" text-justify data-aos="fade-right" style={{ textAlign: "justify" }}>
                Analytical and detail-oriented professional transitioning into Data Analytics with 10+ years of experience in the technology industry. Experienced in requirements analysis, business process understanding, cross-functional collaboration, and translating complex information into actionable insights. Completed the Full Stack Data Analytics program with hands-on experience in SQL, Python, Tableau, Excel, exploratory data analysis, statistical analysis, and dashboard development. Passionate about using data to identify business opportunities, improve decision-making, and drive operational and customer-focused improvements.
              </p>
	      <p className="mt-6 text-lg leading-8" text-justify data-aos="fade-right" style={{ textAlign: "justify" }}>
		 In this portfolio, I showcase some of my selected projects that demonstrate my analytical thinking and problem-solving capabilities.
	      </p>
            </div>
          </div>
        </div>
      </div>
        
  <div className="mx-auto mt-10 max-w-7xl px-8">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

  {educations.map((edu, index) => (
    <div
      key={index}
      className="bg-base-100 rounded-3xl shadow-lg p-8 h-full w-full"
    >
      <div className="flex items-start gap-4">

        <img
          src={edu.logo}
          alt={edu.school}
          className="w-12 h-12 rounded-full"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-bold leading-tight">
            {edu.school}
          </h2>

          <p className="mt-5 text-xl font-semibold">
            {edu.degree}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 bg-base-200 px-4 py-2 rounded-full">
            <CalendarDaysIcon className="h-5 w-5" />
            <span>{edu.duration}</span>
          </div>

          <p className="mt-6 text-gray-600 leading-8">
            <ReadMore text={edu.desc} maxLength={50} />
          </p>

          {edu.gpa && (
            <p className="mt-5 font-medium">
              {edu.gpa}
            </p>
          )}
        </div>

      </div>
    </div>
  ))}

</div>

</div>
            
          </div>
      
  );
}
