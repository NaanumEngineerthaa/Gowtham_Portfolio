// import React from 'react';
// 1. Import the routing tools
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About'; 
import Footer from './components/Footer';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

// import React, { useEffect } from 'react'; // ✅ 1. Added useEffect

// // ✅ 2. Import Firebase tools for our test
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from './firebase';

function App() {
// // ✅ 3. THE FIREBASE TEST BLOCK
//   useEffect(() => {
//     const testDatabaseConnection = async () => {
//       try {
//         console.log("🔥 Attempting to connect to Firebase...");
        
//         // Try to grab the "projects" collection
//         const querySnapshot = await getDocs(collection(db, "projects"));
        
//         if (querySnapshot.empty) {
//           console.log("✅ Connected successfully, but the 'projects' collection is empty!");
//         } else {
//           console.log("✅ Connected successfully! Found these projects:");
//           // Loop through whatever it finds and print it
//           querySnapshot.forEach((doc) => {
//             console.log(`- ID: ${doc.id} | Data:`, doc.data());
//           });
//         }
//       } catch (error) {
//         console.error("❌ Firebase Connection Error:", error);
//       }
//     };

//     testDatabaseConnection();
//   }, []); // Empty array means this runs exactly once when you open the website

  return (
    // 2. Wrap everything in the Router
    <Router basename="/Gowtham_Portfolio">
      <ScrollToTop />
      <div className="bg-[#0e0e0e] min-h-screen font-sans">
        
        {/* Navbar stays outside the Routes so it always shows on top! */}
        <Navbar /> 
        
        {/* 3. Define which component loads on which URL */}
        <Routes>
          {/* Exact match for the root URL */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Exact match for the About page */}
          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />

          {/* ✅ 2. Add the dynamic route for the project details */}
          <Route path="/project/:id" element={<ProjectDetail />} />

          <Route path="/contact" element={<Contact />} />

          {/* ✅ NEW: The Catch-All Route 
              If the URL is /Gowtham_Portfolio/ or anything else misspelled, 
              it will automatically render the LandingPage! */}
          <Route path="*" element={<LandingPage />} />
        </Routes>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;