import React, { useEffect } from 'react';
import { X, Play, Volume2, VolumeX } from 'lucide-react';

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
  trailerUrl?: string;
  title: string;
}

const TrailerModal: React.FC<TrailerModalProps> = ({ isOpen, onClose, trailerUrl, title }) => {
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

  if (!isOpen || !trailerUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm trailer-modal"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-6xl aspect-video glass-dark rounded-2xl overflow-hidden border border-white/20 modal-enter">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent">
          <div className="flex items-center space-x-3">
            <Play className="w-6 h-6 text-cosmic-cyan-400" fill="currentColor" />
            <h3 className="text-white font-bold text-xl">{title} - Trailer</h3>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 transition-colors border border-white/20"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Video Container */}
        <div className="video-container">
          <iframe
            src={`${trailerUrl}?autoplay=1&rel=0&modestbranding=1`}
            title={`${title} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-2xl"
          />
        </div>

        {/* Controls overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="glass-effect px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-white/10 transition-colors border border-white/20">
                <Volume2 className="w-4 h-4 text-white" />
                <span className="text-white text-sm">Audio</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-white/60 text-sm">Press ESC to close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;