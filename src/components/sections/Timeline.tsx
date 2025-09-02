import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { advancedVariants } from '../../lib/animations';
import FloatingCard from '../ui/FloatingCard';
import GlitchText from '../ui/GlitchText';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  achievements: string[];
}

const Timeline: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      year: "2024",
      title: "بداية الرحلة",
      description: "تأسيس كودنيترا كشركة متخصصة في الحلول التقنية المبتكرة",
      achievements: [
        "إطلاق أول مشاريعنا التجريبية",
        "بناء فريق تطوير متخصص",
        "وضع الرؤية والأهداف الاستراتيجية"
      ]
    },
    {
      year: "2024",
      title: "التوسع والابتكار",
      description: "التركيز على تطوير تطبيقات متقدمة وحلول مخصصة",
      achievements: [
        "تطوير 5+ مشاريع ناجحة",
        "دمج التقنيات ثلاثية الأبعاد",
        "شراكات استراتيجية جديدة"
      ]
    },
    {
      year: "المستقبل",
      title: "الرؤية المستقبلية",
      description: "استكشاف آفاق جديدة في الذكاء الاصطناعي والواقع المعزز",
      achievements: [
        "تطوير منصات AI متقدمة",
        "حلول الواقع المعزز والافتراضي",
        "التوسع الإقليمي والعالمي"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            <GlitchText>رحلة النمو والتطور</GlitchText>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            من البداية المتواضعة إلى الطموحات الكبيرة، هذه قصة كودنيترا
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute right-1/2 transform translate-x-1/2 w-1 h-full bg-gradient-to-b from-gradient-start via-gradient-mid to-gradient-end"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <TimelineItem
                  key={index}
                  item={item}
                  isEven={isEven}
                />
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={advancedVariants.springIn}
          className="text-center mt-20"
        >
          <p className="text-text-secondary mb-6 text-lg">
            هل تريد أن تكون جزءاً من قصة نجاحنا القادمة؟
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="inline-block px-8 py-4 bg-gradient-to-r from-gradient-start to-gradient-end text-text-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-gradient-accent/25 transition-all duration-300 cursor-pointer">
              انضم إلينا الآن
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Separate component to properly use hooks
interface TimelineItemProps {
  item: TimelineItem;
  isEven: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isEven }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={advancedVariants.springIn}
      className={`relative flex items-center ${isEven ? 'justify-start' : 'justify-end'}`}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute right-1/2 transform translate-x-1/2 w-6 h-6 bg-gradient-to-r from-gradient-accent to-gradient-end rounded-full border-4 border-background z-10"
        animate={inView ? {
          scale: [1, 1.2, 1],
          boxShadow: [
            "0 0 0 0 rgba(0, 255, 136, 0.4)",
            "0 0 0 10px rgba(0, 255, 136, 0)",
            "0 0 0 0 rgba(0, 255, 136, 0)"
          ]
        } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Content card */}
      <div className={`w-full md:w-5/12 ${isEven ? 'mr-6' : 'ml-6'}`}>
        <FloatingCard className="relative">
          {/* Year badge */}
          <motion.div
            className="absolute -top-3 -left-3 bg-gradient-to-r from-gradient-start to-gradient-end text-text-primary px-4 py-2 rounded-full text-sm font-bold"
            animate={inView ? { scale: [0, 1.1, 1] } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {item.year}
          </motion.div>

          {/* Content */}
          <h3 className="text-2xl font-bold text-text-primary mb-3 mt-4">
            {item.title}
          </h3>
          
          <p className="text-text-secondary mb-4 leading-relaxed">
            {item.description}
          </p>

          {/* Achievements */}
          <ul className="space-y-2">
            {item.achievements.map((achievement, achievementIndex) => (
              <motion.li
                key={achievementIndex}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + achievementIndex * 0.1 }}
                className="flex items-center text-text-secondary text-sm"
              >
                <span className="w-2 h-2 bg-gradient-accent rounded-full mr-3 flex-shrink-0"></span>
                {achievement}
              </motion.li>
            ))}
          </ul>
        </FloatingCard>
      </div>
    </motion.div>
  );
};

export default Timeline;