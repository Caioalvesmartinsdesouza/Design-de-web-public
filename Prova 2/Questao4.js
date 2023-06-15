
function quadrado() {
    let numero = parseInt(document.getElementById('num').value);
        root = Math.sqrt(numero);
        if (root == Math.floor(root)) console.log("É um quadrado perfeito");
        else console.log("Não é um quadrado perfeito");
    }