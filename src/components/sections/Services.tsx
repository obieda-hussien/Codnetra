import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SERVICES } from '../../constants';
import Card from '../ui/Card';
import FadeIn from '../animations/FadeIn';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            خدماتنا
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات التقنية المبتكرة التي تساعد عملائنا على تحقيق أهدافهم الرقمية
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Card hover className="h-full text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FontAwesomeIcon 
                      icon={service.icon} 
                      className="w-8 h-8 text-primary" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center justify-center text-sm text-gray-400"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <FadeIn direction="up" delay={0.8} className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-8">
            هل تحتاج إلى خدمة مخصصة؟ نحن هنا لمساعدتك
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-colors duration-200"
          >
            تحدث معنا الآن
          </motion.button>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;