'use client';

import { motion } from 'framer-motion';
import { FaPuzzlePiece, FaTerminal, FaCog, FaPlay, FaChevronRight } from 'react-icons/fa';
import GradientButton from './GradientButton';

const iconMap = {
  puzzle: FaPuzzlePiece,
  terminal: FaTerminal,
  cog: FaCog,
};

const DashboardCard = ({ item, index }) => {
  const IconComponent = iconMap[item.icon] || FaPlay;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg card-hover border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} text-white`}>
          <IconComponent className="w-6 h-6" />
        </div>
        
        <div className="text-right">
          <div className="text-sm text-gray-500 dark:text-gray-400">{item.category}</div>
          <div className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full mt-1">
            {item.difficulty}
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="text-lg font-rubik font-semibold text-gray-900 dark:text-white mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {item.description}
        </p>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-600 dark:text-gray-300">Progress</span>
          <span className="font-medium text-gray-900 dark:text-white">
            {item.completedLessons}/{item.totalLessons} lessons
          </span>
        </div>
        
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${item.progress}%` }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className={`h-2.5 rounded-full bg-gradient-to-r ${item.color}`}
          />
        </div>
        
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          {item.progress}% complete
        </div>
      </div>
      
      {item.nextLesson && (
        <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Next up:</div>
          <div className="text-sm font-medium text-gray-900 dark:text-white flex items-center">
            {item.nextLesson}
            <FaChevronRight className="w-3 h-3 ml-2 text-gray-400" />
          </div>
        </div>
      )}
      
      <GradientButton 
        variant="primary" 
        size="sm" 
        className="w-full"
        onClick={() => console.log(`Continuing ${item.title}`)}
      >
        <div className="flex items-center justify-center space-x-2">
          <FaPlay className="w-4 h-4" />
          <span>Continue Learning</span>
        </div>
      </GradientButton>
    </motion.div>
  );
};

export default DashboardCard;