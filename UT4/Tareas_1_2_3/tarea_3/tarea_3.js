// Creamos un nuevo objeto XMLHttpRequest para hacer la petición HTTP
let peticion = new XMLHttpRequest();

// Añadimos un listener que ejecutará la función 'procesarfuncion' cada vez que cambie el estado de la petición
peticion.addEventListener("readystatechange", procesarfuncion);

// Abrimos la petición de tipo GET al endpoint de posts del sitio JSONPlaceholder
peticion.open("GET", "https://jsonplaceholder.typicode.com/posts");

// Enviamos la petición
peticion.send();

// Función que se ejecuta cada vez que cambia el estado de la petición
function procesarfuncion() {
    // Verificamos si la petición ha terminado (readyState 4) y fue exitosa (status 200)
    if (peticion.readyState === 4 && peticion.status === 200) {
        // Convertimos la respuesta JSON en un objeto JavaScript
        let resultado = JSON.parse(peticion.responseText);
        // Recorremos todos los posts recibidos
        resultado.forEach(post => {
            // Creamos la estructura visual para cada post
            crearPost(post);
        });
    }
}

// Función para crear y mostrar la información de un post
function crearPost(post) {
    // Creamos un contenedor principal para el post
    let container = document.createElement("div");
    container.classList.add("container");

    // Creamos el elemento para el título
    let titulo = document.createElement("div");
    titulo.classList.add("titulo");
    titulo.textContent = `TITULO: ${post.title}`;

    // Creamos el elemento para el contenido del post
    let contenido = document.createElement("div");
    contenido.classList.add("contenido");
    contenido.textContent = `Contenido: ${post.body}`;

    // Contenedor para los botones
    let botones = document.createElement("div");
    botones.classList.add("botones");

    // Botón para mostrar información del usuario del post
    let btnUsuario = document.createElement("button");
    btnUsuario.textContent = "Usuario del Post";

    // Botón para mostrar comentarios del post
    let btnComentarios = document.createElement("button");
    btnComentarios.textContent = "Mostrar comentarios";

    // Añadimos los botones al contenedor de botones
    botones.appendChild(btnUsuario);
    botones.appendChild(btnComentarios);

    // Div donde se mostrará la información del usuario
    let usuarioDiv = document.createElement("div");
    usuarioDiv.classList.add("usuario");
    usuarioDiv.textContent = "Usuario del Post: ";

    // Div donde se mostrarán los comentarios
    let comentarios = document.createElement("div");
    comentarios.classList.add("comentarios");
    comentarios.textContent = "Comentarios:";

    // Añadimos todos los elementos creados al contenedor principal
    container.appendChild(titulo);
    container.appendChild(contenido);
    container.appendChild(botones);
    container.appendChild(usuarioDiv);
    container.appendChild(comentarios);

    // Finalmente añadimos el contenedor del post al cuerpo del documento
    document.body.appendChild(container);

    // Evento al hacer clic en el botón de "Usuario del Post"
    btnUsuario.addEventListener("click", function () {
        // Llamamos a la función que obtiene el usuario
        mostrarUsuario(post.userId, usuarioDiv);
    });

    // Evento al hacer clic en el botón de "Mostrar comentarios"
    btnComentarios.addEventListener("click", function () {
        // Llamamos a la función que obtiene los comentarios
        mostrarComentarios(post.id, comentarios);
    });
}

// Función que obtiene y muestra los datos del usuario según su ID
function mostrarUsuario(userId, usuarioDiv) {
    // Nueva petición para obtener los datos del usuario
    let peticionUsuario = new XMLHttpRequest();
    peticionUsuario.onreadystatechange = function () {
        // Cuando la petición finalice correctamente
        if (peticionUsuario.readyState === 4 && peticionUsuario.status === 200) {
            // Convertimos la respuesta en un objeto JavaScript
            let usuario = JSON.parse(peticionUsuario.responseText);
            // Mostramos el nombre del usuario en el div correspondiente
            usuarioDiv.textContent = `Usuario del Post: ${usuario.name}`;
        }
    };
    // Petición GET a la URL con el id del usuario
    peticionUsuario.open("GET", `https://jsonplaceholder.typicode.com/users/${userId}`);
    // Enviamos la petición
    peticionUsuario.send();
}

// Función que obtiene y muestra los comentarios del post
function mostrarComentarios(postId, comentariosDiv) {
    // Nueva petición para los comentarios del post
    let peticionComentarios = new XMLHttpRequest();
    peticionComentarios.onreadystatechange = function () {
        // Cuando la petición finalice correctamente
        if (peticionComentarios.readyState === 4 && peticionComentarios.status === 200) {
            // Convertimos la respuesta JSON en un array de comentarios
            let comentarios = JSON.parse(peticionComentarios.responseText);
            // Limpiamos el div e insertamos un título
            comentariosDiv.innerHTML = "<strong>Comentarios:</strong><br>";
            // Recorremos cada comentario y lo mostramos
            comentarios.forEach(com => {
                let p = document.createElement("p");
                p.textContent = com.name;
                comentariosDiv.appendChild(p);
            });
        }
    };
    // Petición GET con el id del post
    peticionComentarios.open("GET", `https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    // Enviamos la petición
    peticionComentarios.send();
}

// algunas partes de código estan extraidas de Copilot asi como el codigo comentado, por que no entendia muy bien el ejercicio