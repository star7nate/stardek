import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Calendar, Play, Plus } from 'lucide-react';
import { Movie } from '../data/movies';

interface MovieCarouselProps {
  title: string;
  movies: Movie[];
  onMovieSelect: (movie: Movie) => void;
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ title, movies, onMovieSelect }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      const currentScroll = scrollRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative mb-12 group">
      {/* Section title */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 px-4 md:px-8">
        {title}
      </h2>

      {/* Navigation buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 glass-dark rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 border border-white/20"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 glass-dark rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 border border-white/20"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Movies container */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0 w-72 relative group/item cursor-pointer"
            onMouseEnter={() => setHoveredMovie(movie.id)}
            onMouseLeave={() => setHoveredMovie(null)}
            onClick={() => onMovieSelect(movie)}
          >
            <div className="relative overflow-hidden rounded-xl hover-lift">
              {/* Movie poster */}
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-96 object-cover transition-transform duration-700 group-hover/item:scale-110"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

              {/* Movie badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2">
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
              <div className="absolute top-4 right-4 flex items-center space-x-1 glass-effect px-2 py-1 rounded-full border border-white/20">
                <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                <span className="text-white text-xs font-semibold">{movie.rating}</span>
              </div>

              {/* Hover overlay with controls */}
              <div className={`absolute inset-0 flex items-center justify-center space-x-3 transition-all duration-300 ${
                hoveredMovie === movie.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/30">
                  <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                </button>
                <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border border-white/30">
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Bottom info overlay */}
              <div className={`absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-300 ${
                hoveredMovie === movie.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}>
                <div className="glass-dark rounded-lg p-4 border border-white/10">
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-1">{movie.title}</h3>
                  
                  <div className="flex items-center space-x-4 text-white/70 text-sm mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{movie.year}</span>
                    </div>
                    <span>{movie.duration}</span>
                    <span className="px-2 py-1 bg-white/10 rounded text-xs">{movie.genre}</span>
                  </div>
                  
                  <p className="text-white/80 text-sm line-clamp-2">{movie.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCarousel;