import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';

const CartPage = ({ cart, courses, removeFromCart, enrollFromCart, setCurrentPage }) => {
  const cartCourses = cart.map(courseId => courses.find(c => c.id === courseId));
  const total = cartCourses.reduce((sum, course) => sum + course.price, 0);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Add some courses to get started</p>
            <button
              onClick={ ()=> setCurrentPage('courses')}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
            >
              Browse Courses
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cartCourses.map(course => (
                <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img src={course.image} alt={course.title} className="w-20 h-20 object-cover rounded" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{course.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">by {course.instructor}</p>
                        <div className="flex items-center mt-1">
                          <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">{course.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-xl font-bold text-blue-600 dark:text-blue-400">${course.price}</span>
                      <button
                        onClick={() => removeFromCart(course.id)}
                        className="text-red-600 hover:text-red-700 p-2"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Order Summary</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Subtotal ({cart.length} items)</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between font-bold text-gray-900 dark:text-white">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentPage('checkout')}
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-semibold"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
