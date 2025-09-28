// Crea una función que, dada un array, elimine sus repetidos 
// y los pinte por pantalla qué elementos estaban repetidos.

function eliminarRepetidos(arr) {
    const elementosRepetidos = arr.filter((item, index) => arr.indexOf(item) !== index);
    const sinRepetidos = [...new Set(arr)];
    console.log(`Elementos repetidos: ${[...new Set(elementosRepetidos)].join(', ')}`);
    console.log(`Array sin repetidos: ${sinRepetidos.join(', ')}`);
}
// Ejemplo de uso
eliminarRepetidos([1, 2, 3, 4, 5, 1, 2, 3, 'a', 'b', 'a', 'c', 'd', 'e', 'b']);
