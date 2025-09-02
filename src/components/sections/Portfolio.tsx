import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_FILTERS } from '../../constants';
import Card from '../ui/Card';
import FadeIn from '../animations/FadeIn';

// Sample portfolio data
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'منصة التجارة الإلكترونية',
    description: 'منصة متكاملة للتجارة الإلكترونية مع نظام إدارة المحتوى',
    image: '/placeholder-portfolio-1.jpg',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'تطبيق الصحة الذكي',
    description: 'تطبيق موبايل لمتابعة الصحة واللياقة البدنية',
    image: '/placeholder-portfolio-2.jpg',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux']
  },
  {
    id: 3,
    title: 'نظام إدارة المشاريع',
    description: 'واجهة مستخدم حديثة لنظام إدارة المشاريع',
    image: '/placeholder-portfolio-3.jpg',
    category: 'design',
    technologies: ['Figma', 'Adobe XD', 'Principle']
  },
  {
    id: 4,
    title: 'تطبيق الطعام السريع',
    description: 'تطبيق توصيل الطعام مع تتبع الطلبات في الوقت الفعلي',
    image: '/placeholder-portfolio-4.jpg',
    category: 'mobile',
    technologies: ['Flutter', 'Firebase', 'Google Maps']
  },
  {
    id: 5,
    title: 'موقع الشركة المؤسسية',
    description: 'موقع ويب متجاوب للشركات مع نظام إدارة المحتوى',
    image: '/placeholder-portfolio-5.jpg',
    category: 'web',
    technologies: ['Next.js', 'Strapi', 'Tailwind CSS']
  },
  {
    id: 6,
    title: 'تصميم تطبيق البنك',
    description: 'تصميم واجهة مستخدم لتطبيق البنك الرقمي',
    image: '/placeholder-portfolio-6.jpg',
    category: 'design',
    technologies: ['Sketch', 'InVision', 'Lottie']
  }
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-dark-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            أعمالنا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            مجموعة مختارة من أفضل مشاريعنا التي نفذناها لعملائنا في مختلف المجالات
          </p>
        </FadeIn>

        {/* Filter Buttons */}
        <FadeIn direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {PORTFOLIO_FILTERS.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.name}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1
                }}
              >
                <Card hover className="overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-gray-400 text-sm">
                      صورة المشروع
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200"
                  >
                    عرض التفاصيل
                  </motion.button>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <FadeIn direction="up" delay={0.6} className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200"
          >
            عرض جميع الأعمال
          </motion.button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Portfolio;