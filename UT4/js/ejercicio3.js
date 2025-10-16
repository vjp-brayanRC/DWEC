// Definición de la clase miMoto
class ciclomotor {
    constructor(marca, aceleracion, desaceleracion) {
        this.numRuedas = 2;           // ← Corregido: nombre consistente
        this.velocidadMaxima = 120;
        this.velocidadActual = 0;
        this.marca = marca;
        this.aceleracion = aceleracion;
        this.desaceleracion = desaceleracion;
        this.encendida = false;
    }

// Metodos
    arrancar() {
        this.encendida = true;
        console.log("Se mete y gira la llave. ¡La moto arranca!");
    }

    acelerar() {
        if (this.encendida) {
            this.velocidadActual += this.aceleracion;
            if (this.velocidadActual > this.velocidadMaxima) {
                this.velocidadActual = this.velocidadMaxima;
            }
            console.log(`Velocidad actual: ${this.velocidadActual} km/h`);
        } else {
            console.log("Si la moto está apagada, primero tienes que encenderla.");
        }
    }

    frenar() {
        if (this.encendida) {
            this.velocidadActual -= this.desaceleracion;
            if (this.velocidadActual < 0) {
                this.velocidadActual = 0;
            }
            console.log(`Velocidad actual: ${this.velocidadActual} km/h`);
        } else {
            console.log("¡La moto está apagada! No puedes frenar.");
        }
    }

    mostrarInfo() {
        console.log(`
=== INFORMACIÓN DEL miMoto ===
Marca: ${this.marca}
Número de ruedas: ${this.numRuedas}
Velocidad máxima: ${this.velocidadMaxima} km/h
Velocidad actual: ${this.velocidadActual} km/h
Aceleración: ${this.aceleracion} km/h por aceleración
Desaceleración: ${this.desaceleracion} km/h por frenada
Encendida: ${this.encendida ? "Sí" : "No"}
        `);
    }
}

// Aquí empieza tu código de prueba:

let miMoto = new ciclomotor("Kawasaki", 70, 20);

console.log("LA MOTO INICIALMENTE:");
miMoto.mostrarInfo();

console.log("LA MOTO TRAS ACCELERAR:");
miMoto.acelerar(); //  No se puede acelerar una moto apagada
miMoto.mostrarInfo();

console.log("LA MOTO TRAS ARRANCARLA Y ACELERAR:");
miMoto.arrancar();
miMoto.acelerar();
miMoto.mostrarInfo();

console.log("VOLVEMOS A ACELERAR:");
miMoto.acelerar(); // No podrá pasar de 120 km/h
miMoto.mostrarInfo();

console.log("FRENAMOS LA MOTO:");
miMoto.frenar();
miMoto.mostrarInfo();

// Clase Motocross que es hija de ciclomotor
class Motocross extends ciclomotor {
    constructor(marca, aceleracion, desaceleracion) {
        // llamamos al constructor del padre (Ciclomotor)
        super(marca, aceleracion, desaceleracion);

        // Remplazamos la velocidad
        this.velocidadMaxima = 90;

        //añadimos el nuevo atributo
        this.marchaActual = 0;
    }

    // Sobre escribimos el metodo arrancar
    arrancar(){
        // Hacemos lo que hace el padre
        super.arrancar();
        console.log("Se levanta el pata cabra");

        }

        // Sobreescribimos acelerar para ajustar la marcha
        acelerar(){
            if (this.encendida) {
            // Guardamos la velocidad anterior para comparar luego
            let velocidadAnterior = this.velocidadActual;

            // Aceleramos como en el padre
            this.velocidadActual += this.aceleracion;

            // Limitamos a velocidad máxima
            if (this.velocidadActual > this.velocidadMaxima) {
                this.velocidadActual = this.velocidadMaxima;
            }
            // Ajustamos la marcha según la nueva velocidad
            this.actualizarMarcha();

            console.log(`Velocidad actual: ${this.velocidadActual} km/h`);
        } else {
            console.log("Si la moto está apagada, primero tienes que encenderla.");
        }
    }

     // Método auxiliar para actualizar la marcha según la velocidad
    actualizarMarcha() {
        if (this.velocidadActual === 0) {
            this.marchaActual = 0;
        } else if (this.velocidadActual <= 10) {
            this.marchaActual = 1;
        } else if (this.velocidadActual <= 30) {
            this.marchaActual = 2;
        } else {
            this.marchaActual = 3;
        }
    }

    // Sobrescribimos mostrarInfo() para incluir la marcha
    mostrarInfo() {
        console.log(`
=== INFORMACIÓN DEL MOTOCROSS ===
Marca: ${this.marca}
Número de ruedas: ${this.numRuedas}
Velocidad máxima: ${this.velocidadMaxima} km/h
Velocidad actual: ${this.velocidadActual} km/h
Aceleración: ${this.aceleracion} km/h por aceleración
Desaceleración: ${this.desaceleracion} km/h por frenada
Encendida: ${this.encendida ? "Sí" : "No"}
Marcha actual: ${this.marchaActual}
        `);
    }

}

// Probamos la clase 
console.log("\n\nPruebas de la moto de motocross\n\n")
let miMotocross = new Motocross("Honda", 10,5);
console.log("LA MOTO MOTOCROSS INICIALMENTE:");
miMotocross.mostrarInfo();

console.log("LA MOTO TRAS ACCELERAR:");
miMotocross.acelerar(); // No se puede acelerar una moto apagada
miMotocross.mostrarInfo();

console.log("LA MOTO TRAS ARRANCARLA Y ACELERAR:");
miMotocross.arrancar(); // Se levanta la pata de cabra
miMotocross.acelerar(); // La marcha cambia
miMotocross.mostrarInfo();

console.log("VOLVEMOS A ACELERAR:");
miMotocross.acelerar(); // La marcha cambia
miMotocross.mostrarInfo();

console.log("FRENAMOS LA MOTO:");
miMotocross.frenar();
miMotocross.mostrarInfo();

// creamos la clase scooter
class Scooter extends ciclomotor {
    constructor(marca) {
        // Llamamos al constructor del padre con valores fijos:
        // aceleracion = 25, desaceleracion = 15
        super(marca, 25, 15);
    }

    // Sobrescribimos el método arrancar()
    arrancar() {
        this.encendida = true;
        console.log("Se acerca la llave y se pulsa el botón, la moto arranca");
    }
}

// Creamos una scooter
let miScooter = new Scooter("Vespa");

console.log("SCOOTER INICIALMENTE:");
miScooter.mostrarInfo();

console.log("TRAS ACCELERAR SIN ARRANCAR:");
miScooter.acelerar(); // No hace nada
miScooter.mostrarInfo();

console.log("ARRANCAMOS LA SCOOTER:");
miScooter.arrancar(); // Muestra mensaje específico

console.log("ACELERAMOS UNA VEZ:");
miScooter.acelerar(); 
miScooter.mostrarInfo();

console.log("ACELERAMOS OTRA VEZ:");
miScooter.acelerar(); 
miScooter.mostrarInfo();

console.log("FRENAMOS:");
miScooter.frenar(); 
miScooter.mostrarInfo();