import React from 'react';
import ProjectCard from '../components/ProjectCard';
// Add whichever icons you need for your tech stack
import { FaReact, FaJsSquare, FaCss3Alt, FaFigma, FaNodeJs, FaMobileAlt } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si';

const Projects = () => {
  return (
    // Main Wrapper: Added pt-32 to push content down below the floating Navbar
    <div className="min-h-screen bg-[#0e0e0e] text-white pt-32 pb-20 px-6 md:px-16 flex flex-col items-center font-sans">
      
      {/* 1. TOP HEADER CARD */}
      <div className="w-full max-w-[1200px] bg-[#141417] rounded-md py-8 md:py-10 mb-12 flex justify-center shadow-lg border border-white/5">
        <h1 className="text-[3rem] md:text-[5rem] font-tusker leading-none tracking-wide uppercase text-white">
          Projects
        </h1>
      </div>

      {/* 2. PROJECTS GRID */}
      {/* grid-cols-1 (mobile), md:grid-cols-2 (tablet), lg:grid-cols-3 (desktop) */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <ProjectCard 
            id="portfolio"
            imagePlaceholder="linear-gradient(45deg, #4ade80, #064e3b)"
            title="Portfolio"
            role="Frontend"
            description="Developed to showcase my skills in web development, my portfolio website exemplifies proficiency in modern UI/UX design and React."
            techStack={[FaReact, FaJsSquare, FaCss3Alt, FaFigma]}
        />
        
        {/* Card 2 */}
        <ProjectCard
            id="weather-app" 
            imagePlaceholder="linear-gradient(45deg, #3b82f6, #1e3a8a)"
            title="Weather App"
            role="Full Stack"
            description="Developed a full-stack weather app using NodeJS/Express for server-side logic and ReactJS for an interactive frontend, delivering real-time data."
            techStack={[FaReact, FaNodeJs, SiExpress, FaFigma]}
        />

        {/* Card 3 */}
        <ProjectCard
            id="cred-clone" 
            imagePlaceholder="linear-gradient(45deg, #a855f7, #4c1d95)"
            title="Cred Clone"
            role="Frontend"
            description="Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled to flawlessly match the original design."
            techStack={[FaReact, FaJsSquare, SiTailwindcss, FaFigma]}
        />

        {/* Card 4 */}
        <ProjectCard
            id="mobile-app" 
            imagePlaceholder="linear-gradient(45deg, #ef4444, #7f1d1d)"
            title="Xynema"
            role="Mobile App"
            description="Designing and developing a comprehensive mobile application dedicated to streamlining the booking experience for movie and event tickets."
            techStack={[FaReact, FaMobileAlt, FaFigma]}
        />

        {/* Card 5 */}
        <ProjectCard
            id="tms-application" 
            imagePlaceholder="linear-gradient(45deg, #f59e0b, #78350f)"
            title="TMS Application"
            role="Full Stack"
            description="Collaborating on a robust Theater Management System, integrating custom UI elements and strict version control for seamless operation."
            techStack={[FaReact, FaNodeJs, SiMongodb]}
        />

        {/* Card 6 */}
        <ProjectCard
            id="auth-system" 
            imagePlaceholder="linear-gradient(45deg, #06b6d4, #164e63)"
            title="Auth System"
            role="Full Stack"
            description="A secure user authentication framework utilizing JWT tokens, encrypted password hashing, and protected frontend routing."
            techStack={[FaReact, FaNodeJs, SiExpress]}
        />

      </div>
    </div>
  );
};

export default Projects;