// Función asíncrona para cargar y mostrar las tareas
async function cargarTareas() {
  try {
    // Petición GET al servidor para obtener todas las tareas
    const respuesta = await fetch('http://localhost:3000/tasks');

    // Verificamos que la respuesta sea correcta
    if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);

    // Convertimos la respuesta en JSON
    const tareas = await respuesta.json();

    // Contenedor donde se mostrarán las tarjetas
    const contenedor = document.getElementById('task-container');
    contenedor.innerHTML = ''; // Limpiamos el contenedor

    // Si no hay tareas, mostramos un mensaje
    if (tareas.length === 0) {
      contenedor.innerHTML = '<p>No hay tareas registradas.</p>';
      return;
    }

    // Creamos las tarjetas usando un fragmento de documento (mejora el rendimiento)
    const fragmento = document.createDocumentFragment();

    tareas.forEach(tarea => {
      const tarjeta = document.createElement('div');
      tarjeta.className = 'task-card'; // Clase para estilos CSS

      // Contenido de la tarjeta
      // Tarjeta realizada por ChatGPT
      tarjeta.innerHTML = `
        <h3>${tarea.title}</h3>
        <p><strong>Descripción:</strong> ${tarea.description}</p>
        <p><strong>Estado:</strong> ${tarea.status}</p>
        <p><strong>Fecha límite:</strong> ${tarea.dueDate}</p>
        <button class="btn-eliminar" data-id="${tarea.id}">Eliminar tarea</button>
      `;

      // Añadimos el evento al botón dentro de la tarjeta
      tarjeta.querySelector('.btn-eliminar').addEventListener('click', () => eliminarTarea(tarea.id, tarjeta));

      fragmento.appendChild(tarjeta);
    });

    // Insertamos todas las tarjetas en el contenedor de una sola vez
    contenedor.appendChild(fragmento);

  } catch (error) {
    console.error('Error al cargar tareas:', error);
    const contenedor = document.getElementById('task-container');
    contenedor.innerHTML = '<p style="color:red;">Error al cargar las tareas. Intenta nuevamente.</p>';
  }
}

// Función asíncrona para eliminar una tarea por su ID
// Recibe también la tarjeta para eliminarla directamente del DOM
async function eliminarTarea(id, tarjeta) {
  const confirmar = confirm('¿Estás seguro de que quieres eliminar esta tarea?');
  if (!confirmar) return;

  try {
    const respuesta = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE'
    });

    if (respuesta.ok) {
      alert('Tarea eliminada correctamente.');
      // Eliminamos la tarjeta directamente sin recargar la página
      tarjeta.remove();
    } else {
      alert('Error al eliminar la tarea. Código: ' + respuesta.status);
    }
  } catch (error) {
    console.error('Error en la petición:', error);
    alert('No se pudo conectar con el servidor.');
  }
}

// Ejecutamos la función cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', cargarTareas);
// Comentarios realizados por ChatGPT