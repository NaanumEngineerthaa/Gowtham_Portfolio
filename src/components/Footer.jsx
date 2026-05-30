 import React from 'react';
import { X } from 'lucide-react';
 import { Link } from 'react-router-dom';
 
 const Footer = () => {
     return (
         <>
 
 {/* =========================================
                  SECTION 5: Footer 
                  ========================================= */}
              {/* ✅ Added a centering wrapper so it aligns perfectly with the cards above */}
              < div id="Footer" className="w-full flex items-center justify-center px-6 pb-12 pt-6 md:px-16 relative z-20">
                  
                  {/* ✅ Changed to max-w-[90vw], added rounded-md and shadow-2xl for the card look! */}
                  <footer className="w-full max-w-[90vw] bg-[#141417] rounded-md shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
                      
                     {/* Left Side: Abstract Geometric 'G' Logo */}
                      <div className="mb-8 md:mb-0 opacity-80 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
                          <svg width="160" height="120" viewBox="0 0 110 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                              {/* Top Right Accent */}
                              <path d="M 60 5 L 75 5 L 90 20" 
                                    fill="transparent" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                              
                              {/* Main Left Body (The 'C' Curve) */}
                              <path d="M 50 5 L 35 5 L 20 20 L 20 50 L 35 65 L 50 65" 
                                    fill="transparent" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                              
                              {/* Bottom Right & Inner Crossbar (Primary Color Highlight) */}
                              <path d="M 60 65 L 75 65 L 90 50 L 90 35 L 55 35" 
                                    fill="transparent" stroke="var(--color-primary)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                      </div>

                      {/* Right Side: Typography & Copyright */}
                      <div className="flex flex-col items-center md:items-end text-center md:text-right">
                          {/* ✅ Changed leading-[0.9] to leading-[1.2] to add space between the two lines of text */}
                          <h3 className="text-[2rem] md:text-[3rem] lg:text-[4rem] font-tusker text-gray-400 leading-[1.2] tracking-wide uppercase">
                              Designing the <span className="text-primary">extraordinary</span><br/>
                              one <span className="text-primary">pixel</span> at a time.
                          </h3>
                          
                          <p className="text-gray-600 text-xs md:text-sm mt-6 font-medium tracking-widest uppercase">
                              Portfolio v2.0 &copy; 2026 Gowtham
                          </p>
                      </div>

                  </footer>
              </div>

    </>
     );
    } ;         
export default Footer;
