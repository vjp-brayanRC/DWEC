import './style.css';

const nombreInput = document.getElementById('nombre');
const consultarBtn = document.getElementById('consultar');
const resultadoDiv = document.getElementById('resultado');
const formEdad = document.getElementById('formEdad');
const edadInput = document.getElementById('edad');
const guardarBtn = document.getElementById('guardar');
const listarBtn = document.getElementById('listar');
const listaUl = document.getElementById('lista');

consultarBtn.addEventListener('click', () => {
  const nombre = nombreInput.value.trim();
  if (!nombre) return;

  const edad = localStorage.getItem(nombre);
  if (edad !== null) {
    resultadoDiv.textContent = `Edad registrada: ${edad}`;
    formEdad.style.display = 'none';
  } else {
    resultadoDiv.textContent = `No registrado. Puedes añadir edad.`;
    formEdad.style.display = 'block';
  }
});

guardarBtn.addEventListener('click', () => {
  const nombre = nombreInput.value.trim();
  const edad = edadInput.value.trim();
  if (!nombre || !edad) return;

  localStorage.setItem(nombre, edad);
  resultadoDiv.textContent = `Edad guardada: ${edad}`;
  formEdad.style.display = 'none';
  edadInput.value = '';
});

listarBtn.addEventListener('click', () => {
  listaUl.innerHTML = '';
  for (let i = 0; i < localStorage.length; i++) {
    const nombre = localStorage.key(i);
    const edad = localStorage.getItem(nombre);
    const li = document.createElement('li');
    li.textContent = `${nombre}: ${edad} años`;
    listaUl.appendChild(li);
  }
});
