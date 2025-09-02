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
      name: "أحمد محمد",
      role: "مطور Full-Stack",
      description: "خبير في تطوير التطبيقات الحديثة باستخدام React و Node.js مع شغف بالتقنيات الناشئة",
      specialties: ["React", "Node.js", "TypeScript", "GraphQL"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      },
      avatar: "👨‍💻"
    },
    {
      name: "سارة علي",
      role: "مصممة UI/UX",
      description: "متخصصة في تصميم تجارب المستخدم المتميزة والواجهات التفاعلية المبتكرة",
      specialties: ["UI Design", "UX Research", "Figma", "Prototyping"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      },
      avatar: "👩‍🎨"
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
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={advancedVariants.staggerChild}
            >
              <FloatingCard className="h-full text-center group relative overflow-hidden">
                {/* Background gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gradient-start/10 via-gradient-mid/10 to-gradient-end/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ zIndex: 1 }}
                />

                <div className="relative z-10">
                  {/* Avatar */}
                  <motion.div
                    className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gradient-start to-gradient-end rounded-full flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {member.avatar}
                  </motion.div>

                  {/* Name and Role */}
                  <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gradient-accent font-semibold mb-4">
                    {member.role}
                  </p>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <motion.span
                        key={specialty}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * specialtyIndex }}
                        className="px-3 py-1 bg-gradient-to-r from-gradient-accent/20 to-gradient-end/20 text-text-accent text-xs rounded-full border border-gradient-accent/30"
                      >
                        {specialty}
                      </motion.span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 space-x-reverse">
                    {member.social.github && (
                      <motion.a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gradient-to-br from-gradient-start to-gradient-mid rounded-full flex items-center justify-center text-text-primary hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-gradient-accent/25"
                        whileHover={{ y: -3 }}
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
                        className="w-10 h-10 bg-gradient-to-br from-gradient-mid to-gradient-end rounded-full flex items-center justify-center text-text-primary hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-gradient-accent/25"
                        whileHover={{ y: -3 }}
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
                        className="w-10 h-10 bg-gradient-to-br from-gradient-end to-gradient-accent rounded-full flex items-center justify-center text-text-primary hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-gradient-accent/25"
                        whileHover={{ y: -3 }}
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
          <FloatingCard className="max-w-2xl mx-auto">
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
              <span className="inline-block px-8 py-3 bg-gradient-to-r from-gradient-start to-gradient-end text-text-primary font-semibold rounded-lg hover:shadow-lg hover:shadow-gradient-accent/25 transition-all duration-300 cursor-pointer">
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