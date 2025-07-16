import React, { useState } from 'react';

const LoginPage = ({ handleLogin, handleSignup, setCurrentPage, error }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setApiError('');

    try {
      if (isLogin) {
        // Login API call
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            username: formData.email,
            password: formData.password
          })
        });

        const data = await response.json();

        if (response.ok) {
          handleLogin(data.user);
          setCurrentPage('home');
        } else {
          setApiError(data.error || 'Login failed');
        }
      } else {
        // Signup validation
        if (formData.password !== formData.confirmPassword) {
          setApiError('Passwords do not match!');
          setLoading(false);
          return;
        }

        if (formData.password.length < 6) {
          setApiError('Password must be at least 6 characters long');
          setLoading(false);
          return;
        }

        // Signup API call
        const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            username: formData.name,
            email: formData.email,
            password: formData.password
          })
        });

        const data = await response.json();

        if (response.ok) {
          handleSignup(data.user);
          setCurrentPage('home');
        } else {
          setApiError(data.error || 'Signup failed');
        }
      }
    } catch (error) {
      setApiError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center transition-colors">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            {isLogin ? 'Sign in to your account' : 'Create new account'}
          </h2>
        </div>
        
        {(error || apiError) && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error || apiError}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {!isLogin && (
              <div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-800"
                  placeholder="Username"
                  minLength="3"
                />
              </div>
            )}
            <div>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-800"
                placeholder={isLogin ? "Email or Username" : "Email address"}
              />
            </div>
            <div>
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-800"
                placeholder="Password"
                minLength="6"
              />
            </div>
            {!isLogin && (
              <div>
                <input
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm bg-white dark:bg-gray-800"
                  placeholder="Confirm Password"
                  minLength="6"
                />
              </div>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : (isLogin ? "Sign In" : "Sign Up")}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setApiError('');
                setFormData({
                  name: '',
                  email: '',
                  password: '',
                  confirmPassword: ''
                });
              }}
              className="text-sm text-gray-600 dark:text-gray-400 hover:underline"
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
