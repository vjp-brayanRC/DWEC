// Función que procesa y muestra los restaurantes en la tabla
// Me ayudo a hacer el código copilot
function mostrarRestaurantes(datosRestaurantes) {
    const cuerpoTabla = document.querySelector("#tablaRestaurantes tbody");
    cuerpoTabla.innerHTML = ""; // Limpiar contenido previo

    const listaRestaurantes = datosRestaurantes?.results?.bindings;

    if (!Array.isArray(listaRestaurantes)) {
        alert("Ups... El formato del archivo JSON no es el esperado.");
        return;
    }

    listaRestaurantes.forEach((restaurante, indice) => {
        const numeroFila = indice + 78; // Puedes ajustar el inicio si lo deseas

        const nombre = restaurante.rdfs_label?.value || "Sin nombre";
        const sitioWeb = restaurante.schema_url?.value || null;
        const direccion = restaurante.schema_address_streetAddress?.value || "Sin dirección";
        const capacidad = restaurante.om_capacidadPersonas?.value || "No especificado";

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${numeroFila}</td>
            <td>${nombre}</td>
            <td>${sitioWeb ? `<a href="${sitioWeb}" target="_blank" rel="noopener">Visitar</a>` : "No disponible"}</td>
            <td>${direccion}</td>
            <td>${capacidad}</td>
        `;

        cuerpoTabla.appendChild(fila);
    });
}

// Función que carga el archivo JSON y lo pasa a la función de procesamiento
function cargarRestaurantes() {
    fetch("../ejercicios_js/restaurantes.json")
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("No se pudo cargar el archivo JSON.");
            }
            return respuesta.json();
        })
        .then(datos => {
            mostrarRestaurantes(datos);
        })
        .catch(error => {
            console.error("Error al cargar los datos:", error);
            alert("Algo salió mal al cargar los restaurantes. Verifica la ruta del archivo o su contenido.");
        });
}

// Esperar a que el DOM esté listo antes de asignar eventos
document.addEventListener("DOMContentLoaded", () => {
    const botonCargar = document.getElementById("btnCargar");
    if (botonCargar) {
        botonCargar.addEventListener("click", cargarRestaurantes);
    }
});