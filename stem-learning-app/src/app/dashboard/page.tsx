'use client';

import { motion } from 'framer-motion';
import { FaFire, FaTrophy, FaCalendar, FaChartLine } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DashboardCard from '@/components/ui/DashboardCard';
import dashboardData from '@/data/dashboard-items.json';

export default function Dashboard() {
  const { dashboardItems, user } = dashboardData;

  const stats = [
    {
      label: 'Learning Streak',
      value: `${user.streak} days`,
      icon: FaFire,
      color: 'from-orange-400 to-red-500'
    },
    {
      label: 'Total Progress',
      value: `${user.totalProgress}%`,
      icon: FaChartLine,
      color: 'from-green-400 to-blue-500'
    },
    {
      label: 'Badges Earned',
      value: user.badges.length,
      icon: FaTrophy,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      label: 'This Week',
      value: '12 hrs',
      icon: FaCalendar,
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar user={user} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h1 className="text-2xl sm:text-3xl font-rubik font-bold text-gray-900 dark:text-white mb-2">
                  Welcome back, {user.name}! 👋
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Ready to continue your STEM learning journey? Let&apos;s build something amazing today!
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-indigo to-primary-purple rounded-full flex items-center justify-center text-white text-lg font-bold">
                  {user.name[0]}
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Student</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-rubik font-bold text-gray-900 dark:text-white">
              Your Learning Modules
            </h2>
            <button className="text-primary-indigo hover:text-primary-purple font-medium text-sm">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardItems.map((item, index) => (
              <DashboardCard 
                key={item.id} 
                item={item} 
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-rubik font-semibold text-gray-900 dark:text-white mb-4">
              Your Achievements 🏆
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {user.badges.map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                >
                  {badge}
                </motion.div>
              ))}
              
              <div className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-4 py-2 rounded-full text-sm font-medium border-2 border-dashed border-gray-300 dark:border-gray-600">
                + More to unlock
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-primary-indigo via-primary-purple to-primary-pink rounded-2xl p-6 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-rubik font-bold mb-2">
                  Keep the momentum going! 🚀
                </h3>
                <p className="text-white/90">
                  You&apos;re doing great! Complete one more lesson today to maintain your streak.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-white text-primary-indigo px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                  Continue Learning
                </button>
                <button className="bg-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors duration-200">
                  Explore New Topics
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}