import React, { useState, useEffect } from 'react';
import { X, Search, Filter, Star, Calendar, Clock, Play } from 'lucide-react';
import { Movie, genres } from '../data/movies';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  movies: Movie[];
  onMovieSelect: (movie: Movie) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, movies, onMovieSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    let filtered = movies;

    // Search by title
    if (searchQuery) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.cast.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase())) ||
        movie.director.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by genre
    if (selectedGenre) {
      filtered = filtered.filter(movie =>
        movie.genre.toLowerCase().includes(selectedGenre.toLowerCase())
      );
    }

    // Filter by type
    if (selectedType) {
      filtered = filtered.filter(movie => movie.type === selectedType);
    }

    // Filter by year
    if (selectedYear) {
      filtered = filtered.filter(movie => movie.year.toString() === selectedYear);
    }

    // Filter by rating
    if (minRating > 0) {
      filtered = filtered.filter(movie => movie.rating >= minRating);
    }

    setFilteredMovies(filtered);
  }, [searchQuery, selectedGenre, selectedType, selectedYear, minRating, movies, isOpen]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedGenre('');
    setSelectedType('');
    setSelectedYear('');
    setMinRating(0);
  };

  const years = Array.from(new Set(movies.map(m => m.year))).sort((a, b) => b - a);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm modal-overlay"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-6xl max-h-[80vh] overflow-hidden glass-dark rounded-2xl border border-white/20 modal-enter">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">Search & Discover</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Search and Filters */}
        <div className="p-6 border-b border-white/10">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
            <input
              type="text"
              placeholder="Search movies, shows, actors, directors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glass-effect rounded-xl pl-12 pr-4 py-4 text-white placeholder-white/50 border-0 focus:outline-none focus:ring-2 focus:ring-cosmic-cyan-400/50 w-full text-lg"
              autoFocus
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 glass-effect px-4 py-2 rounded-lg hover:bg-white/10 transition-colors border border-white/20"
            >
              <Filter className="w-4 h-4 text-cosmic-cyan-400" />
              <span className="text-white">Filters</span>
            </button>
            
            {(selectedGenre || selectedType || selectedYear || minRating > 0) && (
              <button
                onClick={clearFilters}
                className="text-cosmic-cyan-400 hover:text-cosmic-cyan-300 transition-colors text-sm"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 animate-slide-in">
              {/* Genre Filter */}
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="glass-effect rounded-lg px-3 py-2 text-white bg-transparent border border-white/20 focus:outline-none focus:ring-2 focus:ring-cosmic-cyan-400/50"
              >
                <option value="" className="bg-gray-900">All Genres</option>
                {genres.map(genre => (
                  <option key={genre} value={genre} className="bg-gray-900">{genre}</option>
                ))}
              </select>

              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="glass-effect rounded-lg px-3 py-2 text-white bg-transparent border border-white/20 focus:outline-none focus:ring-2 focus:ring-cosmic-cyan-400/50"
              >
                <option value="" className="bg-gray-900">All Types</option>
                <option value="movie" className="bg-gray-900">Movies</option>
                <option value="tv" className="bg-gray-900">TV Shows</option>
              </select>

              {/* Year Filter */}
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="glass-effect rounded-lg px-3 py-2 text-white bg-transparent border border-white/20 focus:outline-none focus:ring-2 focus:ring-cosmic-cyan-400/50"
              >
                <option value="" className="bg-gray-900">All Years</option>
                {years.map(year => (
                  <option key={year} value={year} className="bg-gray-900">{year}</option>
                ))}
              </select>

              {/* Rating Filter */}
              <div className="flex items-center space-x-2">
                <span className="text-white/60 text-sm">Min Rating:</span>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={minRating}
                  onChange={(e) => setMinRating(parseFloat(e.target.value))}
                  className="flex-1"
                />
                <span className="text-cosmic-cyan-400 font-semibold min-w-[2rem]">
                  {minRating > 0 ? minRating : 'Any'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="p-6 overflow-y-auto max-h-96">
          {filteredMovies.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-white/30 mx-auto mb-4" />
              <p className="text-white/60 text-lg">No results found</p>
              <p className="text-white/40">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMovies.map((movie) => (
                <div
                  key={movie.id}
                  className="glass-effect rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer hover-lift border border-white/10"
                  onClick={() => {
                    onMovieSelect(movie);
                    onClose();
                  }}
                >
                  <div className="relative">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <button className="w-12 h-12 bg-cosmic-cyan-400/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cosmic-cyan-400 transition-colors">
                        <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                      </button>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col space-y-1">
                      {movie.isNew && (
                        <span className="glass-effect px-2 py-1 rounded-full text-xs font-semibold text-cosmic-cyan-400 border border-cosmic-cyan-400/30">
                          NEW
                        </span>
                      )}
                      {movie.isTrending && (
                        <span className="glass-effect px-2 py-1 rounded-full text-xs font-semibold text-yellow-400 border border-yellow-400/30">
                          TRENDING
                        </span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="absolute top-3 right-3 flex items-center space-x-1 glass-effect px-2 py-1 rounded-full border border-white/20">
                      <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                      <span className="text-white text-xs font-semibold">{movie.rating}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg mb-2 line-clamp-1">{movie.title}</h3>
                    
                    <div className="flex items-center space-x-3 text-white/60 text-sm mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{movie.year}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{movie.duration}</span>
                      </div>
                      <span className="px-2 py-1 bg-white/10 rounded text-xs capitalize">{movie.type}</span>
                    </div>
                    
                    <p className="text-white/70 text-sm line-clamp-2 mb-3">{movie.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-cosmic-cyan-400 text-sm font-medium">{movie.genre}</span>
                      <span className="text-white/50 text-xs">{movie.director}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;