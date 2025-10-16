let num = 1;
let idInterval = setInterval(function() {
    console.log(num++);
    if (num < 10){
    clearInterval(idInterval);
    }
}, 1000);

function multiply(num1, num2){
    console.log(num1 * num2);

}
setTimeout(multiply, 3000, 5, 7);

// // Devuelve el elemento raiz
// document.documentElement

// // Devuelve el head de DOM como un element. Ejemplo de funcionamiento
// document.head

// // devuelve el body del DOM
// document.body

// //Devuelve el elemento con un id dicho
// document.getElementById(id)

// // Devuelven una estructura de elementos que no es un array
// // es un HTMLCollection
// document.getElementsByClassName("class")
// document.getElementsByNameement("html tag")


// es asignado un índice 0 Para obtener los datos de los objetos

console.log(element.childNodes);
// Lo que hace es mostrar en consola la colección de hijos 
// de tipo elemento

console.log(element.children);

console.log(element.parentNode);

console.log(element.nextSibling);

console.log(element.previousSiblig);

console.log(element.nextElementSibling);

console.log(element.previousElementSiblig);