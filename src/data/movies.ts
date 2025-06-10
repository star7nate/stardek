export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  duration: string;
  description: string;
  image: string;
  backdrop: string;
  trailer?: string;
  cast: string[];
  director: string;
  isNew?: boolean;
  isTrending?: boolean;
  type: 'movie' | 'tv';
  episodes?: Episode[];
  seasons?: number;
  totalEpisodes?: number;
}

export interface Episode {
  id: number;
  title: string;
  season: number;
  episode: number;
  duration: string;
  description: string;
  image: string;
  airDate: string;
  rating: number;
}

// High-quality stock images from Pexels and Unsplash
export const moviesList: Movie[] = [
  {
    id: 1,
    title: "Quantum Horizon",
    year: 2024,
    genre: "Sci-Fi Thriller",
    rating: 8.7,
    duration: "2h 18m",
    description: "A mind-bending journey through parallel dimensions where a physicist discovers the key to unlimited energy, but at a devastating cost to reality itself.",
    image: "https://images.pexels.com/photos/2752197/pexels-photo-2752197.jpeg?auto=compress&cs=tinysrgb&w=800",
    backdrop: "https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=1600",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: ["Emma Stone", "Ryan Gosling", "Oscar Isaac"],
    director: "Denis Villeneuve",
    isNew: true,
    isTrending: true,
    type: 'movie'
  },
  {
    id: 2,
    title: "The Last Guardian",
    year: 2024,
    genre: "Fantasy Adventure",
    rating: 9.2,
    duration: "2h 45m",
    description: "An epic tale of the final protector of an ancient realm, wielding mystical powers to defend against an otherworldly invasion.",
    image: "https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=800",
    backdrop: "https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&w=1600",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: ["Zendaya", "Timothée Chalamet", "Tilda Swinton"],
    director: "Greta Gerwig",
    isNew: true,
    type: 'movie'
  },
  {
    id: 3,
    title: "Neon Nights",
    year: 2023,
    genre: "Crime Drama",
    rating: 8.4,
    duration: "2h 12m",
    description: "A stylish neo-noir thriller set in a cyberpunk metropolis where a detective uncovers a conspiracy that reaches the highest levels of power.",
    image: "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800",
    backdrop: "https://images.pexels.com/photos/2832034/pexels-photo-2832034.jpeg?auto=compress&cs=tinysrgb&w=1600",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: ["Margot Robbie", "Michael Shannon", "Brian Cox"],
    director: "Rian Johnson",
    isTrending: true,
    type: 'movie'
  },
  {
    id: 4,
    title: "Ocean's Deep",
    year: 2024,
    genre: "Adventure Drama",
    rating: 8.9,
    duration: "2h 28m",
    description: "A breathtaking underwater expedition that discovers an ancient civilization and the secrets that could change humanity's understanding of life itself.",
    image: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=800",
    backdrop: "https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1600",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: ["Lupita Nyong'o", "Michael B. Jordan", "Cate Blanchett"],
    director: "James Cameron",
    isNew: true,
    type: 'movie'
  },
  {
    id: 5,
    title: "Stellar Rebellion",
    year: 2023,
    genre: "Space Opera",
    rating: 8.6,
    duration: "2h 35m",
    description: "An intergalactic resistance fights against a tyrannical empire in this visually stunning space epic filled with political intrigue and spectacular battles.",
    image: "https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=800",
    backdrop: "https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=1600",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: ["John Boyega", "Lupita Nyong'o", "Adam Driver"],
    director: "Taika Waititi",
    type: 'movie'
  },
  {
    id: 6,
    title: "Midnight Protocol",
    year: 2024,
    genre: "Action Thriller",
    rating: 8.3,
    duration: "2h 05m",
    description: "A cybersecurity expert must infiltrate a global conspiracy before a devastating cyber attack brings down the world's infrastructure.",
    image: "https://images.pexels.com/photos/2159287/pexels-photo-2159287.jpeg?auto=compress&cs=tinysrgb&w=800",
    backdrop: "https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg?auto=compress&cs=tinysrgb&w=1600",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: ["Idris Elba", "Scarlett Johansson", "Michael Fassbender"],
    director: "Christopher Nolan",
    isNew: true,
    type: 'movie'
  },
  {
    id: 7,
    title: "The Crimson Heist",
    year: 2023,
    genre: "Crime Thriller",
    rating: 8.8,
    duration: "2h 22m",
    description: "A master thief assembles a team for the ultimate heist, but discovers the target holds secrets that could change everything.",
    image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800",
    backdrop: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1600",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: ["Ryan Reynolds", "Charlize Theron", "Mark Ruffalo"],
    director: "Guy Ritchie",
    isTrending: true,
    type: 'movie'
  },
  {
    id: 8,
    title: "Echoes of Tomorrow",
    year: 2024,
    genre: "Sci-Fi Drama",
    rating: 9.1,
    duration: "2h 33m",
    description: "In a world where memories can be extracted and shared, a detective investigates crimes that exist only in people's minds.",
    image: "https://images.pexels.com/photos/2159027/pexels-photo-2159027.jpeg?auto=compress&cs=tinysrgb&w=800",
    backdrop: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1600",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: ["Amy Adams", "Jake Gyllenhaal", "Mahershala Ali"],
    director: "Ari Aster",
    isNew: true,
    isTrending: true,
    type: 'movie'
  }
];

