
function Senhacerta() {
    const senha = document.getElementById("teste").value;
    
    if (senha.length < 8) console.log("Senha não valida, com menos de 8 caracteres.");

    else if(senha.search(/[a-z]/) < 0) console.log("Senha não valida, sem minuscula.");

    else if(senha.search(/[A-Z]/) < 0) console.log("Senha não valida, sem maiuscula.");

    else if(senha.search(/[0-9]/) < 0) console.log("Senha não valida, sem numero.");

    else  console.log("Senha válida.");
}