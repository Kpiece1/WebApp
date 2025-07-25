import React from 'react'
import { Users, Target, Lightbulb, Award } from 'lucide-react'

const About = () => {
  const team = [
    {
      name: 'Prof. Sarah Johnson',
      role: 'Founder & Lead Educator',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former MIT professor with 15 years of experience in STEM education and robotics research.'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Robotics Director',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'PhD in Robotics Engineering, specialized in educational robotics and hardware integration.'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Curriculum Designer',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Educational psychology expert focused on project-based learning and STEM engagement.'
    },
    {
      name: 'Alex Thompson',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack developer passionate about creating interactive educational technology platforms.'
    }
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Purpose-Driven Learning',
      description: 'Every lesson connects to real-world applications, showing students why math and programming matter in their daily lives and future careers.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation in Education',
      description: 'We leverage cutting-edge technology like WebUSB and interactive simulations to create engaging, hands-on learning experiences.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaborative Community',
      description: 'Students learn together, share projects, and support each other in a nurturing environment that celebrates curiosity and creativity.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence & Growth',
      description: 'We maintain high standards while meeting students where they are, fostering both academic achievement and personal development.'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              About SATechHub
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing STEM education by bridging the gap between abstract mathematical concepts and tangible, exciting robotics applications.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                At SATechHub, we believe that learning should be engaging, practical, and fun. Our mission is to transform how students experience STEM education by connecting mathematical concepts with hands-on robotics programming.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                We've created a unique learning environment where students can see their mathematical knowledge come to life through code, where abstract equations become the foundation for controlling real robots, and where problem-solving becomes an exciting adventure.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What Makes Us Different:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                    </span>
                    Math-first approach to programming education
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                    </span>
                    Real hardware integration via WebUSB technology
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                    </span>
                    Project-based learning with immediate feedback
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
                    </span>
                    Collaborative online community for peer learning
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students working with robots"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              The principles that guide everything we do at SATechHub
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 text-blue-600">
                    {value.icon}
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Passionate educators and technologists dedicated to transforming STEM education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your STEM journey?</span>
            <span className="block text-blue-200">Join thousands of students already learning with us.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/courses"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get Started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About