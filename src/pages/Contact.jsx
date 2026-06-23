import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// tempory DB duplicate purpose
import { doc, getDoc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase';


const Contact = () => {
  const form = useRef();
  
  // States for button text and success/error messages
  const [isSending, setIsSending] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setIsSending(true);
    setSubmitMessage('');

    // 🚨 REPLACE THESE 3 STRINGS WITH YOUR ACTUAL EMAILJS KEYS!
    emailjs.sendForm(
      'service_el7vozb',   // e.g., 'service_abc123'
      'template_a7ae7pk',  // e.g., 'template_xyz456'
      form.current, 
      'awjM2tbkOZEBlTCzu'    // e.g., 'aBcDeFgHiJkLmNoPq'
    )
    .then((result) => {
        console.log(result.text);
        setIsSending(false);
        setSubmitMessage('Message sent successfully! I will get back to you soon.');
        e.target.reset(); // Clears the form after sending
    }, (error) => {
        console.log(error.text);
        setIsSending(false);
        setSubmitMessage('Oops! Something went wrong. Please try again.');
    });
  };



// Temporary function to duplicate a document
const duplicateDocument = async () => {
  try {
    // 1. Read the original "portfolio" document
    const originalRef = doc(db, "projects", "xynema");
    const originalSnap = await getDoc(originalRef);

    if (originalSnap.exists()) {
      // 2. Create a NEW document named "xynema" (or whatever you want)
      const newRef = doc(db, "projects", "excel_odyssey");
      
      // 3. Write the exact same data to the new document
      await setDoc(newRef, originalSnap.data());
      alert("Document duplicated perfectly! Check Firebase.");
    }
  } catch (error) {
    console.error("Error duplicating: ", error);
  }
};

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
          
          {/* ✅ Attached the ref and onSubmit handler here */}
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
            
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-bold text-sm md:text-base tracking-wide uppercase">Name</label>
              <input 
                type="text" 
                name="user_name" /* ✅ name attribute is required for EmailJS to map the variable */
                id="name"
                required
                className="w-full p-3 rounded-sm text-black bg-white border-none focus:outline-none focus:ring-2 focus:ring-black" 
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-bold text-sm md:text-base tracking-wide uppercase">Email</label>
              <input 
                type="email" 
                name="user_email" /* ✅ name attribute is required */
                id="email"
                required
                className="w-full p-3 rounded-sm text-black bg-white border-none focus:outline-none focus:ring-2 focus:ring-black" 
              />
            </div>

            {/* ✅ NEW Phone Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-bold text-sm md:text-base tracking-wide uppercase">Phone Number</label>
              <input 
                type="tel" 
                name="user_phone" /* MUST match the {{user_phone}} in EmailJS */
                id="phone"
                required
                className="w-full p-3 rounded-sm text-black bg-white border-none focus:outline-none focus:ring-2 focus:ring-black" 
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-bold text-sm md:text-base tracking-wide uppercase">Message</label>
              <textarea 
                id="message"
                name="message" /* ✅ name attribute is required */
                rows="6" 
                required
                className="w-full p-3 rounded-sm bg-white text-black border-none focus:outline-none focus:ring-2 focus:ring-black resize-none"
              ></textarea>
            </div>

            {/* Submit Button & Status Message */}
            <div className="mt-2">
              <button 
                type="submit" 
                disabled={isSending}
                className="w-full bg-primary border-2 border-white text-white font-bold text-lg py-3 rounded-md hover:bg-white hover:text-primary transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? 'Sending...' : 'Send'}
              </button>

              {/* Display success or error message below the button */}
              {submitMessage && (
                <p className="mt-4 text-center font-medium text-white tracking-wide">
                  {submitMessage}
                </p>
              )}
            </div>
            
            {/* Temporary function to duplicate a document */}
            {/* <button onClick={duplicateDocument} className="bg-white text-black p-4 m-4 visible">Duplicate Doc</button> */}
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;