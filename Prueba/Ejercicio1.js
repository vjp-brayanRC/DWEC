/*alert("Bienvenido"); // esto es una alerta

let nombre = prompt("Cual es tu nombre?"); // esto es un prompt
let mensaje = "Bienvenido " + nombre;       // definimos el mensaje

document.getElementById("bienvenida").textContent = mensaje; // lo mostramos en h1
console.log("Bienvenido"+ nombre); // esto es un console.log*/

/*// Prueba 3
let nombre = ["Juan", "Pedro", "Maria"]; 
function saludar() { 
    console.log("Bienvenido "+ nombre) 

    return nombre;
} 
    
    saludar();*/

/*// Prueba 4
let functionSumarUnoMas = function(valor) {
    return ++valor;
};

console.log(functionSumarUnoMas(5));*/

// Prueba 6

// Procesador para par (suma simple con arrow function)
let procesadorPar = (arg1, arg2) => arg1 + arg2;
console.log(procesadorPar(3, 2));  // Salida: 5

// Función lambda con bloque explícito
let funcionLambda = (arg1, arg2) => { return arg1 + arg2; };
console.log(funcionLambda(3, 2));  // Salida: 5

// Ejemplo algo más útil: función que recibe otra función como parámetro
let ejemploAlgoMasUtil = (arg1, arg2, funcionProcesadora) => {
    return funcionProcesadora(arg1, arg2);
};

// Versión con function tradicional
let procesadorParTrad = function(arg1, arg2, funcionProcesadora) {
    return funcionProcesadora(arg1, arg2);
};

/* Podemos escribir lógica dentro de la función lambda pudiendo */
/* Siempre debemos devolver el valor con return. */
console.log("Esta vez procesamos valor función de");  // Comentario ajustado

// Ejemplo: procesar devolviendo solo n1
let res = procesadorParTrad(3, 2, (n1, n2) => { return n1; });
console.log(res);  // Salida: 3

/* Ahora escribimos operadores condicionales ternarios sin indicar {} */
let res2 = procesadorParTrad(3, 2, (n1, n2) => n1 * n2);
console.log(res2);  // Salida: 6 (multiplicación como ejemplo de operador)

// Ejemplo con tres parámetros
let procesarTres = (arg1, arg2, arg3, funcionProcesadora) => {
    return funcionProcesadora(arg1, arg2, arg3);
}
let res3 = procesarTres(3, 2, 4, (n1, n2, n3) => n1 + n2 + n3);
console.log(res3);  // Salida: 9 (suma de tres números)

// devuel el mayor
let res4 = procesarTres(3, 2, 4, (n1, n2, n3) => {
    if (n1 >= n2 && n1 >= n3) {
        return n1;  // n1 es el mayor
    }   else if (n2 >= n1 && n2 >= n3) {
        return n2;  // n2 es el mayor
    }   else {
        return n3;  // n3 es el mayor
    }
});
console.log(res4);  // Salida: 4 (el mayor de los tres números)

// devolver el menor
let res5 = procesarTres(3, 2, 4, (n1, n2, n3) => {
    if (n1 <= n2 && n1 <= n3) {
        return n1;  // n1 es el mayor
    }   else if (n2 <= n1 && n2 <= n3) {
        return n2;  // n2 es el mayor
    }   else {
        return n3;  // n3 es el mayor
    }
});
console.log(res4);  // Salida: 2 (el menor de los tres números)

// devolver la suma del primero y el tercero y dividir el resultado del ultimo
let res6 = procesarTres(3, 2, 4, (n1, n2, n3) => (n1 + n3) / n2);
console.log(res5);  // Salida: 3.5 ((3 + 4) / 2) 

