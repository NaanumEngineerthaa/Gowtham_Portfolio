import React from 'react';
import { X } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin, FaYoutube, FaPaperPlane, FaReact, FaJsSquare, FaCss3Alt, FaFigma, FaNodeJs } from 'react-icons/fa';// Add this line to import your new component!
// (Adjust the '../' path if your LandingPage is not inside a 'pages' folder)
import ProjectCard from '../components/ProjectCard';

// Import your avatar and your new smoke background here
import main_hero from '../assets/Main_Hero.png';
import smoke_bg from '../assets/smoke-bg.png'; // Uncomment this once you add the image!

const LandingPage = () => {
    return (
        <>
            {/* Main container: Explicitly set background color to match the deep grey/black */}
            <div className="h-screen bg-[#0e0e0e] text-white relative overflow-hidden flex flex-col font-sans">

                {/* The Smoke Vector Background */}
                <div
                    className="absolute inset-0 z-0 opacity-20 grayscale brightness-100 contrast-30 pointer-events-none"
                    style={{
                        backgroundImage: `url(${smoke_bg})`,
                        // Controls the size of the smoke inside the container
                        backgroundSize: '30%', 
                        backgroundPosition: '50% center',
                        backgroundRepeat: 'no-repeat',
                        // scale(1.8) makes the container 80% larger so the edges don't show when it rotates!
                        transform: ' translateX(10%) scaleY(3) scaleX(-3) rotate(40deg)', 
                    }}
                ></div>

                {/* Navigation Bar */}
                <nav className="relative z-10 flex items-center justify-between px-8 py-8 md:px-16 w-full max-w-[1600px] mx-auto">
                    {/* Logo */}
                    <div className="text-xl tracking-wide">
                        <span className="font-bold text-white">NAANUM </span>
                        <span className="font-light text-gray-400">ENGINEERTHA</span>
                    </div>

                    {/* Desktop Menu & Icons */}
                    <div className="hidden md:flex items-center space-x-12">
                        <div className="flex space-x-8 text-[15px] font-medium text-gray-300">
                            <a href="#home" className="hover:text-white transition-colors">Home</a>
                            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                            <a href="#about" className="hover:text-white transition-colors">About</a>
                            <a href="#contacts" className="hover:text-white transition-colors">Contacts</a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex space-x-5 text-white">
                            <a href="#" className="hover:text-gray-400 transition-colors"><FaInstagram size={18} /></a>
                            <a href="#" className="hover:text-gray-400 transition-colors"><FaGithub size={18} /></a>
                            <a href="#" className="hover:text-gray-400 transition-colors"><FaLinkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden text-white">
                        <button><X size={24} /></button>
                    </div>
                </nav>

                {/* Hero Section */}
                <main className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 flex-grow max-w-[100vw] mx-auto w-full">

                    {/* Left Column: Text Content */}
                    <div className="flex-1 max-w-[80%] z-20 md:mt-[-2%]">
                        <p className="text-[22px] font-medium mb-3 text-white tracking-wide">
                            Hi , I'm Gowtham,
                        </p>

                        {/* Main Title: Enforced white color, maximum font weight */}
                        <h1 className="text-[5.5rem] md:text-[5.5rem] lg:text-[7.5rem] tracking-wide font-tusker text-white leading-[1.05] mb-6">
                            I'M A FULLSTACK<br />DEVELOPER
                        </h1>

                        <p className="text-[#a1a1aa] text-[14px] mb-10 leading-[1.6] max-w-[480px] font-normal uppercase">
                            I'M PASSIONATE ABOUT CREATING BEAUTIFUL, FUNCTIONAL, AND USER-FRIENDLY WEBSITES. I SPECIALIZE IN WEB DEVELOPMENT, UI/UX DESIGN, AND SOLVING REAL-WORLD PROBLEMS WITH CODE. LET'S BUILD SOMETHING AMAZING TOGETHER!
                        </p>

                        {/* Thicker underline button */}
                        <a
                            href="#projects"
                            className="inline-block text-[20px] font-bold pb-2 border-b-[3px] border-white text-white hover:text-gray-300 hover:border-gray-300 transition-all"
                        >
                            View My Projects
                        </a>
                    </div>

                    {/* Right Column: 3D Avatar/Image */}
                    <div className="flex-1 absolute bottom-0 right-0 md:relative md:flex md:justify-end md:items-end h-full w-full pointer-events-none z-10">
                        <img
                            src={main_hero}
                            alt="3D Avatar"
                            className="h-[65%] md:h-[85%] lg:h-[95%] object-contain object-bottom absolute bottom-0 right-[-10%] md:right-0 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto"
                        />
                    </div>

                </main>
            </div>


            {/* We wrap both sections in a single dark container */}
            <div id="about" className="w-full bg-[#0e0e0e] flex flex-col font-sans overflow-hidden">
              
              {/* =========================================
                  SECTION 1: The Giant Typography Intro 
                  ========================================= */}
              <section className="relative min-h-screen flex flex-col items-center justify-center w-full px-6">
                
                {/* Background Outlined Text (Watermark) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden z-0 pointer-events-none opacity-30">
                    {/* We use an arbitrary Tailwind class for the text-stroke outline effect */}
                    <h1 className="text-[8rem] md:text-[14rem] lg:text-[18rem] font-tusker text-primary/8 whitespace-nowrap leading-[0.85] [-webkit-text-stroke:2px_var(--color-primary)]">
                        UI DESIGNER UI DESIGNER
                    </h1>
                    <h1 className="text-[8rem] md:text-[14rem] lg:text-[18rem] font-tusker text-primary/8 whitespace-nowrap leading-[0.85] [-webkit-text-stroke:2px_var(--color-primary)] ml-24">
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
                    <div className="flex space-x-8 mt-8 items-center justify-center">
                        <a href="#" className="text-primary hover:text-white transition-colors transform hover:scale-110">
                            <FaLinkedin size={36} />
                        </a>
                        <a href="#" className="text-primary hover:text-white transition-colors transform hover:scale-110">
                            <FaGithub size={36} />
                        </a>
                        <a href="#" className="text-primary hover:text-white transition-colors transform hover:scale-110">
                            <FaYoutube size={48} />
                        </a>
                    </div>
                </div>
              </section>
        
              {/* =========================================
                  SECTION 2: The Detailed Violet Box 
                  ========================================= */}
                {/* ✅ NEW CODE (Removed min-h-screen, adjusted padding) */}
              <section className="w-full flex items-center justify-center px-6 pb-20 pt-10 md:pt-1 md:px-16 relative z-20">
                <div className="w-full max-w-[90vw] bg-primary text-white rounded-md p-8 md:p-16 lg:p-10 shadow-2xl flex flex-col">
                      
                      <h2 className="text-[4rem] md:text-[3.5rem] text-center mb-10 leading-none tracking-wide font-tusker">
                        About
                      </h2>
            
                      <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[1.8] font-medium mb-12">
                        Hi there! I'm Gowtham, a Fullstack Developer with a passion for crafting user-centric experiences. 
                        I specialize in UI/UX design, front-end development, and backend systems. I thrive on collaboration 
                        and bring experience in agile methodologies. Beyond coding, I enjoy exploring new technologies and 
                        building tools that solve real-world problems. Let's connect and bring your digital visions to life.
                      </p>
            
                      <div className="flex justify-end w-full mt-auto">
                        <button className="bg-white text-primary px-8 py-3 rounded-md font-semibold text-md hover:bg-black/20 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                          More...
                        </button>
                      </div>
            
                    </div>
                  </section>
                 </div>  
                  {/* =========================================
                  SECTION 3: Recent Projects (Slide to View)
                  ========================================= */}
              <section id="projects" className="w-full flex flex-col items-center justify-center px-6 py-6 md:px-16 relative z-20">
                  {/* Dark Container for Projects */}
                  <div className="w-full max-w-[90vw] rounded-xl p-8 shadow-2xl flex flex-col">
                      
                      {/* Projects Header */}
                      <div className="flex justify-between bg-[#1a1a1a] rounded-md items-end mb-8 p-8">
                          <h2 className="text-[2rem] md:text-[3rem] leading-none tracking-wide font-tusker text-white">
                              Recent Projects
                          </h2>
                          <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm md:text-base mb-2 font-medium">
                              See all &rarr;
                          </a>
                      </div>

                      {/* Cards Container (Horizontal Scroll) */}
                      {/* overflow-x-auto enables horizontal scrolling, snap-x makes it snap smoothly */}
                      <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">
                          
                          <ProjectCard 
                              imagePlaceholder="linear-gradient(45deg, #4ade80, #064e3b)"
                              title="Portfolio"
                              role="Frontend"
                              description="Developed to showcase my skills in web development, my portfolio website exemplifies proficiency in technologies such as ReactJS, CSS, and Figma."
                              techStack={[FaReact, FaJsSquare, FaCss3Alt, FaFigma]}
                          />
                          
                          <ProjectCard 
                              imagePlaceholder="linear-gradient(45deg, #3b82f6, #1e3a8a)"
                              title="Weather App"
                              role="Full Stack"
                              description="Developed a full-stack weather app using NodeJS/Express for server-side logic and ReactJS/Handlebars for interactive frontend, delivering real-time data."
                              techStack={[FaReact, FaNodeJs, FaJsSquare, FaFigma]}
                          />

                          <ProjectCard 
                              imagePlaceholder="linear-gradient(45deg, #a855f7, #4c1d95)"
                              title="Cred Clone"
                              role="Frontend"
                              description="Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design."
                              techStack={[FaReact, FaJsSquare, FaCss3Alt, FaFigma]}
                          />

                      </div>
                  </div>
              </section>

              {/* =========================================
                  SECTION 4: Get in Touch 
                  ========================================= */}
              <section id="contacts" className="w-full flex items-center justify-center px-6 pt-6 md:px-16 relative z-20">
                {/* Notice this box uses bg-primary to perfectly match the About box! */}
                <div className="w-full max-w-[90vw] bg-primary text-white rounded-xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                    
                    {/* Left Side: Text */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-[4rem] md:text-[5rem] leading-none tracking-wide font-tusker mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-medium max-w-lg leading-relaxed">
                            If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.
                        </p>
                    </div>

                    {/* Right Side: Socials and Button */}
                    <div className="flex flex-col items-center md:items-end justify-center min-h-full space-y-6">
                        <div className="text-center md:text-right">
                            <p className="font-bold mb-3 text-lg">Follow me on</p>
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-black transition-colors transform hover:scale-110"><FaInstagram size={28} /></a>
                                <a href="#" className="hover:text-black transition-colors transform hover:scale-110"><FaYoutube size={28} /></a>
                                <a href="#" className="hover:text-black transition-colors transform hover:scale-110"><FaLinkedin size={28} /></a>
                                <a href="#" className="hover:text-black transition-colors transform hover:scale-110"><FaGithub size={28} /></a>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl">
                            Contact Me <FaPaperPlane />
                        </button>
                    </div>

                </div>
              </section>
            
                 
        </>
    );
};

export default LandingPage;