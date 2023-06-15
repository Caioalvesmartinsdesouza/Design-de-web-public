
function Numfatorial() {
    let numero = parseInt(document.getElementById('num').value);
    let fatorial = 0;
    if (numero > 10) console.log("Numero invalido maior que 10");
    else if (numero < 1) console.log("Numero invalido menor que 1");
    else {
        for (let i = 1; i <= numero; i++) fatorial = fatorial + i;
        console.log(fatorial);
    }
}