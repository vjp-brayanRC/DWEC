// 🔹 Función para crear dinámicamente una tarjeta de tarea en el DOM
function crearTarjetaTarea(tarea) {
  // Creamos un elemento <div> para representar la tarea
  const tarjeta = document.createElement('div');
  tarjeta.className = 'task-card'; // Clase CSS para aplicar estilos

  // Definimos el contenido HTML interno de la tarjeta usando template literals
  // tarjeta realizada por ChatGPT
  tarjeta.innerHTML = `
    <h3>${tarea.title}</h3>
    <p><strong>Descripción:</strong> ${tarea.description}</p>
    <p><strong>Estado:</strong> ${tarea.status}</p>
    <p><strong>Fecha límite:</strong> ${tarea.dueDate}</p>
    <button class="btn-eliminar" data-id="${tarea.id}">🗑️ Eliminar tarea</button>
  `;

  // Asignamos el evento 'click' al botón eliminar dentro de la tarjeta
  const botonEliminar = tarjeta.querySelector('.btn-eliminar');
  botonEliminar.addEventListener('click', () => eliminarTarea(tarea.id));

  // Devolvemos la tarjeta ya configurada para añadirla al contenedor principal
  return tarjeta;
}

// 🔹 Función asíncrona para eliminar una tarea del servidor
async function eliminarTarea(id) {
  // Confirmación del usuario antes de eliminar la tarea
  const confirmacion = confirm('¿Estás seguro de que quieres eliminar esta tarea?');
  if (!confirmacion) return; // Si el usuario cancela, no hace nada

  try {
    // Petición DELETE al servidor con el id de la tarea
    const respuesta = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    });

    // Si la respuesta fue exitosa, eliminamos visualmente la tarjeta o recargamos
    if (respuesta.ok) {
      alert('Tarea eliminada correctamente.');

      // Eliminamos la tarjeta directamente del DOM sin recargar la página
      document.querySelector(`button[data-id="${id}"]`).closest('.task-card').remove();
      
      // Si prefieres recargar la página completa, descomenta esta línea:
      // location.reload();
    } else {
      alert('Error al eliminar la tarea. Código: ' + respuesta.status);
    }

  } catch (error) {
    // Captura de errores en la conexión o respuesta del servidor
    console.error('Error en la petición:', error);
    alert('No se pudo conectar con el servidor.');
  }
}
// Comentarios realizados por ChatGPT