document.getElementById('cargarBtn').addEventListener('click', function() {

let peticion = new XMLHttpRequest();
peticion.open( 'GET', 'https://jsonplaceholder.typicode.com/posts', true );
peticion.send();
});