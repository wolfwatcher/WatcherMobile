import axios from 'axios';

const {
  EXPO_PUBLIC_TMDB_API_URL,
  EXPO_PUBLIC_TMDB_API_KEY,
  EXPO_PUBLIC_TMDB_POSTER_URL,
  EXPO_PUBLIC_TMDB_ACCESS_TOKEN,
} = process.env;

if (
  EXPO_PUBLIC_TMDB_API_URL == undefined ||
  EXPO_PUBLIC_TMDB_API_KEY == undefined ||
  EXPO_PUBLIC_TMDB_POSTER_URL == undefined ||
  EXPO_PUBLIC_TMDB_ACCESS_TOKEN == undefined
)
  throw Error('Missing .env TMDb properties');

export const getDiscoverMovies = async (
  includeAdult: boolean = false,
  includeVideo: boolean = true,
  language: string = 'fr-FR',
  page: number = 1,
  sortBy: string = 'popularity.desc',
  withGenres?: string,
  withoutGenres?: string,
) => {
  let url = `${EXPO_PUBLIC_TMDB_API_URL}/discover/movie?include_adult=${includeAdult}&include_video=${includeVideo}&language=${language}&page=${page}&sortBy=${sortBy}&api_key=${EXPO_PUBLIC_TMDB_API_KEY}`;
  if (withGenres) url += `&with_genres=${withGenres}`;
  const response = await axios.get(url, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${EXPO_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
  });
  return [...response.data.results];
};

export const getMovieGenres = async (language: string = 'fr') => {
  const url = `${EXPO_PUBLIC_TMDB_API_URL}/genre/movie/list?language=${language}&api_key=${EXPO_PUBLIC_TMDB_API_KEY}`;
  const response = await axios.get(url, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${EXPO_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
  });
  return [...response.data.genres];
};
