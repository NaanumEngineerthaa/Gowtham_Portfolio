import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaInstagram, FaGithub, FaLinkedin, FaYoutube, FaPaperPlane, FaReact, FaJsSquare, FaCss3Alt, FaFigma, FaNodeJs, FaLongArrowAltDown, FaGooglePlay } from 'react-icons/fa';// Add this line to import your new component!
// (Adjust the '../' path if your LandingPage is not inside a 'pages' folder)
import ProjectCard from '../components/ProjectCard';

// Import your avatar and your new smoke background here
import main_hero from '../assets/Main_Hero.png';
import smoke_bg from '../assets/smoke-bg.png'; // Uncomment this once you add the image!

import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <div className="h-screen bg-[#0e0e0e] text-white relative overflow-hidden flex flex-col font-sans">

                {/* =========================================
                    THE SMOKE VECTOR BACKGROUND
                    ========================================= */}
                
                {/* 1. DESKTOP VIEW (Hidden on Mobile) */}
                <div
                    className="hidden md:block absolute inset-0 z-0 opacity-20 grayscale brightness-100 contrast-30 pointer-events-none"
                    style={{
                        backgroundImage: `url(${smoke_bg})`,
                        backgroundSize: '30%', 
                        backgroundPosition: '50% center',
                        backgroundRepeat: 'no-repeat',
                        transform: ' translateX(10%) scaleY(3) scaleX(-3) rotate(40deg)', 
                    }}
                ></div>

                {/* 2. MOBILE VIEW (Hidden on Desktop) */}
                <div
                    className="block md:hidden absolute inset-0 z-0 opacity-20 grayscale brightness-100 contrast-30 pointer-events-none"
                    style={{
                        backgroundImage: `url(${smoke_bg})`,
                        // ✅ Increased size to 150% to make it massive and fill the screen
                        backgroundSize: '110%', 
                        // ✅ Set to absolute center for the Y and X axis
                        backgroundPosition: 'center 40%', 
                        backgroundRepeat: 'no-repeat',
                        // ✅ Kept the horizontal flip (-1) but removed the crazy rotation/stretching so it sits perfectly behind the avatar
                        transform: 'scaleX(-1.5) scaleY(1.2)', 
                    }}
                ></div>

                {/* Hero Section */}
                {/* Desktop: flex-row | Mobile: flex-col */}
                <main className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 flex-grow max-w-[100vw] mx-auto w-full pt-[60px] md:pt-0">

                    {/* =========================================
                        1. LEFT COLUMN (TEXT)
                        Desktop: Left Side | Mobile: Bottom Overlay
                        (Placed first in DOM to force left-alignment on desktop)
                        ========================================= */}
                    <div className="flex-1 w-full z-20 flex flex-col items-center md:items-start text-center md:text-left justify-end md:justify-center pb-[3vh] sm:pb-[5vh] md:pb-0 h-full md:h-auto md:max-w-[80%] mt-auto md:mt-[-2%]">
                        
                        {/* Greeting: Cursive on mobile, standard on desktop */}
                        <p className="text-3xl md:text-4xl font-wonderfulDay mb-[-8px] text-grey-500 tracking-wider drop-shadow-md z-20">
                            Hi, I'm Gowtham,
                        </p>

                        {/* Title: Tall Metallic Gradient on mobile, standard white on desktop */}
                        <h1 className="text-[4.0rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7.5rem] tracking md:tracking-wide font-tusker leading-[1.0] md:leading-[1.05] mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#a1a1aa] to-[#3f3f46] md:text-white md:bg-none drop-shadow-2xl md:drop-shadow-none transform scale-y-110 md:scale-y-100 mt-2 z-20">
                            I'M A FULLSTACK<br />DEVELOPER
                        </h1>

                        <p className="text-[#a1a1aa] text-[9.5px] sm:text-[11px] md:text-[14px] leading-[1.6] max-w-[95%] md:max-w-[480px] font-normal uppercase mb-6 md:mb-10 drop-shadow-lg md:drop-shadow-none tracking-wide z-20">
                            I'M PASSIONATE ABOUT CREATING BEAUTIFUL, FUNCTIONAL, AND USER-FRIENDLY WEBSITES. I SPECIALIZE IN WEB DEVELOPMENT, UI/UX DESIGN, AND SOLVING REAL-WORLD PROBLEMS WITH CODE. LET'S BUILD SOMETHING AMAZING TOGETHER!
                        </p>

                        {/* DESKTOP: Thick underline button (Hidden on Mobile) */}
                        <a
                            href="#section_2"
                            className="hidden md:inline-flex items-center gap-2 text-[20px] font-bold pb-2 border-b-[3px] border-white text-white hover:text-gray-300 hover:border-gray-300 transition-all z-20"
                        >
                            Scroll Down <FaLongArrowAltDown />
                        </a>

                        {/* MOBILE: Side-by-side Glass Buttons (Hidden on Desktop) */}
                        {/* <div className="flex md:hidden items-center justify-center gap-4 w-full max-w-[360px] mb-2 px-2 z-20">
                            <Link to="/projects" className="flex-1 bg-black/50 border border-white/20 backdrop-blur-md text-[#e4e4e7] text-[10px] font-bold tracking-[0.08em] py-3.5 px-2 rounded-full shadow-[inset_0_1px_5px_rgba(255,255,255,0.15)] hover:bg-white/10 transition-all active:scale-95 uppercase">
                                Explore Projects
                            </Link>
                            <Link to="/contact" className="flex-1 bg-black/50 border border-white/20 backdrop-blur-md text-[#e4e4e7] text-[10px] font-bold tracking-[0.08em] py-3.5 px-2 rounded-full shadow-[inset_0_1px_5px_rgba(255,255,255,0.15)] hover:bg-white/10 transition-all active:scale-95 uppercase">
                                Let's Connect
                            </Link>
                        </div> */}

                        {/* MOBILE: Custom Scroll Indicator (Hidden on Desktop) */}
                        <div className="flex md:hidden flex-col items-center gap-1 opacity-60 mb-5 z-20">
                            <div className="w-[1.5px] h-5 bg-gradient-to-b from-transparent to-white"></div>
                            <div className="w-1.5 h-1.5 rounded-full border-[1.5px] border-white bg-transparent"></div>
                        </div>

                    </div>

                    {/* =========================================
                        2. RIGHT COLUMN (AVATAR)
                        Desktop: Right Side | Mobile: Top Background
                        ========================================= */}
                    <div className="absolute top-0 left-0 w-full h-[55%] sm:h-[65%] md:relative md:h-full md:w-1/2 flex justify-center md:justify-end items-end pointer-events-none z-10 pt-[5vh] md:pt-0">
                        <img
                            src={main_hero}
                            alt="3D Avatar"
                            // Apply a fade-out mask on mobile so it blends into the text perfectly, remove mask on desktop
                            className="h-[90%] md:h-[85%] lg:h-[95%] object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto [mask-image:linear-gradient(to_bottom,black_80%,transparent_95%)] md:[mask-image:none]"
                        />
                    </div>

                </main>
            </div>


            {/* We wrap both sections in a single dark container */}
            <div id="section_2" className="w-full bg-[#0e0e0e] flex flex-col font-sans overflow-hidden">
              
              {/* =========================================
                  SECTION 1: The Giant Typography Intro 
                  ========================================= */}
              {/* ✅ Adjusted mobile padding (py-16) instead of forcing a full screen height, 
                     so the About box scrolls into view perfectly! */}
              <section className="relative flex flex-col items-center justify-center w-full px-6 py-16 md:py-0 min-h-[80vh] md:min-h-screen">
                
               {/* Background Outlined Text (Watermark) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden z-0 pointer-events-none opacity-30 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                    
                     {/* Bottom Text: Continuously Moving LEFT */}
                    <h1 className="md:hidden animate-marquee-left text-[10rem] md:text-[14rem] lg:text-[18rem] font-tusker text-primary/8 whitespace-nowrap leading-[0.95] [-webkit-text-stroke:2px_var(--color-primary)] mt-2 md:mt-0">
                         FRONT END DEVELOPER FRONT END DEVELOPER FRONT END DEVELOPER FRONT END DEVELOPER FRONT END DEVELOPER FRONT END DEVELOPER FRONT END DEVELOPER FRONT END DEVELOPER FRONT END DEVELOPER FRONT END DEVELOPER FRONT END DEVELOPER FRONT END DEVELOPER 
                    </h1>

                    {/* Top Text: Continuously Moving RIGHT */}
                    <h1 className="animate-marquee-right text-[8rem] md:text-[14rem] lg:text-[18rem] font-tusker text-primary/8 whitespace-nowrap leading-[0.95] [-webkit-text-stroke:2px_var(--color-primary)]">
                        UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER 
                    </h1>
                    
                    {/* Bottom Text: Continuously Moving LEFT */}
                    <h1 className="animate-marquee-left text-[8rem] md:text-[14rem] lg:text-[18rem] font-tusker text-primary/8 whitespace-nowrap leading-[0.95] [-webkit-text-stroke:2px_var(--color-primary)] mt-2 md:mt-0">
                        FRONT END DEVELOPER FRONT END DEVELOPER FRONT END DEVELOPER FRONT END DEVELOPER FRONT END DEVELOPER 
                    </h1>

                    {/* Top Text: Continuously Moving RIGHT */}
                    <h1 className="md:hidden animate-marquee-right text-[10rem] md:text-[14rem] lg:text-[18rem] font-tusker text-primary/8 whitespace-nowrap leading-[0.95] [-webkit-text-stroke:2px_var(--color-primary)]">
                        UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER UI DESIGNER 
                    </h1>

                </div>
        
                {/* Foreground Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                    <p className="text-white text-[16px] md:text-2xl font-medium mb-[10px] md:mb-[20px] tracking-wide">
                        Hey There I'm
                    </p>
                    
                    {/* ✅ Responsive Name: 5.5rem on mobile fits perfectly, scales up to 12rem on desktop */}
                    <h1 className="text-[5.5rem] sm:text-[7rem] md:text-[12rem] lg:text-[15rem] text-primary font-tusker leading-none uppercase">
                        Gowtham
                    </h1>
                    
                    <p className="text-gray-300 text-[13px] md:text-lg lg:text-xl font-light mt-2 md:mt-4 tracking-wider">
                        Currently Working as Fullstack Developer
                    </p>
        
                    {/* Social Icons */}
                    <div className="flex space-x-3 md:space-x-8 mt-1 md:mt-8 items-center justify-center">
                        <a href="#" className="text-primary hover:text-white transition-colors transform hover:scale-110">
                            {/* ✅ Used Tailwind sizing so they can be slightly smaller on phones */}
                            <FaLinkedin className="w-8 h-8 md:w-10 md:h-10" />
                        </a>
                        <a href="#" className="text-primary hover:text-white transition-colors transform hover:scale-110">
                            <FaGithub className="w-8 h-8 md:w-10 md:h-10" />
                        </a>
                        <a href="#" className="text-primary hover:text-white transition-colors transform hover:scale-110">
                            <FaYoutube className="w-10 h-10 md:w-12 md:h-12" />
                        </a>
                    </div>
                </div>
              </section>
        
              {/* =========================================
                  SECTION 2: The Detailed Violet Box 
                  ========================================= */}
              {/* ✅ Added pb-28 on mobile so it clears the bottom navbar! */}
              <section className="w-full flex items-center justify-center px-4 md:px-16 pb-28 md:pb-20 pt-10 md:pt-1 relative z-20">
                <div className="w-full max-w-[90vw] bg-primary text-white rounded-md md:rounded-md p-6 md:p-16 lg:p-10 shadow-2xl flex flex-col">
                      
                      {/* ✅ Increased size and added scale-y-110 on mobile for the tall, stretched look */}
                      <h2 className="text-[3rem] md:text-[3.5rem] text-center mb-8 md:mb-10 leading-[0.8] tracking-wide font-tusker transform scale-y-110 md:scale-y-100 mt-2 md:mt-0">
                        About
                      </h2>
            
                      {/* ✅ Added text-center for mobile, kept text-left for desktop */}
                      <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[1.5] font-medium text-justify md:text-left mb-8 md:mb-12">
                        Hi there! I'm Gowtham, a Fullstack Developer with a passion for crafting user-centric experiences. 
                        I specialize in UI/UX design, front-end development, and backend systems. I thrive on collaboration 
                        and bring experience in agile methodologies. Beyond coding, I enjoy exploring new technologies and 
                        building tools that solve real-world problems. Let's connect and bring your digital visions to life.
                      </p>

                      {/* ✅ Changed to justify-center on mobile, kept justify-end on desktop */}
                      <div className="flex justify-center md:justify-end w-full mt-auto">
                        <Link to="/about">
                        <button className="bg-white text-primary px-10 py-3 rounded-md md:rounded-md font-bold text-md hover:bg-black/20 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                          More...
                        </button>
                        </Link>
                      </div>
            
                    </div>
                  </section>
                 </div>
                  {/* =========================================
                  SECTION 3: Recent Projects (Swiper Slider)
                  ========================================= */}
              <section id="" className="w-full flex flex-col items-center justify-center px-2 py-1 md:px-1 relative z-20">
                  
                  <div className="w-full md:w-[95vw] rounded-md shadow-2xl flex flex-col">
                      
                      {/* ✅ Adjusted padding for mobile (p-5) vs desktop (p-8) and made items center vertically */}
                      <div className="flex justify-between bg-[#1a1a1a] rounded-md items-center md:items-end mb-6 md:mb-8 p-5 md:p-8">
                          <h2 className="text-[2.2rem] md:text-[3rem] leading-none tracking-wide font-tusker text-white mt-1 md:mt-0">
                              Recent Projects
                          </h2>
                          <Link to="/projects" className="text-gray-400 hover:text-primary transition-colors text-sm md:text-base font-medium">
                              See all &rarr;
                          </Link>
                      </div>

                      {/* Swiper Implementation */}
                      {/* 🚨 CRITICAL FIX: Changed w-[100vw] to w-full to stop it from breaking the mobile screen width! */}
                      <div className="w-full relative">
                          <Swiper
                              modules={[Navigation, Autoplay]}
                              spaceBetween={16} /* Slightly smaller gap on mobile looks better */
                              slidesPerView={1}
                              centeredSlides={false} 
                              centerInsufficientSlides={true}
                              navigation={true}
                              autoplay={{ delay: 2000, disableOnInteraction: true }}
                              breakpoints={{
                                  640: { slidesPerView: 1, spaceBetween: 24 },
                                  768: { slidesPerView: 2, spaceBetween: 24 },
                                  1024: { slidesPerView: 3, spaceBetween: 32 },
                                  1440: { slidesPerView: 4, spaceBetween: 32 },
                              }}
                              /* ✅ Added !px-2 for mobile so arrows sit nicely, and !pb-6 so cards don't get cut off at the bottom */
                              className="!pb-6 !px-2 md:!px-6"
                          >
                              <SwiperSlide>
                                  <ProjectCard 
                                      imagePlaceholder="linear-gradient(45deg, #4ade80, #064e3b)"
                                      title="Portfolio"
                                      role="Frontend"
                                      description="Developed to showcase my skills in web development, my portfolio website exemplifies proficiency in technologies such as ReactJS, CSS, and Figma."
                                      techStack={[FaReact, FaJsSquare, FaCss3Alt, FaFigma]}
                                  />
                              </SwiperSlide>
                              
                              <SwiperSlide>
                                  <ProjectCard 
                                      imagePlaceholder="linear-gradient(45deg, #3b82f6, #1e3a8a)"
                                      title="Weather App"
                                      role="Full Stack"
                                      description="Developed a full-stack weather app using NodeJS/Express for server-side logic and ReactJS/Handlebars for interactive frontend, delivering real-time data."
                                      techStack={[FaReact, FaNodeJs, FaJsSquare, FaFigma]}
                                  />
                              </SwiperSlide>

                              <SwiperSlide>
                                  <ProjectCard 
                                      imagePlaceholder="linear-gradient(45deg, #a855f7, #4c1d95)"
                                      title="Cred Clone"
                                      role="Frontend"
                                      description="Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design."
                                      techStack={[FaReact, FaJsSquare, FaCss3Alt, FaFigma]}
                                  />
                              </SwiperSlide>

                              <SwiperSlide>
                                  <ProjectCard 
                                      imagePlaceholder="linear-gradient(45deg, #a855f7, #4c1d95)"
                                      title="Game developer"
                                      role="Frontend"
                                      description="Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design."
                                      techStack={[FaReact, FaJsSquare, FaCss3Alt, FaFigma]}
                                  />
                              </SwiperSlide>
                              
                              {/* Add as many <SwiperSlide> wrappers as you need here! */}

                          </Swiper>
                      </div>

                  </div>
              </section>
              {/* =========================================
                  SECTION 4: Get in Touch 
                  ========================================= */}
              {/* ✅ Added pb-32 on mobile to ensure it sits safely above the bottom glass navbar! */}
              <section id="" className="w-full flex items-center justify-center px-4 md:px-16 pt-6 pb-4 md:pb-12 relative z-20">
                <div className="w-full max-w-[90vw] bg-primary text-white rounded-md md:rounded-md p-8 md:p-12 shadow-2xl flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-8">
                    
                    {/* Left Side: Text */}
                    <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
                        {/* ✅ Stretched font on mobile (scale-y-110) to match the 'About' section */}
                        <h2 className="text-[4.5rem] md:text-[5rem] leading-[1] md:leading-none tracking-wide font-tusker mb-6 md:mb-4 transform scale-y-110 md:scale-y-100 mt-2 md:mt-0">
                            Get in Touch
                        </h2>
                        <p className="text-[14px] md:text-[16px] font-medium max-w-lg leading-[1.7] md:leading-relaxed">
                            If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.
                        </p>
                    </div>

                    {/* Right Side: Socials and Button */}
                    <div className="flex flex-col items-center md:items-end justify-center min-h-full space-y-8 md:space-y-6 w-full md:w-auto">
                        <div className="text-center md:text-right">
                            <p className="font-bold mb-4 md:mb-3 text-lg md:text-xl">Follow me on</p>
                            <div className="flex justify-center md:justify-end space-x-6 md:space-x-4">
                                {/* ✅ Used Tailwind sizing so icons are larger and easier to tap on phones */}
                                <a href="#" className="hover:text-black transition-colors transform hover:scale-110"><FaInstagram className="w-8 h-8 md:w-7 md:h-7" /></a>
                                <a href="#" className="hover:text-black transition-colors transform hover:scale-110"><FaYoutube className="w-9 h-9 md:w-8 md:h-8" /></a>
                                <a href="#" className="hover:text-black transition-colors transform hover:scale-110"><FaLinkedin className="w-8 h-8 md:w-7 md:h-7" /></a>
                                <a href="#" className="hover:text-black transition-colors transform hover:scale-110"><FaGithub className="w-8 h-8 md:w-7 md:h-7" /></a>
                                <a href="#" className="hover:text-black transition-colors transform hover:scale-110"><FaGooglePlay className="w-8 h-8 md:w-7 md:h-7" /></a>

                            </div>
                        </div>

                        <Link to="/contact" className="w-full md:w-auto flex justify-center">
                            {/* ✅ Added wider padding for mobile (px-12) to create that nice, wide pill button look */}
                            <button className="flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-12 md:px-8 py-3.5 md:py-3 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-lg hover:shadow-xl active:scale-95 w-full md:w-auto max-w-[280px]">
                                Contact Me <FaPaperPlane />
                            </button>
                        </Link>
                    </div>

                </div>
              </section>
             
            
                 
        </>
    );
};

export default LandingPage;