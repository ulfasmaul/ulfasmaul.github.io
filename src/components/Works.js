import { FaBuilding, FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";

export default function Works() {
  const [showAll, setShowAll] = useState(false);
  const works = [
    {
      role: "Technical Writer",
      company: "Jatis Mobile",
      duration: "Feb 2019 - Present",
      achievements: [
        "Produced and maintained technical documentation, user manuals, API documentation, and installation guides to support software deployment and user adoption.",
	"Collaborated with developers, testers, product owners, and stakeholders to gather requirements and translate complex technical information into structured and user-friendly documentation.",
	"Ensured documentation quality and consistency while supporting software maintenance, knowledge sharing, and operational efficiency.",
	"Managed documentation updates and version control to align with product enhancements and evolving business requirements.",
	"Applied analytical thinking and attention to detail to simplify complex information and support effective communication across cross-functional teams."

      ]
    },
    {
      role: "Technical Writer",
      company: "PT Codigo Cyberlin Metadata",
      duration: "Oct 2016 - Oct 2018",
      achievements: [
        "Produced technical documents, functional specifications, user manuals, API documentation, installation guides, and server documentation, improving knowledge sharing and enabling smoother software implementation, maintenance, and user adoption."
      ]
    },
   {
      role: "Technical Writer",
      company: "PT Myindo Cyber Media",
      duration: "Jun 2014 - Sep 2015",
      achievements: [
        "Produced technical documents, functional specifications, user manuals, API documentation, installation guides, and server documentation, improving knowledge sharing and enabling smoother software implementation, maintenance, and user adoption."
      ]
    },
    {
      role: "Application Support",
      company: "PT Telekomunikasi Indonesia – Division of ISPOI-Access & Backbone OSS Support",
      duration: "May 2012 - May 2014",
      achievements: [
        "Supported migration and provisioning operations by analyzing and resolving system issues to ensure service reliability and operational efficiency.",
	"Performed troubleshooting and root cause analysis to identify and address problems occurring during migration processes.",
	"Developed a web-based monitoring application to improve visibility and tracking of provisioning orders.",
	"Collaborated with cross-functional teams to maintain smooth operational processes and support service delivery.",
	"Conducted user training and knowledge transfer activities to improve system adoption and user effectiveness."

      ]
    },
    {
      role: "IT Staff",
      company: "PT Global One Solusindo",
      duration: "Dec 2011 - May 2012",
      achievements: [
        "Developed a statistical KPI reporting application to automate and support business performance monitoring.",
	"Prepared and delivered statistical KPI reports to provide stakeholders with accurate and timely performance insights.",
	"Collected, organized, and analyzed operational data to support reporting requirements and improve visibility into key metrics.",
	"Transformed raw data into structured reports that facilitated data-driven decision-making.",
	"Strengthened analytical thinking, problem-solving, and reporting skills through hands-on experience in KPI analysis and performance monitoring."

      ]
    }
  ];


  return (
    <section className="py-20">
      <div id="works" className="mx-auto max-w-2xl px-6 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">View my</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Working Experiences
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Vertical line */}
        <div className="absolute left-6 top-0 h-full w-[2px] bg-gray-300"></div>

        <div className="space-y-12">

          {(showAll ? works: works.slice(0, 2)).map((exp, index) => (
            <div key={index} className="relative flex gap-8">

              {/* Timeline circle */}
              <div className="relative z-10 w-6 h-6 rounded-full bg-gray-600 border-4 border-gray-300 mt-4"></div>

              {/* Card */}
              <div className="flex-1 bg-base-100 rounded-3xl shadow-lg p-8">

                <div className="flex justify-between items-start">

                  <div>
                    <h2 className="text-3xl font-bold">
                      {exp.role}
                    </h2>

                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                      <FaBuilding />
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-base-200 px-4 py-2 rounded-xl">
                    <FaCalendarAlt />
                    {exp.duration}
                  </div>

                </div>

                <ul className="list-disc ml-8 mt-6 space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>
                      {item}
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
	<div className="mt-16 flex justify-center">
          <button className="btn btn-outline" onClick={() => setShowAll(!showAll)}>
		{showAll ? "View Less" : "View More"}
	  </button>
        </div>
        </div>
      </div>
    </section>
  );
}