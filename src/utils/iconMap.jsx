import React from 'react';

// FontAwesome Icons
import { 
    FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma, 
    FaBriefcase, FaGraduationCap, FaJava, FaPython, FaUnity, FaLaptopCode,
    FaJsSquare, FaMobileAlt
} from 'react-icons/fa';

// Simple Icons (Brand Icons)
import { 
    SiTailwindcss, SiJavascript, SiCplusplus, SiC, 
    SiBlender, SiUnrealengine, SiAutodeskmaya, SiNextdotjs, SiFlutter,
    SiMongodb, SiExpress, SiFirebase, SiTypescript
} from 'react-icons/si';

import { PiFileCSharpBold } from "react-icons/pi";

export const iconMap = {
    // Web & Frontend
    "HTML5": <FaHtml5 className="hover:text-[#E34F26] transition-colors cursor-pointer" />,
    "CSS3": <FaCss3Alt className="hover:text-[#1572B6] transition-colors cursor-pointer" />,
    "JavaScript": <SiJavascript className="hover:text-[#F7DF1E] transition-colors cursor-pointer" />,
    "TypeScript": <SiTypescript className="hover:text-[#3178C6] transition-colors cursor-pointer" />,
    "React": <FaReact className="hover:text-[#61DAFB] transition-colors cursor-pointer" />,
    "Next.js": <SiNextdotjs className="hover:text-white transition-colors cursor-pointer" />,
    "Tailwind CSS": <SiTailwindcss className="hover:text-[#06B6D4] transition-colors cursor-pointer" />,
    
    // Backend & Database
    "Node.js": <FaNodeJs className="hover:text-[#339933] transition-colors cursor-pointer" />,
    "Express.js": <SiExpress className="hover:text-white transition-colors cursor-pointer" />,
    "MongoDB": <SiMongodb className="hover:text-[#47A248] transition-colors cursor-pointer" />,
    "Firebase": <SiFirebase className="hover:text-[#FFCA28] transition-colors cursor-pointer" />,
    "Full Stack": <FaLaptopCode className="hover:text-primary transition-colors cursor-pointer" />,

    // Programming Languages
    "C": <SiC className="hover:text-[#A8B9CC] transition-colors cursor-pointer" />,
    "C++": <SiCplusplus className="hover:text-[#00599C] transition-colors cursor-pointer" />,
    "C#": <PiFileCSharpBold className="hover:text-primary transition-colors cursor-pointer" />,
    "Java": <FaJava className="hover:text-[#007396] transition-colors cursor-pointer" />,
    "Python": <FaPython className="hover:text-[#3776AB] transition-colors cursor-pointer" />,

    // Mobile & Apps
    "Flutter": <SiFlutter className="hover:text-[#02569B] transition-colors cursor-pointer" />,

    // 3D, Game Dev & Design
    "Blender": <SiBlender className="hover:text-[#F5792A] transition-colors cursor-pointer" />,
    "Unity": <FaUnity className="hover:text-white transition-colors cursor-pointer" />,
    "Unreal Engine": <SiUnrealengine className="hover:text-white transition-colors cursor-pointer" />,
    "Maya 3D": <SiAutodeskmaya className="hover:text-[#37A5CC] transition-colors cursor-pointer" />,
    "Figma": <FaFigma className="hover:text-[#F24E1E] transition-colors cursor-pointer" />,

    // Timeline Badges
    "Briefcase": <FaBriefcase size={14} className="text-white" />,
    "GraduationCap": <FaGraduationCap size={16} className="text-white" />,

    // ====== OLD KEYS FOR BACKWARD COMPATIBILITY ======
    // This ensures your LandingPage and Projects page don't break!
    FaReact: <FaReact className="hover:text-[#61DAFB] transition-colors cursor-pointer" />,
    FaJsSquare: <FaJsSquare className="hover:text-[#F7DF1E] transition-colors cursor-pointer" />,
    FaCss3Alt: <FaCss3Alt className="hover:text-[#1572B6] transition-colors cursor-pointer" />,
    FaFigma: <FaFigma className="hover:text-[#F24E1E] transition-colors cursor-pointer" />,
    FaNodeJs: <FaNodeJs className="hover:text-[#339933] transition-colors cursor-pointer" />,
    FaMobileAlt: <FaMobileAlt className="hover:text-white transition-colors cursor-pointer" />,
    SiTailwindcss: <SiTailwindcss className="hover:text-[#06B6D4] transition-colors cursor-pointer" />,
    SiExpress: <SiExpress className="hover:text-white transition-colors cursor-pointer" />,
    SiMongodb: <SiMongodb className="hover:text-[#47A248] transition-colors cursor-pointer" />
};