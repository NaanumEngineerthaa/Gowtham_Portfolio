import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, imagePlaceholder, title, role, description, techStack }) => {
    return (
    <Link to={`/project/${id || 'demo'}`} className="block w-full h-full hover:scale-[1.02] transition-transform duration-300">    
        {/* ✅ Changed to w-full h-full so it adapts perfectly to the CSS Grid */}
        <div className="w-full h-full bg-[#22222a] p-1 rounded-md flex flex-col shadow-lg border border-white/5">
           
            {/* ✅ Replaced h-44 with aspect-video to lock the 16:9 proportion */}
            <div className="w-full aspect-video rounded-sm mb-5 flex items-center justify-center font-tusker text-3xl tracking-wider text-white overflow-hidden relative" style={{ background: imagePlaceholder }}>
                {/* Note: When you swap this to an actual <img> tag later, just add className="w-full h-full object-cover absolute inset-0" to the img element! */}
                {title}
            </div>
             <div className='p-4'>
            <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
            <span className="text-primary text-sm font-semibold mb-3">{role}</span>
            
            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {description}
            </p>
            
            <div className="flex gap-3 text-2xl text-gray-300">
                {techStack.map((Icon, index) => (
                    <Icon key={index} className="hover:text-primary transition-colors cursor-pointer" />
                ))}
            </div>
            </div>
        </div>
        </Link>
    );
};

export default ProjectCard;