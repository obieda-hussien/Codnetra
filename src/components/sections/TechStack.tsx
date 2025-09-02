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
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={advancedVariants.staggerChild}
            >
              <FloatingCard className="h-full text-center group cursor-pointer">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>
                
                {/* Tech name */}
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-text-accent transition-colors">
                  {tech.name}
                </h3>
                
                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {tech.description}
                </p>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gradient-accent/5 to-gradient-end/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
            <span className="inline-block px-8 py-3 bg-gradient-to-r from-gradient-start to-gradient-end text-text-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-gradient-accent/25 transition-all duration-300 cursor-pointer">
              تحدث مع خبرائنا
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;