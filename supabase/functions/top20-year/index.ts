// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

import {createClient} from 'https://esm.sh/@supabase/supabase-js@2.42.5';
import {load} from 'https://deno.land/std@0.223.0/dotenv/mod.ts';
import {Movie, Genre, MovieWithEmbedding, TMDbGenres} from '../tmdb.ts';

Deno.serve(async req => {
  // Get the environment variables
  await load({export: true});

  const supabaseUrl = Deno.env.get('SUPABASE_URL') as string;
  const serviceKey = Deno.env.get('SUPABASE_ANON_KEY') as string;

  /** API key for TMDB API */
  const tmdbApiKey = Deno.env.get('TMDB_API_KEY');

  /** API key for Open AI API */
  const openAiApiKey = Deno.env.get('OPEN_AI_API_KEY');

  const supabase = createClient(supabaseUrl, serviceKey);

  const year = new URLSearchParams(req.url.split('?')[1]).get('year');

  if (!year) {
    throw new Error('Year is required');
  }

  const searchParams = new URLSearchParams();
  searchParams.set('sort_by', 'popularity.desc');
  searchParams.set('page', '1');
  searchParams.set('language', 'fr-FR');
  searchParams.set('primary_release_year', `${year}`);
  searchParams.set('include_adult', 'true');
  searchParams.set('include_video', 'true');

  const tmdbResponse = await fetch(
    `https://api.themoviedb.org/3/discover/movie?${searchParams.toString()}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tmdbApiKey}`,
      },
    },
  );

  const tmdbJson = await tmdbResponse.json();

  const tmdbStatus = tmdbResponse.status;
  if (!(200 <= tmdbStatus && tmdbStatus <= 299)) {
    throw new Error('Error retrieving data from tmdb API');
  }

  const movies = tmdbJson.results as Movie[];
  const moviesWithEmbeddings: MovieWithEmbedding[] = [];

  for (const movie of movies) {
    const response = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${openAiApiKey}`,
      },
      body: JSON.stringify({
        input: movie.overview,
        model: 'text-embedding-3-small',
      }),
    });

    const responseData = await response.json();
    if (responseData.error) {
      console.log(responseData);
      throw new Error(
        `Error obtaining Open API embedding: ${responseData.error.message}`,
      );
    }

    const embedding = responseData.data[0].embedding;

    moviesWithEmbeddings.push({
      id: movie.id,
      title: movie.title,
      original_title: movie.original_title,
      overview: movie.overview,
      release_date: movie.release_date,
      backdrop_path: movie.backdrop_path,
      poster_path: movie.poster_path,
      genres: movie.genre_ids.map(genreId => {
        const genre = TMDbGenres.find(genre => genre.id === genreId);
        if (genre) {
          return genre.name;
        }
      }),
      popularity: movie.popularity,
      created_at: new Date().toISOString(),
      embedding,
    });
  }

  const {error} = await supabase.from('movies').upsert(moviesWithEmbeddings);

  if (error) {
    throw new Error(`Error inserting data into supabase: ${error.message}`);
  }

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