export const tvShowsList: Movie[] = [
  {
    id: 101,
    title: "Crown of Shadows",
    year: 2024,
    genre: "Fantasy Drama",
    rating: 9.4,
    duration: "8 Episodes",
    description: "A dark fantasy series following the rise and fall of rival kingdoms, where magic comes at a terrible price and political intrigue decides the fate of nations.",
    image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800",
    backdrop: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=1600",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: ["Pedro Pascal", "Emilia Clarke", "Kit Harington"],
    director: "Miguel Sapochnik",
    isNew: true,
    isTrending: true,
    type: 'tv',
    seasons: 2,
    totalEpisodes: 16,
    episodes: [
      {
        id: 1,
        title: "The Fallen Crown",
        season: 1,
        episode: 1,
        duration: "58m",
        description: "A kingdom falls as ancient magic awakens, setting the stage for an epic battle between light and darkness.",
        image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400",
        airDate: "2024-01-15",
        rating: 9.2
      },
      {
        id: 2,
        title: "Whispers in the Dark",
        season: 1,
        episode: 2,
        duration: "52m",
        description: "The survivors of the fallen kingdom seek refuge while dark forces gather strength.",
        image: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=400",
        airDate: "2024-01-22",
        rating: 9.0
      },
      {
        id: 3,
        title: "The Last Alliance",
        season: 1,
        episode: 3,
        duration: "55m",
        description: "Unlikely allies must unite to face an ancient evil that threatens all realms.",
        image: "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400",
        airDate: "2024-01-29",
        rating: 9.3
      }
    ]
  },
  {
    id: 102,
    title: "Digital Ghosts",
    year: 2023,
    genre: "Cyberpunk Thriller",
    rating: 8.8,
    duration: "10 Episodes",
    description: "In a near-future world where consciousness can be uploaded, a detective investigates murders that blur the line between digital and physical reality.",
    image: "https://images.pexels.com/photos/2159027/pexels-photo-2159027.jpeg?auto=compress&cs=tinysrgb&w=800",
    backdrop: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1600",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: ["Oscar Isaac", "Tessa Thompson", "Brian Cox"],
    director: "Alex Garland",
    isTrending: true,
    type: 'tv',
    seasons: 1,
    totalEpisodes: 10,
    episodes: [
      {
        id: 1,
        title: "Upload",
        season: 1,
        episode: 1,
        duration: "45m",
        description: "Detective Sarah Chen investigates a murder where the victim's consciousness was uploaded moments before death.",
        image: "https://images.pexels.com/photos/2159027/pexels-photo-2159027.jpeg?auto=compress&cs=tinysrgb&w=400",
        airDate: "2023-09-10",
        rating: 8.7
      },
      {
        id: 2,
        title: "Ghost Protocol",
        season: 1,
        episode: 2,
        duration: "48m",
        description: "The investigation leads into the digital realm where the rules of reality no longer apply.",
        image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=400",
        airDate: "2023-09-17",
        rating: 8.9
      }
    ]
  },
  {
    id: 103,
    title: "Moonbase Alpha",
    year: 2024,
    genre: "Sci-Fi Drama",
    rating: 8.5,
    duration: "6 Episodes",
    description: "The first permanent lunar colony faces existential threats both from space and from the political tensions that followed them from Earth.",
    image: "https://images.pexels.com/photos/2159287/pexels-photo-2159287.jpeg?auto=compress&cs=tinysrgb&w=800",
    backdrop: "https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg?auto=compress&cs=tinysrgb&w=1600",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: ["Sandra Oh", "Michael Shannon", "Rami Malek"],
    director: "Lulu Wang",
    isNew: true,
    type: 'tv',
    seasons: 1,
    totalEpisodes: 6,
    episodes: [
      {
        id: 1,
        title: "First Light",
        season: 1,
        episode: 1,
        duration: "50m",
        description: "The lunar colony faces its first major crisis as Earth's political conflicts reach the moon.",
        image: "https://images.pexels.com/photos/2159287/pexels-photo-2159287.jpeg?auto=compress&cs=tinysrgb&w=400",
        airDate: "2024-03-01",
        rating: 8.4
      }
    ]
  },
  {
    id: 104,
    title: "The Nexus Chronicles",
    year: 2023,
    genre: "Sci-Fi Adventure",
    rating: 8.9,
    duration: "12 Episodes",
    description: "A team of interdimensional travelers must prevent the collapse of the multiverse while dealing with their own fractured realities.",
    image: "https://images.pexels.com/photos/2752197/pexels-photo-2752197.jpeg?auto=compress&cs=tinysrgb&w=800",
    backdrop: "https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&w=1600",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: ["Brie Larson", "John Krasinski", "Lupita Nyong'o"],
    director: "The Russo Brothers",
    isTrending: true,
    type: 'tv',
    seasons: 2,
    totalEpisodes: 24
  },
  {
    id: 105,
    title: "Blackwater Bay",
    year: 2024,
    genre: "Mystery Thriller",
    rating: 8.6,
    duration: "8 Episodes",
    description: "A small coastal town harbors dark secrets that surface when a mysterious stranger arrives during a violent storm.",
    image: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=800",
    backdrop: "https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1600",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cast: ["Elisabeth Moss", "Matthew McConaughey", "Regina King"],
    director: "Cary Joji Fukunaga",
    isNew: true,
    type: 'tv',
    seasons: 1,
    totalEpisodes: 8
  }
];

export const genres = [
  "Action", "Adventure", "Animation", "Comedy", "Crime", "Documentary", 
  "Drama", "Family", "Fantasy", "History", "Horror", "Music", "Mystery", 
  "Romance", "Sci-Fi", "Thriller", "War", "Western"
];

export const trendingMovies = [...moviesList.filter(m => m.isTrending), ...tvShowsList.filter(s => s.isTrending)];
export const popularMovies = [...moviesList.slice(0, 4), ...tvShowsList.slice(0, 3)];
export const recommendedMovies = [...moviesList.slice(1, 5), ...tvShowsList.slice(1, 4)];
export const myListMovies = [...moviesList.slice(0, 3), ...tvShowsList.slice(0, 2)];