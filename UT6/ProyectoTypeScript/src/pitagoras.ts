class Punto2D {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    // Getter de x
    public get x(): number {
        return this._x;
    }

    // Getter de y
    public get y(): number {
        return this._y;
    }

    // Setter de x
    public set x(value: number) {
        this._x = value;
    }

    // Setter de y
    public set y(value: number) {
        this._y = value;
    }

    // Método toString sobrescrito
    public toString(): string {
        return `Punto2D(x: ${this._x}, y: ${this._y})`;
    }
}

// Inicialización de los puntos
const punto1 = new Punto2D(5, 8);
const punto2 = new Punto2D(2, 3);

// Función para calcular la distancia entre dos puntos
let calcularDistancia: (p1: Punto2D, p2: Punto2D) => number;

calcularDistancia = (p1, p2) => {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
};

// Pruebas
console.log(punto1.toString()); // Punto2D(x: 5, y: 8)
console.log(punto2.toString()); // Punto2D(x: 2, y: 3)

const distancia = calcularDistancia(punto1, punto2);
console.log(`Distancia entre punto1 y punto2: ${distancia}`);
