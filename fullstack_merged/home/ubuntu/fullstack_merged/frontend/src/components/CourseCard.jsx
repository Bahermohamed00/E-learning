import React from "react";
import { Star, Users, Clock, ShoppingCart } from "lucide-react";

export default function CourseCard({
  course,
  user = null,
  cart = [],
  enrolledCourses = [],
  addToCart,
  enrollInCourse,
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {course.category}
          </span>
          <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded">
            {course.level}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {course.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {course.description}
        </p>
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
              {course.rating}
            </span>
          </div>
          <div className="flex items-center ml-4">
            <Users className="h-4 w-4 text-gray-400" />
            <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
              {course.students.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center ml-4">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
              {course.duration}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          by {course.instructor}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ${course.price}
          </span>
          <div className="flex space-x-2">
            {user ? (
              enrolledCourses.includes(course.id) ? (
                <button
                  className="px-4 py-2 rounded-md bg-green-600 text-white cursor-not-allowed"
                  disabled
                >
                  Enrolled
                </button>
              ) : (
                <button
                  onClick={() => addToCart(course.id)}
                  className={`px-4 py-2 rounded-md transition-colors flex items-center space-x-2 ${
                    cart.includes(course.id)
                      ? "bg-yellow-600 text-white"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>{cart.includes(course.id) ? "In Cart" : "Add to Cart"}</span>
                </button>
              )
            ) : (
              <button
                onClick={() => addToCart(course.id)}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Add to Cart</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
