import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
              <a href="/" className="hover:opacity-80 transition-opacity">HealMaze</a>
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/services" className="text-gray-800 hover:text-rose-600 transition-colors font-medium">Services</a>
            <a href="/resources" className="text-gray-800 hover:text-rose-600 transition-colors font-medium">Resources</a>
            <a href="/booking" className="text-gray-800 hover:text-rose-600 transition-colors font-medium">Book Consultation</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
