let obj = new Object();
obj.nombre = "Pedro";       //Añadimos la propiedad nombre, que no existía
obj["edad"] = 41;           //Añadimos la propiedad edad, que no existía (en notacion array)
obj.getInfo = function(){   //Añadimos un métedo al objeto, que muestra su info
    return "Mi nombres es " + this.nombre + "edad" + this.edad
};

// Probamos el objeto
console.log(obj.getInfo());     //Mostramos la info
console.log(obj.nombre);        //Mostramos el nombre de Pedro  
console.log(obj[nombre]);       //Pintamos el nombre utilizando la notacion asociativa

// Al ser una notacion asociativa podemos guardar el nombre de la propiedad en una variable
let prop = "nombre";
console.log(obj[prop]); // Ponemos el nombre, el nombre de la propiedad estaba guardado en la varible
