window.addEventListener("DOMContentLoaded", function () {
    let div = document.querySelector("div");

// Ancho maximo
div.style.width = "200px";

// alto maximo
div.style.height = "200px";

// color de fondo
div.style.backgroundColor = "#9e9e9e";

// color de letra blanco
div.style.color = "blue";

// color de letra blanco
div.style.border = " 1px solid red";

window.addEventListener("resize", () => {
    div.textContent = `${window.innerHeight}, ${window.innerHeight}`;

});
});