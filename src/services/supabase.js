import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://whhzphwuiydxgncmteek.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndoaHpwaHd1aXlkeGduY210ZWVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzY4NjYsImV4cCI6MjAxNDg1Mjg2Nn0.b6JSH-AZ2yTRy-D4xxeFAnVy8qNvL0ZNKopKyVsTsZs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
