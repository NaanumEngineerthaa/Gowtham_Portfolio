import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaDesktop} from 'react-icons/fa';
import { iconMap } from '../utils/iconMap';

// ✅ 1. ADD SWIPER IMPORTS HERE
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// ✅ 1. Import Firebase tools for fetching a single document
import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase'; 


const ProjectDetail = () => {
  // Grab the ID from the URL (e.g., "xynema")[cite: 8]
  const { id } = useParams();

  // ✅ 3. Create state for this specific project and a loading state
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ 1. ADD THIS LINE: State to track which image is open in fullscreen
  const [selectedImage, setSelectedImage] = useState(null);


  // ✅ 4. Fetch the single project from Firestore when the page loads
  useEffect(() => {
    const fetchSingleProject = async () => {
      try {
        // Point exactly to the document with this URL ID in the "projects" collection
        const docRef = doc(db, "projects", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProject(docSnap.data()); // Save the DB data to state
        } else {
          console.log("No such document!");
          setProject(null);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching project:", error);
        setLoading(false);
      }
    };

    fetchSingleProject();
  }, [id]); // This ensures it refetches if the ID in the URL changes


  // ✅ 5. Show a loading screen while waiting for Firebase
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-tusker animate-pulse text-primary">Loading Project...</h1>
      </div>
    );
  }

  // If someone types a weird URL, show this error screen instead of crashing[cite: 8]
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-primary hover:underline">Return to Projects</Link>
      </div>
    );
  }

  // ✅ 6. Map the icons from the database array just like we did on the Projects page
  const mappedIcons = (project.techStack || []).map(iconName => iconMap[iconName]).filter(Boolean);

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white pt-32 pb-20 px-6 md:px-16 flex flex-col items-center font-sans">
      <div className="w-full max-w-[1200px]">
        
        {/* Back Button */}
        <Link to="/projects" className="inline-flex items-center gap-2 bg-[#141417] text-white px-5 py-2.5 rounded-lg hover:bg-[#22222a] transition-colors mb-6 border border-white/5 font-medium shadow-md w-fit">
          <FaArrowLeft size={14} /> Back
        </Link>

        {/* HERO SECTION (Side-by-Side Flex Layout) */}
        <div className="bg-[#141417] rounded-md p-6 lg:p-10 shadow-xl border border-white/5">
          
          {/* TOP PART: Image Left, Info Right */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-8">
            
            {/* Left: Project Image (Locked to 16:9) */}
            <div className="w-full lg:w-[55%] aspect-video bg-[#22222a] rounded-sm overflow-hidden relative shadow-lg">
              {project.mainImage ? (
                <img 
                  src={project.mainImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center absolute inset-0" 
                />
              ) : (
                <div 
                  className="w-full h-full absolute inset-0 flex items-center justify-center font-tusker text-4xl tracking-widest text-black shadow-inner" 
                  style={{ background: project.bg || "linear-gradient(45deg, #141417, #22222a)" }}
                >
                  {project.title.toUpperCase()}
                </div>
              )}
            </div>

            {/* Right: Title, Role, Tech Stack, & Buttons */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center">
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide">
                {project.title}
              </h1>
              <span className="text-primary text-lg font-semibold block mb-8">
                {project.role}
              </span>
              
              {/* Tech Stack */}
              {/* Tech Stack */}
              <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
              
              <div className="flex gap-4 mb-10 flex-wrap">
                {(project.techStack || []).map((techName, index) => {
                  
                  // Grab the matching icon graphic from your dictionary
                  const icon = iconMap[techName];
                  if (!icon) return null; // Skips if the icon isn't found
                  
                  return (
                    // ✅ Added 'group' class to trigger the hover effect on children
                    <div key={index} className="relative group flex items-center justify-center cursor-pointer">
                      
                      {/* The Icon Graphic */}
                      <span className="text-[2.2rem]">
                        {icon}
                      </span>
                      
                      {/* ✅ The Custom Hover Tooltip */}
                      {/* Hidden by default (opacity-0), fades in on hover (group-hover:opacity-100) */}
                      <span className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-max bg-[#22222a] border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded shadow-lg pointer-events-none z-50">
                        {techName}
                      </span>
                      
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full mt-auto">
                <a href={project.demoLink || "#"} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3.5 rounded-lg font-bold hover:bg-white hover:text-primary transition-colors shadow-lg">
                  <FaDesktop /> Demo
                </a>
                <a href={project.githubLink || "#"} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-[#22222a] border border-white/10 text-white py-3.5 rounded-lg font-bold hover:bg-white hover:text-black transition-colors shadow-lg">
                  <FaGithub /> GitHub
                </a>
              </div>

            </div>
          </div>

          {/* BOTTOM PART: Full-width Description */}
          <div className="pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">About Project</h3>
            <div className="text-gray-300 text-[15px] md:text-[16px] leading-[1.8] font-light text-justify whitespace-pre-line">
              {project.description}
            </div>
          </div>

        </div>

        {/* DYNAMIC FEATURES SECTION */}
        {/* ✅ 9. Added a check in case a project doesn't have features yet */}
        {project.features && project.features.length > 0 && (
          <div className="bg-[#141417] rounded-md p-8 lg:p-10 shadow-xl border border-white/5 mt-8">
            <h2 className="text-3xl font-bold text-primary mb-6">Main Features</h2>
            
            <ul className="space-y-6">
              {/* Dynamically loop through the features list[cite: 8] */}
              {project.features.map((feature, index) => (
                <li key={index} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-xl font-bold text-white">
                    <span className="text-primary text-2xl">&bull;</span> {feature.title}:
                  </div>
                  <p className="text-gray-400 ml-6 leading-relaxed">
                    {feature.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ✅ 10. DYNAMIC SCREENSHOTS GALLERY (Now with Swiper!) */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="bg-[#141417] rounded-md p-8 lg:p-10 shadow-xl border border-white/5 mt-8">
            <h2 className="text-3xl font-bold text-primary mb-6">Gallery</h2>
            
            <div className="w-full relative">
              <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={24}
                  slidesPerView={1}
                  centeredSlides={false} 
                  centerInsufficientSlides={false}
                  navigation={true}
                  autoplay={{ delay: 2000, disableOnInteraction: true }}
                  breakpoints={{
                      640: { slidesPerView: 1, spaceBetween: 24 },
                      768: { slidesPerView: 2, spaceBetween: 24 },
                      1024: { slidesPerView: 3, spaceBetween: 32 },
                      1440: { slidesPerView: 4, spaceBetween: 32 },
                  }}
                  className="!pb-4 !px-6"
              >
                  {/* Loop through the Firebase array and create a SwiperSlide for each image */}
                  {project.screenshots.map((imgUrl, index) => (
                    <SwiperSlide key={index}>
                      <div className="overflow-hidden rounded-md border border-white/10 shadow-lg group h-full">
                        <img 
                          src={imgUrl} 
                          alt={`${project.title} screenshot ${index + 1}`} 
                          className="w-full h-full object-cover aspect-video cursor-pointer"
                          onClick={() => setSelectedImage(imgUrl)} /* ✅ 2. ADD THIS onClick */
                        />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
          
        )}
        {/* ✅ 3. FULLSCREEN MODAL OVERLAY (Mobile Fixed) */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-0 md:p-10 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelectedImage(null)} // Close when clicking the background
          >
            {/* Close Button (Pinned Top Right) */}
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/80 hover:text-primary text-5xl md:text-6xl transition-colors cursor-pointer z-[202]"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>

            {/* PREVIOUS Arrow Button (Pinned Left) */}
            {/* ✅ Added absolute left-2 top-1/2 and -translate-y-1/2 to perfectly center on the left edge */}
            <button 
              className="absolute left-1 md:left-8 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white text-5xl md:text-7xl transition-colors cursor-pointer p-2 md:p-4 z-[201]"
              onClick={(e) => {
                e.stopPropagation(); // Stops the modal from closing
                const currentIndex = project.screenshots.indexOf(selectedImage);
                // If at the first image, loop back to the very last image. Otherwise, go back 1.
                const prevIndex = currentIndex === 0 ? project.screenshots.length - 1 : currentIndex - 1;
                setSelectedImage(project.screenshots[prevIndex]);
              }}
            >
              &#10094;
            </button>

            {/* The Fullscreen Image */}
            {/* ✅ Shrunk the max-width slightly (max-w-[85vw]) so the image doesn't completely overlap the arrows on small screens */}
            <img 
              src={selectedImage} 
              alt="Fullscreen screenshot" 
              className="max-w-[85vw] md:max-w-[80vw] max-h-[85vh] object-contain rounded-sm shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()} // Prevents the modal from closing if you click the image itself
            />

             {/* NEXT Arrow Button (Pinned Right) */}
             {/* ✅ Added absolute right-2 top-1/2 to perfectly center on the right edge */}
            <button 
              className="absolute right-1 md:right-8 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white text-5xl md:text-7xl transition-colors cursor-pointer p-2 md:p-4 z-[201]"
              onClick={(e) => {
                e.stopPropagation(); // Stops the modal from closing
                const currentIndex = project.screenshots.indexOf(selectedImage);
                // If at the last image, loop back to the first. Otherwise, go forward 1.
                const nextIndex = currentIndex === project.screenshots.length - 1 ? 0 : currentIndex + 1;
                setSelectedImage(project.screenshots[nextIndex]);
              }}
            >
              &#10095;
            </button>
          </div>
        )}

      </div>
    </div>
  );
};


export default ProjectDetail;