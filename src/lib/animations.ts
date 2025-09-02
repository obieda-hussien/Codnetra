// src/lib/animations.ts
// Advanced preset configurations for Framer Motion to make animations more natural and vibrant
export const advancedVariants = {
  // For gradual appearance with spring effect
  springIn: {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 15 }
    }
  },
  // For hover effect on cards
  cardHover: {
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0, 255, 136, 0.2)", // Neon shadow
      transition: { type: "spring" as const, stiffness: 300 }
    }
  },
  // For staggered appearance of elements in a list
  staggerParent: {
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  },
  // For individual items in staggered list
  staggerChild: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 120, damping: 15 }
    }
  },
  // For glitch text effect
  glitch: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        repeat: 3,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const
      }
    }
  },
  // For floating animation
  float: {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        ease: "easeInOut" as const,
        repeat: Infinity
      }
    }
  }
};