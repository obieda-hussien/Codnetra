'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { 
  faRocket, 
  faLightbulb, 
  faUsers, 
  faBullseye,
  faHeart,
  faStar
} from '@fortawesome/free-solid-svg-icons';

const FeatureCard: React.FC<{
  icon: IconDefinition;
  title: string;
  description: string;
  index: number;
}> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <FontAwesomeIcon icon={icon} className="text-white text-2xl" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            عن شركة كودنيترا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نحن شركة تقنية رائدة متخصصة في تطوير الحلول البرمجية المبتكرة، 
            نجمع بين الإبداع والتكنولوجيا لتحويل أفكارك إلى واقع رقمي مذهل
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              رسالتنا وقيمنا
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faBullseye} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">رؤيتنا</h4>
                  <p className="text-gray-300">
                    أن نكون الشريك التقني الأول للشركات في رحلة التحول الرقمي
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faHeart} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">قيمنا</h4>
                  <p className="text-gray-300">
                    الجودة والابتكار والشفافية في كل ما نقوم به
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faStar} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">هدفنا</h4>
                  <p className="text-gray-300">
                    تقديم حلول تقنية متطورة تساعد عملاءنا على تحقيق النجاح
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-accent/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              إنجازاتنا بالأرقام
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">15+</div>
                <div className="text-gray-300">مشروع ناجح</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-300">رضا العملاء</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">11</div>
                <div className="text-gray-300">خبير تقني</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">دعم فني</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={faRocket}
            title="سرعة في التنفيذ"
            description="نلتزم بالمواعيد المحددة ونسلم المشاريع في الوقت المناسب"
            index={0}
          />
          <FeatureCard
            icon={faLightbulb}
            title="حلول مبتكرة"
            description="نستخدم أحدث التقنيات لتطوير حلول مبتكرة ومتطورة"
            index={1}
          />
          <FeatureCard
            icon={faUsers}
            title="فريق متخصص"
            description="فريق من الخبراء المتخصصين في مختلف المجالات التقنية"
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;