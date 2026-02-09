import { createBrowserClient } from "@supabase/ssr";

/**
 * Create a Supabase browser client.
 *
 * Returns null if env vars are not configured so the app can run in "zero-config"
 * mode without Supabase.
 */
export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) return null;

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}
