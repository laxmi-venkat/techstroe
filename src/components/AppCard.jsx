import React, { useState } from 'react';

const AppCard = ({ app }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative">
      <div 
        className="flex flex-col bg-white rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
      >
        <div className="w-14 h-14 mx-auto mb-2">
          <img
            src={app.icon}
            alt={app.title}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <h3 className="text-xs font-medium text-gray-900 text-center line-clamp-2 mb-1">{app.title}</h3>
        <p className="text-xs text-gray-600 text-center">{app.price}</p>
      </div>

      {/* Simple hover popup */}
      {showDetails && (
        <div 
          className="absolute z-50 bg-white rounded-md shadow-md w-48 p-2 left-1/2 -translate-x-1/2"
          style={{ 
            top: 'calc(100% + 4px)',
          }}
          onMouseEnter={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
        >
          <p className="text-xs text-gray-600 leading-relaxed">{app.description}</p>
        </div>
      )}
    </div>
  );
};

export default AppCard; 