// import React from 'react';
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { iconMap } from '../utils/iconMap';

// 1. Import Firebase fetching tools
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebase'; // Make sure this points to your firebase.js file!

const Projects = () => {


  // 4. Create state variables to hold the live data and track the loading status
  const [projectList, setProjectList] = useState([]);
  const [loading, setLoading] = useState(true);

  // 5. Fetch data exactly once when the page loads
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectsData = [];
        
        // Loop through the database documents and push them into our array
        querySnapshot.forEach((doc) => {
          projectsData.push({ id: doc.id, ...doc.data() });
        });
        
        // Save the data to React state
        setProjectList(projectsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects: ", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);  

  return (
    // Main Wrapper: Added pt-32 to push content down below the floating Navbar
    <div className="min-h-screen bg-[#0e0e0e] text-white pt-32 pb-20 px-6 md:px-16 flex flex-col items-center font-sans">
      
      {/* 1. TOP HEADER CARD */}
      <div className="w-full max-w-[1200px] bg-[#141417] rounded-md py-8 md:py-10 mb-12 flex justify-center shadow-lg border border-white/5">
        <h1 className="text-[3rem] md:text-[5rem] font-tusker leading-none tracking-wide uppercase text-white">
          Projects
        </h1>
      </div>
      

      {/* 2. DYNAMIC PROJECTS GRID (Replaced the hardcoded cards here!) */}
      {loading ? (
        <div className="text-primary text-2xl font-tusker animate-pulse mt-20">Loading Database...</div>
      ) : (
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Loop through the live data to create the cards */}
          {projectList.map((project) => {
            
            // Map the array of text strings from Firebase into an array of actual icon components
            const mappedIcons = (project.techStack || []).map(iconName => iconMap[iconName]).filter(Boolean);

            return (
              <ProjectCard 
                  key={project.id}
                  id={project.id}
                  mainImage={project.mainImage}
                  imagePlaceholder={project.bg || "linear-gradient(45deg, #141417, #22222a)"}
                  title={project.title}
                  role={project.role}
                  description={project.description}
                  techStack={mappedIcons} 
              />
            );
          })}

        </div>
      )}

    </div>
  );
};

export default Projects;