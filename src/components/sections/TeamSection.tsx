'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faStar, faCode } from '@fortawesome/free-solid-svg-icons';
import { DEVELOPERS } from '../../constants';

const DeveloperCard: React.FC<{ developer: typeof DEVELOPERS[0]; index: number }> = ({ 
  developer, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="bg-dark-surface/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-accent/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
        {/* Avatar */}
        <div className="relative mb-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent to-primary p-0.5">
            <div className="w-full h-full rounded-full bg-dark-surface flex items-center justify-center">
              <FontAwesomeIcon icon={faCode} className="text-4xl text-accent" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faStar} className="text-xs text-dark-background" />
          </div>
        </div>

        {/* Name and Role */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-white mb-1">{developer.name}</h3>
          <p className="text-sm text-gray-400 mb-2">{developer.nameEn}</p>
          <p className="text-accent font-medium">{developer.role}</p>
        </div>

        {/* Bio */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6 text-center">
          {developer.bio}
        </p>

        {/* Skills */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-3 text-center">المهارات التقنية</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {developer.skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-3 text-center">الإنجازات</h4>
          <div className="space-y-2">
            {developer.achievements.map((achievement, achIndex) => (
              <div 
                key={achIndex}
                className="flex items-center text-sm text-gray-300"
              >
                <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-3 text-center">التخصصات</h4>
          <div className="flex flex-wrap gap-2 justify-center">
            {developer.specialties.map((specialty, specIndex) => (
              <span
                key={specIndex}
                className="px-2 py-1 bg-accent/20 text-accent text-xs rounded"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 space-x-reverse">
          {developer.socialLinks.github && (
            <motion.a
              href={developer.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
              aria-label={`GitHub ${developer.name}`}
            >
              <FontAwesomeIcon icon={faGithub} className="text-white" />
            </motion.a>
          )}
          {developer.socialLinks.linkedin && (
            <motion.a
              href={developer.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
              aria-label={`LinkedIn ${developer.name}`}
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-white" />
            </motion.a>
          )}
          {developer.socialLinks.twitter && (
            <motion.a
              href={developer.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-blue-400 hover:bg-blue-300 rounded-full flex items-center justify-center transition-colors"
              aria-label={`Twitter ${developer.name}`}
            >
              <FontAwesomeIcon icon={faTwitter} className="text-white" />
            </motion.a>
          )}
          {developer.socialLinks.portfolio && (
            <motion.a
              href={developer.socialLinks.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-accent hover:bg-accent-light rounded-full flex items-center justify-center transition-colors"
              aria-label={`موقع ${developer.name} الشخصي`}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="text-white" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            فريق المطورين
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            فريق من المطورين المحترفين والمتخصصين في أحدث التقنيات، 
            نعمل معاً لتحويل أفكارك إلى واقع رقمي مبتكر
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {DEVELOPERS.map((developer, index) => (
            <DeveloperCard 
              key={developer.id} 
              developer={developer} 
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent/20 to-primary/20 backdrop-blur-sm rounded-2xl p-8 border border-accent/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              هل تريد الانضمام لفريقنا؟
            </h3>
            <p className="text-gray-300 mb-6">
              نحن دائماً نبحث عن مطورين موهوبين لينضموا إلى رحلتنا في الابتكار
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-accent to-primary text-white font-medium rounded-lg hover:from-accent-light hover:to-primary-light transition-all duration-300"
            >
              تواصل معنا
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;