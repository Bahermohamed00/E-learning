import React from 'react';
import { BookOpen, Users, Award, Target, Heart, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About IEEE Learning</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering minds through innovative education and cutting-edge technology courses
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                At IEEE Learning, we believe that education is the cornerstone of innovation and progress. 
                Our mission is to provide world-class, accessible, and practical education that empowers 
                individuals to excel in the rapidly evolving technology landscape.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We are committed to bridging the gap between academic knowledge and industry requirements, 
                ensuring our students are not just educated but are industry-ready professionals who can 
                make meaningful contributions to their fields.
              </p>
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-blue-600" />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  Excellence in Education
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                  <div className="text-gray-600 dark:text-gray-300">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600 dark:text-gray-300">Courses Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-300">Expert Instructors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                  <div className="text-gray-600 dark:text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quality Education</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are committed to delivering high-quality, comprehensive courses that meet industry standards 
                and exceed student expectations. Every course is carefully crafted by experts in their respective fields.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Community Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learning is a collaborative journey. We foster a supportive community where students can 
                interact, share knowledge, and grow together. Our forums and study groups create lasting connections.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We strive for excellence in everything we do. From course content to student support, 
                we maintain the highest standards to ensure our students receive the best possible learning experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <Globe className="h-12 w-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Global Reach, Local Impact</h3>
              <p className="text-lg mb-4">
                Founded with the vision of making quality education accessible to everyone, IEEE Learning 
                has grown from a small initiative to a global platform serving students worldwide.
              </p>
              <p className="text-lg">
                Our courses are designed to be culturally inclusive and globally relevant, ensuring that 
                students from all backgrounds can benefit from our educational offerings.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                IEEE Learning was born from a simple yet powerful idea: that everyone deserves access to 
                high-quality, practical education that can transform their career and life. What started 
                as a small group of passionate educators has evolved into a comprehensive learning platform 
                trusted by thousands of students worldwide.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our journey began in 2020 when we recognized the growing gap between traditional education 
                and the rapidly changing demands of the technology industry. We set out to create courses 
                that are not only academically rigorous but also immediately applicable in real-world scenarios.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Today, we continue to innovate and expand our offerings, always keeping our students' 
                success at the heart of everything we do. Every milestone we achieve is a testament to 
                the trust our students place in us and the dedication of our incredible team of instructors.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Why Choose IEEE Learning?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-6 mb-4">
                <BookOpen className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Expert Instructors</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn from industry professionals with years of real-world experience
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-lg p-6 mb-4">
                <Users className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Flexible Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Study at your own pace with lifetime access to course materials
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-6 mb-4">
                <Award className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Certificates</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Earn industry-recognized certificates upon course completion
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 rounded-lg p-6 mb-4">
                <Heart className="h-12 w-12 text-orange-600 dark:text-orange-400 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get help whenever you need it with our dedicated support team
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers with IEEE Learning. 
            Your future starts with the next course you take.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

