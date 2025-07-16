import React from 'react';
import { ShoppingCart, Sun, Moon, User, LogOut } from 'lucide-react';

const Header = ({ 
  currentPage, 
  setCurrentPage, 
  toggleDarkMode, 
  darkMode, 
  user, 
  cart, 
  setIsMenuOpen, 
  isMenuOpen, 
  handleLogout 
}) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">IEEE Learning</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setCurrentPage('home')} 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('courses')} 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'courses' 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Courses
            </button>
            <button 
              onClick={() => setCurrentPage('about')} 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'about' 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => setCurrentPage('contact')} 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'contact' 
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Cart button */}
            {user && (
              <button
                onClick={() => setCurrentPage('cart')}
                className="relative p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <ShoppingCart size={20} />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            )}

            {/* User menu */}
            {user ? (
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <User size={20} />
                  <span className="hidden sm:inline text-sm">{user.username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setCurrentPage('login')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
              <button 
                onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => { setCurrentPage('courses'); setIsMenuOpen(false); }} 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 w-full text-left"
              >
                Courses
              </button>
              <button 
                onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }} 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 w-full text-left"
              >
                Contact
              </button>
              {user && (
                <button 
                  onClick={() => { setCurrentPage('cart'); setIsMenuOpen(false); }} 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 w-full text-left"
                >
                  Cart ({cart.length})
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

