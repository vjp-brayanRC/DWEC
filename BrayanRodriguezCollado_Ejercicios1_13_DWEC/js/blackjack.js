
//1. CONFIGURACIÓN DEL JUEGO

// Palos de la baraja.
const PALOS = ["Corazones", "Picas", "Tréboles", "Diamantes"];

// Valores de las cartas. 1 es el As.
const VALORES = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jota', 'Reina', 'Rey'
];

// Saca una carta aleatoria del mazo y la añade a la mano.
function pedirCarta(mazo, mano) {

    // 1. Elegir un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * mazo.length);

    // 2. Extraer la carta del mazo (la elimina y la devuelve)
    const cartaRobada = mazo.splice(indiceAleatorio, 1)[0];

    // 3. Añadir la carta a la mano
    mano.push(cartaRobada);
    
    return cartaRobada;
}

// 2. LÓGICA DEL MAZO Y LAS CARTAS

// Devuelve el mazo de 52 cartas. Cada carta es [Palo, Valor].
function construirMazo() {
    let mazo = [];

    // Bucle doble para crear las 52 cartas
    for (const palo of PALOS) {
        for (const valor of VALORES) {
            mazo.push([palo, valor]);
        }
    }

    console.log("Mazo creado con 52 cartas.");
    return mazo;
}

// Calcula el valor total de una mano, gestionando el As (1 u 11).
function calcularValorMano(cartas) {
    let valorTotal = 0;
    let numAses = 0;

    for (const carta of cartas) {
        const valorCarta = carta[1]; // El valor está en la segunda posición

        if (valorCarta === 'Jota' || valorCarta === 'Reina' || valorCarta === 'Rey') {
            valorTotal += 10;
        } else if (valorCarta === '1') {
            // As vale 11 inicialmente
            valorTotal += 11;
            numAses++;
        } else {
            // Valores numéricos
            valorTotal += parseInt(valorCarta);
        }
    }

    // Lógica para Ases: Cambiar 11 por 1 si nos pasamos de 21
    while (valorTotal > 21 && numAses > 0) {
        valorTotal -= 10; // 11 - 10 = 1
        numAses--;
    }

    return valorTotal;
}


//3. TURNOS DE JUEGO

// Gestiona el turno del jugador (pedir o plantarse).
function turnoJugador(mazo) {
    let cartasJugador = [];
    let valorJugador = 0;

    // Reparto inicial: 2 cartas
    pedirCarta(mazo, cartasJugador);
    pedirCarta(mazo, cartasJugador);
    valorJugador = calcularValorMano(cartasJugador);

    alert(`¡Comienza tu turno! Tienes: ${cartasJugador.map(c => c.join(' de ')).join(' y ')} (Valor: ${valorJugador})`);

    let seguirPidiendo = true;
    while (valorJugador <= 21 && seguirPidiendo) {
        // Usamos prompt para la decisión
        const decision = prompt(`Tu valor actual es: ${valorJugador}.\n¿Quieres PEDIR (P) o PLANTARTE (E)?`).toUpperCase();

        if (decision === 'P') {
            const nuevaCarta = pedirCarta(mazo, cartasJugador);
            valorJugador = calcularValorMano(cartasJugador);
            
            alert(`Has robado: ${nuevaCarta.join(' de ')}. Nuevo valor: ${valorJugador}.`);

            if (valorJugador > 21) {
                alert(`¡Te has pasado! Tu valor es ${valorJugador}.`);
            } else if (valorJugador === 21) {
                alert(`¡Blackjack! Te plantas automáticamente.`);
                seguirPidiendo = false;
            }

        } else if (decision === 'E') {
            alert(`Te has plantado con un valor de ${valorJugador}.`);
            seguirPidiendo = false;
        } else {
            alert("Opción no válida. Escribe 'P' para pedir o 'E' para plantarte.");
        }
    }

    return cartasJugador;
}

// Gestiona el turno automático de la máquina.
// Pide cartas hasta superar la puntuación del jugador (o pasarse de 21).
function turnoMaquina(mazo, valorJugador) {
    alert("--- Comienza el turno de la Maquina ---");

    let cartasMaquina = [];
    let valorMaquina = 0;

    // Reparto inicial
    pedirCarta(mazo, cartasMaquina);
    pedirCarta(mazo, cartasMaquina);
    valorMaquina = calcularValorMano(cartasMaquina);
    
    alert(`La máquina muestra su mano: ${cartasMaquina.map(c => c.join(' de ')).join(' y ')} (Valor: ${valorMaquina})`);

    // La máquina pide mientras no supere al jugador y no se pase de 21.
    while (valorMaquina <= 21 && valorMaquina <= valorJugador) {
        alert("La máquina pide otra carta...");
        const nuevaCarta = pedirCarta(mazo, cartasMaquina);
        valorMaquina = calcularValorMano(cartasMaquina);

        alert(`La máquina roba: ${nuevaCarta.join(' de ')}. Su valor actual es: ${valorMaquina}.`);

        if (valorMaquina > 21) {
            alert(`La máquina se ha pasado con ${valorMaquina} puntos.`);
        } else if (valorMaquina > valorJugador) {
            alert(`La máquina te ha superado con ${valorMaquina} puntos y se planta.`);
            break; // Se planta
        } else if (valorMaquina === 21) {
             alert(`Blackjack para la máquina. Se planta.`);
            break;
        }
    }

    return cartasMaquina;
}

// 4. RESULTADOS Y FUNCIÓN PRINCIPAL

// Muestra el resultado final del juego y determina el ganador.
function pintarInfoFinalJuego(cartasJugador, cartasMaquina) {
    const valorJugador = calcularValorMano(cartasJugador);
    const valorMaquina = calcularValorMano(cartasMaquina);

    console.log("\n*** RESULTADOS FINALES ***");
    console.log(`Jugador: ${cartasJugador.map(c => c.join(' de ')).join(', ')} (Total: ${valorJugador})`);
    console.log(`Maquina: ${cartasMaquina.map(c => c.join(' de ')).join(', ')} (Total: ${valorMaquina})`);
    
    let mensajeFinal = `\n--- Puntuación Final ---\nTu valor: ${valorJugador}\nValor de la Máquina: ${valorMaquina}\n\n`;

    // Si el jugador se pasó, ya está determinado.
    if (valorJugador > 21) {
        mensajeFinal += "Perdiste la partida. Te pasaste de 21.";
    } 
    // Jugador NO se pasó
    else {
        if (valorMaquina > 21) {
            // a) Máquina se pasa: Jugador gana.
            mensajeFinal += "La máquina se ha pasado. ¡HAS GANADO!";
        } else if (valorMaquina > valorJugador) {
            // b) Máquina supera al jugador (<= 21): Máquina gana.
            mensajeFinal += "La máquina te ha superado. Has perdido.";
        } else if (valorJugador > valorMaquina) {
            // Jugador tiene más puntos: Jugador gana.
            mensajeFinal += "¡HAS GANADO! Tu puntuación es mayor.";
        } else { // valorJugador === valorMaquina
            // Empate
            mensajeFinal += "EMPATE. Nadie gana ni pierde.";
        }
    }
    
    alert(mensajeFinal);
}