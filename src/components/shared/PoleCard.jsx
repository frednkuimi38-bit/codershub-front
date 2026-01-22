import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Lightbulb, Target, Network, Briefcase, Rocket, Brush, Settings } from 'lucide-react';
import Card from './Card.jsx';

const PoleCard = ({ pole, index }) => {
  const iconMap = {
    Code,
    FlaskConical: Lightbulb,
    Target,
    Network,
    Briefcase,
    Rocket,
    Brush,
    Settings
  };

  const IconComponent = iconMap[pole.icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group"
    >
      <Link to={pole.path}>
        <Card className="h-full hover:shadow-2xl cursor-pointer border-2 border-transparent group-hover:border-primary-200 transition-all duration-300 p-4 sm:p-6">
          <div className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-${pole.color}-100 rounded-full mb-4 sm:mb-6 mx-auto transition-transform duration-300 group-hover:scale-110`}>
            <IconComponent className={`h-6 w-6 sm:h-8 sm:w-8 text-${pole.color}-600`} />
          </div>
          
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
            {pole.name}
          </h3>
          
          <p className="text-sm sm:text-base text-gray-600 text-center mb-3 sm:mb-4 line-clamp-2">
            {pole.title}
          </p>
          
          <p className="text-xs sm:text-sm text-gray-500 text-center mb-4 sm:mb-6 line-clamp-3">
            {pole.description}
          </p>
          
          <div className="flex items-center justify-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors text-sm sm:text-base">
            <span>Explorer ce pôle</span>
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default PoleCard;
