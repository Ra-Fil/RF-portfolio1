import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Funkce pro zavření modálního okna klávesou ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Zamezení scrollování pozadí, když je modal otevřený
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  return (
    <section id="projects" className="py-20 md:py-32">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Moje Projekty
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={project.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
            <ProjectCard 
              project={project} 
              onImageClick={(img) => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in-up"
          style={{ animationDuration: '0.2s' }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full max-h-screen flex justify-center">
             {/* Tlačítko pro zavření */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 md:top-0 md:-right-12 text-white hover:text-accent-start transition-colors p-2"
              aria-label="Zavřít náhled"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <img 
              src={selectedImage} 
              alt="Náhled projektu" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-border-color"
              onClick={(e) => e.stopPropagation()} // Kliknutí na obrázek nezavře modal
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;