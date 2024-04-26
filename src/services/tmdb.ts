import {TMDB} from 'tmdb-ts';

export namespace TmdbSingleton {
  const {EXPO_PUBLIC_TMDB_POSTER_URL, EXPO_PUBLIC_TMDB_ACCESS_TOKEN} =
    process.env;

  if (
    EXPO_PUBLIC_TMDB_POSTER_URL == undefined ||
    EXPO_PUBLIC_TMDB_ACCESS_TOKEN == undefined
  )
    throw Error('Missing .env TMDb properties');

  export const client = new TMDB(EXPO_PUBLIC_TMDB_ACCESS_TOKEN);
}
