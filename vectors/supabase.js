import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://tahimdssqnghnexvifdc.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhaGltZHNzcW5naG5leHZpZmRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExMDIwODEsImV4cCI6MjAyNjY3ODA4MX0.P01KYfUVf6ulrUBCEeAk3p6V63kTwatlcpHWO_OqMDY';

export const supabase = await createClient(supabaseUrl, supabaseKey);
