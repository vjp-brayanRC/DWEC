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
            "Dueño:\n  Nombre: " + this.dueño.nombre + "\n" +
            "  Edad: " + this.dueño.edad
        );
    }
};
//pintamos el coche
console.log(coche.getInfo());


// Creacion de el objeto teatro
let obraTeatro = {
    titulo: "El señor de los anillos",
    estreno: "2001",
    director: {
        nombre: "Peter",
        apellido: "Jackson",
        nacimiento: "1961",
        obras: [ "El señor de los anillos", "El Hobbit", "King kong"]
    },
    actores:[
       { nombre: "Vigo Mortensen", edad: 63, representaciones:45},
       { nombre: "Martin Freeman", edad: 54, representaciones:30 },
       { nombre: "Ian McKellen", edad: 81, representaciones:50 }
    ],
    getInfo() {
        let info = "=== Obra de Teatro ===\n";
        info += "Título: " + this.titulo + "\n";
        info += "Fecha de Estreno: " + this.estreno + "\n\n";

        info += "--- Director ---\n";
        info += "Nombre: " + this.director.nombre + " " + this.director.apellido + "\n";
        info += "Año de nacimiento: " + this.director.nacimiento + "\n";
        info += "Obras previas:\n";
        this.director.obras.forEach((obra, index) => {
            info += "  " + (index + 1) + ". " + obra + "\n";
        });

        info += "\n--- Actores ---\n";
        this.actores.forEach((actor, index) => {
            info += "Actor " + (index + 1) + ":\n";
            info += "  Nombre: " + actor.nombre + "\n";
            info += "  Edad: " + actor.edad + "\n";
            info += "  Representaciones: " + actor.representaciones + "\n";
        });

        return info;
    }
};

// Mostramos por consola
console.log(obraTeatro.getInfo());