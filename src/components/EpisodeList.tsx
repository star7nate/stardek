import React, { useState } from 'react';
import { Play, Star, Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Movie, Episode } from '../data/movies';

interface EpisodeListProps {
  show: Movie;
  onEpisodePlay: (episode: Episode) => void;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ show, onEpisodePlay }) => {
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [isExpanded, setIsExpanded] = useState(true);

  if (show.type !== 'tv' || !show.episodes) {
    return null;
  }

  const seasons = Array.from(new Set(show.episodes.map(ep => ep.season))).sort();
  const currentSeasonEpisodes = show.episodes.filter(ep => ep.season === selectedSeason);

  return (
    <div className="mt-8">
      {/* Season selector */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h3 className="text-xl font-bold text-white">Episodes</h3>
          {seasons.length > 1 && (
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(parseInt(e.target.value))}
              className="glass-effect rounded-lg px-3 py-2 text-white bg-transparent border border-white/20 focus:outline-none focus:ring-2 focus:ring-cosmic-cyan-400/50"
            >
              {seasons.map(season => (
                <option key={season} value={season} className="bg-gray-900">
                  Season {season}
                </option>
              ))}
            </select>
          )}
        </div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-2 text-cosmic-cyan-400 hover:text-cosmic-cyan-300 transition-colors"
        >
          <span>{isExpanded ? 'Collapse' : 'Expand'}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Episodes list */}
      {isExpanded && (
        <div className="episode-list space-y-4">
          {currentSeasonEpisodes.map((episode, index) => (
            <div
              key={episode.id}
              className="episode-item glass-effect rounded-xl p-4 border border-white/10 hover:bg-white/5 cursor-pointer"
              onClick={() => onEpisodePlay(episode)}
            >
              <div className="flex items-start space-x-4">
                {/* Episode thumbnail */}
                <div className="relative flex-shrink-0 w-32 h-18 rounded-lg overflow-hidden group">
                  <img
                    src={episode.image}
                    alt={episode.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-6 h-6 text-white" fill="currentColor" />
                  </div>
                  
                  {/* Episode number */}
                  <div className="absolute top-2 left-2 glass-effect px-2 py-1 rounded text-xs font-semibold text-white border border-white/20">
                    {episode.episode}
                  </div>
                </div>

                {/* Episode info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-white font-semibold text-lg line-clamp-1">{episode.title}</h4>
                    <div className="flex items-center space-x-1 ml-4">
                      <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                      <span className="text-white text-sm font-semibold">{episode.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(episode.airDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{episode.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/80 text-sm line-clamp-2">{episode.description}</p>
                </div>

                {/* Play button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onEpisodePlay(episode);
                  }}
                  className="flex-shrink-0 w-12 h-12 bg-cosmic-cyan-400/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cosmic-cyan-400/40 transition-colors border border-cosmic-cyan-400/30"
                >
                  <Play className="w-5 h-5 text-cosmic-cyan-400 ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Season info */}
      <div className="mt-6 glass-effect rounded-xl p-4 border border-white/10">
        <div className="flex items-center justify-between text-white/60 text-sm">
          <span>Season {selectedSeason}</span>
          <span>{currentSeasonEpisodes.length} episodes</span>
        </div>
      </div>
    </div>
  );
};

export default EpisodeList;