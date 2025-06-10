import React, { useEffect, useState } from 'react';
import { X, Play, Plus, ThumbsUp, Share, Star, Calendar, Clock, User, Film } from 'lucide-react';
import { Movie, Episode } from '../data/movies';
import EpisodeList from './EpisodeList';
import TrailerModal from './TrailerModal';

interface MovieModalProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, isOpen, onClose }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'overview' | 'episodes'>('overview');

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setSelectedTab('overview');
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleEpisodePlay = (episode: Episode) => {
    console.log('Playing episode:', episode);
    // Handle episode playback
  };

  if (!isOpen || !movie) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm modal-overlay"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-dark rounded-2xl border border-white/20 modal-enter">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Header with backdrop */}
          <div className="relative h-80 overflow-hidden rounded-t-2xl">
            <img
              src={movie.backdrop}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            
            {/* Title and basic info overlay */}
            <div className="absolute bottom-6 left-6 right-16">
              <div className="flex items-center space-x-3 mb-3">
                {movie.isNew && (
                  <span className="glass-effect px-3 py-1 rounded-full text-sm font-semibold text-cosmic-cyan-400 border border-cosmic-cyan-400/30">
                    NEW
                  </span>
                )}
                {movie.isTrending && (
                  <span className="glass-effect px-3 py-1 rounded-full text-sm font-semibold text-yellow-400 border border-yellow-400/30">
                    TRENDING
                  </span>
                )}
                <div className="flex items-center space-x-1 glass-effect px-3 py-1 rounded-full border border-white/20">
                  <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  <span className="text-white text-sm font-semibold">{movie.rating}</span>
                </div>
              </div>
              
              <h1 className="text-4xl font-black text-white mb-3">{movie.title}</h1>
              
              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{movie.year}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{movie.duration}</span>
                </div>
                <span className="glass-effect px-3 py-1 rounded-full text-sm border border-white/20">
                  {movie.genre}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="btn-premium px-6 py-3 rounded-lg flex items-center space-x-2 font-semibold">
                <Play className="w-5 h-5" fill="currentColor" />
                <span>Play Now</span>
              </button>
              
              {movie.trailer && (
                <button 
                  onClick={() => setShowTrailer(true)}
                  className="glass-effect px-6 py-3 rounded-lg flex items-center space-x-2 font-semibold text-white hover:bg-white/10 transition-colors border border-white/20"
                >
                  <Film className="w-5 h-5" />
                  <span>Watch Trailer</span>
                </button>
              )}
              
              <button className="glass-effect px-6 py-3 rounded-lg flex items-center space-x-2 font-semibold text-white hover:bg-white/10 transition-colors border border-white/20">
                <Plus className="w-5 h-5" />
                <span>My List</span>
              </button>
              
              <button className="glass-effect px-6 py-3 rounded-lg flex items-center space-x-2 font-semibold text-white hover:bg-white/10 transition-colors border border-white/20">
                <ThumbsUp className="w-5 h-5" />
                <span>Like</span>
              </button>
              
              <button className="glass-effect px-6 py-3 rounded-lg flex items-center space-x-2 font-semibold text-white hover:bg-white/10 transition-colors border border-white/20">
                <Share className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>

            {/* Tabs for TV shows */}
            {movie.type === 'tv' && movie.episodes && (
              <div className="flex space-x-6 mb-6 border-b border-white/10">
                <button
                  onClick={() => setSelectedTab('overview')}
                  className={`pb-3 px-1 font-semibold transition-colors ${
                    selectedTab === 'overview' 
                      ? 'text-cosmic-cyan-400 border-b-2 border-cosmic-cyan-400' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setSelectedTab('episodes')}
                  className={`pb-3 px-1 font-semibold transition-colors ${
                    selectedTab === 'episodes' 
                      ? 'text-cosmic-cyan-400 border-b-2 border-cosmic-cyan-400' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Episodes
                </button>
              </div>
            )}

            {/* Tab content */}
            {selectedTab === 'overview' ? (
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-white mb-4">Overview</h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    {movie.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-white/60 font-semibold min-w-[100px]">Director:</span>
                      <span className="text-white">{movie.director}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-white/60 font-semibold min-w-[100px]">Cast:</span>
                      <span className="text-white">{movie.cast.join(', ')}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-white/60 font-semibold min-w-[100px]">Genre:</span>
                      <span className="text-white">{movie.genre}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-white/60 font-semibold min-w-[100px]">Type:</span>
                      <span className="text-white capitalize">{movie.type}</span>
                    </div>

                    {movie.type === 'tv' && (
                      <>
                        <div className="flex items-start">
                          <span className="text-white/60 font-semibold min-w-[100px]">Seasons:</span>
                          <span className="text-white">{movie.seasons || 1}</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-white/60 font-semibold min-w-[100px]">Episodes:</span>
                          <span className="text-white">{movie.totalEpisodes || movie.episodes?.length || 'N/A'}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Additional info sidebar */}
                <div className="glass-effect p-6 rounded-xl border border-white/20">
                  <h4 className="text-lg font-bold text-white mb-4">More Info</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Rating</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                        <span className="text-white font-semibold">{movie.rating}/10</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Release Year</span>
                      <span className="text-white font-semibold">{movie.year}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Duration</span>
                      <span className="text-white font-semibold">{movie.duration}</span>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center space-x-2 mb-2">
                        <User className="w-4 h-4 text-cosmic-cyan-400" />
                        <span className="text-white/80 text-sm">Cast & Crew</span>
                      </div>
                      <div className="space-y-2">
                        {movie.cast.slice(0, 3).map((actor, index) => (
                          <div key={index} className="text-white/60 text-sm">
                            {actor}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <EpisodeList show={movie} onEpisodePlay={handleEpisodePlay} />
            )}
          </div>
        </div>
      </div>

      {/* Trailer Modal */}
      <TrailerModal
        isOpen={showTrailer}
        onClose={() => setShowTrailer(false)}
        trailerUrl={movie.trailer}
        title={movie.title}
      />
    </>
  );
};

export default MovieModal;