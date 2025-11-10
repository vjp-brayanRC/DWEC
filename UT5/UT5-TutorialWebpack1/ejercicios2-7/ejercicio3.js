// Escuchamos el evento 'submit' del formulario con id 'task-form'
document.getElementById('task-form').addEventListener('submit', async function(e) {
  // Evitamos que el formulario se envíe de forma tradicional (recargando la página)
  e.preventDefault();

  // Obtenemos los valores de los campos del formulario y eliminamos espacios innecesarios
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();
  const status = document.getElementById('status').value;
  const dueDate = document.getElementById('dueDate').value;

  // Validamos que el título y la descripción no estén vacíos
  if (!title || !description) {
    alert('Por favor, completa el título y la descripción.');
    return; // Detenemos la ejecución si faltan datos
  }

  // Creamos un objeto con la nueva tarea que enviaremos al servidor
  const nuevaTarea = {
    title,
    description,
    status,
    dueDate
  };

  try {
    // Hacemos la petición al backend con método POST para crear una nueva tarea
    const respuesta = await fetch('http://localhost:3000/tasks', {
      method: 'POST', // Indicamos que es una petición de tipo POST
      headers: {
        'Content-Type': 'application/json' // Indicamos que enviamos datos en formato JSON
      },
      body: JSON.stringify(nuevaTarea) // Convertimos el objeto en una cadena JSON
    });

    // Comprobamos si la respuesta del servidor fue exitosa (código 200–299)
    if (respuesta.ok) {
      alert('Tarea creada correctamente.');

      // Redirigimos al usuario a la página principal (lista de tareas)
      window.location.href = 'index.html';
    } else {
      // Si el servidor respondió con error (por ejemplo, 400 o 500)
      alert('Error al crear la tarea. Código: ' + respuesta.status);
    }

  } catch (error) {
    // Capturamos errores de red o de conexión con el servidor
    console.error('Error en la petición:', error);
    alert('No se pudo conectar con el servidor.');
  }
});
// Comentarios realizados por ChatGPT