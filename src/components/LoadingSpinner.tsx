import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{backgroundColor: '#f5f2e8'}}>
      <div className="relative">
        <div className="w-16 h-16 border-4 border-opacity-30 rounded-full animate-spin" style={{borderColor: '#b09e7e', borderTopColor: '#3d3629'}}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="/blue_bird_clean_transparent.png" 
            alt="Blue Bird" 
            className="w-8 h-8 object-contain opacity-60"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;