import React from 'react';

const HtmlIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="#E44D26" d="M3.3,2L5,20.2L12,22l7-1.8L20.7,2H3.3z"/>
    <path fill="#F16529" d="M12,4V19.9L17.6,18.5L18.7,4H12z"/>
    <path fill="#EBEBEB" d="M12,8.8h3.1l-0.2,2.3H12V8.8z M12,13.2h2.8l-0.3,2.7l-2.5,0.7v2.3l4.5-1.2l0.5-5.5H12V13.2z"/>
    <path fill="#FFFFFF" d="M12,8.8v2.3H9.4L9.2,8.8H12z M12,13.2v2.3H9.9l-0.1-1.1H12z M12,15.5v2.3L9.5,17.1L9.4,16h-2l0.3,3.2L12,20v-2.2L12,15.5z"/>
  </svg>
);

export default HtmlIcon;