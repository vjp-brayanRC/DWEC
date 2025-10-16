// crea una funcion que se le pase un array esta funcion devolvera
// a) Cuantos elementos hay de tipo número y los pintara por pantalla
// b) Cuantos elementos hay de tipo cadena y los pintara por pantalla
// c) Cuantos elementos no son ni numero ni cadena y los pinta

function tiposArray(array) {
    let numArray = 0;
    let cadenaArray = 0;
    let contadorOtros = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            numArray++;
        } else if (typeof array[i] === "string") {
            cadenaArray++;
        } else {
            contadorOtros++;
        }
    }

    console.log(`Elementos tipo número: ${numArray}`);
    console.log(`Elementos tipo cadena: ${cadenaArray}`);
    console.log(`Elementos que no son ni número ni cadena: ${contadorOtros}`);
}

// Pruebas
tiposArray([1, 2, "hola", true, 3, "mundo", null, {}, undefined, 4]);
tiposArray(["uno", "dos", "tres"]);
tiposArray([10, 20, 30, 40]);
tiposArray([true, null, {}, [], "cadena", 123]);