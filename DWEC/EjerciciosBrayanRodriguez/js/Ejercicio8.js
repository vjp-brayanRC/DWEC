// Crea una fumcion procesArray que realice los siguientes pasos:
// A) Checkea que todos los elementos son de tipo número
// si no, termina con alert
// B) En caso afirmativo el valor del array multiplicando cada elemento por 2
// (se debe almacenar en el mismo array)
// Por ultimo comprueba que todos los elementos son pares. si es asi muestra un mensaje 
// por pantalla de exito si no errror

procesArray([1, 2, 3]); {
    // A) Comprobar que todos son numeros
    if (!arr.every(elemento => typeof elemento === 'number')) {
        alert('Todos los elementos deben ser números');
        return;
    }

    // B) Multiplicar cada elemento por 2 y almacenar en el mismo array
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }

    // Comprobar si todos son pares
    if (arr.every(elemento => elemento % 2 === 0)) {
        alert('¡Éxito! Todos los elementos son pares.');
    } else {
        alert('Error: No todos los elementos son pares.');
    }
}
// Ejemplo de uso
procesArray([1, 2, 3]); // Debería mostrar: Éxito y [2, 4, 6]
procesArray([1, '2', 3]); // Debería mostrar: "Todos los elementos deben ser números"
procesArray([1, 3, 5]); // Debería mostrar: Error, no todos son pares