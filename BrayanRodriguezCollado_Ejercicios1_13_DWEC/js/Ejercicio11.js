// Crea una función que reciba un número indeterminado de parámetros. 
// Para aquellos que sean números, agrúpalos en un array y pínthalos por 
// pantalla sólo si son pares. Prueba con diferentes entradas.

function mostrarPares(...numeros) {
    // Filtrar solo los números pares
    const pares = numeros.filter(n => typeof n === 'number' && n % 2 === 0);
    // Mostrar los números pares
    if (pares.length > 0) {
        alert(`Números pares: ${pares.join(', ')}`);
    } else {
        alert('No hay números pares entre los argumentos proporcionados.');
    }
}
// Ejemplo de uso
mostrarPares(1, 2, 3, 4, 'cinco', 6, 7.5, 8, 'nueve', 10);