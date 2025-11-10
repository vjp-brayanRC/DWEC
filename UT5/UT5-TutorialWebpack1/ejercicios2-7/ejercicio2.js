// Función asíncrona para cargar y mostrar las tareas desde el servidor
// Función mejorada por ChatGpt
async function cargarTareas() {
  try {
    // Hacemos la petición al servidor local
    const respuesta = await fetch('http://localhost:3000/tasks');

    // Comprobamos si la respuesta fue exitosa (código 200–299)
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    // Convertimos la respuesta a formato JSON
    const tareas = await respuesta.json();

    // Obtenemos el contenedor donde mostraremos las tareas
    const contenedor = document.getElementById('task-container');

    // Limpiamos el contenido previo
    contenedor.innerHTML = '';

    // Si no hay tareas, mostramos un mensaje informativo
    if (tareas.length === 0) {
      contenedor.innerHTML = '<p>No hay tareas registradas.</p>';
      return;
    }

    // Creamos fragmento para evitar múltiples reflows del DOM
    const fragmento = document.createDocumentFragment();

    // Iteramos sobre cada tarea y creamos una tarjeta
    tareas.forEach(tarea => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta-tarea'); // Añadir clase para estilos CSS

      // Usamos template literals con formato y escape básico
      tarjeta.innerHTML = `
        <h3>${tarea.title}</h3>
        <p><strong>Descripción:</strong> ${tarea.description}</p>
        <p><strong>Estado:</strong> ${tarea.status}</p>
        <p><strong>Fecha límite:</strong> ${tarea.dueDate}</p>
        <hr>
      `;

      fragmento.appendChild(tarjeta);
    });

    // Insertamos todo el fragmento en el contenedor de una sola vez
    contenedor.appendChild(fragmento);

  } catch (error) {
    // Manejamos errores de red o conversión
    console.error('Error al cargar tareas:', error);

    const contenedor = document.getElementById('task-container');
    contenedor.innerHTML = `<p style="color:red;">Error al cargar las tareas. Intenta nuevamente.</p>`;
  }
}

// Ejecutamos la función cuando el DOM haya cargado completamente
document.addEventListener('DOMContentLoaded', cargarTareas);
// Comentarios realizados por ChatGPT