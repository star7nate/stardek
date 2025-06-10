import React, { useState, useEffect } from 'react';
import { Search, Bell, User, Star, Menu, X, Filter } from 'lucide-react';
import { Movie } from '../data/movies';

interface NavbarProps {
  onNavigate: (section: string) => void;
  onMovieSelect: (movie: Movie) => void;
  onSearchOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, onMovieSelect, onSearchOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', key: 'home' },
    { label: 'TV Shows', key: 'tv' },
    { label: 'Movies', key: 'movies' },
    { label: 'Genres', key: 'genres' },
    { label: 'New & Popular', key: 'popular' },
    { label: 'My List', key: 'mylist' },
  ];

  const handleNavClick = (key: string) => {
    onNavigate(key);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-dark shadow-2xl' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-cosmic-cyan-400 animate-glow" fill="currentColor" />
              <h1 className="premium-text text-2xl md:text-3xl font-bold tracking-wider cursor-pointer" 
                  onClick={() => handleNavClick('home')}>
                STARNYX
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className="text-white/80 hover:text-white transition-all duration-300 font-medium hover:scale-105"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Search and Profile */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button
                onClick={onSearchOpen}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <Search className="w-5 h-5 text-white" />
              </button>

              {/* Notifications */}
              <button className="relative p-2 rounded-full hover:bg-white/10 transition-colors">
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              {/* Profile */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-cosmic-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-16 right-0 bottom-0 w-80 glass-dark border-l border-white/10 p-6">
            <div className="space-y-6">
              {/* Mobile Search */}
              <button
                onClick={() => {
                  onSearchOpen();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full glass-effect rounded-lg p-4 flex items-center space-x-3 hover:bg-white/10 transition-colors border border-white/20"
              >
                <Search className="w-5 h-5 text-cosmic-cyan-400" />
                <span className="text-white">Search & Discover</span>
              </button>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavClick(item.key)}
                    className="block w-full text-left text-white/80 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;