'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaTwitter, FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const footerLinks = {
    'Learning': [
      { name: 'Coding Math', href: '#' },
      { name: 'Robotics', href: '#' },
      { name: 'Python Playground', href: '#' },
      { name: 'Scratch Programming', href: '#' },
    ],
    'Company': [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' },
    ],
    'Support': [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: FaTwitter, href: '#' },
    { name: 'GitHub', icon: FaGithub, href: '#' },
    { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 mb-4"
            >
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <FaRocket className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-rubik font-bold gradient-text">
                STEM-Learn
              </span>
            </motion.div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Empowering the next generation of innovators through interactive STEM education. 
              Where numbers meet robots and coding becomes an adventure.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-10 h-10 bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-indigo hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-rubik font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (linkIndex * 0.05) }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-indigo dark:hover:text-primary-purple transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 STEM-Learn. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 text-sm">
              <span>Made with</span>
              <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>for young innovators</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;