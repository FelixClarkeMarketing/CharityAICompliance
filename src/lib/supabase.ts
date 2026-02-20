import { createClient } from '@supabase/Bolt Database-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Bolt Database environment variables');
}

export const Bolt Database = createClient(supabaseUrl, supabaseAnonKey);
