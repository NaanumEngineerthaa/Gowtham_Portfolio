import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white pt-32 pb-20 px-6 md:px-16 flex flex-col items-center font-sans">
      
      {/* 1. TOP HEADER CARD */}
      <div className="w-full max-w-[1200px] bg-[#141417] rounded-md py-8 md:py-10 mb-12 flex justify-center shadow-lg border border-white/5">
        <h1 className="text-[3rem] md:text-[5rem] font-tusker leading-none tracking-wide uppercase text-white">
          Contact
        </h1>
      </div>

      {/* 2. MAIN CONTACT CARD */}
      <div className="w-full max-w-[1200px] bg-primary text-white rounded-md p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row gap-12 lg:gap-16 border border-white/10">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start pt-2">
          <h2 className="text-[4rem] md:text-[5.5rem] font-tusker leading-[0.9] tracking-wide mb-6 uppercase">
            Get in Touch
          </h2>
          <p className="text-[15px] md:text-[17px] font-medium leading-relaxed max-w-[90%]">
            If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full lg:w-1/2">
          <form className="flex flex-col gap-5">
            
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-bold text-sm md:text-base tracking-wide uppercase">Name</label>
              <input 
                type="text" 
                id="name"
                className="w-full p-3 rounded-sm  text-black bg-white border-none focus:outline-none focus:ring-2 focus:ring-black" 
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-bold text-sm md:text-base tracking-wide uppercase">Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full p-3 rounded-sm text-black bg-white border-none focus:outline-none focus:ring-2 focus:ring-black" 
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-bold text-sm md:text-base tracking-wide uppercase">Message</label>
              <textarea 
                id="message"
                rows="6" 
                className="w-full p-3 rounded-sm bg-white text-black border-none focus:outline-none focus:ring-2 focus:ring-black resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-primary border-2 border-white text-white font-bold text-lg py-3 rounded-md mt-2 hover:bg-white hover:text-primary transition-colors shadow-lg"
            >
              Send
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;