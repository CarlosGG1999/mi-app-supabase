import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ierbqujiilmrejbgiflm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllcmJxdWppaWxtcmVqYmdpZmxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5NTU0OTUsImV4cCI6MjA4OTUzMTQ5NX0.lAZ9kt0MV_1NcDEAtMkOL1M3_J93phlR7AsH6ueDyKo'


const supabase = createClient(supabaseUrl, supabaseKey)

// --- FUNCIÓN PARA INSERTAR ---
async function insertarEstudiante(nombre, carrera) {
  const { data, error } = await supabase
    .from('estudiantes')
    .insert([{ nombre, carrera }])
    .select()

  if (error) console.log('Error al insertar:', error)
  else console.log('¡Estudiante guardado!', data)
}

// --- FUNCIÓN PARA LEER ---
async function obtenerEstudiantes() {
  const { data, error } = await supabase.from('estudiantes').select('*')
  if (error) console.log('Error:', error)
  else console.log('Lista actual:', data)
}

// Ejecución
async function principal() {
  await insertarEstudiante('Carlos Iturbe', 'Ingeniería'); // Inserta uno nuevo
  await obtenerEstudiantes(); // Muestra todos
}

principal();