
function primo() {
    let numero = parseInt(document.getElementById('num').value);
    let divisores = 0;
    if (numero > 1000) console.log("Numero invalido maior que 1000");
    else if (numero < 1) console.log("Numero invalido menor que 1");
    else {
        for (let count = 1; count <= numero; count++) if (numero % count == 0) divisores++;
        if (divisores == 2) console.log("É primo");
        else console.log("Não é primo");
    }
}