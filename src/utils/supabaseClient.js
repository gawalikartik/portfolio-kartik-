import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase project URL and anon key
const supabaseUrl = 'https://nthcfyfcrdbtfnorsuqa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50aGNmeWZjcmRidGZub3JzdXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1Nzk2MjQsImV4cCI6MjA2ODE1NTYyNH0.YPfkVHC6m60-fRVElbKqolkM6UIW5v3ZdXUeXgo9BKg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 