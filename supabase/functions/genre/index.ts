// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

import {createClient} from 'https://esm.sh/@supabase/supabase-js@2.42.5';
import {load} from 'https://deno.land/std@0.223.0/dotenv/mod.ts';

const session = new Supabase.ai.Session('gte-small');
const updateGenreIds = async supabase => {
  const genreResponse = await supabase.from('genres').select('id,name');
  const genres = genreResponse.data as {id: number; name: string}[];

  const movieResponse = await supabase
    .from('movies')
    .select('id,title,genres,genre_ids,release_date,popularity,vote_count')
    .is('genre_ids', null)
    .gte('release_date', '2023-01-01 00:00')
    .order('popularity', {ascending: false})
    .order('vote_count', {ascending: false})
    .limit(10000);

  const movies = movieResponse.data as {
    id: number;
    title: string;
    genres: string;
    genre_ids: number[];
  }[];

  if (genreResponse.error || movieResponse.error) {
    throw new Error(
      `Error fetching data from supabase: ${
        genreResponse.error.message ?? movieResponse.error.message
      }`,
    );
  }

  for (const movie of movies) {
    if (
      movie.genres == null ||
      (movie.genre_ids && movie.genre_ids.every(g => g !== null))
    )
      continue;

    const movieGenres = movie.genres
      .split(',')
      .map(
        movieGenre =>
          genres.find(genre => genre.name === movieGenre.trim())?.id,
      );

    const {data, error} = await supabase
      .from('movies')
      .update({genre_ids: movieGenres})
      .eq('id', movie.id)
      .eq('title', movie.title);

    if (error) {
      throw new Error(`Error updating data in supabase: ${error.message}`);
    }

    const newQuery = await supabase
      .from('movies')
      .select('id,title,genres,genre_ids,release_date,popularity,vote_count')
      .is('genre_ids', null)
      .gte('release_date', '2023-01-01 00:00')
      .order('popularity', {ascending: false})
      .order('vote_count', {ascending: false})
      .limit(10000);

    if (newQuery.data != null && newQuery.data.length > 0) {
      await updateGenreIds(supabase);
    }
  }
};

Deno.serve(async req => {
  // Get the environment variables
  await load({export: true});

  const supabaseUrl = Deno.env.get('SUPABASE_URL') as string;
  const serviceKey = Deno.env.get('SUPABASE_ANON_KEY') as string;

  const supabase = createClient(supabaseUrl, serviceKey);

  await updateGenreIds(supabase);

  // Return the OK status
  return new Response(
    JSON.stringify({
      message: `Done!`,
    }),
    {
      status: 200,
      headers: {'Content-Type': 'application/json'},
    },
  );
});
