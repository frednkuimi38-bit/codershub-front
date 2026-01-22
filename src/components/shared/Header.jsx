import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';

const Header = ({ currentPole = null }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  
  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'DevCore', path: '/devcore' },
    { name: 'HubLabs', path: '/hublabs' },
    { name: 'Skilldera', path: '/skilldera' },
    { name: 'HubConnect', path: '/hubconnect' },
    { name: 'HubWorks', path: '/hubworks' },
    { name: 'Techspire', path: '/techspire' },
    { name: 'DesignHub', path: '/designhub' },
    { name: 'OpsDesk', path: '/opsdesk' }
  ];
  
  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-lg ${isHomePage ? 'bg-white/80' : 'bg-white/90'} border-b border-gray-200`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <Code className="h-8 w-8 text-primary-600" />
            </motion.div>
            <span className="text-xl font-bold gradient-text">CodersHub</span>
            {currentPole && (
              <span className="text-sm text-gray-500">/ {currentPole.name}</span>
            )}
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path 
                    ? 'text-primary-600' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path 
                    ? 'text-primary-600' 
                    : 'text-gray-700 hover:text-primary-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
