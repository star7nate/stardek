import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MovieCarousel from '../components/MovieCarousel';
import MovieModal from '../components/MovieModal';
import SearchModal from '../components/SearchModal';
import GenreBrowser from '../components/GenreBrowser';
import { 
  trendingMovies, 
  popularMovies, 
  recommendedMovies, 
  myListMovies,
  moviesList,
  tvShowsList,
  Movie 
} from '../data/movies';
import { Star, Award, Trophy } from 'lucide-react';

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const allMovies = [...moviesList, ...tvShowsList];

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
  };

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  const renderContent = () => {
    switch (currentSection) {
      case 'tv':
        return (
          <div className="relative z-10 pt-20">
            <MovieCarousel 
              title="📺 Popular TV Shows" 
              movies={tvShowsList}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="🔥 Trending TV Series" 
              movies={tvShowsList.filter(show => show.isTrending)}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="⭐ Must-Watch Series" 
              movies={tvShowsList.filter(show => show.isNew)}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="🎭 Drama Series" 
              movies={tvShowsList.filter(show => show.genre.includes('Drama'))}
              onMovieSelect={handleMovieSelect}
            />
          </div>
        );

      case 'movies':
        return (
          <div className="relative z-10 pt-20">
            <MovieCarousel 
              title="🎬 Blockbuster Movies" 
              movies={moviesList}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="🏆 Award Winners" 
              movies={moviesList.filter(movie => movie.rating >= 8.5)}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="🌟 Critically Acclaimed" 
              movies={moviesList.filter(movie => movie.rating >= 8.0)}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="🚀 Sci-Fi Adventures" 
              movies={moviesList.filter(movie => movie.genre.includes('Sci-Fi'))}
              onMovieSelect={handleMovieSelect}
            />
          </div>
        );

      case 'genres':
        return <GenreBrowser movies={allMovies} onMovieSelect={handleMovieSelect} />;

      case 'popular':
        return (
          <div className="relative z-10 pt-20">
            <MovieCarousel 
              title="🔥 New & Popular" 
              movies={popularMovies}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="📈 Trending Now" 
              movies={trendingMovies}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="⚡ Hot Releases" 
              movies={allMovies.filter(item => item.isNew)}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="🎯 Most Watched" 
              movies={allMovies.filter(item => item.rating >= 8.7)}
              onMovieSelect={handleMovieSelect}
            />
          </div>
        );

      case 'mylist':
        return (
          <div className="relative z-10 pt-20">
            <MovieCarousel 
              title="💝 My List" 
              movies={myListMovies}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="🎯 Recommended for You" 
              movies={recommendedMovies}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="🔮 You Might Like" 
              movies={allMovies.filter(item => item.genre.includes('Thriller') || item.genre.includes('Drama'))}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="📚 Continue Watching" 
              movies={myListMovies.slice(0, 3)}
              onMovieSelect={handleMovieSelect}
            />
          </div>
        );

      default: // home
        return (
          <div className="relative z-10 -mt-20">
            <MovieCarousel 
              title="🔥 Trending Now" 
              movies={trendingMovies}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="⭐ Recommended for You" 
              movies={recommendedMovies}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="📺 Continue Watching" 
              movies={myListMovies}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="🏆 Popular on STARNYX" 
              movies={popularMovies}
              onMovieSelect={handleMovieSelect}
            />
            <MovieCarousel 
              title="🆕 New Releases" 
              movies={allMovies.filter(item => item.isNew)}
              onMovieSelect={handleMovieSelect}
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar 
        onNavigate={handleNavigate} 
        onMovieSelect={handleMovieSelect}
        onSearchOpen={handleSearchOpen}
      />
      
      {currentSection === 'home' && <Hero />}
      
      {renderContent()}
      
      {/* Premium Footer */}
      <footer className="glass-effect py-20 px-4 md:px-16 mt-20 border-t border-cosmic-cyan-300/20">
        <div className="max-w-7xl mx-auto">
          {/* Premium branding */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-cosmic-cyan-400 animate-glow" fill="currentColor" />
              <h2 className="premium-text text-3xl font-bold tracking-wider">STARNYX</h2>
              <div className="glass-effect px-3 py-1 rounded-full border border-cosmic-cyan-400/30">
                <span className="text-cosmic-cyan-400 text-sm font-semibold">PREMIUM</span>
              </div>
            </div>
          </div>

          <div className="text-white/80 text-sm space-y-6">
            <p className="text-center text-white/60">Questions? Contact our premium support team.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-3">
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">FAQ</p>
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">Investor Relations</p>
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">Privacy</p>
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">Speed Test</p>
              </div>
              <div className="space-y-3">
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">Help Center</p>
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">Careers</p>
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">Cookie Preferences</p>
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">Legal Notices</p>
              </div>
              <div className="space-y-3">
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">Premium Account</p>
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">Ways to Watch</p>
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">Corporate Information</p>
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">Only on STARNYX</p>
              </div>
              <div className="space-y-3">
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">Media Center</p>
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">Terms of Use</p>
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">Contact Us</p>
                <p className="hover:text-cosmic-cyan-400 transition-colors cursor-pointer">Premium Support</p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-cosmic-cyan-400" />
                  <span className="text-white/60">© 2024 STARNYX Premium</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-white/60">Award-Winning Streaming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <MovieModal 
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={handleSearchClose}
        movies={allMovies}
        onMovieSelect={handleMovieSelect}
      />
    </div>
  );
};

export default Index;