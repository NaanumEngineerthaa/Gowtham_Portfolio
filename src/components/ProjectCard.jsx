import React from 'react';

const ProjectCard = ({ imagePlaceholder, title, role, description, techStack }) => {
    return (
        <div className="min-w-[300px] md:min-w-[350px] bg-[#22222a] p-1 rounded-md flex flex-col snap-center shadow-lg border border-white/5">
           
            <div className="h-44 w-full rounded-md mb-5 flex items-center justify-center font-tusker text-2xl tracking-widest text-black" style={{ background: imagePlaceholder }}>
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
    );
};

export default ProjectCard;