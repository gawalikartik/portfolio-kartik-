import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { supabase } from '../utils/supabaseClient'; // Import supabase client

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null); // To store success or error messages

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    const { data, error } = await supabase
      .from('contact_submissions') // Replace with your Supabase table name
      .insert([
        { name, email, message },
      ]);

    if (error) {
      setFeedback({ type: 'error', message: 'Failed to send message: ' + error.message });
      console.error('Error submitting form:', error);
    } else {
      setFeedback({ type: 'success', message: 'Message sent successfully!' });
      setName('');
      setEmail('');
      setMessage('');
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <motion.div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">Contact Me</h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello 👋
          </p>
        </motion.div>
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-secondary-700 font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-secondary-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-secondary-700 font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-secondary-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-secondary-700 font-medium mb-1">Message</label>
              <textarea
                id="message"
                className="w-full border border-secondary-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                rows="5"
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            {feedback && (
              <p className={`text-center ${feedback.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {feedback.message}
              </p>
            )}
            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? 'Sending...' : <><FiMail size={20} /> Send Message</>}
            </button>
          </form>
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-primary-600">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-primary-600">
              <FiLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
