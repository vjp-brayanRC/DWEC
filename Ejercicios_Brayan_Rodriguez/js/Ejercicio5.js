// Crea una funcion que dado un array lo ordene 
// (Mira funciones predefinidas) intenta haer
// Intenta hacer un método para ordenarlo por 
// ti mismo considerando que el array
// siempre incluyese números (Es decir sin utilizar short)

function ordenar(array) {

    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length-1; j++) {
            
            if (array[j] > array[j + 1]) {
            
            let box = array[j];
            
            array[j] = array[j + 1];
            array[j + 1] = box;
            }
        }
    }
    return array;
}
// Prueba
console.log(ordenar([5, 2, 9, 1, 3])); // [1, 2, 3, 5, 9]