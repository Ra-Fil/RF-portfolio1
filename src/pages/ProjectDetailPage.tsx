import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import GithubIcon from '../components/icons/GithubIcon';
import ExternalLinkIcon from '../components/icons/ExternalLinkIcon';
import Footer from '../components/Footer';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-text-primary">
        <h1 className="text-4xl font-bold mb-4">Projekt nenalezen</h1>
        <Link to="/" className="text-accent-start hover:text-accent-end underline">
          Zpět na domovskou stránku
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-primary font-sans flex flex-col">
       {/* Simple Header for Detail Page */}
       <header className="sticky top-0 z-50 bg-primary/80 backdrop-blur-sm border-b border-border-color py-4">
        <div className="container mx-auto px-4 md:px-16 flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">
                RF
            </Link>
            <Link to="/" className="px-4 py-2 bg-secondary text-text-primary rounded-lg hover:bg-border-color transition-colors">
                Zpět na úvod
            </Link>
        </div>
       </header>

      <main className="flex-grow container mx-auto px-4 md:px-16 py-12">
        <div className="animate-fade-in-up">
            {/* Project Header */}
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">
            {project.title}
            </h1>

            {/* Image */}
            <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-10 shadow-2xl border border-border-color">
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-semibold mb-4 text-text-primary">O projektu</h2>
                    <p className="text-lg text-text-secondary leading-relaxed whitespace-pre-line">
                        {project.description}
                    </p>
                    {/* Placeholder for more detailed content if available in the future */}
                    <div className="mt-8 p-6 bg-secondary/50 rounded-lg border border-border-color">
                        <p className="italic text-text-secondary">Detailní popis implementace a galerie dalších obrázků bude doplněna.</p>
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="flex flex-col gap-8">
                    {/* Links */}
                    <div className="bg-secondary p-6 rounded-xl border border-border-color">
                        <h3 className="text-xl font-semibold mb-4 text-text-primary">Odkazy</h3>
                        <div className="flex flex-col gap-4">
                            {project.repoUrl ? (
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-secondary hover:text-accent-start transition-colors">
                                    <GithubIcon className="w-6 h-6" />
                                    <span>Zdrojový kód (GitHub)</span>
                                </a>
                            ) : (
                                <span className="text-text-secondary/50 flex items-center gap-3">
                                     <GithubIcon className="w-6 h-6" />
                                     <span>Privátní repozitář</span>
                                </span>
                            )}
                            
                            {project.liveUrl ? (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-secondary hover:text-accent-start transition-colors">
                                    <ExternalLinkIcon className="w-6 h-6" />
                                    <span>Živá ukázka</span>
                                </a>
                            ) : (
                                <span className="text-text-secondary/50 flex items-center gap-3">
                                    <ExternalLinkIcon className="w-6 h-6" />
                                    <span>Není nasazeno online</span>
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="bg-secondary p-6 rounded-xl border border-border-color">
                        <h3 className="text-xl font-semibold mb-4 text-text-primary">Použité technologie</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-primary text-text-primary text-sm rounded-full border border-border-color">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;