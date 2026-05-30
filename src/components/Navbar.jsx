import React from 'react';
import { X } from 'lucide-react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out">
                {/* LIQUID GLASS WRAPPER 
                  Creates the base shadow and holds all the layers together 
                */}
                <div className="relative w-full overflow-hidden shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]">
                    
                    {/* LAYER 1: The Liquid Distortion Effect */}
                    <div 
                        className="absolute inset-0 z-0 backdrop-blur-[4px] isolate"
                        style={{ filter: 'url(#glass-distortion)' }}
                    ></div>

                    {/* LAYER 2: The Tint (Adjusted to be slightly dark so your white text is readable) */}
                    <div className="absolute inset-0 z-10 bg-black/30"></div>

                    {/* LAYER 3: The Edge Shine/Bevel */}
                    <div className="absolute inset-0 z-20 shadow-[inset_1px_1px_2px_0_rgba(255,255,255,0.2),inset_-1px_-1px_2px_0_rgba(255,255,255,0.1)] pointer-events-none"></div>

                    {/* LAYER 4: The Actual Navbar Content */}
                    <div className="relative z-30 px-8 py-6 md:px-16 flex justify-center w-full">
                        <div className="flex items-center justify-between w-full max-w-[1600px]">
                            {/* Logo */}
                            <div className="text-xl tracking-wide">
                                <span className="font-bold text-white">NAANUM </span>
                                <span className="font-light text-gray-400">ENGINEERTHA</span>
                            </div>

                            {/* Desktop Menu & Icons */}
                            <div className="hidden md:flex items-center space-x-12">
                                <div className="flex space-x-8 text-[15px] font-medium text-gray-300">
                                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                                    <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
                                    <Link to="/about" className="hover:text-white transition-colors">About</Link>
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
                        </div>
                    </div>
                </div>
            </nav>

            {/* HIDDEN SVG FILTER 
              This is the math engine that creates the liquid distortion! 
            */}
            <svg style={{ display: 'none' }}>
                <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
                    {/* Generates the wavy noise */}
                    <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="1" seed="5" result="turbulence" />
                    
                    <feComponentTransfer in="turbulence" result="mapped">
                        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
                        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
                        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
                    </feComponentTransfer>

                    <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

                    {/* Creates the 3D lighting reflection */}
                    <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lightingColor="white" result="specLight">
                        <fePointLight x="-200" y="-200" z="300" />
                    </feSpecularLighting>

                    <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />

                    {/* Applies the distortion to the content behind the navbar */}
                    <feDisplacementMap in="SourceGraphic" in2="softMap" scale="150" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </svg>
        </>
    );
};

export default Navbar;