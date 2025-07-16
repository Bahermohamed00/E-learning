import React from 'react';
import CourseCard from './CourseCard';
import { ArrowRight, BookOpen, Users, Award, Star, TrendingUp, Globe } from 'lucide-react';

const HomePage = ({ courses, setCurrentPage }) => {
  // Get featured courses (first 6 courses)
  const featuredCourses = courses.slice(0, 6);
  
  // Get popular categories
  const categories = [
    {
      name: 'Web Development',
      icon: '💻',
      description: 'Build modern websites and web applications',
      courseCount: courses.filter(c => c.category === 'web-development').length
    },
    {
      name: 'Data Science',
      icon: '📊',
      description: 'Analyze data and build machine learning models',
      courseCount: courses.filter(c => c.category === 'data-science').length
    },
    {
      name: 'Mobile Development',
      icon: '📱',
      description: 'Create mobile apps for iOS and Android',
      courseCount: courses.filter(c => c.category === 'mobile-development').length
    },
    {
      name: 'Design',
      icon: '🎨',
      description: 'Master UI/UX and graphic design',
      courseCount: courses.filter(c => c.category === 'design').length
    },
    {
      name: 'Marketing',
      icon: '📈',
      description: 'Learn digital marketing strategies',
      courseCount: courses.filter(c => c.category === 'marketing').length
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Learn. Grow. <span className="text-yellow-300">Excel.</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Master in-demand skills with our comprehensive online courses. 
                Join thousands of students who have transformed their careers with IEEE Learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setCurrentPage('courses')}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">10,000+</div>
                    <div className="text-gray-200">Happy Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-gray-200">Expert Courses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-gray-200">Industry Experts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-gray-200">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose IEEE Learning?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide world-class education with practical, hands-on learning experiences 
              designed to help you succeed in today's competitive job market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Expert-Led Courses</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn from industry professionals with years of real-world experience. 
                Our instructors bring practical insights that you won't find in textbooks.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Community Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Join a vibrant community of learners. Collaborate, share knowledge, 
                and build lasting professional relationships with peers worldwide.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Industry Certificates</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Earn recognized certificates that validate your skills and boost your career prospects. 
                Add them to your LinkedIn profile and resume.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Popular Categories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Explore our most popular course categories and find the perfect path for your career growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{category.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {category.courseCount} courses
                  </span>
                  <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            ))}
            
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white">
              <Globe className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">More Categories</h3>
              <p className="mb-4">Discover additional specialized courses and emerging technologies.</p>
              <button 
                onClick={() => setCurrentPage('courses')}
                className="text-sm font-semibold hover:underline flex items-center"
              >
                View All <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Handpicked courses from our most popular and highly-rated selections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('courses')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-lg">Students Enrolled</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Courses Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real success stories from our amazing community of learners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "IEEE Learning transformed my career! The courses are practical, engaging, 
                and taught by industry experts. I landed my dream job within 3 months of completing the program."
              </p>
              <div className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "The data science course exceeded my expectations. The hands-on projects 
                and real-world applications made complex concepts easy to understand and apply."
              </p>
              <div className="font-semibold text-gray-900 dark:text-white">Michael Chen</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Data Scientist</div>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "Amazing platform with excellent support. The mobile development course 
                helped me build my first app, which now has over 10,000 downloads!"
              </p>
              <div className="font-semibold text-gray-900 dark:text-white">Emily Rodriguez</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Mobile Developer</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of students who have already transformed their careers. 
            Your future starts with the next course you take.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('courses')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Start Learning Today
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;