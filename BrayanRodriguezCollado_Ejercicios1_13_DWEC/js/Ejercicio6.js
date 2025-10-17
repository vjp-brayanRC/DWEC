// Crea un array con 4 valores y realiza los siguientes pasos
// 1) Añade dos elementos al inicio
// 2) Añade 3 más al final
// 3) Elimina las posiciones 3, 4, 5
// 4) inserta 2 elementos antes del ultimo elemeneto
// En cada cambio muestra los elementos del array separados por un #
// no utilices bucles, utiliza funciones predefinadas de arrays


let array = [10, 11, 12, 13]; // inicial
console.log(array.join('#')); 

// 1) 
array.unshift(1, 2);
console.log("Añade dos elementos al inicio " + array.join('#')); 

// 2) l
array.push(15, 16, 17);
console.log("Añade 3 más al final " + array.join('#')); 

// 3) 
array.splice(2, 3);
console.log("Elimina las posiciones 3, 4, 5  " + array.join('#')); 

// 4) 
console.log("Inserta 2 elementos antes del último elemento " )
array.splice(array.length - 1, 0, 99, 88);
console.log(array.join('#')); 
