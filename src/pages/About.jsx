import React from 'react';
import { FaInstagram, FaYoutube, FaGithub, FaLinkedin, FaBehance, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiCplusplus } from 'react-icons/si';
import { FiDownload } from 'react-icons/fi';
import Hero from '../assets/Main_Hero.png'

const About = () => {
  return (
    // Main Wrapper: Added pt-32 to push content down so it doesn't hide behind your floating Navbar
    <div id="about" className="min-h-screen bg-[#0e0e0e] text-white pt-32 pb-12 px-6 md:px-16 flex flex-col items-center font-sans">
      
      {/* 1. TOP HEADER CARD */}
      <div className="w-full max-w-[1200px] bg-[#141417] rounded-md py-6 md:py-8 mb-8 flex justify-center shadow-lg border border-white/5">
        <h1 className="text-[3rem] md:text-[5rem] font-tusker leading-none tracking-wide uppercase text-white">
          About
        </h1>
      </div>

      {/* 2. MAIN BIO CARD */}
      <div className="w-full max-w-[1200px] bg-[#141417] rounded-md p-6 md:p-10 mb-8 flex flex-col lg:flex-row gap-10 shadow-lg border border-white/5">
        
        {/* Left: Profile Image */}
        <div className="w-full lg:w-[35%] aspect-[4/5] bg-[#22222a] rounded-xl overflow-hidden relative">
            {/* Replace this src with your actual image path (e.g., import my_pic from '../assets/my_pic.jpg') */}
            <img 
              src={Hero} 
              alt="Gowtham" 
              className="w-full h-full object-cover" 
            />
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-[65%] flex flex-col justify-center">
            <p className="text-gray-300 text-[15px] md:text-[16px] leading-[1.8] font-light">
              I'm a Fullstack Developer and UI/UX Designer currently studying Computer Science and Engineering. My passion lies in building user-friendly solutions that enhance overall user experiences. I am currently focused on <span className="text-primary font-medium">React, Node.js, and Tailwind CSS</span>, leveraging these technologies to create responsive and functional applications.
              <br /><br />
              I have led the design and development of platforms like TMS (Theater Management System) and am currently working on an app called <span className="text-primary font-medium">Xynema</span> to facilitate movie and event bookings. I thrive in <span className="text-primary font-medium">Agile Scrum environments</span> and believe collaboration and teamwork are essential to delivering successful projects. 
              <br /><br />
              I'm always eager to work on impactful projects that challenge me to grow while also contributing to meaningful outcomes. So, whether you're <span className="text-primary font-medium">looking for a dedicated developer, a creative designer, or a collaborative team member</span>, I'm here to help bring ideas to life. Let's connect and create innovative solutions together!
            </p>

            <div className="mt-8">
              <button className="flex items-center gap-2 bg-transparent border border-primary text-primary px-6 py-2.5 rounded-lg font-medium hover:bg-primary hover:text-white transition-all shadow-md">
                 <FiDownload size={18} /> Download Resume
              </button>
            </div>
        </div>
      </div>

      {/* 3. SKILLS & SOCIALS GRID */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Skills Card (Takes up 2/3 of the row on large screens) */}
        <div className="md:col-span-2 bg-[#141417] rounded-xl p-8 shadow-lg border border-white/5 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6 text-white tracking-wide">Skills</h3>
            {/* You can swap these react-icons out for any tech stack you use! */}
            <div className="flex flex-wrap gap-6 text-[2.5rem] text-gray-500">
                <FaHtml5 className="hover:text-[#E34F26] transition-colors cursor-pointer" />
                <FaCss3Alt className="hover:text-[#1572B6] transition-colors cursor-pointer" />
                <SiJavascript className="hover:text-[#F7DF1E] transition-colors cursor-pointer" />
                <FaReact className="hover:text-[#61DAFB] transition-colors cursor-pointer" />
                <SiTailwindcss className="hover:text-[#06B6D4] transition-colors cursor-pointer" />
                <FaNodeJs className="hover:text-[#339933] transition-colors cursor-pointer" />
                <SiCplusplus className="hover:text-[#00599C] transition-colors cursor-pointer" />
            </div>
        </div>

        {/* Socials Card */}
        <div className="bg-[#141417] rounded-xl p-8 shadow-lg border border-white/5 flex items-center justify-center">
            <div className="flex gap-5 text-[2rem] text-primary">
                <a href="#" className="hover:text-white transition-transform transform hover:scale-110"><FaInstagram /></a>
                <a href="#" className="hover:text-white transition-transform transform hover:scale-110"><FaYoutube /></a>
                <a href="#" className="hover:text-white transition-transform transform hover:scale-110"><FaBehance /></a>
                <a href="#" className="hover:text-white transition-transform transform hover:scale-110"><FaLinkedin /></a>
                <a href="#" className="hover:text-white transition-transform transform hover:scale-110"><FaGithub /></a>
            </div>
        </div>

      </div>
      
    </div>
  );
};

export default About;