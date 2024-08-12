import React from 'react';
import pdf from "../assets/Resume.pdf";
const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl">{'</>'} Sudharsan Balaji</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#projects">Projects</a></li>
            <li><a href={pdf} target="_blank">Resume</a></li>
            <li><a href="#terminal">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;