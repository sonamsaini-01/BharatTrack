import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale, Menu, X, User } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useAuthStore();
  const navigate = useNavigate();

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Scale className="h-8 w-8 text-secondary" />
          <span className="text-xl font-bold tracking-tight">BharatTrack</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
          <Link to="/search" className="hover:text-secondary transition-colors">Search Acts</Link>
          <Link to="/chat" className="hover:text-secondary transition-colors">AI Assistant</Link>
          
          {user ? (
            <Link 
              to="/dashboard" 
              className="flex items-center gap-2 bg-blue-800 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          ) : (
            <button 
              onClick={() => navigate('/auth')}
              className="bg-secondary text-primary px-4 py-2 rounded-md font-semibold hover:bg-opacity-90 transition-opacity"
            >
              Login
            </button>
          )}
        </nav>

        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary border-t border-blue-800">
          <div className="flex flex-col p-4 space-y-4">
            <Link to="/" className="hover:text-secondary" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/search" className="hover:text-secondary" onClick={() => setIsMenuOpen(false)}>Search Acts</Link>
            <Link to="/chat" className="hover:text-secondary" onClick={() => setIsMenuOpen(false)}>AI Assistant</Link>
            {user ? (
              <Link 
                to="/dashboard" 
                className="hover:text-secondary flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-4 w-4" />
                Dashboard
              </Link>
            ) : (
              <button 
                onClick={() => {
                  navigate('/auth');
                  setIsMenuOpen(false);
                }}
                className="bg-secondary text-primary px-4 py-2 rounded-md font-semibold w-full"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
