// Mock Supabase Client for Aura Plasters
// In production, replace the placeholders with your actual Supabase URL and Anon Key.

/**
 * SETUP INSTRUCTIONS:
 * 1. Create a project at https://supabase.com
 * 2. Get your SUPABASE_URL and SUPABASE_ANON_KEY from Project Settings > API.
 * 3. Add them to your environment variables.
 */

// Note: I'm not installing @supabase/supabase-js here to avoid dependency bloat,
// but this is where you would initialize it.

export const supabase = {
  // Placeholder for real supabase client
  from: (table: string) => ({
    insert: async (data: any) => {
      console.log(`[Supabase Mock] Inserting into ${table}:`, data);
      return { data, error: null };
    },
    select: async () => {
      console.log(`[Supabase Mock] Selecting from ${table}`);
      return { data: [], error: null };
    }
  })
};

export const saveLead = async (lead: { name: string; email: string; project: string }) => {
  return await supabase.from('leads').insert(lead);
};
