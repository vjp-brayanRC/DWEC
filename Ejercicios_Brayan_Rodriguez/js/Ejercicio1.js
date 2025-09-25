// Crea funcion que reciba dos cadenas y pinte cual es la más corta
// si alguno de los argumentos no es una cadena devuelve un mensaje de error en su lugar. 
// probarlo con varias entradas directamente introducidas con codigo, las salidas se haran con console.log

//Variables
let cadena1 = prompt("Introduce una cadena")
let cadena2 = prompt("Introduce otra cadena"

// Funcion
)
function dosCadenas(cadena1, cadena2) {
    if (typeof cadena1 !== "string" || typeof cadena2 !== "string") {
        return "Error: los argumentos deben ser cadenas";
    }
    if (cadena1.length < cadena2.length) {
        return `La cadena más corta es: "${cadena1}"`;
    } else if (cadena2.length < cadena1.length) {
        return `La cadena más corta es: "${cadena2}"`;
    } else {
        return "Ambas cadenas tienen la misma longitud";
    }
}

// Mostrar resultado en consola
console.log(dosCadenas(cadena1, cadena2));