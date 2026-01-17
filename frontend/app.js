const API = 'http://localhost:3000/api';

const cursosList = document.getElementById('cursosList');
const form = document.getElementById('cursoForm');
const themeToggle = document.getElementById('themeToggle');
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');

let dark = false;

// 🌙 Tema
themeToggle.onclick = () => {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeToggle.textContent = dark ? '☀️' : '🌙';
};

// ❤️ Likes
likeBtn.onclick = async () => {
  await fetch(`${API}/likes`, { method: 'POST' });
  cargarLikes();
};

async function cargarLikes() {
  const res = await fetch(`${API}/likes`);
  const data = await res.json();
  likeCount.textContent = data.total;
  likeBtn.textContent = data.liked ? '❤️' : '🤍';
}

// 📥 Cargar cursos
async function cargarCursos() {
  const res = await fetch(`${API}/cursos`);
  const cursos = await res.json();

  cursosList.innerHTML = '';
  cursos.forEach(c => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <h3>${c.nombre_curso}</h3>
      <h3>${c.duracion_curso}</h3>
      
      <p>${c.fecha_realizacion || ''}</p>
      <small>${c.conocimientos_adquiridos || ''}</small>
      <h5>${c.Centro_Estudio || ''}</h5>
      <small>${c.id_especialidad}</small>
      <div class="card-actions">
        <button onclick="editar(${c.id_curso})">✏️</button>
        <button onclick="eliminar(${c.id_curso})">🗑️</button>
      </div>
    `;
    cursosList.appendChild(div);
  });
}

// ➕ Crear / ✏️ Editar
form.onsubmit = async e => {
  e.preventDefault();

  const id = cursoId.value;
  const data = {
    nombre_curso: nombre.value,
    fecha_realizacion: fecha.value,
    FechaCalculadaAño: anio.value,
    duracion_curso: duracion.value,
    Centro_Estudio: centro.value,
    conocimientos_adquiridos: conocimientos.value,
    practicas: practicas.value,
    id_practicas: id_practicas.value
  };

  const method = id ? 'PUT' : 'POST';
  const url = id ? `${API}/cursos/${id}` : `${API}/cursos`;

  await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  form.reset();
  cargarCursos();
};

// ✏️
window.editar = async id => {
  const res = await fetch(`${API}/cursos/${id}`);
  const c = await res.json();

  cursoId.value = c.id_curso;
  nombre.value = c.nombre_curso;
  fecha.value = c.fecha_realizacion;
  anio.value = c.FechaCalculadaAño;
  duracion.value = c.duracion_curso;
  centro.value = c.Centro_Estudio;
  conocimientos.value = c.conocimientos_adquiridos;
  practicas.value = c.practicas;
  id_practicas.value = c.id_practicas;
};

// 🗑️
window.eliminar = async id => {
  if (!confirm('¿Eliminar curso?')) return;
  await fetch(`${API}/cursos/${id}`, { method: 'DELETE' });
  cargarCursos();
};

// Init
cargarCursos();
cargarLikes();


//Mostrar Template
const temp = document.querySelector('template')
const newTemp = temp.content.cloneNode(true);
document.body.appendChild(newTemp);
