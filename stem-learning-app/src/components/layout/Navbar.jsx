'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCog, FaSignOutAlt, FaMoon, FaSun, FaBars, FaTimes, FaRocket } from 'react-icons/fa';
import Link from 'next/link';
import GradientButton from '../ui/GradientButton';

const Navbar = ({ user = null }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    // Check for saved dark mode preference
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navItems = [
    { name: 'Courses', href: '#courses' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <FaRocket className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-rubik font-bold gradient-text">
                STEM-Learn
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-indigo dark:hover:text-primary-purple transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
            </button>

            {user ? (
              /* User Menu */
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-indigo to-primary-purple rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {user.name?.[0] || 'U'}
                  </div>
                  <span className="hidden sm:block text-gray-700 dark:text-gray-300 font-medium">
                    {user.name}
                  </span>
                </button>

                {userMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1"
                  >
                    <a href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <FaUser className="w-4 h-4 mr-3" />
                      Profile
                    </a>
                    <a href="/settings" className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <FaCog className="w-4 h-4 mr-3" />
                      Settings
                    </a>
                    <hr className="my-1 border-gray-200 dark:border-gray-700" />
                    <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <FaSignOutAlt className="w-4 h-4 mr-3" />
                      Logout
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              /* Auth Buttons */
              <div className="hidden sm:flex items-center space-x-3">
                <Link href="/auth/login">
                  <GradientButton variant="secondary" size="sm">
                    Login
                  </GradientButton>
                </Link>
                <Link href="/auth/signup">
                  <GradientButton variant="primary" size="sm">
                    Sign Up
                  </GradientButton>
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {mobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4"
          >
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {!user && (
                <div className="px-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
                  <Link href="/auth/login">
                    <GradientButton variant="secondary" size="sm" className="w-full">
                      Login
                    </GradientButton>
                  </Link>
                  <Link href="/auth/signup">
                    <GradientButton variant="primary" size="sm" className="w-full">
                      Sign Up
                    </GradientButton>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;