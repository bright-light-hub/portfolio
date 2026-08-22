import aiNavigatorHome from "../assets/projects/ai-navigator-home.png";
import aiNavigatorDashboard from "../assets/projects/ai-navigator-dashboard.png";
import samadanThumbnail from "../assets/projects/samadhan-thumbnail.png";
// import shortNewsThumbnail from "../assets/projects/short-news-thumbnail.png";
import retailAnalysisThumbnail from "../assets/projects/retail-analysis-thumbnail.png";


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

    github: "#",
    liveDemo: "#",

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
    title: "Samadhan",
    shortTitle: "Samadhan",
    category: "Django / Full-Stack",
    type: "Web Application",

    description:
      "A grievance management portal designed to allow users to submit complaints, track complaint status and access support information through a structured web application.",

    technologies: [
      "Python",
      "Django",
      "REST API",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    highlights: [
      "Complaint submission",
      "Status tracking",
      "Structured grievance workflow",
      "Responsive interface",
    ],

    github: "#",
    liveDemo: false,

    featured: true,
    visualClass: "project-visual-samadhan",

    images: [
      {
        src: samadanThumbnail,
        alt: "Samadhan grievance management portal",
      },
    ],
  },

  {
    id: 3,
    title: "Short News",
    shortTitle: "Short News",
    category: "Python / NLP",
    type: "AI Application",

    description:
      "A news summarization web application that processes longer news articles and generates concise summaries using a transformer-based natural language processing model.",

    technologies: [
      "Python",
      "Django",
      "Hugging Face",
      "NLP",
      "HTML",
      "CSS",
    ],

    highlights: [
      "Article processing",
      "Automatic summarization",
      "Transformer-based NLP",
      "Web interface",
    ],

    github: "#",
    liveDemo: "#",

    featured: false,
    visualClass: "project-visual-news",

    // images: [
    //   {
    //     src: shortNewsThumbnail,
    //     alt: "Short News application",
    //   },
    // ],
  },

  {
    id: 4,
    title: "Retail Sales Analysis",
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
      "Scikit-learn",
    ],

    highlights: [
      "Large retail dataset analysis",
      "Exploratory data analysis",
      "Feature engineering",
      "Predictive modeling",
    ],

    github: "#",
    liveDemo: "#",

    featured: false,
    visualClass: "project-visual-data",
    images: [
      {
        src: retailAnalysisThumbnail,
        alt: "Retail Sales Analysis project",
      },
    ],
  },


  {
    id: 5,
    title: "Helth Monitor ",
    shortTitle: "Helth Monitor",
    category: "Data Science / ML",
    type: "Data Science Project",

    description:
      "A large-scale retail sales analysis project involving exploratory data analysis, preprocessing, feature engineering, visualization and machine learning models.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
    ],

    highlights: [
      "Large retail dataset analysis",
      "Exploratory data analysis",
      "Feature engineering",
      "Predictive modeling",
    ],

    github: "#",
    liveDemo: "#",

    featured: false,
    // visualClass: "project-visual-data",
    // images: [
    //   {
    //     src: "",
    //     // alt: "Retail Sales Analysis project",
    //   },
    // ],
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