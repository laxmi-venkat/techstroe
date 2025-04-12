import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductModal = ({ product, isOpen, onClose, layoutId }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div 
            layoutId={layoutId}
            className="bg-white rounded-lg shadow-xl w-[300px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -right-2 -top-2 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <svg
                className="w-4 h-4 text-gray-600"
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
            
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h2 className="text-white font-semibold">{product.name}</h2>
                <p className="text-white/90 text-sm">{product.price}</p>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-3">
                <p className="text-xs text-gray-600 leading-relaxed">{product.description}</p>
              </div>
              
              <div>
                <h3 className="text-xs font-semibold text-gray-900 mb-1">Features:</h3>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {product.features?.map((feature, index) => (
                    <div key={index} className="flex items-start gap-1">
                      <svg className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-1.5 px-3 rounded mt-3 text-xs font-medium hover:bg-blue-700 transition duration-200">
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ProductGrid = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleProductClick = (product, id) => {
    setSelectedProduct(product);
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setSelectedId(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            layoutId={`product-${product.id}`}
            className="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
            onClick={() => handleProductClick(product, `product-${product.id}`)}
          >
            <div className="relative aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2">
              <h3 className="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
              <p className="text-sm font-bold text-gray-900">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        layoutId={selectedId}
      />
    </>
  );
};

export default ProductGrid;