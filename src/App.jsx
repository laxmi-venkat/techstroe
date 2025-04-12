import React from 'react';
import ProductCard from './components/ProductCard';

const sampleProducts = [
  {
    id: 1,
    name: "Visual Studio Code",
    price: "Free",
    image: "https://code.visualstudio.com/assets/apple-touch-icon.png",
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
    name: "Slack",
    price: "Free",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
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

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Tech Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sampleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;