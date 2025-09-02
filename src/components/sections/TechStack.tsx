import React from 'react';
import { motion } from 'framer-motion';
import { advancedVariants } from '../../lib/animations';
import FloatingCard from '../ui/FloatingCard';
import GlitchText from '../ui/GlitchText';

interface TechItem {
  name: string;
  icon: string;
  description: string;
  color: string;
}

const TechStack: React.FC = () => {
  const technologies: TechItem[] = [
    {
      name: "React",
      icon: "⚛️",
      description: "مكتبة JavaScript لبناء واجهات المستخدم",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Next.js",
      icon: "▲",
      description: "إطار عمل React للتطبيقات عالية الأداء",
      color: "from-gray-700 to-gray-900"
    },
    {
      name: "TypeScript",
      icon: "📘",
      description: "JavaScript مع نظام الأنواع المتقدم",
      color: "from-blue-600 to-blue-800"
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      description: "إطار عمل CSS utility-first",
      color: "from-cyan-500 to-teal-500"
    },
    {
      name: "Node.js",
      icon: "🟢",
      description: "بيئة تشغيل JavaScript للخادم",
      color: "from-green-500 to-green-700"
    },
    {
      name: "MongoDB",
      icon: "🍃",
      description: "قاعدة بيانات NoSQL مرنة",
      color: "from-green-600 to-green-800"
    },
    {
      name: "Three.js",
      icon: "🎮",
      description: "مكتبة الرسوميات ثلاثية الأبعاد",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Framer Motion",
      icon: "🎭",
      description: "مكتبة الحركات المتقدمة",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={advancedVariants.springIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            <GlitchText>التقنيات التي نتقنها</GlitchText>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            نستخدم أحدث التقنيات والأدوات لضمان بناء حلول قوية ومتطورة
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={advancedVariants.staggerParent}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={advancedVariants.staggerChild}
              custom={index}
            >
              <FloatingCard 
                className="h-full text-center group cursor-pointer"
                tiltEffect={true}
                tiltMaxAngle={10}
              >
                {/* Icon with enhanced hover effects */}
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    rotateY: 15,
                    rotateX: 15
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {tech.icon}
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0"
                    style={{
                      background: `radial-gradient(circle, ${tech.color.includes('blue') ? '#3b82f6' : tech.color.includes('green') ? '#10b981' : '#8b5cf6'}40, transparent 70%)`
                    }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                {/* Tech name with enhanced hover */}
                <motion.h3 
                  className="text-xl font-bold text-text-primary mb-2 transition-colors"
                  whileHover={{ color: '#2563eb' }}
                >
                  {tech.name}
                </motion.h3>
                
                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {tech.description}
                </p>

                {/* Enhanced glow effect overlay */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${tech.color.includes('blue') ? 'rgba(59, 130, 246, 0.1)' : tech.color.includes('green') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(139, 92, 246, 0.1)'}, transparent)`
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </FloatingCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={advancedVariants.springIn}
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-6">
            هل تريد معرفة كيف يمكن لهذه التقنيات أن تخدم مشروعك؟
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="inline-block px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 cursor-pointer">
              تحدث مع خبرائنا
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;