import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Spotify Clone',
      description: 'A basic Spotify clone built using HTML and CSS. Responsive design and clean UI.',
      technologies: ['HTML', 'CSS'],
      liveLink: 'https://github.com/gawalikartik/Pro-1-HTML-CSS---Spotify-clone.git',
      githubLink: 'https://github.com/gawalikartik/Pro-1-HTML-CSS---Spotify-clone.git',
    },
    {
      title: 'HTML CSS JavaScript Project 2',
      description: 'Project 2 using HTML, CSS, and JavaScript. Demonstrates interactive web features.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://github.com/gawalikartik/HTML-CSS-JAVA-SCRIPT-PRO-2.git',
      githubLink: 'https://github.com/gawalikartik/HTML-CSS-JAVA-SCRIPT-PRO-2.git',
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="btn-primary flex items-center gap-2 text-sm"
                >
                  <FiExternalLink size={16} />
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="btn-secondary flex items-center gap-2 text-sm"
                >
                  <FiGithub size={16} />
                  View Code
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
