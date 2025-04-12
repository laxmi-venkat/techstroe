import React from 'react';

const NavBar = ({ onClose }) => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between h-[60px]">
        <h1 className="text-[24px] font-semibold text-[#1d1d1f] pl-7">Tech Store</h1>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors mr-7"
        >
          <svg
            className="w-5 h-5 text-gray-400 hover:text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavBar; 