import { createClient } from "https://esm.sh/@supabase/supabase-js";
const supabaseUrl = 'https://lkdkcdgbfzxyvlldldwe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxrZGtjZGdiZnp4eXZsbGRsZHdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1OTkzMzksImV4cCI6MjA2NTE3NTMzOX0.oNEeMo0lWJ5EXNBjTec5GqP2khoIoOiEMf0wfWBAdw8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;