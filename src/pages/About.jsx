import React, { useState, useEffect } from 'react';
import { FaInstagram, FaYoutube, FaGithub, FaLinkedin, FaGooglePlay, FaBriefcase, FaHome } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import Hero from '../assets/Main_Hero.png'

// 1. Import Firebase fetching tools
import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../firebase';

import { iconMap } from '../utils/iconMap';


const About = () => {

  // 3. State variables for DB Data
  const [aboutContent, setAboutContent] = useState(null);
  const [socialLinks, setSocialLinks] = useState(null);

  // 4. Fetch the data on load
  useEffect(() => {
    const fetchAboutData = async () => {
        try {
            // Fetch the About Page text, skills, and timeline
            const aboutRef = doc(db, "content", "about_page");
            const aboutSnap = await getDoc(aboutRef);
            if (aboutSnap.exists()) {
                setAboutContent(aboutSnap.data());
            }

            // Fetch the Social Links (reusing the same document you already created!)
            const socialRef = doc(db, "social_links", "profiles");
            const socialSnap = await getDoc(socialRef);
            if (socialSnap.exists()) {
                setSocialLinks(socialSnap.data());
            }
        } catch (error) {
            console.error("Error fetching About data:", error);
        }
    };

    fetchAboutData();
  }, []);

  // Fallback data while loading so the page doesn't crash
  const timelineData = [...(aboutContent?.timeline || [])].reverse();
  const skillsData = aboutContent?.skills || [];

  return (
    // Main Wrapper: Added pt-32 to push content down so it doesn't hide behind your floating Navbar
    <div id="about" className="min-h-screen bg-[#0e0e0e] text-white pt-32 pb-12 px-6 md:px-16 flex flex-col items-center font-sans">
      
      {/* 1. TOP HEADER CARD */}
      <div className="w-full max-w-[1200px] bg-[#141417] rounded-md py-6 md:py-8 mb-8 flex justify-center shadow-lg border border-white/5">
        <h1 className="text-[3rem] md:text-[5rem] font-tusker leading-none tracking-wide uppercase text-white">
          About
        </h1>
      </div>

      {/* 2. MAIN BIO CARD (Newspaper Layout) */}
      {/* ✅ Removed 'flex' and 'flex-row' so the container acts as a standard block */}
      <div className="w-full max-w-[1200px] bg-[#141417] rounded-md p-6 md:p-10 mb-8 shadow-lg border border-white/5 relative block">
        
        {/* Profile Image (Floated Left) */}
        {/* ✅ Added 'md:float-left', 'mr-8', and 'mb-4' so text wraps around the right and bottom */}
        {/* Note: On mobile (under md:), it stays full width so the text isn't squeezed too tightly */}
        <div className="float-none md:float-left w-full md:w-[40%] lg:w-[35%] aspect-[4/5] bg-[#22222a] rounded-xs overflow-hidden mb-6 md:mb-2 mr-0 md:mr-8 lg:mr-10">
            <img 
              src={aboutContent?.profile || "https://images.pexels.com/photos/30513784/pexels-photo-30513784/free-photo-of-silhouette-portrait-of-young-man-with-glasses.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" } 
              alt="Avatar" 
              className="w-full h-full object-cover object-top" 
            />
        </div>

        {/* Text Content */}
        {/* ✅ Added 'text-justify' for that blocky newspaper alignment */}
        <div className="text-gray-300 text-[15px] md:text-[16px] leading-[1.8] font-light text-justify whitespace-pre-line">
            {aboutContent?.bio || "Loading your bio..."}
        </div>

        {/* Resume Button */}
        {/* ✅ Added 'clear-both' to guarantee this button always sits safely below both the text AND the image */}
        <div className="mt-8 md:mt-10 clear-both pt-2">
            <a href={aboutContent?.resumeUrl || "#"} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center justify-center w-full md:w-auto gap-2 bg-transparent border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-all shadow-md">
                   <FiDownload size={18} /> Download Resume
                </button>
            </a>
        </div>
        
      </div>

      {/* 3. SKILLS & SOCIALS GRID */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Skills Card */}
        <div className="md:col-span-2 bg-[#141417] rounded-xl p-8 shadow-lg border border-white/5 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6 text-white tracking-wide">Skills</h3>
            <div className="flex flex-wrap gap-6 text-[2.5rem] text-gray-500">
                {/* ✅ Dynamic Skills Loop */}
                {skillsData.map((skillName, index) => (
                    <div key={index} title={skillName}>
                        {iconMap[skillName]}
                    </div>
                ))}
            </div>
        </div>

        {/* Socials Card */}
        <div className="bg-[#141417] rounded-xl p-8 shadow-lg border border-white/5 flex items-center justify-center">
            <div className="flex gap-5 text-[2rem] text-primary">
                {/* ✅ Dynamic Social Links */}
                <a href={socialLinks?.instagram || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform transform hover:scale-110"><FaInstagram /></a>
                <a href={socialLinks?.youtube || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform transform hover:scale-110"><FaYoutube /></a>
                <a href={socialLinks?.playstore || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform transform hover:scale-110"><FaGooglePlay /></a>
                <a href={socialLinks?.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform transform hover:scale-110"><FaLinkedin /></a>
                <a href={socialLinks?.github || "#"} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform transform hover:scale-110"><FaGithub /></a>
            </div>
        </div>

      </div>
     {/* 4. EXPERIENCE & JOURNEY TIMELINE */}
      <div className="w-full max-w-[1200px] mt-8 bg-[#141417] rounded-xl p-6 md:p-12 shadow-lg border border-white/5">
        <h2 className="text-[2rem] md:text-[3rem] leading-none tracking-wide font-tusker text-white mb-10">
            My Journey
        </h2>
        
        <div className="relative border-l-[3px] border-primary/30 ml-4 md:ml-6 flex flex-col gap-10 md:gap-12">
            
            {/* ✅ Dynamic Timeline Loop */}
            {timelineData.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-12 group">
                    
                    <div className="absolute left-[-18px] top-0 w-8 h-8 rounded-full bg-[#141417] border-[3px] border-primary flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.6)] transition-all duration-300">
                        {/* Maps "FaBriefcase" to the actual icon */}
                        {iconMap[item.icon] || <FaBriefcase size={14} className="text-white" />}
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                            {item.title}
                        </h3>
                        <span className="text-primary font-medium text-sm md:text-base mt-1 md:mt-0 bg-primary/10 px-3 py-1 rounded-full w-fit">
                            {item.date}
                        </span>
                    </div>
                    
                    <h4 className="text-gray-400 text-sm md:text-md font-semibold mb-3 uppercase tracking-wider">
                        {item.company}
                    </h4>
                    
                    <p className="text-gray-300 text-[14px] md:text-[15px] leading-relaxed font-light">
                        {item.description}
                    </p>
                </div>
            ))}
            {/* ✅ The Home Icon locked to the bottom of the timeline */}
            <div className="absolute bottom-0 left-[-18px] w-8 h-8 rounded-full bg-[#141417] border-[3px] border-primary flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)] z-10">
                <FaHome size={14} className="text-white" />
            </div>

        </div>
      </div>
    </div>
  );
};

export default About;