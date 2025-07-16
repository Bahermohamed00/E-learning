import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  BookOpen,
  Users,
  Award,
  Heart
} from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Courses', page: 'courses' },
    { name: 'About Us', page: 'about' },
    { name: 'Contact', page: 'contact' }
  ];

  const courseCategories = [
    'Web Development',
    'Data Science',
    'Mobile Development',
    'UI/UX Design',
    'Digital Marketing'
  ];

  const supportLinks = [
    'Help Center',
    'Student Support',
    'Technical Support',
    'Course Certificates',
    'Refund Policy'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-lg p-2 mr-3">
                <BookOpen className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold">IEEE Learning</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering minds through innovative education and cutting-edge technology courses. 
              Join thousands of students who have transformed their careers with us.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-blue-400 mr-3" />
                <span className="text-gray-300">01091703235</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-blue-400 mr-3" />
                <span className="text-gray-300">support@ieeelearning.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-blue-400 mr-3" />
                <span className="text-gray-300">Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage(link.page)}
                    className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 mt-8">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Course Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              {courseCategories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => setCurrentPage('courses')}
                    className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest courses and updates.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="bg-gray-800 hover:bg-blue-600 p-2 rounded-md transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-blue-400 p-2 rounded-md transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-pink-600 p-2 rounded-md transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-blue-700 p-2 rounded-md transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="bg-gray-800 hover:bg-red-600 p-2 rounded-md transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-2xl font-bold text-blue-400">10,000+</span>
              </div>
              <p className="text-gray-400 text-sm">Active Students</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-2xl font-bold text-green-400">500+</span>
              </div>
              <p className="text-gray-400 text-sm">Quality Courses</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Award className="h-5 w-5 text-purple-400 mr-2" />
                <span className="text-2xl font-bold text-purple-400">50+</span>
              </div>
              <p className="text-gray-400 text-sm">Expert Instructors</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-2xl font-bold text-red-400">95%</span>
              </div>
              <p className="text-gray-400 text-sm">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} IEEE Learning. All rights reserved. Made with{' '}
              <Heart className="inline h-4 w-4 text-red-500 mx-1" />
              for learners worldwide.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

