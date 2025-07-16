import React from 'react';
import CourseCard from './CourseCard';
import { Search } from 'lucide-react';

const CoursesPage = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  filteredCourses,
  user,
  cart,
  enrolledCourses,
  addToCart,
  enrollInCourse
}) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">All Courses</h1>

        {/* Search & Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            <option value="all">All Categories</option>
            <option value="web-development">Web Development</option>
            <option value="data-science">Data Science</option>
            <option value="mobile-development">Mobile Development</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
          </select>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                user={user}
                cart={cart}
                enrolledCourses={enrolledCourses}
                addToCart={addToCart}
                enrollInCourse={enrollInCourse}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400 py-10">
              No courses found. Try adjusting your search or filter.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;