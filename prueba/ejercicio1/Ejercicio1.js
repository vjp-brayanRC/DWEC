let primerli = document.getElementById("elemento1");
do {
    alert(primerli.nodeName);
    alert(primerli.nodeType);
    alert(primerli.nodeValue);
    alert(primerli.textContent);
} while (primerli = primerli.nextElementSibling);