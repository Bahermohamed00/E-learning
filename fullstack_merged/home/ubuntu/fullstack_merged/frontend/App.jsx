import React, { useState, useEffect } from 'react';
import Header from './src/components/Header';
import HomePage from './src/components/HomePage';
import CoursesPage from './src/components/CoursesPage';
import CartPage from './src/components/CartPage';
import CheckoutPage from './src/components/CheckoutPage';
import AboutPage from './src/components/AboutPage';
import ContactPage from './src/components/ContactPage';
import LoginPage from './src/components/LoginPage';
import Footer from './src/components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Check authentication status on app load
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth/check', {
        credentials: 'include'
      });
      const data = await response.json();
      
      if (data.authenticated) {
        setUser(data.user);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  // Sample course data
const courses = [
  // Web Development
  {
    id: 1,
    title: 'Web Development Bootcamp',
    description: 'Learn to build websites from scratch using HTML, CSS, JavaScript, and React.',
    image: './src/assets/images/web-development-bootcamp.jpg',
    category: 'web-development',
    level: 'Beginner',
    rating: 4.5,
    students: 150,
    duration: '30 hours',
    instructor: 'John Doe',
    price: 99
  },
  {
    id: 2,
    title: 'React Masterclass',
    description: 'Learn to build dynamic UIs with React, Hooks, and Context API.',
    image: './src/assets/images/react-masterclass.jpg',
    category: 'web-development',
    level: 'Intermediate',
    rating: 4.6,
    students: 210,
    duration: '25 hours',
    instructor: 'Sarah Lee',
    price: 129
  },
  {
    id: 3,
    title: 'Full Stack Development with Node.js',
    description: 'Build complete web apps using Express, MongoDB, and REST APIs.',
    image: './src/assets/images/fullstack-nodejs.png',
    category: 'web-development',
    level: 'Advanced',
    rating: 4.7,
    students: 180,
    duration: '40 hours',
    instructor: 'Michael Chen',
    price: 199
  },

  // Data Science
  {
    id: 4,
    title: 'Data Science with Python',
    description: 'Master data analysis and visualization using Python and Pandas.',
    image: './src/assets/images/data-science-python.png',
    category: 'data-science',
    level: 'Intermediate',
    rating: 4.7,
    students: 200,
    duration: '40 hours',
    instructor: 'Jane Smith',
    price: 149
  },
  {
    id: 5,
    title: 'Intro to Machine Learning',
    description: 'Understand the basics of ML and implement real-world projects.',
    image: './src/assets/images/machine-learning.png',
    category: 'data-science',
    level: 'Intermediate',
    rating: 4.6,
    students: 320,
    duration: '35 hours',
    instructor: 'Dr. Emily White',
    price: 179
  },

  // Mobile Development
  {
    id: 6,
    title: 'Mobile App Development',
    description: 'Create mobile applications for iOS and Android using React Native.',
    image: './src/assets/images/mobile-app-development.png',
    category: 'mobile-development',
    level: 'Advanced',
    rating: 4.8,
    students: 300,
    duration: '50 hours',
    instructor: 'Alice Johnson',
    price: 199
  },
  {
    id: 7,
    title: 'Flutter for Beginners',
    description: 'Learn to build beautiful mobile apps using Flutter and Dart.',
    image: './src/assets/images/flutter-beginners.webp',
    category: 'mobile-development',
    level: 'Beginner',
    rating: 4.5,
    students: 400,
    duration: '45 hours',
    instructor: 'David Kim',
    price: 139
  },

  // Design
  {
    id: 8,
    title: 'UI/UX Design Fundamentals',
    description: 'Master user interface and experience design principles.',
    image: './src/assets/images/ui-ux-design.jpeg',
    category: 'design',
    level: 'Beginner',
    rating: 4.4,
    students: 250,
    duration: '20 hours',
    instructor: 'Linda Park',
    price: 89
  },
  {
    id: 9,
    title: 'Figma for UI Design',
    description: 'Learn how to design responsive websites using Figma.',
    image: './src/assets/images/figma-ui-design.jpg',
    category: 'design',
    level: 'Intermediate',
    rating: 4.6,
    students: 180,
    duration: '15 hours',
    instructor: 'Chris Evans',
    price: 79
  },

  // Marketing
  {
    id: 10,
    title: 'Digital Marketing for Beginners',
    description: 'Start your journey in digital marketing with SEO, SEM, and social media.',
    image: './src/assets/images/digital-marketing.jpg',
    category: 'marketing',
    level: 'Beginner',
    rating: 4.3,
    students: 500,
    duration: '25 hours',
    instructor: 'Rachel Green',
    price: 69
  },
  {
    id: 11,
    title: 'Advanced SEO Strategies',
    description: 'Master advanced SEO techniques to grow organic traffic.',
    image: './src/assets/images/advanced-seo.png',
    category: 'marketing',
    level: 'Advanced',
    rating: 4.7,
    students: 120,
    duration: '20 hours',
    instructor: 'Mark Thompson',
    price: 119
  },

  // Additional Courses
  {
    id: 12,
    title: 'Python for Data Analysis',
    description: 'Learn how to use Python for analyzing and visualizing data.',
    image: './src/assets/images/python-data-analysis.jpg',
    category: 'data-science',
    level: 'Intermediate',
    rating: 4.5,
    students: 270,
    duration: '30 hours',
    instructor: 'Daniel Wong',
    price: 129
  },
  {
    id: 13,
    title: 'Graphic Design for Beginners',
    description: 'Learn the fundamentals of Adobe Photoshop and Illustrator.',
    image: './src/assets/images/graphic-design.jpg',
    category: 'design',
    level: 'Beginner',
    rating: 4.4,
    students: 350,
    duration: '20 hours',
    instructor: 'Olivia Moore',
    price: 99
  },
  {
    id: 14,
    title: 'Social Media Marketing',
    description: 'Create powerful campaigns on Facebook, Instagram, and LinkedIn.',
    image: './src/assets/images/social-media-marketing.jpg',
    category: 'marketing',
    level: 'Intermediate',
    rating: 4.5,
    students: 410,
    duration: '22 hours',
    instructor: 'Sophia Lee',
    price: 89
  },
  {
    id: 15,
    title: 'Advanced JavaScript Concepts',
    description: 'Deep dive into closures, async programming, and ES6+ features.',
    image: './src/assets/images/advanced-javascript.png',
    category: 'web-development',
    level: 'Advanced',
    rating: 4.8,
    students: 190,
    duration: '20 hours',
    instructor: 'Lisa Thompson',
    price: 49.99
  }
];
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Filter courses based on search and category
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Authentication functions
  const handleLogin = (userData) => {
    setUser(userData);
    setError('');
  };

  const handleSignup = (userData) => {
    setUser(userData);
    setError('');
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      setUser(null);
      setEnrolledCourses([]);
      setCart([]);
      setCurrentPage('home');
    } catch (error) {
      console.error('Logout failed:', error);
      // Still clear local state even if API call fails
      setUser(null);
      setEnrolledCourses([]);
      setCart([]);
      setCurrentPage('home');
    }
  };

  // Cart functions
  const addToCart = (courseId) => {
    if (!cart.includes(courseId) && !enrolledCourses.includes(courseId)) {
      setCart([...cart, courseId]);
    }
  };

  const removeFromCart = (courseId) => {
    setCart(cart.filter(id => id !== courseId));
  };

  const enrollInCourse = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      removeFromCart(courseId);
    }
  };

  const enrollFromCart = () => {
    setEnrolledCourses([...enrolledCourses, ...cart]);
    setCart([]);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        toggleDarkMode={toggleDarkMode} 
        darkMode={darkMode} 
        user={user} 
        cart={cart} 
        setIsMenuOpen={setIsMenuOpen} 
        isMenuOpen={isMenuOpen} 
        handleLogout={handleLogout} // Pass handleLogout to Header
      />
      {currentPage === 'home' && <HomePage courses={courses} setCurrentPage={setCurrentPage} />}
      {currentPage === 'courses' && (
        <CoursesPage 
          courses={courses} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
          filteredCourses={filteredCourses} 
          user={user} 
          cart={cart} 
          enrolledCourses={enrolledCourses} 
          addToCart={addToCart} 
        />
      )}
      {currentPage === 'cart' && (
        <CartPage 
          cart={cart} 
          courses={courses} 
          removeFromCart={removeFromCart} 
          setCurrentPage={setCurrentPage} 
        />
      )}
      {currentPage === 'checkout' && (
        <CheckoutPage 
          cart={cart} 
          courses={courses} 
          setCurrentPage={setCurrentPage} 
          enrollFromCart={enrollFromCart} 
        />
      )}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      {currentPage === 'login' && (
        <LoginPage 
          handleLogin={handleLogin} 
          handleSignup={handleSignup} 
          setCurrentPage={setCurrentPage} 
          error={error} 
        />
      )}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
