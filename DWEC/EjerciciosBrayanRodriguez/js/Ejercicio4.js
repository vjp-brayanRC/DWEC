// Crea una función que reciba 3 parámetros con valores por 
// defecto (producto → "Producto genérico", precio → 100, 
// impuestos → 21). La función convertiría las entradas a 
// cadena, entero y entero. Si no se pudieran convertir las 
// entradas, devolvería los valores por defecto. 
// Prueba esta función varias veces, usando valores y poniendo 
// valores incorrectos.

function crearProducto(producto = "Producto genérico", precio = 100, impuestos = 21) {
    // Valores por defecto
    const Producto = "Producto genérico";
    const Precio = 100;
    const Impuestos = 21;

    // Conversión de producto a string
    if (producto === null || producto === undefined || producto === "") {
        producto = Producto;
    } else {
        producto = String(producto);
    }

    // Conversión de precio a entero
    const precioNum = parseInt(precio);
    precio = isNaN(precioNum) ? Precio : precioNum;

    // Conversión de impuestos a entero
    const impuestosNum = parseInt(impuestos);
    impuestos = isNaN(impuestosNum) ? Impuestos : impuestosNum;

    return `Producto: ${producto}, Precio: ${precio}, Impuestos: ${impuestos}%`;
}

// 🔹 Pruebas 
console.log(crearProducto());

console.log(crearProducto("Camiseta", "250", "18"));

console.log(crearProducto(123, "hola", 30.5));

console.log(crearProducto(null, "50", "xyz"));

