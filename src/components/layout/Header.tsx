import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NAVIGATION_LINKS } from '../../constants';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { useActiveSection } from '../../hooks/useActiveSection';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();
  const sectionIds = NAVIGATION_LINKS.map(link => link.section);
  const activeSection = useActiveSection(sectionIds);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (link: typeof NAVIGATION_LINKS[0]) => {
    if (link.href === '/') {
      scrollToSection('hero');
    } else {
      scrollToSection(link.section);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-surface/80 backdrop-blur-sm border-b border-gray-700/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <h1 className="text-2xl font-bold gradient-text">
              Codenetra
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {NAVIGATION_LINKS.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`text-gray-300 hover:text-accent transition-colors duration-200 relative ${
                  activeSection === link.section ? 'text-accent' : ''
                }`}
              >
                {link.label}
                {activeSection === link.section && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center"
          >
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              ابدأ مشروعك
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors"
            >
              <FontAwesomeIcon 
                icon={isMenuOpen ? faTimes : faBars} 
                className="w-6 h-6" 
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-700/20"
          >
            <nav className="py-4 space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className="block w-full text-right px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-4">
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleNavClick({ id: 'contact', label: '', href: '#contact', section: 'contact' })}
                >
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