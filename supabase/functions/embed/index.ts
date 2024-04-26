// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
/// <reference types="https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts" />

import {createClient} from 'https://esm.sh/@supabase/supabase-js@2.42.5';
import {load} from 'https://deno.land/std@0.223.0/dotenv/mod.ts';

const session = new Supabase.ai.Session('gte-small');
const generateEmbeddings = async supabase => {
  const {data, error} = await supabase
    .from('movies')
    .select('id,title,overview,embedding,release_date,popularity,vote_count')
    .is('embedding', null)
    .gte('release_date', '2023-01-01 00:00')
    .order('popularity', {ascending: false})
    .order('vote_count', {ascending: false})
    .limit(10000);

  if (error) {
    throw new Error(`Error fetching data from supabase: ${error.message}`);
  }

  for (const movie of data) {
    if (movie.embedding != null) continue;

    // Generate the embedding from the user input
    const embedding = await session.run(movie.overview, {
      mean_pool: true,
      normalize: true,
    });

    const {data, error} = await supabase
      .from('movies')
      .update({embedding: embedding})
      .eq('id', movie.id)
      .eq('title', movie.title);

    if (error) {
      throw new Error(`Error updating data in supabase: ${error.message}`);
    }
  }

  const newQuery = await supabase
    .from('movies')
    .select('id,title,overview,embedding,release_date,popularity,vote_count')
    .is('embedding', null)
    .gte('release_date', '2023-01-01 00:00')
    .order('popularity', {ascending: false})
    .order('vote_count', {ascending: false})
    .limit(10000);

  if (newQuery.data != null && newQuery.data.length > 0) {
    await generateEmbeddings(supabase);
  }
};

Deno.serve(async req => {
  // Get the environment variables
  await load({export: true});

  const supabaseUrl = Deno.env.get('SUPABASE_URL') as string;
  const serviceKey = Deno.env.get('SUPABASE_ANON_KEY') as string;

  const supabase = createClient(supabaseUrl, serviceKey);

  await generateEmbeddings(supabase);

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
