import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { advancedVariants } from '../../lib/animations';
import FloatingCard from '../ui/FloatingCard';
import GlitchText from '../ui/GlitchText';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  specialties: string[];
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
  avatar: string;
}

const TeamShowcase: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "عبيدة حسين",
      role: "Co-Founder & Lead Developer",
      description: "خبير في تطوير التطبيقات الحديثة باستخدام React و Node.js مع شغف بالتقنيات الناشئة",
      specialties: ["React", "Node.js", "TypeScript", "GraphQL"],
      social: {
        github: "https://github.com/obieda-hussien",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      },
      avatar: "👨‍💻"
    },
    {
      name: "شريك التطوير",
      role: "Co-Founder & Technical Architect",
      description: "متخصص في البنية التقنية وتصميم تجارب المستخدم المتميزة والواجهات التفاعلية المبتكرة",
      specialties: ["UI Design", "UX Research", "System Design", "DevOps"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      },
      avatar: "👨‍🎨"
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
            <GlitchText>فريق النخبة</GlitchText>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            تعرف على الأشخاص المبدعين وراء نجاح كودنيترا
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={advancedVariants.staggerParent}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={advancedVariants.staggerChild}
              custom={index}
            >
              <FloatingCard 
                className="h-full text-center group relative overflow-hidden"
                tiltEffect={true}
                tiltMaxAngle={12}
                glowing={false}
              >
                {/* Enhanced background gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-500/10 to-primary-600/10 opacity-0 rounded-lg"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ zIndex: 1 }}
                />

                <div className="relative z-10">
                  {/* Avatar with 3D hover effect */}
                  <motion.div
                    className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-4xl relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 180,
                      boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)"
                    }}
                    transition={{ 
                      duration: 0.6,
                      type: "spring",
                      stiffness: 300
                    }}
                  >
                    {member.avatar}
                    {/* Glowing ring effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary-400 opacity-0"
                      whileHover={{ 
                        opacity: 1,
                        scale: 1.2,
                        boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)"
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Name and Role with enhanced hover */}
                  <motion.h3 
                    className="text-2xl font-bold text-text-primary mb-2 transition-colors"
                    whileHover={{ color: '#2563eb' }}
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-primary-500 font-semibold mb-4">
                    {member.role}
                  </p>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Specialties with stagger animation */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <motion.span
                        key={specialty}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ 
                          delay: 0.1 * specialtyIndex,
                          type: "spring",
                          stiffness: 300
                        }}
                        className="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-400 text-xs rounded-full border border-primary-500/30 hover:border-primary-500/60 transition-all duration-300"
                      >
                        {specialty}
                      </motion.span>
                    ))}
                  </div>

                  {/* Social Links with enhanced animations */}
                  <div className="flex justify-center space-x-4 space-x-reverse">
                    {member.social.github && (
                      <motion.a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white transition-all duration-300"
                        whileHover={{ 
                          y: -5, 
                          scale: 1.1,
                          boxShadow: "0 10px 25px rgba(37, 99, 235, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                      </motion.a>
                    )}
                    
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-accent-600 to-accent-700 rounded-full flex items-center justify-center text-white transition-all duration-300"
                        whileHover={{ 
                          y: -5, 
                          scale: 1.1,
                          boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                      </motion.a>
                    )}
                    
                    {member.social.twitter && (
                      <motion.a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-300"
                        whileHover={{ 
                          y: -5, 
                          scale: 1.1,
                          boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </FloatingCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={advancedVariants.springIn}
          className="text-center mt-16"
        >
          <FloatingCard className="max-w-2xl mx-auto" tiltEffect={true} tiltMaxAngle={8}>
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              هل تريد الانضمام إلى فريقنا؟
            </h3>
            <p className="text-text-secondary mb-6">
              نحن دائماً نبحث عن المواهب المبدعة والشغوفة بالتكنولوجيا
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="inline-block px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 cursor-pointer">
                أرسل سيرتك الذاتية
              </span>
            </motion.div>
          </FloatingCard>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamShowcase;