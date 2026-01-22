import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];
  
  const quickLinks = [
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
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo et description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <Code className="h-6 w-6 sm:h-8 sm:w-8 text-primary-400" />
              <span className="text-lg sm:text-xl font-bold">CodersHub Innovations</span>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Organisation technologique à vocation sociale, valorisant les talents et formant la prochaine génération de leaders technologiques.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, _index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Liens rapides */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Nos Pôles</h3>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">contact@codershub.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-xs sm:text-sm">Paris, France</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-xs sm:text-sm">&copy; {currentYear} CodersHub Innovations. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
