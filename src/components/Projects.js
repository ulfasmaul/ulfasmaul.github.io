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
    skillset : "Data Cleaning, Exploratory Data Analysis, Customer Segmentation, Campaign Performance Analysis, Dashboard Development",
    skillstatistic : "-",
    skillsql : "-",
    description: "Conducted an end-to-end analytics project to evaluate campaign effectiveness and identify high-value customer segments for targeted marketing.",
    deck : "https://drive.google.com/file/d/1ysOqxIBFfF1jGnfHXOrdohiq3uG--o0r/view?usp=sharing",

    images: [
      "/DEEPP1.jpg",
      "/DEEPP2.jpg",
      "/DEEPP3.jpg",
      "/DEEPP4.jpg"
    ],

    background: "[Retail Campaign Analytics] Using the Dunnhumby The Complete Journey dataset, this project evaluated the effectiveness of coupon-based marketing campaigns and customer responsiveness. With 30 campaigns reaching 7,208 households, the analysis aimed to identify high-performing campaigns, understand demographic characteristics of responsive customers, and provide insights to improve future campaign targeting and promotional strategies.",

  methodology: [
    "Conducted an end-to-end analytics workflow covering business understanding, problem definition, stakeholder mapping, and objective formulation.",
    "Prepared and integrated campaign, transaction, coupon, and household demographic datasets using Python to ensure data consistency and quality.",
    "Performed exploratory data analysis and campaign performance analysis by measuring Campaign Reach, Response Rate, Coupon per Household, Redemption Rate, Repeat Redemption Rate, and customer response across demographic segments.",
    "Analyzed customer characteristics based on age group, income level, household size, and family composition to identify the most responsive segments.",
    "Built interactive Tableau dashboards to visualize campaign performance and support insight generation and business recommendations."
  ],

  result: [
    "Campaign Performance: Campaign 24 and Campaign 30 achieved the highest repeat redemption rates (approximately 30%), indicating stronger customer engagement and loyalty.",
    "Customer Profile: High-income, family-oriented households with larger family sizes exhibited the highest response rates, while younger customer groups showed relatively lower engagement.",
    "Campaign Effectiveness: Higher coupon distribution volume did not necessarily lead to better performance; customer relevance and targeting accuracy played a more significant role in driving redemption behavior.",
    "Recommendations: Improve campaign targeting by prioritizing highly responsive customer segments and focusing on personalized promotions rather than increasing coupon volume indiscriminately.",
    "Business Goal: Enhance future marketing effectiveness and optimize promotional spending through more data-driven customer segmentation strategies."
  ]
  },
  {
    id: 2,
    name: "RevoHospital: Operational Performance Dashboard",
    href: "#",
    imageSrc: "\Data Visualization.jpg",
    used: "Tableau, Tableau Calculations, Level of Detail (LOD) Expressions, Table Calculations",
    skillset : "Business Understanding, KPI Definition, Dashboard Design, Data Visualization, Trend Analysis, Heatmap Analysis, Ranking Analysis, Distribution Analysis, Insight Generation, Business Recommendation",
    skillstatistic : "-",
    skillsql : "-",
    description: "Developed an interactive Tableau dashboard to monitor hospital capacity utilization and operational performance, enabling data-driven decisions on resource allocation and service efficiency.",
    deck : "https://drive.google.com/file/d/1XxmiFlJ8vH2roEsOOTfnMhnsxajtd7oK/view?usp=sharing",
    images: [
	"\Data Visualization1.jpg",
	"\Data Visualization2.jpg",
	"\Data Visualization3.jpg",
	"\Data Visualization4.jpg"
    ],
    background: "[Healthcare Operations Analytics] RevoHospital operates multiple branches across Java and faces challenges related to capacity utilization, patient flow, and uneven departmental workloads. This project aimed to translate operational requirements into key performance indicators and develop an interactive Tableau dashboard to monitor hospital performance and support operational decision-making.",
    methodology: [
	"Defined business requirements and identified key performance metrics, including Total Admissions, Average Length of Stay (ALOS), Bed Utilization Rate, Department Utilization Share, Bed Capacity Gap, and Average Billing Amount.",
	"Designed and developed an analytical dashboard using Tableau by selecting appropriate visualizations such as KPI scorecards, trend charts, heatmaps, distribution charts, and ranking analysis.",
	"Applied advanced Tableau features, including Level of Detail (LOD) expressions, table calculations, filters, and interactive components to improve analytical accuracy and dashboard usability.",
	"Translated dashboard findings into recommendations for capacity planning, department prioritization, and resource allocation to improve operational efficiency."
    ],
    result: [
	"Operational Visibility: Developed a centralized dashboard that enabled monitoring of admissions, length of stay, and capacity utilization across branches and departments.",
	"Bottleneck Identification: Highlighted variations in department workloads and bed capacity utilization to support operational performance evaluation.",
	"Interactive Analysis: Leveraged LOD expressions and table calculations to provide accurate and dynamic analyses across multiple dimensions.",
	"Recommendations: Proposed improvements in resource allocation, capacity planning, and department prioritization to enhance hospital efficiency and support data-driven decision-making."
    ]
  },
  {
    id: 3,
    name: "Optimization of RevoBank Credit Card Transactions",
    href: "#",
    imageSrc: "\Python.jpg",
    used: "Python, Google Colab, Jupyter Notebook, Pandas, NumPy, Matplotlib, Seaborn",
    skillset : "Business Understanding, Data Cleaning, Data Preparation, Exploratory Data Analysis (EDA), Descriptive Statistics, Customer Segmentation, Financial Risk Analysis, Insight Generation, Business Recommendation",
    skillstatistic : "-",
    skillsql : "-",
    description: "Analyzed customer transaction behavior and financial risk using Python to identify customer segments and provide data-driven recommendations for credit optimization and customer retention strategies.",
    deck :"https://drive.google.com/file/d/1ipMID17Hceche7LC5UDeEsGcUiv94gf2/view?usp=sharing",
    images: [
	"\Python1.jpg",
	"\Python2.jpg",
	"\Python3.jpg",
	"\Python4.jpg"
    ],
    background: "[Banking Analytics Application] RevoBank sought to optimize credit card performance by understanding customer transaction behavior, profitability, and financial risk. This project aimed to identify factors influencing transaction activity, evaluate customer characteristics, and segment customers based on their financial profiles to support more effective credit and retention strategies.",
    methodology: [
	"Defined business objectives and translated credit card usage challenges into analytical questions related to customer behavior, profitability, and risk exposure.",
	"Performed data preparation and cleaning using Python, including data type validation, duplicate removal, missing value treatment, and descriptive statistical analysis.",
	"Conducted exploratory data analysis to examine relationships between transaction behavior, debt-to-income ratio, credit score, and customer characteristics.",
	"Developed customer segmentation based on spending patterns and financial risk profiles to support personalized strategies and business recommendations."
    ],
    result: [
	"Customer Segmentation: Identified distinct customer groups consisting of High Value–Low Risk, Middle Value–Moderate Risk, and Low Value–High Risk segments.",
	"Risk Profiling: Revealed that debt-to-income ratio and credit score played important roles in distinguishing customer risk levels.",
	"Behavior Analysis: Uncovered transaction patterns and customer characteristics associated with higher profitability and lower financial risk.",
	"Recommendations: Proposed strategies for credit limit management, customer retention, personalized product offerings, and proactive risk monitoring to improve profitability and customer engagement."
    ]
  },
  {
    id: 4,
    name: "RevoGrocers: Sales Performance Analysis",
    href: "#",
    imageSrc: "\SQL.jpg",
    used: "SQL, BigQuery",
    skillset : "Business Understanding, KPI Definition, Exploratory Data Analysis (EDA), Sales Performance Analysis, Customer Behavior Analysis, Category Performance Analysis, Pricing Analysis, Insight Generation, Business Recommendation",
    skillsql : "JOINs, Common Table Expressions (CTEs), Aggregate Functions, Window Functions, GROUP BY, CASE WHEN, Ranking Functions",
    skillstatistic : "-",
    description: "Analyzed product category performance and customer purchasing behavior using SQL to identify revenue drivers and provide data-driven recommendations for sales optimization and revenue growth.",
    deck : "https://drive.google.com/file/d/1YJJtaFu3KErUtJwH_cGPeJYrf1yNq-On/view?usp=sharing",
    images: [
	"\SQL1.jpg",
	"\SQL2.jpg",
	"\SQL3a.jpg",
	"\SQL3b.jpg",
	"\SQL4.jpg"
    ],
    background: "[Retail Sales Analytics] RevoGrocers aimed to understand product category performance and customer purchasing behavior to support revenue growth strategies. This project focused on identifying key revenue drivers, evaluating pricing and repeat purchase patterns, and generating insights to optimize category management and sales performance.",
    methodology: [
	"Defined business objectives and translated sales-related questions into measurable metrics to evaluate category performance and revenue drivers.",
	"Performed data exploration and analysis using SQL by applying JOINs, Common Table Expressions (CTEs), aggregate functions, and window functions.",
	"Analyzed sales performance, pricing strategies, customer purchasing behavior, and repeat purchase patterns across product categories.",
	"Interpreted analytical findings and developed recommendations to support category prioritization and revenue optimization initiatives."
    ],
    result: [
	"Revenue Drivers: Identified Confections, Meat, and Poultry as the major revenue contributors, accounting for more than half of total revenue after discounts.",
	"Customer Behavior: Observed consistently high repeat purchase rates across categories, indicating strong customer loyalty.",
	"Category Performance: Evaluated category-level pricing and sales patterns to understand differences in revenue contribution and purchasing behavior.",
	"Recommendations: Proposed prioritizing high-performing categories and leveraging customer loyalty insights to support sustainable revenue growth and category optimization."
    ]
  },
  {
    id: 5,
    name: "TokoBli E-commerce: Campaign Evaluation & Product Page Analysis",
    href: "#",
    imageSrc: "\Statistics & Spreadsheet.jpg",
    used: "Microsoft Excel, Google Sheets",
    skillset : "Business Understanding, KPI Definition, Statistical Analysis, Exploratory Data Analysis, Predictive Modeling, Insight Generation, Business Recommendation",
    skillstatistic : "Descriptive Statistics, Correlation Analysis, Multiple Linear Regression, Coefficient Interpretation, R² Evaluation, Statistical Predicting Testing",
    description: "Analyzed customer spending behavior using statistical techniques and spreadsheet-based analytics to identify key spending drivers and provide data-driven recommendations for improving marketing effectiveness and customer value.",
    skillsql : "-",
    deck : "https://drive.google.com/file/d/1iguM7rnBmyITduCJwLpnLw5DhjZGnBrc/view?usp=sharing",
    images: [
	"\Statistics & Spreadsheet1.jpg",
	"\Statistics & Spreadsheet2.jpg",
	"\Statistics & Spreadsheet3.jpg",
	"\Statistics & Spreadsheet4.jpg",
	"\Statistics & Spreadsheet5.jpg",
	"\Statistics & Spreadsheet6.jpg"
    ],
    background: "[E-Commerce Customer Analytics] TokoBli aimed to understand the factors influencing customer spending behavior to improve marketing effectiveness and drive higher customer value. This project focused on identifying the relationships between customer characteristics, online engagement, promotional activities, and yearly spending to support more targeted marketing strategies.",
    methodology: [
	"Defined business objectives and key performance indicators to understand the drivers of customer spending behavior and support data-driven marketing decisions.",
	"Conducted descriptive statistical analysis to examine customer demographics, engagement metrics, and transaction characteristics.",
	"Performed correlation analysis to identify relationships among income, tenure, average session time, promotion usage, bounce rate, and yearly spending.",
	"Built and refined a multiple linear regression model to quantify the impact of key variables on customer spending and interpret their business implications."
    ],
    result: [
	"Key Spending Drivers: Identified Income, Tenure, Average Session Time, Promotion Usage, and Bounce Rate as important factors influencing customer yearly spending.",
	"Strong Predictive Power: Developed a multiple linear regression model that explained approximately 92.7% of the variation in customer spending behavior.",
	"Customer Engagement Impact: Observed that higher engagement and effective promotional usage were associated with increased customer spending.",
	"Recommendations: Proposed optimizing promotional strategies, improving customer engagement, and focusing on high-value customer segments to enhance marketing effectiveness and increase revenue."
    ]
  },

];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

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
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {(showAll ? projects : projects.slice(0, 2)).map((project) => (
            <div
              key={project.id}
              className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl cursor-pointer hover:scale-105 duration-300" data-aos="flip-left"
              onClick={() => setSelectedProject(project)}
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

{selectedProject && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setSelectedProject(null)}>
    <div className="bg-base-100 rounded-3xl w-11/12 max-w-6xl max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">
          {selectedProject.name}
        </h2>

        <button
          className="btn btn-circle btn-sm"
          onClick={() => setSelectedProject(null)}
        >
          ✕
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Left */}
        <div>

          <div className="relative">

  <img
    src={selectedProject.images[currentImage]}
    alt=""
    className="rounded-2xl shadow-lg w-full object-cover"
  />

  {/* Tombol Previous */}
  <button
    className="btn btn-circle absolute left-4 top-1/2 -translate-y-1/2"
    onClick={(e) => {
      e.stopPropagation();
      setCurrentImage(
        currentImage === 0
          ? selectedProject.images.length - 1
          : currentImage - 1
      )
    }}
  >
    ❮
  </button>

  {/* Tombol Next */}
  <button
    className="btn btn-circle absolute right-4 top-1/2 -translate-y-1/2"
    onClick={(e) => {
      e.stopPropagation();
      setCurrentImage(
        currentImage === selectedProject.images.length - 1
          ? 0
          : currentImage + 1
      )
    }}
  >
    ❯
  </button>

</div>

          <div className="mt-8 bg-base-200 rounded-2xl p-6">

            <h3 className="font-bold text-2xl mb-4">
              Project Details
            </h3>

            <p className="mt-6">
              <strong>Tools:</strong>
              <br />
              {selectedProject.used}
            </p>
	    
	    <p className="mt-6">
              <strong>SQL Techniques:</strong>
              <br />
              {selectedProject.skillsql}
            </p>

	    <p className="mt-6">
              <strong>Statistical Techniques:</strong>
              <br />
              {selectedProject.skillstatistic}
            </p>

            <p className="mt-6">
              <strong>Skillset:</strong>
              <br />
              {selectedProject.skillset}
            </p>

	    <p className="mt-6">
		<a
  		   href= {selectedProject.deck}
  		   target="_blank"
  		   rel="noopener noreferrer"
  		   className="btn btn-outline"
		>
  		   View Deck
		</a>
            </p>

          </div>

        </div>

        {/* Right */}
        <div>

          <div className="bg-base-200 rounded-2xl p-6 mb-6">

            <h3 className="font-bold text-2xl mb-4">
              Background
            </h3>

            <p>
              {selectedProject.background}
            </p>

          </div>

          <div className="bg-base-200 rounded-2xl p-6 mb-6">

            <h3 className="font-bold text-2xl mb-4">
              Methodology
            </h3>

            <ul className="list-disc ml-6 space-y-2">
              {selectedProject.methodology.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>

          </div>

          <div className="bg-base-200 rounded-2xl p-6">

            <h3 className="font-bold text-2xl mb-4">
              Result
            </h3>

            <p className="mb-4">
              Key insights and recommendations included:
            </p>

            <ul className="list-disc ml-6 space-y-2">
              {selectedProject.result.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>

          </div>

        </div>

      </div>

    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
}
