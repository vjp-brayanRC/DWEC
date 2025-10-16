let obj = {
    nombre: "Paco",       
    edad: 32,           
    getInfo () {  
        return "Mi nombres es " + this.nombre + "edad" + this.edad
    }
};

// Probamos el objeto
console.log(obj2.getInfo());     //Mostramos la info
console.log(obj2.nombre);        //Mostramos el nombre de paco 
console.log(obj2[nombre]);       //Pintamos el nombre utilizando la notacion asociativa

// Al ser una notacion asociativa podemos guardar el nombre de la propiedad en una variable
let prop2 = "nombre";
console.log(obj2[prop2]); // Ponemos el nombre, el nombre de la propiedad estaba guardado en la varible


// Parte del JSON
var persona = {
    nombre: "Marta",
    edad: 23, // También se pueden poner los atributos como una cadena.
    trabajos: [ // Un array con los trabajos que tuvo:
        {
            descripcion: "Payaso del circo",
            duracion: "2003-2005"
        },
        {
            descripcion: "Sexador de pollos",
            duracion: "2005-2019"
        },
    ],
    getInfo() { // This is new syntax in ES2015, in previous versions we should use getInfo: function()
        return "Mi nombre es " + this.nombre + " y tengo " + this.edad;
    }
};

console.log(persona.getInfo());
console.log(persona.trabajos[1].descripcion); // Pintamos la descripción