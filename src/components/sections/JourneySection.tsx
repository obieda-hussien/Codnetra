'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { JOURNEY_MILESTONES } from '../../constants';

const MilestoneCard: React.FC<{ 
  milestone: typeof JOURNEY_MILESTONES[0]; 
  index: number;
  isLast: boolean;
}> = ({ milestone, index, isLast }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex items-center mb-16 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="flex-1"
      >
        <div className={`max-w-md ${isEven ? 'mr-8' : 'ml-8'}`}>
          <div className="bg-dark-surface/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-accent/50 transition-all duration-300">
            {/* Date */}
            <div className="flex items-center mb-4">
              <span className="px-3 py-1 bg-accent/20 text-accent text-sm font-medium rounded-full">
                {milestone.date}
              </span>
              <span className={`mr-3 px-2 py-1 text-xs rounded-full ${
                milestone.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                milestone.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-blue-500/20 text-blue-400'
              }`}>
                {milestone.status === 'completed' ? 'مكتمل' :
                 milestone.status === 'in-progress' ? 'جاري' : 'مخطط'}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3">
              {milestone.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-4">
              {milestone.description}
            </p>

            {/* Metrics */}
            {milestone.metrics && (
              <div className="grid grid-cols-2 gap-4">
                {milestone.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="text-2xl font-bold text-accent">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Timeline Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center border-4 border-dark-background">
          <FontAwesomeIcon 
            icon={milestone.icon} 
            className="text-white text-xl"
          />
        </div>
      </motion.div>

      {/* Empty space for alternating layout */}
      <div className="flex-1"></div>

      {/* Timeline Line */}
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
          viewport={{ once: true }}
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-accent to-primary"
          style={{
            top: '80px',
            bottom: '-64px',
            zIndex: 0
          }}
        />
      )}
    </div>
  );
};

const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-20 relative overflow-hidden">
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
            رحلة الشركة
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            رحلة مليئة بالإبداع والابتكار، من فكرة بسيطة إلى شركة رائدة في مجال التكنولوجيا
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-700/50"></div>
          
          {JOURNEY_MILESTONES.map((milestone, index) => (
            <MilestoneCard
              key={milestone.id}
              milestone={milestone}
              index={index}
              isLast={index === JOURNEY_MILESTONES.length - 1}
            />
          ))}
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-8 border border-primary/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              رؤيتنا للمستقبل
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              نسعى لأن نكون الخيار الأول للشركات والأفراد الباحثين عن حلول تقنية مبتكرة وعصرية، 
              ونهدف للتوسع في الأسواق العربية والعالمية
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-gray-400">مشروع بحلول 2025</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-gray-400">عضو في الفريق</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
                <div className="text-gray-400">أسواق جديدة</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;