import aiNavigatorHome from "../assets/projects/aiNavigator/ai-navigator-home.png";
import aiNavigatorDashboard from "../assets/projects/aiNavigator/ai-navigator-dashboard.png";

import retailSelesForcastingThumbnail from "../assets/projects/retailSelesForcasting/retail-seles-forcasting-thumbnail.png"
import dataSet from "../assets/projects/retailSelesForcasting/data-set.png"
import heatmap from "../assets/projects/retailSelesForcasting/heatmap.png"


const projects = [
  {
    id: 1,
    title: "AI Navigator",
    shortTitle: "AI Navigator",
    category: "Full-Stack / AI",
    type: "Featured Project",

    description:
      "An AI-powered career and learning platform that helps students and professionals create personalized learning roadmaps, analyze resumes, prepare for interviews and track career progress.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "AI",
    ],

    highlights: [
      "AI-powered roadmap generation",
      "Resume analysis",
      "Interview preparation",
      "Career progress tracking",
    ],

    github: "https://github.com/bright-light-hub/ai-navigator-client",
    liveDemo: "https://ai-navigator-client.vercel.app/",

    featured: true,

    images: [
      {
        src: aiNavigatorDashboard,
        alt: "AI Navigator dashboard",
      },
      {
        src: aiNavigatorHome,
        alt: "AI Navigator home page",
      },
    ],
  },


  {
    id: 2,
    title: "Retail Sales Forcasting",
    shortTitle: "Retail Analysis",
    category: "Data Science / ML",
    type: "Data Science Project",

    description:
      "A large-scale retail sales analysis project involving exploratory data analysis, preprocessing, feature engineering, visualization and machine learning models.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "seaboarn",
      "Scikit-learn",
    ],

    highlights: [
      "Large retail dataset analysis",
      "Exploratory data analysis",
      "Feature engineering",
      "Predictive modeling",
    ],

    github: "https://github.com/bright-light-hub/RetailSalesForecasting",
    liveDemo: "https://github.com/bright-light-hub/RetailSalesForecasting/blob/main/Retail%20Sales%20Prediction.ipynb",

    featured: false,
    visualClass: "project-visual-data",
    images: [
      {
        src: retailSelesForcastingThumbnail,
        alt: "Retail Sales Forcasting project",
      },
      {
        src: dataSet,
        alt: "Retail Sales Forcasting DataSet",
      },
      {
        src: heatmap,
        alt: "Retail Sales Forcasting HeatMap",
      },
    ],
  },


  
];

export default projects;



























// const projects = [
//   {
//     id: 1,
//     title: "AI Navigator",
//     category: "Full-Stack / AI",
//     description:
//       "An AI-powered career and learning platform designed to help students and professionals build skills, create learning roadmaps, analyze resumes, prepare for interviews, and track career progress.",
//     technologies: [
//       "React",
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "Mongoose",
//       "JWT",
//       "AI",
//     ],
//     github: "#",
//     liveDemo: "#",
//     featured: true,
//   },

//   {
//     id: 2,
//     title: "Samadhan",
//     category: "Django / Full-Stack",
//     description:
//       "A grievance management portal where users can submit complaints, track their status, access help information, and communicate through a structured web interface.",
//     technologies: [
//       "Python",
//       "Django",
//       "REST API",
//       "HTML",
//       "CSS",
//       "JavaScript",
//     ],
//     github: "#",
//     liveDemo: "#",
//     featured: true,
//   },

//   {
//     id: 3,
//     title: "Short News",
//     category: "Python / AI",
//     description:
//       "A web application that processes news articles and generates concise summaries using a transformer-based NLP model.",
//     technologies: [
//       "Python",
//       "Django",
//       "Hugging Face",
//       "NLP",
//       "HTML",
//       "CSS",
//     ],
//     github: "#",
//     liveDemo: "#",
//     featured: false,
//   },

//   {
//     id: 4,
//     title: "Retail Sales Analysis",
//     category: "Data Science",
//     description:
//       "A large-scale retail sales analysis and machine learning project involving exploratory data analysis, feature engineering, preprocessing, visualization, and predictive modeling.",
//     technologies: [
//       "Python",
//       "Pandas",
//       "NumPy",
//       "Matplotlib",
//       "Scikit-learn",
//       "Machine Learning",
//     ],
//     github: "#",
//     liveDemo: "#",
//     featured: false,
//   },
// ];

// export default projects;