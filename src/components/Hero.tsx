import React from 'react';
import { MY_NAME, MY_ROLE } from '../constants';

const Hero: React.FC = () => {
    const scrollToSkills = () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-center text-center -mt-12 md:-mt-16">
            <div className="animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-snug">
                    Ahoj, jsem <span className="bg-gradient-to-r from-accent-start to-accent-end bg-clip-text text-transparent bg-no-repeat animate-text-wipe">{MY_NAME}</span>
                </h1>
                <p className="mt-4 text-2xl md:text-3xl text-text-secondary">{MY_ROLE}</p>
                <p className="mt-6 max-w-2xl mx-auto text-text-primary">
                    Aktuálně hledám příležitost rozvíjet se v oblasti webového vývoje.
                </p>
                <button 
                    onClick={scrollToSkills}
                    className="mt-8 px-8 py-3 bg-gradient-to-r from-accent-start to-accent-end text-primary font-semibold rounded-lg hover:from-accent-start-hover hover:to-accent-end-hover transition-transform transform hover:scale-105 duration-300">
                    Moje dovednosti
                </button>
            </div>
        </section>
    );
};

export default Hero;