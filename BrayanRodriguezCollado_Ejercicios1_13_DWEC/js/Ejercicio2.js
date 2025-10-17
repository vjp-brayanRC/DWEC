// Crea una funcion que reciba dos cadenas. Comprueba que ambos argumentos son cadenas 
// y en caso afirmativo pintara mediante console.log 
// si un acadena es igual a la otra del reves prueba con varias entradas

//Variables
let cadena1 = prompt("Introduce una cadena")
let cadena2 = prompt("Introduce otra cadena"

// Funcion
)
function dosCadenas(cadena1, cadena2) {

    let palindromo = cadena2.split("").reverse().join("");

    if (typeof cadena1 !== "string" || typeof cadena2 !== "string") {
        return "Error: los argumentos deben ser cadenas";
    }
    if (cadena1 === palindromo) {
        return `Son palindromos "${cadena1}"`;
    } else {
        return "No son palindromos";
    }
}

// Mostrar resultado en consola
console.log(dosCadenas(cadena1, cadena2));