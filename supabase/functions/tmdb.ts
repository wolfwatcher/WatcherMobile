interface Movie {
  id: number;
  title: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  revenue: number;
  runtime: number;
  backdrop_path: string;
  budget: number;
  imdb_id: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  tagline: string;
  genres: string;
  keywords: string;
  created_at: string;
}

interface Genre {
  id: number;
  name: string;
}

interface MovieWithEmbedding extends Movie {
  embedding: number[];
}

export const TMDbGenres: Genre[] = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Aventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comédie',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentaire',
  },
  {
    id: 18,
    name: 'Drame',
  },
  {
    id: 10751,
    name: 'Familial',
  },
  {
    id: 14,
    name: 'Fantastique',
  },
  {
    id: 36,
    name: 'Histoire',
  },
  {
    id: 27,
    name: 'Horreur',
  },
  {
    id: 10402,
    name: 'Musique',
  },
  {
    id: 9648,
    name: 'Mystère',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science-Fiction',
  },
  {
    id: 10770,
    name: 'Téléfilm',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'Guerre',
  },
  {
    id: 37,
    name: 'Western',
  },
];
