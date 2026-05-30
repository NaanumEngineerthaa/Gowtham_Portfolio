import React from 'react';
// 1. Import the routing tools
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About'; 
import Footer from './components/Footer';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    // 2. Wrap everything in the Router
    <Router basename="/Gowtham_Portfolio">
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