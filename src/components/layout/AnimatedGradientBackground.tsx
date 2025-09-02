import React from 'react';

const AnimatedGradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-50">
      <div 
        className="absolute inset-0 bg-animated-gradient animate-gradient-shift opacity-30 blur-3xl"
        style={{ backgroundSize: '400% 400%' }} 
      />
      {/* طبقة إضافية لضمان أن الخلفية الأساسية هي اللون الغامق الرئيسي */}
      <div className="absolute inset-0 bg-dark-background" />
    </div>
  );
};

export default AnimatedGradientBackground;