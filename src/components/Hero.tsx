import React, { useState, useEffect } from 'react';
import { Play, Plus, Info, Star, Calendar, Clock } from 'lucide-react';
import { moviesList } from '../data/movies';

const Hero: React.FC = () => {
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const featuredMovies = moviesList.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMovieIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [featuredMovies.length]);

  const currentMovie = featuredMovies[currentMovieIndex];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 transition-all duration-1000">
        <img
          src={currentMovie.backdrop}
          alt={currentMovie.title}
          className="w-full h-full object-cover transform scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="max-w-2xl animate-fade-in-up">
            {/* Movie badges */}
            <div className="flex items-center space-x-3 mb-4">
              {currentMovie.isNew && (
                <span className="glass-effect px-3 py-1 rounded-full text-sm font-semibold text-cosmic-cyan-400 border border-cosmic-cyan-400/30">
                  NEW
                </span>
              )}
              {currentMovie.isTrending && (
                <span className="glass-effect px-3 py-1 rounded-full text-sm font-semibold text-yellow-400 border border-yellow-400/30">
                  TRENDING
                </span>
              )}
              <div className="flex items-center space-x-1 glass-effect px-3 py-1 rounded-full border border-white/20">
                <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                <span className="text-white text-sm font-semibold">{currentMovie.rating}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="title-responsive font-black text-white mb-4 leading-tight">
              {currentMovie.title}
            </h1>

            {/* Movie info */}
            <div className="flex items-center space-x-6 mb-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{currentMovie.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{currentMovie.duration}</span>
              </div>
              <span className="glass-effect px-3 py-1 rounded-full text-sm border border-white/20">
                {currentMovie.genre}
              </span>
            </div>

            {/* Description */}
            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-xl">
              {currentMovie.description}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-premium px-8 py-4 rounded-lg flex items-center justify-center space-x-3 text-lg font-semibold hover-lift">
                <Play className="w-6 h-6" fill="currentColor" />
                <span>Play Now</span>
              </button>
              
              <button className="glass-effect px-8 py-4 rounded-lg flex items-center justify-center space-x-3 text-lg font-semibold text-white hover:bg-white/10 transition-all duration-300 border border-white/20 hover-lift">
                <Plus className="w-6 h-6" />
                <span>My List</span>
              </button>
              
              <button className="glass-effect px-8 py-4 rounded-lg flex items-center justify-center space-x-3 text-lg font-semibold text-white hover:bg-white/10 transition-all duration-300 border border-white/20 hover-lift">
                <Info className="w-6 h-6" />
                <span>More Info</span>
              </button>
            </div>

            {/* Director and cast info */}
            <div className="mt-8 space-y-2 text-white/70">
              <p>
                <span className="font-semibold text-white/90">Director:</span> {currentMovie.director}
              </p>
              <p>
                <span className="font-semibold text-white/90">Starring:</span> {currentMovie.cast.join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Movie indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        {featuredMovies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentMovieIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentMovieIndex 
                ? 'bg-cosmic-cyan-400 scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;