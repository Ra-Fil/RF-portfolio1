import React from 'react';
import type { Project } from '../types';
import GithubIcon from './icons/GithubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
  onImageClick: (imageUrl: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onImageClick }) => {
  return (
    <div className="group bg-gradient-to-r from-border-color to-border-color p-px rounded-lg hover:from-accent-start hover:to-accent-end transition-all duration-300 h-full">
      <div className="bg-secondary rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
        {/* Sekce s obrázkem - kliknutí vyvolá modální okno */}
        <div 
          onClick={() => onImageClick(project.imageUrl)}
          className="block overflow-hidden relative cursor-pointer" 
          aria-label={`Zvětšit náhled projektu ${project.title}`}
        >
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <span className="text-white font-semibold px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm">Zvětšit náhled</span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-2">
             <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">{project.title}</h3>
          </div>
          <p className="text-text-secondary mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-border-color text-text-primary text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-auto flex items-center space-x-4">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-start-hover transition-colors duration-300" aria-label={`GitHub repozitář projektu ${project.title}`}>
                <GithubIcon className="w-6 h-6" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-start-hover transition-colors duration-300" aria-label={`Živá ukázka projektu ${project.title}`}>
                <ExternalLinkIcon className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;