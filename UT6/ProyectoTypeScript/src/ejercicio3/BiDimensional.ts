// Definimos la interfaz con dos métodos
interface BiDimensional {
  getArea(): number; // Método que devuelve el área
  pintarInfo(): void; // Método que imprime información
}

// Clase Círculo que implementa la interfaz
class Circulo implements BiDimensional {
  private radio: number; // Único atributo de la clase

  // Constructor que recibe el radio
  constructor(radio: number) {
    this.radio = radio;
  }

  // Método que calcula el área del círculo
  getArea(): number {
    return Math.PI * this.radio * this.radio;
  }

  // Método que imprime la información del círculo
  pintarInfo(): void {
    console.log(`La figura es un círculo con radio de: ${this.radio}`);
  }
}

// Clase Rectángulo que implementa la interfaz
class Rectangulo implements BiDimensional {
  private ancho: number; // Lado ancho del rectángulo
  private alto: number;  // Lado alto del rectángulo

  // Constructor que recibe los lados
  constructor(ancho: number = 5, alto: number = 8) {
    this.ancho = ancho;
    this.alto = alto;
  }

  // Método que calcula el área del rectángulo
  getArea(): number {
    return this.ancho * this.alto;
  }

  // Método que imprime la información del rectángulo
  pintarInfo(): void {
    console.log(`La figura es un rectángulo con lados: ${this.ancho} y ${this.alto}`);
  }
}

// Clase Triángulo que implementa la interfaz
class Triangulo implements BiDimensional {
  private base: number;   // Base del triángulo
  private altura: number; // Altura del triángulo

  // Constructor que recibe base y altura
  constructor(base: number = 5, altura: number = 8) {
    this.base = base;
    this.altura = altura;
  }

  // Método que calcula el área del triángulo
  getArea(): number {
    return (this.base * this.altura) / 2;
  }

  // Método que imprime la información del triángulo
  pintarInfo(): void {
    console.log(`La figura es un triángulo con base: ${this.base} y altura: ${this.altura}`);
  }
}

// Ejemplo de uso con un arreglo de figuras
const figuras: BiDimensional[] = [
  new Circulo(3),
  new Rectangulo(4, 6),
  new Triangulo(3, 6)
];
// Hacemos una funcion que reciba por parametros un array de objetos
function pintarInfoFiguras(figuras: BiDimensional[]): void {
  figuras.forEach (f => {
  f.pintarInfo();
  console.log(f.getArea());
});
};

// Pintamos la salida por pantalla
pintarInfoFiguras(figuras);
