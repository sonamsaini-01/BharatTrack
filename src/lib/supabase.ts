import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'https://your-project-url.supabase.co') {
  console.warn('Supabase URL or Key is missing or invalid. Please update your .env file.');
}

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '');

