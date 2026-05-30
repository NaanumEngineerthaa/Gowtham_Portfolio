import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaReact, FaJsSquare, FaCss3Alt, FaFigma, FaGithub, FaDesktop, FaNodeJs, FaMobileAlt } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiMongodb } from 'react-icons/si';

// ==========================================
// 1. THE PROJECT DATABASE
// This object holds the unique data for every project.
// ==========================================
const projectDatabase = {
  "portfolio": {
    title: "Portfolio",
    role: "Frontend",
    bg: "linear-gradient(45deg, #4ade80, #064e3b)",
    description: "This project is a portfolio website developed using React.js. The website is designed to showcase the user's skills, projects, and services. It features a modern and clean design with smooth navigation and responsive layout.",
    techStack: [FaReact, FaJsSquare, FaCss3Alt, FaFigma],
    features: [
      { title: "Responsive Design", desc: "The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes." },
      { title: "Modern UI/UX", desc: "The website features a modern and clean user interface, providing a pleasant user experience. It uses a consistent color scheme and typography." }
    ]
  },
  "weather-app": {
    title: "Weather App",
    role: "Full Stack",
    bg: "linear-gradient(45deg, #3b82f6, #1e3a8a)",
    description: "Developed a full-stack weather app using NodeJS/Express for server-side logic and ReactJS for an interactive frontend, delivering real-time weather data.",
    techStack: [FaReact, FaNodeJs, SiExpress, FaFigma],
    features: [
      { title: "Real-time API Integration", desc: "Fetches live weather data securely from third-party APIs based on user search queries." },
      { title: "Dynamic UI Updates", desc: "The background and UI elements adapt dynamically based on the current weather conditions (e.g., rain, sunny, cloudy)." }
    ]
  },
  "xynema": {
    title: "Xynema",
    role: "Mobile App",
    bg: "linear-gradient(45deg, #ef4444, #7f1d1d)",
    description: "Designing and developing a comprehensive mobile application dedicated to streamlining the booking experience for movie and event tickets.",
    techStack: [FaReact, FaMobileAlt, FaFigma],
    features: [
      { title: "Seamless Ticketing", desc: "Allows users to browse movies, select seats interactively, and process payments in one unified flow." },
      { title: "Custom UI Design", desc: "Features custom-designed branding, icons, and a highly polished dark-mode interface built for mobile screens." }
    ]
  }
  // Add your other projects ("cred-clone", "tms-app") here using the exact same format!
};

const ProjectDetail = () => {
  // Grab the ID from the URL (e.g., "xynema")
  const { id } = useParams();

  // Look up the project in our database
  const project = projectDatabase[id];

  // If someone types a weird URL, show this error screen instead of crashing
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-primary hover:underline">Return to Projects</Link>
      </div>
    );
  }

  // ==========================================
  // 2. THE DYNAMIC HTML TEMPLATE
  // ==========================================
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white pt-32 pb-20 px-6 md:px-16 flex flex-col items-center font-sans">
      <div className="w-full max-w-[1200px]">
        
        {/* Back Button */}
        <Link to="/projects" className="inline-flex items-center gap-2 bg-[#141417] text-white px-5 py-2.5 rounded-lg hover:bg-[#22222a] transition-colors mb-6 border border-white/5 font-medium shadow-md w-fit">
          <FaArrowLeft size={14} /> Back
        </Link>

        {/* HERO SECTION */}
        <div className="bg-[#141417] rounded-md p-6 lg:p-10 shadow-xl border border-white/5 flex flex-col lg:flex-row gap-10">
          
          {/* Dynamic Background and Title */}
          <div 
            className="w-full lg:w-[55%] aspect-video rounded-md flex items-center justify-center font-tusker text-4xl tracking-widest text-black shadow-inner overflow-hidden relative" 
            style={{ background: project.bg }}
          >
            {project.title.toUpperCase()}
          </div>

          <div className="w-full lg:w-[45%] flex flex-col justify-center">
            {/* Dynamic Text Details */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide">{project.title}</h1>
            <span className="text-primary text-lg font-semibold mb-4">{project.role}</span>
            
            <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
              {project.description}
            </p>

            <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
            <div className="flex gap-3 text-3xl text-gray-300 mb-8">
              {/* Dynamically loop through the icons */}
              {project.techStack.map((Icon, index) => (
                <Icon key={index} className="hover:text-primary transition-colors cursor-pointer" />
              ))}
            </div>

            <div className="flex gap-4">
              <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition-colors shadow-lg">
                <FaDesktop /> Demo
              </a>
              <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-[#22222a] border border-white/10 text-white py-3 rounded-lg font-bold hover:bg-white hover:text-black transition-colors shadow-lg">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* DYNAMIC FEATURES SECTION */}
        <div className="bg-[#141417] rounded-md p-8 lg:p-10 shadow-xl border border-white/5 mt-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Main Features</h2>
          
          <ul className="space-y-6">
            {/* Dynamically loop through the features list */}
            {project.features.map((feature, index) => (
              <li key={index} className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-xl font-bold text-white">
                  <span className="text-primary text-2xl">&bull;</span> {feature.title}:
                </div>
                <p className="text-gray-400 ml-6 leading-relaxed">
                  {feature.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;