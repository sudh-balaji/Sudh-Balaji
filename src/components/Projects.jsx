import React from 'react';


const projects = [
 {
   id: 1,
   title: "Library Management System",
   description: "Library Management System",
   githubLink: "https://github.com/sudh-balaji/Library-management-system"
 },
 {
   id: 2,
   title: "Connect 4",
   description: "Connect 4 - Assembly",
   githubLink: "https://github.com/sudh-balaji/Connect-4"
 },
];


const ProjectCard = ({ project }) => (
 <div className="bg-white shadow-lg rounded-lg overflow-hidden">
   <div className="p-4">
     <h3 className="font-bold text-xl mb-2">{project.title}</h3>
     <p className="text-gray-700 text-base mb-4">{project.description}</p>
   </div>
   <div className="px-4 pb-4">
     {project.githubLink && (
       <a
         href={project.githubLink}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition duration-300"
       >
         GitHub
       </a>
     )}
     {project.liveLink && (
       <a
         href={project.liveLink}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-block bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-blue-600 transition duration-300"
       >
         Live Demo
       </a>
     )}
   </div>
 </div>
);


const Projects = () => {
 return (
   <div className="container mx-auto px-4 py-8">
     <h2 className="text-3xl font-bold mb-6">My Projects</h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {projects.map((project) => (
         <ProjectCard key={project.id} project={project} />
       ))}
     </div>
   </div>
 );
};


export default Projects;
