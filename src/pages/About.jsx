import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    // We wrap both sections in a single dark container
    <div id="about" className="w-full bg-[#0e0e0e] flex flex-col font-sans overflow-hidden">
      
      {/* =========================================
          SECTION 1: The Giant Typography Intro 
          ========================================= */}
      <section className="relative min-h-screen flex flex-col items-center justify-center w-full px-6">
        
        {/* Background Outlined Text (Watermark) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden z-0 pointer-events-none opacity-30">
            {/* We use an arbitrary Tailwind class for the text-stroke outline effect */}
            <h1 className="text-[8rem] md:text-[14rem] lg:text-[18rem] font-tusker text-transparent whitespace-nowrap leading-[0.85] [-webkit-text-stroke:2px_#3f3f46]">
                UI DESIGNER UI DESIGNER
            </h1>
            <h1 className="text-[8rem] md:text-[14rem] lg:text-[18rem] font-tusker text-transparent whitespace-nowrap leading-[0.85] [-webkit-text-stroke:2px_#3f3f46] ml-24">
                FRONT END DEVELOPER
            </h1>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
            <p className="text-white text-lg md:text-2xl font-medium mb-[10px] md:mb-[20px] tracking-wide">
                Hey There I'm
            </p>
            
            {/* The Massive Name using Tusker Grotesk and your Primary Color */}
            <h1 className="text-[7rem] md:text-[12rem] lg:text-[15rem] text-primary font-tusker leading-none uppercase">
                Gowtham
            </h1>
            
            <p className="text-gray-300 text-sm md:text-lg lg:text-xl font-light mt-4 tracking-wider">
                Currently Working as Fullstack Developer
            </p>

            {/* Social Icons */}
            <div className="flex space-x-8 mt-8">
                <a href="#" className="text-primary hover:text-white transition-colors transform hover:scale-110">
                    <FaLinkedin size={36} />
                </a>
                <a href="#" className="text-primary hover:text-white transition-colors transform hover:scale-110">
                    <FaGithub size={36} />
                </a>
            </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: The Detailed Violet Box 
          ========================================= */}
      <section className="w-full min-h-screen flex items-center justify-center px-6 py-20 md:px-16 relative z-20">
        <div className="w-full max-w-[90vw] bg-primary text-white rounded-md p-8 md:p-16 lg:p-20 shadow-2xl flex flex-col">
          
          <h2 className="text-[4rem] md:text-[4.5rem] text-center mb-10 leading-none tracking-wide font-tusker">
            About
          </h2>

          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.8] font-medium mb-12">
            Hi there! I'm Gowtham, a Fullstack Developer with a passion for crafting user-centric experiences. 
            I specialize in UI/UX design, front-end development, and backend systems. I thrive on collaboration 
            and bring experience in agile methodologies. Beyond coding, I enjoy exploring new technologies and 
            building tools that solve real-world problems. Let's connect and bring your digital visions to life.
          </p>

          <div className="flex justify-end w-full mt-auto">
            <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold text-lg hover:bg-black/20 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              More...
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;