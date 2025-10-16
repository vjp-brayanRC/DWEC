function eliminarTodosLosParrafos() {
    let elementosP = document.getElementsByTagName("p");
    
    for (let i = elementosP.length - 1; i >= 0; i--) {
        elementosP[i].remove();
    }
}

eliminarTodosLosParrafos();
let elementoConClase = document.getElementsByClassName("parrafos")[0];
if (elementoConClase) {
    elementoConClase.remove();
}
