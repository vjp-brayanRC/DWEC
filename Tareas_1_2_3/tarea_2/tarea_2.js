class Trabajador {
  constructor(nombre, numHorasSemanales, salarioPorHora) {
    this.nombre = nombre;
    this.numHorasSemanales = numHorasSemanales;
    this.salarioPorHora = salarioPorHora;
  }

  getNombre() {
    return this.nombre;
  }

  getSaldoSemanal() {
    return this.numHorasSemanales * this.salarioPorHora;
  }

  pintarInfo() {
    console.log("Nombre:", this.nombre);
    console.log("Horas semanales:", this.numHorasSemanales);
    console.log("Salario por hora:", this.salarioPorHora);
    console.log("Salario semanal:", this.getSaldoSemanal());
  }
}

class Restaurante {
  constructor(nombre) {
    this.nombre = nombre;
    this.trabajadores = [];
  }

  anadirTrabajador(trabajador) {
    this.trabajadores.push(trabajador);
  }

  getPagosSemanales() {
    return this.trabajadores.reduce((total, trabajador) => {
      return total + trabajador.getSaldoSemanal();
    }, 0);
  }

  pintarInfo() {
    console.log("Restaurante:", this.nombre);
    this.trabajadores.forEach(trabajador => {
      trabajador.pintarInfo();
      console.log("----------");
    });
  }
}

let restaurante = new Restaurante("La tapería");
restaurante.pintarInfo(); //No hay trabajadores!

restaurante.anadirTrabajador(new Trabajador("Pedro", 40, 10));
restaurante.anadirTrabajador(new Trabajador("Laura", 35, 15));
restaurante.anadirTrabajador(new Trabajador("Marcos", 20, 10));
restaurante.pintarInfo(); //Ahora sí debe haberlos

console.log("Mantener a los trabajadores del restaurante cuesta: " + restaurante.getPagosSemanales());
