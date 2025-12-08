import React from 'react';
import { ABOUT_ME, BASE_URL } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary px-16 mt-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="md:w-1/4 animate-fade-in-up">
                <img 
                    src={`${BASE_URL}images/RF-foto.jpg`} 
                    alt="Radka Filipová" 
                    className="rounded-full shadow-lg border-4 border-border-color mx-auto"
                />
            </div>
            <div className="md:w-3/4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-6 bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent">
                    {ABOUT_ME.title}
                </h2>
                <div className="text-lg text-text-secondary leading-relaxed md:text-justify">
                    {ABOUT_ME.description}
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;