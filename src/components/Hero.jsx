import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiCamera } from 'react-icons/fi';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedImg = localStorage.getItem('kartik-profile-img');
    if (savedImg) {
      setSelectedImg(savedImg);
    }
  }, []);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setSelectedImg(ev.target.result);
        localStorage.setItem('kartik-profile-img', ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p className="text-primary-600 font-medium">
                Hello, I'm
              </motion.p>
              <motion.h1 className="text-5xl lg:text-7xl font-bold text-secondary-900">
                Kartik Gawali
              </motion.h1>
              <motion.h2 className="text-2xl lg:text-3xl font-semibold gradient-text">
                B.Sc. Computer Science Graduate | Aspiring Full Stack Developer
              </motion.h2>
            </div>

            <motion.p className="text-lg text-secondary-600 max-w-lg">
              Passionate about problem-solving, backend systems, and full-stack development. Highly motivated, quick learner, and eager to contribute to IT and software development teams.
            </motion.p>

            <motion.div className="flex flex-wrap gap-4">
              <motion.a
                href="/Document from Kartik Gawali..❤️.pdf"
                download="Kartik_Gawali_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <FiDownload size={20} />
                Download Resume
              </motion.a>
              
              <motion.a
                href="#contact" // Changed to an anchor tag pointing to the contact section
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
                role="button" // Added for accessibility since it's now an anchor acting as a button
              >
                <FiMail size={20} />
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div className="flex gap-4">
              {[
                { icon: FiGithub, href: 'https://github.com/gawalikartik', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kartik-gawali-474135364', label: 'LinkedIn' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl text-secondary-600 hover:text-primary-600"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              className="w-72 h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full flex items-center justify-center shadow-xl cursor-pointer relative group"
              onClick={handleImageClick}
              title="Click to upload/change photo"
            >
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
              {selectedImg ? (
                <img
                  src={selectedImg}
                  alt="Profile Preview"
                  className="w-64 h-64 lg:w-72 lg:h-72 object-cover rounded-full border-4 border-white shadow-lg"
                />
              ) : (
                <img
                  src={profileImg}
                  alt=""
                  className="w-64 h-64 lg:w-72 lg:h-72 object-cover rounded-full border-4 border-white shadow-lg"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 rounded-full transition-opacity">
                <FiCamera className="text-white text-3xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
