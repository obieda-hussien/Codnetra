// src/components/layout/AnimatedBackground.tsx
// Purpose: Create an animated gradient background using CSS only for optimal performance.
// We'll use 3D and particle libraries later for specific sections, not for the general background.

import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50">
      <div
        className="absolute inset-0 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end animate-gradient-shift"
        style={{
          backgroundSize: '400% 400%', // Essential for making the animation possible and smooth
        }}
      />
      {/* Semi-transparent overlay to blend colors and add depth */}
      <div className="absolute inset-0 bg-background/80" />
    </div>
  );
};

export default AnimatedBackground;