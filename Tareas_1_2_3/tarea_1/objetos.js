// Un disco de música
let discoMusica = {
    titulo: "The Eminem Show",
    autor: "Eminem",
    añoPublicacion: 2002,
    numVentas: 27000,
    getInfo() {
        return (
            "=== Disco de Música ===\n" +
            "Título: " + this.titulo + "\n" +
            "Autor: " + this.autor + "\n" +
            "Año de Publicación: " + this.añoPublicacion + "\n" +
            "Número de Ventas: " + this.numVentas
        );
    }
};
// pintamos el disco de música
console.log(discoMusica.getInfo());

// Una calle de una ciudad
let calle = {
    nombre: "La Batcueva",
    longitud: 1000,
    establecimientos: ["Arkan", "Nemesis", "Flash Point"],
    getInfo() {
        return (
            "=== Calle de la Ciudad ===\n" +
            "Nombre: " + this.nombre + "\n" +
            "Longitud: " + this.longitud + " metros\n" +
            "Establecimientos:\n " + this.establecimientos.join("\n ")
        );
    }
};
// pintamos la calle
console.log(calle.getInfo());

// Un coche
let coche = {
    modelo: "Batmóvil",
    dueño: {
        nombre: "Batman",
        edad: 45
    },
    marca: {
        tipo: "Mustang GT",
        añoCreacion: 1986
    },
    getInfo() {
        return (
            "=== Coche ===\n" +
            "Modelo: " + this.modelo + "\n" +
            "Marca: " + this.marca.tipo + " (Desde " + this.marca.añoCreacion + ")\n" +
            "Dueño:\n  Nombre: " + this.dueño.nombre + "\n  Edad: " + this.dueño.edad
        );
    }
};
//pintamos el coche
console.log(coche.getInfo());

let obraTeatro = {
    titulo: "El señor de los anillos",
    estreno: "1954",
    autor:{
        
    } 
}


