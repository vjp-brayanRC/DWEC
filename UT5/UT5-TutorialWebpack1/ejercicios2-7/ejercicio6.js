// Función principal: carga las tareas desde el servidor y las muestra en pantalla
async function cargarTareas() {
  try {
    // Petición GET al servidor
    const respuesta = await fetch('http://localhost:3000/tasks');

    // Comprobamos si la respuesta fue correcta
    if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);

    // Convertimos la respuesta en un array de objetos
    const tareas = await respuesta.json();

    // Seleccionamos el contenedor donde se mostrarán las tarjetas
    const contenedor = document.getElementById('task-container');
    contenedor.innerHTML = ''; // Limpiamos contenido previo

    // Si no hay tareas, mostramos un mensaje
    if (tareas.length === 0) {
      contenedor.innerHTML = '<p>No hay tareas registradas.</p>';
      return;
    }

    // Creamos cada tarjeta de tarea y la añadimos al contenedor
    tareas.forEach(tarea => {
      const tarjeta = document.createElement('div');
      tarjeta.className = 'task-card'; // Clase CSS para estilos
      // Tarjeta realizada por ChatGPT
      tarjeta.innerHTML = `
        <h3>${tarea.title}</h3>
        <p><strong>Descripción:</strong> ${tarea.description}</p>
        <p><strong>Estado:</strong> ${tarea.status}</p>
        <p><strong>Fecha límite:</strong> ${tarea.dueDate}</p>
        <button class="btn-eliminar" data-id="${tarea.id}">Eliminar tarea</button>
      `;

      contenedor.appendChild(tarjeta);
    });

    // Asignamos los eventos "click" a todos los botones de eliminar
    document.querySelectorAll('.btn-eliminar').forEach(boton => {
      boton.addEventListener('click', () => eliminarTarea(boton.dataset.id));
    });

  } catch (error) {
    console.error('Error al cargar tareas:', error);
    const contenedor = document.getElementById('task-container');
    contenedor.innerHTML = '<p style="color:red;">Error al cargar las tareas. Intenta nuevamente.</p>';
  }
}

// Función para eliminar una tarea específica por ID
async function eliminarTarea(id) {
  // Confirmación antes de eliminar
  const confirmar = confirm('¿Estás seguro de que quieres eliminar esta tarea?');
  if (!confirmar) return;

  try {
    // Petición DELETE al servidor
    const respuesta = await fetch(`http://localhost:3000/tasks/${id}`, { method: 'DELETE' });

    if (respuesta.ok) {
      alert('Tarea eliminada correctamente.');
      cargarTareas(); // Recargamos la lista sin recargar la página
    } else {
      alert('Error al eliminar la tarea. Código: ' + respuesta.status);
    }
  } catch (error) {
    console.error('Error en la petición:', error);
    alert('No se pudo conectar con el servidor.');
  }
}

// Ejecutamos cargarTareas() cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', cargarTareas);
// Comentarios realizados por ChatGPT