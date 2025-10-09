 // 1, 2, 3
 let primerP = document.querySelector("a");
 let titulo = document.querySelector("div > a");
 let enlace = document.querySelector("#div1 > p > a");
 let elemento2 = document.querySelectorAll("a")[1];
 
 
console.log(primerP.title);
console.log(titulo);
console.log(enlace.textContent);
console.log(elemento2.getAttribute("href"));

// 8
const spidermanElement = document.querySelector("a[title=Spiderman]");


let elemento = spidermanElement;

while(elemento = spidermanElement){
    console.log(elemento.title);
}

elemento = spidermanElement;

while(elemento = spidermanElement){
    console.log(elemento.title);
}

