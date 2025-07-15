import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiTool } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: FiCode,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 90 },
        { name: 'React', level: 80 },
        { name: 'Tailwind CSS', level: 75 },
      ]
    },
    {
      title: 'Database',
      icon: FiDatabase,
      skills: [
        { name: 'MySQL', level: 80 },
      ]
    },
    {
      title: 'Tools',
      icon: FiTool,
      skills: [
        { name: 'Visual Studio Code', level: 90 },
        { name: 'PyCharm', level: 80 },
        { name: 'MySQL Workbench', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={categoryIndex * 100}
              className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
