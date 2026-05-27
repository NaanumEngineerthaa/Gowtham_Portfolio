import React from 'react';
import { X } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

// Import your avatar and your new smoke background here
import main_hero from '../assets/Main_Hero.png';
import smoke_bg from '../assets/smoke-bg.png'; // Uncomment this once you add the image!

const LandingPage = () => {
    return (
        // Main container: Explicitly set background color to match the deep grey/black
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
                    <h1 className="text-[2.5rem] md:text-[2.5rem] lg:text-[4.5rem] font-black text-white leading-[1.05] tracking-tight mb-6">
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
    );
};

export default LandingPage;