// Escuchamos el evento 'submit' del formulario de edición con id 'edit-form'
document.getElementById('edit-form').addEventListener('submit', async function(e) {
  // Evitamos que el formulario se envíe de manera tradicional (recarga de página)
  e.preventDefault();

  // Obtenemos los valores introducidos por el usuario y eliminamos espacios innecesarios
  const id = document.getElementById('taskId').value.trim();        // ID de la tarea a modificar
  const title = document.getElementById('title').value.trim();      // Título nuevo
  const description = document.getElementById('description').value.trim();  // Descripción nueva
  const status = document.getElementById('status').value;           // Estado (por ejemplo: pendiente, completada, etc.)
  const dueDate = document.getElementById('dueDate').value;         // Nueva fecha límite

  // Validación: comprobamos que el ID no esté vacío
  if (!id) {
    alert('Debes ingresar el ID de la tarea que quieres modificar.');
    return; // Si falta el ID, detenemos la ejecución
  }

  // Creamos un objeto con los datos actualizados de la tarea
  const tareaActualizada = {
    title,
    description,
    status,
    dueDate
  };

  try {
    // Enviamos una petición PUT al servidor con la información actualizada
    const respuesta = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT', // Método HTTP para actualizar un recurso existente
      headers: {
        'Content-Type': 'application/json' // Indicamos que el cuerpo es JSON
      },
      body: JSON.stringify(tareaActualizada) // Convertimos el objeto JS a cadena JSON
    });

    // Verificamos si el servidor respondió correctamente (código 200 o 204)
    if (respuesta.ok) {
      alert('Tarea modificada correctamente.');

      // Redirigimos a la página principal donde se listan las tareas
      window.location.href = 'index.html';
    } else {
      // Si hubo un error en la respuesta, mostramos el código devuelto
      alert('Error al modificar la tarea. Código: ' + respuesta.status);
    }

  } catch (error) {
    // Capturamos errores de conexión o fallos en la petición
    console.error('Error en la petición:', error);
    alert('No se pudo conectar con el servidor.');
  }
});
// Comentarios realizados por ChatGPT