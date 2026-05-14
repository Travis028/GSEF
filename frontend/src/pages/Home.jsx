import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Empowering Somali Entrepreneurs</h1>
          <p className="text-xl mb-8">Join innovators, investors & leaders shaping the future</p>
          <Link to="/events" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">
            Explore Events
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Welcome to GSEF</h2>
        <p className="text-center text-gray-600">Your platform for global Somali entrepreneurship</p>
      </div>
    </div>
  );
};

export default Home;
