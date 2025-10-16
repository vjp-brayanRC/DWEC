// Crea un mapa que guarde Estudiantes (cadena con el nombre) → [notas de las asignaturas] (array de 6 posiciones con números). Al menos 4 estudiantes. (3 funciones):
// a) Pinta por pantalla el nombre de cada estudiante con su media académica. Crea la función mediaAritmetica que tenga como entrada enteros con cualquier número de elementos.
// b) Pinta al final quién es el estudiante con mejor media y cuál es esa media.
// c) Pinta los nombres de todos los estudiantes ordenados por su media.

const estudiantes = new Map([
    ['Ana', [7, 8, 9, 6, 5, 10]],
    ['Luis', [6, 5, 7, 8, 9, 6]],
    ['Marta', [10, 9, 8, 9, 10, 9]],
    ['Carlos', [5, 6, 5, 6, 5, 6]]
]);

function mediaAritmetica(...notas) {
    const suma = notas.reduce((acc, nota) => acc + nota, 0);
    return suma / notas.length;
}
function mostrarMedias() {
    let mejorEstudiante = '';
    let mejorMedia = 0;
    const medias = [];  

    estudiantes.forEach((notas, nombre) => {
        const media = mediaAritmetica(...notas);
        medias.push({ nombre, media });
        console.log(`Estudiante: ${nombre}, Media: ${media.toFixed(2)}`);
        if (media > mejorMedia) {
            mejorMedia = media;
            mejorEstudiante = nombre;
        }
    });
    console.log(`Mejor estudiante: ${mejorEstudiante} con una media de ${mejorMedia.toFixed(2)}`);

    medias.sort((a, b) => b.media - a.media);
    console.log('Estudiantes ordenados por media:');
    medias.forEach(e => console.log(`${e.nombre}: ${e.media.toFixed(2)}`));
}
mostrarMedias();