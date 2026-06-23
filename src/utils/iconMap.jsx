import React from 'react';

// FontAwesome Icons
import { 
    FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma, 
    FaBriefcase, FaGraduationCap, FaJava, FaPython, FaUnity, FaLaptopCode,
    FaJsSquare, FaMobileAlt, FaGithub, FaUserShield, FaCloud, FaCubes
} from 'react-icons/fa';

// Simple Icons (Brand Icons)
import { 
    SiTailwindcss, SiJavascript, SiCplusplus, SiC, 
    SiBlender, SiUnrealengine, SiAutodeskmaya, SiNextdotjs, SiFlutter,
    SiMongodb, SiExpress, SiFirebase, SiTypescript, SiDart, SiAndroidstudio
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
    "Full Stack": <FaLaptopCode className="hover:text-primary transition-colors cursor-pointer" />,

    // Programming Languages
    "C": <SiC className="hover:text-[#A8B9CC] transition-colors cursor-pointer" />,
    "C++": <SiCplusplus className="hover:text-[#00599C] transition-colors cursor-pointer" />,
    "C#": <PiFileCSharpBold className="hover:text-primary transition-colors cursor-pointer" />,
    "Java": <FaJava className="hover:text-[#007396] transition-colors cursor-pointer" />,
    "Python": <FaPython className="hover:text-[#3776AB] transition-colors cursor-pointer" />,

    // Mobile, App & Flutter Stack
    "Flutter": <SiFlutter className="hover:text-[#02569B] transition-colors cursor-pointer" />,
    "Dart": <SiDart className="hover:text-[#0175C2] transition-colors cursor-pointer" />,
    "Riverpod": <FaCubes className="hover:text-[#02569B] transition-colors cursor-pointer" />,
    "Android Studio": <SiAndroidstudio className="hover:text-[#3DDC84] transition-colors cursor-pointer" />,

    // Firebase Ecosystem
    "Firebase": <SiFirebase className="hover:text-[#FFCA28] transition-colors cursor-pointer" />,
    "Cloud Firestore": <SiFirebase className="hover:text-[#FFCA28] transition-colors cursor-pointer" />,
    "Firebase Authentication": <FaUserShield className="hover:text-[#FFCA28] transition-colors cursor-pointer" />,
    "Firebase Storage": <FaCloud className="hover:text-[#FFCA28] transition-colors cursor-pointer" />,

    // Version Control
    "Git & GitHub": <FaGithub className="hover:text-white transition-colors cursor-pointer" />,

    // 3D, Game Dev & Design
    "Blender": <SiBlender className="hover:text-[#F5792A] transition-colors cursor-pointer" />,
    "Unity": <FaUnity className="hover:text-white transition-colors cursor-pointer" />,
    "Unreal Engine": <SiUnrealengine className="hover:text-white transition-colors cursor-pointer" />,
    "Maya 3D": <SiAutodeskmaya className="hover:text-[#37A5CC] transition-colors cursor-pointer" />,
    "Figma": <FaFigma className="hover:text-[#F24E1E] transition-colors cursor-pointer" />,

    // Timeline Badges
    "Briefcase": <FaBriefcase size={14} className="text-white" />,
    "GraduationCap": <FaGraduationCap size={16} className="text-white" />,

};