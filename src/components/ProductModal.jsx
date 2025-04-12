import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <Transition show={isOpen} as={React.Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-50 overflow-y-auto"
            onClose={onClose}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black/75 backdrop-blur-sm" />
              </Transition.Child>

              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95 translate-y-4"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 translate-y-4"
              >
                <motion.div
                  layoutId={`product-${product.id}`}
                  className="inline-block w-full max-w-2xl p-8 my-8 text-left align-middle bg-white shadow-2xl rounded-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <div className="relative">
                    <button
                      onClick={onClose}
                      className="absolute -right-4 -top-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                    <motion.div 
                      className="aspect-w-16 aspect-h-9 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Dialog.Title
                        as="h3"
                        className="text-2xl font-bold leading-6 text-gray-900 mb-4"
                      >
                        {product.name}
                      </Dialog.Title>

                      <div className="space-y-4">
                        <p className="text-gray-600 leading-relaxed">
                          Experience the future of technology with the {product.name}. 
                          This premium device offers exceptional performance and stunning design.
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <p className="text-3xl font-bold text-gray-900">{product.price}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <span>⭐️ 4.8</span>
                            <span>(120 reviews)</span>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>• Premium build quality</li>
                            <li>• Latest technology integration</li>
                            <li>• Enhanced performance</li>
                            <li>• 1-year warranty included</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button
                          type="button"
                          className="flex-1 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                          Add to Cart
                        </button>
                        <button
                          type="button"
                          className="flex-1 px-6 py-3 text-lg font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                          onClick={onClose}
                        >
                          Continue Shopping
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;