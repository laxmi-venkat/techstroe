import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavMenu from './NavMenu';
import AppCard from './AppCard';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-auto relative"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ImageGallery = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Sample app data
  const featuredApps = [
    {
      id: 1,
      icon: "https://code.visualstudio.com/assets/apple-touch-icon.png",
      title: "Visual Studio Code",
      rating: 4.8,
      reviewCount: "2.1M",
      price: "Free",
      developer: "Microsoft Corporation",
      description: "Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop.",
      features: [
        "IntelliSense code completion",
        "Built-in Git commands",
        "Debugging support",
        "Extensions marketplace",
        "Customizable interface"
      ]
    },
    {
      id: 2,
      icon: "https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg",
      title: "Canva",
      rating: 4.9,
      reviewCount: "3.2M",
      price: "Free",
      developer: "Canva Pty Ltd",
      description: "Canva is a graphic design platform that allows users to create social media graphics, presentations, posters, and other visual content.",
      features: [
        "Drag-and-drop interface",
        "Millions of templates",
        "Stock photos and elements",
        "Team collaboration",
        "Brand kit features"
      ]
    }
  ];

  const freeApps = [
    {
      id: 3,
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
      title: "ChatGPT",
      rating: 4.8,
      reviewCount: "2.3M",
      price: "Free",
      developer: "OpenAI",
      description: "Experience the power of AI with ChatGPT - your intelligent conversation partner.",
      features: [
        "Natural language processing",
        "Intelligent responses",
        "24/7 availability",
        "Wide knowledge base",
        "Multiple use cases"
      ]
    },
    {
      id: 4,
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      title: "Netflix",
      rating: 4.9,
      reviewCount: "5.2M",
      price: "Free",
      developer: "Netflix, Inc.",
      description: "Watch award-winning Netflix originals, movies, and TV shows on your device.",
      features: [
        "Personalized recommendations",
        "Multiple profiles",
        "Download for offline",
        "HD streaming",
        "Original content"
      ]
    }
  ];

  const paidApps = [
    {
      id: 5,
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
      title: "Slack",
      rating: 4.7,
      reviewCount: "2.8M",
      price: "$7.99/month",
      developer: "Slack Technologies",
      description: "Connect and collaborate with your team using Slack's powerful messaging platform.",
      features: [
        "Channel-based messaging",
        "File sharing",
        "App integrations",
        "Voice calls",
        "Search functionality"
      ]
    }
  ];

  const handleOpenModal = (app) => {
    console.log('Opening modal for:', app.title);
    setSelectedApp(app);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedApp(null);
  };

  const handleSearch = (query) => {
    const searchTerm = query.toLowerCase();
    
    if (!searchTerm) {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const allApps = [...featuredApps, ...freeApps, ...paidApps];
    const filtered = allApps.filter(app => 
      app.title.toLowerCase().includes(searchTerm) ||
      app.description.toLowerCase().includes(searchTerm) ||
      app.developer.toLowerCase().includes(searchTerm) ||
      app.features.some(feature => feature.toLowerCase().includes(searchTerm))
    );
    setSearchResults(filtered);
  };

  const renderSection = (title, apps) => (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {apps.map(app => (
          <AppCard 
            key={app.id} 
            app={app}
          />
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Tech Store</h1>
          </div>
        </div>
        <NavMenu onSearch={handleSearch} />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {isSearching ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {searchResults.map(app => (
                <AppCard 
                  key={app.id} 
                  app={app}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            {renderSection('Featured Apps', featuredApps)}
            {renderSection('Top Free Apps', freeApps)}
            {renderSection('Popular Apps', paidApps)}
          </>
        )}
      </div>

      {/* Modal with Sticky Header */}
      {isModalOpen && selectedApp && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-auto">
              {/* Sticky Modal Header */}
              <div className="sticky top-0 bg-white rounded-t-lg border-b border-gray-200 p-4 flex items-center justify-between z-10">
                <div className="flex items-center space-x-4">
                  <img src={selectedApp.icon} alt={selectedApp.title} className="w-12 h-12 rounded-lg" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{selectedApp.title}</h3>
                    <p className="text-sm text-gray-500">{selectedApp.developer}</p>
                  </div>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(selectedApp.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">({selectedApp.reviewCount})</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-6">{selectedApp.description}</p>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Features</h4>
                  <ul className="space-y-2">
                    {selectedApp.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {selectedApp.price === 'Free' ? 'Get App' : `Buy Now - ${selectedApp.price}`}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;