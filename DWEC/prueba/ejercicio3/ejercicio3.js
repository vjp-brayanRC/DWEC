function  cambiarATwitter(){
    // 1) Seleccione el nodo a.
    let nodoA = document.querySelector("a");

    // Lo modifique para que su id sea "aTwitter".
    nodoA.id = "aTwitter"; 

    // El enlace cambie a la dirección de twitter.
    nodoA.href = "https://www.twitter.com";

    // El contenido textual del nodo sea "Twitter".
    nodoA.textContent = "Twitter";

    // Compruebe que el nodo tiene el atributo "title" y solo en ese caso cambie el título a "Ir a Twitter".
    if (nodoA.hasAttribute("title")) {
        nodoA.title = "Ir a Twitter";
    } 
}

cambiarATwitter();