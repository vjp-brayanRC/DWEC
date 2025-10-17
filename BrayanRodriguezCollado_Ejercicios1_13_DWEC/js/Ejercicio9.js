// Crea un programa en el que existan 3 objetos de tipo PlatoCocina, que tengan los atributos: nombrePlato(cadena), duracionMinutos(un número) y dificultad(un número).
// Almacena en un mapa la relación de cada plato con un array que guarde los ingredientes que se utilizan como cadenas.

// Crea una función que pinte el mapa (platos->ingredientes):
// let mapaPlatos = new Map();
// mapaPlatos.set(new PlatoCocina(...));
// mapaPlatos.set(new PlatoCocina(...));
// mapaPlatos.set(new PlatoCocina(...));
  
class PlatoCocina {
    constructor(nombrePlato, duracionMinutos, dificultad) {
        this.nombrePlato = nombrePlato;
        this.duracionMinutos = duracionMinutos;
        this.dificultad = dificultad;
    }       
    toString() {
        return `${this.nombrePlato} (${this.duracionMinutos} min, dificultad ${this.dificultad})`;
    }
}
let mapaPlatos = new Map();
mapaPlatos.set(new PlatoCocina("Paella", 60, 4), ["Arroz", "Pollo", "Conejo", "Verduras", "Azafrán"]);
mapaPlatos.set(new PlatoCocina("Tortilla de patatas", 30, 2), ["Huevos", "Patatas", "Cebolla", "Aceite", "Sal"]);
mapaPlatos.set(new PlatoCocina("Ensalada", 15, 1), ["Lechuga", "Tomate", "Pepino", "Aceite", "Vinagre"]);   
function pintarMapa(mapa) {
    for (let [plato, ingredientes] of mapa) {
        console.log(`${plato.toString()}: ${ingredientes.join(", ")}`);
    }
}
pintarMapa(mapaPlatos);

