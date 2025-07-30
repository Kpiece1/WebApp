'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaPlay, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GradientButton from '@/components/ui/GradientButton';
import CategoryCard from '@/components/ui/CategoryCard';
import categoriesData from '@/data/categories.json';

export default function Home() {
  const { categories } = categoriesData;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-rubik font-bold mb-6">
                <span className="gradient-text">Coding Math:</span>
                <br />
                <span className="text-gray-900 dark:text-white">
                  Where Numbers Meet Robots
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Empower young minds with interactive STEM education that makes learning 
                programming, mathematics, and robotics an exciting adventure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link href="/auth/signup">
                <GradientButton 
                  variant="primary" 
                  size="lg"
                  className="flex items-center space-x-2"
                >
                  <FaPlay className="w-5 h-5" />
                  <span>Try Free Demo</span>
                </GradientButton>
              </Link>
              
              <Link href="#courses">
                <GradientButton 
                  variant="secondary" 
                  size="lg"
                  className="flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <FaChevronRight className="w-4 h-4" />
                </GradientButton>
              </Link>
            </motion.div>

            {/* Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative mx-auto max-w-4xl"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Math Code Block */}
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white">
                    <div className="text-sm font-mono mb-2">function calculateArea() {`{`}</div>
                    <div className="text-sm font-mono mb-2 ml-4">return Math.PI * r * r;</div>
                    <div className="text-sm font-mono">{`}`}</div>
                    <div className="mt-4 text-xs opacity-75">Mathematical Programming</div>
                  </div>
                  
                  {/* Robot Icon */}
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white flex flex-col items-center justify-center">
                    <FaRocket className="w-12 h-12 mb-2 animate-bounce-slow" />
                    <div className="text-sm font-medium">Interactive Robotics</div>
                  </div>
                  
                  {/* Python Code */}
                  <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-6 text-white">
                    <div className="text-sm font-mono mb-2">for i in range(10):</div>
                    <div className="text-sm font-mono mb-2 ml-4">print(f&quot;Step {`{i}`}&quot;)</div>
                    <div className="text-sm font-mono ml-4">move_robot()</div>
                    <div className="mt-4 text-xs opacity-75">Python Playground</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="courses" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-rubik font-bold text-gray-900 dark:text-white mb-6">
              Choose Your Learning Adventure
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our interactive courses designed to make STEM education engaging, 
              fun, and accessible for learners of all ages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard 
                key={category.id} 
                category={category} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-rubik font-bold text-gray-900 dark:text-white mb-6">
              Why Choose STEM-Learn?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Interactive Learning',
                description: 'Hands-on coding exercises and visual programming tools that make learning engaging.',
                icon: '🎮',
                color: 'from-blue-500 to-indigo-600'
              },
              {
                title: 'Real-world Projects',
                description: 'Build actual robots and solve mathematical problems through programming.',
                icon: '🤖',
                color: 'from-purple-500 to-pink-600'
              },
              {
                title: 'Progressive Curriculum',
                description: 'Structured learning path from basic concepts to advanced programming.',
                icon: '📈',
                color: 'from-green-500 to-teal-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg card-hover"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-rubik font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-indigo via-primary-purple to-primary-pink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-rubik font-bold text-white mb-6">
              Ready to Start Your STEM Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of young learners already exploring the exciting world of coding and robotics.
            </p>
            <Link href="/auth/signup">
              <GradientButton 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary-indigo hover:bg-gray-100"
              >
                Get Started for Free
              </GradientButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
