import { Project } from "@/types";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1 
      }
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      variants={item}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <svg 
            className="w-16 h-16 text-gray-400" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
        </div>
        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-primary">
          {project.title}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-2">{project.title}</h3>
        <p className="text-[#343a40] mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="bg-[#e9ecef] px-2 py-1 text-xs rounded">{tech}</span>
          ))}
        </div>
        <a href={project.link} className="text-primary font-medium hover:underline inline-flex items-center">
          View Project
          <ChevronRight className="h-4 w-4 ml-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
