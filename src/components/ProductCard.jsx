import React, { useState } from 'react';
import Popup from './Popup';

const ProductCard = ({ product }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => setIsPopupOpen(true)}
      >
        <div className="aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
          <p className="text-sm font-bold text-gray-900">{product.price}</p>
        </div>
      </div>

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        title={product.name}
      >
        <div className="space-y-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="space-y-2">
            <p className="text-gray-600">{product.description}</p>
            <div className="space-y-1">
              {product.features?.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default ProductCard; 