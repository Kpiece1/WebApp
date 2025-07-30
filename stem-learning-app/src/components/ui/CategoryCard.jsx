'use client';

import { motion } from 'framer-motion';
import { FaCalculator, FaRobot, FaCode, FaClock, FaBookOpen, FaStar } from 'react-icons/fa';
import GradientButton from './GradientButton';

const iconMap = {
  calculator: FaCalculator,
  robot: FaRobot,
  code: FaCode,
};

const CategoryCard = ({ category, index }) => {
  const IconComponent = iconMap[category.icon] || FaCode;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-2xl p-6 card-hover bg-white dark:bg-gray-800 shadow-lg ${
        category.featured ? 'ring-2 ring-primary-indigo ring-opacity-50' : ''
      }`}
    >
      {category.featured && (
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-1 bg-primary-indigo text-white px-2 py-1 rounded-full text-xs font-medium">
            <FaStar className="w-3 h-3" />
            <span>Featured</span>
          </div>
        </div>
      )}
      
      <div className="mb-4">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} text-white mb-4`}>
          <IconComponent className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-rubik font-semibold text-gray-900 dark:text-white mb-2">
          {category.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {category.description}
        </p>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
            <FaBookOpen className="w-4 h-4" />
            <span>{category.lessons} lessons</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
            <FaClock className="w-4 h-4" />
            <span>{category.estimatedTime}</span>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 dark:text-gray-400">
          <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            {category.difficulty}
          </span>
        </div>
      </div>
      
      <GradientButton 
        variant="primary" 
        size="sm" 
        className="w-full"
        onClick={() => console.log(`Starting ${category.title}`)}
      >
        Start Learning
      </GradientButton>
    </motion.div>
  );
};

export default CategoryCard;