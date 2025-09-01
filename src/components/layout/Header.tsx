import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NAVIGATION_LINKS } from '../../constants';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm border-b border-gray-200/20 dark:border-gray-700/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <h1 className="text-2xl font-bold text-primary">
              Codenetra
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {NAVIGATION_LINKS.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:block"
          >
            <Button variant="primary" size="sm">
              ابدأ مشروعك
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <FontAwesomeIcon 
              icon={isMenuOpen ? faTimes : faBars} 
              className="w-6 h-6" 
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200/20 dark:border-gray-700/20"
          >
            <nav className="py-4 space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-4">
                <Button variant="primary" size="sm" className="w-full">
                  ابدأ مشروعك
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;