import React from 'react';
import { CONTACT } from '../constants';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Pojďme se spojit!</h2>
      <p className="text-text-secondary max-w-xl mx-auto mb-8">
        Máte pro mě projekt nebo pracovní příležitost? Ozvěte se mi prosím.
      </p>
      <a href={`mailto:${CONTACT.email}`} className="inline-block px-8 py-3 mb-8 bg-gradient-to-r from-accent-start to-accent-end text-primary font-semibold rounded-lg hover:from-accent-start-hover hover:to-accent-end-hover transition-transform transform hover:scale-105 duration-300">
        r.filipova@email.cz
      </a>
      <div className="flex justify-center space-x-6">
        <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-start-hover transition-colors duration-300" aria-label="Můj LinkedIn profil">
          <LinkedInIcon className="w-8 h-8" />
        </a>
         <a href={`mailto:${CONTACT.email}`} className="text-text-secondary hover:text-accent-start-hover transition-colors duration-300" aria-label="Napsat e-mail">
          <MailIcon className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Contact;