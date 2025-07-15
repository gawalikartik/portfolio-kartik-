import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-secondary-100 py-6 mt-12">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-secondary-700 text-sm">
          &copy; {new Date().getFullYear()} Kartik Gawali. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#home" className="text-secondary-700 hover:text-primary-600 text-sm">Home</a>
          <a href="#about" className="text-secondary-700 hover:text-primary-600 text-sm">About</a>
          <a href="#skills" className="text-secondary-700 hover:text-primary-600 text-sm">Skills</a>
          <a href="#projects" className="text-secondary-700 hover:text-primary-600 text-sm">Projects</a>
          <a href="#contact" className="text-secondary-700 hover:text-primary-600 text-sm">Contact</a>
        </div>
        <div className="flex gap-3">
          <a href="https://github.com/gawalikartik" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-primary-600">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kartik-gawali-474135364" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-primary-600">
            <FiLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
