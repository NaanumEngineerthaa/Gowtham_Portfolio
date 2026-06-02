import React from 'react';
// Note: We removed the 'X' icon import since we no longer need a close button!
import { FaGithub, FaLinkedin, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            {/* =========================================
                1. TOP NAVBAR (Desktop Menu & Mobile Logo)
                ========================================= */}
            <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out">
                <div className="relative w-full overflow-hidden shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]">
                    
                    {/* Glass Layers */}
                    <div className="absolute inset-0 z-0 backdrop-blur-[4px] isolate" style={{ filter: 'url(#glass-distortion)' }}></div>
                    <div className="absolute inset-0 z-10 bg-black/30"></div>
                    <div className="absolute inset-0 z-20 shadow-[inset_1px_1px_2px_0_rgba(255,255,255,0.2),inset_-1px_-1px_2px_0_rgba(255,255,255,0.1)] pointer-events-none"></div>

                    <div className="relative z-30 px-6 py-5 md:px-16 flex justify-center w-full">
                        <div className="flex items-center justify-between w-full max-w-[1600px]">
                            
                            {/* Logo: Centered on mobile, aligned left on desktop */}
                            <div className="text-xl tracking-wide w-full md:w-auto text-center md:text-left">
                                <span className="font-bold text-white">NAANUM </span>
                                <span className="font-light text-gray-400">ENGINEERTHA</span>
                            </div>

                            {/* Desktop Menu & Icons (Hidden on Mobile) */}
                            <div className="hidden md:flex items-center space-x-12">
                                <div className="flex space-x-8 text-[15px] font-medium text-gray-300">
                                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                                    <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
                                    <Link to="/about" className="hover:text-white transition-colors">About</Link>
                                    <Link to="/contact" className="hover:text-white transition-colors">Contacts</Link>
                                </div>

                                {/* Social Icons */}
                                <div className="flex space-x-5 text-white">
                                    <a href="#" className="hover:text-gray-400 transition-colors"><FaGithub size={18} /></a>
                                    <a href="#" className="hover:text-gray-400 transition-colors"><FaLinkedin size={18} /></a>
                                    <a href="#" className="hover:text-gray-400 transition-colors"><FaGooglePlay size={18} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* =========================================
                2. BOTTOM NAVBAR (Mobile Only)
                ========================================= */}
            {/* The 'md:hidden' class ensures this completely vanishes on desktop screens */}
            <nav className="fixed bottom-0 left-0 w-full z-50 md:hidden">
                <div className="relative w-full overflow-hidden shadow-[0_-6px_10px_rgba(0,0,0,0.3)] rounded-t-2xl">
                    
                    {/* We reuse the exact same glass distortion filter for a seamless look! */}
                    <div className="absolute inset-0 z-0 backdrop-blur-[6px] isolate" style={{ filter: 'url(#glass-distortion)' }}></div>
                    <div className="absolute inset-0 z-10 bg-black/50"></div> {/* Slightly darker to ground the bottom edge */}
                    <div className="absolute inset-0 z-20 shadow-[inset_1px_1px_2px_0_rgba(255,255,255,0.2),inset_-1px_-1px_2px_0_rgba(255,255,255,0.1)] pointer-events-none rounded-t-2xl"></div>

                    {/* Mobile Nav Links */}
                    <div className="relative z-30 px-2 py-4 flex justify-around items-center w-full text-[13px] font-bold text-gray-300">
                        {/* active:scale-95 gives a nice little "press" animation when tapped on phones */}
                        <Link to="/" className="hover:text-white transition-colors w-full text-center py-2 active:scale-95">Home</Link>
                        <Link to="/projects" className="hover:text-white transition-colors w-full text-center py-2 active:scale-95">Projects</Link>
                        <Link to="/about" className="hover:text-white transition-colors w-full text-center py-2 active:scale-95">About</Link>
                        <Link to="/contact" className="hover:text-white transition-colors w-full text-center py-2 active:scale-95">Contacts</Link>
                    </div>
                </div>
            </nav>

            {/* =========================================
                3. HIDDEN SVG FILTER
                ========================================= */}
            <svg style={{ display: 'none' }}>
                <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
                    <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="1" seed="5" result="turbulence" />
                    
                    <feComponentTransfer in="turbulence" result="mapped">
                        <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
                        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
                        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
                    </feComponentTransfer>

                    <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />

                    <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lightingColor="white" result="specLight">
                        <fePointLight x="-200" y="-200" z="300" />
                    </feSpecularLighting>

                    <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
                    <feDisplacementMap in="SourceGraphic" in2="softMap" scale="150" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </svg>
        </>
    );
};

export default Navbar;