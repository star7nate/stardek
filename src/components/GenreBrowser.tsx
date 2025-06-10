import React, { useState } from 'react';
import { Movie, genres } from '../data/movies';
import { Star, Calendar, Play, ChevronRight } from 'lucide-react';

interface GenreBrowserProps {
  movies: Movie[];
  onMovieSelect: (movie: Movie) => void;
}

const GenreBrowser: React.FC<GenreBrowserProps> = ({ movies, onMovieSelect }) => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const getMoviesByGenre = (genre: string) => {
    return movies.filter(movie => 
      movie.genre.toLowerCase().includes(genre.toLowerCase())
    );
  };

  const getGenreImage = (genre: string) => {
    const genreImages: { [key: string]: string } = {
      'Action': 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Adventure': 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Animation': 'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Comedy': 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Crime': 'https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Documentary': 'https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Drama': 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Family': 'https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Fantasy': 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=400',
      'History': 'https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Horror': 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Music': 'https://images.pexels.com/photos/2159027/pexels-photo-2159027.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Mystery': 'https://images.pexels.com/photos/2159287/pexels-photo-2159287.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Romance': 'https://images.pexels.com/photos/2752197/pexels-photo-2752197.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Sci-Fi': 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Thriller': 'https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=400',
      'War': 'https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=400',
      'Western': 'https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=400'
    };
    return genreImages[genre] || 'https://images.pexels.com/photos/2752197/pexels-photo-2752197.jpeg?auto=compress&cs=tinysrgb&w=400';
  };

  if (selectedGenre) {
    const genreMovies = getMoviesByGenre(selectedGenre);
    
    return (
      <div className="relative z-10 pt-20">
        {/* Back button */}
        <div className="px-4 md:px-8 mb-8">
          <button
            onClick={() => setSelectedGenre(null)}
            className="flex items-center space-x-2 text-cosmic-cyan-400 hover:text-cosmic-cyan-300 transition-colors"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
            <span>Back to Genres</span>
          </button>
        </div>

        {/* Genre header */}
        <div className="px-4 md:px-8 mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">{selectedGenre}</h1>
          <p className="text-white/60">{genreMovies.length} titles available</p>
        </div>

        {/* Movies grid */}
        <div className="px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {genreMovies.map((movie) => (
              <div
                key={movie.id}
                className="group cursor-pointer hover-lift"
                onClick={() => onMovieSelect(movie)}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-16 h-16 bg-cosmic-cyan-400/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cosmic-cyan-400 transition-colors">
                      <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
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

                  {/* Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="glass-dark rounded-lg p-3 border border-white/10">
                      <h3 className="text-white font-bold text-sm mb-1 line-clamp-1">{movie.title}</h3>
                      <div className="flex items-center space-x-2 text-white/60 text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{movie.year}</span>
                        <span>•</span>
                        <span className="capitalize">{movie.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 pt-20">
      <div className="px-4 md:px-8">
        <h1 className="text-4xl font-bold text-white mb-8">Browse by Genre</h1>
        
        <div className="genre-grid">
          {genres.map((genre) => {
            const genreMovies = getMoviesByGenre(genre);
            if (genreMovies.length === 0) return null;
            
            return (
              <div
                key={genre}
                className="genre-card rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedGenre(genre)}
              >
                <div className="relative h-full">
                  <img
                    src={getGenreImage(genre)}
                    alt={genre}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg mb-1">{genre}</h3>
                    <p className="text-white/70 text-sm">{genreMovies.length} titles</p>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-cosmic-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <ChevronRight className="w-8 h-8 text-white mx-auto mb-2" />
                      <p className="text-white font-semibold">Explore {genre}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GenreBrowser;