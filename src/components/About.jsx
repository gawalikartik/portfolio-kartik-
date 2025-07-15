import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiCalendar } from 'react-icons/fi';

const About = () => {
  const highlights = [
    { icon: FiMapPin, label: 'Location', value: 'Upvan, Thane (W)' },
    { icon: FiMail, label: 'Email', value: 'kartikwork26@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '9321727139' },
    { icon: FiCalendar, label: 'Date of Birth', value: '26 April 2004' },
    { icon: FiCalendar, label: 'Languages', value: 'Marathi, Hindi, English' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            B.Sc. Computer Science graduate from Mumbai University (CGPA: 8.29). Passionate about problem-solving, backend systems, and full-stack development. Highly motivated and eager to contribute to IT and software development teams.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            data-aos="fade-right"
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Education
            </h3>
            <ul className="text-gray-300 leading-relaxed space-y-2">
              <li><strong className="text-white">B.Sc. Computer Science</strong> - M.D. College, Parel, Mumbai University, 2023 (CGPA: 8.29)</li>
              <li><strong className="text-white">HSC</strong> - V.G. Vaze College, Maharashtra Board, 2022 (48.50%)</li>
              <li><strong className="text-white">SSC</strong> - Vartak Nagar Madhyamik Vidyalaya, Maharashtra Board, 2020 (82.40%)</li>
            </ul>
          </motion.div>

          <motion.div
            data-aos="fade-left"
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Personal Details
            </h3>
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg"
                >
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-white">{item.label}</p>
                    <p className="text-gray-300">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
