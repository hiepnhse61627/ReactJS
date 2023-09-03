import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tfnirkjgitgjlnekcdyy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmbmlya2pnaXRnamxuZWtjZHl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2MjQyODIsImV4cCI6MjAwOTIwMDI4Mn0.ak3C3ln1IDfpoXWb82dLaBPX454G4Q-SaHYYxidUMUk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
