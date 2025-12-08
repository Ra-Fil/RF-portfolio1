import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-8 text-text-secondary">
      <p className="text-base">&copy; {new Date().getFullYear()} Radka Filipová. Všechna práva vyhrazena.</p>
    </footer>
  );
};

export default Footer;
