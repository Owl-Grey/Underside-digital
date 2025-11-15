// supabase-test.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// 🔥 ВСТАВЬ свои данные:
const SUPABASE_URL = "https://sauirskkaxnxysevjngx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhdWlyc2trYXhueHlzZXZqbmd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxNTA2OTEsImV4cCI6MjA3ODcyNjY5MX0.va1Jp7f42KZYsqczvsJqZEEisCsaYaS-7DIGzrLyfp4";

// создаём клиент Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// функция для чтения постов
export async function readPosts() {
  console.log("Читаю таблицу posts...");

  const { data, error } = await supabase
    .from("Underside-panel")
    .select("*")
    .order("created_at");

  if (error) {
    console.error("Ошибка чтения:", error);
    return;
  }

  console.log("Записи получены:", data);
  return data;
}
console.log('test')
