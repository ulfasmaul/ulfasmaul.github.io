import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    name: "Analisis Dampak Penggunaan AI Generatif terhadap Performa Akademik dan Kesejahteraan Mahasiswa",
    href: "#",
    imageSrc: "\BNSP.jpg",
    used: "Python • Tableau • Microsoft Excel • Data Cleaning • EDA • Dashboard Development",
    tool: "Python • Google Colab • Tableau • Pandas • NumPy • Matplotlib • Seaborn • Microsoft Excel",
    skillset : "Business Understanding • Stakeholder Analysis • Problem Definition • DARCI • Data Cleaning & Preparation • Exploratory Data Analysis (EDA) • Descriptive Statistics • Pivot Table • Correlation Analysis • Customer (Student) Segmentation • Dashboard Development • Level of Detail (LOD) • Data Visualization • Insight Generation • Business Recommendation",
    description: "Conducted an end-to-end analytics project to evaluate the impact of Generative AI on academic performance and student well-being, transforming complex educational data into actionable insights and strategic recommendations through Excel, Python and Tableau.",
    deck : "https://drive.google.com/file/d/1BQXlW6284LZI99cXCoXMoYp3yB4qJ6af/view?usp=sharing",
    images: [
      "/BNSP1.jpg", "/BNSP2.jpg", "/BNSP3.jpg", "/BNSP4.jpg", "/BNSP5.jpg", "/BNSP6.jpg", "/BNSP7.jpg", "/BNSP8.jpg", "/BNSP9.jpg", "/BNSP10.jpg", "/BNSP11.jpg"
    ],
    background: "[Higher Education Analytics] The rapid growth of generative AI tools, such as ChatGPT, Copilot, and Gemini, has transformed learning in higher education. While these tools enhance academic activities, their impact on academic performance, knowledge retention, mental well-being, and burnout remains unclear. This analysis provides insights to help universities optimize AI adoption while supporting student success and well-being.",
    objective: [
	"Analyze the impact of AI usage on student's academic performance.",
	"Evaluate the effect of AI usage on student's knowledge retention.",
	"Identify the relationship between AI usage, dependency levels, and student's well-being."
    ],
    methodology: [
    	"Defined business objectives, stakeholder needs, and problem statements to assess the impact of Generative AI on higher education.",
	"Collected, cleaned, and analyzed a dataset of approximately 50,000 student records using Microsoft Excel and Python.",
	"Conducted exploratory data analysis, descriptive statistics, correlation analysis, and student segmentation to identify patterns between AI usage, academic performance, knowledge retention, burnout risk, and student demographics.",
	"Built an interactive Tableau dashboard to visualize AI adoption, academic performance, and student well-being.",
	"Delivered data-driven insights and recommendations to support AI literacy, student well-being, and institutional decision-making."

  ],
  result: [
    	"Academic Performance: AI adoption may improve academic performance, but the level of AI usage showed only a weak relationship with GPA and knowledge retention.",
	"Student Well-being: Students with higher AI dependency were more likely to experience burnout, highlighting the need for balanced AI usage.",
	"Institutional Policy: Current AI policies had limited impact on reducing burnout, indicating that additional education and student support are needed.",
	"Recommendations: Recommended AI literacy programs, monitoring students with high AI dependency, and strengthening mental health support to promote responsible AI use."
  ]
  },

  {
    id: 2,
    name: "Campaign Effectiveness & Customer Responsiveness Analysis",
    href: "#",
    imageSrc: "\DEEPP.jpg",
    used: "Python • Tableau • Data Cleaning • EDA • Descriptive Statistics • Dashboard Development",
    tool: "Python • Google Colab • Tableau • Pandas • NumPy • Matplotlib • Seaborn",
    skillset : "Business Understanding • Root Cause Analysis • Stakeholder Analysis • KPI Definition • Data Cleaning & Preparation • Exploratory Data Analysis (EDA) • Descriptive Statistics • Outlier Detection • Correlation Analysis • Customer Segmentation • Campaign Performance Analysis • Dashboard Development • Data Visualization • Insight Generation • Business Recommendation",
    description: "Conducted an end-to-end analytics project to evaluate campaign effectiveness and identify high-value customer segments for targeted marketing.",
    deck : "https://drive.google.com/file/d/1d3aQnHrtu8B7u2M-Tp8CZqFk-YzuKeOF/view?usp=sharing",
    images: [
      "/DEEPP1.jpg",
      "/DEEPP2.jpg",
      "/DEEPP3.jpg",
      "/DEEPP4.jpg"
    ],
    background: "[Retail Campaign Analytics] A retail company wanted to evaluate the effectiveness of its promotional campaigns and identify the customer segments that responded best to coupon offers. This project analyzed campaign performance and customer redemption behavior to provide insights for improving future marketing strategies.",
    objective: [
	"Measure the effectiveness of marketing campaigns.",
	"Identify the highest-performing campaigns.",
	"Identify the customer segments that are most responsive to promotional campaigns."
    ],
    methodology: [
    	"Defined business objectives, KPIs, and problem statements to evaluate campaign effectiveness and customer responsiveness.",
	"Cleaned and analyzed campaign, coupon redemption, and customer data using Python to prepare it for analysis.",
	"Conducted exploratory data analysis (EDA), descriptive statistics, correlation analysis, campaign performance analysis, and customer segmentation to identify factors affecting coupon redemption.",
	"Built an interactive Tableau dashboard to track campaign performance, coupon redemption, and customer response.",
	"Delivered data-driven insights and recommendations to improve campaign targeting, customer engagement, and promotional effectiveness."
    ],
    result: [
    	"Campaign Performance: The campaigns showed relatively low customer response, indicating opportunities to improve targeting and overall campaign effectiveness.",
	"Targeting Strategy: Campaigns that distributed fewer coupons often achieved higher redemption rates, suggesting that accurate targeting is more effective than sending more coupons.",
	"Customer Segmentation: Adult, high-income, family-oriented households with 4–5 members and two or more children were the most responsive customer segments.",
	"Customer Loyalty: Campaigns 24 and 30 achieved the highest repeat redemption rates, indicating stronger customer loyalty than other campaigns.",
	"Recommendations: Recommended using customer segmentation, personalized promotions, and successful campaign strategies to improve campaign performance and customer engagement."
    ]
  },
  {
    id: 3,
    name: "RevoHospital: Operational Performance Dashboard",
    href: "#",
    imageSrc: "\Data Visualization.jpg",
    used: "Tableau • Level of Detail (LOD) • Table Calculations • Dashboard Development • Data Visualization ",
    tool: "Tableau",
    skillset : "Business Understanding • KPI Definition • Dashboard Development • Data Visualization • Business Intelligence Dashboard • Level of Detail (LOD) • Table Calculations • Interactive Dashboard Development • Scorecards • Heatmaps Analysis • Trend Analysis • Ranking Analysis • Distribution Analysis • Geographic Visualization • Insight Generation • Business Recommendation",
    description: "Developed an interactive Tableau dashboard to monitor hospital capacity utilization and operational performance, enabling data-driven decisions on resource allocation and service efficiency.",
    deck : "https://drive.google.com/file/d/1VEhDlY5zvsxdoK3umPJ2LML77QU-9m6b/view?usp=sharing",
    images: [
	"\Data Visualization1.jpg",
	"\Data Visualization2.jpg",
	"\Data Visualization3.jpg",
	"\Data Visualization4.jpg",
	"\Data Visualization5.jpg"
    ],
    background: "[Healthcare Operations Analytics] RevoHospital is a hospital network with multiple branches across Java. As patient admissions increased, the hospital needed better resource management. This analysis identified operational bottlenecks and provided insights to improve capacity planning and overall hospital efficiency.",
    objective: [
	"Monitor hospital operations and operational performance.",
	"Identify operational bottlenecks across branches and departments.",
	"Support data-driven decision-making to improve operational efficiency."
    ],
    methodology: [
	"Defined business objectives and KPIs to monitor hospital capacity, patient admissions, and operational performance.",
	"Built an interactive Tableau dashboard with KPI scorecards, maps, charts, and filters to visualize hospital operations.",
	"Used advanced Tableau features, including LOD expressions and table calculations, to calculate key operational metrics.",
	"Delivered insights that helped stakeholders identify operational bottlenecks, monitor resource utilization, and support capacity planning."
    ],
    result: [
	"Capacity Utilization: Several hospital branches were operating above their ideal bed capacity, indicating the need for better capacity planning.",
	"Operational Bottlenecks: Negative Bed Capacity Gap values showed that some branches were under continuous pressure due to high inpatient demand.",
	"Service Demand: The Internal Medicine and Emergency departments had the highest patient admissions, making them priority areas for resource allocation.",
	"Operational Trends: Patient admissions and total Length of Stay (LOS) increased throughout 2025, reflecting growing demand for hospital services.",
	"Recommendations: Recommended improving demand forecasting, expanding bed capacity, optimizing patient discharge planning, and prioritizing resources for high-demand departments."
    ]
  },
  {
    id: 4,
    name: "Optimization of RevoBank Credit Card Transactions",
    href: "#",
    imageSrc: "\Python.jpg",
    used: "Python • Data Cleaning • EDA • K-Means Clustering • Customer Profiling",
    tool: "Python • Google Colab • Pandas • NumPy • Matplotlib • Seaborn",
    skillset : "Business Understanding • Data Cleaning • Exploratory Data Analysis (EDA) • Descriptive Statistics • Correlation Analysis • Customer Segmentation • K-Means Clustering • Financial Risk Analysis • Customer Profiling • Insight Generation • Business Recommendation",
    description: "Analyzed customer transaction behavior and financial risk using Python to identify customer segments and provide data-driven recommendations for credit optimization and customer retention strategies.",
    deck :"https://drive.google.com/file/d/1XThVttSbq2CjaccUHRMAjPb0r3BResGB/view?usp=sharing",
    images: [
	"\Python1.jpg",
	"\Python2.jpg",
	"\Python3.jpg",
	"\Python4.jpg"
    ],
    background: "[Banking Analytics] RevoBank experienced low credit card usage despite having many cardholders. The lack of customer segmentation made it difficult to understand spending patterns and improve revenue. In addition, fraud risk affected the bank's profitability. This analysis was conducted to identify customer segments, understand transaction behavior, and provide insights to support business growth and risk management.",
    objective: [
	"Evaluate overall credit card business performance.",
	"Measure transaction value, transaction frequency, revenue, and net income after fraud losses.",
	"Identify customer segments and user personas based on spending behavior.",
	"Support targeted marketing strategies to increase customer activity and optimize revenue growth."
    ],
    methodology: [
	"Defined business objectives and KPIs to evaluate customer behavior, profitability, and financial risk.",
	"Cleaned and analyzed credit card transaction data using Python with exploratory data analysis (EDA), descriptive statistics and correlation analysis to uncover behavioral and financial patterns.",
	"Identified relationships between customer financial factors, transaction activity, and credit risk.",
	"Used K-Means Clustering to segment customers and created customer profiles based on spending behavior and risk.",
	"Delivered data-driven recommendations to improve marketing strategies, customer retention, credit limit management, and risk monitoring."
    ],
    result: [
	"Customer Segmentation: Used K-Means Clustering to group customers into three segments based on spending behavior, financial characteristics, and credit risk.",
	"Customer Profiling: Identified the characteristics of each segment, including high-value customers with low risk and low-value customers with higher financial risk.",
	"Business Strategy: Recommended different strategies for each customer segment, such as personalized marketing, credit limit adjustments, loyalty programs, and risk monitoring.",
	"Business Impact: Demonstrated how customer segmentation can support data-driven decision-making by enabling personalized credit management, targeted marketing campaigns, early risk identification, and product recommendations tailored to each customer profile."
    ]
  },
  {
    id: 5,
    name: "RevoGrocers: Sales Performance Analysis",
    href: "#",
    imageSrc: "\SQL.jpg",
    used: "SQL (Google BigQuery) • KPI Definition • EDA • CTEs • Window Functions • Sales Performance Analysis",
    tool: "SQL (Google BigQuery)",
    skillset : "Business Understanding • Exploratory Data Analysis (EDA) • KPI Definition • SQL • JOINs • Common Table Expressions (CTEs) • Aggregate Functions • Window Functions • Subqueries • Ranking Functions • Sales Performance Analysis • Revenue Contribution Analysis • Pricing Strategy Analysis • Customer Behavior Analysis • Repeat Purchase Analysis • High-Value Customer Analysis • Insight Generation • Business Recommendation",
    description: "Analyzed product category performance and customer purchasing behavior using SQL to identify revenue drivers and provide data-driven recommendations for sales optimization and revenue growth.",
    deck : "https://drive.google.com/file/d/1zkarpkq24IgQUG7HOa3JYyUKlpxCVBnZ/view?usp=sharing",
    images: [
	"\SQL1.jpg",
	"\SQL2.jpg",
	"\SQL3a.jpg",
	"\SQL3b.jpg",
	"\SQL4.jpg",
	"\SQL5.jpg"
    ],
    background: "[Retail Sales Analytics] RevoGrocers is a grocery retail business that operates in multiple locations, offering a diverse range of grocery products to customers. The company aims to optimize sales strategies, enhance customer experience, and increase revenue by leveraging data-driven decision-making.",
    objective: [
	"Identify the highest-performing product categories based on revenue.",
	"Understand the key factors that drive revenue growth.",
	"Evaluate the impact of pricing strategies on sales performance."
    ],
    methodology: [
	"Defined business objectives and KPIs to evaluate sales performance and revenue growth.",
	"Used SQL including JOINs, CTEs, aggregate functions, subqueries, and window functions to combine and analyze sales, product, category, and customer data.",
	"Analyzed product category performance, revenue, pricing, and repeat purchase rates to identify key business drivers.",
	"Examined customer purchasing behavior to understand spending patterns and customer loyalty.",
	"Delivered data-driven recommendations to improve pricing strategies, customer retention, and revenue growth."
    ],
    result: [
	"Revenue Performance: Confections, Meat, Poultry, and Cereals were the top revenue-generating product categories, contributing more than half of total revenue.",
	"Customer Behavior: Revenue was driven more by customer spending and purchase frequency than by the number of customers, creating opportunities to increase average order value.",
	"Pricing & Loyalty: Different pricing strategies were effective across product categories, while high repeat purchase rates showed strong customer loyalty.",
	"Recommendations: Recommended focusing on high-performing categories, optimizing pricing strategies, increasing customer spending through targeted promotions, and strengthening customer retention programs."
    ]
  },
  {
    id: 6,
    name: "TokoBli E-commerce: Campaign Evaluation & Product Page Analysis",
    href: "#",
    imageSrc: "\Statistics & Spreadsheet [Int].jpg",
    used: "Microsoft Excel • Data Cleaning • Descriptive Statistics • EDA • Pivot Table • A/B Testing • T-Test • SMART Framework",
    tool: "Microsoft Excel • Google Sheets • XLMiner",
    skillset : "Business Understanding • Data Cleaning & Preparation • Pivot Table • Descriptive Statistics • Campaign Performance Analysis • KPI Analysis • Outlier Detection (IQR) • Exploratory Data Analysis (EDA) • A/B Testing • Independent Two-Sample T-Test • Business Recommendation • SMART Framework",
    description: "Evaluated marketing campaign effectiveness and product page performance using descriptive statistics and hypothesis testing to identify revenue-driving strategies and recommend data-driven improvements for future campaigns.",
    deck : "https://drive.google.com/file/d/1xCldCBztsL5naBGtOzyjyu02DU41kcgZ/view?usp=sharing",
    images: [
	"\Statistics & Spreadsheet [Int]1.jpg",
	"\Statistics & Spreadsheet [Int]2.jpg",
	"\Statistics & Spreadsheet [Int]3.jpg",
	"\Statistics & Spreadsheet [Int]4.jpg",
	"\Statistics & Spreadsheet [Int]5.jpg",
	"\Statistics & Spreadsheet [Int]6.jpg",
	"\Statistics & Spreadsheet [Int]7.jpg"
    ],
    background: "[E-Commerce Campaign Analytics] TokoBli evaluated its Q4 2023 marketing campaigns and product page performance to improve campaign effectiveness and maximize revenue. As part of this initiative, the business sought to determine whether a redesigned Product Detail Page (PDP) significantly increased transaction value compared with the existing version, enabling data-driven decisions before full-scale implementation.",
    objective: [
	"Analyze Q4 2023 campaign performance to identify the most effective strategies for increasing transaction volume.",
	"Evaluate whether the new Product Detail Page (PDP) significantly improves transaction value compared to the current version."
    ],
    methodology: [
	"Defined business objectives, KPIs, and SMART goals to evaluate campaign performance.",
	"Cleaned and prepared transaction data for analysis by handling missing values, duplicates, outliers, and formatting issues.",
	"Performed  descriptive analysis to evaluate transaction quantity, discount distribution, and revenue characteristics.",
	"Performed EDA and analyzed campaign performance using key business metrics, including transactions, customers, product sold, revenue, discount, and Average Order Value (AOV).",
	"Conducted an A/B test and applied an Independent Two-Sample T-Test to compare the current and redesigned Product Detail Page (PDP).",
	"Delivered data-driven insights and recommendations to improve product design, campaign performance, and future experiments."
    ],
    result: [
	"Campaign Performance: Campaign 11.11 generated the highest revenue and Average Order Value (AOV), while Campaign 12.12 achieved the highest transaction volume.",
"Product Performance: Men's Fashion and Health & Sports were the strongest-performing product categories during the campaigns.",
"A/B Testing: Statistical testing showed that the redesigned Product Detail Page (Group B) significantly increased transaction value compared to the current version.",
"Recommendations: Recommended expanding successful campaign strategies, optimizing discounts, focusing on high-performing product categories, and implementing the new Product Detail Page."
    ]
  },
  {
    id: 7,
    name: "TokoBli E-commerce: Analyzing and Predicting Customer Spending Behavior",
    href: "#",
    imageSrc: "\Statistics & Spreadsheet [Adv].jpg",
    used: "Microsoft Excel • Correlation Analysis • Multiple Linear Regression • Simultaneous Hypothesis Testing (F-Test) • Partial Hypothesis Testing (t-Test) • Coefficient Interpretation • Predictive Analysis",
    tool: "Microsoft Excel • Google Sheets",
    skillset : "Business Understanding • Correlation Analysis • Multiple Linear Regression • Simultaneous Hypothesis Testing (F-Test) • Partial Hypothesis Testing (t-Test) • Coefficient Interpretation • Predictive Analysis • Customer Spending Prediction • Insight Generation • Business Recommendation",
    description: "Developed a multiple linear regression model to predict yearly customer spending and identify the key factors that influence customer value, helping support more effective marketing and customer retention strategies.",
    deck : "https://drive.google.com/file/d/1kWtJ6B8sme87UrRcH57f9sR02jQ41tTp/view?usp=sharing",
    images: [
	"\Statistics & Spreadsheet [Adv]1.jpg",
	"\Statistics & Spreadsheet [Adv]2.jpg",
	"\Statistics & Spreadsheet [Adv]3.jpg",
	"\Statistics & Spreadsheet [Adv]4.jpg",
	"\Statistics & Spreadsheet [Adv]5.jpg"
    ],
    background: "[Customer Spending Prediction] TokoBli E-commerce wanted to increase customer spending by understanding the factors that influence purchasing behavior. This project analyzed customer demographics, engagement, promotions, and browsing behavior to identify key spending drivers and build a model to predict yearly customer spending, supporting more effective marketing strategies.",
    objective: [
	"Identify the key factors that influence customer spending and build a model to predict yearly customer spending.",
	"Provide data-driven recommendations to improve marketing strategies, customer engagement, and long-term revenue growth."
    ],
    methodology: [
	"Performed descriptive statistics and correlation analysis to evaluate relationships among customer demographics, engagement metrics, promotional usage, and bounce rate, identifying variables with the strongest associations.",
	"Built and refined a Multiple Linear Regression model by evaluating variable significance through simultaneous and partial hypothesis testing, removing statistically insignificant variables, and improving model performance from the initial iteration to the final model.",
	"Applied the final regression equation to predict customer yearly spending, interpreted the influence of each predictor, and translated statistical findings into business recommendations for customer engagement, promotion optimization, and retention strategies."
    ],
    result: [
	"Key Findings: Income, customer tenure, session time, promotion usage, and bounce rate were the main factors influencing yearly customer spending. The final regression model explained 92.7% of customer spending, showing strong predictive performance.",
	"Customer Engagement: Customers who spent more time on the platform and used more promotions tended to spend more, while higher bounce rates were linked to lower spending.",
	"Recommendations: Recommended improving the user experience, optimizing promotional strategies, and strengthening customer retention programs to increase customer spending and long-term business growth."
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
              {selectedProject.tool}
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
              Objective
            </h3>
	    
	    <ul className="list-disc ml-6 space-y-2">
              {selectedProject.objective.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}
            </ul>

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
