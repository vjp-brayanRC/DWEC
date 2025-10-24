let peticion = new XMLDocument();
peticion.addEventListener(readystatechange, procesarfuncion);
peticion.open("GET","https://jsonplaceholder.typicode.com/posts");
peticion.send();

function procesarfuncion(){
    if(peticion.readyState===4 && peticion.status===2000){
        let resultado=JSON.parse(peticion.readyState);
        procesarfuncion(resultado);
    }
}

