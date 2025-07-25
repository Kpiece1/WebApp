import React from 'react'
import { Clock, Users, Star } from 'lucide-react'

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Coding Math: Where Numbers Meet Robots',
      description: 'Our flagship program combining mathematics, programming, and robotics in a project-based learning experience.',
      instructor: 'Prof. Sarah Johnson',
      duration: '24 weeks',
      students: 1250,
      rating: 4.9,
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      topics: ['Algebra through Programming', 'Geometry with Robots', 'Statistics in Code', 'Calculus Applications']
    },
    {
      id: 2,
      title: 'Robotics Lab',
      description: 'Hands-on robotics experience with Arduino simulations and WebUSB hardware control for real-world applications.',
      instructor: 'Dr. Michael Chen',
      duration: '16 weeks',
      students: 890,
      rating: 4.8,
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=800',
      topics: ['Arduino Programming', 'Sensor Integration', 'Motor Control', 'WebUSB Communication']
    },
    {
      id: 3,
      title: 'Advanced STEM Projects',
      description: 'Complex interdisciplinary projects that combine advanced mathematics, programming, and engineering principles.',
      instructor: 'Dr. Emily Rodriguez',
      duration: '20 weeks',
      students: 456,
      rating: 4.9,
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
      topics: ['Machine Learning', 'Computer Vision', 'Advanced Algorithms', 'Research Methods']
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'Advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Our Courses
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive STEM education programs that blend mathematics, programming, and robotics for an engaging learning experience.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {course.description}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="mr-4">{course.duration}</span>
                  <Users className="h-4 w-4 mr-1" />
                  <span>{course.students} students</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Instructor:</p>
                  <p className="text-sm text-gray-600">{course.instructor}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-900 mb-2">Topics covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses