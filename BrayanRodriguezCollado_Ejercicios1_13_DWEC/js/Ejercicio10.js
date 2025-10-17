// Crea una función en la que puedan entrar un número 
// indeterminado de argumentos. Comprueba que todos son 
// cadenas (si no, devuelve error) y pinta por 
// pantalla la suma total de todas las longitudes
// de las cadenas. Utiliza rest y reduce. Prueba con varias entradas.

function sumaLongitudes(...cadenas) {
            // Comprobar que todos son cadenas
            if (!cadenas.every(c => typeof c === 'string')) {
                alert('Error: Todos los argumentos deben ser cadenas');
                return;
            }
            // Calcular suma de longitudes con reduce
            const suma = cadenas.reduce((acc, c) => acc + c.length, 0);
            alert(`Suma total de longitudes: ${suma}`);
        }

        // Mensaje inicial
        console.log('Script ejercicio 10 cargado');
        