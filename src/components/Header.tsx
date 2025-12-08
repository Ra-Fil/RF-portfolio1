import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navLinks = [
    { id: 'about', name: 'O mně' },
    { id: 'skills', name: 'Dovednosti' },
    { id: 'projects', name: 'Projekty' },
    { id: 'contact', name: 'Kontakt' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary/80 backdrop-blur-sm border-b border-border-color">
      <nav className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold cursor-pointer" onClick={() => scrollToSection('hero')}>
          <span className="bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">RF</span>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => {
            if (link.id === 'contact') {
              return (
                <button 
                  key={link.id} 
                  onClick={() => scrollToSection(link.id)}
                  aria-label={`Přejít na sekci ${link.name}`}
                  className="px-4 py-2 bg-gradient-to-r from-accent-start to-accent-end text-primary font-semibold rounded-lg hover:from-accent-start-hover hover:to-accent-end-hover transition-transform transform hover:scale-105 duration-300 text-lg"
                >
                  {link.name}
                </button>
              );
            }
            return (
             <button key={link.id} onClick={() => scrollToSection(link.id)} aria-label={`Přejít na sekci ${link.name}`} className="text-lg text-text-primary hover:bg-gradient-to-r hover:from-accent-start-hover hover:to-accent-end-hover hover:bg-clip-text hover:text-transparent transition-colors duration-300">
                {link.name}
             </button>
            );
          })}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary focus:outline-none" aria-label="Otevřít/zavřít menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-secondary">
          <div className="flex flex-col items-center py-4">
             {navLinks.map(link => {
                if (link.id === 'contact') {
                  return (
                    <button 
                      key={link.id} 
                      onClick={() => scrollToSection(link.id)}
                      aria-label={`Přejít na sekci ${link.name}`}
                      className="mt-2 px-8 py-2 bg-gradient-to-r from-accent-start to-accent-end text-primary font-semibold rounded-lg hover:from-accent-start-hover hover:to-accent-end-hover transition-transform transform hover:scale-105 duration-300 text-lg"
                    >
                      {link.name}
                    </button>
                  );
                }
                return (
                    <button key={link.id} onClick={() => scrollToSection(link.id)} aria-label={`Přejít na sekci ${link.name}`} className="py-2 text-lg text-text-primary hover:bg-gradient-to-r hover:from-accent-start-hover hover:to-accent-end-hover hover:bg-clip-text hover:text-transparent transition-colors duration-300">
                        {link.name}
                    </button>
                );
             })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;