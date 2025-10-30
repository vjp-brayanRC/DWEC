const contenedor = document.getElementById('contenedorGeneral');
const colores = ['red', 'blue', 'green', 'yellow'];

// Configuración del contenedor como grid
contenedor.style.display = 'grid';
contenedor.style.gridTemplateColumns = 'repeat(10, 25px)';
contenedor.style.gridTemplateRows = 'repeat(10, 25px)';
contenedor.style.gap = '10px';
contenedor.style.width = 'max-content';
contenedor.style.padding = '10px';

// Función para crear la matriz de botones
function crearMatriz(filas, columnas) {
    for (let i = 0; i < filas * columnas; i++) {
        const boton = document.createElement('button');
        boton.style.width = '25px';
        boton.style.height = '25px';
        boton.style.padding = '0';
        boton.style.margin = '0';
        boton.style.border = '1px solid black';
        boton.style.backgroundColor = 'white';
        boton.dataset.colorIndex = -1; // sin color inicial

        asignarEventos(boton);
        contenedor.appendChild(boton);
    }
}

// Función para asignar los eventos a un botón
function asignarEventos(boton) {
    // Click izquierdo: avanzar color
    boton.addEventListener('click', (e) => {
        e.preventDefault();
        let index = parseInt(boton.dataset.colorIndex);
        index = (index + 1) % colores.length;
        boton.style.backgroundColor = colores[index];
        boton.dataset.colorIndex = index;
    });

    // Click derecho: retroceder color
    boton.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        let index = parseInt(boton.dataset.colorIndex);
        index = (index - 1 + colores.length) % colores.length;
        boton.style.backgroundColor = colores[index];
        boton.dataset.colorIndex = index;
    });

    // Click de rueda (botón central): gris
    boton.addEventListener('auxclick', (e) => {
        if (e.button === 1) { // botón de rueda
            e.preventDefault();
            boton.style.backgroundColor = 'gray';
            boton.dataset.colorIndex = -1; // reiniciamos el índice
        }
    });
}

// Crear la matriz 10x10
crearMatriz(10, 10);