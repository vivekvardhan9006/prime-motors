import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Car, ChevronDown, User, LogOut, LogIn, UserPlus, Settings, HelpCircle, Star } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('token'));
  const [username, setUsername] = useState(() => localStorage.getItem('username') || '');
  const [profilePic, setProfilePic] = useState(() => localStorage.getItem('profilePic') || localStorage.getItem('avatar') || '');

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/inventory', label: 'Inventory' },
    { path: '/about', label: 'About Us', hasDropdown: true },
    { path: '/blog', label: 'Blog' }
  ];

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setShowProfileDropdown(false);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    // Optionally navigate to home or login page
    navigate('/');
  };

  const handleSignIn = () => {
    navigate('/signin');
    setShowProfileDropdown(false);
  };

  // Listen for login event (e.g. after successful login)
  React.useEffect(() => {
    const handleProfileUpdate = () => {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('username');
      setIsLoggedIn(!!token);
      setUsername(user || '');
      setProfilePic(localStorage.getItem('profilePic') || localStorage.getItem('avatar') || '');
    };
    window.addEventListener('storage', handleProfileUpdate);
    window.addEventListener('userProfileUpdated', handleProfileUpdate);
    // Also check on mount
    handleProfileUpdate();
    return () => {
      window.removeEventListener('storage', handleProfileUpdate);
      window.removeEventListener('userProfileUpdated', handleProfileUpdate);
    };
  }, []);

  const handleSignUp = () => {
    navigate('/signup');
    setShowProfileDropdown(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Completely to the left */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Car className="h-10 w-10 text-red-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors">PRIME MOTORS</span>
              <span className="text-sm text-red-400 -mt-1 font-medium">Luxury Begins Here...</span>
            </div>
          </Link>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ path, label, hasDropdown }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-4 py-3 text-base font-medium transition-all duration-300 relative group ${
                  location.pathname === path
                    ? 'text-red-500 border-b-2 border-red-500 bg-red-500/10 rounded-lg'
                    : 'text-gray-300 hover:text-red-500 hover:bg-gray-800/50 rounded-lg'
                }`}
              >
                <span className="group-hover:scale-105 transition-transform duration-200">{label}</span>
                {hasDropdown && <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />}
              </Link>
            ))}
          </div>

          {/* Profile Dropdown - Completely to the right */}
          <div className="relative">
            {!isLoggedIn ? (
              <button
                onClick={handleSignIn}
                className="flex items-center space-x-2 p-2 rounded-lg text-gray-300 hover:text-red-500 hover:bg-gray-800/50 transition-all duration-300"
              >
                <LogIn className="h-5 w-5" />
                <span>Sign In</span>
              </button>
            ) : (
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="flex items-center space-x-2 p-2 rounded-lg text-gray-300 hover:text-red-500 hover:bg-gray-800/50 transition-all duration-300"
              >
                {localStorage.getItem('profilePic') || localStorage.getItem('avatar') ? (
                  <img
                    src={localStorage.getItem('profilePic') || localStorage.getItem('avatar')}
                    alt="Profile"
                    className="h-8 w-8 rounded-full object-cover border-2 border-red-400"
                  />
                ) : (
                  <User className="h-5 w-5" />
                )}
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showProfileDropdown ? 'rotate-180' : ''}`} />
              </button>
            )}

            {/* Dropdown Menu - Dark Theme */}
            {showProfileDropdown && isLoggedIn && (
              <div
                className="absolute right-0 mt-2 w-64 rounded-xl shadow-2xl bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                onMouseLeave={() => setShowProfileDropdown(false)}
              >
                <div className="px-6 py-4 flex items-center space-x-3 border-b border-gray-800">
                  <Car className="h-8 w-8 text-red-500" />
                  <span className="font-semibold text-lg text-white">{localStorage.getItem('firstName') || username}</span>
                </div>
                {/* View Details Button */}
                <div className="py-2">
                  <button
                    onClick={() => { setShowProfileDropdown(false); navigate('/profile'); }}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-blue-900 transition-colors"
                  >
                    <Settings className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                </div>
                {/* Sign Out Button */}
                <div className="py-2">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-4 py-3 text-white hover:bg-gray-700 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Log out</span>
                  </button>
                </div>

                {/* User Details Section */}
                <div className="px-4 py-3 border-t border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                      <Car className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-white font-medium">{username}</p>
                      <p className="text-xs text-gray-400">Free</p>
                    </div>
                    <ChevronDown className="h-3 w-3 text-gray-400" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex space-x-4">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  location.pathname === path
                    ? 'text-red-500 bg-red-500/10 shadow-md'
                    : 'text-gray-300 hover:text-red-500 hover:bg-gray-800/50'
                }`}
                title={label}
              >
                <span className="text-sm font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown */}
      {showProfileDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowProfileDropdown(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;