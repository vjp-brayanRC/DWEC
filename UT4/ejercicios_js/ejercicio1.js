let persona = {
    nombre: "Marta",
    edad: 23, // También se pueden poner los atributos como una cadena.
    trabajos: [ // Un array con los trabajos que tuvo:
        { 
            descripcion: "Payaso del circo ",
            duracion: "2003-2005"
        },
        {
            descripcion: "Sexador de pollos ",
            duracion: "2005-2019"
        },
    ],
};

persona.getInfo = function () {
        let cadenaDevuelta = "Mi nombre es " + this.nombre + " Edad " + this.edad + " años";

        for (let i = 0; i < this.trabajos.length; i++) {
        cadenaDevuelta += " Trabajo de " + this.trabajos[i].descripcion + this.trabajos[i].duracion;
        }
        return cadenaDevuelta;
        
    }

console.log(persona.getInfo());
